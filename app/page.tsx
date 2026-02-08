'use client';

import { ChatSidebar } from '@/components/chat-sidebar';
import { EditorPane } from '@/components/editor-pane';
import { PreviewPane } from '@/components/preview-pane';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
          <ChatSidebar />
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={35} minSize={25}>
          <EditorPane />
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        <ResizablePanel defaultSize={40} minSize={30}>
          <PreviewPane />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
