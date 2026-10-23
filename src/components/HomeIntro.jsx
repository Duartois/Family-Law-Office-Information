import SectionHeading from './SectionHeading';

/** Único h1 da home, com um parágrafo curto sobre a atuação do escritório. */
export default function HomeIntro() {
  return (
    <section className="bg-navy py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading as="h1" title="Advocacia em Direito de Família e Sucessões em São Paulo" color="white" />
        <p className="mt-8 text-white/90 leading-relaxed text-base md:text-lg">
          A Coppí &amp; Duarte Advogadas Associadas atua em Direito de Família e Sucessões, em São
          Paulo, com atendimento on-line ou presencial. Conheça a seguir as áreas em que o
          escritório atua.
        </p>
      </div>
    </section>
  );
}
