import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const ES_HOST = "es.juanbertos.com";
const CANONICAL_ORIGIN = "https://www.juanbertos.com";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:file(sitemap.xml|robots.txt)",
        has: [{ type: "host", value: ES_HOST }],
        destination: `${CANONICAL_ORIGIN}/:file`,
        permanent: true,
      },
      {
        source: "/:locale(es|en)/:path*",
        has: [{ type: "host", value: ES_HOST }],
        destination: `${CANONICAL_ORIGIN}/:locale/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: ES_HOST }],
        destination: `${CANONICAL_ORIGIN}/es/:path*`,
        permanent: true,
      },
      {
        source: "/burrito-california-cdmx",
        destination: "/es/burrito-california-cdmx",
        permanent: true,
      },
      {
        source: "/burrito-vs-hamburguesa",
        destination: "/es/burrito-vs-burger",
        permanent: true,
      },
      {
        source: "/es/burrito-vs-hamburguesa",
        destination: "/es/burrito-vs-burger",
        permanent: true,
      },
      {
        source: "/en/burrito-vs-hamburguesa",
        destination: "/en/burrito-vs-burger",
        permanent: true,
      },
      {
        source: "/por-que-un-burrito-california-no-es-un-snack",
        destination: "/es/why-a-california-burrito-isnt-a-snack",
        permanent: true,
      },
      {
        source: "/es/por-que-un-burrito-california-no-es-un-snack",
        destination: "/es/why-a-california-burrito-isnt-a-snack",
        permanent: true,
      },
      {
        source: "/en/por-que-un-burrito-california-no-es-un-snack",
        destination: "/en/why-a-california-burrito-isnt-a-snack",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
