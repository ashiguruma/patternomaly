import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function lineVertical () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(5, 20);
  shape.context.moveTo(15, 0);
  shape.context.lineTo(15, 20);
  shape.context.stroke();

  return shape.canvas;
}
