export default class Sombra {
    constructor() {
    }
    paint(ctx, canv) {
        const gradient = ctx.createRadialGradient(
            canv.width / 2, canv.height / 2, 0,
            canv.width / 2, canv.height / 2, canv.width / 2
        );
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 19)"); 
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canv.width, canv.height);
    }
}