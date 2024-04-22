const refs = {
  outputScrollStandart: document.getElementById("outputScrollStandart"),
  outputScrollThrottled: document.getElementById("outputScrollThrottled"),
};

const eventScrollCounter = {
  standart: 0,
  throttled: 0,
};

function handleScroll() {
  console.log("kkk");
  eventScrollCounter.standart += 1;
  refs.outputScrollStandart.textContent = eventScrollCounter.standart;
}

function handleScrollThrottle() {
  console.log("jjj");
  eventScrollCounter.throttled += 1;
  refs.outputScrollThrottled.textContent = eventScrollCounter.throttled;
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", _.throttle(handleScrollThrottle, 300));
