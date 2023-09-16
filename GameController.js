import Enemy from "./Enemy.js";
import Meta from "./Meta.js";
import Player from "./Player.js";
import Sombra from "./Sombra.js";


export default class GameController {
  constructor(a, aP, map) {
    this.a = a;
    this.aP = aP;
    this.p = new Player(540, 20, 15, 15, "red");
    this.e = new Enemy(500, 140, 20, 20);
    this.e2 = new Enemy(540, 40, 32, 32);
    this.sombra = new Sombra();
    this.meta = new Meta();
    this.game = false;
    this.sonido = new Audio();
    this.map = map;
  }
  paintObjects(ctx, canv) {
    this.map.paint(ctx, this.a, this.aP);
    this.e.paint(ctx);
    this.sombra.paint(ctx, canv);
    this.p.paint(ctx);
    this.meta.paint(ctx);
  }
  checkers(dir, ctx) {
    if (this.game == false) {
      this.p.checkWallCollision(this.map, dir);
      this.e.move(this.map);
      if (this.meta.checkPlayerCollision(this.p)) {
        this.game = true;
      }
    } else {
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "black";
      ctx.font = "40px serif";
      ctx.fillText("FELICIDADES!", 250, 200);
      ctx.fillText("GANASTE!", 280, 240);
    }
  }
  movePlayer(dir) {
    switch (dir) {
      case 1:
        this.p.y -= this.p.speed;
        if (this.p.y < 0) this.p.y = 0;
        break;
      case 2:
        this.p.x -= this.p.speed;
        if (this.p.x < 0) this.p.x = 0;
        break;
      case 3:
        this.p.y += this.p.speed;
        if (this.p.y > 600) this.p.y = 600;
        break;
      case 4:
        this.p.x += this.p.speed;
        if (this.p.x > 1000) this.p.x = 1000;
        break;
    }
  }
}
