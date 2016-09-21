import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function diagonal () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(9, -1);
  shape.context.lineTo(21, 11);
  shape.context.moveTo(-1, 9);
  shape.context.lineTo(11, 21);

  shape.context.stroke();

  return shape.canvas;
}
