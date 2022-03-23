function timer(deadLine) {
    let startTimer;

function diffDate() {
    let t = Date.parse(deadLine) - Date.parse( new Date() );
   // if (startTimer <= 0)
    let date = Math.floor( t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t /  (1000 * 60 * 60)) % 24);
    let mins = Math.floor((t / (1000 * 60 )) % 60);
    let secs = Math.floor((t / 1000) % 60);

    return {
        "t" : t,
        "date" : date,
        "hours" : hours,
        "mins" : mins,
        "secs" : secs
    }
}

function getZero(num) {
    if (num >= 0 && num < 10 ) {
        return `0${num}`;
    } else {
        return num;
    }
}
setClock();

function setClock() {
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let timer = diffDate();
    
    days.innerHTML = getZero(timer.date);
    hours.innerHTML = getZero(timer.hours);
    minutes.innerHTML = getZero(timer.mins);
    seconds.innerHTML = getZero(timer.secs);
    if ( timer.t <= 0 ) {
        clearInterval(startTimer);
    }
}

    startTimer = setInterval(setClock, 1000 );
};

timer("2023-01-01 00:00:00")