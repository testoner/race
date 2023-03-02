import renderCar from '../car/car';
import garSize from '../garage-size/garage-size';

const requestURL = 'http://127.0.0.1:3000/garage';

const mainGarage = async (): Promise<void> => {
  const html = `
  <div class="main-garage-wrapper">
  <div class="garage-tittle">
    <h2 class="gar-tittle">GARAGE</h2>
  </div>
  `;

  const root = document.createElement('div');
  root.setAttribute('class', 'main-garage');
  root.innerHTML = html;

  const main = document.querySelector('main');

  if (main) main.appendChild(root);

  await fetch(requestURL)
    .then((res) => res.json())
    .then((data) => renderCar(data));
  garSize();
};
export default mainGarage;
