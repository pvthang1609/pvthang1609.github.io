// background: 144*256      ****nhân đôi giá trị***
// ground: 168*56
//bird: 17*12
const DEGREE = Math.PI / 180

const game = {
    curent: 0,
    start: 0,
    play: 1,
    end: 2
}

let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d')

canvas.height = 624;
canvas.width = 400;
canvas.style.border = '1px solid black'

const sprites = new Image()
sprites.src = './img/sprites-flappy-bird.png'

//Bg
const bg = {
    sX: 0,
    sY: 0,
    sW: 144,
    sH: 256,
    cX: 0,
    cY: 0,
    cW: 144 * 2,
    cH: 256 * 2,
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX + 287, this.cY, this.cW, this.cH)
    }
}
//Ground
class Ground {
    constructor(cX, cY) {
        this.cX = cX;
        this.cY = cY;
        this.sX = 292;
        this.sY = 0;
        this.sW = 168;
        this.sH = 56;
        this.cW = 168 * 2;
        this.cH = 56 * 2;
        this.dx = -1;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
}
let arrGround = [];

for (let i = 0; i < 4; i ++) {
    let ground = new Ground(0 + 335*i, 512);
    arrGround.push(ground)
}

function drawArrGround(){
    arrGround.forEach(ground => {
        ground.draw()
    })
}

function updateArrGround() {
    arrGround.forEach(ground => {
        ground.cX += ground.dx
    })
    if(arrGround[0].cX <= -336){
        console.log(arrGround)
        arrGround.splice(0, 1)
        let ground = new Ground(arrGround[2].cX + 335, 512);
        arrGround.push(ground)
    }
}
//Bird

let frame = 0;

class Bird {
    constructor(cX, cY) {
        this.cX = cX;
        this.cY = cY;
        this.animate = [
            {sX: 3, sY: 491},
            {sX: 31, sY: 491},
            {sX: 59, sY: 491}
        ]
        this.sW = 17;
        this.sH = 12;
        this.cW = 17 * 2;
        this.cH = 12 * 2;
        this.i = 0
        this.a = 0.3;                 //a là gia tốc
        this.v = 0;                   //v là vận tốc
        this.rotate = 0;               //góc quay 
    }
    draw() {
        ctx.beginPath();
        if(game.curent == 0) {
            if(frame % 35 == 0) {
                this.i++;
                if(this.i > 2) {
                    this.i = 0
                }
            }
        }
        if(game.curent == 1) {
            if(frame % 16 == 0) {
                this.i++;
                if(this.i > 2) {
                    this.i = 0
                }
            }
        }
        
        ctx.save();
        ctx.translate(this.cX, this.cY)
        ctx.rotate(this.rotate * DEGREE)
        ctx.translate(-(this.cX + 17) , -(this.cY + 12))
        ctx.drawImage(sprites, this.animate[this.i].sX, this.animate[this.i].sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
        ctx.restore()
    }
    update() {
        if (game.curent == 1) {
            if (this.v < 0 ){
                this.rotate += this.v * 5
            }
            else {
                this.rotate += this.v / 5
            }
            if(this.rotate >= 90){
                this.rotate =90
            }
            if(this.rotate <= -25){
                this.rotate = -25
            }
            this.v += this.a
            this.cY += this.v
        }
        if (this.cY >= 512) {
            this.cY = 512;
            endgame();
        }
        
    }
}
let bird = new Bird(50, canvas.height / 2 - 12)

//Screen
const start = {
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, 295, 59, 92, 25, canvas.width/2 - 92, 150, 184, 50)
        ctx.drawImage(sprites, 292, 91, 57, 49, canvas.width/2- 57, 300, 114, 98)
    }
}
const end = {
    draw: function() {
        ctx.beginPath();
        ctx.drawImage(sprites, 3, 259, 113, 57, canvas.width/2 - 113, canvas.height/2 - 57, 226, 114)
    }
}
//Number
const arrNumber = [
    {name: 0, sX: 496, sY: 60,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 1, sX: 136, sY: 455,sW: 8,sH: 18,cW: 24,cH: 54},
    {name: 2, sX: 292, sY: 160,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 3, sX: 306, sY: 160,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 4, sX: 320, sY: 160,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 5, sX: 334, sY: 160,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 6, sX: 292, sY: 184,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 7, sX: 306, sY: 184,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 8, sX: 320, sY: 184,sW: 12,sH: 18,cW: 36,cH: 54},
    {name: 9, sX: 334, sY: 184,sW: 12,sH: 18,cW: 36,cH: 54}
]
class Score {
    constructor(value, cX, cY) {
        this.value = value;
        this.split
        this.cX = cX;
        this.cY = cY;
    }
    draw() {
        ctx.beginPath();
        if (this.value >= 10 ){
            this.split = (this.value.toString()).split('');
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, 10, 10, number.cW, number.cH);
                }
                if(this.split[1] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, 45, 10, number.cW, number.cH);
                }
            })
        }
        else {
            this.split = this.value.toString();
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, 10, 10, number.cW, number.cH);
                }
            })
        }
    }
    drawSmall() {
        ctx.beginPath();
        if (this.value >= 10 ){
            this.split = (this.value.toString()).split('');
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX, this.cY, number.cW/3, number.cH/3);
                }
                if(this.split[1] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX + 12, this.cY, number.cW/3, number.cH/3);
                }
            })
        }
        else {
            this.split = this.value.toString();
            arrNumber.forEach(number => {
                if(this.split[0] == number.name) {
                    ctx.drawImage(sprites, number.sX, number.sY, number.sW, number.sH, this.cX, this.cY, number.cW/3, number.cH/3);
                }
            })
        }
    }
}
let score = new Score(0, 262, 290);
let arrScore = [];
let maxScore = new Score(0, 262, 332)

//function endgame & new game

function endgame() {
    game.curent = 2;
    // arrScore.push(score);
}


//Control

addEventListener('click', function(){
    switch (game.curent) {
        case 0:
            game.curent = 1;
            break;
        case 1:
            bird.v = -7;
            break;
    }
})




//==============================================================================================================================================

//Update
function update() {
    if (game.curent == 0 || game.curent == 1) {
        updateArrGround();
    }
    bird.update()
}

//Draw
function draw() {
    bg.draw();
    drawArrGround();
    bird.draw();
    if(game.curent == 0) {
        start.draw()
    }
    if(game.curent == 1) {
        score.draw();  
    }
    if(game.curent == 2) {
        end.draw();
        score.drawSmall();
        maxScore.drawSmall();
    }
     
}

//Animate
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame ++;
    update();
    draw();


}
animate()