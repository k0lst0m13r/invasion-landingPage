// Get the new year 
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date(`January 01 ${currentYear + 1} 00:00:00`);
};

// update the year element
//const year = document.querySelector('.year');
//year.innerHTML = getNewYear().getFullYear();

// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');


const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer" style="display: inline-block" >
                <h2 class="days" style="display: inline-block">${format(time.days)}</h2>
                <span style="display: block"><small>Days</small></span>
            </div>
            <div class="timer" style="display: inline-block" >
                <h2 class="hours" style="display: inline-block">${format(time.hours)}</h2>
                <span style="display: block"><small>Hours</small></span>
            </div>
            <div class="timer"style="display: inline-block">
                <h2 class="minutes" style="display: inline-block">${format(time.minutes)}</h2>
                <span style="display: block"><small>Minutes</small></span>
            </div>
            <div class="timer" style="display: inline-block">
                <h2 class="seconds" style="display: inline-block">${format(time.seconds)}</h2>
                <span style="display: block"><small>Seconds</small></span>
            </div>
        </div>
        `;
};


const showMessage = () => {
    message.innerHTML = `It's the End of F#ck1ng World!`;
    app.innerHTML = '';
    heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
};

const complete = () => {
    showMessage();

    // restart the countdown after showing the 
    // greeting message for a day ()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getNewYear());
    }, 1000 * 60 * 60 * 24);
};

const countdownTimer = new CountDown(
    getNewYear(),
    render,
    complete
);