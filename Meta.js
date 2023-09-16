export default class Meta {
    constructor() {
        this.x = 360;
        this.y = 580;
        this.w = 20;
        this.h = 20;
        this.sonido = new Audio();
    }
    paint(ctx) {
        const img = new Image();
        img.src = "./res/meta.jpg";
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, this.w, this.h);
    }
    collision(t) {
        if (
            this.x < t.x + t.h
            && this.x + this.h > t.x
            && this.y < t.y + t.h
            && this.y + this.h > t.y
        ) {
            return true;
        }
        return false; 
    }
    checkPlayerCollision(t) {
        if(this.collision(t)) {
            return true;
        }
        return false;
    }
}