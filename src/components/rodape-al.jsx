export default function RodapeAL() {
  return (
    <div className="bg-[#0d2252] px-5 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 text-sm text-white/80">
        <span>Copyright {new Date().getFullYear()} Petland Distribuição</span>
        <span aria-hidden="true">|</span>
        <span>Site feito por</span>
        <a
          href="https://agenciaal.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/static/images/Logo-AL-branco.png"
            alt="Agência AL"
            className="h-8 w-auto"
          />
        </a>
      </div>
    </div>
  );
}
