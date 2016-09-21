import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function triangle () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 1);
  shape.context.lineTo(5, 8);
  shape.context.closePath();

  shape.context.moveTo(11, 18);
  shape.context.lineTo(19, 18);
  shape.context.lineTo(15, 11);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}
