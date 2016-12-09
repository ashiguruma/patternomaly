import { shapes, deprecatedShapes } from './shapes-list';

export function getRandomShape(excludedShapeTypes = []) {
  const deprecatedShapesList = Object.keys(deprecatedShapes);
  let shapesList = Object.keys(shapes);

  shapesList = shapesList.filter((shape) => {
    if (deprecatedShapesList.indexOf(shape) === -1) {
      return shape;
    }
  });

  excludedShapeTypes.forEach(shapeType => {
    shapesList.splice(shapesList.indexOf(shapeType), 1);
  });

  const randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}

export default shapes;
