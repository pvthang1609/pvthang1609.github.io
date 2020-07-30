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
        formula: '/= 100',
        type: 'key'
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
        symbol: 'X',
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
    },
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
    console.log(event.target.id)
    buttons.forEach(button => {
        if(event.target.id == button.name) {
            calculator(button);
    }})
})

function calculator(button) {
    console.log(button)
}