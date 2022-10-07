/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Classes/Quran.js":
/*!******************************!*\
  !*** ./src/Classes/Quran.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Quran\": () => (/* binding */ Quran)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './quran.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\nfunction Quran()\r\n{\r\n    this.Sourahs = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './quran.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\r\n    this.sourahsIndex = []\r\n    let i = 0\r\n    //----------------------------------------------------------------------\r\n    this.Sourahs.forEach(sourah => {\r\n        this.sourahsIndex.push(sourah.name)\r\n        i++\r\n    })\r\n    const sourahMap = new Map()\r\n    for(let i = 0 ; i < 100 ; i++)\r\n    {\r\n        sourahMap.set(this.sourahsIndex[i], i)\r\n    }\r\n    //----------------------------------------------------------------------\r\n    //console.log(this.sourahsIndex)\r\n    this.getSourah = function(name)\r\n    {\r\n        return this.Sourahs[sourahMap.get(name)];\r\n    };\r\n};\n\n//# sourceURL=webpack://quran/./src/Classes/Quran.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Quran__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Quran */ \"./src/Classes/Quran.js\");\n\r\n\r\n//let quranJSON = require('./quran.json')\r\n\r\nlet quran = new _Classes_Quran__WEBPACK_IMPORTED_MODULE_0__.Quran;\r\n\r\nconsole.log(quran.getSourah('الفاتحة'))\r\nlet body = document.querySelector('body')\r\nlet name = 'الأعلى'\r\nfor(let i = 0 ; i < quran.getSourah(name).verses.length ; i++){\r\n    let h3 = document.createElement('h3')\r\n    body.appendChild(h3)\r\n    h3.textContent = quran.getSourah(name).verses[i].text + `{${quran.getSourah(name).verses[i].id}}`\r\n}\n\n//# sourceURL=webpack://quran/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;