import type { Category, Course } from "../_data-access/get-landing-content";
import { ArrowRight, Clock, Star, Users } from "@/components/icons";
import { formatBRL, formatRating } from "@/lib/format";

const INSTALLMENTS = 12;

const coverStyles: Record<Category, string> = {
  Tecnologia: "bg-forest text-sun",
  Negócios: "bg-sage text-forest",
  Design: "bg-sun text-forest",
  Idiomas: "bg-forest-500 text-cream",
};

const coverGlyph: Record<Category, string> = {
  Tecnologia: "</>",
  Negócios: "%",
  Design: "◐",
  Idiomas: "Aa",
};

/** Cartão de um curso do catálogo (apresentacional). */
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-forest/10 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(11,61,46,0.45)] motion-reduce:hover:translate-y-0">
      <div
        className={`relative flex h-28 items-end justify-between overflow-hidden p-5 sm:h-36 ${coverStyles[course.category]}`}
      >
        <svg viewBox="0 0 200 100" className="absolute -right-6 -top-6 h-40 w-auto opacity-25" aria-hidden="true">
          <path d="M0 60 C40 10 90 100 140 40 S200 30 200 30 V0 H0 Z" fill="currentColor" />
        </svg>
        <span className="relative text-4xl font-extrabold leading-none opacity-90 sm:text-5xl" aria-hidden="true">
          {coverGlyph[course.category]}
        </span>
        {course.badge && (
          <span className="relative rounded-full bg-cream px-3 py-1 text-xs font-bold text-forest">{course.badge}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-sage-100 px-2.5 py-1 text-forest">{course.category}</span>
          <span className="text-forest/60">{course.level}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-forest">{course.title}</h3>
        <p className="mt-1 text-sm text-ink/60">com {course.instructor}</p>

        <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/70">
          <div className="flex items-center gap-1">
            <Star className="size-4 text-sun" />
            <dt className="sr-only">Avaliação</dt>
            <dd className="font-semibold text-ink">{formatRating(course.rating)}</dd>
          </div>
          <div className="flex items-center gap-1">
            <Users className="size-4" />
            <dt className="sr-only">Alunos</dt>
            <dd>{course.students.toLocaleString("pt-BR")}</dd>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-4" />
            <dt className="sr-only">Carga horária</dt>
            <dd>
              {course.hours}h · {course.lessons} aulas
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            {course.oldPrice && <p className="text-sm text-ink/45 line-through">{formatBRL(course.oldPrice)}</p>}
            <p className="text-2xl font-extrabold text-forest">{formatBRL(course.price)}</p>
            <p className="text-xs text-ink/55">
              ou {INSTALLMENTS}x de {formatBRL(Math.ceil(course.price / INSTALLMENTS))}
            </p>
          </div>
          <a
            href="#planos"
            aria-label={`Ver curso ${course.title}`}
            className="grid size-12 shrink-0 place-items-center rounded-full bg-forest text-cream transition group-hover:bg-sun group-hover:text-forest"
          >
            <ArrowRight className="size-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
