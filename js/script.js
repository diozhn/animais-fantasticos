import initTabNav from '../modules/tabnav.js';
import initAccordeon from '../modules/accordeon.js';
import ScrollSuave from '../modules/scroll-suave.js';
import initAnimacaoScroll from '../modules/scroll-animacao.js';
import initModal from '../modules/modal.js';
import initTooltip from '../modules/tooltip.js';
import initDropDown from '../modules/dropdown.js';
import initMenuMobile from '../modules/menu-mobile.js';
import initFuncionamento from '../modules/funcionamento.js';
import initFetchAnimais from '../modules/fetch-animais.js';
import initFetchBitcoin from '../modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"');
scrollSuave.init();

initTabNav();
initAccordeon();
initAnimacaoScroll();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
