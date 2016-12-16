import Shape from './shape';

export default class Line extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawLine();
    this.drawLine(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawLine(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const quarterSize = size / 4;

    this._context.moveTo(0, quarterSize + offsetY);
    this._context.lineTo(this._size, quarterSize + offsetY);

    this._context.closePath();
  }
}
