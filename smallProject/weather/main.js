
//select
var selectToday = document.querySelector('.today')
var selectTime = document.querySelector('.time')

setInterval(() => {
    var today = new Date();

    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear()

    var hour = today.getHours();
    var minute = today.getMinutes();

    selectTime.innerHTML = `${hour}:${minute}`;
    selectToday.innerHTML = `Ngày ${date} tháng ${month}, năm ${year}`;
}, 1000)
