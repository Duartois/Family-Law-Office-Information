import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
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
    <section className="bg-section-bg py-14 px-4 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Atuamos Também Em" subtitle="Como podemos te ajudar?" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
          {ACTIONS.map(({ title, Icon }) => (
            <div key={title} className="flex items-start gap-4">
              <Icon size={40} className="text-black flex-shrink-0" />
              <div>
                <p className="text-bordo font-display uppercase tracking-wide text-lg leading-snug">
                  {title}
                </p>
                <span className="block mt-1 text-xl" aria-hidden="true">✅</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/saque-fgts-doenca-grave"
          className="mt-10 flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:border-ocre transition-colors"
        >
          <span className="text-bordo font-display uppercase tracking-wide text-lg">
            Saque do FGTS por doença grave
          </span>
          <span className="text-ocre text-2xl flex-shrink-0" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
