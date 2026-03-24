export default function GridBg() {
  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none" width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1fae5" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1440" height="800" fill="url(#grid)" />
    </svg>
  );
}
