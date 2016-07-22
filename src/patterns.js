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

function draw (
  shapeType = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 20
) {
  let shape;
  let pattern;
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');

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

  let outerSize = size * 2;

  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  pattern = patternContext.createPattern(shape.call(this, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, outerSize, outerSize);

  return patternContext.createPattern(patternCanvas, 'repeat');
}

export default draw;
