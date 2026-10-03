import bannerImg from '../assets/banner-livro.webp';

export default function Hero() {
  return (
    <section aria-label="Banner" className="faixa-livro bg-navy">
      <img
        src={bannerImg}
        alt="Livro antigo aberto sobre uma mesa escura, com uma biblioteca desfocada ao fundo"
        className="absolute inset-0 w-full h-full object-cover object-[50%_70%]"
      />
    </section>
  );
}
