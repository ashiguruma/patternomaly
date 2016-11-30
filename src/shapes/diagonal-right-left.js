import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function diagonalRightLeft (size, backgroundColor) {
  const shape = generateShape(size, backgroundColor);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(11, -1);
  shape.context.lineTo(-1, 11);
  shape.context.moveTo(21, 9);
  shape.context.lineTo(9, 21);

  shape.context.stroke();

  return shape.canvas;
}
