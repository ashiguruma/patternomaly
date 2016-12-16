import Shape from './shape';
import Cross from './cross';
import Dash from './dash';

export default class CrossDash extends Shape {
  drawTile() {
    const halfSize = this._size / 2;
    this._context.beginPath();

    this.setStrokeProps();

    const cross = new Cross();
    cross.drawCross.call(this);

    const dash = new Dash();
    dash.drawDash.call(this, halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }
}
