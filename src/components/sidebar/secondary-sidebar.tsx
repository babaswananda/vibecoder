"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ResizeHandle } from "@/components/ui/resize-handle"



interface SecondarySidebarProps {
  activeModule: string
  isCollapsed: boolean
  onToggleCollapse: () => void
  width?: number
  onResize?: (width: number) => void
  className?: string
}

export function SecondarySidebar({
  activeModule,
  isCollapsed,
  onToggleCollapse,
  width = 320,
  onResize,
  className
}: SecondarySidebarProps) {
  if (isCollapsed) {
    return null
  }

  return (
    <div className="flex h-full">
      <div
        className={cn(
          "vibecoder-sidebar flex flex-col backdrop-blur-sm border-r border-white/20",
          "h-full",
          className
        )}
        style={{
          width: width,
          minWidth: 180,
          maxWidth: 500,
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))'
        }}
      >
        <div className="flex items-center justify-between h-8 px-3 border-b border-white/10">
          <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
            {activeModule.toUpperCase()}
          </span>
          <button
            onClick={onToggleCollapse}
            className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white/80"
            title="Collapse Panel"
          >
            <span className="text-xs">×</span>
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.3), rgba(25, 25, 80, 0.2), rgba(30, 30, 100, 0.1))'
          }}
        >
          <div className="space-y-3">
            {activeModule === 'explorer' && (
              <div className="space-y-4">
                <div className="text-xs text-white/80 font-medium">Project Files</div>
                <div className="space-y-1 text-xs text-white/60">
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                    <span>📁</span>
                    <span>src</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-4">
                    <span>📁</span>
                    <span>components</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>layout.tsx</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>sidebar.tsx</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>chat-panel.tsx</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-4">
                    <span>📁</span>
                    <span>pages</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>index.tsx</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>about.tsx</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-4">
                    <span>📁</span>
                    <span>styles</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer ml-8">
                    <span>📄</span>
                    <span>globals.css</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                    <span>📄</span>
                    <span>package.json</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                    <span>📄</span>
                    <span>README.md</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-white/80 font-medium mb-2">Recent Files</div>
                  <div className="space-y-1 text-xs text-white/60">
                    <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                      <span>📄</span>
                      <span>layout.tsx</span>
                      <span className="ml-auto text-[10px] text-white/40">2m ago</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                      <span>📄</span>
                      <span>globals.css</span>
                      <span className="ml-auto text-[10px] text-white/40">5m ago</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer">
                      <span>📄</span>
                      <span>chat-panel.tsx</span>
                      <span className="ml-auto text-[10px] text-white/40">12m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeModule === 'search' && (
              <div className="space-y-2">
                <div className="text-xs text-white/80 font-medium">Global Search</div>
                <input
                  type="text"
                  placeholder="Search in files..."
                  className="w-full px-2 py-1 text-xs border border-white/10 rounded text-white placeholder-white/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                />
              </div>
            )}
            {activeModule === 'git' && (
              <div className="space-y-4">
                <div className="text-xs text-white/80 font-medium">Source Control</div>
                <div className="space-y-2">
                  <div className="text-xs text-white/60">
                    <div className="flex items-center justify-between mb-2">
                      <span>Changes (3)</span>
                      <button className="text-blue-400 hover:text-blue-300">+</button>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[11px]">
                        <span className="text-green-400">M</span>
                        <span>src/components/layout.tsx</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px]">
                        <span className="text-yellow-400">A</span>
                        <span>src/pages/about.tsx</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px]">
                        <span className="text-red-400">D</span>
                        <span>src/old-component.tsx</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xs text-white/60 mb-2">Recent Commits</div>
                    <div className="space-y-1 text-[11px] text-white/50">
                      <div>feat: add new chat panel</div>
                      <div>fix: terminal drag behavior</div>
                      <div>style: update color scheme</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeModule === 'debug' && (
              <div className="space-y-2">
                <div className="text-xs text-white/80 font-medium">Debug Console</div>
                <div className="text-xs text-white/60">Ready to debug</div>
              </div>
            )}
            {activeModule === 'extensions' && (
              <div className="space-y-2">
                <div className="text-xs text-white/80 font-medium">Extensions</div>
                <div className="text-xs text-white/60">Marketplace coming soon</div>
              </div>
            )}
            {activeModule === 'webinar' && (
              <div className="space-y-4">
                <div className="text-xs text-white/80 font-medium">Webinar Controls</div>

                {/* Webinar Status */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Status</span>
                    <span className="text-xs text-green-400">● Live</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Viewers</span>
                    <span className="text-xs text-white/80">1,247</span>
                  </div>
                </div>

                {/* Stream Controls */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs text-white/80 font-medium mb-2">Stream Controls</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30">
                      🔴 Stop
                    </button>
                    <button className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30">
                      ⏸️ Pause
                    </button>
                    <button className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded hover:bg-green-500/30">
                      🎥 Camera
                    </button>
                    <button className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30">
                      🎤 Mic
                    </button>
                  </div>
                </div>

                {/* YouTube Integration */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs text-white/80 font-medium mb-2">YouTube Player</div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="YouTube URL or Video ID"
                      className="w-full px-2 py-1 text-xs border border-white/10 rounded text-white placeholder-white/60"
                      style={{
                        background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                      }}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <button className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30">
                        ▶️ Play
                      </button>
                      <button className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded hover:bg-gray-500/30">
                        📺 Pop-out
                      </button>
                    </div>
                  </div>
                </div>

                {/* Recent Tutorials */}
                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs text-white/80 font-medium mb-2">Recent Tutorials</div>
                  <div className="space-y-1 text-xs text-white/60">
                    <div className="hover:text-white/80 cursor-pointer">React Hooks Tutorial</div>
                    <div className="hover:text-white/80 cursor-pointer">Next.js 15 Features</div>
                    <div className="hover:text-white/80 cursor-pointer">TypeScript Best Practices</div>
                    <div className="hover:text-white/80 cursor-pointer">AI-Powered Development</div>
                  </div>
                </div>
              </div>
            )}
            {activeModule === 'settings' && (
              <div className="space-y-2">
                <div className="text-xs text-white/80 font-medium">Settings</div>
                <div className="text-xs text-white/60">Configuration panel</div>
              </div>
            )}
            {activeModule === 'webinar' && (
              <div className="space-y-4">
                <div className="text-xs text-white/80 font-medium">Webinar Controls</div>
                <div className="space-y-2">
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    📹 Create Webinar
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    📊 Analytics
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    👥 Attendees
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    ⚙️ Settings
                  </button>
                </div>

                <div className="text-xs text-white/80 font-medium">Recent Webinars</div>
                <div className="space-y-1 text-xs text-white/60">
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>🔴</span>
                    <span>AI Development Workshop</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>⏸️</span>
                    <span>React Best Practices</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>✅</span>
                    <span>TypeScript Masterclass</span>
                  </div>
                </div>
              </div>
            )}

            {activeModule === 'community' && (
              <div className="space-y-4">
                <div className="text-xs text-white/80 font-medium">Community</div>
                <div className="space-y-2">
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    🏠 My Groups
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    🔍 Discover
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    ➕ Create Group
                  </button>
                  <button className="w-full text-left text-xs text-white/60 hover:text-white/80 p-2 rounded hover:bg-white/10 transition-colors">
                    💬 Messages
                  </button>
                </div>

                <div className="text-xs text-white/80 font-medium">Active Groups</div>
                <div className="space-y-1 text-xs text-white/60">
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>👨‍💻</span>
                    <span>VibeCoder Developers</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>🚀</span>
                    <span>AI Enthusiasts</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>🎨</span>
                    <span>Design & UX</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-white/80 cursor-pointer p-1 rounded hover:bg-white/5">
                    <span>📚</span>
                    <span>Learning Hub</span>
                  </div>
                </div>
              </div>
            )}

            {!['explorer', 'search', 'git', 'debug', 'extensions', 'webinar', 'community', 'settings'].includes(activeModule) && (
              <div className="text-center text-white/60 text-sm">
                {activeModule} content coming soon...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Resize Handle */}
      {onResize && (
        <ResizeHandle
          direction="horizontal"
          onResize={onResize}
          className="bg-white/10 hover:bg-white/20"
        />
      )}
    </div>
  )
}
