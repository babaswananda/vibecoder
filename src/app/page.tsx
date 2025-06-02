"use client"

import { useState } from "react"

export default function Home() {
  const [sidebarWidth, setSidebarWidth] = useState(240)
  const [chatWidth, setChatWidth] = useState(320)
  const [terminalHeight, setTerminalHeight] = useState(200)
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Top Header */}
      <div className="h-12 bg-black/20 border-b border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-white">
            <span className="italic lowercase">vibe</span>
            <span className="font-bold uppercase">CODER</span>
          </h1>
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <span>💻</span>
            <span>AI-Powered Development Environment</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-white/60">Credits: 2,847</div>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Deploy</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div
          className="bg-black/30 border-r border-white/10 flex flex-col"
          style={{ width: sidebarWidth }}
        >
          <div className="p-3 border-b border-white/10">
            <div className="text-xs text-white/60 mb-2">EXPLORER</div>
            <div className="space-y-1">
              <div className="text-sm text-white/80 flex items-center space-x-2">
                <span>📁</span>
                <span>src</span>
              </div>
              <div className="text-sm text-white/80 flex items-center space-x-2 ml-4">
                <span>📄</span>
                <span>page.tsx</span>
              </div>
              <div className="text-sm text-white/80 flex items-center space-x-2 ml-4">
                <span>📄</span>
                <span>layout.tsx</span>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="text-xs text-white/60 mb-2">MODULES</div>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-white/80 hover:text-white p-2 rounded hover:bg-white/10">
                🤖 AI Chat
              </button>
              <button className="w-full text-left text-sm text-white/80 hover:text-white p-2 rounded hover:bg-white/10">
                🌐 HNS Registry
              </button>
              <button className="w-full text-left text-sm text-white/80 hover:text-white p-2 rounded hover:bg-white/10">
                🛒 Marketplace
              </button>
              <button className="w-full text-left text-sm text-white/80 hover:text-white p-2 rounded hover:bg-white/10">
                📹 Webinar
              </button>
              <button className="w-full text-left text-sm text-white/80 hover:text-white p-2 rounded hover:bg-white/10">
                👥 Community
              </button>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col">
          {/* Editor Area */}
          <div className="flex-1 bg-black/20 p-6">
            <div className="h-full bg-black/40 rounded-lg border border-white/10 p-6">
              <div className="text-white/60 text-sm mb-4">Welcome to VibeCODER</div>
              <div className="space-y-4 text-white/80">
                <p>🚀 Your AI-powered development environment is ready!</p>
                <p>✨ Features available:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>AI Chat Assistant with multiple models</li>
                  <li>VS Code-style interface</li>
                  <li>Integrated terminal</li>
                  <li>HNS domain registry</li>
                  <li>Community features</li>
                  <li>Webinar integration</li>
                </ul>
                <p>💡 Click the modules in the sidebar to get started!</p>
              </div>
            </div>
          </div>

          {/* Terminal */}
          {showTerminal && (
            <div
              className="bg-black/40 border-t border-white/10"
              style={{ height: terminalHeight }}
            >
              <div className="h-8 bg-black/20 border-b border-white/10 flex items-center justify-between px-4">
                <span className="text-sm text-white/60">TERMINAL</span>
                <button
                  onClick={() => setShowTerminal(false)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 text-green-400 font-mono text-sm">
                <div>$ npm run dev</div>
                <div className="text-white/60">Ready on http://localhost:3000</div>
                <div className="text-white/60">✓ Compiled successfully</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Chat Panel */}
        <div
          className="bg-black/30 border-l border-white/10 flex flex-col"
          style={{ width: chatWidth }}
        >
          <div className="h-8 bg-black/20 border-b border-white/10 flex items-center justify-between px-3">
            <span className="text-sm text-white/60">AI ASSISTANT</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-white/60">Online</span>
            </div>
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-y-auto">
            <div className="bg-blue-600/20 p-3 rounded text-sm text-white/80">
              Welcome to VibeCODER! I'm your AI assistant. How can I help you build something amazing today?
            </div>
          </div>

          <div className="p-3 border-t border-white/10">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/40"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="h-8 bg-black/20 border-t border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 text-sm text-white/60">
          <button
            onClick={() => setShowTerminal(!showTerminal)}
            className="hover:text-white"
          >
            📟 Terminal
          </button>
          <span>Ready</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-white/60">
          <span>🎵 Music Player</span>
          <span>🌐 Deploy to HNS</span>
        </div>
      </div>
    </div>
  )
}
