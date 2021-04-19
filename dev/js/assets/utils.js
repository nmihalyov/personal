let topOffset = 0;

const hideOverflow = () => {
  topOffset = window.scrollY;

  document.body.style.cssText = `position: fixed; margin-top: ${-topOffset}px;`;
};

const showOverflow = () => {
  document.body.style.cssText = 'position: static; margin-top: 0;';

  window.scrollTo(0, topOffset);
};