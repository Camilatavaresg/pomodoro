let minutes = 25;
let seconds = 00;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const pomodoroS = document.getElementById('pomodoro');
const shortS = document.getElementById('short');
const longS = document.getElementById('long');
const buttonsI = document.querySelectorAll('.buttonsI')


let currentInterval = undefined;

// style change when top buttons pressed
function stylesP(color, buttons) {
     buttonsI.forEach(element => {
          element.style.background = 'rgba(160, 152, 152, 0.4)';
          element.removeAttribute('data','active')
     });
     document.body.style.background = color;
     buttons.style.background = 'rgb(73, 70, 70)';
     buttons.setAttribute('data','active');
}

function pomodoro() {
     pomodoroS.setAttribute('data', 'active');
     stylesP('rgb(219, 91, 91)', pomodoroS);
     reset();
}

function short() {
     stylesP('rgb(84, 134, 122)', shortS);
     reset();
}

function long() {
     stylesP('rgb(82, 82, 201)', longS);
     reset();
}

//counter settings

function updateEl() {
     minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
     secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function start() {
     if (currentInterval) return
     currentInterval = setInterval(() => {
          if (!seconds) {
               if (!minutes) {
                    clearInterval(currentInterval)
                    alert('time is up!')
               } else {
                    seconds = 59;
                    --minutes}
          } else {
               --seconds
          }
          updateEl()
     }, 1000)
}

function pause() {
     breakInterval();
}

function breakInterval() {
     clearInterval(currentInterval);
     currentInterval = undefined;
}

function reset() {
     breakInterval();
     seconds = 0;
     if (pomodoroS.hasAttribute('data', 'active')) {
          minutes = 25;
     } else if (shortS.hasAttribute('data', 'active')){
          minutes = 5;
     } else {
          minutes = 15;
     }
     updateEl();
}