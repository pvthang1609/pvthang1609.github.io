//canvas
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.height = 1000;
canvas.width = 1200;
canvas.style.border = '1px solid black';


class Arc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 15;
        this.dx = 5;
        this.dy = -5;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fill()
    }
    update() {
        if(this.x + this.dx > canvas.width - this.r) {
            this.dx = -this.dx
        }
        if(this.y + this.dy < this.r) {
            this.dy = -this.dy
        }
        if(this.x + this.dx < this.r) {
            this.dx = -this.dx
        }
        if(this.y + this.dy > canvas.height - this.r) {             // hàng dưới
            this.x = pad.x + pad.w * 0.5;
            this.y = pad.y - this.r;
            this.dy = -this.dy
        }

        //va chạm với pad
        if (this.y + this.dy > pad.y - this.r
            && this.y + this.dy < pad.y + pad.h + this.r
            && this.x > pad.x
            && this.x < pad.x + pad.w) {
            this.dy = -this.dy
        }
        if(this.x + this.dx > pad.x - this.r
            && this.x + this.dx < pad.x + pad.w +this.r
            && this.y > pad.y
            && this.y < pad.y + pad.h) {
            this.dx = -this.dx
            this.dy = this.dy
        }
        
        this.x += this.dx;
        this.y += this.dy;
    }
}
let ball = new Arc(300, 700)

// class pad
class Pad {
    constructor(x, y , width, height, color) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.dx = 0;
        this.dy = 0;
        this.c = color;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h)

    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }
}

let pad = new Pad(500, 900, 200, 30, 'blue')
// class brick
// 2 mảng để setup lever game
let arr =   [
            1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1
            ]

let arrPoint =  [
                1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1,
                7, 7, 7, 7, 7, 7,
                1, 4, 1, 1, 4, 1,
                2, 2, 1, 1, 2, 2,
                3, 3, 3, 3, 3, 3
                ]

// độ rộng của canvas là 1200 chia làm 6 cột mỗi ô là 200
// chia thành 6 hàng kích thước mỗi hàng là 70
// brick kích thước là 180*50, khoảng cách là 20
//điểm bắt đầu vẽ là 20

const GRIDCOL = 200;
const GRIDROW = 70;



class Brick {
    constructor(x, y, point) {
        this.x = x;
        this.y = y;
        this.point = point  ;        // khi điểm < 0 thì biến mất brick đó
        this.arrColor = ['#65cc09','#fcfe03','#fc9a03','#fc6605','#fc3204', '#c70305', '#9c0264', '#630263'];
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.arrColor[this.point];
        ctx.rect(this.x, this.y, 150, 50)
        ctx.fill();
    }
}

let arrBirck = []
let n = 0

for (let i = 0; i <= 5; i++) {
    for(let j = 0; j <= 5; j++) {
        if (arr[n] == 1) {
            let brick = new Brick(20 + GRIDCOL * j, 20 + GRIDROW * i, arrPoint[n])
            arrBirck.push(brick);
        }
        n++;
    }
}
// function va chạm
function myFunction() {
    let a = arrBirck.length;
        while(a--) {
            if (ball.y + ball.dy < arrBirck[a].y + 50 + ball.r
                && ball.x > arrBirck[a].x
                && ball.x < arrBirck[a].x + 150
                && ball.y + ball.dy > arrBirck[a].y - ball.r) {
                    arrBirck[a].point--
                    if (arrBirck[a].point < 0) {
                        arrBirck.splice(a, 1);
                    }
                    ball.dy = -ball.dy
            }
            if (ball.x + ball.dx < arrBirck[a].x + 150 + ball.r
                && ball.y > arrBirck[a].y
                && ball.y < arrBirck[a].y + 50
                && ball.x + ball.dx > arrBirck[a].x - ball.r) {
                    arrBirck[a].point--
                    if (arrBirck[a].point < 0) {
                        arrBirck.splice(a, 1);
                    }
                    ball.dx = -ball.dx
            }
        }
}

//controll pad
addEventListener('mousemove', event => {
    pad.x = event.offsetX - pad.w * 0.5
});


//update
function update() {
    ball.update();
    pad.update();
}




//draw
function draw() {
    ball.draw();
    pad.draw();
    arrBirck.forEach(brick => {
        brick.draw()
    })
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    myFunction()
}
animate();