export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #fdf6e3, #e0f7e9)',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      {/* Logo */}
      <img
        src="/tea,png.png"
        alt="RajSuman Logo"
        style={{
          height: '120px',
          width: 'auto',
          marginBottom: '20px'
        }}
      />

      {/* Brand Name */}
      <h1 style={{ fontSize: '2.5rem', color: '#5C4033', marginBottom: '10px' }}>
        RajSuman
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#2f7d4f', marginBottom: '10px' }}>
        TEA FLAVOURS
      </h2>

      {/* Tagline */}
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555' }}>
        Where Human Meets Relax ☕<br />
        A sip of soul in every blend.
      </p>
    </div>
  );
}