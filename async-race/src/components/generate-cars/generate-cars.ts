import renderCar from '../car/car';
import garSize from '../garage-size/garage-size';
import addIdCounter from '../id-counter/id-counter';

const requestURL = 'http://127.0.0.1:3000/garage';
const carFName = ['Porshe', 'Mersedes', 'Audi', 'BMW', 'Volkswagen', 'Lada', 'Reno', 'Sitroen', 'Acura', 'Mazda'];
const carSName = ['Caen', 'Benz', 'A8', 'E30', 'T3', 'Niva', 'Logan', 'Xantia', 'TL', 'RX7'];
const createCars = 100;
function getRandomId() {
  return Math.floor(Math.random() * 10);
}

const genCars = () => {
  const arr = [];
  for (let i = 0; i < createCars;) {
    i += 1;
    const obj = {
      name: `${carFName[getRandomId()]} ${carSName[getRandomId()]}`,
      color: `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`,
      id: addIdCounter(),
    };
    fetch(requestURL, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    arr.push(obj);
    renderCar(obj);
  }
  garSize();
};

const genManyCars = (): void => {
  const genBtn = document.querySelector('.generate-all');
  genBtn?.addEventListener('click', genCars);
};

export default genManyCars;
