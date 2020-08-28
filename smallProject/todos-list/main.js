//Ngày tháng
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
  "Saturday "
];
let date = new Date()

let thisDate = date.getDate();
let thisMonth = monthNames[date.getMonth()];
let thisYear = date.getFullYear()
let thisDay = dayNames[date.getDay()];

// push ngày tháng vào html

document.querySelector('.info__date--date').innerHTML = `${thisDate}`
document.querySelector('.dayMonthYear--day').innerHTML = `${thisDay}`
document.querySelector('.dayMonthYear--monthYear').innerHTML = `${thisMonth}, ${thisYear}`
