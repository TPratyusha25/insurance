document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".videocta.block").forEach(block => {
    const videoIdElem = block.querySelector('[data-aue-prop="videoId"]');
    const thumbnailImg = block.querySelector('img[data-aue-prop="thumbnailImage"]');

    if (videoIdElem && thumbnailImg) {
      const videoId = videoIdElem.textContent.trim();

      // Hide the videoId text
      videoIdElem.style.display = "none";

      // Wrap image in a video container
      const wrapper = document.createElement("div");
      wrapper.className = "video-wrapper";
      wrapper.dataset.videoId = videoId;

      wrapper.appendChild(thumbnailImg.cloneNode());

      // Remove original image and append the wrapper
      thumbnailImg.closest("div").remove();
      block.appendChild(wrapper);

      wrapper.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "true");
        wrapper.innerHTML = "";
        wrapper.appendChild(iframe);
      });
    }
  });
});
