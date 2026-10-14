// Juanberto's customer privacy notice (aviso de privacidad integral) under the
// LFPDPPP published in the DOF on 20 March 2025. Spanish governs; English is a
// courtesy translation. Green Monkey links to /es/aviso-de-privacidad as the
// restaurant's notice, so the club section must keep naming what the club stores.
// DRAFT: review with Mexican counsel before relying on it.

/**
 * The company's exact razón social. While null the page shows a placeholder,
 * a warning and is not indexed: the notice is not valid without the responsable.
 */
export const LEGAL_NAME: string | null = null;
/** Optional under the LFPDPPP; shown when set. */
export const LEGAL_RFC: string | null = null;

export const PRIVACY_ADDRESS = "Coahuila 192, Roma Sur, 06760, Ciudad de México";
export const PRIVACY_EMAIL = "hello@juanbertos.com";

export type PrivacySection = { id: string; title: string; paragraphs: string[] };
export type PrivacyNotice = {
  title: string;
  kicker: string;
  updated: string;
  pending: string;
  governs?: string;
  sections: PrivacySection[];
};

const pendingName = { es: "[Razón social pendiente]", en: "[Legal name pending]" };

function responsable(locale: "es" | "en") {
  const name = LEGAL_NAME ?? pendingName[locale];
  return locale === "es"
    ? `${name}, que opera la marca Juanberto's California Burritos`
    : `${name}, which operates the Juanberto's California Burritos brand`;
}

