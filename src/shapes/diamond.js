import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function diamond () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(10, 5);
  shape.context.lineTo(5, 10);
  shape.context.lineTo(0, 5);
  shape.context.closePath();

  shape.context.moveTo(15, 10);
  shape.context.lineTo(20, 15);
  shape.context.lineTo(15, 20);
  shape.context.lineTo(10, 15);
  shape.context.closePath();

  shape.context.fill();

  return shape.canvas;
}
