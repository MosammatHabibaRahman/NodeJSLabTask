var express = require('express');
var bodyParser = require('body-parser');
var login = require('./controllers/login');
var app = express();

app.set('view engine','ejs');

app.use(bodyParser());
app.use('/login',login);

app.get('/', (req,res)=>{
    res.send("This is the index page!");
});

app.listen(3000,()=>{
    console.log('Express http server started at...3000');
});