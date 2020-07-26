class game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        document.body.appendChild(this.canvas);

        this.snake = new snake(this);
        this.screen = new screen(this);
        this.loop();
    }

    loop() {
        this.update();
        this.draw();
        setTimeout( () => this.loop(), 20)
    }
    clearScreen() {
        this.ctx.beginPath()
        this.ctx.fillStyle = '#ccc'
        this.ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.ctx.fill();
    }

    update() {
        this.snake.update();
        this.screen.update();
    }

    draw() {
        this.clearScreen();
        this.snake.draw();
    }
}
var g = new game();  