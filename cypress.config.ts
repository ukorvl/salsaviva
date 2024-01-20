import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    // eslint-disable-next-line jsdoc/require-jsdoc
    setupNodeEvents(on) {
      on('task', {
        accessibilityChecker: require('cypress-accessibility-checker/plugin'),
      });
    },
  },
});
