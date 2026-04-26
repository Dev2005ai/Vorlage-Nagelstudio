export function NailhausLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NAILHAUS Logo"
    >
      {/* Outer circle */}
      <circle cx="24" cy="24" r="21.5" stroke="#E8A0B0" strokeWidth="0.75" fill="none" />

      {/* Three nails side by side – left */}
      <rect x="11" y="15" width="7" height="19" rx="3.5" stroke="#E8A0B0" strokeWidth="1.25" fill="none" />

      {/* Center nail – slightly taller */}
      <rect x="20.5" y="12" width="7" height="23" rx="3.5" stroke="#E8A0B0" strokeWidth="1.25" fill="none" />

      {/* Right nail */}
      <rect x="30" y="15" width="7" height="19" rx="3.5" stroke="#E8A0B0" strokeWidth="1.25" fill="none" />

      {/* Sparkle dot on tallest nail tip */}
      <circle cx="24" cy="12" r="1.5" fill="#E8A0B0" />

      {/* Small accent line at nail base */}
      <path
        d="M13 38 Q24 40 35 38"
        stroke="#E8A0B0"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
