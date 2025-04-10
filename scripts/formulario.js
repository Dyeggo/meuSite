
const form = document.getElementById("form-contato");
const feedback = document.getElementById("mensagem-feedback");

function limparErros() {
    document.querySelectorAll(".erro").forEach(span => span.textContent = "");
    document.querySelectorAll(".erro-campo").forEach(el => el.classList.remove("erro-campo"));
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("msg").value = "";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limparErros();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const msg = document.getElementById("msg");

    let erro = false;

    // Verificação de formulario vazio ao enviar!
    if (nome.value.trim() === ""){
        document.getElementById("erro-nome").textContent = "Digite seu nome.";
        nome.classList.add("erro-campo");
        erro = true;
    }

    if (!email.value.includes("@") || !email.value.includes(".")){
        document.getElementById("erro-email").textContent = "Digite um e-mail válido";
        email.classList.add("erro-campo");
        erro = true;
    }

    if (telefone.value.trim().length < 9) {
        document.getElementById("erro-telefone").textContent = "Telefone incompleto";
        telefone.classList.add("erro-campo");
        erro = true;
    }

    if (msg.value.trim().length <10){
        document.getElementById("erro-msg").textContent = "Digite uma mensagem com pelo menos 10 caracteres";
        msg.classList.add("erro-campo");
        erro = true;
    }

    if (erro) return;

    // Mensagem de sucesso
    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";

    // Limpar os campos
    limparCampos();

    // sumir com a mensagem depois de 3 segundos
    setTimeout(() => feedback.textContent = "", 3000);

});