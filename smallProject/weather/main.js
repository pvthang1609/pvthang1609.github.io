
//select
var selectToday = document.querySelector('.today')
var selectTime = document.querySelector('.time')
var selectDaysOfTheWeek = document.querySelector('.daysOfTheWeek')
var selectIconWeather_image = document.querySelector('.iconWeather_image')
var selectTemp = document.querySelector('.temp')

var arrDay = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

setInterval(() => {
    var today = new Date();

    var day = today.getDay()
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    
    var hour = today.getHours();
    var minute = today.getMinutes();

    selectTime.innerHTML = `${hour}:${minute}`;
    selectToday.innerHTML = `Ngày ${date} tháng ${month}, năm ${year}`;
    selectTemp.innerHTML = `${weather.temp}°C`

    switch(day) {
        case 0:
            selectDaysOfTheWeek.innerHTML = `${arrDay[0]}`;
            break;
        case 1:
            selectDaysOfTheWeek.innerHTML = `${arrDay[1]}`;
            break;
        case 2:
            selectDaysOfTheWeek.innerHTML = `${arrDay[2]}`;
            break;
        case 3:
            selectDaysOfTheWeek.innerHTML = `${arrDay[3]}`;
            break;
        case 4:
            selectDaysOfTheWeek.innerHTML = `${arrDay[4]}`;
            break;
        case 5:
            selectDaysOfTheWeek.innerHTML = `${arrDay[5]}`;
            break;
        case 6:
            selectDaysOfTheWeek.innerHTML = `${arrDay[6]}`;
            break;
    }

}, 16)


//API - openweathermap.org
const key = '6119700fea7a44ead023cd51337e6566';

let weather = {
    temp: 0,
    icon: '',
    main: '',
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`

    fetch(api)
    .then( function(response){
        let data = response.json();
        console.log(data)
        return data;
    })
    .then( function(data) {
        weather.temp = data.current.temp - 273.15
        weather.icon = data.current.weather[0].icon
        weather.main = data.current.weather[0].main
        console.log(weather)
    })
    .then( function pushWeather() {
        switch(weather.icon) {
            case '01d':
                selectIconWeather_image.src = 'icon/icon01/01d-clearSky.png'
                break;
            case '01n':
                selectIconWeather_image.src = 'icon/icon01/01n-clearSky.png'
                break;
            case "02d":
                selectIconWeather_image.src = 'icon/icon01/02d-fewClouds.png'
                break;
            case "02n":
                selectIconWeather_image.src = 'icon/icon01/02n-fewClouds.png'
                break;
            case "03d":
            case "03n":
                selectIconWeather_image.src = 'icon/icon01/03d_n-scatteredClouds.png'
                break;
            case "04d":
            case "04n":
                selectIconWeather_image.src = 'icon/icon01/04d_n-brokenClouds.png'
                break;
            case "09d":
            case "09n":
                selectIconWeather_image.src = 'icon/icon01/09d_n-showerRain.png'
                break;
            case "10d":
                selectIconWeather_image.src = 'icon/icon01/10d-rain.png'
                break;
            case "10n":
                selectIconWeather_image.src = 'icon/icon01/10n-rain.png'
                break;
            case "11d":
            case "11n":
                selectIconWeather_image.src = 'icon/icon01/11d_n-thunderstorm.png'
                break;        
        }
    })
}
getWeather(20.9780671, 105.79381839999999);

