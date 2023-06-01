import '@fortawesome/fontawesome-svg-core/styles.css';
// eslint-disable-next-line import/order
import {faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

/**
 * @see {@link https://github.com/FortAwesome/Font-Awesome/issues/19348#issuecomment-1262137893}
 */
const {library, config} = require('@fortawesome/fontawesome-svg-core');

config.autoAddCss = false;

/**
 * Adds only required icons.
 */
export default function configureIcons() {
  // Import @fortawesome/free-brands-svg-icons
  library.add(faInstagram, faTelegram, faWhatsapp);
}
