import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function diamondOutline () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;

  shape.context.moveTo(5, 1);
  shape.context.lineTo(9, 5);
  shape.context.lineTo(5, 9);
  shape.context.lineTo(1, 5);
  shape.context.closePath();

  shape.context.moveTo(15, 11);
  shape.context.lineTo(19, 15);
  shape.context.lineTo(15, 19);
  shape.context.lineTo(11, 15);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}
