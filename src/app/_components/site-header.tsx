import { Logo } from "@/components/logo";
import { ArrowRight } from "@/components/icons";
import { MobileMenu } from "./mobile-menu";
import { navLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="Koalume — página inicial" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-forest xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-2 decoration-sun decoration-2 underline-offset-8 transition hover:text-forest-500 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-600 lg:inline-block"
          >
            Entrar
          </a>
          <a
            href="#planos"
            className="hidden items-center gap-1.5 rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-forest transition hover:bg-sun-600 sm:inline-flex"
          >
            Comece agora <ArrowRight className="size-4" />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
