// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");

  let voices = [];
  setTimeout(() => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }, 500);

  let form = document.querySelector('select');
  let voice = null;
  let utterance = null;
  let img = document.querySelector('img');

  let btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    let txt = document.querySelector("textarea").value;
    voice = document.querySelector("select").value;
    utterance = new SpeechSynthesisUtterance(txt);

    for (let i = 0; i < voices.length; i++) {
      let curr = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        curr += " — DEFAULT";
      }
      if (curr == voice) {
        utterance.voice = voices[i];
      }
    }
    
    utterance.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      img.src = 'assets/images/smiling.png';
    };
    
    synth.speak(utterance);
  });
}