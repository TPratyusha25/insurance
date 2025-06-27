<script>
  (function () {
    const selector = '.carousel-wrapper';

    function isMobileView() {
      return window.innerWidth <= 767;
    }

    function hideCarousel() {
      const carousel = document.querySelector(selector);
      if (carousel) {
        carousel.style.display = 'none';
      }
    }

    function showCarousel() {
      const carousel = document.querySelector(selector);
      if (carousel) {
        carousel.style.display = 'block';
      }
    }

    function handleCarouselDisplay() {
      if (isMobileView()) {
        hideCarousel();
      } else {
        showCarousel();
      }
    }

    // On DOM ready
    document.addEventListener('DOMContentLoaded', handleCarouselDisplay);

    // On resize, debounce to avoid performance issues
    let resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleCarouselDisplay, 150);
    });
  })();
</script>
