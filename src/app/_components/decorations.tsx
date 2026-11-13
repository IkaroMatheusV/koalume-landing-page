/** Risquinhos amarelos usados ao redor do mascote. */
export function Sparks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M8 6 L14 16 M22 4 L22 14 M34 10 L28 18"
        stroke="#f4b942"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Sublinhado amarelo à mão livre. */
export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 16" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path d="M4 12 Q100 0 196 10" stroke="#f4b942" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
