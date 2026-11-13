import { Koala } from "@/components/koala";
import { ArrowRight } from "@/components/icons";

export function FinalCta() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-6 py-12 text-cream sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <svg viewBox="0 0 400 300" className="absolute -bottom-10 -right-10 h-56 w-auto sm:h-72" aria-hidden="true">
          <path d="M120 300 C80 220 180 180 220 120 C260 60 340 60 400 30 V300 Z" fill="#8fb79e" opacity="0.5" />
        </svg>
        <div className="relative grid items-center gap-8 text-center md:grid-cols-[1.3fr_1fr] md:gap-10 md:text-left">
          <div>
            <h2 className="text-balance text-[clamp(1.75rem,7vw,3rem)] font-extrabold leading-tight tracking-tight">
              Seu futuro começa com <span className="text-sun">conhecimento.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-cream/75 sm:text-lg md:mx-0">
              Comece hoje com uma aula grátis em qualquer curso. Sem cartão de crédito.
            </p>
            <a
              href="#cursos"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sun px-7 py-3.5 font-bold text-forest transition hover:bg-sun-600 min-[420px]:w-auto"
            >
              Explore nossos cursos <ArrowRight className="size-5" />
            </a>
          </div>
          <Koala pose="peek" className="relative mx-auto w-48 sm:w-60 md:w-full md:max-w-xs" title="Koala sorrindo" />
        </div>
      </div>
    </section>
  );
}
