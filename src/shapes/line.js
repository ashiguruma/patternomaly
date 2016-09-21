import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function cross () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(0, 5);
  shape.context.lineTo(20, 5);
  shape.context.moveTo(0, 15);
  shape.context.lineTo(20, 15);
  shape.context.stroke();

  return shape.canvas;
}
