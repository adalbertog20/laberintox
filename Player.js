export default class Player {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 2;
        this.color = color;
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
    checkWallCollision(map, dir) {
        map.w.forEach(element => {
            if(this.collision(element)) {
                switch (dir) {
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