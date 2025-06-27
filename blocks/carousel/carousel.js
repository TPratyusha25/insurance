
  let currentSlide = 0;
  const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
  const itemWidth = 308; // matches your li width
  const visibleItems = 3;

  document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
    const maxSlides = ul.children.length - visibleItems;
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = maxSlides; // wrap to last set
    }
    updateSlider();
  });

  document.querySelector('.carousel.block > div:nth-child(4)').addEventListener('click', () => {
    const maxSlides = ul.children.length - visibleItems;
    if (currentSlide < maxSlides) {
      currentSlide++;
    } else {
      currentSlide = 0; // wrap to first
    }
    updateSlider();
  });

  function updateSlider() {
    ul.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
  }
