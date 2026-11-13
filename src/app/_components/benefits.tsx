import { Koala } from "@/components/koala";
import { Award, Chart, Clock, Device, Shield, Users } from "@/components/icons";
import { SectionTitle } from "./section-title";

const items = [
  { icon: Clock, title: "Acesso quando quiser", text: "Estude 24 horas por dia, 7 dias por semana, com acesso vitalício aos cursos avulsos." },
  { icon: Device, title: "Em qualquer dispositivo", text: "Comece no computador, continue no celular. Seu progresso fica sincronizado." },
  { icon: Users, title: "Comunidade ativa", text: "Tire dúvidas com instrutores e troque experiências com milhares de alunos." },
  { icon: Award, title: "Certificado reconhecido", text: "Compartilhe suas conquistas no LinkedIn com um certificado verificável." },
  { icon: Chart, title: "Trilhas de carreira", text: "Sequências de cursos pensadas para levar você do básico ao avançado." },
  { icon: Shield, title: "Garantia de 7 dias", text: "Experimente sem risco. Não gostou? Devolvemos seu dinheiro." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-16 bg-forest py-16 text-cream sm:scroll-mt-18 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <SectionTitle eyebrow="Benefícios" title="Tudo o que você precisa para evoluir." isInverted>
            Uma plataforma pensada para quem quer aprender de verdade — e terminar o que começou.
          </SectionTitle>
          <Koala pose="wave" className="hidden h-40 w-auto shrink-0 md:block lg:h-44" title="Koala acenando" />
        </div>
        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl bg-forest-600 p-6 ring-1 ring-cream/10 transition hover:ring-sun/60 sm:p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-sun text-forest">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-cream/70 sm:text-base">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
