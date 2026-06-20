export type IngredientSlug =
  | "carne-asada"
  | "queso-cheddar"
  | "guacamole"
  | "pico-de-gallo"
  | "crema"
  | "tortilla-de-harina";

export type Ingredient = {
  slug: IngredientSlug;
  image: string;
  imageAlt: { es: string; en: string };
  publishedDate: string;
};

export const INGREDIENTS: Record<IngredientSlug, Ingredient> = {
  "carne-asada": {
    slug: "carne-asada",
    image: "/menu/carne-asada-image.png",
    imageAlt: {
      es: "Carne asada Juanberto's — arrachera grass-fed recién salida de la plancha, fileteada, con limón y salsa roja",
      en: "Juanberto's carne asada — grass-fed skirt steak fresh off the plancha, sliced, with lime and red salsa",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "queso-cheddar": {
    slug: "queso-cheddar",
    image: "/menu/cheddar-cheese-image.png",
    imageAlt: {
      es: "Queso cheddar rallado Juanberto's — de productores lácteos locales mexicanos, listo para derretir en la plancha",
      en: "Juanberto's shredded cheddar — from local Mexican dairy producers, ready to melt on the plancha",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  guacamole: {
    slug: "guacamole",
    image: "/menu/carne-asada-fries.png",
    imageAlt: {
      es: "Guacamole Juanberto's — aguacate orgánico, machacado a mano, hecho diario",
      en: "Juanberto's guacamole — organic avocado, hand-mashed, made daily",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "pico-de-gallo": {
    slug: "pico-de-gallo",
    image: "/menu/pico-image.png",
    imageAlt: {
      es: "Pico de gallo Juanberto's — jitomate y cebolla morada del mercado, picados a mano cada mañana, con cilantro fresco",
      en: "Juanberto's pico de gallo — farmers market tomato and red onion, hand-chopped every morning with fresh cilantro",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  crema: {
    slug: "crema",
    image: "/menu/crema-image.png",
    imageAlt: {
      es: "Crema ácida Juanberto's — grass-fed, espesa, sin gomas ni espesantes, la capa final del California burrito",
      en: "Juanberto's crema (sour cream) — grass-fed, thick, no gums or thickeners, the final layer of the California burrito",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "tortilla-de-harina": {
    slug: "tortilla-de-harina",
    image: "/menu/tortilla-image.png",
    imageAlt: {
      es: "Tortillas de harina Juanberto's — hechas frescas cada día, calientes y flexibles, listas para enrollar el California burrito",
      en: "Juanberto's flour tortillas — made fresh every day, hot and flexible, ready to wrap the California burrito",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
};

export const INGREDIENT_SLUGS = Object.keys(INGREDIENTS) as IngredientSlug[];
