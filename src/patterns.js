import shapes, { getRandomShape } from './shapes/index';

export function draw (
  shapeType = 'square',
  backgroundColor,
  patternColor,
  size
) {
  const patternCanvas = document.createElement('canvas');
  const patternContext = patternCanvas.getContext('2d');
  const outerSize = size * 2;

  const Shape = shapes[shapeType];
  const shape = new Shape(size, backgroundColor, patternColor);

  const pattern = patternContext.createPattern(shape.drawTile(), 'repeat');

  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  pattern.shapeType = shapeType;

  return pattern;
}

export function generate(colorList) {
  let firstShapeType;
  let previousShapeType;

  return colorList.map((color, index, list) => {
    let shapeType;

    if (index === 0) {
      shapeType = getRandomShape();
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
