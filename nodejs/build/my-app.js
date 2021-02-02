/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {

console.log('Start math.js');

function square(num) {
    return num * num;
}

exports.square = square;
exports.var1 = 123;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var arr = __webpack_require__(3);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.getRandomJoke = function () {
    var i = randomNumber(0, arr.length - 1);
    return arr[i].joke;
};


/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("[{\"joke\":\"A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.\"},{\"joke\":\"If doctors were like software engineers, they would say things like “Have you tried killing yourself and being reborn?\"},{\"joke\":\"I would love to change the world, but they won’t give me the source code.\"}]");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
console.log('Before require');

const math = __webpack_require__(1);
const devJokes = __webpack_require__(2);

console.log('After require');

console.log('Square is: ' + math.square(3));
console.log('Var1: ' + math.var1);

console.log('Joke: ' + devJokes.getRandomJoke());

})();

/******/ })()
;