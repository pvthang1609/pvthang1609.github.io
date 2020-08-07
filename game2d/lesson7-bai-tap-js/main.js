//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function v(r) {
    return (3/4)*Math.PI*(r**3)
}
//Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.

function sum(a, b) {
    if (a < b && Number.isInteger(a) && Number.isInteger(b)) {
        let sum = 0;
        for (let i = a + 1; i < b; i++) {
            sum += i;
        }
        return sum;
    }
}

//Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. 
// số nguyên tố là số nguyên dương > 1 và chỉ chia hết cho 1 và chính nó

function soNguyeTo(n){
    if (n > 1 && Number.isInteger(n)) {
        if ( n != 2) {
            for(let i = 2; i < n; i++){
                if(n % i == 0) {
                    return false;
                }
            }
            return true; 
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

//Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
//dùng hàm xét số nguyên tố ở trên tạo biến sum, tạo 1 vòng lặp đến tham số đó, số nào là số nguyên tố += với sum

function tongSoNguyenTo(value) {
    let sum = 0;
    for (let i = 0; i <= value; i++) {
        if (soNguyeTo(i)) {
            sum += i
        }
    }
    return sum;
}

//Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
//tạo vòng lặp for từ i = 1 đến số đó, nếu số đó chia hết cho i thì i là ước của số đó, tạo 1 hàm tính tổng các ước

function tongUoc(n) {
    if (n > 0 && Number.isInteger(n)) {
        let sum = 0;
        for(let i = 1; i <= n; i++) {
            if (n % i == 0){
                sum += i;
            }
        }
        return sum;
    }
}

//1. Viết hàm để lấy danh sách các key của object
//dùng Object.keys()

function keyObj(object) {
    let a = Object.keys(object);     // trả về 1 mảng dùng for push phần tử của mảng vào chuỗi
    let str = '';
    for (let i = 0; i < a.length; i++) {
        str += `${a[i]} `
    }
    return str;
}

//2. Viết hàm để lấy danh sách các value của object
//Object.values()

function keyObj(object) {
    let a = Object.values(object);     // trả về 1 mảng dùng for push phần tử của mảng vào chuỗi
    let str = '';
    for (let i = 0; i < a.length; i++) {
        str += `${a[i]} `
    }
    return str;
}

//3. Viết hàm kiểm tra key có tồn tại trong Object không
// dùng hasOwnProperty()

function checkKey(object, key) {
    return object.hasOwnProperty(key);
}

//4. Viết hàm kiểm tra Object có độ dài bao nhiêu

function checkLength(object) {
    let a = Object.keys(object);     // trả về 1 mảng dùng for push phần tử của mảng vào chuỗi
    return a.length;
}

//5. Cho mảng các user mỗi object có cấu trúc như sau. Viết function lấy ra những user có tuổi > 25 và isStatus = true

function myfunction(user) {
    user.forEach(element => {
        if(element.age > 25 && element.isStatus == true) {
            console.log(element)
        }
    });
}

//6. Tương tự bài 5, Viết function sắp xếp các user theo tuổi tăng dần

function compareNumbers(a, b) {
    return a.age - b.age;
  }

user.sort(compareNumbers);