import Shape from './shape';

export default class Dot extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setFillProps();

    this.drawDot();
    this.drawDot(halfSize, halfSize);

    this._context.fill();

    return this._canvas;
  }

  drawDot(offsetX = 0, offsetY = 0, diameter = this._size / 10) {
    const size = this._size;
    const quarterSize = size / 4;
    const x = quarterSize + offsetX;
    const y = quarterSize + offsetY;

    this._context.moveTo(x + quarterSize , y);
    this._context.arc(x, y, diameter, 0, 2 * Math.PI);

    this._context.closePath();
  }
}
