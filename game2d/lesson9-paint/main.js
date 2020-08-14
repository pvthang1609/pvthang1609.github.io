let canvas = document.querySelector('.canvas');
let container = document.querySelector('.container');
let ctx = canvas.getContext('2d')
let size = 5;
let color = 'black'

container.height = 800;
container.width = 1200;
canvas.height = 700;
canvas.width = 1100;
canvas.style.border = '1px solid black';
canvas.style.borderRadius = '5px';
isDrawing = 0

addEventListener('mousedown', () => {
    isDrawing = 1;
    x = event.offsetX;
    y = event.offsetY;
})
addEventListener('mouseup', () => {
    isDrawing = 0;
})

addEventListener('mousemove', () => {
    if(isDrawing == 1) {
        ctx.beginPath();
        ctx.lineWidth = size;
        ctx.strokeStyle = color;
        ctx.moveTo(x, y);
        ctx.lineCap = 'round';
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        x = event.offsetX;
        y = event.offsetY;
    }
})

function reset() {
    ctx.clearRect(0, 0, 1100, 1100)
}


//