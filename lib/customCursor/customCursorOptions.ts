import {ComponentProps} from 'react';
import AnimatedCursor from 'react-animated-cursor';
import {customCursorClickableClass} from './customCursorClickableClass';

// eslint-disable-next-line jsdoc/require-jsdoc
type Options = ComponentProps<typeof AnimatedCursor>;

const options: Options = {
  innerSize: 12,
  outerStyle: {
    border: '2px solid white',
    zIndex: 1001,
  },
  innerStyle: {
    zIndex: 1001,
  },
  outerSize: 20,
  outerScale: 2,
  outerAlpha: 0.2,
  color: '255, 255, 255',
  innerScale: 0,
  clickables: [
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'label[for]',
    'button',
    `.${customCursorClickableClass}`,
  ],
};

export default options;
