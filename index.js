const canvas = document.getElementById("gameArea");

// Relativo a area contextual do jogo
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


//Loop do jogo
function drawGame() {
    clearScreen();
    inputs();
    boundryCheck();
    drawPinkCircle();
    requestAnimationFrame(drawGame);
}

function boundryCheck() {
    //cima
    if (y < radius) {
        y = radius;
    }
   
    //baixo
    if (y > canvas.height - radius) {
        y = canvas.height - radius;
    }

    //esquerda
    if (x < radius) {
        x = radius;
    }

    //direita
    if (x > canvas.width - radius) {
        x = canvas.width - radius;
    }
}

function inputs() {
    if (upPressed) {
        y = y - speed;
    }
    if (downPressed) {
        y = y + speed;
    }
    if (leftPressed) {
        x = x - speed;
    }
    if (rightPressed) {
        x = x + speed;
    }
}

function drawPinkCircle() {
    ctx.fillStyle = "#ffbbdb";

    if (upPressed || downPressed || leftPressed || rightPressed) {
        ctx.fillStyle = "#ff8fdb";
    }

    // Adiciona verificação para verificar se o círculo atingiu as margens
    if (y === radius || y === canvas.height - radius || x === radius || x === canvas.width - radius) {
        ctx.fillStyle = "#ff0000";  // Define a cor como vermelha se atingir as margens
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function clearScreen() {
    // relativo ao background preto do jogo
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyPressed);
document.body.addEventListener("keyup", keyReleased);

function keyPressed(event) {
    //cima
    if (event.code === 'ArrowUp') {
        upPressed = true;
    }

    //baixo
    if (event.code === 'ArrowDown') {
        downPressed = true;
    }

    //esquerda
    if (event.code === 'ArrowLeft') {
        leftPressed = true;
    }

    //direita
    if (event.code === 'ArrowRight') {
        rightPressed = true;
    }
};

function keyReleased(event) {
    //cima
    if (event.code === 'ArrowUp') {
        upPressed = false;
    }

    //baixo
    if (event.code === 'ArrowDown') {
        downPressed = false;
    }

    //esquerda
    if (event.code === 'ArrowLeft') {
        leftPressed = false;
    }

    //direita
    if (event.code === 'ArrowRight') {
        rightPressed = false;
    }

};
drawGame();
