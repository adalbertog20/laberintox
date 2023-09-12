import Block from "./Block.js";

export default class Map {
  constructor() {
    this.w = [
      new Block(20, 0),
      new Block(20, 20),
      new Block(40, 40),
      new Block(20, 60),
      new Block(620, 0),
      new Block(620, 20),
      new Block(580, 60),
      new Block(580, 40),
      new Block(560, 40),
      new Block(520, 0),
      new Block(520, 20),
      new Block(520, 40),
      new Block(520, 60),
      new Block(520, 80),
      new Block(540, 80),
      new Block(540, 100),
      new Block(560, 100),
      new Block(600, 80),
      new Block(560, 120),
      new Block(580, 120),
      new Block(600, 60),
      new Block(620, 60),
      new Block(640, 60),
      new Block(660, 60),
      new Block(660, 40),
    ];
  }
  paint(ctx) {
    this.w.forEach(item => {
      item.paint(ctx);
    });
  }
}
