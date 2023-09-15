import Enemy from "./Enemy.js";
import Fire from "./Fire.js";
import Player from "./Player.js";


export default class GameController {
  constructor(a, aP, map) {
    this.a = a;
    this.aP = aP;
    this.p = new Player(540, 20, 15, 15, "red");
    this.e = new Enemy(760, 300, 20, 20);
    this.f = new Fire();
    this.map = map;
  }
  paintObjects(ctx) {
    this.map.paint(ctx, this.a, this.aP);
    this.p.paint(ctx);
    this.e.paint(ctx);
    this.f.paint(ctx);
  }
  checkers(dir) {
    this.p.checkWallCollision(this.map, dir);
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
