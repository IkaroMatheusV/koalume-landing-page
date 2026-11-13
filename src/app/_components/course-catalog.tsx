"use client";

import type { Category, Course } from "../_data-access/get-landing-content";
import { useCourseFilter, type CourseFilter } from "@/hooks/use-course-filter";
import { CourseCard } from "./course-card";

type CourseCatalogProps = {
  courses: Course[];
  categories: Category[];
};

/** Filtro de categorias + grade de cursos. Único estado interativo da seção. */
export function CourseCatalog({ courses, categories }: CourseCatalogProps) {
  const { activeFilter, setActiveFilter, visibleCourses } = useCourseFilter(courses);
  const filters: CourseFilter[] = ["Todos", ...categories];

  function handleFilterClick(filter: CourseFilter) {
    setActiveFilter(filter);
  }

  return (
    <>
      {/* no celular os filtros rolam na horizontal, sem quebrar em várias linhas */}
      <div
        className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        role="group"
        aria-label="Filtrar por categoria"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterClick(filter)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                isActive ? "bg-forest text-cream" : "bg-white text-forest ring-1 ring-forest/15 hover:ring-forest/40"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {visibleCourses.map((course) => (
          <li key={course.id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </>
  );
}
