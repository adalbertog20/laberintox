import Block from "./Block.js";

export default class Map {
  constructor() {
    this.w = [
      new Block(20, 0),
    ];
  }
  paint(ctx) {
    this.w.forEach(item => {
      item.paint(ctx);
    });
  }
}
