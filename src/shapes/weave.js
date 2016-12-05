import Shape from './shape';

export default class Weave extends Shape {
  drawTile() {
    this._context.beginPath();

    this.setStrokeProps();

    this.drawWeave(0, 0);

    this._context.stroke();

    return this._canvas;
  }

  drawWeave(offsetX, offsetY) {
    const size = this._size;
    const halfSize = size / 2;

    this._context.moveTo(offsetX + 1, offsetY + 1);
    this._context.lineTo(halfSize - 1, halfSize - 1);

    this._context.moveTo(halfSize + 1, size - 1);
    this._context.lineTo(size - 1, halfSize + 1);

    this._context.closePath();
  }
}
