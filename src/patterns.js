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
  shape = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 20
) {
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');
  let pattern;

  switch (shape) {
    case 'circle':
      pattern = circle;
      break;
    case 'diamond':
      pattern = diamond;
      break;
    case 'triangle':
      pattern = triangle;
      break;
    case 'triangle-inverted':
      pattern = triangleInverted;
      break;
    case 'line-horizontal':
      pattern = lineHorizontal;
      break;
    case 'line-vertical':
      pattern = lineVertical;
      break;
    case 'line-diagonal-lr':
      pattern = lineDiagonalLeftToRight;
      break;
    case 'line-diagonal-rl':
      pattern = lineDiagonalRightToLeft;
      break;
    case 'zigzag-horizontal':
      pattern = zigzagHorizontal;
      break;
    case 'zigzag-vertical':
      pattern = zigzagVertical;
      break;
    default:
      pattern = square;
  }

  let outerSize = size * 2;

  // create a canvas to hold the pattern
  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  // create coloured background rect
  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  // create pattern overlay rect
  pattern = patternContext.createPattern(pattern.call(this, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, outerSize, outerSize);


  return patternContext.createPattern(patternCanvas, 'repeat');
}

export default draw;
