import { Award, Chart, Play, Shield } from "@/components/icons";

const items = [
  { icon: Play, title: "Cursos 100% online", text: "Aulas gravadas e ao vivo" },
  { icon: Shield, title: "Compra segura", text: "Pix, boleto ou cartão em 12x" },
  { icon: Chart, title: "Seu progresso em foco", text: "Metas e trilhas personalizadas" },
  { icon: Award, title: "Certificado digital", text: "Válido e verificável" },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-b border-forest/10 bg-cream">
      <ul className="mx-auto grid max-w-7xl gap-x-6 gap-y-5 px-4 py-8 sm:grid-cols-2 sm:px-6 sm:py-10 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-forest text-sun">
              <Icon className="size-6" />
            </span>
            <span className="min-w-0">
              <strong className="block font-bold text-forest">{title}</strong>
              <span className="text-sm text-ink/60">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
