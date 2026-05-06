// V3 — Aurora: animierter spiritueller Verlauf, mystisch & leuchtend
function V3_Aurora({ tweaks }) {
  const [page, setPage] = React.useState(0);
  const slides = [
    { title: 'Der Himmel\nflüstert.', body: 'Nicht laut. Nicht oft erklärbar. Aber hörbar — wenn du dir einen Ort schaffst, an dem es nachklingt.' },
    { title: 'Du\nbewahrst.', body: 'Was du heute aufnimmst, wird morgen zur Landkarte deines Glaubens.' },
    { title: 'Es\nerfüllt sich.', body: 'Sieh die Linien zwischen damals und heute. Die App verbindet, was du sonst vergessen würdest.' },
  ];
  const s = slides[page];
  const isLast = page === slides.length - 1;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0a0612' }}>
      {/* Aurora layers */}
      <style>{`
        @keyframes aur1 { 0%,100% { transform: translate(-10%, -10%) scale(1.2) rotate(0); } 50% { transform: translate(8%, 12%) scale(1.4) rotate(20deg); } }
        @keyframes aur2 { 0%,100% { transform: translate(20%, 30%) scale(1.3); } 50% { transform: translate(-15%, -8%) scale(1.6); } }
        @keyframes aur3 { 0%,100% { transform: translate(-20%, 40%) scale(1.1); } 50% { transform: translate(25%, -20%) scale(1.4); } }
      `}</style>
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(ellipse 60% 50% at 30% 30%, rgba(255,45,85,.55), transparent 60%)',
        animation: 'aur1 18s ease-in-out infinite',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(ellipse 50% 60% at 70% 70%, rgba(91,107,255,.45), transparent 60%)',
        animation: 'aur2 22s ease-in-out infinite',
        filter: 'blur(50px)',
      }} />
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(ellipse 45% 45% at 50% 90%, rgba(245,166,35,.3), transparent 60%)',
        animation: 'aur3 26s ease-in-out infinite',
        filter: 'blur(60px)',
      }} />
      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        opacity: 0.5, mixBlendMode: 'overlay',
      }} />
      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,.6) 100%)' }} />

      {/* Logo top */}
      <div style={{
        position: 'absolute', top: 78, left: 0, right: 0, textAlign: 'center',
        fontFamily: '"Poppins", -apple-system, system-ui, sans-serif', fontSize: 13, letterSpacing: '0.4em',
        color: 'rgba(255,255,255,.85)', fontWeight: 600,
      }}>P · H · O · N · Ē</div>

      {/* Center content */}
      <div style={{
        position: 'absolute', top: 0, bottom: 200, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 32px',
      }}>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: 52, lineHeight: 0.95, fontWeight: 300,
          color: '#fff', letterSpacing: '-0.03em',
          whiteSpace: 'pre-line',
          textShadow: '0 4px 30px rgba(0,0,0,.4)',
        }}>{s.title}</div>
        <div style={{ height: 1, width: 48, background: 'rgba(255,255,255,.4)', margin: '28px 0' }} />
        <div style={{
          fontFamily: '"Poppins", -apple-system, system-ui, sans-serif',
          fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,.78)',
          fontWeight: 400, maxWidth: 320,
        }}>{s.body}</div>
      </div>

      {/* Page progress as constellation dots */}
      <div style={{
        position: 'absolute', bottom: 168, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 22, alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <div style={{
              width: i === page ? 10 : 6, height: i === page ? 10 : 6,
              borderRadius: '50%',
              background: i === page ? '#fff' : 'rgba(255,255,255,.35)',
              boxShadow: i === page ? '0 0 16px rgba(255,255,255,.8)' : 'none',
              transition: 'all .4s',
            }} />
          </div>
        ))}
      </div>

      {/* Bottom: glass button */}
      <div style={{ position: 'absolute', bottom: 38, left: 24, right: 24 }}>
        <button
          onClick={() => isLast ? null : setPage(page + 1)}
          style={{
            width: '100%', height: 58, borderRadius: 999, border: '1px solid rgba(255,255,255,.25)',
            background: 'rgba(255,255,255,.12)', backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: '#fff', fontSize: 16, fontWeight: 600,
            fontFamily: '"Poppins", -apple-system, system-ui, sans-serif',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
          <span>{isLast ? 'Beginnen' : 'Weiter'}</span>
          <span style={{ fontSize: 16 }}>→</span>
        </button>
        <div style={{
          textAlign: 'center', marginTop: 16,
          color: 'rgba(255,255,255,.55)', fontSize: 13,
          fontFamily: '"Poppins", -apple-system, system-ui, sans-serif',
        }}>Schon ein Konto? <span style={{ color: '#fff' }}>Einloggen</span></div>
      </div>
    </div>
  );
}
window.V3_Aurora = V3_Aurora;
