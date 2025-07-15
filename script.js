function blowCandles() {
  const flames = document.querySelectorAll(".flame");
  flames.forEach(flame => {
    flame.style.display = "none";
  });

  const msg = document.getElementById("loveMessage");
  msg.textContent = "💨 Tu as soufflé les bougies... Joyeux 2 mois mon cœur 💕";
}
