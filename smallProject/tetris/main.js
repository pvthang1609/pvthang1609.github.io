// number col: 10, number row: 20
// one square 20 * 20

const ROW = 20;
const COL = 10;
const SQUARESIZE = 20;

let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')

canvas.height = 400;
canvas.width = 200;
canvas.style.border = '1px solid black'


// chia ô trên screen
function drawScreen() {
    for(let i = 0; i <= ROW; i++) {
        for(let j = 0; j <= COL; j++){
            ctx.beginPath();
            ctx.fillStyle = '#ccc'
            ctx.rect(j * SQUARESIZE, i * SQUARESIZE, SQUARESIZE, SQUARESIZE);
            ctx.fill();
            ctx.strokeStyle = '#000'
            ctx.stroke();
        }
    }   
}
// có 7 loại pieces Z, S, L, T, L, I, O
const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ]
]

class piece {
    constructor(x, y, n){           // i là vẽ dạng xoay nào của piece ( như trên Z có 4 dạng)
        this.x = x;
        this.y = y;
        this.n =  n;
    }
    draw() {
        ctx.beginPath();
        for(let i = 0; i < Z[this.n].length; i++) {
            for(let j = 0; j < Z[this.n][i].length; i++) {
                if(Z[this.n][i][j]){
                    console.log('isRun')
                }
            }
        }
    }
}
let z = new piece(2,2,0)
z.draw()



function update() {
    
}



function draw() {
    drawScreen();
}






function animate() {
    requestAnimationFrame(animate)
    update();
    draw();
}
animate()