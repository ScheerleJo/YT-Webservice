DocumentType = module;

module.exports = {
    actionTriggered,
    nextSundayStream,
    createStream,
    startStream,
    endStream
}

function actionTriggered(method){
    switch(method){
        case 'create': 
            createStream(); 
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

//const stream is a Object containing all main Methods for each action
    //Create a new Stream
function createStream(){
        checkStatus('create')
        console.log('create');
        //Call necessary functions to schedule a livestream for Sundays at 9:45

        return;
    }
    //Start the Stream
function startStream(){
        checkStatus('start')
        console.log('start');
        //Call necessary functions to start the next upcoming livestream


        running = true;
        return
    }
    //End the Stream
function endStream(){
        checkStatus('end')
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
        console.log('Es läuft bereits ein Stream. Beende diesen um den nächsten zu starten');
    }else{
        if(action == 'end'){
            console.log('Zur Zeit läuft kein Stream, der beendet werden kann ' + addon);
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
