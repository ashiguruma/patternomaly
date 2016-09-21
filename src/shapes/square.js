import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function square () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.fillRect(0, 0, 10, 10);
  shape.context.fillRect(10, 10, 10, 10);

  return shape.canvas;
}
