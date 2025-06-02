import Link from 'next/link'
import { ArrowLeft, Book, Code, Terminal, Zap, Globe, Settings, Video } from 'lucide-react'

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      items: [
        "Quick Start Guide",
        "Installation & Setup",
        "First Project",
        "Interface Overview"
      ]
    },
    {
      title: "AI Features",
      icon: Zap,
      items: [
        "WorldModel Integration",
        "IO Chat Commands",
        "Discord Bot Setup",
        "X (Twitter) Integration"
      ]
    },
    {
      title: "Development Tools",
      icon: Code,
      items: [
        "Code Editor Features",
        "File Management",
        "Git Integration",
        "Debug Console"
      ]
    },
    {
      title: "Terminal & CLI",
      icon: Terminal,
      items: [
        "Terminal Usage",
        "Command Reference",
        "Custom Scripts",
        "Keyboard Shortcuts"
      ]
    },
    {
      title: "Web3 & Domains",
      icon: Globe,
      items: [
        "HNS Domain Registry",
        "Blockchain Deployment",
        "Decentralized Hosting",
        "Wallet Integration"
      ]
    },
    {
      title: "Webinars & Learning",
      icon: Video,
      items: [
        "Live Streaming Setup",
        "YouTube Integration",
        "Tutorial Creation",
        "Community Learning"
      ]
    },
    {
      title: "Customization",
      icon: Settings,
      items: [
        "Theme Configuration",
        "Panel Layout",
        "Keyboard Shortcuts",
        "Extension Management"
      ]
    }
  ]

  return (
    <div className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #14143c 0%, #191950 25%, #1e1e64 50%, #191950 75%, #14143c 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-12">
        {/* Back to Home */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to VibeCODER</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
            }}
          >
            <Book className="text-white" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to master VibeCODER and unlock the full potential of AI-powered development.
          </p>
        </div>

        {/* Quick Start */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
                }}
              >
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Sign Up</h3>
              <p className="text-white/70 text-sm">Create your VibeCODER account and access the platform</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
                }}
              >
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
              <p className="text-white/70 text-sm">Familiarize yourself with the interface and features</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
                }}
              >
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Create</h3>
              <p className="text-white/70 text-sm">Start your first project with AI assistance</p>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {docSections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
                  }}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Keyboard Shortcuts */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">⌨️ Keyboard Shortcuts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">General</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Open Command Palette</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">⌘ + K</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Toggle Terminal</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">⌘ + `</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Toggle Sidebar</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">⌘ + B</kbd>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">AI Features</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">AI Chat</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">⌘ + I</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Code Completion</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">Tab</kbd>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Quick Fix</span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-white">⌘ + .</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">🔗 API Reference</h2>
          <p className="text-white/70 mb-6">
            Integrate VibeCODER's powerful features into your own applications with our comprehensive API.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">REST API</h3>
              <p className="text-white/60 text-sm mb-3">Full HTTP API for all VibeCODER features</p>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                View REST Docs
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">WebSocket API</h3>
              <p className="text-white/60 text-sm mb-3">Real-time communication and live updates</p>
              <button className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
                View WebSocket Docs
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-white/70 mb-6">
            Can't find what you're looking for? Our community and support team are here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/community"
              className="px-6 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
            >
              Join Community
            </Link>
            <Link 
              href="/support"
              className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
