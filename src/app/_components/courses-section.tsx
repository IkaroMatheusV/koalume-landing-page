import type { Category, Course } from "../_data-access/get-landing-content";
import { ArrowRight } from "@/components/icons";
import { CourseCatalog } from "./course-catalog";
import { SectionTitle } from "./section-title";

export function CoursesSection({ courses, categories }: { courses: Course[]; categories: Category[] }) {
  return (
    <section id="cursos" className="scroll-mt-16 py-16 sm:scroll-mt-18 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionTitle eyebrow="Catálogo" title="Cursos online de qualidade!">
            Conteúdo prático, criado por quem vive o mercado, para você aplicar desde a primeira aula.
          </SectionTitle>
          <a
            href="#planos"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start font-semibold text-forest underline decoration-sun decoration-2 underline-offset-8 hover:text-forest-500 md:self-auto"
          >
            Ver todos os 120 cursos <ArrowRight className="size-4" />
          </a>
        </div>
        <CourseCatalog courses={courses} categories={categories} />
      </div>
    </section>
  );
}
