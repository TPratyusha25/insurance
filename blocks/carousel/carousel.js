const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
let items = ul.children;
const visibleItems = 3;
let currentIndex = 0;

// Get dynamic width from first real item
function getItemWidth() {
  return ul.querySelector('li')?.offsetWidth || 308; // Fallback if undefined
}

// Clone first visible items and append for infinite scroll effect
function cloneItems() {
  for (let i = 0; i < visibleItems; i++) {
    ul.appendChild(items[i].cloneNode(true));
  }
}

// Initialize
cloneItems();

// Now refetch items since we added clones
items = ul.children;
const itemCount = items.length - visibleItems; // Don't count clones

// Click Handlers
document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
  if (currentIndex <= 0) {
    currentIndex = itemCount;
    ul.style.transition = 'none';
    ul.style.transform = `translateX(-${currentIndex * getItemWidth()}px)`;
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
  ul.style.transform = `translateX(-${currentIndex * getItemWidth()}px)`;
  ul.style.transition = 'transform 0.4s ease-in-out';

  if (currentIndex >= itemCount) {
    setTimeout(() => {
      ul.style.transition = 'none';
      currentIndex = 0;
      ul.style.transform = `translateX(0)`;
    }, 400);
  }
}

// Handle screen resize — recalculate based on updated li width
window.addEventListener('resize', () => {
  ul.style.transition = 'none';
  ul.style.transform = `translateX(-${currentIndex * getItemWidth()}px)`;
});
