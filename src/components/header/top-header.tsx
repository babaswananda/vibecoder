"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { 
  Code, 
  Search, 
  Command, 
  Settings, 
  User, 
  Moon, 
  Sun,
  Monitor,
  Palette
} from "lucide-react"

interface TopHeaderProps {
  className?: string
}

export function TopHeader({ className }: TopHeaderProps) {
  const [theme, setTheme] = useState<"light" | "vibe" | "dark" | "system" | "mono">("vibe")
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [monoAccentColor, setMonoAccentColor] = useState("#3b82f6")
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const colorPresets = [
    { name: "Blue", color: "#3b82f6" },
    { name: "Purple", color: "#8b5cf6" },
    { name: "Green", color: "#10b981" },
    { name: "Red", color: "#ef4444" },
    { name: "Orange", color: "#f97316" },
    { name: "Pink", color: "#ec4899" },
    { name: "Indigo", color: "#6366f1" },
    { name: "Teal", color: "#14b8a6" },
  ]

  // Handle client-side mounting and mobile detection
  useEffect(() => {
    setMounted(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Apply vibe theme by default
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add("theme-vibe")
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleThemeChange = (newTheme: "light" | "vibe" | "dark" | "system" | "mono") => {
    if (!mounted) return

    setTheme(newTheme)
    setShowThemeMenu(false)

    // Remove all theme classes first
    document.documentElement.classList.remove("dark", "theme-vibe", "theme-mono")

    // Apply theme logic here
    if (newTheme === "vibe") {
      document.documentElement.classList.add("theme-vibe")
    } else if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else if (newTheme === "light") {
      // Light theme is default, no class needed
    } else if (newTheme === "mono") {
      document.documentElement.classList.add("theme-mono")
      updateMonoAccentColor(monoAccentColor)
    } else {
      // System theme
      if (typeof window !== 'undefined') {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (prefersDark) {
          document.documentElement.classList.add("dark")
        }
      }
    }
  }

  const updateMonoAccentColor = (color: string) => {
    if (!mounted) return

    setMonoAccentColor(color)
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty('--mono-accent', color)
    }
  }

  const handleColorSelect = (color: string) => {
    updateMonoAccentColor(color)
    if (theme === "mono") {
      // Re-apply mono theme with new color
      handleThemeChange("mono")
    }
  }

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <header className={cn(
        "flex items-center justify-between h-12 px-4 bg-secondary/30 backdrop-blur-sm border-b border-border/50",
        className
      )}>
        {/* Left Section - Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-luxury border-thick border-luxury-gold flex items-center justify-center shadow-lg">
              <Code className="w-4 h-4 text-white drop-shadow-sm" />
            </div>
            <span className="text-lg gradient-text">
              <span className="italic lowercase">vibe</span><span className="font-bold uppercase">CODER</span>
            </span>
          </div>

          <div className="text-xs text-muted-foreground hidden md:block font-medium">
            AI-Powered Development Environment
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search files, commands, or ask AI..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 text-xs bg-muted text-muted-foreground rounded border">
                <Command className="w-3 h-3" />
              </kbd>
              <kbd className="px-1.5 py-0.5 text-xs bg-muted text-muted-foreground rounded border">
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Section - Controls */}
        <div className="flex items-center space-x-2">
          {/* Theme Selector - Loading State */}
          <div className="p-2 rounded-lg">
            <Monitor className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Settings */}
          <button className="p-2 hover:bg-accent/50 rounded-lg transition-colors">
            <Settings className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* User Profile */}
          <button className="flex items-center space-x-2 p-2 hover:bg-accent/50 rounded-lg transition-colors">
            <div className="w-6 h-6 rounded-full gradient-accent border-2 border-green-400 flex items-center justify-center shadow-lg">
              <User className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-muted-foreground hidden md:block">Developer</span>
          </button>
        </div>
      </header>
    )
  }

  return (
    <header
      className={cn(
        "flex items-center justify-between h-10 px-3 border-b border-white/10",
        className
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(20, 20, 60, 0.98), rgba(25, 25, 80, 0.95), rgba(30, 30, 100, 0.92), rgba(25, 25, 80, 0.95), rgba(20, 20, 60, 0.98))'
      }}
    >
      {/* Left Section - Logo and Title */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1.5">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg" style={{
              filter: 'drop-shadow(0 0 8px rgba(30, 30, 100, 0.6))',
              animation: 'float 3s ease-in-out infinite'
            }}>💻</span>
          </div>
          <span className={cn("text-white", isMobile ? "text-xs" : "text-sm")}>
            <span className="italic lowercase">vibe</span><span className="font-bold uppercase">CODER</span>
          </span>
        </div>

        {/* Wallet Info - Hidden on mobile */}
        {!isMobile && (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-xs text-white/80">
              <span>Welcome,</span>
              <span className="text-white font-medium">Alex</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-white/80">0x1234...5678</span>
              <span className="text-xs text-green-400 font-medium">$1,234.56</span>
              <div className="hidden group-hover:flex items-center space-x-1 ml-2">
                <button className="text-xs text-white/60 hover:text-white px-1">Send</button>
                <button className="text-xs text-white/60 hover:text-white px-1">Receive</button>
                <button className="text-xs text-white/60 hover:text-white px-1">History</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Center Section - Search */}
      <div className={cn("flex-1 mx-4", isMobile ? "max-w-none" : "max-w-md")}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-white/60" />
          <input
            type="text"
            placeholder={isMobile ? "Search..." : "Search the web, ask AI, or explore the internet..."}
            className="w-full pl-9 pr-16 py-1.5 text-xs border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/60"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.5), rgba(30, 30, 100, 0.4))'
            }}
          />
          {!isMobile && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              <kbd
                className="px-1 py-0.5 text-[10px] text-white/60 rounded"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
                }}
              >
                ⌘
              </kbd>
              <kbd
                className="px-1 py-0.5 text-[10px] text-white/60 rounded"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.5))'
                }}
              >
                K
              </kbd>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Controls */}
      <div className={cn("flex items-center", isMobile ? "space-x-1" : "space-x-3")}>
        {/* Auth Links - Simplified on mobile */}
        {!isMobile ? (
          <div className="flex items-center space-x-2">
            <a
              href="/auth/login"
              className="text-xs text-white/70 hover:text-white transition-colors px-2 py-1 rounded"
            >
              Login
            </a>
            <a
              href="/auth/signup"
              className="text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all px-3 py-1 rounded-full"
            >
              Sign Up
            </a>
          </div>
        ) : (
          <a
            href="/auth/signup"
            className="text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all px-2 py-1 rounded-full"
          >
            Sign Up
          </a>
        )}

        {!isMobile && <div className="w-px h-4 bg-white/20"></div>}

        <div className={cn("flex items-center", isMobile ? "space-x-0.5" : "space-x-1")}>
          {/* Theme Selector */}
        <div className="relative">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
          >
            {theme === "light" && <Sun className="w-3 h-3 text-white/60" />}
            {theme === "vibe" && <span className="w-3 h-3 text-white/60 text-xs">🌌</span>}
            {theme === "dark" && <Moon className="w-3 h-3 text-white/60" />}
            {theme === "system" && <Monitor className="w-3 h-3 text-white/60" />}
            {theme === "mono" && <Palette className="w-3 h-3 text-white/60" />}
          </button>
          
          {showThemeMenu && (
            <div className="absolute right-0 top-full mt-1 w-64 bg-background border-thick border-gradient rounded-lg shadow-lg z-50 glass-luxury">
              <div className="p-3">
                <button
                  onClick={() => handleThemeChange("light")}
                  className={cn(
                    "w-full flex items-center space-x-2 px-3 py-2 text-sm rounded hover:bg-accent/50 transition-colors",
                    theme === "light" && "bg-accent"
                  )}
                >
                  <Sun className="w-4 h-4" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => handleThemeChange("vibe")}
                  className={cn(
                    "w-full flex items-center space-x-2 px-3 py-2 text-sm rounded hover:bg-accent/50 transition-colors",
                    theme === "vibe" && "bg-accent"
                  )}
                >
                  <span className="w-4 h-4 flex items-center justify-center text-sm">🌌</span>
                  <span>Vibe (Deep Purple/Blue)</span>
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={cn(
                    "w-full flex items-center space-x-2 px-3 py-2 text-sm rounded hover:bg-accent/50 transition-colors",
                    theme === "dark" && "bg-accent"
                  )}
                >
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                </button>
                <button
                  onClick={() => handleThemeChange("system")}
                  className={cn(
                    "w-full flex items-center space-x-2 px-3 py-2 text-sm rounded hover:bg-accent/50 transition-colors",
                    theme === "system" && "bg-accent"
                  )}
                >
                  <Monitor className="w-4 h-4" />
                  <span>System</span>
                </button>
                <button
                  onClick={() => handleThemeChange("mono")}
                  className={cn(
                    "w-full flex items-center space-x-2 px-3 py-2 text-sm rounded hover:bg-accent/50 transition-colors",
                    theme === "mono" && "bg-accent"
                  )}
                >
                  <Palette className="w-4 h-4" />
                  <span>Monochromatic</span>
                </button>

                <div className="border-t border-border my-2"></div>

                {/* Color Picker */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Accent Color
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {colorPresets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => handleColorSelect(preset.color)}
                        className={cn(
                          "color-swatch",
                          monoAccentColor === preset.color && "active"
                        )}
                        style={{ backgroundColor: preset.color }}
                        title={preset.name}
                      />
                    ))}
                  </div>
                  <input
                    type="color"
                    value={monoAccentColor}
                    onChange={(e) => handleColorSelect(e.target.value)}
                    className="w-full h-8 rounded border-thick border-border cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
          <Settings className="w-3 h-3 text-white/60" />
        </button>

        {/* User Profile */}
        <button className="flex items-center space-x-1.5 p-1.5 hover:bg-white/10 rounded transition-colors">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #10b981, rgba(16, 185, 129, 0.8))'
            }}
          >
            <User className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="text-xs text-white/80 hidden md:block">Dev</span>
        </button>
        </div>
      </div>

      {/* Click outside to close theme menu */}
      {showThemeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowThemeMenu(false)}
        />
      )}
    </header>
  )
}
