import SectionHeading from './SectionHeading';
import ServiceItem from './ServiceItem';
import BrokenHeartIcon from './icons/BrokenHeartIcon';
import CustodyIcon from './icons/CustodyIcon';
import SplitHouseIcon from './icons/SplitHouseIcon';
import PaternityIcon from './icons/PaternityIcon';
import { AREAS } from '../content/areas';
import { areaPath } from '../config/paths';

const ICONS = {
  'divorcio-e-dissolucao-de-uniao-estavel': BrokenHeartIcon,
  'guarda-de-menores-e-alimentos': CustodyIcon,
  'partilha-de-bens': SplitHouseIcon,
  'investigacao-de-paternidade': PaternityIcon,
};

export default function Services() {
  return (
    <section id="areas" className="bg-navy py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Ações em que Atuamos" subtitle="como podemos te ajudar?" color="white" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10">
          {AREAS.map((area) => (
            <ServiceItem
              key={area.slug}
              title={area.cardTitle}
              Icon={ICONS[area.slug]}
              to={areaPath(area.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
