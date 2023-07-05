import '@fortawesome/fontawesome-svg-core/styles.css';
import {faInstagram, faTelegram, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line import/order
import {faCircleArrowUp, faLocationDot} from '@fortawesome/free-solid-svg-icons';

/**
 * @see {@link https://github.com/FortAwesome/Font-Awesome/issues/19348#issuecomment-1262137893}
 */
const {library, config} = require('@fortawesome/fontawesome-svg-core');

config.autoAddCss = false;

/**
 * Adds only required icons.
 */
library.add(faInstagram, faTelegram, faWhatsapp, faCircleArrowUp, faFacebook, faLocationDot);
