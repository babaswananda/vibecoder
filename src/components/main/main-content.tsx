"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  XIcon,
  PlusIcon,
  MoreHorizontalIcon,
  CodeIcon,
  ExternalLinkIcon,
  FileIcon,
  PlayIcon,
  SparklesIcon,
  BrainIcon,
  SendIcon
} from "@/components/icons"
import { WebinarContent } from "@/components/content/webinar-content"
import { CommunityContent } from "@/components/content/community-content"

interface Tab {
  id: string
  title: string
  type: "file" | "browser" | "terminal" | "preview"
  content: string
  isDirty?: boolean
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

interface MainContentProps {
  activeModule: string
  className?: string
  isTerminalOpen?: boolean
  onToggleTerminal?: () => void
}

const mockTabs: Tab[] = [
  {
    id: "welcome",
    title: "Welcome",
    type: "file",
    content: "welcome",
    icon: FileIcon
  },
  {
    id: "page.tsx",
    title: "page.tsx",
    type: "file",
    content: "page.tsx",
    isDirty: true,
    icon: CodeIcon
  },
  {
    id: "browser-1",
    title: "4commas-syndicate-ledger.vercel.app",
    type: "browser",
    content: "browser",
    icon: ExternalLinkIcon
  }
]

function TabBar({
  tabs,
  activeTab,
  onTabSelect,
  onTabClose,
  onNewTab,
  isTerminalOpen,
  onToggleTerminal
}: {
  tabs: Tab[]
  activeTab: string
  onTabSelect: (id: string) => void
  onTabClose: (id: string) => void
  onNewTab: () => void
  isTerminalOpen?: boolean
  onToggleTerminal?: () => void
}) {
  return (
    <div
      className="flex items-center h-10 border-b border-white/10"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
      }}
    >
      <div className="flex-1 flex items-center overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon || FileIcon
          const isActive = activeTab === tab.id

          return (
            <div
              key={tab.id}
              className={cn(
                "flex items-center h-full px-3 border-r border-white/10 cursor-pointer group min-w-0",
                "hover:bg-white/5 transition-colors",
                isActive && "border-b-2 border-blue-400"
              )}
              style={isActive ? {
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
              } : {}}
              onClick={() => onTabSelect(tab.id)}
            >
              <Icon size={16} className="mr-2 text-muted-foreground flex-shrink-0" />
              <span className={cn(
                "text-sm truncate",
                isActive ? "text-foreground" : "text-muted-foreground",
                tab.isDirty && "italic"
              )}>
                {tab.title}
                {tab.isDirty && " •"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onTabClose(tab.id)
                }}
                className="ml-2 p-0.5 rounded hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <XIcon size={12} />
              </button>
            </div>
          )
        })}
      </div>
      
      <div className="flex items-center px-2 space-x-1">
        <button
          onClick={onNewTab}
          className="p-1.5 hover:bg-white/10 rounded transition-colors"
        >
          <PlusIcon size={16} className="text-white/60" />
        </button>
        {onToggleTerminal && (
          <button
            onClick={onToggleTerminal}
            className={cn(
              "p-1.5 rounded transition-colors",
              isTerminalOpen
                ? "text-white"
                : "hover:bg-white/10 text-white/60"
            )}
            style={isTerminalOpen ? {
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
            } : {}}
            title="Toggle Terminal"
          >
            <span className="text-xs font-mono">⌘</span>
          </button>
        )}
        <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
          <MoreHorizontalIcon size={16} className="text-white/60" />
        </button>
      </div>
    </div>
  )
}

function WelcomeContent() {
  const [inputValue, setInputValue] = useState("")

  const promptSuggestions = [
    { icon: "💡", text: "Build a React component library", category: "component" },
    { icon: "🌐", text: "Create a Next.js landing page", category: "web" },
    { icon: "⚡", text: "Optimize my TypeScript code", category: "optimization" },
    { icon: "🎨", text: "Design a modern UI system", category: "design" }
  ]

  const actionButtons = [
    { icon: CodeIcon, label: "Code", active: true },
    { icon: PlayIcon, label: "Playground" },
    { icon: ExternalLinkIcon, label: "Deploy" },
    { icon: SparklesIcon, label: "Media Studio" },
    { icon: BrainIcon, label: "Optimize" },
    { icon: PlusIcon, label: "More" }
  ]

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center p-8"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))'
      }}
    >
      <div className="w-full max-w-2xl space-y-8">

        {/* AI Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-medium text-mono-text mb-2">AI Search</h1>
          <p className="text-xs text-mono-muted">⚡ Powered by UnifiedAI</p>
        </div>

        {/* Prompt Suggestions */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {promptSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setInputValue(suggestion.text)}
              className="flex items-center gap-2 px-3 py-2 border border-white/10 rounded-full text-xs text-white/80 hover:text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
              }}
            >
              <span>{suggestion.icon}</span>
              <span>{suggestion.text}</span>
            </button>
          ))}
        </div>

        {/* Main Input Area */}
        <div className="relative">
          <div
            className="relative border border-white/10 rounded-lg p-4"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
            }}
          >
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search the web, ask AI, or explore the internet..."
              className="w-full bg-transparent text-white/90 placeholder-white/60 resize-none outline-none text-sm leading-relaxed min-h-[60px]"
              rows={3}
            />

            {/* Input Controls */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
                  <SparklesIcon size={16} className="text-white/60" />
                </button>
                <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
                  <BrainIcon size={16} className="text-white/60" />
                </button>
              </div>

              <button
                className="p-2 rounded transition-colors"
                style={{
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
                }}
              >
                <SendIcon size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {actionButtons.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-200",
                  action.active
                    ? 'text-white'
                    : 'border border-white/10 text-white/80 hover:text-white'
                )}
                style={action.active ? {
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
                } : {
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                <Icon size={12} />
                <span>{action.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tips Link */}
        <div className="text-center">
          <button className="text-xs text-mono-accent hover:text-mono-text transition-colors">
            ✨ Prompting Tips and Tricks
          </button>
        </div>
      </div>
    </div>
  )
}

