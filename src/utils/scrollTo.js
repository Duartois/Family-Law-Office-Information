// Função matemática de easing suave (ease-in-out quadrática)
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

// Função principal de scroll
export const scrollToSection = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    const targetY = element.getBoundingClientRect().top + window.scrollY - 80; // -80px compensa o header fixo
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const duration = 1200; // Duração da animação em milissegundos (1.2s)

      // Calcula o progresso (0 a 1)
      const progress = Math.min(elapsed / duration, 1);
      
      // Aplica a curva de easing
      const ease = easeInOutQuad(progress);

      // Rola a página (behavior: 'auto' evita que o navegador tente
      // suavizar cada chamada por cima da nossa própria animação)
      window.scrollTo({ top: startY + diff * ease, left: 0, behavior: 'auto' });

      // Continua a animação se não terminou
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Inicia a animação
    requestAnimationFrame(animateScroll);
  }
};

// Função para voltar ao topo
export const scrollToTop = () => {
  const startY = window.scrollY;
  const diff = 0 - startY;
  let startTime = null;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const duration = 1200;

    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo({ top: startY + diff * ease, left: 0, behavior: 'auto' });

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};