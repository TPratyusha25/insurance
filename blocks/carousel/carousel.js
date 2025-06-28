document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
  const visibleItems = 3;
  let items = Array.from(ul.children);
  const originalItemCount = items.length;

  // Clone first visible items and append
  for (let i = 0; i < visibleItems; i++) {
    ul.appendChild(items[i].cloneNode(true));
  }

  // Refresh items after cloning
  items = Array.from(ul.children);
  let currentIndex = 0;

  function getItemWidth() {
    // Calculate based on total scroll width and number of items
    const totalWidth = ul.scrollWidth;
    const totalItems = items.length;
    return totalWidth / totalItems;
  }

  function updateSlider() {
    const itemWidth = getItemWidth();
    ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    ul.style.transition = 'transform 0.4s ease-in-out';

    if (currentIndex >= originalItemCount) {
      setTimeout(() => {
        ul.style.transition = 'none';
        currentIndex = 0;
        ul.style.transform = `translateX(0)`;
      }, 400);
    }
  }

  document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
    const itemWidth = getItemWidth();
    if (currentIndex <= 0) {
      currentIndex = originalItemCount;
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

  window.addEventListener('resize', () => {
    updateSlider();
  });
});
