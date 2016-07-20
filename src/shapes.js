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

// TODO make shapes reusable e.g `diamond` could/should use `square`

export function square (width) {
  let shape = generateShape(width);
  let height = width;

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.fillRect(0, 0, width / 2, height / 2);

  return shape.canvas;
}

export function circle (diameter) {
  let shape = generateShape(diameter);

  let radius = diameter / 2;
  let offset = radius;

  shape.context.beginPath();
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.arc(offset, offset, radius / 2, 0, 2 * Math.PI);
  shape.context.fill();

  return shape.canvas;
}

export function diamond (width) {
  let shape = generateShape(width);
  width = Math.sqrt(Math.pow(width, 2) / 2) / 2;
  let height = width;

  shape.context.translate(shape.canvas.width / 2, shape.canvas.height / 2);
  shape.context.rotate(0.785);
  shape.context.translate((width / 2) * -1, (height / 2) * -1);
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.fillRect(0, 0, width, height);

  return shape.canvas;
}

export function lineHorizontal (width) {
  let thickness = width / 4;
  let shape = generateShape(width);

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.fillRect(0, 0, width, thickness);

  return shape.canvas;
}

export function lineVertical (width) {
  let thickness = width / 4;
  let shape = generateShape(width);

  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.fillRect(0, 0, thickness, width);

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

  // TODO could this just be a 'flipped' version of the left to right line?

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
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.moveTo(size, size * 0.5);
  shape.context.lineTo(size * 1.5, size * 1.5);
  shape.context.lineTo(size * 0.5, size * 1.5);
  shape.context.lineTo(size, size * 0.5);
  shape.context.fill();

  return shape.canvas;
}

export function triangleInverted (size) {
  let shape = generateShape(size);
  size = size / 2;

  shape.context.beginPath();
  shape.context.translate(size * 2, size * 2);
  shape.context.rotate(3.14);
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.moveTo(size, size * 0.5);
  shape.context.lineTo(size * 1.5, size * 1.5);
  shape.context.lineTo(size * 0.5, size * 1.5);
  shape.context.lineTo(size, size * 0.5);
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
