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
const formEl = document.getElementById("signForm");

const classes = {
  wrong: "wrong",
  correct: "correct",
};
console.dir();
formEl.addEventListener("input", handleInputForm);

function handleInputForm({ target }) {
  const valueLength = target.value.length;
  if (
    valueLength < target.dataset.minLength ||
    valueLength > target.dataset.maxLength
  ) {
    target.classList.remove(classes.correct);
    target.classList.add(classes.wrong);
  } else {
    target.classList.remove(classes.wrong);
    target.classList.add(classes.correct);
  }
}
