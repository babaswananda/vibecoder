"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  UsersIcon,
  PlusIcon,
  SearchIcon,
  MessageSquareIcon,
  ExternalLinkIcon,
  SettingsIcon,
  SparklesIcon
} from "@/components/icons"

interface CommunityContentProps {
  className?: string
}

export function CommunityContent({ className }: CommunityContentProps) {
  const [activeTab, setActiveTab] = useState("discover")

  const groups = [
    {
      id: 1,
      name: "VibeCoder Developers",
      description: "Official community for VibeCoder users and developers",
      members: 1247,
      category: "Development",
      isJoined: true,
      avatar: "👨‍💻",
      activity: "Very Active"
    },
    {
      id: 2,
      name: "AI Enthusiasts",
      description: "Discussing the latest in AI and machine learning",
      members: 892,
      category: "AI/ML",
      isJoined: true,
      avatar: "🤖",
      activity: "Active"
    },
    {
      id: 3,
      name: "Design & UX",
      description: "UI/UX design patterns and best practices",
      members: 634,
      category: "Design",
      isJoined: false,
      avatar: "🎨",
      activity: "Moderate"
    },
    {
      id: 4,
      name: "Learning Hub",
      description: "Share resources and learn together",
      members: 1089,
      category: "Education",
      isJoined: true,
      avatar: "📚",
      activity: "Very Active"
    }
  ]

  const tabs = [
    { id: "discover", label: "Discover", icon: "🔍" },
    { id: "mygroups", label: "My Groups", icon: "🏠" },
    { id: "messages", label: "Messages", icon: "💬" },
    { id: "create", label: "Create", icon: "➕" }
  ]

  const myGroups = groups.filter(group => group.isJoined)

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
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
            <UsersIcon size={16} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Community</h1>
            <p className="text-xs text-white/60">Connect with developers worldwide</p>
          </div>
        </div>
        
        <button
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-all"
          style={{
            background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
          }}
        >
          <PlusIcon size={16} />
          <span className="text-sm font-medium">Create Group</span>
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
        {activeTab === "discover" && (
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 text-white placeholder-white/40"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                }}
              />
            </div>

            {/* Featured Groups */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">Discover Communities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.4), rgba(25, 25, 80, 0.3), rgba(30, 30, 100, 0.2))'
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xl">
                          {group.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{group.name}</h3>
                          <div className="flex items-center space-x-2 text-xs text-white/60">
                            <span>{group.members.toLocaleString()} members</span>
                            <span>•</span>
                            <span>{group.activity}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                        {group.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-white/70 mb-4">{group.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <button
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                          group.isJoined
                            ? "bg-white/10 text-white/60 hover:bg-white/20"
                            : "text-white"
                        )}
                        style={!group.isJoined ? {
                          background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
                        } : {}}
                      >
                        {group.isJoined ? "Joined" : "Join Group"}
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ExternalLinkIcon size={16} className="text-white/60" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "mygroups" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">My Groups</h2>
              <span className="text-sm text-white/60">{myGroups.length} groups</span>
            </div>

            <div className="space-y-3">
              {myGroups.map((group) => (
                <div
                  key={group.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.4), rgba(25, 25, 80, 0.3), rgba(30, 30, 100, 0.2))'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-xl">
                      {group.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{group.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <span className="flex items-center space-x-1">
                          <UsersIcon size={14} />
                          <span>{group.members.toLocaleString()} members</span>
                        </span>
                        <span>{group.activity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <MessageSquareIcon size={16} className="text-white/60" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <SettingsIcon size={16} className="text-white/60" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Messages</h2>
            <div className="text-center text-white/60 py-12">
              <MessageSquareIcon size={48} className="mx-auto mb-4 text-white/40" />
              <h3 className="text-lg font-medium text-white mb-2">No messages yet</h3>
              <p>Start conversations with community members</p>
            </div>
          </div>
        )}

        {activeTab === "create" && (
          <div className="max-w-2xl">
            <h2 className="text-lg font-semibold text-white mb-6">Create New Group</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Group Name</label>
                <input
                  type="text"
                  placeholder="Enter group name..."
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
                  placeholder="Describe your group..."
                  className="w-full px-3 py-2 rounded-lg border border-white/10 text-white placeholder-white/40 resize-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Category</label>
                <select
                  className="w-full px-3 py-2 rounded-lg border border-white/10 text-white"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
                  }}
                >
                  <option value="">Select a category</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="ai">AI/ML</option>
                  <option value="education">Education</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="private" className="rounded" />
                <label htmlFor="private" className="text-sm text-white/80">Make this group private</label>
              </div>
              <button
                className="w-full py-3 rounded-lg text-white font-medium transition-all"
                style={{
                  background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
                }}
              >
                Create Group
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
