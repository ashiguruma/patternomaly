import { shapes, deprecatedShapes } from './shapes-list';

const completeShapesList = [];

export function getRandomShape(excludedShapeTypes = []) {
  const shapesList = Object.keys(shapes);

  excludedShapeTypes.forEach(shapeType => {
    shapesList.splice(shapesList.indexOf(shapeType), 1);
  });

  const randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}

Object.assign(completeShapesList, shapes, deprecatedShapes);

export default completeShapesList;
