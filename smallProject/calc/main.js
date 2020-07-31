let buttons = [
    {
        name: 'delete',
        symbol: '<',
        formula: false,
        type: 'key'
    },
    {
        name: 'clear',
        symbol: 'C',
        formula: false,
        type: 'key'
    },
    {
        name: 'percent',
        symbol: '%',
        formula: '/100',
        type: 'number'
    },
    {
        name: 'division',
        symbol: '÷',
        formula: '/',
        type: 'operator'
    },
    {
        name: 'seven',
        symbol: '7',
        formula: 7,
        type: 'number'
    },
    {
        name: 'eigth',
        symbol: '8',
        formula: 8,
        type: 'number'
    },
    {
        name: 'nine',
        symbol: '9',
        formula: 9,
        type: 'number'
    },
    {
        name: 'multiplication',
        symbol: 'x',
        formula: '*',
        type: 'operator'
    },
    {
        name: 'four',
        symbol: '4',
        formula: 4,
        type: 'number'
    },
    {
        name: 'five',
        symbol: '5',
        formula: 5,
        type: 'number'
    },
    {
        name: 'six',
        symbol: '6',
        formula: 6,
        type: 'number'
    },
    {
        name: 'subtraction',
        symbol: '-',
        formula: '-',
        type: 'operator'
    },
    {
        name: 'one',
        symbol: '1',
        formula: 1,
        type: 'number'
    },
    {
        name: 'two',
        symbol: '2',
        formula: 2,
        type: 'number'
    },
    {
        name: 'three',
        symbol: '3',
        formula: 3,
        type: 'number'
    },
    {
        name: 'summation',
        symbol: '+',
        formula: '+',
        type: 'operator'
    },
    {
        name: 'zero',
        symbol: '0',
        formula: 0,
        type: 'number'
    },
    {
        name: 'dot',
        symbol: '.',
        formula: '.',
        type: 'number'
    },
    {
        name: 'calculate',
        symbol: '=',
        formula: '=',
        type: 'calculate'
    }
]

//tạo biến select
let selectInput = document.querySelector('.input')

let numberBtnRow = 4;
for (let i = 0; i < buttons.length; i ++) {
    if (i % 4 == 0) {
        selectInput.innerHTML += `<div class="row"></div>`              // sau mỗi 4 button thì tạo 1 row mới
    }
    var selectRow = document.querySelector('.row:last-child')           // chọn đến row cuối cùng
    selectRow.innerHTML += `<button class="button" id="${buttons[i].name}">${buttons[i].symbol}</button>`;
}

selectInput.addEventListener('click', () => {
    buttons.forEach(button => {
        if(event.target.id == button.name) {
            calculator(button);
    }})
})

let data = {
    operator: [],                       // hiển thị công thức tính trên dòng đầu
    result: []                          // sử dụng eval và hàm join để tính và hiện thị ra result dòng thứ 2 output
}   

function updateToScreen() {
        document.querySelector('.operator').innerHTML = ``
        data.operator.forEach(operator => {
        document.querySelector('.operator').innerHTML += `${operator}`
    })
}

function createNumberFromString() {        //ghép các phần tử của mảng thành số
    return eval(data.result.join(''));
}


function calculator(button) {
    

    if (button.type == 'key') {
        if(button.name == 'delete') {
            data.operator.pop();            //đẩy đi phần tử cuối mảng
            data.result.pop();
            updateToScreen();
        }
        if(button.name == 'clear') {
            data.operator.splice(0, data.operator.length);
            data.result.splice(0, data.result.length);
            document.querySelector('.result').innerHTML = `0`
            updateToScreen();
        }
    }
    if (button.type == 'number' || button.type == 'operator') {
        data.operator.push(button.symbol);
        data.result.push(button.formula);
        updateToScreen()
    }
    if (button.type == 'calculate') {
        document.querySelector('.result').innerHTML = Math.round(createNumberFromString() * 100000000) / 100000000;
    }
    
    console.log(`result = ${data.result}`)
}

function darkMode() {
    document.body.style.background = 'linear-gradient(126deg, rgba(97,67,133,1) 0%, rgba(81,99,149,1) 100%)';
    document.querySelector('.calc').style.background = 'linear-gradient(302deg, rgba(20,30,48,1) 0%, rgba(36,59,85,1) 100%)';
    var selectButtons = document.querySelectorAll('.button');
    selectButtons.forEach( button => {
        button.style.background = '#376191';
        button.style.color = '#ccc';
    })
    document.querySelector('.darkMode__button').style.background = '#376191'
}

function normalMode() {
    document.body.style.background = 'linear-gradient(45deg, rgba(186,83,112,1) 0%, rgba(244,226,216,1) 100%)';
    document.querySelector('.calc').style.background = 'linear-gradient(135deg, rgba(69,104,220,1) 0%, rgba(176,106,179,1) 100%)';
    var selectButtons = document.querySelectorAll('.button');
    selectButtons.forEach( button => {
        button.style.background = '#e6e6e6';
        button.style.color = '#333333';
    })
    document.querySelector('.darkMode__button').style.background = '#e6e6e6'
    document.querySelector('.darkMode__button').style.color = '#ccc'
}

let i = 0;

function selectionMode() {
    i++;
    if(i % 2 == 1){
        darkMode();
    }
    else{
        normalMode();
    }
}