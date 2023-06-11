'use client';

(function () {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://yourdomain.com/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
})();
