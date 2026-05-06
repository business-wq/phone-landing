// V2 — Editorial: cremiger Hintergrund, große Serif-Typo, Magazin-Stil
function V2_Editorial({ tweaks }) {
  const [page, setPage] = React.useState(0);
  const slides = [
    { num: '01', word: 'Empfangen', body: 'Eine flüchtige Eingebung, ein Traum bei Nacht, ein Wort im Gebet — alles findet hier seinen Platz.' },
    { num: '02', word: 'Bewahren', body: 'Sprich frei. Wir transkribieren, ordnen und machen jedes Wort wiederfindbar.' },
    { num: '03', word: 'Erkennen', body: 'Im Rückblick wird sichtbar, was sich erfüllt hat — leise, aber unverkennbar.' },
  ];
  const s = slides[page];
  const isLast = page === slides.length - 1;
  const accent = '#FF2D55';

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: '#F4F1EB',
      fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
    }}>
      {/* Top masthead */}
      <div style={{
        position: 'absolute', top: 64, left: 28, right: 28,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,.15)', paddingBottom: 12,
      }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: 20, fontWeight: 500, letterSpacing: '0.18em', color: '#1a1814' }}>PHONĒ</div>
        <div style={{ fontSize: 10, letterSpacing: '0.28em', color: 'rgba(0,0,0,.5)', fontWeight: 600 }}>BAND I · {s.num}</div>
      </div>

      {/* Big number watermark */}
      <div style={{
        position: 'absolute', top: 130, left: 24,
        fontFamily: '"Fraunces", Georgia, serif',
        fontSize: 220, lineHeight: 0.9, fontWeight: 300,
        color: 'transparent',
        WebkitTextStroke: '1.5px rgba(0,0,0,.08)',
        userSelect: 'none', pointerEvents: 'none',
      }}>{s.num}</div>

      {/* Word */}
      <div style={{
        position: 'absolute', top: 270, left: 28, right: 28,
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.32em', color: accent, fontWeight: 700, marginBottom: 18 }}>
          ÜBUNG · {page + 1} VON {slides.length}
        </div>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: 64, lineHeight: 1, fontWeight: 400,
          letterSpacing: '-0.025em', color: '#0e0c0a',
        }}>{s.word}.</div>
      </div>

      {/* Body */}
      <div style={{
        position: 'absolute', top: 400, left: 28, right: 28,
        fontSize: 16, lineHeight: 1.55, color: 'rgba(14,12,10,.72)',
        maxWidth: 320,
      }}>{s.body}</div>

      {/* Footnote */}
      <div style={{
        position: 'absolute', bottom: 188, left: 28, right: 28,
        fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
        fontSize: 14, color: 'rgba(14,12,10,.55)', lineHeight: 1.5,
        borderLeft: `2px solid ${accent}`, paddingLeft: 14,
      }}>„Schreibe das Gesicht auf und grabe es in Tafeln, damit es lesbar sei."</div>

      {/* Pagination */}
      <div style={{
        position: 'absolute', bottom: 138, left: 28, right: 28,
        display: 'flex', gap: 8, alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <div key={i} onClick={() => setPage(i)} style={{
            flex: 1, height: 2,
            background: i <= page ? '#0e0c0a' : 'rgba(0,0,0,.15)',
            transition: 'all .4s', cursor: 'pointer',
          }} />
        ))}
      </div>

      {/* Footer CTAs */}
      <div style={{
        position: 'absolute', bottom: 38, left: 28, right: 28,
      }}>
        <button
          onClick={() => isLast ? null : setPage(page + 1)}
          style={{
            width: '100%', height: 56, borderRadius: 0, border: 'none',
            background: '#0e0c0a', color: '#F4F1EB',
            fontSize: 14, fontWeight: 600, letterSpacing: '0.18em',
            cursor: 'pointer',
          }}>
          {isLast ? 'KONTO ERSTELLEN' : 'WEITERLESEN'}
        </button>
        <div style={{
          textAlign: 'center', marginTop: 14, fontSize: 12,
          color: 'rgba(0,0,0,.5)', letterSpacing: '0.05em',
        }}>Bereits Leser? <u>Einloggen</u></div>
      </div>
    </div>
  );
}
window.V2_Editorial = V2_Editorial;
