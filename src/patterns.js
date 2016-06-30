import {
  square,
  circle,
  diamond
} from './shapes';

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
    case 'diamond':
      pattern = diamond;
      break;
    default:
      pattern = square;
  }

  // create a canvas to hold the pattern
  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  // create coloured background rect
  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  patternContext.scale(1/window.devicePixelRatio, 1/window.devicePixelRatio);

  // create pattern overlay rect
  pattern = patternContext.createPattern(pattern.call(this, size * window.devicePixelRatio), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, size*window.devicePixelRatio, size*window.devicePixelRatio);

  return patternContext.createPattern(patternCanvas, 'repeat');
}

export default draw;
