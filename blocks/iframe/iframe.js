document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll('.iframe-wrapper[data-block-name="iframe"]');

  wrappers.forEach((wrapper) => {
    const img = wrapper.querySelector("img");
    const container = wrapper.querySelector(".iframe-video-container");
    const videoId = container?.dataset?.videoid;

    if (!img || !videoId || !container) return;

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&origin=${location.origin}`;
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("title", "YouTube Video");
      iframe.style.width = "100%";
      iframe.style.aspectRatio = "16 / 9";
      iframe.style.borderRadius = "12px";

      container.innerHTML = "";
      container.appendChild(iframe);
      img.style.display = "none";
    });
  });
});
