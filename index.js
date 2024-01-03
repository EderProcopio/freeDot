const canvas = document.getElementById("gameArea");

// Relativo a area contextual do jogo
const ctx = canvas.getContext("2d");

// relativo ao background preto do jogo
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.width, canvas.height);