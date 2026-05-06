// V1 — Cinematic Continuation: Schaf-Welt setzt sich fort, Text liegt auf dem Foto
function V1_Cinematic({ tweaks }) {
  const [page, setPage] = React.useState(0);
  const slides = [
    {
      kicker: 'KAPITEL EINS',
      title: 'Was der Himmel sagt,\nverdient ein Zuhause.',
      body: 'PHONĒ ist dein stilles Archiv für Eingebungen, Träume und prophetische Worte.',
    },
    {
      kicker: 'KAPITEL ZWEI',
      title: 'Sprich es aus.\nWir halten es fest.',
      body: 'Tippe das Mikrofon, sprich frei. Wir transkribieren, taggen und ordnen für dich.',
    },
    {
      kicker: 'KAPITEL DREI',
      title: 'Sieh, wie sich Worte\nerfüllen.',
      body: 'Muster, Wiederholungen, Bestätigungen — sichtbar gemacht in deinem Rückblick.',
    },
  ];
  const s = slides[page];
  const isLast = page === slides.length - 1;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#000' }}>
      {/* Background photo continues from sheep screen */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(assets/sheep_screen.png)',
        backgroundSize: 'cover',
        backgroundPosition: `${50 + page * 8}% center`,
        transition: 'background-position 1.2s cubic-bezier(.2,.8,.2,1), filter .8s',
        filter: `brightness(${0.55 - page * 0.05}) saturate(1.05)`,
      }} />
      {/* Top vignette so kicker reads */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.05) 28%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.85) 100%)',
      }} />

      {/* Kicker */}
      <div style={{
        position: 'absolute', top: 88, left: 0, right: 0,
        textAlign: 'center', color: 'rgba(255,255,255,.78)',
        fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
        fontSize: 11, letterSpacing: '0.32em', fontWeight: 600,
      }}>{s.kicker}</div>

      {/* Page index — vertical, top-right */}
      <div style={{
        position: 'absolute', top: 92, right: 22, display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: 2, height: i === page ? 22 : 10,
            background: i === page ? '#fff' : 'rgba(255,255,255,.35)',
            transition: 'all .4s',
          }} />
        ))}
      </div>

      {/* Bottom block */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 28px 38px',
      }}>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          color: '#fff', fontSize: 34, lineHeight: 1.08,
          fontWeight: 400, letterSpacing: '-0.02em',
          whiteSpace: 'pre-line', marginBottom: 16,
        }}>{s.title}</div>
        <div style={{
          fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
          color: 'rgba(255,255,255,.72)', fontSize: 15, lineHeight: 1.5, fontWeight: 400,
          marginBottom: 28, maxWidth: 320,
        }}>{s.body}</div>

        {/* Single CTA, full width — minimal */}
        <button
          onClick={() => isLast ? null : setPage(page + 1)}
          style={{
            width: '100%', height: 56, borderRadius: 16, border: 'none',
            background: '#fff', color: '#000',
            fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui', fontSize: 16, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 22px', cursor: 'pointer',
          }}>
          <span>{isLast ? 'Konto erstellen' : 'Weiter'}</span>
          <span style={{ fontSize: 18 }}>→</span>
        </button>
        <div style={{
          textAlign: 'center', marginTop: 14,
          color: 'rgba(255,255,255,.55)', fontSize: 13,
          fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
        }}>Bereits dabei? <span style={{ color: '#fff', fontWeight: 500 }}>Einloggen</span></div>
      </div>
    </div>
  );
}
window.V1_Cinematic = V1_Cinematic;
