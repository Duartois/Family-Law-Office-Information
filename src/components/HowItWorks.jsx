import SectionHeading from './SectionHeading';
import MonitorHeadsetIcon from './icons/MonitorHeadsetIcon';
import CalendarCheckIcon from './icons/CalendarCheckIcon';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Entre em Contato Agora"
          subtitle="Advocacia ON-LINE, mais dinâmica, moderna e acessível"
          color="forest"
        />

        <div className="mt-10 space-y-8">
          <div className="flex items-start gap-4">
            <MonitorHeadsetIcon size={36} className="text-ocre flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              Atualmente todo o procedimento judicial está online, até mesmo as audiências, de
              forma que nosso escritório aderiu a essa prática e oferece a possibilidade de
              consultas e reuniões por videoconferência. Agendamos uma data e um horário e você
              será atendido sem ter que se deslocar.{' '}
              <strong className="text-forest">TUDO PRÁTICO, RÁPIDO E SIGILOSO.</strong>
            </p>
          </div>

          <div className="flex items-start gap-4">
            <CalendarCheckIcon size={36} className="text-ocre flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed">
              O mesmo acontece com o envio de documentos, que poderá ser feito de forma online
              também, assim como o acompanhamento do seu caso, esteja ele sendo tratado de forma
              extrajudicial ou judicial.
            </p>
          </div>

          <p className="text-ocre font-medium text-center text-lg">
            E, para uma MAIOR COMODIDADE, mensalmente você recebe no seu WhatsApp informações
            sobre o andamento do seu caso.
          </p>
        </div>
      </div>
    </section>
  );
}
