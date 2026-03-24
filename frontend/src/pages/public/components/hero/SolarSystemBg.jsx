export default function SolarSystemBg() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
      {/* Vignette green gradient from edges and corners */}
      <div className="absolute inset-0 w-full h-full" style={{
        background: `
          radial-gradient(ellipse 90% 70% at 0% 0%, #d1fadf 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 100% 0%, #d1fadf 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 0% 100%, #d1fadf 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 100% 100%, #d1fadf 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 50% 0%, #caffc6 0%, transparent 80%),
          radial-gradient(ellipse 30% 15% at 50% 50%, #eaffea 0%, transparent 80%)
        `,
        opacity: 0.32,
        zIndex: 0,
        mixBlendMode: 'lighten',
      }} />
      {/* Left top corner solar system */}
      <svg className="absolute left-[-320px] top-[-320px] animate-spin-slow" width="640" height="640" viewBox="0 0 640 640" fill="none">
        {/* Outer ring */}
        <circle cx="320" cy="320" r="300" stroke="#d1fadf" strokeWidth="2" strokeDasharray="12 12" />
        {/* Dots on outer ring */}
        <circle cx="320" cy="20" r="8" fill="#111" />
        <circle cx="320" cy="620" r="8" fill="#111" />
        <circle cx="600" cy="320" r="8" fill="#111" />
        <circle cx="40" cy="320" r="8" fill="#111" />
        {/* Middle ring */}
        <circle cx="320" cy="320" r="200" stroke="#caffc6" strokeWidth="1.5" strokeDasharray="8 8" />
        {/* Dots on middle ring */}
        <circle cx="320" cy="120" r="6" fill="#00ff5f" />
        <circle cx="320" cy="520" r="6" fill="#00ff5f" />
        <circle cx="520" cy="320" r="6" fill="#00ff5f" />
        <circle cx="120" cy="320" r="6" fill="#00ff5f" />
        {/* Inner ring */}
        <circle cx="320" cy="320" r="100" stroke="#eaffea" strokeWidth="1" strokeDasharray="6 6" />
        {/* Dots on inner ring */}
        <circle cx="320" cy="220" r="4" fill="#caffc6" />
        <circle cx="320" cy="420" r="4" fill="#caffc6" />
        <circle cx="220" cy="320" r="4" fill="#caffc6" />
        <circle cx="420" cy="320" r="4" fill="#caffc6" />
      </svg>
      {/* Right top corner solar system */}
      <svg className="absolute right-[-320px] top-[-320px] animate-spin-slow-reverse" width="640" height="640" viewBox="0 0 640 640" fill="none">
        {/* Outer ring */}
        <circle cx="320" cy="320" r="300" stroke="#d1fadf" strokeWidth="2" strokeDasharray="12 12" />
        {/* Dots on outer ring */}
        <circle cx="320" cy="20" r="8" fill="#111" />
        <circle cx="320" cy="620" r="8" fill="#111" />
        <circle cx="600" cy="320" r="8" fill="#111" />
        <circle cx="40" cy="320" r="8" fill="#111" />
        {/* Middle ring */}
        <circle cx="320" cy="320" r="200" stroke="#caffc6" strokeWidth="1.5" strokeDasharray="8 8" />
        {/* Dots on middle ring */}
        <circle cx="320" cy="120" r="6" fill="#00ff5f" />
        <circle cx="320" cy="520" r="6" fill="#00ff5f" />
        <circle cx="520" cy="320" r="6" fill="#00ff5f" />
        <circle cx="120" cy="320" r="6" fill="#00ff5f" />
        {/* Inner ring */}
        <circle cx="320" cy="320" r="100" stroke="#eaffea" strokeWidth="1" strokeDasharray="6 6" />
        {/* Dots on inner ring */}
        <circle cx="320" cy="220" r="4" fill="#caffc6" />
        <circle cx="320" cy="420" r="4" fill="#caffc6" />
        <circle cx="220" cy="320" r="4" fill="#caffc6" />
        <circle cx="420" cy="320" r="4" fill="#caffc6" />
      </svg>
      {/* Animation styles */}
      <style>{`
        .animate-spin-slow {
          animation: spin 24s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-reverse 32s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          100% { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
