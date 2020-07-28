class snake {
    constructor(game) {
        this.game = game;
        this.x = CANVAS_WIDTH / 2;
        this.y = CANVAS_HEIGHT /2;
        this.listenMouseEvent();
    }
    listenMouseEvent() {
        this.game.canvas.addEventListener('mousemove', (event) => {
            var rect = this.game.canvas.getBoundingClientRect();    //getBoundingClientRect => trả về 1 obj 'rect' bao gồm top, bot, left, right, x, y
            this.processMouseEvent({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
            console.log(event.offsetX, event.offsetY)
        })
    }
    processMouseEvent(mousePos) {
        console.log(mousePos)
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