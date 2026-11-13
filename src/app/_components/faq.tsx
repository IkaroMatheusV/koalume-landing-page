import type { Faq as FaqItem } from "../_data-access/get-landing-content";
import { Koala } from "@/components/koala";
import { Plus } from "@/components/icons";
import { SectionTitle } from "./section-title";

export function Faq({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="scroll-mt-16 py-16 sm:scroll-mt-18 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
        <div>
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes">
            Não encontrou o que procurava? Fale com a gente pelo chat ou e-mail.
          </SectionTitle>
          <Koala pose="peek" className="mt-10 hidden w-56 lg:block" title="Koala espiando" />
        </div>
        <div className="divide-y divide-forest/10 rounded-3xl bg-white px-5 ring-1 ring-forest/10 sm:px-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4 sm:py-5">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-base font-semibold text-forest sm:text-lg">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-sage-100 transition group-open:rotate-45 group-open:bg-sun">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/70 sm:pr-10 sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
