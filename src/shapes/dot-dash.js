import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function crossDash () {
  const shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.arc(5, 5, 2, 0, 2 * Math.PI);
  shape.context.fill();

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(11, 11);
  shape.context.lineTo(19, 19);
  shape.context.stroke();

  return shape.canvas;
}
