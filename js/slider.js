const sliderContent = document.querySelector(".slider-content");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

// let settings = {
//   padding: 20,
// };

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

let currentPosition = 0;
let currentPadding = 0;

function moveLeft() {
  currentPosition -= 100;
  currentPadding -= settings.padding;
  ul.style.transform = `translateX(calc(${currentPosition}% + ${currentPadding}px))`;
}

function moveRight() {
  currentPosition += 100;
  currentPadding += settings.padding;
  ul.style.transform = `translateX(calc(${currentPosition}% + ${currentPadding}px))`;
}
