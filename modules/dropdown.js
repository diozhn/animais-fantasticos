import outsideClick from './outsideclick.js'

export default function initDropDown() {
    
const dropdownMenu = document.querySelectorAll("[data-dropdown]");

dropdownMenu.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add("ativo");
  outsideClick(this,['touchstart', 'click'], () => {
    this.classList.remove("ativo");
  });
}
}
