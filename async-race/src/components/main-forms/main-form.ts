import renderCar from '../car/car';
import garSize from '../garage-size/garage-size';
import addIdCounter from '../id-counter/id-counter';

const requestURL = 'http://127.0.0.1:3000/garage';

export async function addNewCar(): Promise<void> {
  const newColor = (<HTMLInputElement>document.querySelector('.color-new-car')).value;
  const newName = (<HTMLInputElement>document.querySelector('.name-new-car')).value;
  const car = {
    name: newName,
    color: newColor,
    id: addIdCounter(),
  };
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  renderCar(car);
  garSize();
}
export const mainForm = async (): Promise<void> => {
  const html = `
  <div class="main-form-wrapper">
    <form class="create-form">
      <input class="name-new-car" type="text">
      <input class="color-new-car" type="color">
      <button class="create-new-car">CREATE</button>
    </form>
    <form class="update-form">
      <input class="update-name-car update-inputs" type="text">
      <input class="update-color-car update-inputs" type="color">
      <button class="update-btn update-inputs">UPDATE</button>
    </form>
  </div>
  `;
  const root = document.createElement('div');
  root.setAttribute('class', 'main-form');
  root.innerHTML = html;
  const main = document.querySelector('.main');
  if (main) await main.appendChild(root);
  const updateInput = document.querySelectorAll('.update-inputs') as NodeListOf<HTMLInputElement>;
  updateInput.forEach((el): void => {
    el.disabled = true;
  });
  const addCarBtn = document.querySelector('.create-form');
  addCarBtn?.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewCar();
  });
};
