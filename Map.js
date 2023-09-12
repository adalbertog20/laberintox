import Block from "./Block.js";

export default class Map {
    constructor() {
        this.w = [
          new Block(20, 0),
          new Block(0, 40),
          new Block(20, 40),
          new Block(40, 40),
          new Block(60, 40),
          new Block(60, 20),
          new Block(60, 20),
          new Block(80, 20),
          new Block(100, 20),
          new Block(100, 40),
          new Block(100, 60),
          new Block(100, 80),
          new Block(120, 80),

          new Block(140, 100),
          new Block(160, 100),
          new Block(180, 100),
          new Block(200, 100),
          new Block(220, 100),
          new Block(240, 100),
          new Block(260, 100),

          new Block(140, 0),
          new Block(140, 20),
          new Block(140, 40),
          new Block(160, 40),

          new Block(160, 60),
          new Block(180, 60),
          new Block(200, 60),
          new Block(220, 60),
          new Block(240, 60),
          new Block(260, 60),
          new Block(280, 60),

        ];
      }
      paint(ctx) {
        this.w.forEach(item => {
          item.paint(ctx);
        });
      }
}
