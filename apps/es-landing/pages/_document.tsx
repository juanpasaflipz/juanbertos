import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#C4D74C" />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="JUANBERTO'S — Burritos californianos en Roma Norte, CDMX. Carne asada, papas adentro, hecho con corazón. Coahuila 192. Abierto."
          />
          <meta property="og:site_name" content="JUANBERTO'S" />
          <meta property="og:type" content="restaurant.restaurant" />
          <meta property="og:locale" content="es_MX" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta
            property="og:description"
            content="Burritos californianos en Roma Norte, CDMX. Hecho con corazón. Coahuila 192."
          />
          <meta
            property="og:title"
            content="JUANBERTO'S — Burritos Californianos · Roma Norte, CDMX"
          />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="JUANBERTO'S — Burritos Californianos · Roma Norte, CDMX"
          />
          <meta
            name="twitter:description"
            content="Carne asada, papas adentro, hecho con corazón. Coahuila 192, Roma Norte."
          />
          <meta name="twitter:image" content="/og-image.png" />
        </Head>
        <body className="bg-cream antialiased text-ink">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
