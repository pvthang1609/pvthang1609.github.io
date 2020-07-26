class snake {
    constructor(game) {
        this.game = game;
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT /2;
    }
    update() {

    }

    draw() {
        this.game.screen.drawArc({
            x: this.x,
            y: this.y
        })
    }
}