import garageButtons from '../garage-buttons/garage-buttons';
import genManyCars from '../generate-cars/generate-cars';
import mainButtons from '../main-buttons/main-buttons';
import { mainForm } from '../main-forms/main-form';
import mainGarage from '../main-garage/main-garage';
import switchGarage from './switch-main';

const renderMain = async (): Promise<void> => {
  const root = document.createElement('main');
  root.setAttribute('class', 'main');
  await document.body.appendChild(root);

  mainForm();
  mainButtons();
  garageButtons();
  await mainGarage();

  switchGarage();
  genManyCars();
};
export default renderMain;
