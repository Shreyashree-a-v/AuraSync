let currentTemp = 22; // default temperature
const minTemp = 16;
const maxTemp = 30;

const tempDisplay = document.getElementById("temp-display");
const increaseBtn = document.getElementById("temp-increase");
const decreaseBtn = document.getElementById("temp-decrease");

function updateTemperature() {
tempDisplay.innerHTML =
    '<i class="fas fa-temperature-high"></i> ' + currentTemp + '°C';
}

increaseBtn.addEventListener("click", () => {
if (currentTemp < maxTemp) {
    currentTemp++;
    updateTemperature();
}
});

decreaseBtn.addEventListener("click", () => {
if (currentTemp > minTemp) {
    currentTemp--;
    updateTemperature();
}
});

const songs = [
"Dancing With My WiFi Router 💃📶",
"Oops I Left the Fridge Open 🧊😬",
"Smart Toaster Blues 🍞🎸",
"Alexa, Stop Judging Me 🤖😒",
"I Forgot My Password Again 🔐😭",
"Microwave Symphony No. 3 🍿🎶",
"This Beat Is Still Buffering ⏳🎧"
];

let currentSong = "";
let isPlaying = false;

const songNameEl = document.getElementById("song-name");
const songDisplay = document.getElementById("song-display");

const playBtn = document.getElementById("music-play");
const pauseBtn = document.getElementById("music-pause");
const stopBtn = document.getElementById("music-stop");
const nextBtn = document.getElementById("music-next");

function getRandomSong() {
let newSong;
do {
    newSong = songs[Math.floor(Math.random() * songs.length)];
} while (newSong === currentSong);

currentSong = newSong;
return newSong;
}

playBtn.addEventListener("click", () => {
if (!isPlaying) {
    songNameEl.textContent = getRandomSong();
    isPlaying = true;
    songDisplay.classList.remove("paused");
}
});

pauseBtn.addEventListener("click", () => {
if (isPlaying) {
    songDisplay.classList.add("paused");
}
});

stopBtn.addEventListener("click", () => {
isPlaying = false;
songNameEl.textContent = "No song playing";
songDisplay.classList.add("paused");
});

nextBtn.addEventListener("click", () => {
if (isPlaying) {
    songNameEl.textContent = getRandomSong();
    songDisplay.classList.remove("paused");
}
});