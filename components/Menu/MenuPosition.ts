import type {XOR} from 'ts-xor';

/**
 * Position using top and right props.
 */
type PositionTopRight = {
  top: number;
  right: number;
};

/**
 * Position using top and left props.
 */
type PositionTopLeft = {
  top: number;
  left: number;
};

/**
 * Position using bottom and right props.
 */
type PositionBottomRight = {
  bottom: number;
  right: number;
};

/**
 * Position using bottom and left props.
 */
type PositionBottomLeft = {
  bottom: number;
  left: number;
};

/**
 * Position of menu using style position props.
 */
export type MenuPosition = XOR<
  PositionTopRight,
  XOR<PositionTopLeft, XOR<PositionBottomRight, PositionBottomLeft>>
>;
