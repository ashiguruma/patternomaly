import Shape from './shape';

export default class Cross extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawCross();
    this.drawCross(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawCross(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const halfSize = size / 2;
    const gap = 2;

    this._context.moveTo(offsetX + gap, offsetY + gap);
    this._context.lineTo((halfSize - gap) + offsetX, (halfSize - gap) + offsetY);
    this._context.moveTo(offsetX + gap, (halfSize - gap) + offsetY);
    this._context.lineTo((halfSize - gap) + offsetX, offsetY + gap);

    this._context.closePath();
  }
}
