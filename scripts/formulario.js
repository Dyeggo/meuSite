function limparErros() {
    const erros = document.querySelectorAll(".erro");
    erros.forEach(e => e.textContent = "");

    const camposErro = document.querySelectorAll(".erro-campo");
    camposErro.forEach(campo => campo.classList.remove("erro-campo"));
}

const form = document.getElementById("form-contato");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    limparErros();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const msg = document.getElementById("msg");

    let erro = false;
    let primeiroErroCampo = null;

    if (nome.value.trim() === "") {
        document.getElementById("erro-nome").textContent = "Digite seu nome.";
        nome.classList.add("erro-campo");
        erro = true;
        if (!primeiroErroCampo) primeiroErroCampo = nome;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        document.getElementById("erro-email").textContent = "Digite um e-mail válido";
        email.classList.add("erro-campo");
        erro = true;
        if (!primeiroErroCampo) primeiroErroCampo = email;
    }

    if (telefone.value.trim().length < 9) {
        document.getElementById("erro-telefone").textContent = "Telefone incompleto";
        telefone.classList.add("erro-campo");
        erro = true;
        if (!primeiroErroCampo) primeiroErroCampo = telefone;
    }

    if (msg.value.trim().length < 10) {
        document.getElementById("erro-msg").textContent = "Digite uma mensagem com pelo menos 10 caracteres";
        msg.classList.add("erro-campo");
        erro = true;
        if (!primeiroErroCampo) primeiroErroCampo = msg;
    }

    if (erro) {
        primeiroErroCampo.focus(); // Apenas foca, sem scroll
        return;
    }

    form.submit();
});
