const process = require('process');
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFiles([process.cwd() + '/out' + '/404.html'])
  .inputFolders([process.cwd() + '/out'])
  // Rules
  .addRule('titleLengthRule', {min: 10, max: 50})
  .addRule('metaBaseRule', {names: ['description', 'viewport']})
  .addRule('metaSocialRule', {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
    ],
    names: [
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
      'twitter:site',
    ],
  })
  //.addRule(h1TagRule)
  .addRule('imgTagWithAltAttributeRule')
  .addRule('aTagWithRelAttributeRule')
  // Output
  .outputConsole();

// eslint-disable-next-line jsdoc/require-jsdoc
function h1TagRule(dom) {
  return new Promise(async (resolve, reject) => {
    const h1s = dom.window.document.querySelectorAll('h1');

    if (h1s.length === 0) {
      reject('No h1 tag found');
    }

    if (h1s.length > 1) {
      reject('More than one h1 tag found');
    }

    const h1 = h1s[0];
    const text = h1.textContent.trim();

    if (text.length === 0) {
      reject('Empty h1 tag found');
    }

    resolve();
  });
}
