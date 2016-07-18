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
  width = Math.sqrt(Math.pow(width, 2) / 2);
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
