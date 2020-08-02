//image bird 51 x 36


let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')


canvas.height = 710;
canvas.width = 530;


//BIRD=============================================================================================================
var imgBird0 = new Image();
imgBird0.src = "./images/bird0.png"

var imgBird1 = new Image();
imgBird1.src = "./images/bird1.png"

var imgBird2 = new Image();
imgBird2.src = "./images/bird2.png"

let arrBrid = [imgBird0, imgBird1, imgBird2];

let frame = 0;
let i = 0


class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.v = 0;
        this.a = 0;
    }
    draw() {
        frame ++;
        if ( frame % 16 == 0) {
            i++
            if(i > 2) {
                i = 0;
            }
        }
        ctx.beginPath();
        ctx.drawImage(arrBrid[i], this.x, this.y);
    }
    drop() {
        if(this.y + this.v > canvas.height - 44) {
            this.y = canvas.height - 44;
            this.v = 0
        }
        this.v += this.a
        this.y += this.v
        this.draw()
    }
    fly() {
        this.v = -12;
    }
    
}
let bird = new Bird(150, canvas.height * 0.5 - 22);
//=================================================================================================================
//BACKGROUND=======================================================================================================
//background 230 x 625
let background = new Image();
background.src = './images/bg/bg.png'

class Bg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = -0.1;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(background, this.x, this.y)
    }
    move() {
        this.x += this.dx
        this.draw()
    }
}

let arrBg = []
function pushBg() {
    for (let i = 0; i < 4; i++) {
        let bg = new Bg(i * 229, 0)
        arrBg.push(bg);
    }
}
pushBg();
function popBg() {
    if(arrBg[0].x <= -229) {
        arrBg.splice(0, arrBg.length);
        pushBg();   
    }
}
//=================================================================================================================
//GROUND===========================================================================================================
//ground 215 x 143
let ground = new Image();
ground.src = './images/bg/ground.png'

class Ground {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = -1.5;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(ground, this.x, this.y)
    }
    move() {
        this.x += this.dx
        this.draw()
    }
}

let arrGround = []
function pushGround() {
    for (let i = 0; i < 4; i++) {
        let ground = new Ground(i * 215, 625)
        arrGround.push(ground);
    }
}
pushGround();
function popGround() {
    if(arrGround[0].x <= -215) {
        arrGround.splice(0, arrGround.length);
        pushGround();   
    }
}
//=================================================================================================================
//SCOSE============================================================================================================
let arrImgNumber = [
    {
        number: '0',
        srcImg: './images/number/0.png'
    },
    {
        number: '1',
        srcImg: './images/number/1.png'
    },
    {
        number: '2',
        srcImg: './images/number/2.png'
    },
    {
        number: '3',
        srcImg: './images/number/3.png'
    },
    {
        number: '4',
        srcImg: './images/number/4.png'
    },
    {
        number: '5',
        srcImg: './images/number/5.png'
    },
    {
        number: '6',
        srcImg: './images/number/6.png'
    },
    {
        number: '7',
        srcImg: './images/number/7.png'
    },
    {
        number: '8',
        srcImg: './images/number/8.png'
    },
    {
        number: '9',
        srcImg: './images/number/9.png'
    },
]

class Score {
    constructor(value) {
        this.value = value;
        this.split
    }
    drawImgNumber() {
        if(score.value >= 10) {
            this.split = (score.value.toString()).split('');
            arrImgNumber.forEach(nb => {
                if( nb.number == this.split[0]) {
                    let i = new Image();
                    i.src = nb.srcImg;
                    ctx.beginPath();
                    ctx.drawImage(i, 10, 10);
                }
                if( nb.number == this.split[1]) {
                    let i = new Image();
                    i.src = nb.srcImg;
                    ctx.beginPath();
                    ctx.drawImage(i, 65, 10);
                }
            })
        }
        else {
            this.split = (score.value.toString())
            arrImgNumber.forEach(nb => {
                if( nb.number == this.split) {
                    let i = new Image();
                    i.src = nb.srcImg;
                    ctx.beginPath();
                    ctx.drawImage(i, 10, 10);
                }
            })
        }
    }
}
let score = new Score(0)

if(score.value > 10) {
    let test = (score.value.toString()).split('');
    console.log(test)
}
//=================================================================================================================



addEventListener('keypress', (event) => {
    if (event.keyCode = 32) {
        bird.fly();
    }
    bird.a = 0.5;
})

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    arrBg.forEach(bg => {
        bg.move();
    })
    arrGround.forEach(ground => {
        ground.move();
    })
    score.drawImgNumber()
    bird.drop();
    popGround();
    popBg();
}
animate();