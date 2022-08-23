'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const p = document.createElement("p");
const div = document.getElementById("time");
div.appendChild(p);


function addCurrentTime() {
  const currentTime = new Date();
  const hour = String(currentTime.getHours()).padStart(2, '0');
  const minute = String(currentTime.getMinutes()).padStart(2, '0');
  const second = String(currentTime.getSeconds()).padStart(2, '0');
  p.textContent = `Current time is ${hour}: ${minute}: ${second}`;
  console.log(p.textContent);
}

window.onload = () => {
  setInterval(addCurrentTime, 1000);
  addCurrentTime();
}