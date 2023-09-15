export default class Enemy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "blue";
        this.dir = 4;
        this.speed = 1;
    }
    paint(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.w, this.h, this.color);
        ctx.fill();
    }
    shot(p) {
        console.log(p);
    }

}