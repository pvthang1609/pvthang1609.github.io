// chọn class img
let selectDiceIMG0 = document.querySelector('.dice0__img')
let selectDiceIMG1 = document.querySelector('.dice1__img')
let selectTemporaryScore0 = document.querySelector('.score--temporary--score0')
let selectTemporaryScore1 = document.querySelector('.score--temporary--score1')
let selectTotalScore0 = document.querySelector('.left__score')
let selectTotalScore1 = document.querySelector('.right__score')
let selectLeftName = document.querySelector('.left__name')
let selectRightName = document.querySelector('.right__name')
let selectPointLevel = document.querySelector('.point__level')
let selectshowPlayer0Win = document.querySelector('.showPlayer0Win')
let selectshowPlayer1Win = document.querySelector('.showPlayer1Win')
let selectContainer = document.querySelector('.container')





let player = 0;

//random
function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}


//random xí ngầu
let dices = {
    dice0: 0,
    dice1: 0
}
// mảng img xí ngầu
let arrDices = [
    {
        name: 1,
        src: './img/1.jpg'
    },
    {
        name: 2,
        src: './img/2.jpg'
    },
    {
        name: 3,
        src: './img/3.jpg'
    },
    {
        name: 4,
        src: './img/4.jpg'
    },
    {
        name: 5,
        src: './img/5.jpg'
    },
    {
        name: 6,
        src: './img/6.jpg'
    }
];

// object điểm
let score0 = {
    total: 0,
    temporary: 0
}
let score1 = {
    total: 0,
    temporary: 0
}

// func hiển thị điểm số ra ngoài màn hình
function showScore() {
    if (player == 0) {
        selectTemporaryScore0.innerHTML = `${score0.temporary}`;
        selectTotalScore0.innerHTML = `${score0.total}`;
    }
    else {
        selectTemporaryScore1.innerHTML = `${score1.temporary}`;
        selectTotalScore1.innerHTML = `${score1.total}`;
    }
}

// func tính tổng điểm tạm thời
function sumTemporaryScore() {
    if (player == 0) {
        score0.temporary = score0.temporary + dices["dice0"] + dices["dice1"]
    }
    else {
        score1.temporary = score1.temporary + dices["dice0"] + dices["dice1"]
    }
}

// func lưu điểm tạm thời vào điểm tổng
function saveScore() {
    if(player == 0) {
        score0.total += score0.temporary;
        score0.temporary = 0;
        showScore();
        switchPlayer();
        showPlayer()
    }
    else {
        score1.total += score1.temporary;
        score1.temporary = 0;
        showScore();
        switchPlayer();
        showPlayer()
    }
    checkScore();
}

//func đổi người
function switchPlayer() {
    if (player == 0) {
        player = 1
    }
    else {
        player = 0
    }
}
//func hiển thị lượt người chơi

function showPlayer() {
    if(player == 0) {
        selectLeftName.classList.add('active')
        selectRightName.classList.remove('active')
    }
    else {
        selectRightName.classList.add('active')
        selectLeftName.classList.remove('active')
    }
}
// value mặc định của mốc điểm là 100
// function check điểm
function checkScore() {
    if(score0.total >= selectPointLevel.value) {
        selectshowPlayer0Win.style.display = 'block';
        selectContainer.style.filter = 'blur(30px)'
    }
    else if(score1.total >= selectPointLevel.value){
        selectshowPlayer1Win.style.display = 'block';
        selectContainer.style.filter = 'blur(30px)'
    }
}

// fuction tạo xí ngầu ngẫu nhiên
function randomDices() {
    dices["dice0"] = random(0, 6);
    dices["dice1"] = random(0, 6);

    if(dices["dice0"] == 1 || dices["dice1"] == 1) {
        if (player == 0) {
            score0.temporary = 0;
            showScore()
            switchPlayer()
        }
        else {
            score1.temporary = 0;
            showScore()
            switchPlayer()
        }
    }
    else {
        sumTemporaryScore();
    }
    showScore();
    showPlayer();

    arrDices.forEach(dice => {
        if (dice.name == dices["dice0"]) {
            selectDiceIMG0.src = dice.src 
        }
        if (dice.name == dices["dice1"]) {
            selectDiceIMG1.src = dice.src 
        }
    })
}