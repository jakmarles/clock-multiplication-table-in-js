let clock = document.getElementById("clock");
let hexColor = document.getElementById("hexcode");

function hexClock() {
  let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  let clockStr = hours + ":" + minutes + ":" + seconds;
  let hexColorStr = "#" + hours + minutes + seconds;

  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  document.body.style.background = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

let p1 = document.getElementById("printout");
for (let index = 1; index <= 10; index++) {
  let row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    let col = document.createElement("td");
    col.innerText = j + "*" + index + "=" + index * j;
    row.append(col);
  }
  p1.append(row);
}
