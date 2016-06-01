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
  shape.context.fillRect(0, 0, width, height);

  return shape.canvas;
}

export function circle (diameter) {
  let shape = generateShape(diameter);

  let radius = diameter / 2;
  let offset = radius;

  shape.context.beginPath();
  shape.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
  shape.context.arc(offset, offset, radius, 0, 2 * Math.PI);
  shape.context.fill();

  return shape.canvas;
}
