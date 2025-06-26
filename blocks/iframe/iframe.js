function playVideo(imgElement) {
  const container = imgElement.closest('.embed-container');
  const iframe = container.querySelector('iframe');
  container.classList.add('playing');
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: "playVideo",
      args: []
    }),
    "*"
  );
}
