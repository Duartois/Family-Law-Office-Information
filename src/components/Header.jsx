import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className="font-display text-2xl md:text-3xl uppercase tracking-wide text-forest">
          {SITE.name}
        </Link>
        <p className="text-ocre text-sm md:text-base font-medium text-right">
          Está precisando de um advogado?
          <br />
          Conte com a {SITE.name}
        </p>
      </div>
    </header>
  );
}
