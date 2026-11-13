import { SITE, MARCAS, wa } from "../config/site";

function Rodape() {
  return (
    <footer id="rodape" className="bg-[#14306b] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src="/static/images/logo-petland-branco.png"
            alt="Petland Distribuição"
            width="240"
            height="76"
            loading="lazy"
            className="mb-4 w-full max-w-[15rem]"
          />
          <p className="text-[15px] leading-[1.7] text-white/80">
            Distribuidora de produtos pet em Curitiba para pet shops, clínicas
            veterinárias e groomers.
          </p>
        </div>

        <div>
          <h3 className="font-display mb-3 text-xl font-semibold text-[#b7da2a]">
            Marcas
          </h3>
          <ul className="space-y-2">
            {MARCAS.map((b) => (
              <li key={b.id}>
                <a
                  href={`#${b.id}`}
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: b.cor }}
                    aria-hidden="true"
                  />
                  {b.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-3 text-xl font-semibold text-[#b7da2a]">
            Contato
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                💬 {SITE.telefone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all hover:underline"
              >
                ✉️ {SITE.email}
              </a>
            </li>
            <li>📍 {SITE.endereco}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Petland"
              className="font-display rounded-full bg-white/10 px-4 py-2 transition hover:bg-[#efd708] hover:text-[#204797]"
            >
              Instagram
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Petland"
              className="font-display rounded-full bg-white/10 px-4 py-2 transition hover:bg-[#efd708] hover:text-[#204797]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
