const heartsContainer = document.querySelector(".hearts-container");
const colors = ["❤️", "💜"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 14 + "px";
  heart.textContent = colors[Math.floor(Math.random() * colors.length)];
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

const flames = document.querySelectorAll(".flame");

function relightCandles() {
  flames.forEach(f => f.style.display = "block");
}

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    mic.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    function detectBlow() {
      analyser.getByteFrequencyData(data);
      const volume = data.reduce((a, b) => a + b) / data.length;
      if (volume > 50) {
        flames.forEach(f => f.style.display = "none");
      }
      requestAnimationFrame(detectBlow);
    }

    detectBlow();
  })
  .catch(err => {
    console.error("Microphone error:", err);
  });
