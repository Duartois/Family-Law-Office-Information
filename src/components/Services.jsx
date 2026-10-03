import SectionHeading from './SectionHeading';
import ServiceItem from './ServiceItem';
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
    <section id="areas" className="bg-forest py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Ações em que Atuamos" subtitle="como podemos te ajudar?" color="white" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
          {ACTIONS.map((action) => (
            <ServiceItem key={action.title} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}
