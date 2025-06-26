document.addEventListener("DOMContentLoaded", () => {
  const block = document.querySelector('.iframe-wrapper[data-block-name="iframe"]');
  if (!block) return;

  const img = block.querySelector("img");
  const videoContainer = block.querySelector(".iframe-video-container");
  const videoId = videoContainer?.dataset?.videoid;

  if (!img || !videoId) return;

  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&origin=${location.origin}`;
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("title", "YouTube Video");
    iframe.style.width = "100%";
    iframe.style.aspectRatio = "16/9";
    iframe.style.borderRadius = "12px";

    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);
    img.style.display = "none";
  });
});
