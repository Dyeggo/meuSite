const boxes = document.querySelectorAll('.especialidades-box');

boxes.forEach(box => {
    // Cria o parágrafo e adiciona dentro da box
    const p = document.createElement('p');
    p.classList.add('descricao-paragrafo');
    p.style.display = 'none';
    box.appendChild(p);

    box.addEventListener('click', () => {
        // Se já estiver visível, oculta
        if (p.style.display === 'block') {
            p.style.display = 'none';
            return;
        }

        // Oculta todos os outros parágrafos antes de mostrar o atual
        document.querySelectorAll('.descricao-paragrafo').forEach(outro => {
            outro.style.display = 'none';
        });

        // Define o conteúdo com base no ID
        if (box.id === 'landingPage') {
            p.textContent = "Uma landing page é uma página criada com foco em conversão, usada para apresentar uma oferta específica e incentivar o visitante a realizar uma ação.";
        } else if (box.id === 'siteInstitucional') {
            p.textContent = "Um site institucional apresenta sua empresa, missão, serviços e contato para clientes e parceiros.";
        } else if (box.id === 'blog') {
            p.textContent = "Um blog é um espaço para publicar conteúdos informativos, aumentar tráfego e autoridade da marca.";
        }

        p.style.display = 'block'; // Mostra o texto apenas da box clicada
    });
});
