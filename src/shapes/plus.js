import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function plus () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(5, 10);
  shape.context.moveTo(0, 5);
  shape.context.lineTo(10, 5);

  shape.context.moveTo(15, 10);
  shape.context.lineTo(15, 20);
  shape.context.moveTo(10, 15);
  shape.context.lineTo(20, 15);
  shape.context.stroke();

  return shape.canvas;
}
