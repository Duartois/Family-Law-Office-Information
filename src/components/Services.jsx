import SectionHeading from './SectionHeading';
import BrokenHeartIcon from './icons/BrokenHeartIcon';
import CustodyIcon from './icons/CustodyIcon';
import SplitHouseIcon from './icons/SplitHouseIcon';
import PaternityIcon from './icons/PaternityIcon';

const ACTIONS = [
  { title: 'Ações de divórcio ou dissolução de união estável', Icon: BrokenHeartIcon },
  { title: 'Ações de guarda de menores e fixação de alimentos', Icon: CustodyIcon },
  { title: 'Partilha de bens', Icon: SplitHouseIcon },
  { title: 'Investigação de paternidade', Icon: PaternityIcon },
];

export default function Services() {
  return (
    <section id="areas" className="bg-section-bg py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Ações em que Atuamos" subtitle="Como podemos te ajudar?" />

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
      </div>
    </section>
  );
}
