import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function square (size, backgroundColor) {
  const shape = generateShape(size, backgroundColor);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.fillRect(0, 0, 10, 10);
  shape.context.fillRect(10, 10, 10, 10);

  return shape.canvas;
}
