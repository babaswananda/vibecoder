"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  SendIcon,
  BrainIcon,
  SparklesIcon,
  XIcon,
  SettingsIcon
} from "@/components/icons"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ResizeHandle } from "@/components/ui/resize-handle"

interface ChatMessage {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  agent?: string
}

interface ChatPanelProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  width?: number
  onResize?: (width: number) => void
  className?: string
}

// Use a fixed timestamp to avoid hydration issues
const baseTime = new Date('2024-01-01T12:00:00Z')

const mockMessages: ChatMessage[] = [
  {
    id: "1",
    type: "assistant",
    content: "Welcome to VibeCoder! I'm your AI development assistant. How can I help you build something amazing today?",
    timestamp: baseTime,
    agent: "WorldModel"
  },
  {
    id: "2",
    type: "user",
    content: "Can you help me create a new React component?",
    timestamp: new Date(baseTime.getTime() + 60000) // 1 minute later
  },
  {
    id: "3",
    type: "assistant",
    content: "Absolutely! I'd be happy to help you create a React component. What kind of component are you looking to build? Please describe its functionality and any specific requirements.",
    timestamp: new Date(baseTime.getTime() + 120000), // 2 minutes later
    agent: "WorldModel"
  }
]

function ChatMessage({ message }: { message: ChatMessage }) {
  return (
    <div className={cn(
      "flex gap-2 px-2 py-1 hover:bg-mono-surface/50 transition-colors",
      message.type === "user" ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "w-6 h-6 rounded flex items-center justify-center flex-shrink-0",
        message.type === "user"
          ? "bg-mono-accent text-mono-bg"
          : "bg-mono-surface text-mono-text"
      )}>
        {message.type === "user" ? (
          <SparklesIcon size={12} />
        ) : (
          <BrainIcon size={12} />
        )}
      </div>

      <div className={cn(
        "flex-1 space-y-0.5",
        message.type === "user" ? "text-right" : "text-left"
      )}>
        {message.agent && (
          <div className="text-[10px] text-mono-muted font-medium">
            {message.agent}
          </div>
        )}
        <div className={cn(
          "inline-block max-w-[85%] px-2 py-1 rounded text-xs leading-relaxed",
          message.type === "user"
            ? "bg-mono-accent text-mono-bg"
            : "bg-mono-surface text-mono-text"
        )}>
          {message.content}
        </div>
        <div className="text-[10px] text-mono-muted">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}

function ChatInput({ onSendMessage }: { onSendMessage: (message: string) => void }) {
  const [message, setMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Start voice recording
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = 'en-US'

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setMessage(prev => prev + transcript)
          setIsRecording(false)
        }

        recognition.onerror = () => {
          setIsRecording(false)
        }

        recognition.start()
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      // Handle file upload
      console.log('Files dropped:', files)
      setMessage(prev => prev + `\n[Attached: ${files.map(f => f.name).join(', ')}]`)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setMessage(prev => prev + `\n[Attached: ${files.map(f => f.name).join(', ')}]`)
    }
  }

  return (
    <div
      className={cn(
        "p-2 border-t border-white/10 transition-all",
        isDragOver && "bg-blue-500/10 border-blue-400/50"
      )}
      style={{
        background: isDragOver
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))'
          : 'linear-gradient(135deg, rgba(20, 20, 60, 0.2), rgba(25, 25, 80, 0.3))'
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex items-end gap-1">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-1 hover:bg-white/10 rounded transition-colors"
        >
          <span className="text-xs text-white/60">📎</span>
        </button>

        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleTextareaChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message, drag files, or use voice... (@ to call agents)"
            className="w-full px-2 py-1 pr-16 text-xs border border-white/10 rounded resize-none focus:outline-none focus:border-blue-400/50 text-white placeholder-white/60 min-h-[28px] max-h-24"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))'
            }}
            rows={1}
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <button
              onClick={handleVoiceToggle}
              className={cn(
                "p-0.5 rounded transition-colors",
                isRecording
                  ? "bg-red-500 text-white animate-pulse"
                  : "hover:bg-white/10 text-white/60"
              )}
            >
              <span className="text-xs">{isRecording ? '🔴' : '🎤'}</span>
            </button>
            <button className="p-0.5 hover:bg-white/10 rounded transition-colors">
              <SparklesIcon size={12} className="text-white/60" />
            </button>
          </div>
        </div>

        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="p-1 rounded hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          style={{
            background: message.trim()
              ? 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.8))'
              : 'rgba(255, 255, 255, 0.1)'
          }}
        >
          <SendIcon size={12} className="text-white" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {isDragOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 border-2 border-dashed border-blue-400 rounded">
          <div className="text-center">
            <div className="text-2xl mb-2">📁</div>
            <div className="text-sm text-white/80">Drop files to attach</div>
          </div>
        </div>
      )}
    </div>
  )
}

