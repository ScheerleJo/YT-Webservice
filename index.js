require('dotenv').config();
const port = 8002;
const http = require('http');
const fs = require('fs');
const url = require('url');
const {google} = require('googleapis');
const lib = require('./lib');
//var OAuth2 = google.auth.OAuth2;

var readline = require('readline');

let running = false;   //Variable to check if a stream is currently on air

//create the webserver
const server = http.createServer(function(req, res){


    //set the debug-helper as GUI for the Localhost port
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Error: File not Found');
        } else{
            res.write(data);
        }
        res.end();
    })
    //console.log(req.url);

    //Parse the Querystring of the HTTP-Request into an array
    path = url.parse(req.url, true).query;
    lib.actionTriggered(path['action']);
    
}).listen(port, function(error){

    if(error){
        console.log(`Etwas ist schief gelaufen ${error}`);
    }else{
        console.log(`Server läuft auf Port ${port}`);
    }
});