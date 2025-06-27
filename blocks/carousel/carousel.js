<script>
  (function () {
    const selector = '.carousel-wrapper';

    function isMobileView() {
      return window.innerWidth <= 767;
    }

    function handleCarouselDisplay() {
      const carousel = document.querySelector(selector);

      if (!carousel) return;

      if (isMobileView()) {
        // Fully hide the carousel on mobile
        carousel.style.display = 'none';
        carousel.setAttribute('aria-hidden', 'true');
        carousel.classList.add('force-hidden');
      } else {
        // Show the carousel on tablet/desktop
        carousel.style.display = 'block';
        carousel.removeAttribute('aria-hidden');
        carousel.classList.remove('force-hidden');
      }
    }

    // Initial check on DOM ready
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(handleCarouselDisplay, 100); // slight delay for EDS rendering
    });

    // Re-check on resize
    window.addEventListener('resize', function () {
      setTimeout(handleCarouselDisplay, 100);
    });
  })();
</script>
