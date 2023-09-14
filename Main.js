import GameController from "./GameController.js";
import Map from "./Map.js";

const canv = document.getElementById("canv");
const ctx = canv.getContext("2d");
let dir = 0;

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
let controller = new GameController(a, map);

function update() {
    controller.movePlayer(dir);
    controller.checkers(dir);
    repaint();
    window.requestAnimationFrame(update);
}

function repaint() {
    ctx.clearRect(0, 0, canv.clientWidth, canv.clientHeight);
    controller.paintObjects(ctx);
}

window.requestAnimationFrame = function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 17);
      };
  }();
  
  window.requestAnimationFrame(update);