"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  VideoIcon,
  UsersIcon,
  SettingsIcon,
  PlusIcon,
  ExternalLinkIcon
} from "@/components/icons"

interface WebinarContentProps {
  className?: string
}

export function WebinarContent({ className }: WebinarContentProps) {
  const [activeTab, setActiveTab] = useState("dashboard")

  const webinars = [
    {
      id: 1,
      title: "AI Development Workshop",
      status: "live",
      attendees: 247,
      duration: "1:23:45",
      thumbnail: "🤖"
    },
    {
      id: 2,
      title: "React Best Practices",
      status: "scheduled",
      attendees: 0,
      scheduledFor: "Tomorrow 2:00 PM",
      thumbnail: "⚛️"
    },
    {
      id: 3,
      title: "TypeScript Masterclass",
      status: "completed",
      attendees: 189,
      duration: "2:15:30",
      thumbnail: "📘"
    }
  ]

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "create", label: "Create", icon: "➕" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" }
  ]

  return (
    <div className={cn("h-full flex flex-col", className)}>
      {/* Header */}
      <div
        className="flex items-center justify-between h-12 px-6 border-b border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <VideoIcon size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Webinar Studio</h1>
            <p className="text-xs text-white/60">AI-powered webinar platform</p>
          </div>
        </div>
        
        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.8))'
          }}
        >
          <PlusIcon size={16} />
          <span className="text-sm font-medium">New Webinar</span>
        </button>
      </div>

      {/* Tabs */}
      <div
        className="flex items-center h-10 px-6 border-b border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.4), rgba(25, 25, 80, 0.3), rgba(30, 30, 100, 0.2))'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 text-sm rounded-lg transition-all",
              activeTab === tab.id
                ? "text-white"
                : "text-white/60 hover:text-white/80"
            )}
            style={activeTab === tab.id ? {
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
            } : {}}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className="p-4 rounded-lg border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-sm text-white/60">Total Webinars</div>
              </div>
              <div
                className="p-4 rounded-lg border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-sm text-white/60">Total Attendees</div>
              </div>
              <div
                className="p-4 rounded-lg border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className="text-2xl font-bold text-white">24.5h</div>
                <div className="text-sm text-white/60">Total Duration</div>
              </div>
            </div>

            {/* Webinars List */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Recent Webinars</h2>
              <div className="space-y-3">
                {webinars.map((webinar) => (
                  <div
                    key={webinar.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.4), rgba(25, 25, 80, 0.3), rgba(30, 30, 100, 0.2))'
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xl">
                        {webinar.thumbnail}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{webinar.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                          <span className="flex items-center space-x-1">
                            <UsersIcon size={14} />
                            <span>{webinar.attendees} attendees</span>
                          </span>
                          {webinar.status === "live" && (
                            <span className="flex items-center space-x-1 text-red-400">
                              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                              <span>Live • {webinar.duration}</span>
                            </span>
                          )}
                          {webinar.status === "scheduled" && (
                            <span className="text-blue-400">{webinar.scheduledFor}</span>
                          )}
                          {webinar.status === "completed" && (
                            <span className="text-green-400">Completed • {webinar.duration}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {webinar.status === "live" && (
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <PauseIcon size={16} className="text-white/60" />
                        </button>
                      )}
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ExternalLinkIcon size={16} className="text-white/60" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <SettingsIcon size={16} className="text-white/60" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "create" && (
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold text-white mb-6">Create New Webinar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter webinar title..."
                  className="w-full px-3 py-2 rounded-lg border border-white/10 text-white placeholder-white/40"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe your webinar..."
                  className="w-full px-3 py-2 rounded-lg border border-white/10 text-white placeholder-white/40 resize-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 rounded-lg border border-white/10 text-white"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 rounded-lg border border-white/10 text-white"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                    }}
                  />
                </div>
              </div>
              <button
                className="w-full py-3 rounded-lg text-white font-medium transition-all"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.8))'
                }}
              >
                Create Webinar
              </button>
            </div>
          </div>
        )}

        {(activeTab === "analytics" || activeTab === "settings") && (
          <div className="text-center text-white/60">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-lg font-medium text-white mb-2">{activeTab === "analytics" ? "Analytics" : "Settings"}</h3>
            <p>This section is coming soon...</p>
          </div>
        )}
      </div>
    </div>
  )
}
