let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')

canvas.height = 1000;
canvas.width = 1000;
canvas.style.border = '1px solid #ccc'

const GIRD = 20;


function drawGird() {
    for(let i = 0; i < 1000; i += GIRD){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ccc'
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for(let i = 0; i < 1000; i += GIRD){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ccc'
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }
}


class rect {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.rect(this.x * GIRD + 1, this.y * GIRD + 1, 18, 18)
        ctx.fill();
    }
}

let snake = [
    {x: 0, y: 0, 'red'}
]

function update() {

}


function draw() {
    drawGird();
    snake.draw()
}


function animate() {
    requestAnimationFrame(animate);
    update();
    draw();
}
animate();