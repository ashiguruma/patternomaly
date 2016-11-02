import shapes, { getRandomShape } from './shapes/index';

export default function draw (
  shapeType = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 20
) {
  let outerSize = size * 2;
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');
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
  let firstShapeType;
  let previousShapeType;

  return colorList.map((color, index, list) => {
    let shapeType;

    if (index === 0) {
      shapeType = getRandomShape([]);
      previousShapeType = shapeType;
      firstShapeType = previousShapeType;
    } else if (index === list.length - 1) {
      shapeType = getRandomShape([previousShapeType, firstShapeType]);
    } else {
      shapeType = getRandomShape([previousShapeType]);
      previousShapeType = shapeType;
    }

    return draw(shapeType, color);
  });
}
