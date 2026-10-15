// Insira aqui o número do WhatsApp da Correta (apenas números)
const WHATS = "554130105220";

document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();
  const grupoNome = document.getElementById("gn");

  // Validação simples: se o nome não for preenchido, exibe o aviso
  if (!nome) {
    grupoNome.classList.add("bad");
    nomeInput.focus();
    return;
  }
  grupoNome.classList.remove("bad");

  const situacao = document.getElementById("sit").value;
  const segmento = document.getElementById("seg").value;

  // Mensagem bem estruturada para chegar pronta no WhatsApp
  const mensagem =
    `Olá! Meu nome é ${nome}.\n\n` +
    `• Situação: ${situacao}\n` +
    `• Ramo de atuação: ${segmento}\n\n` +
    `Gostaria de solicitar o diagnóstico para a minha empresa.`;

  // Redireciona para o WhatsApp com a mensagem formatada
  const url =
    "https://wa.me/" + WHATS + "?text=" + encodeURIComponent(mensagem);
  window.open(url, "_blank");
});
