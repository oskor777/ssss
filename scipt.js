// let btn = document.getElementById("pul");

// setTimeout(() => {
//   console.log("This ");
// }, 2000);
// let title = document.createElement("h1");
// title.textContent = "Hello World!";
// document.body.appendChild(title);

// let interval = setInterval(() => {
//   title.textContent = "Hello World!";
// }, 1000);

// btn.onclick = () => {
//   clearInterval(interval);
// };

let qul = document.getElementById("qul");

let day = new Date();
console.log(day);
console.log(day.getDate());
console.log(day.getMonth());
console.log(day.getFullYear());
console.log(day.getHours());
console.log(day.getMinutes());
console.log(day.getSeconds());

setInterval(() => {
  let day = new Date();
  qul.innerHTML = `<div class="hours">${day.getHours()}</div> : <div class="minutes"
  > ${day.getMinutes()} </div>:  <div class="aa" > ${day.getSeconds()}`;
}, 1000);
