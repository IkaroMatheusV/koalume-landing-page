import { Logo } from "@/components/logo";

const columns = [
  { title: "Cursos", links: ["Tecnologia", "Negócios", "Design", "Idiomas"] },
  { title: "Koalume", links: ["Sobre nós", "Para empresas", "Seja instrutor", "Blog"] },
  { title: "Ajuda", links: ["Central de ajuda", "Contato", "Termos de uso", "Privacidade"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Logo isInverted hasSlogan />
          <p className="mt-5 max-w-sm text-cream/65">Cursos online para evoluir na sua carreira e na sua vida.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-sun">{column.title}</h3>
              <ul className="mt-3 text-cream/70">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="inline-block py-1.5 hover:text-cream">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-cream/50 sm:px-6 lg:px-8">
          © 2026 Koalume. Aprender transforma.
        </p>
      </div>
    </footer>
  );
}
