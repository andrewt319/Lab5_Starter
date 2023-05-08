// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let img = document.querySelector('img');
  console.log(img);

  let form = document.querySelector('select');
  form.addEventListener('change', () => {
      let img = document.querySelector('img');
      let audio = document.querySelector('audio');
      if (form.value == 'air-horn') {
        img.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
      }
      else if (form.value == 'car-horn') {
        img.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
      }
      else {
        img.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
      }
  });

  let slider = document.querySelector('#volume');
  slider.addEventListener('input', () => {
    let volume_img = document.querySelector('div > img');
    if (slider.value == 0) {
      volume_img.src = 'assets/icons/volume-level-0.svg';
    }
    else if (slider.value >= 1 && slider.value < 33) {
      volume_img.src = 'assets/icons/volume-level-1.svg';
    }
    else if (slider.value >= 33 && slider.value < 67) {
      volume_img.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volume_img.src = 'assets/icons/volume-level-3.svg';
    }
  });
  
  const jsConfetti = new JSConfetti();
  let submit = document.querySelector('button');
  submit.addEventListener('click', () => {
    let audio = document.querySelector('audio');
    let form = document.querySelector('select');
    let volume = document.querySelector('#volume').value / 100;
    audio.volume = volume
    audio.play();
    if (form.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  })
}