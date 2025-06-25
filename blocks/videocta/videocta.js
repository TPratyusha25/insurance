document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".videocta-wrapper").forEach(wrapper => {
    const block = wrapper.querySelector(".videocta.block");

    if (!block) return;

    // Identify inner divs
    const innerDivs = block.querySelectorAll(":scope > div > div");

    let imageDiv = null;
    let videoIdDiv = null;

    innerDivs.forEach(div => {
      // Identify image block
      if (!imageDiv && div.querySelector("img")) {
        imageDiv = div;
      }

      // Identify YouTube ID by matching 11-char alphanumeric string
      if (!videoIdDiv && div.textContent.trim().match(/^[a-zA-Z0-9_-]{11}$/)) {
        videoIdDiv = div;
      }
    });

    if (imageDiv && videoIdDiv) {
      const videoId = videoIdDiv.textContent.trim();
      videoIdDiv.style.display = "none"; // Hide ID from being visible

      const img = imageDiv.querySelector("img");
      const videoWrapper = document.createElement("div");
      videoWrapper.className = "video-wrapper";
      videoWrapper.dataset.videoId = videoId;
      videoWrapper.appendChild(img.cloneNode(true));

      imageDiv.remove(); // Remove original image div
      block.appendChild(videoWrapper); // Insert new clickable wrapper

      // On click, replace image with iframe
      videoWrapper.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "true");

        videoWrapper.innerHTML = "";
        videoWrapper.appendChild(iframe);
      });
    }
  });
});

