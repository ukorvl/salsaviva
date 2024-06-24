import fs from 'fs';
import {default as pathModule} from 'node:path';
import {MetadataRoute} from 'next';
import {origin} from './origin';

// eslint-disable-next-line jsdoc/require-jsdoc
function getDirectories(path: string) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(pathModule.join(path, file)).isDirectory();
  });
}

const pageFolders = getDirectories(process.cwd() + '/app');

/**
 * @returns Sitemap template.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pageFolders.map(folder => {
    return {
      url: `${origin}/${folder}`,
      lastModified: new Date(),
    };
  });
}
