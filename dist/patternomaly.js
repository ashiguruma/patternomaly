(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.pattern = global.pattern || {})));
}(this, (function (exports) { 'use strict';

var PATTERN_COLOR = 'rgba(255, 255, 255, 0.6)';

function generateShape(size) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  return {
    canvas: canvas,
    context: context
  };
}

function plus() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(5, 10);
  shape.context.moveTo(0, 5);
  shape.context.lineTo(10, 5);

  shape.context.moveTo(15, 10);
  shape.context.lineTo(15, 20);
  shape.context.moveTo(10, 15);
  shape.context.lineTo(20, 15);
  shape.context.stroke();

  return shape.canvas;
}

function cross() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 9);
  shape.context.moveTo(1, 9);
  shape.context.lineTo(9, 1);

  shape.context.moveTo(11, 11);
  shape.context.lineTo(19, 19);
  shape.context.moveTo(11, 19);
  shape.context.lineTo(19, 11);
  shape.context.stroke();

  return shape.canvas;
}

function crossDash() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 9);
  shape.context.moveTo(1, 9);
  shape.context.lineTo(9, 1);

  shape.context.moveTo(11, 11);
  shape.context.lineTo(19, 19);
  shape.context.stroke();

  return shape.canvas;
}

function dotDash() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.arc(5, 5, 2, 0, 2 * Math.PI);
  shape.context.fill();

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(11, 11);
  shape.context.lineTo(19, 19);
  shape.context.stroke();

  return shape.canvas;
}

function weave() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 9);

  shape.context.moveTo(11, 19);
  shape.context.lineTo(19, 11);
  shape.context.stroke();

  return shape.canvas;
}

function line() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(0, 5);
  shape.context.lineTo(20, 5);
  shape.context.moveTo(0, 15);
  shape.context.lineTo(20, 15);
  shape.context.stroke();

  return shape.canvas;
}

function lineVertical() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(5, 20);
  shape.context.moveTo(15, 0);
  shape.context.lineTo(15, 20);
  shape.context.stroke();

  return shape.canvas;
}

function zigzag() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(0, 2);
  shape.context.lineTo(5, 7);
  shape.context.lineTo(10, 2);
  shape.context.lineTo(15, 7);
  shape.context.lineTo(20, 2);

  shape.context.moveTo(0, 12);
  shape.context.lineTo(5, 17);
  shape.context.lineTo(10, 12);
  shape.context.lineTo(15, 17);
  shape.context.lineTo(20, 12);

  shape.context.stroke();

  return shape.canvas;
}

function zigzagVertical() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(2, 0);
  shape.context.lineTo(7, 5);
  shape.context.lineTo(2, 10);
  shape.context.lineTo(7, 15);
  shape.context.lineTo(2, 20);

  shape.context.moveTo(12, 0);
  shape.context.lineTo(17, 5);
  shape.context.lineTo(12, 10);
  shape.context.lineTo(17, 15);
  shape.context.lineTo(12, 20);

  shape.context.stroke();

  return shape.canvas;
}

function diagonal() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(9, -1);
  shape.context.lineTo(21, 11);
  shape.context.moveTo(-1, 9);
  shape.context.lineTo(11, 21);

  shape.context.stroke();

  return shape.canvas;
}

function diagonalRightLeft() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.moveTo(11, -1);
  shape.context.lineTo(-1, 11);
  shape.context.moveTo(21, 9);
  shape.context.lineTo(9, 21);

  shape.context.stroke();

  return shape.canvas;
}

function square() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.fillRect(0, 0, 10, 10);
  shape.context.fillRect(10, 10, 10, 10);

  return shape.canvas;
}

function disc() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.arc(5, 5, 4, 0, 2 * Math.PI);
  shape.context.moveTo(19, 15);
  shape.context.arc(15, 15, 4, 0, 2 * Math.PI);
  shape.context.fill();

  return shape.canvas;
}

function ring() {
  var shape = generateShape(20);

  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 2;

  shape.context.arc(5, 5, 4, 0, 2 * Math.PI);
  shape.context.moveTo(19, 15);
  shape.context.arc(15, 15, 4, 0, 2 * Math.PI);
  shape.context.stroke();

  return shape.canvas;
}

function triangle() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(1, 1);
  shape.context.lineTo(9, 1);
  shape.context.lineTo(5, 8);
  shape.context.closePath();

  shape.context.moveTo(11, 18);
  shape.context.lineTo(19, 18);
  shape.context.lineTo(15, 11);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}

