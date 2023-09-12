import Block from "./Block.js";

export default class Map {
    constructor() {
        this.w = [
          this.w1 = new Block(20, 40),
          this.w2 = new Block(40, 40)
        ];
      }
      paint(ctx) {
        this.w.forEach(item => {
          item.paint(ctx);
        });
      }
}