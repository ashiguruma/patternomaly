import Shape from './shape';

export default class Plus extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawPlus();
    this.drawPlus(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawPlus(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const halfSize = size / 2;
    const quarterSize = size / 4;

    this._context.moveTo(quarterSize + offsetX, 0 + offsetY);
    this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
    this._context.moveTo(0 + offsetX, quarterSize + offsetY);
    this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);

    this._context.closePath();
  }
}
