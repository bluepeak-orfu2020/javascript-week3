const text = require('./text');
require('./styles.css');

const header = document.querySelector('.header');

header.textContent = text.importenize(header.textContent);
