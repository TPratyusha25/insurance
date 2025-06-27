
  let carouselEnabled = false;

  function initCarousel() {
    const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
    const items = ul.children;
    const itemCount = items.length;
    const visibleItems = 3;
    const itemWidth = 308;

    // Clone first visible items and append
    for (let i = 0; i < visibleItems; i++) {
      ul.appendChild(items[i].cloneNode(true));
    }

    let currentIndex = 0;

    document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
      if (currentIndex <= 0) {
        currentIndex = itemCount;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        void ul.offsetWidth;
        ul.style.transition = 'transform 0.4s ease-in-out';
        currentIndex--;
      } else {
        currentIndex--;
      }
      updateSlider();
    });

    document.querySelector('.carousel.block > div:nth-child(4)').addEventListener('click', () => {
      currentIndex++;
      updateSlider();
    });

    function updateSlider() {
      ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      ul.style.transition = 'transform 0.4s ease-in-out';

      if (currentIndex >= itemCount) {
        setTimeout(() => {
          ul.style.transition = 'none';
          currentIndex = 0;
          ul.style.transform = `translateX(0)`;
        }, 400);
      }
    }

    carouselEnabled = true;
  }

  function checkViewport() {
    if (window.innerWidth > 767) {
      if (!carouselEnabled) {
        initCarousel();
        document.querySelector('.carousel-wrapper').style.display = 'block';
      }
    } else {
      document.querySelector('.carousel-wrapper').style.display = 'none';
    }
  }

  // Only the check runs on page load:
  checkViewport();
  window.addEventListener('resize', checkViewport);

