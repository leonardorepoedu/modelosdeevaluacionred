document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  // Menú móvil.
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuButton.setAttribute(
        "aria-expanded",
        nav.classList.contains("open") ? "true" : "false"
      );
    });
  }

  // En escritorio el submenú se abre al pasar el mouse mediante CSS.
  // En dispositivos táctiles, un segundo clic sobre el botón puede abrir/cerrar el submenú.
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      const isDesktop = window.matchMedia("(min-width: 851px)").matches;

      if (isDesktop) {
        // El botón también funciona como enlace hacia la página principal
        // de "Modelos de evaluación y RED".
        window.location.href = "modelos-evaluacion-red.html";
        return;
      }

      event.preventDefault();
      dropdown.classList.toggle("open");
      dropdownToggle.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("open") ? "true" : "false"
      );
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
