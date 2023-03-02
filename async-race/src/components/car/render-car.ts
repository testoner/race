import updateCar from '../update-car/update-car';
import carBox from './car-box';
import deleteCar from './delete-car';

const createCar = async (name: string, color: string, id: number): Promise<void> => {
  const html = carBox(name, color, id);

  const root = document.createElement('div');
  root.setAttribute('class', `car-box car-box-${id}`);
  root.innerHTML = html;

  const garage = document.querySelector('.main-garage');

  if (garage) await garage.appendChild(root);

  const delBtn = document.querySelector(`.car-remove-${id}`);

  delBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    deleteCar(id);
  });

  const selectBtn = <HTMLFormElement>document.querySelector(`.car-select-${id}`);

  selectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    updateCar(id, name, color);
  });
};
export default createCar;
