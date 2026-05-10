// Mobile menu
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  const closeBtn = document.getElementById('nav-mobile-close');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
})();
