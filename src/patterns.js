import {
  square,
  circle,
  diamond,
  triangle,
  triangleInverted,
  lineHorizontal,
  lineVertical,
  lineDiagonalLeftToRight,
  lineDiagonalRightToLeft,
  zigzagHorizontal,
  zigzagVertical
} from './shapes';

export default function draw (
  shapeType = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 20
) {
  let outerSize = size * 2;
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');
  let shape = getShape(shapeType);
  let pattern;

  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  pattern = patternContext.createPattern(shape.call(this, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, outerSize, outerSize);

  return patternContext.createPattern(patternCanvas, 'repeat');
}

export function generate(colorList) {
  return colorList.map((color) => {
    return draw('', color);
  });
}

function getShape(shapeType) {
  const shapeNames = [
    'circle',
    'diamond',
    'triangle',
    'triangle-inverted',
    'line-horizontal',
    'line-vertical',
    'line-diagonal-lr',
    'line-diagonal-rl',
    'zigzag-horizontal',
    'zigzag-vertical'
  ];
  let shape;

  if (shapeType === '') {
    const randomIndex = Math.round(Math.random() * shapeNames.length) + 1;
    shapeType = shapeNames[randomIndex];
  }

  switch (shapeType) {
    case 'circle':
      shape = circle;
      break;
    case 'diamond':
      shape = diamond;
      break;
    case 'triangle':
      shape = triangle;
      break;
    case 'triangle-inverted':
      shape = triangleInverted;
      break;
    case 'line-horizontal':
      shape = lineHorizontal;
      break;
    case 'line-vertical':
      shape = lineVertical;
      break;
    case 'line-diagonal-lr':
      shape = lineDiagonalLeftToRight;
      break;
    case 'line-diagonal-rl':
      shape = lineDiagonalRightToLeft;
      break;
    case 'zigzag-horizontal':
      shape = zigzagHorizontal;
      break;
    case 'zigzag-vertical':
      shape = zigzagVertical;
      break;
    default:
      shape = square;
  }

  return shape;
}
