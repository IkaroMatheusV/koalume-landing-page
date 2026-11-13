import type { Testimonial } from "../_data-access/get-landing-content";
import { Star } from "@/components/icons";
import { getInitials } from "@/lib/format";
import { SectionTitle } from "./section-title";

const STAR_COUNT = 5;
/** O depoimento do meio ganha destaque visual. */
const HIGHLIGHT_INDEX = 1;

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Depoimentos" title="Histórias de quem se transformou aprendendo." isCentered />
        <ul className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => {
            const isHighlighted = index === HIGHLIGHT_INDEX;
            const isLast = index === testimonials.length - 1;
            return (
              <li
                key={testimonial.name}
                className={`flex flex-col rounded-3xl p-6 sm:p-7 ${
                  isHighlighted ? "bg-forest text-cream" : "bg-white ring-1 ring-forest/10"
                } ${isLast ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex gap-1 text-sun" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: STAR_COUNT }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-5" />
                  ))}
                </div>
                <blockquote
                  className={`mt-5 flex-1 text-base leading-relaxed sm:text-lg ${isHighlighted ? "text-cream/90" : "text-ink/80"}`}
                >
                  “{testimonial.text}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full font-bold ${
                      isHighlighted ? "bg-sun text-forest" : "bg-sage-200 text-forest"
                    }`}
                    aria-hidden="true"
                  >
                    {getInitials(testimonial.name)}
                  </span>
                  <span>
                    <strong className="block">{testimonial.name}</strong>
                    <span className={`text-sm ${isHighlighted ? "text-cream/65" : "text-ink/60"}`}>{testimonial.role}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
