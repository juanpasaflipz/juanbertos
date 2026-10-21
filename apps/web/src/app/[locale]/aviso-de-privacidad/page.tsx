import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { PageHero } from "@/components/PageHero";
import { LEGAL_NAME, privacyNotice } from "@/lib/privacy-notice";

const SITE_URL = "https://www.juanbertos.com";
const SLUG = "aviso-de-privacidad";

type Props = { params: Promise<{ locale: string }> };

function noticeLocale(locale: string) {
  return locale === "en" ? "en" : "es";
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const notice = privacyNotice(noticeLocale(locale));
  const url = `${SITE_URL}/${locale}/${SLUG}`;
  const title = `${notice.title} | Juanberto's`;
  const description =
    locale === "es"
      ? "Cómo Juanberto's trata los datos personales de sus clientes: pedidos, facturas, club de lealtad, cookies y derechos ARCO."
      : "How Juanberto's handles its customers' personal data: orders, invoices, rewards club, cookies and ARCO rights.";
  return {
    title,
    description,
    // Not indexed until the responsable is named: the notice isn't in force yet.
    robots: LEGAL_NAME ? undefined : { index: false, follow: true },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/${SLUG}`])
      ),
    },
  };
}

export default async function PrivacyNoticePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const notice = privacyNotice(noticeLocale(locale));

  return (
    <>
      <PageHero kicker={notice.kicker} title={notice.title} subtitle={notice.updated} />
      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
          {!LEGAL_NAME && (
            <p role="note" className="mb-8 rounded-lg border border-salsa-500 bg-salsa-500/10 px-4 py-3 text-ink-900">
              {notice.pending}
            </p>
          )}
          {notice.governs && <p className="mb-8 text-ink-500">{notice.governs}</p>}
          <div className="space-y-10">
            {notice.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="headline-display text-2xl sm:text-3xl text-ink-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-ink-700 leading-relaxed">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
