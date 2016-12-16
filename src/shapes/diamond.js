import Shape from './shape';

export default class Diamond extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setFillProps();

    this.drawDiamond();
    this.drawDiamond(halfSize, halfSize);

    this._context.fill();

    return this._canvas;
  }

  drawDiamond(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const halfSize = size / 2;
    const quarterSize = size / 4;

    this._context.moveTo(quarterSize + offsetX, offsetY);
    this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);
    this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
    this._context.lineTo(offsetX, quarterSize + offsetY);

    this._context.closePath();
  }
}
