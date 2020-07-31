//khai báo canvas
var selectCanvas = document.querySelector('.canvas');
selectCanvas.width = 1500;
selectCanvas.height = 1000;
selectCanvas.style.background = '#48b1bf'
var ctx = selectCanvas.getContext('2d')
//class bóng
class arc {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.c = color;
        this.dx = 0;
        this.dy =0;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
    move() {
        if(this.x + this.dx > selectCanvas.width - 20) {
            this.dx = -this.dx
        }
        if(this.x + this.dx < 20) {
            this.dx = -this.dx
        }
        if(this.y + this.dy > selectCanvas.height - 20) {
            this.dy = -this.dy
        }
        if(this.y + this.dy < 20) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
    left() {
        this.dx = -5;
        this.dy = 0;
    }
    right() {
        this.dx = 5;
        this.dy = 0;
    }
    up() {
        this.dx = 0;
        this.dy = -5;
    }
    down() {
        this.dx = 0;
        this.dy = 5;
    }
}
//class điểm số
class Score {
    constructor(value) {
        this.value = value
    }
    draw() {
        ctx.beginPath();
        ctx.font = "100px Arial";
        ctx.fillStyle = '#fff';
        ctx.fillText(this.value, 100, selectCanvas.height -50);
        ctx.closePath();
    }
}
let score = new Score(0);


//function random
function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}
//=============================================================

let main = new arc(selectCanvas.width * 0.5, selectCanvas.height * 0.5, 20, 'red')


let arrPoint = [];

function pushPointToArr (numberPoint) {
    for(let i = 0; i < numberPoint; i++) {
        var point = new arc(randomNumber(10, selectCanvas.width - 10), randomNumber(10, selectCanvas.height - 10), 10, 'yellow');
        arrPoint.push(point);
    }
}
pushPointToArr(10);

//lắng nghe sự kiện
addEventListener('keydown', function(event) {
    console.log(event.keyCode)
    if(event.keyCode == 37) {
        main.left();
    }
    if(event.keyCode == 39) {
        main.right();
    }
    if(event.keyCode == 38) {
        main.up();
    }
    if(event.keyCode == 40) {
        main.down();
    }
})
//============================================================
//function grow
function grow() {
    if (score.value == arrPoint.length) {
        main.r = 30;
    }
}


//sự kiện va chạm
function eventCollision() {
    let n = arrPoint.length;
    while (n--){
        if (main.x + main.r >= arrPoint[n].x - arrPoint[n].r
            && main.x - main.r <= arrPoint[n].x + arrPoint[n].r
            && main.y + main.r >= arrPoint[n].y - arrPoint[n].r
            && main.y - main.r <= arrPoint[n].y + arrPoint[n].r){
            arrPoint.splice(n, 1);
            score.value +=1
        }
    }
}
//function newgame
function  newGame() {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.canvas').style.display = 'block';
    document.querySelector('.end').style.display = 'none';
    arrPoint.splice(0, arrPoint.length);
    pushPointToArr(10);
    main.x = randomNumber(10, selectCanvas.width - 10);
    main.y = randomNumber(10, selectCanvas.height - 10);
    main.dx = 0;
    main.dy = 0;
    score.value = 0;
    main.r = 20;
}
//function endGame
function endGame() {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.canvas').style.display = 'none';
    document.querySelector('.end').style.display = 'block';
    main.dx = 0;
    main.dy = 0;
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, selectCanvas.width, selectCanvas.height);
    arrPoint.forEach( point => point.draw());
    main.move();
    score.draw();
    grow();
    eventCollision();
    if(arrPoint.length == 0){
        endGame()
    }
}
animate();