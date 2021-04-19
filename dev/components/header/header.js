const $headerLinks = Array.from(document.querySelectorAll('.header__link'));
const $burger = document.querySelector('.header__burger');
const $menu = document.querySelector('.header-mobile');
const $heroArrow = document.querySelector('.hero__arrow');
const burgerActiveClass = 'header__burger--active';
const menuActiveClass = 'header-mobile--active';

$headerLinks.map(item => {
  item.addEventListener('click', el => {
    const target = el.currentTarget.dataset.target;
  
    $burger.classList.remove(burgerActiveClass);
    $menu.classList.remove(menuActiveClass);

    if (document.body.classList.contains('fixed')) {
      document.body.classList.remove('fixed');
      showOverflow();
    }

    window.scrollTo({
      top: document.querySelector(`.${target}`).offsetTop - (window.innerWidth < 1200 ? 57 : 75),
      left: 0,
      behavior: window.innerWidth < 1200 ? 'instant' : 'smooth'
    });
  });
});

$heroArrow.addEventListener('click', () => $headerLinks[0].click());

$burger.addEventListener('click', () => {
  $burger.classList.toggle(burgerActiveClass);
  $menu.classList.toggle(menuActiveClass);

  document.body.classList.toggle('fixed');

  if (document.body.classList.contains('fixed')) {
    hideOverflow();
  } else {
    showOverflow();
  }
});