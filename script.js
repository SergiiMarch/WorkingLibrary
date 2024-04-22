const refs = {
  outputScrollStandart: document.getElementById("outputScrollStandart"),
  outputScrollThrottled: document.getElementById("outputScrollThrottled"),
};

const eventScrollCounter = {
  standart: 0,
  throttled: 0,
};

document.addEventListener("scroll", function (e) {
  eventScrollCounter.standart += 1;
  refs.outputScrollStandart.textContent = eventScrollCounter.standart;
});
