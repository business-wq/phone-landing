// V6 — Light Sanctuary: heller Modus, sakral, viel Weißraum, ein einziger Screen mit Scroll-Reveal
function V6_LightSanctuary({ tweaks }) {
  const [page, setPage] = React.useState(0);
  const slides = [
    { mark: '✶', word: 'Höre', body: 'Was kaum hörbar ist, verdient eine Stimme. Halte fest, was sonst verfliegt.' },
    { mark: '✦', word: 'Bewahre', body: 'Sprich frei. PHONĒ ordnet, transkribiert und macht es wiederfindbar.' },
    { mark: '✧', word: 'Erkenne', body: 'Im Rückblick wird sichtbar, was sich erfüllt — Wort für Wort.' },
  ];
  const s = slides[page];
  const isLast = page === slides.length - 1;
  const accent = '#FF2D55';

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: 'linear-gradient(180deg, #FBFAF7 0%, #F4EFE8 100%)',
      fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
    }}>
      {/* Subtle radial halo */}
      <div style={{
        position: 'absolute', top: -200, left: '50%', width: 600, height: 600, marginLeft: -300,
        background: `radial-gradient(circle, ${accent}14 0%, transparent 60%)`,
        borderRadius: '50%',
      }} />

      {/* Top mark */}
      <div style={{
        position: 'absolute', top: 78, left: 0, right: 0, textAlign: 'center',
      }}>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: 34, color: accent, fontWeight: 300, lineHeight: 1,
          transition: 'transform .6s', transform: `rotate(${page * 60}deg)`,
        }}>{s.mark}</div>
        <div style={{
          fontSize: 11, letterSpacing: '0.32em', color: 'rgba(0,0,0,.45)',
          fontWeight: 600, marginTop: 18,
        }}>STILLE · ÜBUNG {page + 1}/{slides.length}</div>
      </div>

      {/* Center: large word + body */}
      <div style={{
        position: 'absolute', top: 220, left: 32, right: 32,
      }}>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: 76, lineHeight: 0.95, fontWeight: 300,
          color: '#1a1612', letterSpacing: '-0.035em',
        }}>{s.word}.</div>
        <div style={{ height: 1, width: 36, background: accent, margin: '32px 0 24px' }} />
        <div style={{
          fontSize: 16, lineHeight: 1.6, color: 'rgba(26,22,18,.7)',
          maxWidth: 300, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
        }}>{s.body}</div>
      </div>

      {/* Verse footnote */}
      <div style={{
        position: 'absolute', bottom: 240, left: 32, right: 32,
        display: 'flex', gap: 12,
      }}>
        <div style={{ width: 2, background: 'rgba(0,0,0,.15)' }} />
        <div>
          <div style={{
            fontSize: 14, fontStyle: 'italic', color: 'rgba(26,22,18,.55)', lineHeight: 1.5,
            fontFamily: '"Fraunces", Georgia, serif',
          }}>„Rede, denn dein Knecht hört."</div>
          <div style={{ fontSize: 11, color: 'rgba(26,22,18,.4)', marginTop: 4, letterSpacing: '0.08em' }}>1. SAMUEL 3,10</div>
        </div>
      </div>

      {/* Indicator */}
      <div style={{
        position: 'absolute', bottom: 184, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 6,
      }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => setPage(i)} style={{
            width: i === page ? 24 : 6, height: 6, borderRadius: 3,
            background: i === page ? '#1a1612' : 'rgba(26,22,18,.18)',
            transition: 'all .4s', cursor: 'pointer',
          }} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: 'absolute', bottom: 38, left: 24, right: 24 }}>
        <button
          onClick={() => isLast ? null : setPage(page + 1)}
          style={{
            width: '100%', height: 58, borderRadius: 999, border: 'none',
            background: '#1a1612', color: '#FBFAF7',
            fontSize: 15, fontWeight: 600,
            fontFamily: '"Poppins", -apple-system, system-ui, sans-serif',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            cursor: 'pointer',
            boxShadow: '0 12px 28px rgba(26,22,18,.25)',
          }}>
          <span>{isLast ? 'Konto erstellen' : 'Weiter'}</span>
          <span>→</span>
        </button>
        <div style={{
          textAlign: 'center', marginTop: 14, fontSize: 13,
          color: 'rgba(26,22,18,.5)',
        }}>Bereits dabei? <span style={{ color: '#1a1612', fontWeight: 600 }}>Einloggen</span></div>
      </div>
    </div>
  );
}
window.V6_LightSanctuary = V6_LightSanctuary;
