//select
var selectToday = document.querySelector('.today');
var selectTime = document.querySelector('.time');
var selectDaysOfTheWeek = document.querySelector('.daysOfTheWeek');
var selectIconWeather_image = document.querySelector('.iconWeather_image');
var selectTemp = document.querySelector('.temp');
var selectWeatherOnTime_time1 = document.querySelector('.weatherOnTime_time1');
var selectWeatherOnTime_time2 = document.querySelector('.weatherOnTime_time2');
var selectWeatherOnTime_iconWeather_image0 = document.querySelector('.weatherOnTime_iconWeather_image0')
var selectWeatherOnTime_iconWeather_image1 = document.querySelector('.weatherOnTime_iconWeather_image1')
var selectWeatherOnTime_iconWeather_image2 = document.querySelector('.weatherOnTime_iconWeather_image2')
var selectWeatherOnTime_temp0 = document.querySelector('.weatherOnTime_temp0')
var selectWeatherOnTime_temp1 = document.querySelector('.weatherOnTime_temp1')
var selectWeatherOnTime_temp2 = document.querySelector('.weatherOnTime_temp2')
var selectLocation = document.querySelector('.location')
var selectContainer = document.querySelector('.container')

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
    selectToday.innerHTML = `Ngày ${date} tháng ${month} năm ${year}`;

    selectTemp.innerHTML = `${weather.temp}°C`;

    selectWeatherOnTime_temp0.innerHTML = `${weather0.temp}°C`;
    selectWeatherOnTime_temp1.innerHTML = `${weather1.temp}°C`;
    selectWeatherOnTime_temp2.innerHTML = `${weather2.temp}°C`

    selectWeatherOnTime_time1.innerHTML = `${arrDay[day + 2]}`
    selectWeatherOnTime_time2.innerHTML = `${arrDay[day + 3]}`

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
    icon: ''
}
let weather0 = {
    temp: 0,
    icon: ''
}
let weather1 = {
    temp: 0,
    icon: ''
}
let weather2 = {
    temp: 0,
    icon: ''
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`
    let api0 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

    
    // lấy thời tiết, dự báo 3 ngày tới bằng api
    fetch(api)
    .then( function(response){
        let data = response.json();
        console.log(data)
        return data;
        
    })
    .then( function(data) {
        let today = new Date();
        let day = today.getDay()

        weather.temp = data.current.temp - 273.15
        weather.icon = data.current.weather[0].icon

        weather0.temp = Math.round(data.daily[day + 1].temp.day - 273.115)
        weather0.icon = data.daily[day + 1].weather[0].icon

        weather1.temp = Math.round(data.daily[day + 2].temp.day - 273.115)
        weather1.icon = data.daily[day + 2].weather[0].icon

        weather2.temp = Math.round(data.daily[day + 3].temp.day - 273.115)
        weather2.icon = data.daily[day + 3].weather[0].icon
    })
    .then( function pushWeather() {
        switch(weather.icon) {
            case '01d':
                selectIconWeather_image.src = 'icon/icon01/01d-clearSky.png';
                selectContainer.style.background = 'linear-gradient(45deg, rgba(239,164,132,1) 0%, rgba(246,204,119,1) 100%)';
                break;
            case '01n':
                selectIconWeather_image.src = 'icon/icon01/01n-clearSky.png';
                selectContainer.style.background = 'linear-gradient(45deg, rgba(239,164,132,1) 0%, rgba(246,204,119,1) 100%)';
                break;
            case "02d":
                selectIconWeather_image.src = 'icon/icon01/02d-fewClouds.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(239,164,132,1) 0%, rgba(246,204,119,1) 100%)';
                break;
            case "02n":
                selectIconWeather_image.src = 'icon/icon01/02n-fewClouds.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(239,164,132,1) 0%, rgba(246,204,119,1) 100%)';
                break;
            case "03d":
            case "03n":
                selectIconWeather_image.src = 'icon/icon01/03d_n-scatteredClouds.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(71,174,207,1) 0%, rgba(90,181,209,1) 100%)';
                break;
            case "04d":
            case "04n":
                selectIconWeather_image.src = 'icon/icon01/04d_n-brokenClouds.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(71,174,207,1) 0%, rgba(90,181,209,1) 100%)';
                break;
            case "09d":
            case "09n":
                selectIconWeather_image.src = 'icon/icon01/09d_n-showerRain.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break;
            case "10d":
                selectIconWeather_image.src = 'icon/icon01/10d-rain.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break;
            case "10n":
                selectIconWeather_image.src = 'icon/icon01/10n-rain.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break;
            case "11d":
            case "11n":
                selectIconWeather_image.src = 'icon/icon01/11d_n-thunderstorm.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break;  
            case "50d":
                selectIconWeather_image.src = 'icon/icon01/50d-mist.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break; 
            case "50n":
                selectIconWeather_image.src = 'icon/icon01/50n-mist.png'
                selectContainer.style.background = 'linear-gradient(45deg, rgba(70,68,118,1) 0%, rgba(47,79,115,1) 100%)';
                break; 
        }
        switch(weather0.icon) {
            case '01d':
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/01d-clearSky.png'
                break;
            case '01n':
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/01n-clearSky.png'
                break;
            case "02d":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/02d-fewClouds.png'
                break;
            case "02n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/02n-fewClouds.png'
                break;
            case "03d":
            case "03n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/03d_n-scatteredClouds.png'
                break;
            case "04d":
            case "04n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/04d_n-brokenClouds.png'
                break;
            case "09d":
            case "09n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/09d_n-showerRain.png'
                break;
            case "10d":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/10d-rain.png'
                break;
            case "10n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/10n-rain.png'
                break;
            case "11d":
            case "11n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/11d_n-thunderstorm.png'
                break; 
            case "50d":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/50d-mist.png'
                break; 
            case "50n":
                selectWeatherOnTime_iconWeather_image0.src = 'icon/icon01/50n-mist.png'
                break;        
        }
        switch(weather1.icon) {
            case '01d':
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/01d-clearSky.png'
                break;
            case '01n':
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/01n-clearSky.png'
                break;
            case "02d":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/02d-fewClouds.png'
                break;
            case "02n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/02n-fewClouds.png'
                break;
            case "03d":
            case "03n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/03d_n-scatteredClouds.png'
                break;
            case "04d":
            case "04n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/04d_n-brokenClouds.png'
                break;
            case "09d":
            case "09n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/09d_n-showerRain.png'
                break;
            case "10d":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/10d-rain.png'
                break;
            case "10n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/10n-rain.png'
                break;
            case "11d":
            case "11n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/11d_n-thunderstorm.png'
                break;
            case "50d":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/50d-mist.png'
                break; 
            case "50n":
                selectWeatherOnTime_iconWeather_image1.src = 'icon/icon01/50n-mist.png'
                break;        
        }
        switch(weather2.icon) {
            case '01d':
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/01d-clearSky.png'
                break;
            case '01n':
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/01n-clearSky.png'
                break;
            case "02d":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/02d-fewClouds.png'
                break;
            case "02n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/02n-fewClouds.png'
                break;
            case "03d":
            case "03n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/03d_n-scatteredClouds.png'
                break;
            case "04d":
            case "04n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/04d_n-brokenClouds.png'
                break;
            case "09d":
            case "09n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/09d_n-showerRain.png'
                break;
            case "10d":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/10d-rain.png'
                break;
            case "10n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/10n-rain.png'
                break;
            case "11d":
            case "11n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/11d_n-thunderstorm.png'
                break;
            case "50d":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/50d-mist.png'
                break; 
            case "50n":
                selectWeatherOnTime_iconWeather_image2.src = 'icon/icon01/50n-mist.png'
                break;        
        }
    })

    //lấy Tên vị trí bằng api0
    fetch(api0)
    .then( function(response){
        let data0 = response.json();
        return data0;
    })
    .then( function(data) {
        selectLocation.innerHTML = `${data.name}`;
    })



}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert('Định vị địa lý không được hỗ trợ bởi trình duyệt này.')
    }
}
function showPosition(position) {
    getWeather(position.coords.latitude, position.coords.longitude);
}
getLocation();


