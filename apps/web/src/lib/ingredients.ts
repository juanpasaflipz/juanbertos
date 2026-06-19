export type IngredientSlug = "carne-asada";

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
};

export const INGREDIENT_SLUGS = Object.keys(INGREDIENTS) as IngredientSlug[];
