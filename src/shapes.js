function generateShape (size) {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  return {
    canvas,
    context
  };
}

export function square (width) {
  let shape = generateShape(width);
  let height = width;

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.4)';
  shape.context.fillRect(0, 0, width / 2, height / 2);
  shape.context.fillRect(width / 2, height / 2, width / 2, height / 2);

  return shape.canvas;
}

export function circle (diameter) {
  let shape = generateShape(diameter);
  let radius = diameter / 2;

  shape.context.beginPath();
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.4)';

  shape.context.arc(radius / 2, radius / 2, radius / 2, 0, 2 * Math.PI);
  shape.context.arc(radius * 1.5, radius * 1.5, radius / 2, 0, 2 * Math.PI);
  shape.context.fill();

  return shape.canvas;
}

export function diamond (width) {
  let shape = generateShape(width);
  let canvasWidth = shape.canvas.width;
  let canvasHeight = shape.canvas.height;

  shape.context.beginPath();
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.5)';

  shape.context.moveTo(canvasWidth / 4, 0);
  shape.context.lineTo(canvasWidth / 2, canvasHeight / 4);
  shape.context.lineTo(canvasWidth / 4, canvasHeight / 2);
  shape.context.lineTo(0, canvasHeight / 4);
  shape.context.lineTo(canvasWidth / 4, 0);

  shape.context.moveTo(canvasWidth * 0.75, 0);
  shape.context.lineTo(canvasWidth, canvasHeight / 4);
  shape.context.lineTo(canvasWidth * 0.75, canvasHeight / 2);
  shape.context.lineTo(canvasWidth / 2, canvasHeight / 4);
  shape.context.lineTo(canvasWidth * 0.75, 0);

  shape.context.moveTo(canvasWidth / 4, canvasHeight / 2);
  shape.context.lineTo(canvasWidth / 2, canvasHeight * 0.75);
  shape.context.lineTo(canvasWidth / 4, canvasHeight);
  shape.context.lineTo(0, canvasHeight * 0.75);
  shape.context.lineTo(canvasWidth / 4, canvasHeight / 2);

  shape.context.moveTo(canvasWidth * 0.75, canvasHeight / 2);
  shape.context.lineTo(canvasWidth, canvasHeight * 0.75);
  shape.context.lineTo(canvasWidth * 0.75, canvasHeight);
  shape.context.lineTo(canvasWidth / 2, canvasHeight * 0.75);
  shape.context.lineTo(canvasWidth * 0.75, canvasHeight / 2);

  shape.context.fill();

  return shape.canvas;
}

export function lineHorizontal (width) {
  let thickness = width / 4;
  let shape = generateShape(width);

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
  shape.context.fillRect(0, 0, width, thickness);
  shape.context.fillRect(0, thickness * 2, width, thickness);

  return shape.canvas;
}

export function lineVertical (width) {
  let thickness = width / 4;
  let shape = generateShape(width);

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.5)';
  shape.context.fillRect(0, 0, thickness, width);
  shape.context.fillRect(thickness * 2, 0, thickness, width);

  return shape.canvas;
}

export function lineDiagonalLeftToRight (width) {
  let thickness = width / 4;
  let shape = generateShape(width);
  let height = width;

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(thickness, -thickness);
  shape.context.lineTo(width + thickness, height - thickness);
  shape.context.stroke();

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(-thickness, thickness);
  shape.context.lineTo(width - thickness, height + thickness);
  shape.context.stroke();

  return shape.canvas;
}

export function lineDiagonalRightToLeft (width) {
  let thickness = width / 4;
  let shape = generateShape(width);
  let height = width;

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(width + thickness, thickness);
  shape.context.lineTo(thickness, height + thickness);
  shape.context.stroke();

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(width - thickness, -thickness);
  shape.context.lineTo(-thickness, height - thickness);
  shape.context.stroke();

  return shape.canvas;
}

export function triangle (size) {
  let shape = generateShape(size);
  size = size / 2;

  shape.context.beginPath();
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.5)';

  shape.context.moveTo(size / 2, 0);
  shape.context.lineTo(size, size);
  shape.context.lineTo(0, size);
  shape.context.lineTo(size / 2, 0);

  shape.context.moveTo(size, size);
  shape.context.lineTo(size * 1.5, 0);
  shape.context.lineTo(size * 2, size);
  shape.context.lineTo(size, size);

  shape.context.moveTo(size * 2, size);
  shape.context.lineTo(size * 2, size * 2);
  shape.context.lineTo(size * 1.5, size * 2);
  shape.context.lineTo(size * 2, size);

  shape.context.moveTo(size, size);
  shape.context.lineTo(size * 1.5, size * 2);
  shape.context.lineTo(size / 2, size * 2);
  shape.context.lineTo(size, size);

  shape.context.moveTo(0, size);
  shape.context.lineTo(size / 2, size * 2);
  shape.context.lineTo(0, size * 2);
  shape.context.lineTo(0, size);

  shape.context.fill();

  return shape.canvas;
}

export function triangleInverted (size) {
  let shape = generateShape(size);
  size = size / 2;

  shape.context.beginPath();
  shape.context.translate(size * 2, size * 2);
  shape.context.rotate(3.14);

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.5)';

  shape.context.moveTo(size / 2, 0);
  shape.context.lineTo(size, size);
  shape.context.lineTo(0, size);
  shape.context.lineTo(size / 2, 0);

  shape.context.moveTo(size, size);
  shape.context.lineTo(size * 1.5, 0);
  shape.context.lineTo(size * 2, size);
  shape.context.lineTo(size, size);

  shape.context.moveTo(size * 2, size);
  shape.context.lineTo(size * 2, size * 2);
  shape.context.lineTo(size * 1.5, size * 2);
  shape.context.lineTo(size * 2, size);

  shape.context.moveTo(size, size);
  shape.context.lineTo(size * 1.5, size * 2);
  shape.context.lineTo(size / 2, size * 2);
  shape.context.lineTo(size, size);

  shape.context.moveTo(0, size);
  shape.context.lineTo(size / 2, size * 2);
  shape.context.lineTo(0, size * 2);
  shape.context.lineTo(0, size);

  shape.context.fill();

  return shape.canvas;
}

export function zigzagVertical (width) {
  let thickness = width / 4;
  let shape = generateShape(width);
  let height = width;

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(thickness, -thickness);
  shape.context.lineTo(width - thickness, height / 2);
  shape.context.lineTo(thickness, height + thickness);
  shape.context.stroke();

  return shape.canvas;
}

export function zigzagHorizontal (width) {
  let thickness = width / 4;
  let shape = generateShape(width);
  let height = width;

  shape.context.beginPath();
  shape.context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.lineWidth = thickness;
  shape.context.moveTo(-thickness, thickness);
  shape.context.lineTo(width / 2, height - thickness);
  shape.context.lineTo(width + thickness, thickness);
  shape.context.stroke();

  return shape.canvas;
}

export default {
  'square': square,
  'circle': circle,
  'diamond': diamond,
  'triangle': triangle,
  'triangle-inverted': triangleInverted,
  'line-horizontal': lineHorizontal,
  'line-vertical': lineVertical,
  'line-diagonal-lr': lineDiagonalLeftToRight,
  'line-diagonal-rl': lineDiagonalRightToLeft,
  'zigzag-vertical': zigzagHorizontal,
  'zigzag-horizontal': zigzagVertical
};
