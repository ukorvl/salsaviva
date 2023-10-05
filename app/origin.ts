import {env} from './env.mjs';

export const origin =
  env.NODE_ENV === 'production' ? 'https://salsaviva.am' : 'http://localhost:3000';
