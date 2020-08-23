let status = document.querySelector('.status')
let input = document.querySelector('.addTodo__input')
let contentTodo = document.querySelector('.content__todo')
let todoList = document.querySelector('.todoList')
// let checkbox =document.querySelector('#todo')

var div = document.createElement("DIV");

let list = [];
function render() {
    todoList.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        todoList.innerHTML += `<div class="todo">
        <div class="status"><i class="fa fa-circle" aria-hidden="true"></i></div>
        <div class="content">
        <input type="checkbox" name="todo0" class="todoCheck">
        <p class="content__todo">${list[i].content} </p>
        </div>
        <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>`
    }
}

// function checkbox() {
//     if (document.)
// }


function addTodo() {
    list.push({ content: `${input.value}`, status: false})
    input.value = '';
    render();
}

