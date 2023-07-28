const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');

playBtn.addEventListener('click', () => {
  audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
});

volumeSlider.addEventListener('input', () => {
  audioPlayer.volume = volumeSlider.value;
});
