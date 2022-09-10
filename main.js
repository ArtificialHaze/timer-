const newYear = "1 Jan 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const count = () => {
  const newYDate = new Date(newYear);
  const currDate = new Date();
  const secs = (newYDate - currDate) / 1000;

  const days = Math.floor(secs / 3600 / 24);
  const hours = Math.floor(secs / 3600) % 24;
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = Math.floor(secs) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = timeFormatter(hours);
  minutesEl.innerHTML = timeFormatter(minutes);
  secondsEl.innerHTML = timeFormatter(seconds);
};

const timeFormatter = (time) => {
  return time < 10 ? `0${time}` : time;
};

count();

setInterval(count, 1000);
