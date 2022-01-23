export const $preloader = document.querySelector<HTMLElement>('.preloader');

document.querySelector('.preloader__logo')?.classList.add('preloader__logo--animated');

if ($preloader) {
  setTimeout(() => {
    $preloader.style.opacity = '0';

    setTimeout(() => {
      $preloader.remove();
    }, 200);
  }, 2000);
}
