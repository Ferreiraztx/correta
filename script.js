// Insira aqui o número do WhatsApp da Correta (apenas números)
const WHATS = "554130105220";

window.addEventListener("load", () => {
  document.body.classList.add("is-ready");
});

const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 120 && currentScrollY > lastScrollY) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }
    lastScrollY = currentScrollY;
  },
  { passive: true },
);

const revealItems = document.querySelectorAll(
  "main > section, .hero > div, .hero > .ph, .cell, .step, form",
);
revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

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
