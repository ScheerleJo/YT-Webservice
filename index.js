require('dotenv').config();
const express = require('express');
const app = express();
const port = 8002;
const cookieParser = require('cookie-parser')
//const http = require('http');
//const fs = require('fs');
const url = require('url-parse');
const lib = require('./lib');
//const oauth2 = require('./oauth');

let running = false;
//create the webserver
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.json());
app.use(cookieParser());

app.get('/*', (req, res) => {
    res.render('index');
})
app.get('/send', (req, res) =>{
    //Parse the Querystring of the HTTP-Request into an array and send action parameter to function
    //The date parameter in the array is either the value 'now' or 'nextSunday'
    lib.actionTriggered(url(req.url, true).query);
})
app.get('/auth/google', (res, req) => {
    
})

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})