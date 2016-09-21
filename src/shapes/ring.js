import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function ring () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.arc(5, 5, 4, 0, 2 * Math.PI);
  shape.context.moveTo(19, 15);
  shape.context.arc(15, 15, 4, 0, 2 * Math.PI);
  shape.context.stroke();

  return shape.canvas;
}