export function privacyNotice(locale: "es" | "en"): PrivacyNotice {
  const who = responsable(locale);
  const rfc = LEGAL_RFC ? ` RFC: ${LEGAL_RFC}.` : "";

  if (locale === "en") {
    return {
      title: "Privacy notice",
      kicker: "Your data, plainly",
      updated: `Last updated: October 14, 2026`,
      pending:
        "Draft: the company's legal name is still pending. This notice is not in force until it is added.",
      governs:
        "This is a courtesy translation. The Spanish version (/es/aviso-de-privacidad) governs.",
      sections: [
        {
          id: "simplified",
          title: "Short version",
          paragraphs: [
            `${who}, located at ${PRIVACY_ADDRESS}, is responsible for your personal data. We use your name or nickname, phone, delivery address, billing data and purchases to take, charge, deliver and invoice your orders and to run our rewards club. We only send you promotions if you agree, and you can stop them at any time. To exercise your ARCO rights or limit the use of your data, write to ${PRIVACY_EMAIL}. Read the full notice below.`,
          ],
        },
        {
          id: "responsable",
          title: "1. Who is responsible",
          paragraphs: [
            `${who}, located at ${PRIVACY_ADDRESS}, is responsible for processing the personal data we collect at our restaurant, by phone and WhatsApp, on www.juanbertos.com and through our rewards club, under the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).${rfc}`,
            `For anything about your personal data, write to ${PRIVACY_EMAIL} or ask at the counter.`,
          ],
        },
        {
          id: "data",
          title: "2. Data we process",
          paragraphs: [
            "Orders at the restaurant, kiosk or QR code: the name or nickname you give for your order and your order notes. A nickname works just as well.",
            "Orders by phone or WhatsApp: your name, phone number, delivery address and the messages you send us about your order.",
            "Card payments: the payment terminal provider processes your card. We only receive the brand, the type (credit, debit or prepaid) and the last 4 digits; we never receive or store the full number, expiry date, security code or cardholder name.",
            "Invoices (CFDI): your RFC, name or company name, tax regime, postal code and email.",
            "Rewards club, if you join: your name or nickname, phone, your purchase history in the club (orders with date and total, stamps and rewards, including the frequent-customer ranking), the record of your consent (channel, date and this notice's version) and whether you accept promotions.",
            "Website: pages visited, approximate location derived from your IP address, device and browser data, and how you got to the site, through the cookies described in section 9.",
            "Orders through Rappi, DiDi Food or Uber Eats: each platform is responsible for the data you give it under its own notice; we only receive what it shares to prepare and hand over your order.",
            "Sensitive data: we do not ask for it. If you tell us about an allergy in an order note, we use it only to prepare that order safely; we recommend using a nickname rather than your full name in that case.",
          ],
        },
        {
          id: "purposes",
          title: "3. Why we use them",
          paragraphs: [
            "Primary purposes, needed to serve you: take, prepare, charge and deliver your orders; issue your invoices; run the rewards club (identify you, keep your stamps and rewards); handle questions, complaints and refunds; keep our records and comply with legal and tax obligations.",
            "Secondary purposes, not needed to serve you: send you promotions, news and offers by WhatsApp, text message or email; and measure and improve our website and advertising (section 9).",
            "If you don't want your data used for the secondary purposes, tell us when you join the club, reply \"BAJA\" to any promotional message or write to us at any time (section 4). Saying no never affects your orders, your invoices or your club stamps.",
          ],
        },
        {
          id: "limit",
          title: "4. How to limit the use of your data",
          paragraphs: [
            `Write to ${PRIVACY_EMAIL} saying which use you want to limit, or reply "BAJA" to any promotion. We keep an internal list of people who asked not to receive promotions and we respect it on every channel.`,
          ],
        },
        {
          id: "providers",
          title: "5. Providers and transfers",
          paragraphs: [
            "Providers that process data on our behalf (this is not a transfer): Green Monkey (point of sale, orders, rewards club and invoicing), Facturapi (stamping and emailing CFDI invoices), our card terminal provider (card payments), Meta (WhatsApp), Google and Meta (website measurement and advertising) and Vercel (website hosting). Some are located outside Mexico.",
            "We transfer data without your consent only where the law allows it, such as the CFDI the SAT receives when an invoice is stamped, or an order from a competent authority. We do not sell or rent your data.",
          ],
        },
        {
          id: "arco",
          title: "6. ARCO rights",
          paragraphs: [
            `You may access, rectify, cancel or object to the processing of your data by writing to ${PRIVACY_EMAIL} or delivering a written request at ${PRIVACY_ADDRESS}. Include your name and a way to reach you, a document proving your identity (or your representative's), a clear description of the data and the right you want to exercise, and anything that helps us find your data (for example, the phone you used in the club).`,
            "We will answer within 20 business days and, if your request is granted, apply it within the following 15 business days. The process is free.",
            "If you are not satisfied with our answer, you can go to the data protection authority (the Secretaría Anticorrupción y Buen Gobierno).",
          ],
        },
        {
          id: "revoke",
          title: "7. Withdrawing your consent",
          paragraphs: [
            "You can withdraw your consent the same way. It does not apply retroactively, and withdrawing it for a primary purpose may mean we can't continue that service (for example, we can't keep your club stamps without your phone).",
          ],
        },
        {
          id: "retention",
          title: "8. How long we keep them",
          paragraphs: [
            "Orders and invoices: 5 years, as tax law requires (article 30 of the Federal Tax Code).",
            "Rewards club: while you are a member. Your name and phone are deleted when you ask or after 24 months without activity.",
            "WhatsApp and phone orders: as long as needed to deliver the order and resolve any clarification.",
            "After those periods we block the data and then delete or anonymize it.",
          ],
        },
        {
          id: "cookies",
          title: "9. Cookies and similar technologies",
          paragraphs: [
            "www.juanbertos.com uses Google Tag Manager, Google Analytics, Google Ads, the Meta Pixel and Vercel Analytics to count visits, learn which pages and ads work, and show our ads on Google, Facebook and Instagram. They collect your IP address, device and browser data, pages visited and campaign identifiers.",
            "When you arrive from one of our ads, the site saves a temporary order reference in your browser (sessionStorage, for at most 24 hours) so we can match a WhatsApp order with that ad. It doesn't identify you.",
            "You can block or delete cookies in your browser settings, and control ad personalization at adssettings.google.com and in your Facebook or Instagram ad preferences. The site still works without them.",
          ],
        },
        {
          id: "changes",
          title: "10. Changes to this notice",
          paragraphs: [
            "We will publish any change on this page with its date. If a change affects the purposes you agreed to, we will ask for your consent again.",
          ],
        },
      ],
    };
  }

  return {
    title: "Aviso de privacidad",
    kicker: "Tus datos, claros",
    updated: `Última actualización: 14 de octubre de 2026`,
    pending:
      "Borrador: falta la razón social de la empresa. Este aviso no está vigente hasta agregarla.",
    sections: [
      {
        id: "simplificado",
        title: "Aviso de privacidad simplificado",
        paragraphs: [
          `${who}, con domicilio en ${PRIVACY_ADDRESS}, es responsable de tus datos personales. Usamos tu nombre o apodo, teléfono, dirección de entrega, datos de facturación y compras para tomar, cobrar, entregar y facturar tus pedidos y para llevar nuestro club de lealtad. Solo te enviamos promociones si lo aceptas, y puedes dejar de recibirlas cuando quieras. Para ejercer tus derechos ARCO o limitar el uso de tus datos escribe a ${PRIVACY_EMAIL}. Consulta el aviso integral a continuación.`,
        ],
      },
      {
        id: "responsable",
        title: "1. Responsable",
        paragraphs: [
          `${who}, con domicilio en ${PRIVACY_ADDRESS}, es responsable del tratamiento de los datos personales que recabamos en nuestro restaurante, por teléfono y WhatsApp, en www.juanbertos.com y en nuestro club de lealtad, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).${rfc}`,
          `Para cualquier asunto sobre tus datos personales escríbenos a ${PRIVACY_EMAIL} o pregunta en caja.`,
        ],
      },
      {
        id: "datos",
        title: "2. Datos que tratamos",
        paragraphs: [
          "Pedidos en el restaurante, el kiosco o por código QR: el nombre o apodo que nos das para tu pedido y las notas del pedido. Un apodo funciona igual.",
          "Pedidos por teléfono o WhatsApp: tu nombre, número de teléfono, dirección de entrega y los mensajes que nos envías sobre tu pedido.",
          "Pagos con tarjeta: el proveedor de la terminal de cobro procesa tu tarjeta. Solo recibimos la marca, el tipo (crédito, débito o prepago) y los últimos 4 dígitos; nunca recibimos ni guardamos el número completo, la fecha de vencimiento, el código de seguridad ni el nombre del titular.",
          "Facturas (CFDI): tu RFC, nombre o razón social, régimen fiscal, código postal y correo electrónico.",
          "Club de lealtad, si te unes: tu nombre o apodo, teléfono, tu historial de compras en el club (órdenes con su fecha y total, sellos y premios, incluido el ranking de clientes frecuentes), el registro de tu consentimiento (canal, fecha y la versión de este aviso) y si aceptas recibir promociones.",
          "Sitio web: páginas visitadas, ubicación aproximada derivada de tu dirección IP, datos de tu dispositivo y navegador, y cómo llegaste al sitio, mediante las cookies que describe la sección 9.",
          "Pedidos por Rappi, DiDi Food o Uber Eats: cada plataforma es responsable de los datos que le das, conforme a su propio aviso; nosotros solo recibimos lo que comparte para preparar y entregar tu pedido.",
          "Datos sensibles: no los solicitamos. Si nos indicas una alergia en la nota de un pedido, la usamos solo para preparar ese pedido de forma segura; en ese caso te recomendamos usar un apodo en vez de tu nombre completo.",
        ],
      },
      {
        id: "finalidades",
        title: "3. Finalidades",
        paragraphs: [
          "Finalidades primarias, necesarias para atenderte: tomar, preparar, cobrar y entregar tus pedidos; emitir tus facturas; llevar el club de lealtad (identificarte y llevar tus sellos y premios); atender dudas, quejas y devoluciones; llevar nuestros registros y cumplir obligaciones legales y fiscales.",
          "Finalidades secundarias, no necesarias para atenderte: enviarte promociones, novedades y ofertas por WhatsApp, mensaje de texto o correo; y medir y mejorar nuestro sitio web y nuestra publicidad (sección 9).",
          "Si no quieres que usemos tus datos para las finalidades secundarias, dínoslo al unirte al club, responde «BAJA» a cualquier mensaje promocional o escríbenos en cualquier momento (sección 4). Negarte nunca afecta tus pedidos, tus facturas ni tus sellos del club.",
        ],
      },
      {
        id: "limitar",
        title: "4. Cómo limitar el uso o la divulgación de tus datos",
        paragraphs: [
          `Escribe a ${PRIVACY_EMAIL} indicando qué uso quieres limitar, o responde «BAJA» a cualquier promoción. Llevamos un listado interno de las personas que pidieron no recibir promociones y lo respetamos en todos los canales.`,
        ],
      },
      {
        id: "encargados-transferencias",
        title: "5. Encargados y transferencias",
        paragraphs: [
          "Proveedores que tratan datos por nuestra cuenta como encargados, sin que sea una transferencia: Green Monkey (punto de venta, pedidos, club de lealtad y facturación), Facturapi (timbrado y envío por correo de los CFDI), el proveedor de nuestra terminal de cobro (pagos con tarjeta), Meta (WhatsApp), Google y Meta (medición y publicidad del sitio web) y Vercel (hospedaje del sitio web). Algunos pueden ubicarse fuera de México.",
          "Solo transferimos datos sin tu consentimiento en los casos que permite la ley, como el CFDI que recibe el SAT al timbrar una factura o una orden de autoridad competente. No vendemos ni rentamos tus datos.",
        ],
      },
      {
        id: "arco",
        title: "6. Derechos ARCO",
        paragraphs: [
          `Puedes acceder a tus datos, rectificarlos, cancelarlos u oponerte a su tratamiento escribiendo a ${PRIVACY_EMAIL} o entregando una solicitud por escrito en ${PRIVACY_ADDRESS}. Incluye tu nombre y un medio para comunicarte contigo, un documento que acredite tu identidad (o la de tu representante), la descripción clara de los datos y del derecho que quieres ejercer, y cualquier elemento que nos ayude a localizarlos (por ejemplo, el teléfono que usaste en el club).`,
          "Te responderemos en un máximo de 20 días hábiles y, si procede, haremos efectiva la respuesta dentro de los 15 días hábiles siguientes. El trámite es gratuito.",
          "Si no estás conforme con nuestra respuesta, puedes acudir a la autoridad de protección de datos (la Secretaría Anticorrupción y Buen Gobierno).",
        ],
      },
      {
        id: "revocacion",
        title: "7. Revocación del consentimiento",
        paragraphs: [
          "Puedes revocar tu consentimiento por el mismo medio. La revocación no tiene efectos retroactivos y, si es para una finalidad primaria, puede impedir que sigamos dándote ese servicio (por ejemplo, no podemos llevar tus sellos del club sin tu teléfono).",
        ],
      },
      {
        id: "conservacion",
        title: "8. Conservación",
        paragraphs: [
          "Pedidos y facturas: 5 años, como exige la ley fiscal (artículo 30 del Código Fiscal de la Federación).",
          "Club de lealtad: mientras seas socio. Tu nombre y teléfono se borran cuando lo pidas o tras 24 meses sin actividad.",
          "Pedidos por WhatsApp y teléfono: el tiempo necesario para entregar el pedido y atender cualquier aclaración.",
          "Al terminar esos plazos bloqueamos los datos y después los suprimimos o anonimizamos.",
        ],
      },
      {
        id: "cookies",
        title: "9. Cookies y tecnologías similares",
        paragraphs: [
          "www.juanbertos.com usa Google Tag Manager, Google Analytics, Google Ads, el Píxel de Meta y Vercel Analytics para contar visitas, saber qué páginas y anuncios funcionan y mostrar nuestros anuncios en Google, Facebook e Instagram. Estas herramientas recaban tu dirección IP, datos de tu dispositivo y navegador, páginas visitadas e identificadores de campaña.",
          "Cuando llegas desde uno de nuestros anuncios, el sitio guarda en tu navegador una referencia temporal de pedido (sessionStorage, por un máximo de 24 horas) para relacionar un pedido por WhatsApp con ese anuncio. No te identifica.",
          "Puedes bloquear o borrar las cookies en la configuración de tu navegador, y controlar la personalización de anuncios en adssettings.google.com y en tus preferencias de anuncios de Facebook o Instagram. El sitio funciona igual sin ellas.",
        ],
      },
      {
        id: "cambios",
        title: "10. Cambios a este aviso",
        paragraphs: [
          "Publicaremos cualquier cambio en esta página con su fecha. Si un cambio afecta las finalidades que aceptaste, te pediremos de nuevo tu consentimiento.",
        ],
      },
    ],
  };
}
