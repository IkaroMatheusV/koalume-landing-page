import { Koala } from "@/components/koala";
import { ArrowRight, Award, Play } from "@/components/icons";
import { Sparks } from "./decorations";

const stats = [
  { value: "85 mil+", label: "alunos" },
  { value: "4,8", label: "nota média" },
  { value: "7 dias", label: "de garantia" },
];

/** Formas orgânicas do lado direito; só aparecem quando o hero tem duas colunas. */
function DesktopShapes() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="absolute inset-y-0 right-0 hidden h-full w-auto max-w-none lg:block"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <path d="M330 0 C250 120 380 220 300 330 C230 430 330 520 300 600 H800 V0 Z" fill="#145440" />
      <path d="M480 0 C420 110 540 200 470 320 C410 420 520 520 480 600 H800 V0 Z" fill="#8fb79e" opacity="0.55" />
      <path d="M620 0 C580 140 700 230 640 360 C600 450 690 540 660 600 H800 V0 Z" fill="#cfe0d4" opacity="0.5" />
    </svg>
  );
}

/** No celular/tablet as formas ficam só atrás do mascote, sem tirar contraste do texto. */
function MobileShapes() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-x-0 bottom-0 h-[55%] w-full lg:hidden"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 120 C80 40 160 140 240 80 S360 20 400 60 V300 H0 Z" fill="#145440" />
      <path d="M0 190 C100 130 180 210 280 150 S380 120 400 140 V300 H0 Z" fill="#8fb79e" opacity="0.55" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-forest text-cream">
      <DesktopShapes />
      <MobileShapes />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-12 pb-0 sm:px-6 sm:pt-16 md:gap-10 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:py-24 xl:py-28">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-medium text-sage-200 ring-1 ring-cream/15 sm:px-4 sm:text-sm">
            <span className="size-2 shrink-0 rounded-full bg-sun" /> Mais de 120 cursos com certificado
          </p>

          <h1 className="mt-5 text-[clamp(2.75rem,12vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-6 lg:text-[clamp(3.5rem,6vw,4.75rem)]">
            Aprender
            <br />
            <span className="text-sun">transforma.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base text-cream/80 sm:mt-6 sm:text-lg lg:mx-0 xl:text-xl">
            Descubra cursos online de qualidade para evoluir na sua carreira e na sua vida — no seu ritmo, de qualquer
            lugar.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:justify-center sm:gap-4 lg:justify-start">
            <a
              href="#cursos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sun px-7 py-3.5 font-bold text-forest shadow-[0_10px_30px_-10px_rgba(244,185,66,0.8)] transition hover:bg-sun-600"
            >
              Explorar cursos <ArrowRight className="size-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-cream ring-1 ring-cream/30 transition hover:bg-cream/10"
            >
              <Play className="size-5" /> Como funciona
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 sm:gap-6 lg:mx-0 lg:mt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-xs text-cream/65 sm:text-sm">{stat.label}</dt>
                <dd className="text-[clamp(1.125rem,5.5vw,1.875rem)] font-extrabold whitespace-nowrap text-cream">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] min-[420px]:max-w-[300px] sm:max-w-sm lg:max-w-lg">
          <Sparks className="absolute -left-6 top-12 size-12 -rotate-12 sm:size-16" />
          <Sparks className="absolute -right-4 top-2 size-10 rotate-45 sm:size-12" />
          <Koala
            pose="laptop"
            className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
            title="Koala estudando no notebook"
          />

          <div className="absolute -left-10 bottom-10 hidden items-center gap-3 rounded-2xl bg-cream p-3 pr-5 text-forest shadow-xl sm:flex lg:-left-2">
            <span className="grid size-10 place-items-center rounded-xl bg-sage-100">
              <Award className="size-5" />
            </span>
            <span className="text-sm leading-tight">
              <strong className="block">Certificado emitido!</strong>
              <span className="text-ink/60">Análise de Dados</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
