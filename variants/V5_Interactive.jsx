// V5 — Interactive Demo: User erlebt eine fiktive Eingebung-Aufnahme im Onboarding
function V5_Interactive({ tweaks }) {
  const [step, setStep] = React.useState(0);
  // step 0: prompt to record  | 1: recording | 2: transcribing | 3: done with summary
  const accent = '#FF2D55';

  // Auto-advance recording → transcribing → done
  React.useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 2400);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 1800);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      background: '#0c0c0e',
      fontFamily: '"Poppins", -apple-system, system-ui, sans-serif'SF Pro", system-ui',
    }}>
      {/* Soft gradient backdrop */}
      <div style={{
        position: 'absolute', top: -100, left: -50, right: -50, height: 400,
        background: `radial-gradient(ellipse at center, ${accent}22 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }} />

      {/* Top */}
      <div style={{ position: 'absolute', top: 64, left: 24, right: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.32em', color: '#fff' }}>PHONĒ</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Probier es aus →</div>
      </div>

      {/* Step label */}
      <div style={{ position: 'absolute', top: 116, left: 24, right: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.32em', color: accent, fontWeight: 700 }}>
          DEMO · SCHRITT {Math.min(step + 1, 4)} VON 4
        </div>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: 32, lineHeight: 1.1, fontWeight: 400,
          color: '#fff', letterSpacing: '-0.02em', marginTop: 10,
        }}>
          {step === 0 && 'Erfahre, wie es sich\nanfühlt.'}
          {step === 1 && 'Ich höre dich.'}
          {step === 2 && 'Ich verstehe...'}
          {step === 3 && 'Bewahrt.\nFür immer.'}
        </div>
      </div>

      {/* Center stage */}
      <div style={{
        position: 'absolute', top: 280, bottom: 230, left: 24, right: 24,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      }}>
        {step <= 1 && (
          <>
            <button
              onClick={() => step === 0 ? setStep(1) : null}
              style={{
                width: 132, height: 132, borderRadius: '50%', border: 'none',
                background: `radial-gradient(circle at 30% 30%, ${accent}, #c9143b)`,
                boxShadow: step === 1
                  ? `0 0 0 12px ${accent}22, 0 0 0 28px ${accent}11, 0 12px 32px ${accent}55`
                  : `0 12px 32px ${accent}55`,
                color: '#fff', fontSize: 44, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: step === 1 ? 'pulse 1.4s ease-in-out infinite' : 'none',
              }}>
              <svg width="38" height="48" viewBox="0 0 24 24" fill="white">
                <path d="M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3z"/>
                <path d="M19 11a1 1 0 00-2 0 5 5 0 01-10 0 1 1 0 00-2 0 7 7 0 006 6.92V21h-2a1 1 0 000 2h6a1 1 0 000-2h-2v-3.08A7 7 0 0019 11z"/>
              </svg>
            </button>
            <style>{`@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }`}</style>
            {step === 1 && (
              <div style={{ marginTop: 28, display: 'flex', gap: 4, alignItems: 'flex-end', height: 36 }}>
                {[14, 22, 32, 18, 26, 30, 16, 22, 28, 14].map((h, i) => (
                  <div key={i} style={{
                    width: 3, height: h, borderRadius: 2,
                    background: '#fff', opacity: 0.85,
                    animation: `bar 0.9s ease-in-out ${i * 0.1}s infinite`,
                  }} />
                ))}
                <style>{`@keyframes bar { 0%,100%{transform:scaleY(0.5)} 50%{transform:scaleY(1.4)} }`}</style>
              </div>
            )}
            <div style={{ marginTop: step === 1 ? 18 : 24, fontSize: 14, color: 'rgba(255,255,255,.7)' }}>
              {step === 0 ? 'Tippe — und erlebe es' : '00:08 · sprich was Gott dir gibt'}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{
              width: 132, height: 132, borderRadius: '50%',
              border: `2px solid ${accent}`,
              borderTopColor: 'transparent',
              animation: 'spin 1s linear infinite',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,.7)' }}>Transkribiere & ordne ein…</div>
          </>
        )}

        {step === 3 && (
          <div style={{
            width: '100%', maxWidth: 320,
            background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 24, padding: 22,
            animation: 'fadeUp .5s ease-out',
          }}>
            <style>{`@keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }`}</style>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
              <div style={{ fontSize: 11, color: accent, fontWeight: 700, letterSpacing: '0.18em' }}>EINGEBUNG · HEUTE</div>
            </div>
            <div style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontSize: 18, lineHeight: 1.45, color: '#fff', fontStyle: 'italic',
            }}>„Ich sah ein Licht über meiner Familie. Es war warm. Beständig."</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
              {['Familie', 'Vision', 'Schutz'].map(t => (
                <div key={t} style={{
                  fontSize: 11, padding: '4px 10px', borderRadius: 999,
                  background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.8)',
                }}>{t}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Step dots */}
      <div style={{ position: 'absolute', bottom: 130, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            width: i === step ? 22 : 6, height: 6, borderRadius: 3,
            background: i <= step ? accent : 'rgba(255,255,255,.2)',
            transition: 'all .4s',
          }} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: 'absolute', bottom: 38, left: 24, right: 24 }}>
        <button
          onClick={() => step === 0 ? setStep(1) : step === 3 ? null : null}
          disabled={step === 1 || step === 2}
          style={{
            width: '100%', height: 56, borderRadius: 18, border: 'none',
            background: step >= 3 ? accent : '#1f1f23',
            color: '#fff', fontSize: 16, fontWeight: 600, cursor: 'pointer',
            opacity: (step === 1 || step === 2) ? 0.5 : 1,
            transition: 'all .3s',
          }}>
          {step === 0 && 'Demo starten'}
          {step === 1 && 'Aufnahme läuft…'}
          {step === 2 && 'Wird verarbeitet…'}
          {step === 3 && 'Mein Konto erstellen →'}
        </button>
        <div style={{ textAlign: 'center', marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
          {step === 3 ? <span>Bereits dabei? <span style={{ color: '#fff' }}>Einloggen</span></span> : 'Diese Aufnahme bleibt nur in der Demo.'}
        </div>
      </div>
    </div>
  );
}
window.V5_Interactive = V5_Interactive;
