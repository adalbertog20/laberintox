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
    move(map) {
        this.x += this.speed;
        this.checkWallCollision(map);
    }
    changeDirection() {
        this.dir = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    }
    checkWallCollision(map) {
        map.w.forEach(element => {
            if(this.collision(element)) {
                switch (this.dir) {
                    case 1:
                        this.y += this.speed;
                        break;
                    case 2:
                        this.x += this.speed;
                        break;
                    case 3:
                        this.y -= this.speed;
                        break;
                    case 4:
                        this.x -= this.speed;
                        break;

                }
            }
        });
        
    }
}