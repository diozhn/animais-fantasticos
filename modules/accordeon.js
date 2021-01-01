export default function initAccordeon() {
  const accordeonList = document.querySelectorAll('.js-accordeon dt');
  const activeClass = 'ativo';

  function activeAccordeon() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordeonList.length) {
    accordeonList[0].classList.add(activeClass);
    accordeonList[0].nextElementSibling.classList.add(activeClass);

    accordeonList.forEach((item) => {
      item.addEventListener('click', activeAccordeon);
    });
  }
}
