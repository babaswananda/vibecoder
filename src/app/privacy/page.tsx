import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPage() {
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
            <Shield className="text-white" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="backdrop-blur-xl rounded-3xl border border-white/10 p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 20, 60, 0.8), rgba(25, 25, 80, 0.6), rgba(30, 30, 100, 0.4))'
          }}
        >
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="text-white/80 mb-4">We collect information you provide directly to us, such as when you:</p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>• Create an account</li>
              <li>• Use our AI-powered features</li>
              <li>• Communicate with us</li>
              <li>• Participate in surveys or promotions</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-white/80 mb-4">We use the information we collect to:</p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>• Provide, maintain, and improve our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send technical notices and support messages</li>
              <li>• Respond to your comments and questions</li>
              <li>• Develop new features and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. AI and Machine Learning</h2>
            <p className="text-white/80 mb-6">
              VibeCODER uses AI and machine learning technologies to enhance your development experience. We may process your code and interactions to provide intelligent suggestions, but we do not use your private code to train our models without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
            <p className="text-white/80 mb-4">We may share your information in the following situations:</p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>• With your consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and safety</li>
              <li>• In connection with a business transaction</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-white/80 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
            <p className="text-white/80 mb-6">
              VibeCODER integrates with third-party AI services (WorldModel, IO, Discord, X). Your interactions with these services are governed by their respective privacy policies. We encourage you to review these policies.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p className="text-white/80 mb-6">
              We retain your information for as long as your account is active or as needed to provide you services. We may retain certain information for legitimate business purposes or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
            <p className="text-white/80 mb-4">You have the right to:</p>
            <ul className="text-white/80 mb-6 space-y-2">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your information</li>
              <li>• Object to processing</li>
              <li>• Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">9. Cookies and Tracking</h2>
            <p className="text-white/80 mb-6">
              We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p className="text-white/80 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
            <p className="text-white/80 mb-6">
              VibeCODER is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-white/80 mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@vibecoder.com" className="text-blue-400 hover:text-blue-300">
                  privacy@vibecoder.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
