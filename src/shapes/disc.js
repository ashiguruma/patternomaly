import Dot from './dot';

export default class Disc extends Dot {
  drawTile() {
    const halfSize = this._size / 2;
    const diameter = this._size / 5;

    this._context.beginPath();

    this.setFillProps();

    this.drawDot(0, 0, diameter);
    this.drawDot(halfSize, halfSize, diameter);

    this._context.fill();

    return this._canvas;
  }
}
