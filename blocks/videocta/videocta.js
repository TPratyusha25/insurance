document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".videocta-wrapper");

  if (!wrapper) return;

  const img = wrapper.querySelector("picture img");
  const videoLink = wrapper.querySelector("a[href*='youtube.com']");

  if (!img || !videoLink) return;

  const youtubeUrl = videoLink.getAttribute("href");
  const embedUrl = youtubeUrl.replace("watch?v=", "embed/") + "?autoplay=1";

  img.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", embedUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    const picture = img.closest("picture");
    if (picture && picture.parentNode) {
      picture.parentNode.replaceChild(iframe, picture);
    }
  });
});
