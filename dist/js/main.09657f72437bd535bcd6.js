/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myesmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myesmodule */ "./src/js/myesmodule.js");
// import $ from 'jquery';


console.log(_myesmodule__WEBPACK_IMPORTED_MODULE_0__["default"]);
// console.log(mynodemodule);
// console.log($);


// Test parameter from .env file:
// console.log(process.env.TEST);

// Test global variable from webpack.DefinePlugin:
// console.log(some.var);

const toggleMobileNavigation = document.getElementById('navPanelToggle');
const navPanel = document.getElementById('navPanel');

if (navPanel) {
  navPanel.style.display = 'block';
}

if (toggleMobileNavigation) {
  window.addEventListener('click', function(e) {
    if (toggleMobileNavigation.contains(e.target)) {
      e.preventDefault();
      document.body.classList.toggle('navPanel-visible');
    } else {
      if (document.body.classList.contains('navPanel-visible')) {
        document.body.classList.remove('navPanel-visible');
      }
    }
  });
}

// const showMoreBtn = document.querySelector('#intro .actions a');

// if (showMoreBtn) {
//   console.log("Found Show More BTN!");
//   showMoreBtn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("Click Show More BTN!!!");
//   });
// }

const introContainer = document.getElementById('intro');

function onPageScroll() {
  if (window.scrollY > 50) {
    if (introContainer) {
      introContainer.classList.add('hidden');
    }
    if (toggleMobileNavigation) {
      toggleMobileNavigation.classList.add('alt');
    }
  } else {
    if (introContainer) {
      introContainer.classList.remove('hidden');
    }
    if (toggleMobileNavigation) {
      toggleMobileNavigation.classList.remove('alt');
    }
  }
}

document.addEventListener('scroll', onPageScroll);

setTimeout(() => {
  document.body.classList.remove('is-preload');
}, 100);

/***/ }),

/***/ "./src/js/myesmodule.js":
/*!******************************!*\
  !*** ./src/js/myesmodule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ES6 Module example
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Ich bin ein ES6 Modul");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ "./src/js/index.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");




})();

/******/ })()
;