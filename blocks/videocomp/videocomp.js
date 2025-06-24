
  function renderVideo(videoUrl) {
    const wrapper = document.createElement('div');
    wrapper.className = 'video-wrapper';

    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      // Convert to embeddable format
      const embedUrl = videoUrl
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/");
      const iframe = document.createElement('iframe');
      iframe.src = embedUrl + "?autoplay=0&rel=0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      wrapper.appendChild(iframe);
    } else {
      // Assume it's a direct video file
      const video = document.createElement('video');
      video.src = videoUrl;
      video.setAttribute('controls', '');
      wrapper.appendChild(video);
    }

    document.body.appendChild(wrapper);
  }

  // Example usage
  renderVideo("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  // Or for MP4: renderVideo("https://www.w3schools.com/html/mov_bbb.mp4");

