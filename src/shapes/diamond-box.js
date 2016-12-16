import Diamond from './diamond';

export default class DiamondBox extends Diamond {
  drawTile() {
    const halfSize = this._size / 2;

    this._context.beginPath();

    this.setStrokeProps();

    this.drawDiamond();
    this.drawDiamond(halfSize, halfSize);

    this._context.stroke();

    return this._canvas;
  }

  drawDiamond(offsetX = 0, offsetY = 0) {
    const size = this._size;
    const halfSize = (size / 2) - 1;
    const quarterSize = size / 4;

    this._context.moveTo(quarterSize + offsetX, offsetY + 1);
    this._context.lineTo(halfSize + offsetX, quarterSize + offsetY);
    this._context.lineTo(quarterSize + offsetX, halfSize + offsetY);
    this._context.lineTo(offsetX + 1, quarterSize + offsetY);

    this._context.closePath();
  }
}
