"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { TopHeader } from "@/components/header/top-header"
import { PrimarySidebar } from "@/components/sidebar/primary-sidebar"
import { SecondarySidebar } from "@/components/sidebar/secondary-sidebar"
import { MainContent } from "@/components/main/main-content"
import { ChatPanel } from "@/components/chat/chat-panel"
import { ClientOnly } from "@/components/client-only"
import { ResizeHandle } from "@/components/ui/resize-handle"

interface VibeCoderLayoutProps {
  children?: React.ReactNode
  className?: string
}

export function VibeCoderLayout({ children, className }: VibeCoderLayoutProps) {
  const [activeModule, setActiveModule] = useState("explorer")
  const [isSecondarySidebarCollapsed, setIsSecondarySidebarCollapsed] = useState(false)
  const [isChatPanelCollapsed, setIsChatPanelCollapsed] = useState(false)
  const [isPrimarySidebarExpanded, setIsPrimarySidebarExpanded] = useState(false)
  const [secondarySidebarWidth, setSecondarySidebarWidth] = useState(280)
  const [chatPanelWidth, setChatPanelWidth] = useState(380)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [terminalHeight, setTerminalHeight] = useState(300)

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId)
    
    // Auto-expand secondary sidebar when switching modules
    if (isSecondarySidebarCollapsed) {
      setIsSecondarySidebarCollapsed(false)
    }
  }

  const toggleSecondarySidebar = () => {
    setIsSecondarySidebarCollapsed(!isSecondarySidebarCollapsed)
  }

  const togglePrimarySidebar = () => {
    setIsPrimarySidebarExpanded(!isPrimarySidebarExpanded)
  }

  const toggleChatPanel = () => {
    setIsChatPanelCollapsed(!isChatPanelCollapsed)
  }

  const handleSecondarySidebarResize = (delta: number) => {
    setSecondarySidebarWidth(prev => {
      const newWidth = prev + delta
      return Math.max(180, Math.min(500, newWidth))
    })
  }

  const handleChatPanelResize = (delta: number) => {
    setChatPanelWidth(prev => {
      const newWidth = prev - delta // Chat panel resizes from the left
      return Math.max(280, Math.min(600, newWidth))
    })
  }

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen)
  }

  const handleTerminalResize = (delta: number) => {
    setTerminalHeight(prev => Math.max(150, Math.min(500, prev - delta)))
  }

  return (
    <ClientOnly fallback={
      <div className="vibecoder-layout">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-lg gradient-luxury border-thick border-luxury-gold flex items-center justify-center shadow-lg animate-pulse">
              <div className="w-6 h-6 text-white">⚡</div>
            </div>
            <div className="text-sm text-muted-foreground">Loading VibeCODER...</div>
          </div>
        </div>
      </div>
    }>
      <div className={cn("vibecoder-layout", className)}>
        {/* Top Header */}
        <TopHeader />

        {/* Main Layout */}
        <div className="vibecoder-main">
          {/* Primary Sidebar */}
          <PrimarySidebar
            activeItem={activeModule}
            onItemSelect={handleModuleSelect}
            isExpanded={isPrimarySidebarExpanded}
            onToggleExpanded={togglePrimarySidebar}
          />

          {/* Secondary Sidebar */}
          <SecondarySidebar
            activeModule={activeModule}
            isCollapsed={isSecondarySidebarCollapsed}
            onToggleCollapse={toggleSecondarySidebar}
            width={secondarySidebarWidth}
            onResize={handleSecondarySidebarResize}
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-0" style={{ height: 'calc(100vh - 88px)' }}>
            {/* Center Panel - Full height when terminal closed */}
            <div
              className="flex-1 min-h-0 overflow-hidden"
              style={{
                height: isTerminalOpen ? `calc(100% - ${terminalHeight}px)` : '100%'
              }}
            >
              <MainContent
                activeModule={activeModule}
                className="h-full"
                isTerminalOpen={isTerminalOpen}
                onToggleTerminal={toggleTerminal}
              />
            </div>

            {/* VS Code Style Terminal Divider - Always visible when terminal is open */}
            {isTerminalOpen && (
              <div className="flex">
                <ResizeHandle
                  direction="vertical"
                  onResize={handleTerminalResize}
                  className="bg-white/10 hover:bg-white/20"
                />
              </div>
            )}

            {/* Terminal Panel */}
            {isTerminalOpen && (
              <div
                className="bg-background border-t border-white/5"
                style={{
                  height: `${terminalHeight}px`,
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))'
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Terminal Header */}
                  <div
                    className="flex items-center justify-between h-8 px-3 border-b border-white/10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                    }}
                  >
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                      Terminal
                    </span>
                    <button
                      onClick={toggleTerminal}
                      className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white/80"
                    >
                      ×
                    </button>
                  </div>

                  {/* Terminal Content */}
                  <div className="flex-1 p-3 font-mono text-sm bg-black text-green-400 overflow-y-auto">
                    <div className="space-y-1">
                      <div>$ npm run dev</div>
                      <div className="text-gray-400">Starting development server...</div>
                      <div className="text-blue-400">✓ Ready in 1.2s</div>
                      <div>$ <span className="animate-pulse">|</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Panel */}
          <ChatPanel
            isCollapsed={isChatPanelCollapsed}
            onToggleCollapse={toggleChatPanel}
            width={chatPanelWidth}
            onResize={handleChatPanelResize}
          />
        </div>

        {/* Dynamic Footer Bar */}
        <div
          className="h-12 border-t border-white/10 flex items-center justify-between px-3 text-xs"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))'
          }}
        >
          {/* Left Side - Status & Music Player */}
          <div className="flex items-center space-x-6">
            {/* Status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
                  }}
                ></div>
                <span className="text-green-400 font-medium">
                  <span className="italic lowercase">vibe</span><span className="font-bold uppercase">CODER</span> Ready
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <a
                  href="https://io.unifiedai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-white/80 transition-colors cursor-pointer"
                >
                  <span className="text-blue-400">⚡</span>
                  <span className="text-white/60">Powered by UnifiedAI</span>
                </a>
              </div>
            </div>

            {/* Music Player */}
            <div className="flex items-center space-x-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <button className="text-white/60 hover:text-white transition-colors" title="Previous">
                <span className="text-xs">⏮</span>
              </button>
              <button className="text-white hover:text-white transition-colors" title="Play/Pause">
                <span className="text-sm">▶</span>
              </button>
              <button className="text-white/60 hover:text-white transition-colors" title="Next">
                <span className="text-xs">⏭</span>
              </button>
              <div className="flex flex-col space-y-1 ml-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-white/80">Synthwave Dreams - Neon Nights</span>
                  <span className="text-[10px] text-white/50">3:42</span>
                </div>
                <div className="w-24 h-1 bg-white/20 rounded-full">
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300"></div>
                </div>
              </div>
              <button className="text-white/60 hover:text-white transition-colors ml-2" title="Volume">
                <span className="text-xs">🔊</span>
              </button>
            </div>
          </div>

          {/* Center - Domain Registry & Deploy Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="/about" className="text-xs text-white/60 hover:text-white transition-colors">About</a>
              <a href="/docs" className="text-xs text-white/60 hover:text-white transition-colors">Docs</a>
              <a href="/community" className="text-xs text-white/60 hover:text-white transition-colors">Community</a>
              <a href="/support" className="text-xs text-white/60 hover:text-white transition-colors">Support</a>
            </div>

            {/* Domain Registry Search */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search domains or deploy..."
                  className="w-48 px-3 py-1 text-xs border border-white/10 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <span className="text-xs text-white/40">🌐</span>
                  <span className="text-xs text-white/40">🚀</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 rounded px-2 py-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                <button className="text-white/60 hover:text-white transition-colors" title="Split View">
                  <span className="text-xs">⊞</span>
                </button>
                <button className="text-white/60 hover:text-white transition-colors" title="Grid View">
                  <span className="text-xs">⊡</span>
                </button>
                <button
                  onClick={toggleTerminal}
                  className={cn(
                    "text-xs transition-colors",
                    isTerminalOpen ? 'text-blue-400' : 'text-white/60 hover:text-white'
                  )}
                  title="Toggle Terminal"
                >
                  ⌘
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Info & Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 animate-pulse">⚡</span>
              <span className="text-white/60">AI Enhanced</span>
            </div>
            <div className="flex items-center space-x-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, rgba(99, 102, 241, 0.8))'
                }}
              ></div>
              <span className="text-white/60">Connected</span>
            </div>
            <span className="text-white/40">© 2024 <span className="italic lowercase">vibe</span><span className="font-bold uppercase">CODER</span></span>
          </div>
        </div>

        {/* Optional children content */}
        {children}
      </div>
    </ClientOnly>
  )
}
