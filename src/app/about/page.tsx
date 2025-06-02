import Link from 'next/link'
import { ArrowLeft, Code, Zap, Globe, Brain, Users, Sparkles } from 'lucide-react'

export default function AboutPage() {
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
            <span className="text-4xl">💻</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">About VibeCODER</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            The future of development is here. VibeCODER combines the power of AI, the elegance of luxury design, 
            and the innovation of Web3 to create the ultimate coding experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Development</h3>
            <p className="text-white/70">
              Harness the power of UnifiedAI with WorldModel, IO, Discord, and X integrations for intelligent coding assistance.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Globe className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Web3 Integration</h3>
            <p className="text-white/70">
              Built-in HNS domain registry, blockchain deployment tools, and decentralized web support.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Luxury Design</h3>
            <p className="text-white/70">
              Inspired by Bentley, W Hotels, and Apple - experience development with unparalleled elegance.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">VS Code Inspired</h3>
            <p className="text-white/70">
              Familiar interface with advanced features like resizable panels, terminal integration, and file management.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Collaborative</h3>
            <p className="text-white/70">
              Built-in webinar support, community features, and real-time collaboration tools.
            </p>
          </div>

          <div className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8))'
              }}
            >
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Performance</h3>
            <p className="text-white/70">
              Built with Next.js 15, TypeScript, and Tailwind CSS for lightning-fast performance.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-12 text-center mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            To revolutionize the development experience by combining cutting-edge AI technology with luxury design principles. 
            We believe that beautiful, intuitive tools inspire better code and more innovative solutions. VibeCODER isn&apos;t just
            an IDE—it&apos;s a platform for the future of development.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Built by Innovators</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            VibeCODER is crafted by a team of passionate developers, designers, and AI researchers 
            who believe in pushing the boundaries of what&apos;s possible in software development.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            href="/auth/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
            }}
          >
            <span>Start Your Journey</span>
            <ArrowLeft className="rotate-180" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
