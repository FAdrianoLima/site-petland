import * as React from "react";
import { wa } from "../config/site";

const LINKS = [
  { href: "#marcas", label: "Marcas" },
  { href: "#clientes", label: "Para quem" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Menu() {
  const [aberto, setAberto] = React.useState(false);
  const [rolou, setRolou] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b-4 border-[#b7da2a] bg-white/95 backdrop-blur transition-shadow ${
        rolou ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#inicio" aria-label="Petland Distribuição - início">
          <img
            src="/static/images/logo-petland.png"
            alt="Petland Distribuição"
            width="160"
            height="48"
            className="h-10 w-auto md:h-12"
          />
        </a>

        <nav
          aria-label="Principal"
          className="font-display hidden gap-7 text-lg font-medium text-[#204797] md:flex"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display hidden rounded-full bg-[#204797] px-6 py-2.5 text-lg font-semibold text-white shadow-md transition hover:bg-[#1a3a7d] sm:inline-flex"
          >
            Quero comprar
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#b7da2a] text-2xl text-[#204797] md:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            onClick={() => setAberto(!aberto)}
          >
            {aberto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {aberto && (
        <nav
          aria-label="Menu mobile"
          className="font-display flex flex-col border-t border-slate-200 bg-white px-5 py-3 text-xl text-[#204797] md:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2.5"
              onClick={() => setAberto(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 font-semibold"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export default Menu;
