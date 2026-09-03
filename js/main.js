// JavaScript do template, sem dependências.
// Mantenha simples: só o necessário para o site funcionar.
(function () {
  "use strict";

  // Preenche o ano atual onde houver [data-year] (rodapé).
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Menu mobile: abre e fecha a navegação.
  var toggle = document.querySelector(".site-nav__toggle");
  var menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Fecha o menu ao clicar em um link.
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
