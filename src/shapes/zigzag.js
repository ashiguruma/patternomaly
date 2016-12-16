import Shape from './shape';

export default class Zigzag extends Shape {
  drawTile() {
    this._context.beginPath();

    this.setStrokeProps();

    this.drawZigzag();
    this.drawZigzag(this._size / 2);

    this._context.stroke();

    return this._canvas;
  }

  drawZigzag(offsetY = 0) {
    const size = this._size;
    const quarterSize = size / 4;
    const halfSize = size / 2;
    const tenthSize = size / 10;

    this._context.moveTo(0, tenthSize + offsetY);
    this._context.lineTo(quarterSize, (halfSize - tenthSize) + offsetY);
    this._context.lineTo(halfSize, tenthSize + offsetY);
    this._context.lineTo(size - quarterSize, (halfSize - tenthSize) + offsetY);
    this._context.lineTo(size, tenthSize + offsetY);
  }
}
