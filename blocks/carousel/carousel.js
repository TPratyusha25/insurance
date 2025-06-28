document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 600) {
    const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
    const items = ul.children;
    const itemCount = items.length;
    const visibleItems = 3;
    const itemWidth = items[1].offsetWidth;

    for (let i = 0; i < visibleItems; i++) {
      ul.appendChild(items[i].cloneNode(true));
    }

    let currentIndex = 0;

    const leftBtn = document.querySelector('.carousel.block > div:nth-child(2)');
    const rightBtn = document.querySelector('.carousel.block > div:nth-child(4)');

    leftBtn?.addEventListener('click', () => {
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

    rightBtn?.addEventListener('click', () => {
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
  }
});
