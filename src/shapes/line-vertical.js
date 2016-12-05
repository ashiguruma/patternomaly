import Line from './line';

export default class VerticalLine extends Line {
  drawTile() {
    this._context.translate(this._size, 0);
    this._context.rotate(90 * Math.PI / 180);

    Line.prototype.drawTile.call(this);

    return this._canvas;
  }
}
