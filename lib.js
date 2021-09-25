DocumentType = module;

module.exports = {
    actionTriggered,
    nextSundayStream,
    createStream,
    startStream,
    endStream
}

function actionTriggered(param){
    switch(param['action']){
        case 'create': 
            createStream(param['date']); 
            break;
        case 'start':
            startStream();
            break;
        case 'stop':
            endStream(); 
            break;
        case null: 
            break;
        default:
            console.log('Diese Funktion existiert nicht. Wenn du denkst, dass sie das sollte, sag Josia Scheerle bescheid!')
            break;
    }
}

let running = false;   //Variable to check if a stream is currently on air
let streamDate = '';

//Create a new Stream
function createStream(date){
    checkStatus('create');
    console.log('create');
    //Call necessary functions to schedule a livestream for Sundays at 9:45
    switch (date){
        case 'now': streamDate = new Date(); break;
        case 'sunday': streamDate = nextSundayStream(); break;
        default: streamDate = date; break;
    }
        

    return;
}
//Start the Stream
function startStream(){
    checkStatus('start');
    console.log('start');
    //Call necessary functions to start the next upcoming livestream
    running = true;

        
    return
}
//End the Stream
function endStream(){
    checkStatus('stop');
    console.log('end');
    //Call necessary functions to end the current livestream
       
    running = false;
    return
}

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
        if(action == 'end'){
            console.log('Zur Zeit läuft kein Stream, der beendet werden kann!');
        }
    }
}

//This function checks the current day and time. depending on the current date it creates the date for the next stream on Sunday morning at 9:45
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
