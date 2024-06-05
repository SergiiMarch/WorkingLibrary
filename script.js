const refs = {
  outputScrollStandart: document.getElementById("outputScrollStandart"),
  outputScrollThrottled: document.getElementById("outputScrollThrottled"),
};

const eventScrollCounter = {
  standart: 0,
  throttle: 0,
};

// window.addEventListener("scroll", handleScroll);
// window.addEventListener("scroll", _.throttle(handleScrollThrottle, 300));

// function handleScroll() {
//   console.log("kkk");
//   eventScrollCounter.standart += 1;
//   refs.outputScrollStandart.textContent = eventScrollCounter.standart;
// }

// function handleScrollThrottle() {
//   console.log("jjj");
//   eventScrollCounter.throttle += 1;
//   refs.outputScrollThrottled.textContent = eventScrollCounter.throttle;
// }
///////////////////////////////////////Form-email-password
// const formEl = document.getElementById("signForm");

// const classes = {
//   wrong: "wrong",
//   correct: "correct",
// };
// console.dir();
// formEl.addEventListener("input", handleInputForm);

// function handleInputForm({ target }) {
//   const valueLength = target.value.length;
//   if (
//     valueLength < target.dataset.minLength ||
//     valueLength > target.dataset.maxLength
//   ) {
//     target.classList.remove(classes.correct);
//     target.classList.add(classes.wrong);
//   } else {
//     target.classList.remove(classes.wrong);
//     target.classList.add(classes.correct);
//   }
// }
/////////////////////////////////////////////////////
// const itemEl = document.querySelector(".item");
// const listEl = document.querySelector(".list-item");

// listEl.style.color = "yellow";
// listEl.style.backgroundColor = "green";
// itemEl.style.listStyle = "none";

// itemEl.insertAdjacentHTML(
//   "beforeend",
//   `<li>
// <h2>New commit</h2>
// </li class="list-item">`
// );

// itemEl.classList.toggle("list");
// itemEl.classList.toggle("list");
// console.log(itemEl);
/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////
// const addEl = document.querySelector(".js-add");
// const removeEl = document.querySelector(".js-remove");
// const targetEl = document.querySelector(".target-btn");
// console.log(targetEl);

// const hundlerClick = () => {
//   console.log("Click by batton");
// };

// addEl.addEventListener("click", () => {
//   targetEl.addEventListener("click", hundlerClick);
//   console.log("Click by batton2");
// });

// removeEl.addEventListener("click", () => {
//   targetEl.removeEventListener("click", hundlerClick);
//   console.log("Remove");
// });

// const clickEl = (e) => {
//   console.log("event:", e);
//   console.log("event type:", e.type);
//   console.log("event currentTarget:", e.currentTarget);
// };
// addEl.addEventListener("click", clickEl);

// document.addEventListener("keydown", (e) => {
//   console.log("keydown:", e);
//   console.log("event key:", e.key);
//   console.log("event code:", e.code);
// });
// document.addEventListener("keyup", (e) => {
//   console.log("keydown:", e);
// });

const buttonEl = document.querySelector(".js-clear");
const loglist = document.querySelector(".log-list");

let keyPressCounter = 1;

document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
buttonEl.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
  <span class="chip">${keyPressCounter}</span>
  <ul>
  <li><b>Event</b>:${type}</li>
<li><b>Key</b>:${key}</li>
<li><b>Code</b>:${code}</li>
  </ul>

</div>`;

  loglist.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keyPressCounter = 1;
  loglist.innerHTML = "";
}
function incrementKeypressCounter() {
  keyPressCounter += 1;
}
