var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var cons = require('consolidate');

var app = express();

app.engine('html', cons.swig);

app.set('view engine', 'html');

app.set('views', path.join(__dirname, '/'));

// remove dir name to server anyfile
//app.use(express.static(path.join(__dirname, '/views/lib')));
app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',function(req,res){
    res.render('index');
});

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});