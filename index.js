const PORT = 8002;
const lib = require('./lib');
const cors = require('cors');
const express = require('express');
const app = express();
//const oauth2 = require('./oauth');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST"
}

let running = false;

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/views'));


app.get('/', (req, res) => {
    res.sendFile(lib.returnPath());
});
app.get('/send', (req, res) =>{
    //Parse the Querystring of the HTTP-Request into an array and send action parameter to function
    //The date parameter in the array is either the value 'now', 'nextSunday' or a TimeString
    lib.actionTriggered(req.url);
    res.send('Request Recieved!');
});
app.get('/auth/google', (res, req) => {
    
});
app.get('/kill', (req, res) => {
    process.exit();
});
//create the webserver
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});