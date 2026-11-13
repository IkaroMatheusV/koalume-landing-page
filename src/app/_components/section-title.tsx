import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  isCentered?: boolean;
  /** Use em fundos escuros. */
  isInverted?: boolean;
};

export function SectionTitle({ eyebrow, title, children, isCentered = false, isInverted = false }: SectionTitleProps) {
  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] sm:text-sm ${isInverted ? "text-sun" : "text-forest-500"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-balance text-[clamp(1.75rem,6.5vw,2.25rem)] font-extrabold leading-tight tracking-tight ${
          isInverted ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-base sm:text-lg ${isInverted ? "text-cream/75" : "text-ink/70"}`}>{children}</p>
      )}
    </div>
  );
}
