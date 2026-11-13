import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const Play = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5z" fill="currentColor" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </Base>
);

export const Chart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20h16" />
    <path d="M7 16v-3M12 16V9M17 16V5" />
  </Base>
);

export const Award = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Base>
);

export const Star = (p: IconProps) => (
  <Base {...p} fill="currentColor" stroke="none">
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.3c2.1.7 3.5 2.8 3.5 5.7" />
  </Base>
);

export const Device = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="14" height="10" rx="1.5" />
    <path d="M1.5 17.5h17" />
    <rect x="17" y="9" width="5" height="10" rx="1" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);

export const Cap =(p: IconProps) => (
  <Base {...p}>
    <path d="M12 4L2 9l10 5 10-5z" fill="currentColor" />
    <path d="M6 11.2V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.8" />
    <path d="M21 9.5V15" />
  </Base>
);

export const Plus = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);
