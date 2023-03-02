const updateCar = async (id: number, name: string, color: string): Promise<void> => {
  const newName = <HTMLInputElement>document.querySelector('.update-name-car');
  const newColor = <HTMLInputElement>document.querySelector('.update-color-car');
  const updateBtn = <HTMLButtonElement>document.querySelector('.update-btn');
  const updateInput = document.querySelectorAll('.update-inputs') as NodeListOf<HTMLInputElement>;
  updateInput.forEach((el): void => {
    el.disabled = false;
  });
  newName.value = name;
  newColor.value = color;
  const requestURL = `http://127.0.0.1:3000/garage/${id}`;

  updateBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const car = {
      name: newName.value,
      color: newColor.value,
    };
    await fetch(requestURL, {
      method: 'PUT',
      body: JSON.stringify(car),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const svg = <HTMLElement>document.querySelector(`.car-svg-${id}`);
    const title = <HTMLElement>document.querySelector(`.car-name-${id}`);
    title.innerHTML = `${newName.value}`;
    svg.style.fill = newColor.value;
    const updForm = <HTMLFormElement>document.querySelector('.update-form');
    updForm.reset();

    updateInput.forEach((el): void => {
      el.disabled = true;
    });
  });
};
export default updateCar;
