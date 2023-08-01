/* eslint-disable jsdoc/require-jsdoc */
declare interface Navigator extends NavigatorNetworkInformation {}

type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';

interface NetworkInformation extends EventTarget {
  readonly effectiveType?: EffectiveConnectionType;
  onchange?: EventListener;
}

declare interface NavigatorNetworkInformation {
  readonly connection?: NetworkInformation;
}
