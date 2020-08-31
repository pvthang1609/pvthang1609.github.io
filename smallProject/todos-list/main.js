//Ngày tháng
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday "
];
const dayNamesAbb = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
  "Sat"
];

let date = new Date()

let thisDate = date.getDate();
let thisMonth = monthNames[date.getMonth()];
let thisYear = date.getFullYear()
let thisDay = dayNames[date.getDay()];
let thisDayAbb = dayNamesAbb[date.getDay()];
let thisTime = date.getTime();
let dateOne = new Date(thisTime - 3*86400000)
let dateTwo = new Date(thisTime - 2*86400000)
let dateThree = new Date(thisTime - 1*86400000)
let dateFive = new Date(thisTime + 1*86400000)
let dateSix = new Date(thisTime + 2*86400000)
let dateSeven = new Date(thisTime + 3*86400000)

let choiceDay =document.querySelectorAll('.sevenDay__day--date')

// push ngày tháng vào html

//date là ngày, day là thứ

document.querySelector('.info__date--date').innerHTML = `${thisDate}`
document.querySelector('.dayMonthYear--day').innerHTML = `${thisDay}`
document.querySelector('.dayMonthYear--monthYear').innerHTML = `${thisMonth}, ${thisYear}`

function removeActive() {
  choiceDay.forEach(button => {
    button.classList.remove('active')
  })
}

choiceDay.forEach(button => {
  button.addEventListener("click", function() {
    removeActive();
    button.classList.add('active')
  });
})


// push class seven day
document.querySelector('.day__one--day').innerHTML = `${dayNamesAbb[dateOne.getDay()]}`;
document.querySelector('.day__one--date').innerHTML = `${dateOne.getDate()}`;

document.querySelector('.day__two--day').innerHTML = `${dayNamesAbb[dateTwo.getDay()]}`;
document.querySelector('.day__two--date').innerHTML = `${dateTwo.getDate()}`;

document.querySelector('.day__three--day').innerHTML = `${dayNamesAbb[dateThree.getDay()]}`;
document.querySelector('.day__three--date').innerHTML = `${dateThree.getDate()}`;

document.querySelector('.day__four--day').innerHTML = `${thisDayAbb}`;
document.querySelector('.day__four--date').innerHTML = `${thisDate}`;

document.querySelector('.day__five--day').innerHTML = `${dayNamesAbb[dateFive.getDay()]}`;
document.querySelector('.day__five--date').innerHTML = `${dateFive.getDate()}`;

document.querySelector('.day__six--day').innerHTML = `${dayNamesAbb[dateSix.getDay()]}`;
document.querySelector('.day__six--date').innerHTML = `${dateSix.getDate()}`;

document.querySelector('.day__seven--day').innerHTML = `${dayNamesAbb[dateSeven.getDay()]}`;
document.querySelector('.day__seven--date').innerHTML = `${dateSeven.getDate()}`;

//add todo
let btAdd = document.querySelector('.btAdd')
let infoDate = document.querySelector('.info__date')
let sevenDay = document.querySelector('.sevenDay')
let todosList = document.querySelector('.todosList')
let creatNew = document.querySelector('.creatNew')

btAdd.addEventListener('click', function() {
  infoDate.style.visibility = 'hidden';
  infoDate.style.opacity = '0';
  sevenDay.style.visibility = 'hidden';
  sevenDay.style.opacity = '0';
  todosList.style.visibility = 'hidden';
  todosList.style.opacity = '0';
  creatNew.style.visibility = 'visible';
  creatNew.style.opacity = '1';
})

//creat new
let btCreat = document.querySelector('.btCreat')

btCreat.addEventListener('click', function() {
  infoDate.style.visibility = 'visible';
  infoDate.style.opacity = '1';
  sevenDay.style.visibility = 'visible';
  sevenDay.style.opacity = '1';
  todosList.style.visibility = 'visible';
  todosList.style.opacity = '1';
  creatNew.style.visibility = 'hidden';
  creatNew.style.opacity = '0';
  pushTodo()
  selectCurrent()
  selectHeading.value = ''
  selectContent.value = ''
  render()
})

//function tao id random
var ID = function () {
  return Math.random().toString(36).substr(2, 9);
};

for (let i = 1; i < 60; i++ ) {
  document.querySelector('#minute').innerHTML += `<option value="${i}">${i}</option>`
}

function selectCurrent() {
  document.querySelector('#date').selectedIndex = `${thisDate -1}`
  document.querySelector('#month').selectedIndex = `${date.getMonth()}`
  document.querySelector('#hour').selectedIndex = `${date.getHours() - 1}`
  document.querySelector('#minute').selectedIndex = `${date.getMinutes() - 1}`

}
selectCurrent();

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  document.querySelector('.delete').style.transform = 'translate(-50%, -50%) translateY(0px)'
  btAdd.style.bottom = '-60px'
  ev.target.style.opacity = '0.5'
}
function allowDrop(ev) {
  ev.preventDefault();

}
function drop(ev) {
  var data = ev.dataTransfer.getData("text");
  document.getElementById(data).remove()
  document.querySelector('.delete').style.transform = 'translate(-50%, -50%) translateY(100px)'
  btAdd.style.bottom = '30px'
  arrTodo = arrTodo.filter(todo => todo.id !== data);
}
function cancel(ev) {
  document.querySelector('.delete').style.transform = 'translate(-50%, -50%) translateY(100px)'
  btAdd.style.bottom = '30px'
  ev.target.style.opacity = '1'
}
class Todo {
  constructor(id, date, time, heading, content,) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.heading = heading;
    this.content = content;
  }
}
let selectDate = document.querySelector('#date')
let selectMonth = document.querySelector('#month')
let selectHour = document.querySelector('#hour')
let selectMinute = document.querySelector('#minute')
let selectHeading = document.querySelector('#heading')
let selectContent = document.querySelector('#content')


let arrTodo = []

function pushTodo() {
  let todo = new Todo(ID(), `${selectDate.value}-${selectMonth.value}`, `${selectHour.value}:${selectMinute.value}`,`${selectHeading.value}`, `${selectContent.value}`)
  arrTodo.push(todo)
}
function render() {
  document.querySelector('.innerTodoList').innerHTML = ``
  for(let i = 0; i < arrTodo.length; i ++) {
    document.querySelector('.innerTodoList').innerHTML += `<div class="todo" draggable="true" ondragstart="drag(event)" ondragend='cancel(event)' id="${arrTodo[i].id}">
    <div class="todo__time">${arrTodo[i].time}</div>
    <div class="todo__content">
        <div class="todo__content--text heading">${arrTodo[i].heading}</div>
        <div class="todo__content--text content">${arrTodo[i].content}</div>
    </div>
</div>`
  }
}