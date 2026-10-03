import bannerImg from '../assets/banner-livro.webp';

export default function Hero() {
  return (
    <section aria-label="Banner" className="faixa-livro bg-forest">
      <img
        src={bannerImg}
        alt="Livro aberto sobre uma mesa, com uma biblioteca desfocada ao fundo"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </section>
  );
}
