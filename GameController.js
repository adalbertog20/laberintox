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
    this.e2 = new Enemy(400, 100, 32, 32);
    this.e3 = new Enemy(100, 100, 32, 32);
    this.e4 = new Enemy(100, 400, 32, 32);
    this.e5 = new Enemy(600, 360, 32, 32);
    this.e6 = new Enemy(400, 560, 32, 32);


    this.sombra = new Sombra();
    this.meta = new Meta();
    this.game = false;
    this.sonido = new Audio();
    this.map = map;
  }
  paintObjects(ctx, canv) {
    this.map.paint(ctx, this.a, this.aP);
    this.e.paint(ctx);
    this.e2.paint(ctx);
    this.e3.paint(ctx);
    this.e4.paint(ctx);
    this.e5.paint(ctx);
    this.e6.paint(ctx);

    this.p.paint(ctx);
    this.sombra.paint(ctx, canv);
    this.meta.paint(ctx);
  }
  checkers(dir, ctx) {
    if (this.game == false) {
      this.p.checkWallCollision(this.map, dir);
      this.e.move(this.map);
      this.e2.move(this.map);
      this.e3.move(this.map);
      this.e4.move(this.map);
      this.e5.move(this.map);
      this.e6.move(this.map);
      if(this.e.checkCollisionWithPlayer(this.p) || this.e2.checkCollisionWithPlayer(this.p) || this.e3.checkCollisionWithPlayer(this.p) || this.e4.checkCollisionWithPlayer(this.p) || this.e5.checkCollisionWithPlayer(this.p) || this.e6.checkCollisionWithPlayer(this.p)) {
        this.p.x = 540;
        this.p.y = 20;
      }

      if (this.meta.checkPlayerCollision(this.p)) {
        this.game = true;
      }
    } else {
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 800, 600);
      ctx.fillStyle = "white";
      ctx.font = "80px serif";
      ctx.fillText("FELICIDADES!", 140, 200);
      ctx.fillText("GANASTE!", 200, 280);
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
