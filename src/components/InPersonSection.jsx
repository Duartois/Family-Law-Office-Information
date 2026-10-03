import SectionHeading from './SectionHeading';
import WhatsAppCTA from './WhatsAppCTA';
import { WHATSAPP_MESSAGES } from '../config/site';

export default function InPersonSection() {
  return (
    <section className="bg-forest py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          title="Atendimentos Presenciais"
          subtitle="Caso seja da sua preferência"
          color="white"
        />

        <p className="mt-8 text-white/90 leading-relaxed">
          POSSUÍMOS CONVÊNIO COM VÁRIOS COWORKINGS ESPALHADOS PELO BRASIL, DE FORMA QUE, CASO
          PREFIRA QUE O ATENDIMENTO SEJA NO FORMATO TRADICIONAL, IREMOS ATÉ VOCÊ.
        </p>

        <p className="mt-4 font-bold text-white leading-relaxed">
          Mas, se preferir vir ao nosso encontro, nosso escritório base fica na cidade de SÃO
          PAULO/SP. Teremos grande prazer em lhe receber.
        </p>

        <p className="mt-4 font-bold text-ocre leading-relaxed">
          ENTRE EM CONTATO AGORA, ATRAVÉS DO WHATSAPP, NO BOTÃO VERDE, E JÁ FALAREMOS COM VOCÊ.
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsAppCTA message={WHATSAPP_MESSAGES.geral} size="lg">
            Fale conosco agora
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
