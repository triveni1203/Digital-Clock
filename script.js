let is24Hour = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";

    if (!is24Hour) {
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent =
        now.toLocaleDateString(undefined, options);
}

function toggleMode() {
    document.body.classList.toggle("light");
}

function toggleFormat() {
    is24Hour = !is24Hour;
}

const colors = ["#00f2ff", "#ff4081", "#4caf50", "#ff9800", "#9c27b0"];
let colorIndex = 0;

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    document.documentElement.style.setProperty('--glow-color', colors[colorIndex]);
}

setInterval(updateClock, 1000);
updateClock();