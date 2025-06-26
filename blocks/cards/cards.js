export default function decorate(block) {
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    const imgDiv = row.querySelector(':scope > div:first-child');
    const bodyDiv = row.querySelector(':scope > div:last-child');

    // Assign classes
    imgDiv.className = 'cards-card-image';
    bodyDiv.className = 'cards-card-body';

    // Create hover overlay
    const hoverText = row.querySelector('.hoverText');
    const ctaLink = row.querySelector('.ctaLink');
    if (hoverText || ctaLink) {
      const overlay = document.createElement('div');
      overlay.className = 'cards-card-hover';

      if (hoverText) overlay.innerHTML = hoverText.innerHTML;
      if (ctaLink) {
        const link = document.createElement('a');
        link.href = ctaLink.textContent;
        link.target = '_blank';
        link.innerText = 'LEARN MORE';
        overlay.appendChild(link);
      }

      li.appendChild(overlay);
    }

    li.append(imgDiv, bodyDiv);
    ul.appendChild(li);
  });

  // Replace with optimized pictures
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  block.textContent = '';
  block.append(ul);
}
