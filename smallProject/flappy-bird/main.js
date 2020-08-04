//image bird 51 x 36


let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d')


canvas.height = 710;
canvas.width = 530;


//BIRD=============================================================================================================
var imgBird0 = new Image();
var imgBird1 = new Image();
var imgBird2 = new Image();

imgBird0.src = "./images/bird0.png"
imgBird1.src = "./images/bird1.png"
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
        if(this.y + this.v > canvas.height - 113) {
            this.y = canvas.height - 113;
            this.v = 0;
            stopMove()
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
let iChangeBg = 0;          // biến đếm thay đổi background

let background = new Image();

class Bg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = -0.1;
    }
    draw() {
       if (iChangeBg % 2 ==0) {
            background.src = './images/bg/bg.png'
        }
        else {
            background.src = './images/bg/bg-night.png'
        }
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
        this.dx = -2;
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
//RANDOM===========================================================================================================

function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

//PIPES============================================================================================================
//pipe 82x710======================================================================================================



let pipe_top = new Image();
let pipe_bottom = new Image();

pipe_top.src = './images/pipes/pipe-top.png'
pipe_bottom.src = './images/pipes/pipe-bottom.png'

class Pipes {
    constructor(x, y, space){
        this.x = x;
        this.y = y;
        this.space = space
    }
    draw() {
        ctx.beginPath()
        ctx.drawImage(pipe_top, this.x, this.y)
        ctx.beginPath()
        ctx.drawImage(pipe_bottom, this.x, this.y + 710 + this.space)
    }
    move() {
        this.x += -2;
        this.draw();
    }

}

let arrPipes = [new Pipes(615, random(-680, -265), random(250, 300))];

function pushPipes() {
    for (let i = 0; i < 4; i++) {
        let pipes = new Pipes(arrPipes[i].x + random(350, 450), random(-680, -265), random(250, 300))
        arrPipes.push(pipes);
    }
}
pushPipes();
function popPipes() {
    if(arrPipes[0].x <= -85) {
        arrPipes.splice(0, 1);
        let pipes = new Pipes(arrPipes[arrPipes.length - 1].x + random(350, 450), random(-680, -265), random(250, 300))
        arrPipes.push(pipes);
    }
}
//=================================================================================================================
//FUNCTION-CONTROL-BIRD============================================================================================
let isMovePipes = false;

function birdFly(event) {
        isMovePipes = true;
        bird.fly();
        bird.a = 0.5;
}
addEventListener('click', birdFly, true)

//=================================================================================================================
//FUNCTION-STOP-MOVE===============================================================================================

function stopMove() {
    arrBg.forEach(bg => {
        bg.dx = 0;
    })
    arrGround.forEach(ground => {
        ground.dx = 0;
    })
    isMovePipes = false;
    arrBrid[0].src = "./images/bird2.png";
    arrBrid[1].src = "./images/bird2.png";
    removeEventListener('click', birdFly, true)
}
//=================================================================================================================
//FUNCTION-EVENTCOLLISION==========================================================================================

function eventCollision() {
        if (bird.x + 51 > arrPipes[0].x
            && bird.x < arrPipes[0].x + 82
            &&(bird.y < arrPipes[0].y + 710 || bird.y + 36 > arrPipes[0].y + 710 + arrPipes[0].space)) {
                stopMove();
        }
}
//=================================================================================================================
//FUNCTION-ADDSCORE================================================================================================

function addScore() {
    if (bird.x == arrPipes[0].x + 82 || bird.x == arrPipes[0].x + 82 + 1) {
        score.value++;
    }
}

//=================================================================================================================
//FUNCTION-ANIMATE=================================================================================================

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    addScore();
    eventCollision();
    arrBg.forEach(bg => {
        bg.move();
    });
//=======================================================
    if (isMovePipes == true) {
        arrPipes.forEach(pipes => {
            pipes.move();
        });
    }
    else {
        arrPipes.forEach(pipes => {
            pipes.dx = 0;
            pipes.draw();
        });
    }
//=======================================================
    arrGround.forEach(ground => {
        ground.move();
    });
    score.drawImgNumber();
    bird.drop();
    popPipes();
    popGround();
    popBg();
}
animate();
//=================================================================================================================