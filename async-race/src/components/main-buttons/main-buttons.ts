const mainButtons = (): void => {
  const html = `
    <div class="main-buttons-wrapper">
        <button class="race-all">RACE</button>
        <button class="reset-all">RESET</button>
        <button class="generate-all">GENERATE CARS</button>
      </div>
  `;

  const root = document.createElement('div');
  root.setAttribute('class', 'main-buttons');
  root.innerHTML = html;
  const main = document.querySelector('main');
  if (main) main.appendChild(root);
};
export default mainButtons;