function CodeEditor({ content }: { content: string }) {
  return (
    <div className="flex-1 p-4 font-mono text-sm">
      <div className="space-y-1">
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">1</span>
          <span>import type {`{ Metadata }`} from "next";</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">2</span>
          <span>import {`{ Geist, Geist_Mono }`} from "next/font/google";</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">3</span>
          <span>import "./globals.css";</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">4</span>
          <span></span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">5</span>
          <span className="text-blue-400">export default function</span>
          <span className="text-yellow-400 ml-1">RootLayout</span>
          <span>({`{`}</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">6</span>
          <span className="ml-4">children,</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">7</span>
          <span>{`}: {`}</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">8</span>
          <span className="ml-4">children: React.ReactNode;</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">9</span>
          <span>{`}) {`}</span>
        </div>
        <div className="flex">
          <span className="w-8 text-muted-foreground text-right mr-4">10</span>
          <span className="ml-4 text-purple-400">return</span>
          <span className="ml-1">(</span>
        </div>
      </div>
    </div>
  )
}

function BrowserView() {
  const [tabs, setTabs] = useState([
    { id: '1', title: '4commas-syndicate-ledger.vercel.app', url: '4commas-syndicate-ledger.vercel.app', active: true },
    { id: '2', title: 'VibeCODER Docs', url: 'docs.vibecoder.com', active: false },
  ])
  const [activeTabId, setActiveTabId] = useState('1')

  return (
    <div className="flex-1 flex flex-col">
      {/* Arc-style Browser Header */}
      <div
        className="h-12 border-b border-white/10 flex flex-col"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))'
        }}
      >
        {/* Tab Bar */}
        <div className="flex items-center h-8 px-3 space-x-1">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "flex items-center space-x-2 px-3 py-1 rounded-t-lg text-xs cursor-pointer transition-all",
                tab.active
                  ? "text-white border-b-2 border-blue-400"
                  : "text-white/60 hover:text-white/80"
              )}
              style={tab.active ? {
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
              } : {}}
              onClick={() => setActiveTabId(tab.id)}
            >
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="max-w-32 truncate">{tab.title}</span>
              <button className="text-white/40 hover:text-white/80">×</button>
            </div>
          ))}
          <button className="p-1 text-white/60 hover:text-white hover:bg-white/10 rounded">
            <PlusIcon size={12} />
          </button>
        </div>

        {/* Address Bar */}
        <div className="flex items-center h-4 px-3 space-x-2">
          <div className="flex space-x-1">
            <button className="text-white/60 hover:text-white text-xs">←</button>
            <button className="text-white/60 hover:text-white text-xs">→</button>
            <button className="text-white/60 hover:text-white text-xs">↻</button>
          </div>
          <div
            className="flex-1 flex items-center border border-white/10 rounded px-2 py-0.5"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            <input
              type="text"
              value="4commas-syndicate-ledger.vercel.app"
              readOnly
              className="flex-1 bg-transparent text-xs text-white/80 outline-none"
            />
            <button className="text-white/60 hover:text-white text-xs ml-2">⭐</button>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.3), rgba(25, 25, 80, 0.2), rgba(30, 30, 100, 0.1))'
        }}
      >
        <div className="text-center space-y-4">
          <ExternalLinkIcon size={64} className="mx-auto text-white/40" />
          <div>
            <h3 className="text-lg font-semibold text-white/90">Arc-Style Browser</h3>
            <p className="text-white/60">HNS domain content will load here</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div
                className="px-3 py-1 rounded-full text-xs text-white/80"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                HNS Support
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs text-white/80"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                Web3 Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MainContent({
  activeModule,
  className,
  isTerminalOpen,
  onToggleTerminal
}: MainContentProps) {
  const [tabs, setTabs] = useState<Tab[]>(mockTabs)
  const [activeTab, setActiveTab] = useState("welcome")

  const handleTabClose = (id: string) => {
    setTabs(prev => prev.filter(tab => tab.id !== id))
    if (activeTab === id && tabs.length > 1) {
      const currentIndex = tabs.findIndex(tab => tab.id === id)
      const nextTab = tabs[currentIndex + 1] || tabs[currentIndex - 1]
      setActiveTab(nextTab.id)
    }
  }

  const handleNewTab = () => {
    const newTab: Tab = {
      id: `new-${Date.now()}`,
      title: "Untitled",
      type: "file",
      content: "",
      icon: FileIcon
    }
    setTabs(prev => [...prev, newTab])
    setActiveTab(newTab.id)
  }

  const currentTab = tabs.find(tab => tab.id === activeTab)

  return (
    <div className={cn("vibecoder-content flex flex-col", className)}>
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabSelect={setActiveTab}
        onTabClose={handleTabClose}
        onNewTab={handleNewTab}
        isTerminalOpen={isTerminalOpen}
        onToggleTerminal={onToggleTerminal}
      />
      
      <div className="flex-1 overflow-hidden">
        {activeModule === "webinar" && <WebinarContent className="h-full" />}
        {activeModule === "community" && <CommunityContent className="h-full" />}
        {activeModule !== "webinar" && activeModule !== "community" && (
          <>
            {currentTab?.content === "welcome" && <WelcomeContent />}
            {currentTab?.type === "file" && currentTab.content !== "welcome" && (
              <CodeEditor content={currentTab.content} />
            )}
            {currentTab?.type === "browser" && <BrowserView />}
          </>
        )}
      </div>
    </div>
  )
}
