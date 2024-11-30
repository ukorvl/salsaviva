// eslint-disable-next-line jsdoc/require-param
export function removeSelectionBg({addBase}: {addBase: Function}) {
  addBase({
    'input:-webkit-autofill': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important;',
    },
    'textarea:-webkit-autofill': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important;',
    },
    'input:-webkit-autofill:focus': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important;',
    },
    'textarea:-webkit-autofill:focus': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important;',
    },
  });
}
