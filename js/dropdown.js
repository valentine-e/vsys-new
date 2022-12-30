const navBarItem = document.querySelectorAll(".navbar__item");

navBarItem.forEach((e) => {
  e.addEventListener("click", showDropDown);
  e.addEventListener("mouseleave", hideDropDown);
});

function showDropDown(e) {
  const dropDown = e.currentTarget.querySelector(".navbar__dropdown");
  dropDown.classList.add("navbar__dropdown--open");
}

function hideDropDown(e) {
  const dropDown = e.currentTarget.querySelector(".navbar__dropdown");
  dropDown.classList.remove("navbar__dropdown--open");
}
