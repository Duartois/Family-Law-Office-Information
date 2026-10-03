import SectionHeading from './SectionHeading';
import MonitorHeadsetIcon from './icons/MonitorHeadsetIcon';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-navy py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Entre em Contato Agora"
          subtitle="Advocacia ON-LINE, mais dinâmica, moderna e acessível"
          color="white"
        />

        <div className="mt-10 space-y-8 text-center">
          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            Atualmente todo o procedimento judicial está online, até mesmo as audiências, de forma
            que nosso escritório aderiu a essa prática e oferece a possibilidade de consultas e
            reuniões por videoconferência. Agendamos uma data e um horário e você será atendido sem
            ter que se deslocar.{' '}
            <strong className="text-white">TUDO PRÁTICO, RÁPIDO E SIGILOSO.</strong>
          </p>

          <MonitorHeadsetIcon className="w-20 h-20 md:w-24 md:h-24 text-ocre mx-auto" />

          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            O mesmo acontece com o envio de documentos, que poderá ser feito de forma online
            também, assim como o acompanhamento do seu caso, esteja ele sendo tratado de forma
            extrajudicial ou judicial.
          </p>
        </div>
      </div>
    </section>
  );
}
