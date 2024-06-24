const process = require('process');
const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .ignoreFiles([process.cwd() + '/out' + '/404.html'])
  .inputFolders([process.cwd() + '/out'])
  .useRule('titleLengthRule', {min: 1, max: 50})
  .useRule('metaBaseRule', {names: ['description', 'viewport']})
  .useRule('metaSocialRule', {
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
  .useRule('aTagWithRelAttributeRule')
  .addRule(h1TagRule)
  .addRule(imgTagWithAltAttributeRule)
  // Output
  .outputConsole()
  .run();

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

// eslint-disable-next-line jsdoc/require-jsdoc
function imgTagWithAltAttributeRule(dom) {
  return new Promise(resolve => {
    let countAlt = 0;
    let countSrc = 0;
    const report = [];
    const elements = dom.window.document.querySelectorAll('img');

    elements.forEach(element => {
      if (element.alt === undefined) {
        countAlt++;
      }
      if (!element.src) {
        countSrc++;
      }
    });

    if (countSrc > 0) {
      report.push(`There are ${countSrc} <img> tags without a src attribute`);
    }

    if (countAlt > 0) {
      report.push(`There are ${countAlt} <img> tags without an alt attribute`);
    }
    resolve(report);
  });
}
