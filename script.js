let flames = document.querySelectorAll(".flame");
let loveMessage = document.getElementById("loveMessage");

// --- Fonction pour éteindre les bougies
function blowCandles() {
  flames.forEach(flame => flame.style.display = "none");
  loveMessage.textContent = "💨 Tu as soufflé les bougies... Joyeux 2 mois mon cœur 💕";
}

// --- Fonction pour rallumer les bougies
function relightCandles() {
  flames.forEach(flame => flame.style.display = "block");
  loveMessage.textContent = "🕯️ Les bougies sont rallumées. Essaie encore de souffler !";
}

// --- Détection du micro
async function startMicDetection() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    const dataArray = new Uint8Array(analyser.fftSize);

    mic.connect(analyser);

    function detectBlow() {
      analyser.getByteTimeDomainData(dataArray);
      let total = 0;
      for (let i = 0; i < dataArray.length; i++) {
        let deviation = dataArray[i] - 128;
        total += Math.abs(deviation);
      }

      const volume = total / dataArray.length;
      if (volume > 10) { // seuil de souffle
        blowCandles();
      }

      requestAnimationFrame(detectBlow);
    }

    detectBlow();

  }
