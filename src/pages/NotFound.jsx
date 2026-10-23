import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { WHATSAPP_MESSAGES } from '../config/site';

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada | Coppí & Duarte" description="A página procurada não existe." noindex />
      <Header />
      <main className="bg-navy text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display uppercase text-3xl md:text-5xl tracking-wide leading-tight">
            Página não encontrada
          </h1>
          <div className="linha-titulo" />
          <p className="mt-6 text-lg leading-relaxed">O endereço acessado não existe neste site.</p>
          <p className="mt-4">
            <Link to="/" className="text-ocre underline underline-offset-4">
              Voltar para a página inicial
            </Link>
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} size="lg">
              Fale conosco pelo WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
      </main>
    </>
  );
}
