import {
  square,
  circle,
  diamond,
  lineHorizontal,
  lineVertical,
  lineDiagonalLeftToRight,
  lineDiagonalRightToLeft
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
    default:
      pattern = square;
  }

  // create a canvas to hold the pattern
  patternCanvas.width = size;
  patternCanvas.height = size;

  // create coloured background rect
  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  // create pattern overlay rect
  pattern = patternContext.createPattern(pattern.call(this, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, size, size);


  return patternContext.createPattern(patternCanvas, 'repeat');
}

export default draw;
