"use client";

import { useMemo, useState } from "react";
import type { Category, Course } from "@/app/_data-access/get-landing-content";

export type CourseFilter = "Todos" | Category;

/** Estado do filtro de categorias do catálogo. */
export function useCourseFilter(courses: Course[]) {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>("Todos");

  const visibleCourses = useMemo(
    () => (activeFilter === "Todos" ? courses : courses.filter((course) => course.category === activeFilter)),
    [activeFilter, courses],
  );

  return { activeFilter, setActiveFilter, visibleCourses };
}
