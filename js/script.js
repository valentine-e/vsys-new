const accordionButtons = document.querySelectorAll(".accordion__btn");
accordionButtons.forEach((e) => {
  e.onclick = () => {
    e.focus();
  };
});
