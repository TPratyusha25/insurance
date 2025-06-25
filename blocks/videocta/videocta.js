document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".videocta .video-wrapper");
  
    wrappers.forEach(wrapper => {
      const videoId = wrapper.dataset.videoId;
      const thumbnail = wrapper.querySelector("img");
  
      if (videoId && thumbnail) {
        wrapper.addEventListener("click", () => {
          const iframe = document.createElement("iframe");
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
          iframe.frameBorder = "0";
          iframe.allow = "autoplay; encrypted-media";
          iframe.allowFullscreen = true;
  
          wrapper.innerHTML = "";
          wrapper.appendChild(iframe);
        });
      }
    });
  });
  