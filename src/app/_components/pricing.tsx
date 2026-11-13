import type { Plan } from "../_data-access/get-landing-content";
import { ArrowRight, Check } from "@/components/icons";
import { formatBRL } from "@/lib/format";
import { SectionTitle } from "./section-title";

function PlanCard({ plan }: { plan: Plan }) {
  const { isFeatured } = plan;
  return (
    <li
      className={`relative flex flex-col rounded-3xl p-6 sm:p-8 ${
        isFeatured
          ? "order-first bg-forest text-cream shadow-2xl lg:order-none lg:-my-4 lg:py-12"
          : "bg-white text-ink ring-1 ring-forest/10"
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3.5 left-6 rounded-full bg-sun px-4 py-1 text-xs font-bold uppercase tracking-wider text-forest sm:left-8">
          Mais escolhido
        </span>
      )}
      <h3 className={`text-lg font-bold ${isFeatured ? "text-sun" : "text-forest"}`}>{plan.name}</h3>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
        {plan.price !== null ? (
          <>
            <span className={`text-sm ${isFeatured ? "text-cream/70" : "text-ink/60"}`}>{plan.pricePrefix}</span>
            <span className={`text-4xl font-extrabold sm:text-5xl ${isFeatured ? "text-cream" : "text-forest"}`}>
              {formatBRL(plan.price)}
            </span>
          </>
        ) : (
          <span className="text-3xl font-extrabold text-forest sm:text-4xl">Sob consulta</span>
        )}
      </p>
      <p className={`mt-1 text-sm ${isFeatured ? "text-cream/70" : "text-ink/60"}`}>{plan.period}</p>

      <ul className="mt-6 flex-1 space-y-3 sm:mt-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={`mt-0.5 size-5 shrink-0 ${isFeatured ? "text-sun" : "text-forest-500"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition ${
          isFeatured ? "bg-sun text-forest hover:bg-sun-600" : "bg-forest text-cream hover:bg-forest-600"
        }`}
      >
        {plan.cta} <ArrowRight className="size-5" />
      </a>
    </li>
  );
}

export function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <section id="planos" className="scroll-mt-16 bg-sage-100 py-16 sm:scroll-mt-18 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Planos" title="Invista no seu futuro do seu jeito." isCentered>
          Compre cursos avulsos ou assine e tenha acesso a todo o catálogo.
        </SectionTitle>

        {/* celular/tablet: coluna única centralizada, com o plano em destaque primeiro */}
        <ul className="mx-auto mt-12 grid max-w-lg items-stretch gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </ul>
      </div>
    </section>
  );
}
