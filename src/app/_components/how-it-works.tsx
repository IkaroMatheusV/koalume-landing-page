import { Koala } from "@/components/koala";
import { Sparks, Underline } from "./decorations";
import { SectionTitle } from "./section-title";

const steps = [
  { number: "01", title: "Escolha seu curso", text: "Navegue por trilhas de carreira ou cursos avulsos e comece com uma aula grátis." },
  { number: "02", title: "Aprenda no seu ritmo", text: "Aulas curtas, exercícios práticos e acesso pelo celular, tablet ou computador." },
  { number: "03", title: "Conquiste novas habilidades", text: "Conclua projetos reais, receba seu certificado e coloque tudo em prática." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16 bg-sage-100 py-16 sm:scroll-mt-18 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm">
          <div className="absolute inset-x-4 bottom-0 top-16 rounded-[2.5rem] bg-sage sm:inset-x-6" aria-hidden="true" />
          <Sparks className="absolute -right-2 top-8 size-12 rotate-12 sm:size-14" />
          <Koala pose="book" className="relative w-full" title="Koala lendo um livro" />
        </div>

        <div>
          <SectionTitle
            eyebrow="Como funciona"
            title={
              <>
                Aprenda{" "}
                <span className="relative inline-block">
                  no seu ritmo.
                  <Underline className="absolute -bottom-2 left-0 h-3 w-full" />
                </span>
              </>
            }
          >
            Sem horários fixos, sem pressão. Você decide quando e onde estudar.
          </SectionTitle>

          <ol className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-4 rounded-3xl bg-white p-5 ring-1 ring-forest/10 sm:gap-5 sm:p-6">
                <span className="text-2xl font-extrabold text-sun sm:text-3xl">{step.number}</span>
                <span>
                  <strong className="block text-base font-bold text-forest sm:text-lg">{step.title}</strong>
                  <span className="mt-1 block text-sm text-ink/70 sm:text-base">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
