import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function triangleVertical () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(1, 1);
  shape.context.lineTo(8, 5);
  shape.context.lineTo(1, 9);
  shape.context.closePath();

  shape.context.moveTo(18, 11);
  shape.context.lineTo(18, 19);
  shape.context.lineTo(11, 15);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}
