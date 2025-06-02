export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4c1d95 0%, #1e3a8a 50%, #312e81 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <span style={{ fontStyle: 'italic', textTransform: 'lowercase' }}>vibe</span>
          <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>CODER</span>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          opacity: 0.9,
          marginBottom: '2rem'
        }}>
          AI-Powered Development Environment
        </p>
        <div style={{ marginBottom: '2rem' }}>
          <a
            href="/auth/signup"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'background-color 0.2s'
            }}
          >
            Get Started
          </a>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</a>
          <a href="/docs" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Docs</a>
          <a href="/community" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Community</a>
          <a href="/discover" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Discover</a>
        </div>
      </div>
    </div>
  )
}
