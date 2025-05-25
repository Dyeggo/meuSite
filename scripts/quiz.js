const perguntas = document.querySelectorAll("dt");
  const respostas = document.querySelectorAll("dd");

  perguntas.forEach((pergunta, index) => {
    pergunta.addEventListener("click", () => {
      const resposta = respostas[index];
      const icone = pergunta.querySelector("span");

      // Fecha todas as respostas menos a atual
      respostas.forEach((res, i) => {
        if (i !== index) {
          res.classList.remove("ativo");
          perguntas[i].querySelector("span").textContent = "+";
        }
      });

      // Alterna a resposta clicada
      const estaAtiva = resposta.classList.contains("ativo");
      resposta.classList.toggle("ativo", !estaAtiva);
      icone.textContent = estaAtiva ? "+" : "–";
    });
  });