import Diagonal from './diagonal';

export default class DiagonalRightLeft extends Diagonal {
  drawTile() {
    this._context.translate(this._size, 0);
    this._context.rotate(90 * Math.PI / 180);

    Diagonal.prototype.drawTile.call(this);

    return this._canvas;
  }
}
