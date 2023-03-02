import Car from './car-interface';
import createCar from './render-car';

function forMap(car: Car): void {
  createCar(car.name, car.color, car.id);
}
const renderCar = async (data: Car): Promise<void> => {
  if (Array.isArray(data)) {
    await data.map((el: Car): void => forMap(el));
  } else {
    forMap(data);
  }
};
export default renderCar;
