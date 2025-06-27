
  let carouselEnabled = false;
  let currentIndex = 0;

  function initCarousel() {
    const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
    const items = ul.children;
    const itemCount = items.length;
    const visibleItems = 3;
    const itemWidth = 308;

    // Prevent double clones
    if (!ul.dataset.cloned) {
      for (let i = 0; i < visibleItems; i++) {
        ul.appendChild(items[i].cloneNode(true));
      }
      ul.dataset.cloned = 'true';
    }

    const leftBtn = document.querySelector('.carousel.block > div:nth-child(2)');
    const rightBtn = document.querySelector('.carousel.block > div:nth-child(4)');

    // Prevent double listeners
    if (!leftBtn.dataset.bound) {
      leftBtn.addEventListener('click', () => {
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
      leftBtn.dataset.bound = 'true';
    }

    if (!rightBtn.dataset.bound) {
      rightBtn.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
      });
      rightBtn.dataset.bound = 'true';
    }

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

  function destroyCarousel() {
    // Do nothing here since your logic does not need teardown
    // Just make sure the wrapper is hidden
    document.querySelector('.carousel-wrapper').style.display = 'none';
    carouselEnabled = false;
  }

  function checkViewport() {
    if (window.innerWidth > 767) {
      document.querySelector('.carousel-wrapper').style.display = 'block';
      if (!carouselEnabled) {
        initCarousel();
      }
    } else {
      destroyCarousel();
    }
  }

  // Initial check
  checkViewport();

  // Check on resize
  window.addEventListener('resize', checkViewport);
