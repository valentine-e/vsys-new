// const sliderContent = document.querySelector(".slider-content");
// const leftBtn = document.querySelector("#left");
// const rightBtn = document.querySelector("#right");

// leftBtn.addEventListener("click", moveLeft);
// rightBtn.addEventListener("click", moveRight);

// let currentPosition = 0;
// const countSlides = sliderContent.children.length;

// function moveLeft() {
//   if (currentPosition > -((countSlides - 1) * 100)) {
//     currentPosition -= 100;
//   }
//   sliderContent.style.transform = `translateX(${currentPosition}%)`;
// }

// function moveRight() {
//   if (currentPosition < 0) {
//     currentPosition += 100;
//   }
//   sliderContent.style.transform = `translateX(${currentPosition}%)`;
// }

// setInterval(autoScroll, 3000);

// function autoScroll() {
//   if (!(currentPosition > -((countSlides - 1) * 100))) {
//     currentPosition = 0;
//     sliderContent.style.transform = `translateX(${currentPosition}%)`;
//     return;
//   }

//   moveLeft();
// }

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
// });

new Splide(".splide", {
  type: "loop",
  arrows: false,
  // autoplay: true,
  // interval: 3000,
  pauseOnFocus: true,
  pauseOnHover: true,
}).mount();
