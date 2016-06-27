import { square, circle } from './shapes';

function draw (
  shape = 'square',
  backgroundColor = 'rgba(100, 100, 100, 0.7)',
  patternColor = 'rgba(255, 255, 255, 0.7)',
  size = 8
) {
  let patternCanvas = document.createElement('canvas');
  let patternContext = patternCanvas.getContext('2d');
  let outerSize = size * 2;
  let pattern;

  switch (shape) {
  case 'circle':
    pattern = circle;
    break;
  default:
    pattern = square;
  }

  // create a canvas to hold the pattern
  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  // create coloured background rect
  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, outerSize, outerSize);

  // create pattern overlay rect
  pattern = patternContext.createPattern(pattern.call(this, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, size, size);

  return patternContext.createPattern(patternCanvas, 'repeat');
}

export default draw;
