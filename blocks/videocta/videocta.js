document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".videocta-wrapper");
  if (!wrapper) return;

  const img = wrapper.querySelector("picture img");
  const link = wrapper.querySelector("a[href*='youtube.com']");

  if (!img || !link) {
    console.warn("Thumbnail image or YouTube link not found.");
    return;
  }

  const embedUrl = link.href.replace("watch?v=", "embed/") + "?autoplay=1";

  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");

    const picture = img.closest("picture");
    if (picture && picture.parentElement) {
      picture.parentElement.replaceChild(iframe, picture);
    } else {
      console.error("Picture element not found.");
    }
  });
});
