export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="italic lowercase">vibe</span>
            <span className="font-bold uppercase">CODER</span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            AI-Powered Development Environment
          </p>
          <div className="space-y-4">
            <a
              href="/auth/signup"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="/about" className="text-white/60 hover:text-white">About</a>
              <a href="/docs" className="text-white/60 hover:text-white">Docs</a>
              <a href="/community" className="text-white/60 hover:text-white">Community</a>
              <a href="/discover" className="text-white/60 hover:text-white">Discover</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
