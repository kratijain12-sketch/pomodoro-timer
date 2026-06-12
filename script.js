let timer;
let totalTime = 0;
let timeLeft = 0;
let isRunning = false;
let sessions = 0;

const timerDisplay = document.getElementById("timer");
const progress = document.getElementById("progress");
const sessionsDisplay = document.getElementById("sessions");

const circumference = 2 * Math.PI * 130;

function setCustomTime() {
  let minutes = parseInt(document.getElementById("customMinutes").value);

  if (!minutes || minutes <= 0) {
    alert("Enter valid minutes");
    return;
  }

  totalTime = minutes * 60;
  timeLeft = totalTime;
  updateTimer();
}

function updateTimer() {
  let mins = Math.floor(timeLeft / 60);
  let secs = timeLeft % 60;

  timerDisplay.innerText =
    `${mins}:${secs < 10 ? "0" : ""}${secs}`;

  let progressValue = circumference - (timeLeft / totalTime) * circumference;
  progress.style.strokeDashoffset = progressValue;
}

function startTimer() {
  if (isRunning || timeLeft <= 0) return;

  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timer);
      isRunning = false;
      sessions++;
      sessionsDisplay.innerText = sessions;
      alert("Session Complete ✨");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = totalTime;
  updateTimer();
}
