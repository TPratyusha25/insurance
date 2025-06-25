document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".video-thumbnail").forEach(thumbnail => {
    const videoId = thumbnail.getAttribute("data-youtubeid");
    const img = thumbnail.querySelector("img");

    if (img && videoId) {
      img.addEventListener("click", function () {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.setAttribute("title", "YouTube video");

        thumbnail.innerHTML = "";
        thumbnail.appendChild(iframe);
      });
    }
  });
});
