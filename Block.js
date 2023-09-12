export default class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
    }
    paint(ctx) {
        const img = new Image();
        img.src = "./res/textures.jpeg";
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
}
