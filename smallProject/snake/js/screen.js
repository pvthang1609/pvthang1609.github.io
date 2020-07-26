class screen {
    constructor(game) {
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }
    update() {
        this.top = this.game.snake.y - (SCREEN_HEIGHT / 2)
        this.botton = this.game.snake.y + (SCREEN_HEIGHT / 2)
        this.left = this.game.snake.x -(SCREEN_WIDTH / 2)
        this.right = this.game.snake.x + (SCREEN_WIDTH / 2)
    }
    drawArc(pos) {
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.arc(
            pos.x - this.left,
            pos.y - this.top,
            50,
            0,
            Math.PI * 2);
        this.game.ctx.fill();
    }
}