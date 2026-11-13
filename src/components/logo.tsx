import { Koala } from "./koala";

export function Logo({
  isInverted = false,
  hasSlogan = false,
  className = "",
}: {
  isInverted?: boolean;
  hasSlogan?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Koala pose="head" className="h-9 w-auto shrink-0" title="" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight ${isInverted ? "text-cream" : "text-forest"}`}
        >
          KOALUME
        </span>
        {hasSlogan && (
          <span className={`mt-1 text-[11px] tracking-[0.18em] ${isInverted ? "text-sage-200" : "text-forest/70"}`}>
            Aprender transforma.
          </span>
        )}
      </span>
    </span>
  );
}
