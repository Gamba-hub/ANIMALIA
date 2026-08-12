document.addEventListener('DOMContentLoaded', () => {

  /* ============ MENÚ MÓVIL (HAMBURGUESA) ============ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cierra el menú al hacer clic en un enlace (útil en móvil)
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });

  /* ============ ACORDEÓN DE PREGUNTAS FRECUENTES ============ */
  const accordionHeaders = document.querySelectorAll('.accordion__header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Cierra los demás ítems abiertos (comportamiento acordeón clásico)
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.nextElementSibling.style.maxHeight = null;
        }
      });

      // Alterna el ítem actual
      header.setAttribute('aria-expanded', !isExpanded);
      panel.style.maxHeight = isExpanded ? null : panel.scrollHeight + 'px';
    });
  });

  /* ============ AÑO DINÁMICO EN FOOTER ============ */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});