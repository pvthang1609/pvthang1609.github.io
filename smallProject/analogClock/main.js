// 360độ = 60phút hoặc 60giây       =>  1phút(giây) = 360/60    =   6độ
// 360độ = 12giờ                    =>  1 giờ = 360/12          =   30độ
// 60phút ứng với 30độ              =>  1 phút ứng với 30độ / 60 = 0.5độ

var selectHour = document.querySelector('.hour')
var selectMinute = document.querySelector('.minute')
var selectSec = document.querySelector('.sec')

setInterval( () => {
    var date = new Date();
    
    var hour = (date.getHours() * 30) + (date.getMinutes() * 0.5) ;         //ví dụ 1h30p => kim giờ sẽ ở bị trí (1 * 30độ) + (30 * 0.5độ) = 45độ
    var minute = date.getMinutes() * 6;
    var sec = date.getSeconds() * 6;

    var hourDeg = `${hour}deg`;
    var minuteDeg = `${minute}deg`;
    var secDeg = `${sec}deg`;

    selectHour.style.transform =  `translate(-50%, -50%) rotateZ(${hourDeg})`;
    selectMinute.style.transform =  `translate(-50%, -50%) rotateZ(${minuteDeg})`;
    selectSec.style.transform =  `translate(-50%, -50%) rotateZ(${secDeg})`;
}, 1000)