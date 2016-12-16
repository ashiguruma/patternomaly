import Shape from './shape';

export default class Square extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setFillProps();

    this.drawSquare();
    this.drawSquare(halfSize, halfSize);

    this._context.fill();

    return this._canvas;
  }

  drawSquare(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const halfSize = size / 2;
    const gap = size / 20;

    this._context.fillRect(offsetX + gap, offsetY + gap, halfSize - (gap * 2), halfSize - (gap * 2));

    this._context.closePath();
  }
}
