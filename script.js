const startBtn = document.getElementById("startBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const secretMessage = document.getElementById("secretMessage");

startBtn.addEventListener("click", () => {
  document.getElementById("aventura").scrollIntoView({ behavior: "smooth" });
});

surpriseBtn.addEventListener("click", () => {
  const isHidden = secretMessage.hidden;
  secretMessage.hidden = !isHidden;
  surpriseBtn.innerHTML = isHidden
    ? 'Mensaje desbloqueado <span>♥</span>'
    : 'Abrir mensaje secreto <span>♡</span>';
  if (isHidden) secretMessage.scrollIntoView({ behavior: "smooth", block: "center" });
});