export function ChatPanel({
  isCollapsed,
  onToggleCollapse,
  width = 320,
  onResize,
  className
}: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages)
  const [activeTab, setActiveTab] = useState("worldmodel")
  const [showSettings, setShowSettings] = useState(false)

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, newMessage])
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "I understand your request. Let me help you with that...",
        timestamp: new Date(),
        agent: activeTab === "worldmodel" ? "WorldModel" : "Augment I-O"
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  if (isCollapsed) {
    return (
      <button
        onClick={onToggleCollapse}
        className="fixed right-4 bottom-4 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all z-50"
      >
        <BrainIcon size={20} />
      </button>
    )
  }

  return (
    <div className="flex h-full">
      {/* Resize Handle */}
      {onResize && (
        <ResizeHandle
          direction="horizontal"
          onResize={onResize}
          className="bg-white/10 hover:bg-white/20"
        />
      )}

      <div
        className={cn(
          "vibecoder-panel flex flex-col h-full",
          className
        )}
        style={{
          width: width,
          minWidth: 280,
          maxWidth: 600,
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))',
          backdropFilter: 'blur(12px)'
        }}
      >
      {/* Header */}
      <div
        className="flex items-center justify-between h-8 px-2 border-b border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
        }}
      >
        <div className="flex items-center space-x-3">
          <h2 className="text-xs font-medium text-white/80">AI Assistant</h2>
          <div className="flex items-center space-x-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[10px] text-white/70">Credits:</span>
            <span className="text-[10px] text-green-400 font-medium">2,847</span>
            <span className="text-[10px] text-white/50">tokens</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-0.5 hover:bg-white/10 rounded"
          >
            <SettingsIcon size={12} className="text-white/60" />
          </button>
          <button
            onClick={onToggleCollapse}
            className="p-0.5 hover:bg-white/10 rounded"
          >
            <XIcon size={12} className="text-white/60" />
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div
          className="border-b border-white/10 p-3 space-y-3"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.7), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
          }}
        >
          <div className="space-y-2">
            <label className="text-xs text-white/80 font-medium">Model Selection</label>
            <select
              className="w-full text-xs border border-white/10 rounded px-2 py-1 text-white"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
              }}
            >
              <option value="claude-3.5-sonnet">Claude 3.5 Sonnet</option>
              <option value="gpt-4">GPT-4</option>
              <option value="gemini-pro">Gemini Pro</option>
              <option value="llama-2">Llama 2</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs text-white/80 font-medium">Temperature</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.7"
              className="w-full accent-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-white/80 font-medium">Max Tokens</label>
            <input
              type="number"
              defaultValue="2048"
              className="w-full text-xs border border-white/10 rounded px-2 py-1 text-white"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
              }}
            />
          </div>
        </div>
      )}

      {/* Chat Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="flex items-center h-8 px-2 space-x-1">
          {[
            { id: 'worldmodel', name: 'WorldModel' },
            { id: 'augment', name: 'IO' },
            { id: 'discord', name: 'Discord' },
            { id: 'x', name: 'X' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center space-x-1.5 px-3 py-1 rounded text-xs transition-all duration-200 border border-white/10",
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/60 hover:text-white/80"
              )}
              style={activeTab === tab.id ? {
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              } : {
                background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
              }}
            >
              <span className="font-medium">{tab.name}</span>
            </button>
          ))}
        </div>

        <TabsContent value="worldmodel" className="flex-1 flex flex-col m-0">
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          <ChatInput onSendMessage={handleSendMessage} />
        </TabsContent>

        <TabsContent value="augment" className="flex-1 flex flex-col m-0">
          <div className="flex-1 overflow-y-auto p-2 text-center text-white/60">
            <div className="text-xs">IO interface coming soon...</div>
            <div className="text-[10px] mt-2 text-white/40">Input/Output management tools</div>
          </div>
        </TabsContent>

        <TabsContent value="discord" className="flex-1 flex flex-col m-0">
          <div className="flex-1 overflow-y-auto p-2 text-center text-white/60">
            <div className="text-xs">Discord integration coming soon...</div>
            <div className="text-[10px] mt-2 text-white/40">Community collaboration features</div>
          </div>
        </TabsContent>

        <TabsContent value="x" className="flex-1 flex flex-col m-0">
          <div className="flex-1 overflow-y-auto p-2 text-center text-white/60">
            <div className="text-xs">X integration coming soon...</div>
            <div className="text-[10px] mt-2 text-white/40">Social media integration</div>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}
