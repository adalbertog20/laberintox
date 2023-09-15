export default class Fire {
    constructor() {
        this.x = 740;
        this.y = 300;
    }
    paint(ctx) {
        const img = new Image();
        img.src = "./res/fire.png";
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, 32, 32);
    }
}