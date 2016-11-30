export default function generateShape (size, backgroundColor) {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  return {
    canvas,
    context
  };
}
