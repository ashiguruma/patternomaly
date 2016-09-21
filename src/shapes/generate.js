export default function generateShape (size) {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  return {
    canvas,
    context
  };
}
