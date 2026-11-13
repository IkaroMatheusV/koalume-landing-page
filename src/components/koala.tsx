type Pose = "head" | "laptop" | "book" | "wave" | "peek";

const C = {
  outline: "#0b3d2e",
  fur: "#c9c9c1",
  furLight: "#e9e8e1",
  inner: "#f8f7f2",
  nose: "#1f1f1f",
  cap: "#0b3d2e",
  tassel: "#f4b942",
  laptop: "#1f1f1f",
  book: "#145440",
  sage: "#8fb79e",
} as const;

const SW = 6; // espessura do contorno

/** Cabeça com capelo, desenhada em um viewBox 200x200. */
function Head({ isWinking = false }: { isWinking?: boolean }) {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* orelhas */}
      <circle cx="44" cy="92" r="34" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
      <circle cx="156" cy="92" r="34" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
      <circle cx="46" cy="95" r="18" fill={C.inner} />
      <circle cx="154" cy="95" r="18" fill={C.inner} />
      {/* rosto */}
      <ellipse cx="100" cy="118" rx="62" ry="54" fill={C.furLight} stroke={C.outline} strokeWidth={SW} />
      {/* olhos felizes */}
      <path d="M68 114 Q79 101 90 114" fill="none" stroke={C.nose} strokeWidth="5.5" />
      {isWinking ? (
        <path d="M110 112 L130 112" fill="none" stroke={C.nose} strokeWidth="5.5" />
      ) : (
        <path d="M110 114 Q121 101 132 114" fill="none" stroke={C.nose} strokeWidth="5.5" />
      )}
      {/* bochechas */}
      <ellipse cx="66" cy="132" rx="8" ry="5" fill="#f4b942" opacity="0.28" />
      <ellipse cx="134" cy="132" rx="8" ry="5" fill="#f4b942" opacity="0.28" />
      {/* nariz e boca */}
      <path d="M100 113 C86 113 84 128 88 138 C92 147 108 147 112 138 C116 128 114 113 100 113 Z" fill={C.nose} />
      <ellipse cx="95" cy="121" rx="3.5" ry="2.5" fill="#ffffff" opacity="0.35" />
      <path d="M92 153 Q100 160 108 153" fill="none" stroke={C.nose} strokeWidth="4" />
      {/* capelo */}
      <path d="M68 60 L68 76 Q100 90 132 76 L132 60 Z" fill={C.cap} stroke={C.inner} strokeWidth="2.5" />
      <path d="M100 26 L156 48 L100 70 L44 48 Z" fill={C.cap} stroke={C.inner} strokeWidth="3" />
      <path d="M100 48 Q122 52 128 58 L128 80" fill="none" stroke={C.tassel} strokeWidth="4" />
      <rect x="123" y="78" width="10" height="16" rx="3" fill={C.tassel} />
      <circle cx="100" cy="48" r="5" fill={C.tassel} />
    </g>
  );
}

function Body() {
  return (
    <g>
      <ellipse cx="100" cy="222" rx="56" ry="48" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
      <ellipse cx="100" cy="230" rx="34" ry="32" fill={C.inner} />
    </g>
  );
}

export function Koala({
  pose = "head",
  className,
  title = "Mascote Koalume",
}: {
  pose?: Pose;
  className?: string;
  title?: string;
}) {
  if (pose === "head") {
    return (
      <svg viewBox="4 20 192 158" className={className} role="img" aria-label={title}>
        <Head />
      </svg>
    );
  }

  if (pose === "peek") {
    return (
      <svg viewBox="4 20 192 150" className={className} role="img" aria-label={title}>
        <Head isWinking />
        <g stroke={C.outline} strokeWidth={SW} fill={C.fur}>
          <ellipse cx="58" cy="166" rx="20" ry="12" />
          <ellipse cx="142" cy="166" rx="20" ry="12" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 20 200 252" className={className} role="img" aria-label={title}>
      <Body />
      <Head />

      {pose === "laptop" && (
        <g strokeLinejoin="round">
          <path d="M38 196 H162 L152 262 H48 Z" fill={C.laptop} stroke={C.outline} strokeWidth="4" />
          <path d="M92 222 q8 -10 16 0 q-2 10 -8 10 q-6 0 -8 -10 Z" fill="#3a3a3a" />
          <ellipse cx="44" cy="214" rx="16" ry="12" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
          <ellipse cx="156" cy="214" rx="16" ry="12" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
        </g>
      )}

      {pose === "book" && (
        <g strokeLinejoin="round">
          <path d="M100 206 L52 196 V252 L100 262 Z" fill={C.book} stroke={C.outline} strokeWidth="4" />
          <path d="M100 206 L148 196 V252 L100 262 Z" fill={C.book} stroke={C.outline} strokeWidth="4" />
          <path d="M60 210 L92 216 M60 222 L92 228 M108 216 L140 210 M108 228 L140 222" stroke={C.sage} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="52" cy="228" rx="14" ry="16" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
          <ellipse cx="148" cy="228" rx="14" ry="16" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
        </g>
      )}

      {pose === "wave" && (
        <g strokeLinejoin="round" strokeLinecap="round">
          <ellipse cx="48" cy="232" rx="14" ry="20" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
          <path d="M146 196 Q170 168 172 140" fill="none" stroke={C.outline} strokeWidth="30" />
          <path d="M146 196 Q170 168 172 140" fill="none" stroke={C.fur} strokeWidth="18" />
          <circle cx="172" cy="134" r="15" fill={C.fur} stroke={C.outline} strokeWidth={SW} />
          <path d="M186 104 l8 -10 M192 122 l12 -2 M168 100 l0 -12" stroke={C.tassel} strokeWidth="4" />
        </g>
      )}
    </svg>
  );
}
