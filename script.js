const refs = {
  outputScrollStandart: document.getElementById("outputScrollStandart"),
  outputScrollThrottled: document.getElementById("outputScrollThrottled"),
};

const eventScrollCounter = {
  standart: 0,
  throttle: 0,
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", _.throttle(handleScrollThrottle, 300));

function handleScroll() {
  console.log("kkk");
  eventScrollCounter.standart += 1;
  refs.outputScrollStandart.textContent = eventScrollCounter.standart;
}

function handleScrollThrottle() {
  console.log("jjj");
  eventScrollCounter.throttle += 1;
  refs.outputScrollThrottled.textContent = eventScrollCounter.throttle;
}
