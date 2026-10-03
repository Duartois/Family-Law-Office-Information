import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import ServiceItem from './ServiceItem';
import TombstoneIcon from './icons/TombstoneIcon';
import WillIcon from './icons/WillIcon';
import ElderlyCoupleIcon from './icons/ElderlyCoupleIcon';
import AdoptionIcon from './icons/AdoptionIcon';

const ACTIONS = [
  { title: 'Inventários e arrolamentos de bens', Icon: TombstoneIcon },
  { title: 'Doações, testamentos e planejamentos patrimoniais (holding familiar)', Icon: WillIcon },
  { title: 'Curatelas', Icon: ElderlyCoupleIcon },
  { title: 'Tutelas e pedidos de adoção', Icon: AdoptionIcon },
];

export default function ServicesSecondary() {
  return (
    <section className="bg-forest py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Atuamos Também Em" subtitle="como podemos te ajudar?" color="white" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
          {ACTIONS.map((action) => (
            <ServiceItem key={action.title} {...action} />
          ))}
        </div>

        <Link
          to="/saque-fgts-doenca-grave"
          className="mt-8 flex items-center justify-between gap-4 bg-white rounded-lg shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow"
        >
          <span className="text-bordo font-display uppercase tracking-wide text-lg md:text-xl">
            Saque do FGTS por doença grave
          </span>
          <span className="text-ocre text-2xl flex-shrink-0" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
