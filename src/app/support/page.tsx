import Link from 'next/link'
import { ArrowLeft, HelpCircle, MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send us detailed questions and get comprehensive answers",
      availability: "Business Hours",
      responseTime: "< 4 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Phone Support",
      icon: Phone,
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const faqItems = [
    {
      question: "How do I get started with VibeCODER?",
      answer: "Simply sign up for an account, complete the onboarding tutorial, and start exploring the AI-powered features. Our Quick Start guide will walk you through creating your first project."
    },
    {
      question: "What AI models does VibeCODER support?",
      answer: "VibeCODER integrates with WorldModel, IO, Discord, and X (Twitter) AI systems. We also support popular models like GPT-4, Claude, and Gemini through our unified interface."
    },
    {
      question: "Can I use VibeCODER for commercial projects?",
      answer: "Yes! VibeCODER offers commercial licenses for businesses. Check our pricing page for enterprise plans that include advanced features and priority support."
    },
    {
      question: "How does the HNS domain integration work?",
      answer: "VibeCODER includes built-in Handshake (HNS) domain registry tools. You can search, register, and deploy to HNS domains directly from the platform without external tools."
    },
    {
      question: "Is my code and data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and follow industry best practices. Your code never leaves our secure environment without your explicit permission."
    },
    {
      question: "Can I customize the interface?",
      answer: "Yes! VibeCODER offers extensive customization options including themes, panel layouts, keyboard shortcuts, and extension support to match your workflow preferences."
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
            <HelpCircle className="text-white" size={32} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">Support Center</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're here to help you succeed with VibeCODER. Get the support you need, when you need it.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <div key={index} className="backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${option.color}`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{option.title}</h3>
                <p className="text-white/70 mb-4 text-center">{option.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Availability:</span>
                    <span className="text-white text-sm">{option.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Response Time:</span>
                    <span className="text-green-400 text-sm">{option.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                  Contact Now
                </button>
              </div>
            )
          })}
        </div>

        {/* Status */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">System Status</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400" size={20} />
              <div>
                <div className="text-white font-medium">API Services</div>
                <div className="text-green-400 text-sm">Operational</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400" size={20} />
              <div>
                <div className="text-white font-medium">AI Models</div>
                <div className="text-green-400 text-sm">Operational</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-400" size={20} />
              <div>
                <div className="text-white font-medium">Web Platform</div>
                <div className="text-green-400 text-sm">Operational</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <AlertCircle className="text-yellow-400" size={20} />
              <div>
                <div className="text-white font-medium">HNS Registry</div>
                <div className="text-yellow-400 text-sm">Maintenance</div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white/70">Last updated:</span>
              <span className="text-white">2 minutes ago</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="backdrop-blur-xl rounded-2xl border border-white/10 p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
                }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                }}
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                }}
                placeholder="Describe your question or issue in detail..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
          <div className="flex justify-center space-x-6">
            <Link 
              href="/docs"
              className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/community"
              className="px-6 py-3 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
            >
              Community Forum
            </Link>
            <Link 
              href="/about"
              className="px-6 py-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              About VibeCODER
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
