"use client";

import { useEffect, useId, useState } from "react";
import { Close, Menu } from "@/components/icons";
import { navLinks } from "./nav-links";

/** Menu sanfona do cabeçalho em telas menores que `lg`. */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    function handleResize() {
      if (window.innerWidth >= 1024) setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="grid size-11 place-items-center rounded-full text-forest transition hover:bg-sage-100"
      >
        {isOpen ? <Close className="size-6" /> : <Menu className="size-6" />}
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-forest/10 bg-cream shadow-xl"
      >
        <nav aria-label="Menu" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <ul className="grid gap-1 text-forest sm:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClose}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold hover:bg-sage-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2 border-t border-forest/10 pt-4 sm:grid-cols-2">
            <a
              href="#"
              onClick={handleClose}
              className="rounded-full bg-forest px-5 py-3 text-center font-semibold text-cream"
            >
              Entrar
            </a>
            <a
              href="#planos"
              onClick={handleClose}
              className="rounded-full bg-sun px-5 py-3 text-center font-semibold text-forest"
            >
              Comece agora
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
