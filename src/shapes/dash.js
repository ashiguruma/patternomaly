import Shape from './shape';

export default class Dash extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawDash(0, 0);
    this.drawDash(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawDash(offsetX, offsetY) {
    const size = this._size;
    const halfSize = size / 2;
    const gap = 1;

    this._context.moveTo(offsetX + gap, offsetY + gap);
    this._context.lineTo((halfSize - gap) + offsetX, (halfSize - gap) + offsetY);

    this._context.closePath();
  }
}
