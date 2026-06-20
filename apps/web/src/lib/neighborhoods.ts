export type NeighborhoodSlug =
  | "burritos-roma-sur"
  | "burritos-roma-norte"
  | "burritos-condesa"
  | "burritos-juarez"
  | "burritos-narvarte"
  | "burritos-del-valle"
  | "burritos-escandon";

export type Neighborhood = {
  slug: NeighborhoodSlug;
  name: string;
  mapQuery: string;
  geo: { lat: number; lng: number };
  publishedDate: string;
};

export const NEIGHBORHOODS: Record<NeighborhoodSlug, Neighborhood> = {
  "burritos-roma-sur": {
    slug: "burritos-roma-sur",
    name: "Roma Sur",
    mapQuery: "Roma Sur, Ciudad de México",
    geo: { lat: 19.4087, lng: -99.1612 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-roma-norte": {
    slug: "burritos-roma-norte",
    name: "Roma Norte",
    mapQuery: "Roma Norte, Ciudad de México",
    geo: { lat: 19.4187, lng: -99.1626 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-condesa": {
    slug: "burritos-condesa",
    name: "Condesa",
    mapQuery: "Condesa, Ciudad de México",
    geo: { lat: 19.4124, lng: -99.1729 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-juarez": {
    slug: "burritos-juarez",
    name: "Juárez",
    mapQuery: "Colonia Juárez, Ciudad de México",
    geo: { lat: 19.4279, lng: -99.1668 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-narvarte": {
    slug: "burritos-narvarte",
    name: "Narvarte",
    mapQuery: "Narvarte, Ciudad de México",
    geo: { lat: 19.3911, lng: -99.1571 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-del-valle": {
    slug: "burritos-del-valle",
    name: "Del Valle",
    mapQuery: "Del Valle Centro, Ciudad de México",
    geo: { lat: 19.3826, lng: -99.1664 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "burritos-escandon": {
    slug: "burritos-escandon",
    name: "Escandón",
    mapQuery: "Escandón, Ciudad de México",
    geo: { lat: 19.4078, lng: -99.1822 },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
};

export const NEIGHBORHOOD_SLUGS = Object.keys(NEIGHBORHOODS) as NeighborhoodSlug[];
