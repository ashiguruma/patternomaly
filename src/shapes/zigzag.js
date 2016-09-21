import PATTERN_COLOR from './config';
import generateShape from './generate';

export default function zigzag () {
  const shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(0, 2);
  shape.context.lineTo(5, 7);
  shape.context.lineTo(10, 2);
  shape.context.lineTo(15, 7);
  shape.context.lineTo(20, 2);

  shape.context.moveTo(0, 12);
  shape.context.lineTo(5, 17);
  shape.context.lineTo(10, 12);
  shape.context.lineTo(15, 17);
  shape.context.lineTo(20, 12);

  shape.context.stroke();

  return shape.canvas;
}
