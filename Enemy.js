export default class Enemy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "blue";
        this.dir = Math.floor(Math.random() * 4) + 1;
        this.speed = 2;
    }
    paint(ctx) {

        const img = new Image();
        img.src = "./res/enemy.png";
        ctx.beginPath();
        ctx.drawImage(img, this.x, this.y, 20, 20);
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
        if (Math.random() < 0.05) {
            this.changeDirection();
        }
        switch (this.dir) {
            case 1:
                this.y -= this.speed;
                break;
            case 2:
                this.x -= this.speed;
                break;
            case 3:
                this.y += this.speed;
                break;
            case 4:
                this.x += this.speed;
                break;
        }
        this.checkWallCollision(map);
    }
    checkWallCollision(map) {
        map.map.forEach(element => {
            if (this.collision(element)) {
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

    changeDirection() {
        let oldDir = this.dir;
        let newDir = 0;
        do {
            newDir = Math.floor(Math.random() * 4) + 1;
        } while (newDir == oldDir);
        this.dir = newDir;
    }

}