function triangleVertical() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;
  shape.context.lineJoin = 'round';

  shape.context.moveTo(1, 1);
  shape.context.lineTo(8, 5);
  shape.context.lineTo(1, 9);
  shape.context.closePath();

  shape.context.moveTo(18, 11);
  shape.context.lineTo(18, 19);
  shape.context.lineTo(11, 15);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}

function diamond() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.fillStyle = PATTERN_COLOR;

  shape.context.moveTo(5, 0);
  shape.context.lineTo(10, 5);
  shape.context.lineTo(5, 10);
  shape.context.lineTo(0, 5);
  shape.context.closePath();

  shape.context.moveTo(15, 10);
  shape.context.lineTo(20, 15);
  shape.context.lineTo(15, 20);
  shape.context.lineTo(10, 15);
  shape.context.closePath();

  shape.context.fill();

  return shape.canvas;
}

function diamondOutline() {
  var shape = generateShape(20);

  shape.context.beginPath();
  shape.context.strokeStyle = PATTERN_COLOR;
  shape.context.lineWidth = 1.5;

  shape.context.moveTo(5, 1);
  shape.context.lineTo(9, 5);
  shape.context.lineTo(5, 9);
  shape.context.lineTo(1, 5);
  shape.context.closePath();

  shape.context.moveTo(15, 11);
  shape.context.lineTo(19, 15);
  shape.context.lineTo(15, 19);
  shape.context.lineTo(11, 15);
  shape.context.closePath();

  shape.context.stroke();

  return shape.canvas;
}

var deprecatedShapes = ['circle', 'triangle-inverted', 'line-horizontal', 'line-diagonal-lr', 'line-diagonal-rl', 'zigzag-horizontal'];

var shapes = {
  'plus': plus,
  'cross': cross,
  'crossDash': crossDash,
  'dotDash': dotDash,
  'weave': weave,
  'line': line,
  'line-vertical': lineVertical,
  'zigzag': zigzag,
  'zigzag-vertical': zigzagVertical,
  'diagonal': diagonal,
  'diagnonal-right-left': diagonalRightLeft,
  'square': square,
  'disc': disc,
  'ring': ring,
  'triangle': triangle,
  'triangle-vertical': triangleVertical,
  'diamond': diamond,
  'diamond-outline': diamondOutline,
  // deprecated shape names
  'circle': disc,
  'triangle-inverted': triangleVertical,
  'line-horizontal': line,
  'line-diagonal-lr': diagonal,
  'line-diagonal-rl': diagonalRightLeft,
  'zigzag-horizontal': zigzag
};

function getRandomShape() {
  var excludedShapeTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var shapesList = Object.keys(shapes);

  shapesList = shapesList.filter(function (shape) {
    if (deprecatedShapes.indexOf(shape) === -1) {
      return shape;
    }
  });

  excludedShapeTypes.forEach(function (shapeType) {
    shapesList.splice(shapesList.indexOf(shapeType), 1);
  });

  var randomIndex = Math.floor(Math.random() * shapesList.length);

  return shapesList[randomIndex];
}

function draw() {
  var shapeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'square';
  var backgroundColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgba(100, 100, 100, 0.7)';
  var patternColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgba(255, 255, 255, 0.7)';
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;

  var outerSize = size * 2;
  var patternCanvas = document.createElement('canvas');
  var patternContext = patternCanvas.getContext('2d');
  var shape = shapes[shapeType];
  var pattern = void 0,
      patternFill = void 0;

  patternCanvas.width = outerSize;
  patternCanvas.height = outerSize;

  patternContext.fillStyle = backgroundColor;
  patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

  pattern = patternContext.createPattern(shape.call(shape, size), 'repeat');
  patternContext.fillStyle = pattern;
  patternContext.fillRect(0, 0, outerSize, outerSize);

  patternFill = patternContext.createPattern(patternCanvas, 'repeat');
  patternFill.shapeType = shapeType;

  return patternFill;
}

function generate(colorList) {
  var firstShapeType = void 0;
  var previousShapeType = void 0;

  return colorList.map(function (color, index, list) {
    var shapeType = void 0;

    if (index === 0) {
      shapeType = getRandomShape();
      previousShapeType = shapeType;
      firstShapeType = previousShapeType;
    } else if (index === list.length - 1) {
      shapeType = getRandomShape([previousShapeType, firstShapeType]);
    } else {
      shapeType = getRandomShape([previousShapeType]);
      previousShapeType = shapeType;
    }

    return draw(shapeType, color);
  });
}

exports.draw = draw;
exports.generate = generate;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=patternomaly.js.map
