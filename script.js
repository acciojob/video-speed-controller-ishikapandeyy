const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');


// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


// Change Play / Pause button
function updateButton() {
  if (video.paused) {
    playButton.textContent = '►';
  } else {
    playButton.textContent = '❚ ❚';
  }
}


// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}


// Change volume
function handleVolume() {
  video.volume = this.value;
}


// Change playback speed
function handleSpeed() {
  video.playbackRate = this.value;
}


// Skip video
function skip() {
  video.currentTime += Number(this.dataset.skip);
}


// Click progress bar to seek
function scrub(e) {
  const scrubTime =
    (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}


// Event listeners

playButton.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', updateProgress);

volume.addEventListener('input', handleVolume);

playbackSpeed.addEventListener('input', handleSpeed);

skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});

progress.addEventListener('click', scrub);
