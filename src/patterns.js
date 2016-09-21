import shapes from './shapes/index';

export default function draw (
  shapeType = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 20
) {
  let outerSize = size * 2;
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');
  // TODO Map deprecated shapes to new shapes here to keep deprecated names out of random selection
  let shape = shapes[shapeType];
  let pattern, patternFill;

  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  pattern = patternContext.createPattern(shape.call(shape, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, outerSize, outerSize);

  patternFill = patternContext.createPattern(patternCanvas, 'repeat');
  patternFill.shapeType = shapeType;

  return patternFill;
}

export function generate(colorList) {
  let previousShapeType = null;

  return colorList.map((color) => {
    const shapeType = getRandomShape(previousShapeType);
    previousShapeType = shapeType;

    return draw(shapeType, color);
  });
}

function getRandomShape(excludedShapeType) {
  const shapesList = Object.keys(shapes);

  if (excludedShapeType !== null) {
    shapesList.splice(shapesList.indexOf(excludedShapeType), 1);
  }

  const randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}
