import * as React from "react";
import Head from "next/head";

import Menu from "../components/menu";
import Rodape from "../components/rodape";
import RodapeAL from "../components/rodape-al";

/* ============ CONFIG ============ */
const SITE = {
  url: "https://www.petlanddistribuicao.com.br",
  whatsapp: "5541999999999",
  telefone: "(41) 9 9999-9999",
  email: "contato@petlanddistribuicao.com.br",
  endereco: "Curitiba - PR",
};
const wa = (msg = "Olá! Quero ser cliente Petland Distribuição.") =>
  `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(msg)}`;

const VERDE = "#b7da2a";
const AZUL = "#204797";
const AMARELO = "#efd708";

const MARCAS = [
  {
    id: "royal-canin",
    nome: "Royal Canin",
    cor: "#e2001a",
    titulo: "Nutrição de precisão para cães e gatos",
    desc: "Rações super premium por raça, porte, idade e necessidade clínica. A marca que o tutor já pede na loja e na clínica.",
    itens: [
      "Linhas por raça e porte",
      "Gatos castrados e indoor",
      "Veterinary Diet",
      "Filhotes e sênior",
    ],
  },
  {
    id: "petpassion",
    nome: "PetPassion",
    cor: "#6a2c91",
    titulo: "Alto padrão para groomers e pet shops",
    desc: "Perfumes, shampoos, condicionadores e máscaras de hidratação com performance profissional e acabamento de vitrine.",
    itens: [
      "Shampoos e condicionadores",
      "Máscaras de tratamento",
      "Perfumes e colônias",
      "Linhas para tosa e finalização",
    ],
  },
  {
    id: "pethy",
    nome: "Pethy Group",
    cor: "#f47b20",
    titulo: "Preço bom, giro rápido",
    desc: "Higiene e petiscos com ótimo custo-benefício para completar o mix da loja sem apertar a margem.",
    itens: [
      "Petiscos",
      "Fraldas e tapetes",
      "Shampoos e perfumes",
      "Linha de higiene",
    ],
  },
  {
    id: "wanpy",
    nome: "Wanpy",
    cor: "#0fa3a3",
    titulo: "Petiscos que cães e gatos adoram",
    desc: "Variedade de petiscos de alta aceitação para recompensa, treino e momentos de carinho.",
    itens: [
      "Petiscos para cães",
      "Petiscos para gatos",
      "Snacks naturais",
      "Opções para treino",
    ],
  },
];

const SEGMENTOS = [
  {
    i: "🏪",
    t: "Pet shops",
    d: "Mix completo e reposição sem ruptura.",
    c: VERDE,
  },
  {
    i: "🩺",
    t: "Clínicas veterinárias",
    d: "Linhas clínicas e nutrição especializada.",
    c: AZUL,
  },
  {
    i: "✂️",
    t: "Groomers e banho e tosa",
    d: "Produtos profissionais em volume.",
    c: AMARELO,
  },
  {
    i: "🛒",
    t: "Agropecuárias e lojas",
    d: "Marcas de giro com bom preço.",
    c: VERDE,
  },
];

const DIFERENCIAIS = [
  { i: "🚚", t: "Entrega ágil", d: "Logística em Curitiba e região." },
  {
    i: "🏷️",
    t: "4 marcas, 1 pedido",
    d: "Premium, intermediário e custo-benefício no mesmo fornecedor.",
  },
  {
    i: "🤝",
    t: "Atendimento próximo",
    d: "Representantes que entendem o seu negócio.",
  },
  {
    i: "📦",
    t: "Estoque sempre cheio",
    d: "Menos ruptura, mais venda no balcão.",
  },
];

const TITULO =
  "Petland Distribuição | Distribuidora Royal Canin, PetPassion, Pethy e Wanpy em Curitiba";
const DESCRICAO =
  "Distribuidora pet em Curitiba para pet shops, clínicas e groomers: Royal Canin, PetPassion, Pethy Group e Wanpy. Rações, petiscos, higiene e estética animal no atacado.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Petland Distribuição",
  url: SITE.url,
  image: `${SITE.url}/static/images/og-image.jpg`,
  telephone: SITE.telefone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  description: DESCRICAO,
  makesOffer: MARCAS.map((b) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: b.nome },
  })),
};

