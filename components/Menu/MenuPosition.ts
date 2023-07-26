import {CSSProperties} from 'react';

/**
 * Position of menu using style position props.
 */
export type MenuPosition = Pick<CSSProperties, 'top' | 'bottom' | 'left' | 'right'>;
