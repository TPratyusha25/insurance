const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
const items = ul.children;
const itemCount = items.length;
const visibleItems = 3;

let itemWidth = getItemWidth(); // Dynamically get width

// Clone first visible items and append
for (let i = 0; i < visibleItems; i++) {
  ul.appendChild(items[i].cloneNode(true));
}

let currentIndex = 0;

// Left button click
document.querySelector('.carousel.block > div:nth-child(2)').addEventListener('click', () => {
  if (currentIndex <= 0) {
    currentIndex = itemCount; // jump to cloned end
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

// Right button click
document.querySelector('.carousel.block > div:nth-child(4)').addEventListener('click', () => {
  currentIndex++;
  updateSlider();
});

// Function to update slider position
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

// Helper: get item width based on viewport
function getItemWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1024 && screenWidth >= 768) {
    return 430; // Tablet
  } else if (screenWidth <= 768) {
    return 100; // Example: mobile — change as needed
  } else {
    return 308; // Default: desktop
  }
}

// Optional: Update on resize
window.addEventListener('resize', () => {
  itemWidth = getItemWidth();
  updateSlider(); // Adjust position based on new width
});