/* ============ BOTÃO ============ */
const Btn = ({ href, children, variant = "azul", external = true }) => {
  const v = {
    azul: "bg-[#204797] text-white hover:bg-[#1a3a7d]",
    amarelo: "bg-[#efd708] text-[#204797] hover:bg-[#ffe92b]",
    branco: "bg-white text-[#204797] hover:bg-[#f3f3f3]",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`font-display inline-flex items-center justify-center rounded-full px-7 py-3.5 text-lg font-semibold shadow-md transition hover:-translate-y-0.5 ${v}`}
    >
      {children}
    </a>
  );
};

export default function Home() {
  const [menuAberto, setMenuAberto] = React.useState(false);

  React.useEffect(() => {
    window.document.body.style.backgroundColor = "#ffffff";
  }, []);

  const links = [
    { href: "#marcas", label: "Marcas" },
    { href: "#clientes", label: "Para quem" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <Menu />

      <main>
        {/* ============ HERO ============ */}
        <section id="inicio" className="relative overflow-hidden bg-[#b7da2a]">
          <div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#efd708]/70"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-[#204797]/15"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20">
            <div className="animate-pop">
              <h1 className="font-display text-[34px] font-bold leading-tight text-[#204797] md:text-[60px] md:leading-[1.08]">
                Tudo o que seu pet shop precisa, em um só fornecedor.
              </h1>
              <p className="mt-5 max-w-lg text-[17px] font-semibold leading-[1.6] text-[#1b2f5f] sm:text-[19px]">
                Distribuidora em Curitiba de Royal Canin, PetPassion, Pethy
                Group e Wanpy. Rações, petiscos, higiene e estética animal para
                pet shops, clínicas e groomers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Btn href={wa()}>Falar no WhatsApp</Btn>
                <Btn href="#marcas" variant="branco" external={false}>
                  Ver marcas
                </Btn>
              </div>
            </div>

            <div className="relative w-full md:-mr-20 md:w-[calc(100%+25rem)]">
              <img
                src="/static/images/hero-pets.png"
                alt="Cão e gato com produtos das marcas distribuídas pela Petland"
                width="800"
                className="animate-bob relative z-10 w-full max-w-none"
              />
            </div>
          </div>
        </section>

        {/* ============ FAIXA DE MARCAS ============ */}
        <section
          aria-label="Marcas distribuídas"
          className="overflow-hidden bg-[#204797] py-5"
        >
          <div className="animate-marquee flex w-max items-center gap-14 px-7">
            {[...MARCAS, ...MARCAS, ...MARCAS, ...MARCAS].map((b, i) => (
              <span
                key={i}
                className="font-display flex items-center gap-14 text-2xl font-semibold text-white"
              >
                {b.nome}
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: i % 2 ? AMARELO : VERDE }}
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        </section>

        {/* ============ MARCAS ============ */}
        <section id="marcas" aria-labelledby="marcas-titulo">
          <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 text-center">
            <h2
              id="marcas-titulo"
              className="font-display text-[34px] font-bold leading-tight text-[#204797] sm:text-[52px]"
            >
              Quatro marcas, quatro jeitos de vender mais
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.7] text-slate-700">
              Do super premium ao custo-benefício, você monta o mix ideal para o
              seu público.
            </p>
          </div>

          {MARCAS.map((b, idx) => (
            <article
              key={b.id}
              id={b.id}
              className="brand-block text-white"
              style={{ background: b.cor }}
            >
              <div
                className={`mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 ${
                  idx % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <img
                    src={`/static/images/logo-${b.id}.png`}
                    alt={`Logo ${b.nome}`}
                    width="320"
                    loading="lazy"
                    className="mb-5 h-24 w-auto max-w-none rounded-xl bg-white p-3 md:h-28"
                  />
                  <h3 className="font-display text-[30px] font-bold leading-tight md:text-[40px]">
                    {b.titulo}
                  </h3>
                  <p className="mt-4 max-w-lg text-[17px] leading-[1.7] opacity-95">
                    {b.desc}
                  </p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {b.itens.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2 font-semibold"
                      >
                        <span
                          className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-sm"
                          style={{ color: b.cor }}
                        >
                          ✓
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Btn
                      href={wa(`Olá! Quero saber mais sobre ${b.nome}.`)}
                      variant="branco"
                    >
                      Pedir tabela {b.nome}
                    </Btn>
                  </div>
                </div>

                <div
                  className={`relative ${
                    idx % 2
                      ? "md:-ml-20 md:w-[calc(100%+5rem)]"
                      : "md:-mr-20 md:w-[calc(100%+5rem)]"
                  }`}
                >
                  <div
                    className="absolute inset-6 rounded-[3rem] bg-white/10"
                    aria-hidden="true"
                  />
                  <img
                    src={`/static/images/${b.id}-produtos.png`}
                    alt={`Produtos ${b.nome} distribuídos pela Petland`}
                    width="800"
                    loading="lazy"
                    className="brand-img relative z-10 w-full max-w-none rounded-md"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ============ PARA QUEM ============ */}
        <section
          id="clientes"
          className="bg-[#fffbe0] py-20"
          aria-labelledby="clientes-titulo"
        >
          <div className="mx-auto max-w-6xl px-5">
            <h2
              id="clientes-titulo"
              className="font-display text-center text-[34px] font-bold leading-tight text-[#204797] sm:text-[52px]"
            >
              Para quem a Petland distribui
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SEGMENTOS.map((s) => (
                <div
                  key={s.t}
                  className="rounded-3xl border-b-8 bg-white p-6 shadow-md"
                  style={{ borderColor: s.c }}
                >
                  <div className="text-4xl" aria-hidden="true">
                    {s.i}
                  </div>
                  <h3 className="font-display mt-3 text-xl font-semibold text-[#204797]">
                    {s.t}
                  </h3>
                  <p className="mt-1 leading-[1.6] text-slate-700">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOBRE ============ */}
        <section id="sobre" className="py-16" aria-labelledby="sobre-titulo">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <h2
                id="sobre-titulo"
                className="font-display text-[34px] font-bold leading-tight text-[#204797] sm:text-[52px]"
              >
                Sobre a Petland Distribuição
              </h2>
              <p className="mt-4 text-[17px] leading-[1.8] text-slate-700">
                Somos uma distribuidora de Curitiba que conecta as melhores
                marcas do mercado pet a lojistas, clínicas e profissionais de
                estética animal. Trabalhamos com Royal Canin, PetPassion, Pethy
                Group e Wanpy, para você ter variedade, preço justo e reposição
                confiável.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {DIFERENCIAIS.map((d) => (
                  <div key={d.t} className="rounded-2xl bg-[#b7da2a]/25 p-4">
                    <div className="text-2xl" aria-hidden="true">
                      {d.i}
                    </div>
                    <h3 className="font-display font-semibold text-[#204797]">
                      {d.t}
                    </h3>
                    <p className="text-sm leading-[1.5] text-slate-700">
                      {d.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-8 border-[#efd708] shadow-xl">
              <video
                className="aspect-video w-full object-cover"
                poster="/static/images/galpao-petland.jpg"
                controls
                preload="none"
                playsInline
              >
                <source
                  src="/static/videos/institucional.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        {/* ============ CONTATO ============ */}
        <section
          id="contato"
          className="bg-[#204797] py-16 text-white"
          aria-labelledby="contato-titulo"
        >
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2
              id="contato-titulo"
              className="font-display text-[34px] font-bold leading-tight sm:text-[52px]"
            >
              Vamos abastecer a sua loja?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.7] text-white/90">
              Fale com a equipe comercial e receba as tabelas de preço das
              marcas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Btn href={wa()} variant="amarelo">
                Chamar no WhatsApp
              </Btn>
              <Btn
                href={`mailto:${SITE.email}`}
                variant="branco"
                external={false}
              >
                Enviar e-mail
              </Btn>
            </div>
            <p className="mt-6 font-semibold">
              {SITE.telefone} · {SITE.email} · {SITE.endereco}
            </p>
          </div>
        </section>
      </main>

      <Rodape />
      <RodapeAL />

      {/* ============ BOTÃO WHATSAPP FLUTUANTE ============ */}
      <a
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-2xl shadow-lg transition hover:scale-110"
      >
        💬
      </a>
    </>
  );
}
