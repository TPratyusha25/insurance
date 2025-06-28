const ul = document.querySelector('.carousel.block > div:nth-child(6) ul');
const items = ul.children;
const itemCount = items.length;
const visibleItems = 3;

let itemWidth = getItemWidth(); // Set initial item width

// Clone first visible items and append for infinite scroll effect
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

// Update the slider's position
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

// Function to get dynamic item width based on screen size
function getItemWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1024 && screenWidth > 768) {
    return 430; // Tablet
  } else if (screenWidth <= 768) {
    return 280; // Mobile (adjust as per your design)
  } else {
    return 308; // Desktop
  }
}

// Handle window resize — update itemWidth and translateX
window.addEventListener('resize', () => {
  const newWidth = getItemWidth();
  if (newWidth !== itemWidth) {
    itemWidth = newWidth;
    ul.style.transition = 'none';
    ul.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});
