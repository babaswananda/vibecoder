import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #14143c 0%, #191950 25%, #1e1e64 50%, #191950 75%, #14143c 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back to Home */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back to VibeCODER</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1e1e64, rgba(30, 30, 100, 0.8), rgba(25, 25, 80, 0.6))'
            }}
          >
            <FileText className="text-white" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/70">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/80 mb-6">
              By accessing and using VibeCODER, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="text-white/80 mb-4">
              Permission is granted to temporarily use VibeCODER for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>• modify or copy the materials</li>
              <li>• use the materials for any commercial purpose or for any public display</li>
              <li>• attempt to reverse engineer any software contained on VibeCODER</li>
              <li>• remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. AI Services</h2>
            <p className="text-white/80 mb-6">
              VibeCODER integrates with various AI services including WorldModel, IO, Discord, and X. Your use of these services is subject to their respective terms of service and privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. User Content</h2>
            <p className="text-white/80 mb-6">
              You retain ownership of any intellectual property rights that you hold in content you create using VibeCODER. We do not claim ownership of your code, projects, or other content.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Privacy</h2>
            <p className="text-white/80 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of VibeCODER, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Disclaimer</h2>
            <p className="text-white/80 mb-6">
              The materials on VibeCODER are provided on an 'as is' basis. VibeCODER makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Limitations</h2>
            <p className="text-white/80 mb-6">
              In no event shall VibeCODER or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use VibeCODER, even if VibeCODER or a VibeCODER authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Accuracy of Materials</h2>
            <p className="text-white/80 mb-6">
              The materials appearing on VibeCODER could include technical, typographical, or photographic errors. VibeCODER does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. Links</h2>
            <p className="text-white/80 mb-6">
              VibeCODER has not reviewed all of the sites linked to our platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VibeCODER of the site.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. Modifications</h2>
            <p className="text-white/80 mb-6">
              VibeCODER may revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p className="text-white/80 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@vibecoder.com" className="text-blue-400 hover:text-blue-300">
                  legal@vibecoder.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
