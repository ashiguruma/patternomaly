import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function disc () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.arc(5, 5, 4, 0, 2 * Math.PI);
  shape.context.moveTo(19, 15);
  shape.context.arc(15, 15, 4, 0, 2 * Math.PI);
  shape.context.fill();

  return shape.canvas;
}
