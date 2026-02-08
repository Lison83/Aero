'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileCode2, FileJson, Palette } from 'lucide-react';

interface EditorPaneProps {
  htmlContent?: string;
  cssContent?: string;
  jsContent?: string;
}

export function EditorPane({
  htmlContent = '<html>\n  <head>\n    <title>My Website</title>\n  </head>\n  <body>\n    <h1>Welcome to Aero</h1>\n    <p>Your AI-generated website will appear here.</p>\n  </body>\n</html>',
  cssContent = 'body {\n  font-family: system-ui, sans-serif;\n  margin: 0;\n  padding: 2rem;\n  background: #f5f5f5;\n}\n\nh1 {\n  color: #333;\n}',
  jsContent = '// JavaScript code will appear here\nconsole.log("Aero is ready!");',
}: EditorPaneProps) {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="border-b">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent h-12">
            <TabsTrigger value="html" className="gap-2">
              <FileCode2 className="h-4 w-4" />
              HTML
            </TabsTrigger>
            <TabsTrigger value="css" className="gap-2">
              <Palette className="h-4 w-4" />
              CSS
            </TabsTrigger>
            <TabsTrigger value="js" className="gap-2">
              <FileJson className="h-4 w-4" />
              JavaScript
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 font-mono text-sm">
          {activeTab === 'html' && (
            <pre className="whitespace-pre-wrap">
              <code>{htmlContent}</code>
            </pre>
          )}
          {activeTab === 'css' && (
            <pre className="whitespace-pre-wrap">
              <code>{cssContent}</code>
            </pre>
          )}
          {activeTab === 'js' && (
            <pre className="whitespace-pre-wrap">
              <code>{jsContent}</code>
            </pre>
          )}
        </div>
      </ScrollArea>

      <div className="border-t p-2 bg-muted/50">
        <p className="text-xs text-muted-foreground text-center">
          Code editor • Read-only (edit mode coming soon)
        </p>
      </div>
    </div>
  );
}
