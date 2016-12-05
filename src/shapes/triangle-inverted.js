import Triangle from './triangle';

export default class TriangleVertical extends Triangle {
  drawTile() {
    const size = this._size;

    this._context.translate(size, size);
    this._context.rotate(180 * Math.PI / 180);

    Triangle.prototype.drawTile.call(this);

    return this._canvas;
  }
}
