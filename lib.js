const url_parse = require('url-parse');
const path = require('path');

DocumentType = module;

module.exports = {
    actionTriggered,
    nextSundayStream,
    createStream,
    startStream,
    endStream,
    returnPath
}
/**
 * @param {object} url requested action and date
 */
function actionTriggered(url){
    switch(url_parse(url, true).query.action){
        case 'createStream':
            createStream(url_parse(url, true).query.date);
            break;
        case 'startStream':
            startStream();
            break;
        case 'linkStream':
            break;
        case 'stopStream':
            endStream();
            break;
        case null:
            break;
        default: console.log('Diese Funktion existiert nicht. Wenn du denkst, dass sie das sollte, sag Josia Scheerle bescheid!'); break;
    }
}

let running = false;
let streamDate = '';

function createStream(date){
    checkStatus('create');
    console.log('create');
    //Call necessary functions to schedule a livestream
    switch (date){
        case 'now': streamDate = new Date(); break;
        case 'sunday': streamDate = nextSundayStream(); break;
        default: streamDate = date; break;
    }
}

function startStream(){
    checkStatus('start');
    console.log('start');
    //Call necessary functions to start the next upcoming livestream
    running = true;
}

function endStream(){
    checkStatus('stop');
    console.log('end');
    //Call necessary functions to end the current livestream
    running = false;
}

/**
 * @param  {string} action Check if a stream is currently running
 * !Doesn't check stream Status from the YouTube API at the Moment
 * TODO: Implement checking trough the API
 */
function checkStatus(action){
    if(running == true){
        switch(action){
            case 'create': addon = 'um einen neuen Stream zu planen';
                break;
            case 'start':  addon = 'um den nächsten Stream zu starten';
                break;
        }
        console.log(`Es läuft bereits ein Stream. Beende diesen ${addon}!`);
    }else{
        if(action == 'end'){ console.log('Zur Zeit läuft kein Stream, der beendet werden kann!'); }
    }
}

function returnPath(){
    return path.join(__dirname + '/views/index.html');
}
/**
 * Generate a DateString for upcoming sunday at 09:45
 */
function nextSundayStream(){
    var add;
    var currentDate = new Date();
    var nextDate = new Date();

    if(currentDate.getDay() == 0){
        if(currentDate.getHours() + '' + currentDate.getMinutes() < 945){
            add = 0
            nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), (currentDate.getDate() + add), 09, 45, 00);
        }else{
            add = 7
            nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), (currentDate.getDate() + add), 09, 45, 00);
        }
    }else{
        add = 7 - currentDate.getDay();
        nextDate = new Date(currentDate.getFullYear(), (currentDate.getMonth()), (currentDate.getDate() + add), 09, 45, 00);
    }
    return nextDate;
}
/**
 * @param  {number} value List of all possible Names for Sundays
 */
function sundayName(value){
    const nameArray ={
        1: '1. Advent',
        2: '2. Advent',
        3: '3. Advent',
        4: '4. Advent',
        5: 'Heiligabend',
        6: 'Weihnachten',
        7: '1. Sonntag nach Weihnachten',
        8: 'Altjahrabend',
        9: 'Neujahr',
        10: '2. Sonntag nach Weihnachten',
        11: 'Epiphanias',
        12: '1. Sonntag nach Epiphanias',
        13: '2. Sonntag nach Epiphanias',
        14: '3. Sonntag nach Epiphanias',
        15: '4. Sonntag nach Epiphanias',
        16: 'Sexagesimä',
        17: 'Estomihi',
        18: 'Aschermittwoch',
        19: 'Invocavit',
        20: 'Reminiszere'
    }
}
