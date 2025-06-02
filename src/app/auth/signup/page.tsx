'use client'

import { useState } from 'react'
import { Eye, EyeOff, ArrowLeft, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #14143c 0%, #191950 25%, #1e1e64 50%, #191950 75%, #14143c 100%)'
      }}
    >
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to VibeCODER</span>
        </Link>

        {/* Signup Card */}
        <div 
          className="backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              }}
            >
              <span className="text-2xl">💻</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Join VibeCODER</h1>
            <p className="text-white/60">Create your account and start coding with AI</p>
          </div>

          {/* Social Signup */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
              <Github size={20} />
              <span>Sign up with GitHub</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors">
              <Mail size={20} />
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/60">Or create account with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.6), rgba(25, 25, 80, 0.4), rgba(30, 30, 100, 0.2))'
                  }}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1 rounded border-white/10 text-blue-500 focus:ring-blue-500/50" />
              <div className="text-sm text-white/60">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all"
              style={{
                background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
              }}
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-white/60 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
