import SectionHeading from './SectionHeading';
import { SITE } from '../config/site';
import sociasImg from '../assets/socias.webp';

export default function About() {
  const [lawyer1, lawyer2] = SITE.lawyers;

  return (
    <section id="sobre" className="bg-forest text-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Sobre o Escritório" color="white" />

        <p className="mt-8 text-lg leading-relaxed text-center">
          Apaixonadas pelo direito, as advogadas{' '}
          <span className="text-ocre font-semibold">{lawyer1.name}</span> e{' '}
          <span className="text-ocre font-semibold">{lawyer2.name}</span> fundaram, há{' '}
          {SITE.yearsOfExperience} anos, a {SITE.fullName}, um escritório que oferece serviços
          personalizados e humanizados.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-center">
          Para elas, atuar com o Direito de Família é um sacerdócio, pois, mais do que
          conhecimentos técnicos, é preciso ter habilidade e sensibilidade para, ora
          conscientizar aqueles que pensam em destruir, ora encorajar aqueles que se sentem
          destruídos.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src={sociasImg}
            alt={`As advogadas ${lawyer1.name} e ${lawyer2.name}, sócias da ${SITE.name}`}
            className="w-full max-w-xs border-4 border-white rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
