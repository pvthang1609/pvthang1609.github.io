const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { Db } = require('mongodb');

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//================================

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/Thang';

var db;


MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    
    console.log('Connection established to', url);
    db = client.db("Thang")

  }
});

//================================

app.get('/', function(req, res) {
    db.collection("techmaster").find().toArray().then(arr => {
        res.render('index', {
            arr : arr
        })
    }).catch(error => {
        console.log(error)
    })
})

app.get('/:id', function(req, res){
    var id = req.params['id'];
    let objectId = require('mongodb').ObjectID;
    db.collection("techmaster").findOne({_id: new objectId(id)}).then(result => {
        res.render('post.ejs', {
            result : result
        })
    }).catch(error => {
        console.log(error)
    })
})

app.post('/newPost', function(req, res) {
    db.collection("techmaster").insertOne(req.body).then(results => {
    }).catch(error => {
        console.log(error)
    })
    res.redirect('/')
})

app.listen(port, function() {
    console.log(`on port ${port}`)
})