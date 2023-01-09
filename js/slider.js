const sliderContent = document.querySelector(".slider-content");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

let currentPosition = 0;
const countSlides = sliderContent.children.length;

function moveLeft() {
  if (currentPosition > -((countSlides - 1) * 100)) {
    currentPosition -= 100;
  }
  sliderContent.style.transform = `translateX(${currentPosition}%)`;
}

function moveRight() {
  if (currentPosition < 0) {
    currentPosition += 100;
  }
  sliderContent.style.transform = `translateX(${currentPosition}%)`;
}

setInterval(autoScroll, 3000);

// function autoScroll() {
//   if (!(currentPosition > -((countSlides - 1) * 100))) {
//     currentPosition = 0;
//     sliderContent.style.transform = `translateX(${currentPosition}%)`;
//     return;
//   }

//   moveLeft();
// }
