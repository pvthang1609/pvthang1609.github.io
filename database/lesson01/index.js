const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//================================
var arr = [
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Kinh Nghiệm Học Coding Dành Cho Dân Trái Ngành',
        img: 'https://www.cv-library.co.uk/career-advice/wp-content/uploads/2018/06/What-is-it-like-working-in-IT.jpg',
        desc: 'Dành cho những bạn không phải dân IT nhưng vì dòng đời xô đẩy mà đâm đầu vào con đường coding.',
        day: '26-07-2020'
    },
    { 
        heading: 'Kubernetes cho người mới bắt đầu (phần 3): Tạo Pod bằng file YAML',
        img: 'https://techmaster.vn/media/static/6734/bsckujs51cob9t3q7mi0',
        desc: 'Hướng dẫn tạo Pod thông qua file YAML',
        day: '29-02-2020'
    },
    { 
        heading: 'React Native vs Flutter — Đâu là lựa chọn phù hợp với bạn?',
        img: 'https://techmaster.vn/media/static/bqlv4cn0k7qsf98mcffg/bsdgst451cob9t3q7mvg',
        desc: 'Flutter và React Native là hai framework chính đang cạnh tranh để chứng minh giá trị của chúng và cũng là các framework chính định hình tương lai phát triển của các ứng dụng  cross-platform',
        day: '23-07-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    },
    { 
        heading: 'Harvard và USC nói với sinh viên quốc tế năm đầu hãy ở nhà vậy du học sinh học ở đâu bây giờ?',
        img: 'https://specials-images.forbesimg.com/imageserve/5edebf2eb1784e0006de6f70/960x0.jpg?fit=scale',
        desc: 'Hai trường đại học tư thục đã nói với sinh viên nước ngoài dự định bắt đầu năm học đầu tiên rằng họ có thể sẽ bị hạn chế vào Hoa Kỳ vào học kỳ mùa thu.',
        day: '20-02-2020'
    }
];
app.get('/', function(req, res) {
    res.render('index', {
        arr : arr
    })
})

app.post('/newPost', function(req, res) {
    let heading = req.body.heading
    let img = req.body.img
    let desc = req.body.desc
    let day = req.body.day

    arr.push({heading: heading, img: img, desc: desc, day: day})
    res.redirect('/')
})

app.listen(port, function() {
    console.log(`on port ${port}`)
})