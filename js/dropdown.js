const dropDownMenu = document.querySelectorAll(".navbar__link");
let currentDropDownOpen = "";

window.addEventListener("click", onWindowClick);
dropDownMenu.forEach((element) => {
  element.addEventListener("click", onDropDownClick);
});

function onDropDownClick(e) {
  if (currentDropDownOpen === e.currentTarget) {
    closeDropDown();
    return;
  }

  if (currentDropDownOpen !== e.currentTarget) {
    closeDropDown();
  }

  openDropDown(e);
}

function onWindowClick(e) {
  if (
    !e.target.classList.contains("navbar-dropdown__link") &&
    !e.target.classList.contains("navbar__link")
  ) {
    closeDropDown();
  }
}

function closeDropDown() {
  if (currentDropDownOpen) {
    currentDropDownOpen.classList.remove("navbar__item--open");
    currentDropDownOpen = "";
  }
}

function openDropDown(e) {
  e.currentTarget.classList.add("navbar__item--open");
  currentDropDownOpen = e.currentTarget;
}
