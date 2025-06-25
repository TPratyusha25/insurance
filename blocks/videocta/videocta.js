document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".videocta-wrapper");

  if (!wrapper) return;

  const picture = wrapper.querySelector("picture");
  const linkElement = wrapper.querySelector("a[href*='youtube.com']");

  if (!picture || !linkElement) return;

  const videoUrl = linkElement.getAttribute("href");
  const iframeUrl = videoUrl.replace("watch?v=", "embed/") + "?autoplay=1";

  // Click on image
  picture.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", iframeUrl);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    // Replace image with video
    picture.parentNode.replaceChild(iframe, picture);
  });
});
