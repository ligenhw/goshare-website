/* eslint-disable import/no-mutable-exports, global-require */

import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-tsx';

let styleNode = {};
let lightTheme;
let darkTheme;

if (process.browser) {
  darkTheme = require('prismjs/themes/prism-okaidia.css');
  lightTheme = require('prismjs/themes/prism.css');

  styleNode = document.createElement('style');
  styleNode.setAttribute('data-prism', 'true');
  document.head.appendChild(styleNode);
}

export { lightTheme, darkTheme };

export function setPrismTheme(theme) {
  styleNode.textContent = theme;
}

export default prism;
