 let currentSlide = 0;
  const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
  const itemWidth = 308; // your new min-width
  const visibleItems = 3;

  document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  document.querySelector('.carousel.block > div:nth-child(4)').addEventListener('click', () => {
    const maxSlides = ul.children.length - visibleItems;
    if (currentSlide < maxSlides) {
      currentSlide++;
      updateSlider();
    }
  });

  function updateSlider() {
    ul.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
  }
