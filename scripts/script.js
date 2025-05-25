const secoes = document.querySelectorAll('section');

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // Revela todos os .revelar dentro dessa seção com delay
      const elementos = entrada.target.querySelectorAll('.revelar');
      elementos.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('visivel');
        }, i * 200);
      });
      observer.unobserve(entrada.target); // só dispara uma vez por seção
    }
  });
}, {
  threshold: 0.5 // dispara quando 50% da seção estiver visível
});

secoes.forEach(secao => observer.observe(secao));