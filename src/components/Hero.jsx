import bannerImg from '../assets/banner-livro.webp';

export default function Hero() {
  return (
    <section aria-label="Banner">
      <img
        src={bannerImg}
        alt="Livro aberto sobre uma mesa, com uma biblioteca desfocada ao fundo"
        className="w-full h-[32vh] sm:h-[42vh] md:h-[52vh] object-cover"
      />
    </section>
  );
}
