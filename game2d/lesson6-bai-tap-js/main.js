//Bài tập phần String===========================================================
//Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
//- Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function checkStringExist(str, n) {
    return str.includes(n);
}

//Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 

function shortenString(str) {
    return `${str.slice(0, 8)}...`
}

//Bài 3. Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 

function capitalizeString(str) {
    let newStr = [];
    
    for(let i = 0; i < str.length;i++) {
        if (str[i - 1] == ' ' || i == 0){
            newStr.push(str[i].toUpperCase())
        }
        else{
            newStr.push(str[i].toLowerCase())
        }
    }
    return newStr.join('')
}

//Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.

function copy10Str(str = 'code') {
    let newStr = '';

    for(let i = 0; i < 10; i++) {
        newStr += `${str}`
    }
}

//Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString(str) {
    let newStr = str;
    for(let i = 0; i < 9; i++) {
        newStr += `-${str}`
    }
}

//Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatString(str, n) {
    let newStr;
    if (parseInt(n) == n && n > 1) {
        newStr = str;
        for(let i = 0; i < n-1; i++) {
            newStr += `-${str}`
        }
    }
    else{
        console.log(`${n} is not a Integer`)
    }
}

//Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó

function  reverseString(str = 'music') {
    newStr = [];
    for(let i = 0; i < str.length; i++) {
        newStr.unshift(str[i])
    }
    return newStr.join('')
}

//Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc

function compare2Str(str) {
    newStr1 = [];
    newStr2 = []
    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newStr1.unshift(str[i].toLowerCase())
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newStr2.push(str[i].toLowerCase())
        }
    }
    if (newStr1.join('') == newStr2.join('')) {
        return true;
    }
    else{
        return false;
    }
}

//Bài tập phần Array============================================================
//Bài 1. Viết hàm tìm ra số nhỏ nhất trong mảng các số
function minNumber(...arrnumber) {
    let minNb = arrnumber[0];
    for(let i = 0; i < arrnumber.length; i++){
        if(arrnumber[i] < minNb){
            minNb = arrnumber[i];
        }
    }
    return minNb;
}

//Bài 2. Viết hàm tìm ra số lớn thứ nhì trong mảng các số

function max2Number(...arrnumber) {
    let maxNb = arrnumber[0];
    for(let i = 0; i < arrnumber.length; i++){
        if(arrnumber[i] > maxNb){
            maxNb = arrnumber[i];
        }
    }
    let max2Nb = arrnumber[0];
    for(let i = 0; i < arrnumber.length; i++){
        if(arrnumber[i] < maxNb && arrnumber[i] > max2Nb){
            max2Nb = arrnumber[i];
        }
    }
    return max2Nb;
}

//Bài 3. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

function soft(...arrName) {
    arrName = arrName.sort();
    let newArrName = [];
    for(let i = 0; i < arrName.length; i++) {
        newArrName.unshift(arrName[i]);
    }
    return newArrName;
}

//Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function sum5Form0To100() {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        if(i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}

//Bài 5. Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function myFunction(...arrNumber) {
    let newArrNumber = [];
    for(let i = 0; i < arrNumber.length; i++) {
        newArrNumber.push(arrNumber[i] % 2)
    }
    return newArrNumber;
}
//Bài 6. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất

function maxString(...arrString) {
    let max = arrString[0].length;
    let arrMaxString = [];
    for(let i = 0; i < arrString.length; i++){
        if (arrString[i].length > max){
            max = arrString[i].length;
        }
    }
    for(let j = 0; j < arrString.length; j++){
        if (arrString[j].length == max){
            arrMaxString.push(arrString[j]);
        }
    }
    return arrMaxString;
}