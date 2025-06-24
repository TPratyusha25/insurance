function renderVideo(videoUrl) {
    const wrapper = document.createElement('div');
    wrapper.className = 'video-wrapper';
  
    const video = document.createElement('video');
    video.src = videoUrl;
    video.setAttribute('controls', '');
  
    wrapper.appendChild(video);
    document.body.appendChild(wrapper);
  }
  
  // Example usage with authorable video URL
  renderVideo('https://www.w3schools.com/html/mov_bbb.mp4');
  