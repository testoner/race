const garageButtons = (): void => {
  const html = `
    <button class="garage-next">NEXT</button>
    <button class="garage-pref">PREF</button>
  `;

  const root = document.createElement('div');
  root.setAttribute('class', 'garage-button');
  root.innerHTML = html;

  const main = document.querySelector('main');

  if (main) main.appendChild(root);
};
export default garageButtons;
