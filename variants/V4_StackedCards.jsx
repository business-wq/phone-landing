// V4 — Single Story Card: alles auf einem Screen, gestapelte Karten zum Durchwischen
function V4_StackedCards({ tweaks }) {
  const [active, setActive] = React.useState(0);
  const cards = [
    { icon: '◐', tag: 'EMPFANGEN', title: 'Du hörst.', body: 'Ein Wort, ein Bild, ein Traum.', tint: '#FF2D55' },
    { icon: '◑', tag: 'BEWAHREN', title: 'Du sprichst.', body: 'PHONĒ schreibt, ordnet, erinnert.', tint: '#7B6BFF' },
    { icon: '◒', tag: 'ERKENNEN', title: 'Es erfüllt sich.', body: 'Im Rückblick wird es sichtbar.', tint: '#F5A623' },
  ];
  const accent = '#FF2D55';

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, #1a1a1f 0%, #0a0a0d 70%)',
      fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
    }}>
      {/* Top: logo + community badge */}
      <div style={{ position: 'absolute', top: 64, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '0.32em', color: '#fff' }}>PHONĒ</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 6, letterSpacing: '0.08em' }}>
          Dein digitales Journal für Prophetien & Träume
        </div>
      </div>

      {/* Stacked cards area */}
      <div style={{ position: 'absolute', top: 156, left: 0, right: 0, height: 360 }}>
        {cards.map((c, i) => {
          const offset = i - active;
          const isActive = i === active;
          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: 'absolute', left: '50%', top: 0,
                width: 280, height: 340,
                marginLeft: -140,
                transform: `translateY(${offset * 14}px) scale(${1 - Math.abs(offset) * 0.06}) rotate(${offset * 2}deg)`,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                zIndex: 100 - Math.abs(offset),
                transition: 'all .55s cubic-bezier(.2,.9,.25,1)',
                background: `linear-gradient(160deg, ${c.tint}22 0%, #1c1c20 50%)`,
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 28,
                padding: 28,
                boxShadow: isActive ? `0 30px 60px rgba(0,0,0,.5), 0 0 0 1px ${c.tint}33` : '0 10px 30px rgba(0,0,0,.4)',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
              }}>
              <div style={{
                width: 56, height: 56, borderRadius: 18,
                background: `linear-gradient(135deg, ${c.tint}, ${c.tint}99)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, color: '#fff', fontWeight: 300,
                boxShadow: `0 8px 24px ${c.tint}55`,
              }}>{c.icon}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.32em', color: c.tint, fontWeight: 700, marginTop: 24 }}>
                {c.tag} · 0{i + 1}
              </div>
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: 38, lineHeight: 1.05, fontWeight: 400,
                color: '#fff', letterSpacing: '-0.02em', marginTop: 8,
              }}>{c.title}</div>
              <div style={{
                fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,.7)',
                marginTop: 12,
              }}>{c.body}</div>
              <div style={{ flex: 1 }} />
              {/* mini progress on card */}
              <div style={{ display: 'flex', gap: 4 }}>
                {cards.map((_, k) => (
                  <div key={k} style={{
                    flex: 1, height: 3, borderRadius: 2,
                    background: k <= i ? c.tint : 'rgba(255,255,255,.12)',
                  }} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <div style={{
        position: 'absolute', bottom: 200, left: 0, right: 0, textAlign: 'center',
        fontSize: 12, color: 'rgba(255,255,255,.4)', letterSpacing: '0.08em',
      }}>↑ tippe Karte um zu blättern ↑</div>

      {/* CTAs */}
      <div style={{ position: 'absolute', bottom: 38, left: 24, right: 24 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 56, borderRadius: 18, border: '1px solid rgba(255,255,255,.15)',
            background: 'transparent', color: '#fff',
            fontSize: 15, fontWeight: 600, cursor: 'pointer',
          }}>Einloggen</button>
          <button
            onClick={() => active < cards.length - 1 ? setActive(active + 1) : null}
            style={{
              flex: 1.6, height: 56, borderRadius: 18, border: 'none',
              background: accent, color: '#fff',
              fontSize: 15, fontWeight: 600, cursor: 'pointer',
              boxShadow: `0 12px 24px ${accent}55`,
            }}>{active < cards.length - 1 ? 'Weiter →' : 'Konto erstellen'}</button>
        </div>
      </div>
    </div>
  );
}
window.V4_StackedCards = V4_StackedCards;
