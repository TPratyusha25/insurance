document.addEventListener("DOMContentLoaded", function () {
  const videoCtaData = {
    title: document.querySelector('[data-field="title"]')?.textContent || "",
    subtitle: document.querySelector('[data-field="subtitle"]')?.textContent || "",
    paragraph: document.querySelector('[data-field="paragraph"]')?.innerHTML || "",
    thumbnailImage: document.querySelector('[data-field="thumbnailImage"]')?.getAttribute("data-src") || "",
    videoUrl: document.querySelector('[data-field="videoUrl"]')?.textContent || ""
  };

  const wrapper = document.createElement("div");
  wrapper.className = "videocta-wrapper";

  wrapper.innerHTML = `
    <h1>${videoCtaData.title}</h1>
    <h2>${videoCtaData.subtitle}</h2>
    <div>${videoCtaData.paragraph}</div>
    <div id="video-container">
      <img id="video-thumbnail" src="${videoCtaData.thumbnailImage}" alt="Video Thumbnail">
    </div>
  `;

  document.body.appendChild(wrapper);

  const thumbnail = document.getElementById("video-thumbnail");
  const container = document.getElementById("video-container");

  thumbnail?.addEventListener("click", function () {
    const embedUrl = videoCtaData.videoUrl.replace("watch?v=", "embed/") + "?autoplay=1";
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");

    container.innerHTML = "";
    container.appendChild(iframe);
  });
});
