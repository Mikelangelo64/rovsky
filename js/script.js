document.addEventListener('DOMContentLoaded', function () {
  let vh = window.innerHeight * 0.01;
  document.body.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    document.body.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });
});
