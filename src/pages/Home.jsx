import Seo from '../components/Seo';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LawyersBar from '../components/LawyersBar';
import Services from '../components/Services';
import ServicesSecondary from '../components/ServicesSecondary';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import InPersonSection from '../components/InPersonSection';
import Contact from '../components/Contact';
import { SITE } from '../config/site';

const LEGAL_SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE.fullName,
  email: SITE.email,
  telephone: `+${SITE.whatsappNumber}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: 'BR',
  url: SITE.siteUrl,
};

export default function Home() {
  return (
    <>
      <Seo
        title="Coppí & Duarte Advogadas Associadas | Direito de Família"
        description="Especialistas em Direito de Família e Sucessões em São Paulo. Divórcio, guarda, pensão, inventário e mais. Atendimento humanizado, online ou presencial."
        path="/"
        jsonLd={LEGAL_SERVICE_JSON_LD}
      />
      <div className="tela-inicial">
        <Header />
        <Hero />
        <LawyersBar />
      </div>
      <Services />
      <ServicesSecondary />
      <About />
      <HowItWorks />
      <InPersonSection />
      <Contact />
    </>
  );
}
