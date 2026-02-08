'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Smartphone, Tablet, RefreshCw, ExternalLink } from 'lucide-react';

interface PreviewPaneProps {
  htmlContent?: string;
  cssContent?: string;
  jsContent?: string;
}

type DeviceSize = 'desktop' | 'tablet' | 'mobile';

export function PreviewPane({
  htmlContent = '<html>\n  <head>\n    <title>My Website</title>\n    <style>body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; background: #f5f5f5; } h1 { color: #333; }</style>\n  </head>\n  <body>\n    <h1>Welcome to Aero</h1>\n    <p>Your AI-generated website will appear here.</p>\n  </body>\n</html>',
  cssContent = '',
  jsContent = '',
}: PreviewPaneProps) {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>('desktop');
  const [refreshKey, setRefreshKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const deviceSizes = {
    desktop: { width: '100%', height: '100%', label: 'Desktop' },
    tablet: { width: '768px', height: '100%', label: 'Tablet' },
    mobile: { width: '375px', height: '100%', label: 'Mobile' },
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDoc) {
        const fullHtml = htmlContent.includes('<html>')
          ? htmlContent
          : `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${cssContent}</style>
</head>
<body>
  ${htmlContent}
  <script>${jsContent}</script>
</body>
</html>
          `;
        
        iframeDoc.open();
        iframeDoc.write(fullHtml);
        iframeDoc.close();
      }
    }
  }, [htmlContent, cssContent, jsContent, refreshKey]);

  return (
    <div className="flex h-full flex-col bg-background border-l">
      <div className="border-b p-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button
            variant={deviceSize === 'desktop' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setDeviceSize('desktop')}
            title="Desktop view"
          >
            <Monitor className="h-4 w-4" />
          </Button>
          <Button
            variant={deviceSize === 'tablet' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setDeviceSize('tablet')}
            title="Tablet view"
          >
            <Tablet className="h-4 w-4" />
          </Button>
          <Button
            variant={deviceSize === 'mobile' ? 'default' : 'ghost'}
            size="icon"
            onClick={() => setDeviceSize('mobile')}
            title="Mobile view"
          >
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRefresh}
            title="Refresh preview"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Open in new tab"
            onClick={() => {
              const newWindow = window.open('', '_blank');
              if (newWindow) {
                newWindow.document.write(htmlContent);
                newWindow.document.close();
              }
            }}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-muted/30 p-4 overflow-auto flex justify-center items-start">
        <div
          className="bg-white shadow-lg transition-all duration-300"
          style={{
            width: deviceSizes[deviceSize].width,
            height: deviceSizes[deviceSize].height,
            maxWidth: '100%',
          }}
        >
          <iframe
            ref={iframeRef}
            key={refreshKey}
            className="w-full h-full border-0"
            title="Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>

      <div className="border-t p-2 bg-muted/50">
        <p className="text-xs text-muted-foreground text-center">
          Live Preview • {deviceSizes[deviceSize].label}
        </p>
      </div>
    </div>
  );
}
