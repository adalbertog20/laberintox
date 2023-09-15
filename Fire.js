export default class Fire {
    constructor() {
        this.x = 740;
        this.y = 300;
        this.speed = 2;
    }
    paint(ctx) {
        const img = new Image();
        img.src = "./res/fire.png";
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, 32, 32);
    }
    gotoPlayer(xP, yP, ctx) {
        this.paint(ctx);
        const deltaX = xP - this.x;
        const deltaY = yP - this.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const direccionX = deltaX / distance;
        const direccionY = deltaY / distance;
        this.x += direccionX * this.speed;
        this.y += direccionY * this.speed;
    }
}