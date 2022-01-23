import API from '../../scripts/api';

const $headerLinks = document.querySelectorAll<HTMLAnchorElement>('.header__link');
const $burger = document.querySelector('.header__burger');
const $menu = document.querySelector('.header-mobile');
const burgerActiveClass = 'header__burger--active';
const menuActiveClass = 'header-mobile--active';

$headerLinks.forEach((item) => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;
    const targetOffset = document.querySelector<HTMLElement>(`.${target}`)?.offsetTop;

    $burger?.classList.remove(burgerActiveClass);
    $menu?.classList.remove(menuActiveClass);

    if (document.body.classList.contains('fixed')) {
      document.body.classList.remove('fixed');
      API.showOverflow();
    }

    targetOffset &&
      window.scrollTo({
        top: targetOffset - (window.innerWidth < 1200 ? 57 : 75),
        left: 0,
        behavior: window.innerWidth < 1200 ? 'auto' : 'smooth',
      });
  });
});

$burger?.addEventListener('click', () => {
  $burger.classList.toggle(burgerActiveClass);
  $menu?.classList.toggle(menuActiveClass);

  document.body.classList.toggle('fixed');

  if (document.body.classList.contains('fixed')) {
    API.hideOverflow();
  } else {
    API.showOverflow();
  }
});
