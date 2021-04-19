const $preloader = document.querySelector('.preloader');

document.querySelector('.preloader__logo').classList.add('preloader__logo--animated');

setTimeout(() => {
  $preloader.style.opacity = 0;

  setTimeout(() => {
    $preloader.remove();
  }, 500);
}, 2000);