import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

export default function Header() {
  return (
    <>
      <header className="faixa-logo bg-white px-4 py-3 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="font-display text-2xl md:text-3xl uppercase tracking-wide text-forest">
            {SITE.name}
          </Link>
        </div>
      </header>

      <div className="faixa-frase bg-forest">
        <p className="text-ocre text-right font-medium leading-snug text-[0.95rem] sm:text-base md:text-xl">
          Está precisando de um advogado?
          <br />
          Conte com a {SITE.name}
        </p>
      </div>
    </>
  );
}
