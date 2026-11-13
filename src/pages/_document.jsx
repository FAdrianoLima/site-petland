import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE, MARCAS } from "../config/site";

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

class DocumentosSite extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/static/images/favicon.png" />
          <title>{TITULO}</title>
          <meta name="description" content={DESCRICAO} />
          <meta
            name="keywords"
            content="distribuidora pet Curitiba, distribuidora Royal Canin, PetPassion, Pethy Group, Wanpy, atacado pet shop, produtos para groomer, distribuidora para pet shop"
          />
          <meta name="author" content="Petland Distribuição" />
          <meta name="theme-color" content="#b7da2a" />
          <link rel="canonical" href={`${SITE.url}/`} />

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Petland Distribuição" />
          <meta property="og:title" content={TITULO} />
          <meta property="og:description" content={DESCRICAO} />
          <meta property="og:url" content={`${SITE.url}/`} />
          <meta
            property="og:image"
            content={`${SITE.url}/static/images/og-image.jpg`}
          />
          <meta name="twitter:card" content="summary_large_image" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentosSite;
