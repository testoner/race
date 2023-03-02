const switchGarage = (): void => {
  const garBtn = <HTMLButtonElement>document.querySelector('.garBtn');
  const winBtn = <HTMLButtonElement>document.querySelector('.winBtn');

  function switchMain() {
    const main = document.querySelector('.main');
    const mainWin = document.querySelector('.main-score');

    main?.classList.toggle('block');
    mainWin?.classList.toggle('block');

    if (garBtn.disabled) {
      winBtn.disabled = true;
      garBtn.disabled = false;
    } else {
      garBtn.disabled = true;
      winBtn.disabled = false;
    }
  }

  garBtn?.addEventListener('click', switchMain);
  winBtn?.addEventListener('click', switchMain);
};
export default switchGarage;
