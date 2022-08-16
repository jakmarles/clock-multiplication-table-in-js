let clock = document.getElementById("clock"); // Variable clock goes to  <h1 id="clock"></h1>
let hexColor = document.getElementById("hexcode"); // Variable haxcolor goes to  <p id="hexcode"></p>

function hexClock() {
  let time = new Date(); // Use new Date() to generate a new Date object containing the current date and time.
  let hours = time.getHours().toString(); // getHours() returns the hour (0 to 23) of a date to the string.
  let minutes = time.getMinutes().toString(); // getMinutes() returns the Minutes (0 to 59) of a date to the string.
  let seconds = time.getSeconds().toString(); // getSeconds() returns the Seconds (0 to 59) of a date to the string.

  if (hours.length < 2) {
    // when the hour will hit 23:59:59 it will be changed to 00:00:00
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    // when the minute reach XX:59:59 it will add +1 to the current hour displayed
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    // When the seconds reach XX:XX:59 it will add +1 to the current minute displayed
    seconds = "0" + seconds;
  }
  let clockStr = hours + ":" + minutes + ":" + seconds; // the clock the user will see on the weppage.
  let hexColorStr = "#" + hours + minutes + seconds; //Thats the current time made into hexcode for example 04:20:00 will be displayed as hexcode #042020

  clock.textContent = clockStr; //display the string
  hexColor.textContent = hexColorStr; //Setting the time to act as hexcolor
  document.body.style.background = hexColorStr; // changes the background color based on the hexcode the current time
}

hexClock(); //Run the function
setInterval(hexClock, 1000); //The interval to change the time set to 1000 ms

// Table
let p1 = document.getElementById("printout");
for (let index = 1; index <= 10; index++) {
  // i = 1 | 10 is equal bigger than 1 by 10 units therefor it will make 10 tr elements
  let row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    // j = 1 | 10 is equal bigger than 1 by 10 units therefor it will make 10 td elements
    let col = document.createElement("td"); // i = 1 | 10 is equal bigger than 1 by 10 units therefor it will make 10 td elements
    col.innerText = j + "*" + index + "=" + index * j; // Variable j = 1~10 * Variable index = 1~10 equal to Variable index * Variable j
    row.append(col); //paste into td element
  }
  p1.append(row); //paste into tr element
}
