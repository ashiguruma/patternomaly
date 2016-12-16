import Shape from './shape';
import Dot from './dot';
import Dash from './dash';

export default class DotDash extends Shape {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    const dash = new Dash();
    dash.drawDash.call(this, halfSize, halfSize);

    this._context.closePath();
    this._context.stroke();

    this.setFillProps();

    const dot = new Dot();
    dot.drawDot.call(this);

    this._context.fill();

    return this._canvas;
  }
}
