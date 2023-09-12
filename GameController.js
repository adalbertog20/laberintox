import Map from "./Map.js";
import Player from "./Player.js";

export default class GameController {
    constructor() {
        this.p = new Player(0, 0, 20, 20, "black");
        this.map = new Map();
    }
    paintObjects(ctx) {
        this.p.paint(ctx);
        this.map.paint(ctx);
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
              if (this.p.y > 610) this.p.y = 610;
              break;
            case 4:
              this.p.x += this.p.speed;
              if (this.p.x > 1330) this.p.x = 1330;
              break;
          }
    }
}
