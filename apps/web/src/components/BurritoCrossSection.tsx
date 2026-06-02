// Hand-drawn cross-section of a California burrito. Pure inline SVG so it
// scales crisply at any size and inherits the marker-ink aesthetic.
// Layer order (top → bottom inside the wrap):
//   crema → pico → guacamole → queso → carne asada → papas

export function BurritoCrossSection({
  className,
  layerStroke = "#1A1A1A",
}: {
  className?: string;
  layerStroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cross-section of a California burrito showing six layers"
      style={{ filter: "drop-shadow(0 12px 32px rgba(26,26,26,0.25))" }}
    >
      {/* Subtle paper-grain backing */}
      <defs>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="1.4" />
        </filter>
        <pattern id="fries" x="0" y="0" width="14" height="22" patternUnits="userSpaceOnUse">
          <rect width="14" height="22" fill="#F5C249" />
          <rect x="2" y="2" width="3" height="18" fill="#D9A636" rx="1" />
          <rect x="7" y="3" width="3" height="16" fill="#D9A636" rx="1" />
          <rect x="11" y="2" width="2" height="18" fill="#D9A636" rx="1" />
        </pattern>
        <pattern id="pico" x="0" y="0" width="16" height="14" patternUnits="userSpaceOnUse">
          <rect width="16" height="14" fill="#C0392B" />
          <circle cx="4" cy="4" r="2.2" fill="#FAF6EE" />
          <circle cx="11" cy="9" r="1.6" fill="#6FA84C" />
          <circle cx="13" cy="3" r="1.4" fill="#FAF6EE" />
          <circle cx="3" cy="11" r="1.4" fill="#6FA84C" />
        </pattern>
      </defs>

      {/* Outer tortilla — slightly wobbly ellipse */}
      <g filter="url(#rough)">
        {/* shadow under tortilla */}
        <ellipse cx="200" cy="340" rx="160" ry="14" fill="rgba(26,26,26,0.18)" />

        {/* Tortilla outer */}
        <path
          d="M 60 200 C 60 90, 340 90, 340 200 C 340 310, 60 310, 60 200 Z"
          fill="#F3E2B6"
          stroke={layerStroke}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Tortilla inner edge (a slightly smaller ellipse for the rolled wrap effect) */}
        <path
          d="M 80 200 C 80 115, 320 115, 320 200 C 320 285, 80 285, 80 200 Z"
          fill="#E6D9B8"
          stroke={layerStroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* === Filling layers (clipped inside the inner tortilla) === */}
        <clipPath id="fillingClip">
          <path d="M 80 200 C 80 115, 320 115, 320 200 C 320 285, 80 285, 80 200 Z" />
        </clipPath>

        <g clipPath="url(#fillingClip)">
          {/* Crema (top) */}
          <rect x="60" y="120" width="280" height="28" fill="#FBF6E4" />
          {/* Pico */}
          <rect x="60" y="148" width="280" height="26" fill="url(#pico)" />
          {/* Guacamole */}
          <rect x="60" y="174" width="280" height="28" fill="#6FA84C" />
          <path d="M 70 178 q 10 6 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0 t 22 0" stroke="#4A7C2E" strokeWidth="2.5" fill="none" />
          {/* Queso (melted, drippy bottom edge) */}
          <rect x="60" y="202" width="280" height="22" fill="#F5C249" />
          <path d="M 70 224 q 8 12 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0 t 18 0"
            stroke={layerStroke} strokeWidth="2" fill="#F5C249" />
          {/* Carne asada — irregular bits */}
          <rect x="60" y="222" width="280" height="32" fill="#7B370A" />
          <g fill="#4D2207">
            <ellipse cx="100" cy="234" rx="10" ry="4" />
            <ellipse cx="140" cy="244" rx="14" ry="5" />
            <ellipse cx="180" cy="232" rx="11" ry="4" />
            <ellipse cx="220" cy="240" rx="13" ry="4" />
            <ellipse cx="260" cy="234" rx="10" ry="4" />
            <ellipse cx="300" cy="244" rx="13" ry="5" />
          </g>
          {/* Papas (bottom — the rule) */}
          <rect x="60" y="254" width="280" height="30" fill="url(#fries)" />
        </g>

        {/* Hand-drawn separation lines between layers */}
        <g stroke={layerStroke} strokeWidth="1.8" fill="none" strokeLinecap="round">
          <path d="M 84 148 Q 200 150, 316 148" />
          <path d="M 84 174 Q 200 172, 316 174" />
          <path d="M 84 202 Q 200 204, 316 202" />
          <path d="M 84 222 Q 200 220, 316 222" />
          <path d="M 84 254 Q 200 256, 316 254" />
        </g>
      </g>
    </svg>
  );
}
