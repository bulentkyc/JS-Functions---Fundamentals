console.log('Hello Callbacks');

function greetingAlert(name) {
    alert('Hello ' + name);
}


function greetingLog(name) {
    console.log('Hello ' + name);
}

//greeting('Bulent');

function register(myFirstCallBack) {
    let name = prompt('Please type your name');
    //greeting(name);
    myFirstCallBack(name);
}

//Andreas
register(greetingLog); //Hello Andreas (on console)

//Antonis
register(greetingAlert);//Hello Antonis (on alert)

