import Link from 'next/link'
import { ArrowLeft, Sparkles, Code, Globe, Brain, Users, Zap, Star, Play } from 'lucide-react'

export default function DiscoverPage() {
  const featuredProjects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Full-stack Next.js app with AI product recommendations",
      author: "Sarah Chen",
      stars: 1247,
      tech: ["Next.js", "TypeScript", "AI", "Stripe"],
      image: "🛍️"
    },
    {
      title: "Decentralized Social Network",
      description: "Web3 social platform built with blockchain integration",
      author: "Marcus Rodriguez",
      stars: 892,
      tech: ["React", "Web3", "Solidity", "IPFS"],
      image: "🌐"
    },
    {
      title: "Real-time Collaboration IDE",
      description: "VS Code-like editor with live collaboration features",
      author: "Alex Kim",
      stars: 2156,
      tech: ["TypeScript", "WebSocket", "Monaco", "Docker"],
      image: "👥"
    }
  ]

  const categories = [
    { name: "AI & Machine Learning", count: 342, icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Web3 & Blockchain", count: 189, icon: Globe, color: "from-blue-500 to-cyan-500" },
    { name: "Full-Stack Apps", count: 567, icon: Code, color: "from-green-500 to-emerald-500" },
    { name: "Developer Tools", count: 234, icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "UI/UX Design", count: 156, icon: Sparkles, color: "from-pink-500 to-rose-500" },
    { name: "Open Source", count: 423, icon: Users, color: "from-indigo-500 to-purple-500" }
  ]

  const trendingTech = [
    "Next.js 15", "TypeScript", "AI/ML", "Web3", "React", "Node.js", "Python", "Rust", "Go", "Docker"
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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
            }}
          >
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Discover Amazing Projects</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Explore cutting-edge projects built with VibeCODER. Get inspired, learn from others, and showcase your own creations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, technologies, or creators..."
                className="w-full px-6 py-4 text-lg border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-white placeholder-white/60"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                }}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/60 text-sm">{category.count} projects</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                    {project.image}
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-white/10 text-white/80 rounded-lg text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">by {project.author}</span>
                  <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors">
                    <Play size={14} />
                    <span className="text-sm">View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Trending Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingTech.map((tech, index) => (
              <button key={index} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10 hover:border-white/20">
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Community Stats</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">12,847</div>
              <div className="text-white/70">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">45,293</div>
              <div className="text-white/70">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2.1M</div>
              <div className="text-white/70">AI Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">156K</div>
              <div className="text-white/70">Lines of Code</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-white/70 mb-6">
            Join thousands of developers creating the future with AI-powered development tools.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/auth/signup"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              }}
            >
              <span>Start Creating</span>
              <ArrowLeft className="rotate-180" size={20} />
            </Link>
            <Link 
              href="/docs"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
