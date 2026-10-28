import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import WhatsAppCTA from '../components/WhatsAppCTA';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import LawyersCallout from '../components/LawyersCallout';
import Contact from '../components/Contact';
import { WHATSAPP_MESSAGES } from '../config/site';
import { areaPath } from '../config/paths';
import { AREAS, COMMON_FAQ } from '../content/areas';
import { buildLegalService, buildFaqPage } from '../seo/jsonld';

/** Modelo das páginas de área de atuação (mesma estrutura da página do FGTS). */
export default function AreaPage({ area }) {
  const path = areaPath(area.slug);
  const faqItems = [...area.faq, ...COMMON_FAQ];
  const message = WHATSAPP_MESSAGES.area(area.name);
  const otherAreas = AREAS.filter((other) => other.slug !== area.slug);

  return (
    <>
      <Seo
        title={area.seoTitle}
        description={area.description}
        path={path}
        jsonLd={[buildLegalService(path), buildFaqPage(faqItems)]}
      />
      <Header />

      <main className="bg-white text-gray-800">
        <section className="bg-navy text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide leading-tight">
              {area.h1}
            </h1>
            <div className="linha-titulo" />
            <p className="mt-6 text-lg leading-relaxed">{area.intro}</p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA message={message} size="lg">
                Fale conosco pelo WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {area.sections.map((section) => (
              <div key={section.heading}>
                <SectionHeading title={section.heading} color="navy" align="left" />
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div>
              <SectionHeading title="Veja também" color="navy" align="left" />
              <ul className="mt-4 space-y-2">
                {otherAreas.map((other) => (
                  <li key={other.slug}>
                    <Link to={areaPath(other.slug)} className="font-medium text-navy underline underline-offset-4">
                      {other.cardTitle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/saque-fgts-doenca-grave" className="font-medium text-navy underline underline-offset-4">
                    Saque do FGTS por doença grave
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-section-bg py-14 px-4 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Perguntas Frequentes" color="navy" />
            <div className="mt-10">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </section>

        <LawyersCallout
          message={message}
          text="Para falar sobre o seu caso, o contato com o escritório é feito pelo WhatsApp."
        />
      </main>

      <Contact />
    </>
  );
}
