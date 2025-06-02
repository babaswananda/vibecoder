"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  FolderIcon,
  SearchIcon,
  MessageSquareIcon,
  ExternalLinkIcon,
  SettingsIcon,
  CodeIcon,
  PlayIcon,
  SparklesIcon,
  BrainIcon,
  CogIcon,
  UsersIcon
} from "@/components/icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarItem {
  id: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  description: string
}

const sidebarItems: SidebarItem[] = [
  {
    id: "explorer",
    icon: FolderIcon,
    label: "Explorer",
    description: "Project files and folders"
  },
  {
    id: "search",
    icon: SearchIcon,
    label: "Search",
    description: "Find files and content"
  },
  {
    id: "chat",
    icon: MessageSquareIcon,
    label: "AI Chat",
    description: "WorldModel, IO, Discord, X"
  },
  {
    id: "browser",
    icon: ExternalLinkIcon,
    label: "Browser",
    description: "New Internet Browser with HNS support"
  },
  {
    id: "domains",
    icon: SparklesIcon,
    label: "Domains",
    description: "HNS Domain Registry"
  },
  {
    id: "marketplace",
    icon: BrainIcon,
    label: "Marketplace",
    description: "Digital commerce and templates"
  },
  {
    id: "studio",
    icon: PlayIcon,
    label: "Studio",
    description: "Media production suite"
  },
  {
    id: "webinar",
    icon: PlayIcon,
    label: "Webinar",
    description: "AI-powered webinar platform"
  },
  {
    id: "community",
    icon: UsersIcon,
    label: "Community",
    description: "Developer community and groups"
  },
  {
    id: "settings",
    icon: CogIcon,
    label: "Settings",
    description: "Configuration and preferences"
  }
]

interface PrimarySidebarProps {
  activeItem: string
  onItemSelect: (itemId: string) => void
  className?: string
  isExpanded?: boolean
  onToggleExpanded?: () => void
}

export function PrimarySidebar({
  activeItem,
  onItemSelect,
  className,
  isExpanded = false,
  onToggleExpanded
}: PrimarySidebarProps) {
  return (
    <TooltipProvider>
      <div
        className={cn(
          "vibecoder-sidebar flex flex-col h-full border-r border-white/20 transition-all duration-300",
          isExpanded ? "w-48 min-w-48" : "w-8 min-w-8",
          className
        )}
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.95), rgba(25, 25, 80, 0.9), rgba(30, 30, 100, 0.85))',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-8 px-2 border-b border-white/10">
          {isExpanded ? (
            <div className="flex items-center space-x-2">
              <div
                className="w-5 h-5 rounded flex items-center justify-center border border-white/20"
                style={{
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
                }}
              >
                <CodeIcon size={10} className="text-white" />
              </div>
              <span className="text-xs text-white font-medium">
                <span className="italic lowercase">vibe</span><span className="font-bold uppercase">CODER</span>
              </span>
            </div>
          ) : (
            <div
              className="w-5 h-5 rounded flex items-center justify-center border border-white/20 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              }}
            >
              <CodeIcon size={10} className="text-white" />
            </div>
          )}

          {onToggleExpanded && (
            <button
              onClick={onToggleExpanded}
              className="p-1 hover:bg-white/10 rounded text-white/60 hover:text-white/80 transition-colors"
              title={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
            >
              <span className="text-xs">{isExpanded ? "‹" : "›"}</span>
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col py-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id

            return (
              <Tooltip key={item.id} delayDuration={300}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => onItemSelect(item.id)}
                    className={cn(
                      "flex items-center mx-1 my-0.5 rounded border border-white/10 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-400/50",
                      isExpanded ? "justify-start px-2 py-1.5 space-x-2" : "justify-center w-6 h-6"
                    )}
                    style={isActive ? {
                      background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))',
                      borderColor: 'rgba(30, 30, 100, 0.5)'
                    } : {
                      background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.4), rgba(25, 25, 80, 0.3), rgba(30, 30, 100, 0.2))'
                    }}
                  >
                    <Icon
                      size={12}
                      className={cn(
                        "transition-colors",
                        isActive ? "text-white" : "text-white/60"
                      )}
                    />
                    {isExpanded && (
                      <span className={cn(
                        "text-xs transition-colors",
                        isActive ? "text-white" : "text-white/60"
                      )}>
                        {item.label}
                      </span>
                    )}
                  </button>
                </TooltipTrigger>
                {!isExpanded && (
                  <TooltipContent side="right" className="ml-2">
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </TooltipContent>
                )}
              </Tooltip>
            )
          })}
        </div>

        {/* User Profile / Status */}
        <div className="flex items-center justify-center h-12 border-t border-white/10">
          <div
            className="w-6 h-6 rounded-full border border-green-400/50 flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
            }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
