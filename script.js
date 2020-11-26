//Navegação por tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

//Accordeon List
function initAccordeon() {
  const accordeonList = document.querySelectorAll(".js-accordeon dt");
  const activeClass = "ativo";
  if (accordeonList.length) {
    accordeonList[0].classList.add(activeClass);
    accordeonList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordeon() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordeonList.forEach((item) => {
      item.addEventListener("click", activeAccordeon);
    });
  }
}
initAccordeon();

//Scroll suave / link interno
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animação ao Scroll
function initanimacaoScroll(){
const sections = document.querySelectorAll('.js-scroll');
if(sections.length){
const windowMetade = window.innerHeight * 0.6;

function animaScroll(){
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible)
      section.classList.add('ativo');
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);
}
}

initanimacaoScroll();
