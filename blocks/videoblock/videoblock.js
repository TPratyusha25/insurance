function renderVideoBlock(data) {
    if (!data || !data.title || !data.description || !data.videoId) {
      console.warn("Missing required fields for video block.");
      return;
    }
  
    const container = document.createElement("div");
    container.className = "video-block";
  
    const titleEl = document.createElement("h2");
    titleEl.textContent = data.title;
  
    const descriptionEl = document.createElement("div");
    descriptionEl.className = "description";
    descriptionEl.innerHTML = data.description;
  
    const videoWrapper = document.createElement("div");
    videoWrapper.className = "video-wrapper";
  
    const thumbnail = document.createElement("div");
    thumbnail.className = "video-thumbnail";
    thumbnail.style.backgroundImage = `url(https://img.youtube.com/vi/${data.videoId}/0.jpg)`;
  
    thumbnail.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1`;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
  
      videoWrapper.innerHTML = "";
      videoWrapper.appendChild(iframe);
    });
  
    videoWrapper.appendChild(thumbnail);
  
    container.appendChild(titleEl);
    container.appendChild(descriptionEl);
    container.appendChild(videoWrapper);
  
    document.body.appendChild(container);
  }
  
  // Example: run only when data is available
  document.addEventListener("DOMContentLoaded", () => {
    if (window.videoblockData) {
      renderVideoBlock(window.videoblockData);
    }
  });
  