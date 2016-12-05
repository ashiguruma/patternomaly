import Zigzag from './zigzag';

export default class ZigzagVertical extends Zigzag {
  drawTile() {
    this._context.translate(this._size, 0);
    this._context.rotate(90 * Math.PI / 180);

    Zigzag.prototype.drawTile.call(this);

    return this._canvas;
  }
}
