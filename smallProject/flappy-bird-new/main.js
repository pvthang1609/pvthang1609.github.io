// background: 144*256      ****nhân đôi giá trị***
// ground: 168*56
//bird: 17*12



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
// ground
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
        this.dx = -5;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(sprites, this.sX, this.sY, this.sW, this.sH, this.cX, this.cY, this.cW, this.cH)
    }
    update() {
        
    }
}
let arrGround = [new Ground(0, 512),new Ground(336, 512),new Ground(672, 512)];










//==============================================================================================================================================

//update
function update() {
    ground.update()
}

//draw
function draw() {
    bg.draw()
    ground.draw()
}

//animate
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    draw();


}
animate()