const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let database = 
    [
        {
            "name": "birds",
            "location": "./sounds/birds_short.mp3",
            "background": "#82A284",
            "button": "#82A284",
            "buttonShadow": "20px 20px 60px #6f8a70, -20px -20px 60px #96ba98",
            "buttonShadowPressed": "inset 20px 20px 60px #6f8a70, inset -20px -20px 60px #96ba98"
        },
        {
            "name": "rain",
            "location": "./sounds/rain_short.mp3",
            "background": "#73b8dd",
            "button": "#73b8dd",
            "buttonShadow": "20px 20px 60px #629cbc, -20px -20px 60px #84d4fe",
            "buttonShadowPressed": "inset 20px 20px 60px #629cbc, inset -20px -20px 60px #84d4fe"
        },
        {
            "name": "coffee",
            "location": "./sounds/coffee_short.mp3",
            "background": "#AD8B73",
            "button": "#AD8B73",
            "buttonShadow": "20px 20px 60px #937662, -20px -20px 60px #c7a084",
            "buttonShadowPressed": "inset 20px 20px 60px #937662, inset -20px -20px 60px #c7a084"
        }
    ];

let i = 0;
let playing = false;
let audio = new Audio(database[i].location);
audio.volume = (document.getElementById("volumeRange").value / 100);

function setVolume() {
    audio.volume = document.getElementById("volumeRange").value / 100;
}

function play() {
    if (playing == false) {
        playButton.style.boxShadow = database[i].buttonShadowPressed;
        playing = true;
        document.title = database[i].name + " | keep calm..."
        document.getElementById("head").innerHTML = "keep calm..."
        audio.play();
        audio.ontimeupdate = function (i) {
            if ((this.currentTime / this.duration) > 0.9) {
                this.currentTime = 0;
                this.play();
            }
        };
    } else {
        stop();
    }
}

function stop() {
    playButton.style.boxShadow = database[i].buttonShadow;
    playing = false;
    document.title = "keep calm..."
    audio.pause();
}

playButton.addEventListener('click', play);

function changeSound(){
    document.getElementById('play').click();
    stop();
    audio = new Audio(database[i].location);
    document.getElementById("head").innerHTML = database[i].name;
    document.body.style.background = database[i].background;
    playButton.style.background = database[i].button;
    playButton.style.boxShadow = database[i].buttonShadow;
}

let arr = Object.keys(database);
function previous() {
    if (i == 0) {
        i = arr.length - 1;
    } else {
        i = i - 1;
    }
    changeSound();
}

function next() {
    if (i == arr.length - 1) {
        i = 0;
    } else {
        i = i + 1;
    }
    changeSound();  
}

previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);




