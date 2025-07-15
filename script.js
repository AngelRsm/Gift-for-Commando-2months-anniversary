body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #dbeafe; /* bleu pastel */
  overflow: hidden;
  position: relative;
  text-align: center;
}

.title {
  margin-top: 30px;
  font-size: 2.5rem;
  color: #1e3a8a; /* bleu navy foncé */
  font-weight: 700;
}

.verse {
  font-size: 1.1rem;
  color: #374151;
  margin-top: 10px;
}

.cake-container {
  position: relative;
  margin: 40px auto;
  width: 250px;
  height: 180px;
}

.cake {
  width: 180px;
  height: 100px;
  background: #1e3a8a;
  border-radius: 15px 15px 5px 5px;
  margin: 0 auto;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}

.couple-img {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  height: 140px;
}

.hearts-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.heart {
  position: absolute;
  font-size: 20px;
  animation: fall 5s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
