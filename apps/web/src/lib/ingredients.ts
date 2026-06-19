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
    image: "/menu/carne-asada-fries.png",
    imageAlt: {
      es: "Carne asada Juanberto's — picaña USDA Choice y arrachera grass-fed",
      en: "Juanberto's carne asada — USDA Choice picaña and grass-fed skirt steak",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "queso-cheddar": {
    slug: "queso-cheddar",
    image: "/menu/bean-cheese.png",
    imageAlt: {
      es: "Queso cheddar derretido Juanberto's — de productores lácteos locales mexicanos",
      en: "Juanberto's melted cheddar cheese — from local Mexican dairy producers",
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
    image: "/menu/california-burrito.jpg",
    imageAlt: {
      es: "Pico de gallo Juanberto's — jitomate y cebolla del mercado, picado cada mañana",
      en: "Juanberto's pico de gallo — farmers market tomato and onion, hand-chopped daily",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  crema: {
    slug: "crema",
    image: "/menu/breakfast.jpg",
    imageAlt: {
      es: "Crema ácida Juanberto's — grass-fed, la capa final del California burrito",
      en: "Juanberto's crema (sour cream) — grass-fed, the final layer of the California burrito",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
  "tortilla-de-harina": {
    slug: "tortilla-de-harina",
    image: "/menu/california-burrito.jpg",
    imageAlt: {
      es: "Tortilla de harina Juanberto's — preparada fresca cada día, calentada en la plancha",
      en: "Juanberto's flour tortilla — made fresh daily, warmed on the plancha",
    },
    publishedDate: "2026-06-19T00:00:00-06:00",
  },
};

export const INGREDIENT_SLUGS = Object.keys(INGREDIENTS) as IngredientSlug[];
