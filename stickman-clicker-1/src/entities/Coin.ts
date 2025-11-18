class Coin {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    render(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Logic for updating the coin state can be added here
    }
}

export default Coin;