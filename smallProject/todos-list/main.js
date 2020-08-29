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

btAdd.addEventListener('click', function() {
  document.querySelector('.info__date').style.transform = 'translateX(-500px)'
  // document.querySelector('.info__date').style.opacity = '0'
})