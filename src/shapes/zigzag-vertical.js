import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function zigzagVertical () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(2, 0);
  shape.context.lineTo(7, 5);
  shape.context.lineTo(2, 10);
  shape.context.lineTo(7, 15);
  shape.context.lineTo(2, 20);

  shape.context.moveTo(12, 0);
  shape.context.lineTo(17, 5);
  shape.context.lineTo(12, 10);
  shape.context.lineTo(17, 15);
  shape.context.lineTo(12, 20);

  shape.context.stroke();

  return shape.canvas;
}
