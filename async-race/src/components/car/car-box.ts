import svgCar from './car-svg';

const carBox = (name: string, color: string, id: number): string => `
  <div class="box-wrapper">
    <div class="car-button">
      <button class='car-select car-select-${id}'>SELECT</button>
      <button class='car-remove car-remove-${id}'>REMOVE</button>
    </div>
    <div class="race-button">
      <button class="car-start">A</button>
      <button class="car-stop">B</button>
    </div>
    <div class="car-tittle">
      <h2 class='car-name-${id}'>${name}</h2>
    </div>
  </div>
  <div class="car-race">
    ${svgCar(color, id)}
</div>
  `;

export default carBox;
