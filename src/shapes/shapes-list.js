import Plus from './plus';
import Cross from './cross';
import Dash from './dash';
import CrossDash from './cross-dash';
import Dot from './dot';
import DotDash from './dot-dash';
import Disc from './disc';
import Ring from './ring';
import Line from './line';
import LineVertical from './line-vertical';
import Weave from './weave';
import Zigzag from './zigzag';
import ZigzagVertical from './zigzag-vertical';
import Diagonal from './diagonal';
import DiagonalRightLeft from './diagonal-right-left';
import Square from './square';
import Box from './box';
import Triangle from './triangle';
import TriangleInverted from './triangle-inverted';
import Diamond from './diamond';
import DiamondBox from './diamond-box';

export const shapes = {
  'plus': Plus,
  'cross': Cross,
  'dash': Dash,
  'cross-dash': CrossDash,
  'dot': Dot,
  'dot-dash': DotDash,
  'disc': Disc,
  'ring': Ring,
  'line': Line,
  'line-vertical': LineVertical,
  'weave': Weave,
  'zigzag': Zigzag,
  'zigzag-vertical': ZigzagVertical,
  'diagonal': Diagonal,
  'diagonal-right-left': DiagonalRightLeft,
  'square': Square,
  'box': Box,
  'triangle': Triangle,
  'triangle-inverted': TriangleInverted,
  'diamond': Diamond,
  'diamond-box': DiamondBox,
};

export const deprecatedShapes = {
  'circle': shapes['disc'],
  'triangle-vertical': shapes['triangle-inverted'],
  'line-horizontal': shapes['line'],
  'line-diagonal-lr': shapes['diagonal'],
  'line-diagonal-rl': shapes['diagonal-right-left'],
  'zigzag-horizontal': shapes['zigzag'],
  'diamond-outline': shapes['diamond-box']
};
