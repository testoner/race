import garSize from '../garage-size/garage-size';

const deleteCar = async (id: number): Promise<void> => {
  const removeBox = document.querySelector(`.car-box-${id}`);

  const requestURL = `http://127.0.0.1:3000/garage/${id}`;

  await fetch(requestURL, { method: 'DELETE' });
  removeBox?.remove();
  garSize();
};
export default deleteCar;
