// Keep the full portfolio readable when JavaScript is unavailable.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
})();
