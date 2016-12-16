import { BACKGROUND_COLOR, PATTERN_COLOR } from '../config';
import { POINT_STYLE } from '../config';

export default class Shape {
  constructor(size = 20, backgroundColor = BACKGROUND_COLOR, patternColor = PATTERN_COLOR) {
    this._canvas = document.createElement('canvas');
    this._context = this._canvas.getContext('2d');

    this._canvas.width = size;
    this._canvas.height = size;

    this._context.fillStyle = backgroundColor;
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);

    this._size = size;
    this._patternColor = patternColor;

    return this;
  }

  setStrokeProps() {
    this._context.strokeStyle = this._patternColor;
    this._context.lineWidth = this._size / 10;
    this._context.lineJoin = POINT_STYLE;
    this._context.lineCap = POINT_STYLE;
  }

  setFillProps() {
    this._context.fillStyle = this._patternColor;
  }
}
