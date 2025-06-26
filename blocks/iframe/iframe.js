const iframeData = {
  image: "/assets/Images/Careers/career-ea-video-overlay.jpg",
  imageAlt: "Video",
  videoUrl: "https://www.youtube.com/embed/6XT_TMEJR7Q"
};

function createIframeComponent(data) {
  const container = document.createElement("div");
  container.className = "iframe-wrapper";

  const img = document.createElement("img");
  img.src = data.image;
  img.alt = data.imageAlt;
  img.onclick = () => {
    container.classList.add("playing");
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: []
      }),
      "*"
    );
  };

  const iframe = document.createElement("iframe");
  iframe.src = `${data.videoUrl}?rel=0&enablejsapi=1&origin=${window.location.origin}`;
  iframe.title = "YouTube Video";
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";

  container.appendChild(img);
  container.appendChild(iframe);
  document.body.appendChild(container);
}

document.addEventListener("DOMContentLoaded", () => {
  createIframeComponent(iframeData);
});
