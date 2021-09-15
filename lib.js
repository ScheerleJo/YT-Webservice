DocumentType = module;

export function actionTriggered(method){
    switch(method){
        case 'create': 
            stream.create(); 
            break;
        case 'start':
            stream.start();
            break;
        case 'stop':
            stream.end(); 
            break;
        case null: 
            break;
        default:
            console.log('Diese Funktion existiert nicht. Wenn du denkst, dass sie das sollte, sag Josia Scheerle bescheid!')
            break;
    }
}
//const stream is a Object containing all main Methods for each action
const stream = {
    //Create a new Stream
    create(){
        if(running == true){
            console.log("Zur Zeit läuft ein Stream. Dieser muss erst beendet werden bevor ein neuer Stream geplant werden kann.");
            return;
        }
        console.log('create');
        //Call necessary functions to schedule a livestream for Sundays at 9:45


    },
    //Start the Stream
    start(){
        if(running == true){
            console.log("Es läuft bereits ein Stream. Beende diesen um den nächsten zu starten");
            return;
        }
        console.log('start');
        //Call necessary functions to start the next upcoming livestream


        running = true;
    },
    //End the Stream
    end(){
        if(running == false){
            console.log("Zur Zeit läuft kein Stream, der beendet werden kann");
            return;
        }
        console.log('end');
        //Call necessary functions to end the current livestream

       
        running = false;
    }

}

//This function checks the current day and time. depending on the current date it creates the date for the next stream on Sunday morning at 9:45
export function nextSundayStream(){
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


module.exports = {
    actionTriggered,
}