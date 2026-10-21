/**
 * Blog posts for /[locale]/blog.
 *
 * UPKEEP — to publish a new post:
 *   1. Add an object to POSTS (newest first is not required; we sort by date).
 *   2. Put its image in /public (reuse /menu/* photos if you like).
 *   3. Deploy. The index, homepage teaser, sitemap and JSON-LD update themselves.
 *
 * Avoid quoting prices inside post bodies — they go stale. Link to /menu instead.
 *
 * LEGACY_GUIDES are the older long-form articles that live on their own routes;
 * they're listed on the blog index alongside the posts.
 */

export type Locale = "es" | "en";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string };

type LocalizedPost = {
  title: string;
  excerpt: string;
  category: string;
  body: Block[];
};

export type Post = {
  slug: string;
  date: string; // YYYY-MM-DD
  image: string;
  imageAlt: Record<Locale, string>;
  readMinutes: number;
  content: Record<Locale, LocalizedPost>;
};

export const POSTS: Post[] = [
  {
    slug: "california-supreme",
    date: "2026-10-13",
    image: "/menu/california-supreme.jpg",
    imageAlt: {
      es: "California Supreme de Juanberto's, doble tortilla con costra de queso dorado",
      en: "Juanberto's California Supreme, double tortilla with a golden griddled-cheese crust",
    },
    readMinutes: 3,
    content: {
      en: {
        category: "New on the menu",
        title: "Meet the California Supreme: the California, wrapped twice",
        excerpt:
          "We took our original California burrito, rolled it inside a second tortilla and crisped a layer of cheese on the plancha. Here's how it came together.",
        body: [
          {
            type: "p",
            text: "The California burrito is the reason Juanberto's exists. A quarter kilo of USDA Choice picaña, cheddar, fries inside, guacamole, pico de gallo and crema in a warm flour tortilla. We don't change that recipe. So when we wanted to build something bigger, we didn't touch the inside — we built around it.",
          },
          { type: "h2", text: "What makes it a Supreme" },
          {
            type: "ul",
            items: [
              "It starts as a full California burrito — same picaña, same fries, same rule.",
              "Then it's rolled again inside a second tortilla.",
              "A blanket of cheese goes on the plancha and the burrito is crisped on top of it until the outside turns golden and lacy.",
            ],
          },
          {
            type: "p",
            text: "The result is a crunchy cheese crust on the outside, a soft tortilla underneath, and the California you already know in the middle. Two textures in every bite.",
          },
          {
            type: "quote",
            text: "Two tortillas. A crust of griddled cheese. The best burrito we've ever made.",
          },
          { type: "h2", text: "Who it's for" },
          {
            type: "p",
            text: "If the California is your usual, the Supreme is the upgrade for days when you're properly hungry. If you've never had a California burrito, start with the original — then come back for this one.",
          },
          { type: "cta", text: "See the Supreme on the menu", href: "/menu" },
        ],
      },
      es: {
        category: "Nuevo en el menú",
        title: "Conoce el California Supreme: el California, envuelto dos veces",
        excerpt:
          "Tomamos nuestro California burrito original, lo envolvimos en una segunda tortilla y le doramos una capa de queso en la plancha. Así nació.",
        body: [
          {
            type: "p",
            text: "El California burrito es la razón de ser de Juanberto's. Un cuarto de kilo de picaña USDA Choice, cheddar, papas adentro, guacamole, pico de gallo y crema en una tortilla de harina caliente. Esa receta no se toca. Así que cuando quisimos hacer algo más grande, no cambiamos el interior: construimos alrededor.",
          },
          { type: "h2", text: "Qué lo hace Supreme" },
          {
            type: "ul",
            items: [
              "Empieza como un California completo: misma picaña, mismas papas, misma regla.",
              "Después se envuelve otra vez en una segunda tortilla.",
              "Va una cama de queso a la plancha y el burrito se dora encima hasta que el exterior queda crujiente y dorado.",
            ],
          },
          {
            type: "p",
            text: "El resultado: costra de queso crujiente por fuera, tortilla suave debajo y el California de siempre en el centro. Dos texturas en cada mordida.",
          },
          {
            type: "quote",
            text: "Dos tortillas. Una costra de queso a la plancha. El mejor burrito que hemos hecho.",
          },
          { type: "h2", text: "Para quién es" },
          {
            type: "p",
            text: "Si el California es tu pedido de siempre, el Supreme es para los días de mucha hambre. Si nunca has probado un California burrito, empieza por el original… y luego regresa por este.",
          },
          { type: "cta", text: "Ver el Supreme en el menú", href: "/menu" },
        ],
      },
    },
  },
  {
    slug: "california-burrito-vs-mission-burrito",
    date: "2026-10-09",
    image: "/menu/california-burrito.jpg",
    imageAlt: {
      es: "California burrito partido a la mitad con carne asada y papas adentro",
      en: "California burrito cut in half showing carne asada and fries inside",
    },
    readMinutes: 4,
    content: {
      en: {
        category: "Burrito guide",
        title: "California burrito vs. Mission burrito: what's the difference?",
        excerpt:
          "Both are Californian, both are huge, and they have almost nothing in common. One has rice and beans. The other has fries. Here's the breakdown.",
        body: [
          {
            type: "p",
            text: "Say “California-style burrito” and people picture different things. That's because California has two famous burrito traditions, from opposite ends of the state, and they're built on completely different ideas.",
          },
          { type: "h2", text: "The Mission burrito (San Francisco)" },
          {
            type: "p",
            text: "Born in the taquerías of San Francisco's Mission District. Its signature is volume and variety: a steamed, oversized flour tortilla packed with rice, beans, your choice of meat, salsa, and often cheese, sour cream and guacamole, then wrapped tight in foil.",
          },
          { type: "h2", text: "The California burrito (San Diego)" },
          {
            type: "p",
            text: "Born in San Diego's taco shops, a short drive from the border. Its signature is focus: carne asada, french fries, cheese, and fresh toppings like guacamole, pico de gallo and crema. No rice. No beans. The fries do the job rice does elsewhere — and do it better.",
          },
          { type: "h2", text: "Side by side" },
          {
            type: "ul",
            items: [
              "Origin: Mission → San Francisco · California → San Diego",
              "Starch: Mission → rice and beans · California → french fries",
              "Protein: Mission → your pick · California → carne asada, always",
              "Feel: Mission → soft and saucy · California → meaty, salty, a little crunchy",
            ],
          },
          { type: "h2", text: "Which one do we make?" },
          {
            type: "p",
            text: "Juanberto's is a San Diego shop at heart. We make the California burrito the way the taco shops do: picaña carne asada off the plancha, fries inside, cheddar, guacamole, pico and crema, hand-rolled one at a time at Coahuila 192 in Roma Sur.",
          },
          { type: "cta", text: "Read the full California burrito guide", href: "/burrito-california-cdmx" },
        ],
      },
      es: {
        category: "Guía de burritos",
        title: "California burrito vs. Mission burrito: ¿cuál es la diferencia?",
        excerpt:
          "Los dos son californianos, los dos son enormes y casi no se parecen. Uno lleva arroz y frijoles. El otro lleva papas. Te explicamos.",
        body: [
          {
            type: "p",
            text: "Cuando alguien dice “burrito estilo California”, cada quien se imagina algo distinto. Es porque California tiene dos tradiciones de burrito famosas, de extremos opuestos del estado, y parten de ideas totalmente diferentes.",
          },
          { type: "h2", text: "El Mission burrito (San Francisco)" },
          {
            type: "p",
            text: "Nació en las taquerías del Mission District de San Francisco. Su sello es el volumen y la variedad: una tortilla de harina enorme, al vapor, rellena de arroz, frijoles, la carne que elijas, salsa y muchas veces queso, crema y guacamole, envuelta bien apretada en papel aluminio.",
          },
          { type: "h2", text: "El California burrito (San Diego)" },
          {
            type: "p",
            text: "Nació en los taco shops de San Diego, a unos minutos de la frontera. Su sello es el enfoque: carne asada, papas a la francesa, queso y toppings frescos como guacamole, pico de gallo y crema. Sin arroz. Sin frijoles. Las papas hacen el trabajo que en otros burritos hace el arroz… y lo hacen mejor.",
          },
          { type: "h2", text: "Lado a lado" },
          {
            type: "ul",
            items: [
              "Origen: Mission → San Francisco · California → San Diego",
              "Carbohidrato: Mission → arroz y frijoles · California → papas a la francesa",
              "Proteína: Mission → la que elijas · California → carne asada, siempre",
              "Sensación: Mission → suave y jugoso · California → carnudo, salado, un poco crujiente",
            ],
          },
          { type: "h2", text: "¿Cuál hacemos nosotros?" },
          {
            type: "p",
            text: "Juanberto's es un taco shop de San Diego de corazón. Hacemos el California burrito como en los taco shops: carne asada de picaña a la plancha, papas adentro, cheddar, guacamole, pico y crema, enrollado a mano uno por uno en Coahuila 192, Roma Sur.",
          },
          { type: "cta", text: "Lee la guía completa del California burrito", href: "/burrito-california-cdmx" },
        ],
      },
    },
  },
  {
    slug: "carne-asada-fries",
    date: "2026-10-02",
    image: "/menu/carne-asada-fries.jpg",
    imageAlt: {
      es: "Carne asada fries de Juanberto's con queso, guacamole, crema y pico de gallo",
      en: "Juanberto's carne asada fries with cheese, guacamole, crema and pico de gallo",
    },
    readMinutes: 3,
    content: {
      en: {
        category: "Burrito guide",
        title: "Carne asada fries: San Diego's other icon",
        excerpt:
          "Everything you love inside a California burrito, minus the tortilla, piled on a tray. Made for sharing (or not).",
        body: [
          {
            type: "p",
            text: "If the California burrito is San Diego's signature, carne asada fries are its sidekick. Walk into almost any taco shop in the city and you'll find them on the board: a tray of fries buried under chopped carne asada, melted cheese, guacamole, crema and pico de gallo.",
          },
          { type: "h2", text: "Not nachos" },
          {
            type: "p",
            text: "The logic is simple — it's the inside of a California burrito without the tortilla. Fries instead of chips, so every forkful has something soft, something crispy and something meaty. (No nachos here.)",
          },
          { type: "h2", text: "Our four versions" },
          {
            type: "ul",
            items: [
              "Carne Asada Fries — the classic, chopped picaña over fries.",
              "Chorizo Fries — Mexican chorizo, melted cheese, crema and pico.",
              "Porkbelly Fries — crispy pork belly, cheese, crema and pico.",
              "Birria Fries — shredded beef birria, cheese, guacamole, white onion and cilantro.",
            ],
          },
          {
            type: "p",
            text: "A tray feeds two as a side, or one very committed person as a meal. Pair it with a burrito and an agua fresca and you've got the full San Diego taco-shop experience in Roma Sur.",
          },
          { type: "cta", text: "See all fries on the menu", href: "/menu" },
        ],
      },
      es: {
        category: "Guía de burritos",
        title: "Carne asada fries: el otro ícono de San Diego",
        excerpt:
          "Todo lo que amas del California burrito, sin tortilla, servido en charola. Para compartir (o no).",
        body: [
          {
            type: "p",
            text: "Si el California burrito es la firma de San Diego, las carne asada fries son su compañero inseparable. Entra a casi cualquier taco shop de la ciudad y las vas a ver en el menú: una charola de papas cubierta de carne asada picada, queso fundido, guacamole, crema y pico de gallo.",
          },
          { type: "h2", text: "No son nachos" },
          {
            type: "p",
            text: "La lógica es simple: es el interior de un California burrito sin la tortilla. Papas en lugar de totopos, para que cada bocado tenga algo suave, algo crujiente y algo de carne. (Aquí no hay nachos.)",
          },
          { type: "h2", text: "Nuestras cuatro versiones" },
          {
            type: "ul",
            items: [
              "Carne Asada Fries: la clásica, picaña picada sobre papas.",
              "Chorizo Fries: chorizo mexicano, queso fundido, crema y pico.",
              "Porkbelly Fries: pork belly crujiente, queso, crema y pico.",
              "Birria Fries: birria de res deshebrada, queso, guacamole, cebolla blanca y cilantro.",
            ],
          },
          {
            type: "p",
            text: "Una charola alcanza para dos como acompañamiento, o para una persona muy decidida como comida. Acompáñala con un burrito y un agua fresca y tienes la experiencia completa de taco shop sandieguino en la Roma Sur.",
          },
          { type: "cta", text: "Ver todas las papas en el menú", href: "/menu" },
        ],
      },
    },
  },
];

export type LegacyGuide = {
  href: string;
  date: string;
  image: string;
  /** messages namespace that has `kicker`, `title`, `meta.description` */
  namespace: "cornerstone" | "burritoVsBurger" | "burritoNotASnack";
};

export const LEGACY_GUIDES: LegacyGuide[] = [
  { href: "/burrito-california-cdmx", date: "2026-06-02", image: "/menu/california-burrito.jpg", namespace: "cornerstone" },
  { href: "/burrito-vs-burger", date: "2026-06-29", image: "/content/burrito-vs-burger.png", namespace: "burritoVsBurger" },
  { href: "/why-a-california-burrito-isnt-a-snack", date: "2026-06-29", image: "/menu/el-tijuana.jpg", namespace: "burritoNotASnack" },
];

export const POST_SLUGS = POSTS.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function sortedPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string, locale: string): string {
  return new Date(`${date}T12:00:00-06:00`).toLocaleDateString(
    locale === "es" ? "es-MX" : "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "America/Mexico_City" }
  );
}
