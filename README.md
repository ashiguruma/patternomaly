# Canvas patterns

Easily generate `CanvasPattern` objects for use in data graphics.

## But why?

[Color-blindness](http://betweentwobrackets.com/), that's why.

This library came about as part of [an issue in Chart.js]().

## Possible API format

    pattern.format('svg');
    pattern.draw('circle', '#333');

    pattern
      .format('svg')
      .draw('circle', '#333');

    pattern
      .draw('circle', '#333');
