
(function() {
  const selector = '.carousel-wrapper';

  function isMobile() {
    return window.innerWidth <= 767;
  }

  function enforce() {
    const el = document.querySelector(selector);
    if (!el) return;

    if (isMobile()) {
      el.style.display = 'none';
      el.classList.add('force-hidden');
    } else {
      el.style.removeProperty('display');
      el.classList.remove('force-hidden');
    }
  }

  // Monitor initial load
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(enforce, 100);
  });

  // Monitor resizing
  let rTimer;
  window.addEventListener('resize', () => {
    clearTimeout(rTimer);
    rTimer = setTimeout(enforce, 100);
  });

  // Use MutationObserver to catch late carousel rendering
  const observer = new MutationObserver(enforce);
  observer.observe(document.body, { childList: true, subtree: true });
})();
