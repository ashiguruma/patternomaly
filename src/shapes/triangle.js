import Shape from './shape';

export default class Triangle extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setFillProps();

    this.drawTriangle(0, 0);
    this.drawTriangle(halfSize, halfSize);

    this._context.fill();

    return this._canvas;
  }

  drawTriangle(offsetX, offsetY) {
    const size = this._size;
    const halfSize = size / 2;
    const quarterSize = size / 4;

    this._context.moveTo(quarterSize + offsetX, offsetY);
    this._context.lineTo(halfSize + offsetX, halfSize + offsetY);
    this._context.lineTo(offsetX, halfSize + offsetY);

    this._context.closePath();
  }
}
