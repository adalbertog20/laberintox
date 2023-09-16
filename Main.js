import GameController from "./GameController.js";
import Map from "./Map.js";

const canv = document.getElementById("canv");
const ctx = canv.getContext("2d");
let dir = 0;
const startTime = performance.now();
let audio = new Audio();
let song  = new Audio();
song.src = "./res/music.mp3";
audio.src = "./res/victoria.mp3";
song.play();

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case 'KeyW':
            dir = 1;
            break;
        case 'KeyA':
            dir = 2;
            break;
        case 'KeyS':
            dir = 3;
            break;
        case 'KeyD':
            dir = 4;
            break;
    }
});
let map = new Map();
let a = map.recorrer();
let aP = map.recorrerPiso();
let controller = new GameController(a, aP, map);

function drawCanvasContent() {
    const currentTime = performance.now();
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
    const minutes = Math.floor(elapsedTimeInSeconds / 60);
    const seconds = Math.floor(elapsedTimeInSeconds % 60); 
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
      ctx.fillText(
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      canv.width - 100,
      50
    );
}
function update() {
    controller.movePlayer(dir);
    repaint();
    controller.checkers(dir, ctx);
    if(controller.game == true) {
        audio.play();
    }
    window.requestAnimationFrame(update);
}

function repaint() {
    ctx.clearRect(0, 0, canv.clientWidth, canv.clientHeight);
    controller.paintObjects(ctx, canv);
    drawCanvasContent();
}

window.requestAnimationFrame = function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}();

window.requestAnimationFrame(update);