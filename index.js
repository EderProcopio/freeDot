const canvas = document.getElementById("gameArea");

// Relativo a area contextual do jogo
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;

let downPressed = false;


//Loop do jogo
function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawPinkCircle();
}

function inputs() {
    if(downPressed) {
        y = y + 10;
    }
}

function drawPinkCircle() {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    // relativo ao background preto do jogo
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
    //baixo
    if (event.keyCode == 40) {
        downPressed = true;
    }
};

function keyUp(event) {
    if (event.keyCode == 40) {
        downPressed = false;
    }
};
drawGame();
