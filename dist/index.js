/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/variables.js":
/*!*****************************!*\
  !*** ./src/js/variables.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DISABLED_VALUES": function() { return /* binding */ DISABLED_VALUES; },
/* harmony export */   "DISLAKED_FOOD": function() { return /* binding */ DISLAKED_FOOD; },
/* harmony export */   "PRODUCT_BUY": function() { return /* binding */ PRODUCT_BUY; },
/* harmony export */   "PRODUCT_DESCRIPTION": function() { return /* binding */ PRODUCT_DESCRIPTION; },
/* harmony export */   "SELECTED_VALUES": function() { return /* binding */ SELECTED_VALUES; }
/* harmony export */ });
var DISABLED_VALUES = {
  0: 'Печалька, с фуа-гра закончился.',
  1: 'Печалька, с рыбой закончился.',
  2: 'Печалька, с курой закончился.'
};
var SELECTED_VALUES = {
  0: 'Печень утки разварная с артишоками.',
  1: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  2: 'Филе из цыплят с трюфелями в бульоне.'
};
var DISLAKED_FOOD = 'Котэ не одобряет?';
var PRODUCT_BUY = "\u0427\u0435\u0433\u043E \u0441\u0438\u0434\u0438\u0448\u044C? \u041F\u043E\u0440\u0430\u0434\u0443\u0439 \u043A\u043E\u0442\u044D, <a href=\"#\" class=\"product-item__buy\">\u043A\u0443\u043F\u0438.</a>";
var PRODUCT_DESCRIPTION = 'Сказочное заморское яство';


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _js_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/variables.js */ "./src/js/variables.js");


var productItems = document.querySelectorAll('.product-item');
var productItemCards = document.querySelectorAll('.product-item__card');
var productDescription = document.querySelectorAll('.product-item__description');
var productQuestions = document.querySelectorAll('.product-item__question');
var productBuy = document.getElementsByClassName('product-item__buy');
productBuy = Array.from(productBuy);

function productBuyFunction(productBuy) {
  var _loop = function _loop(i) {
    productBuy[i].addEventListener('click', function (evt) {
      productQuestions[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.SELECTED_VALUES[i];
      productItems[i].classList.add('selected');
    });
  };

  for (var i = 0; i < productBuy.length; i++) {
    _loop(i);
  }
}

;

var _loop2 = function _loop2(i) {
  if (productItems[i].classList.contains('disabled')) {
    productQuestions[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.DISABLED_VALUES[i];
  }

  if (productItems[i].classList.contains('selected')) {
    productQuestions[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.SELECTED_VALUES[i];
  }

  ;
  productItemCards[i].addEventListener('mouseover', function (evt) {
    evt.preventDefault();

    if (productItems[i].classList.contains('selected') === true) {
      productItemCards[i].addEventListener('mouseout', function (evt) {
        if (productItems[i].classList.contains('selected') === true) {
          evt.preventDefault();
          productDescription[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.DISLAKED_FOOD;
        } else {
          productItemCards[i].addEventListener('mouseout', function () {
            productDescription[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_DESCRIPTION;
          });
        }
      });
    }
  });
  productItemCards[i].addEventListener('click', function (evt) {
    if (productItems[i].classList.contains('disabled')) {
      evt.preventDefault();
    } else if (productItems[i].classList.contains('selected')) {
      evt.preventDefault();
      productDescription[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_DESCRIPTION;
      productQuestions[i].innerHTML = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_BUY;
      productBuy = document.getElementsByClassName('product-item__buy');
      productBuy = Array.from(productBuy);
      productBuyFunction(productBuy);
      productItems[i].classList.remove('selected');
    } else {
      productItems[i].classList.add('selected');
      productQuestions[i].textContent = _js_variables_js__WEBPACK_IMPORTED_MODULE_1__.SELECTED_VALUES[i];
    }
  });
  productBuyFunction(productBuy);
};

for (var i = 0; i < productItemCards.length; i++) {
  _loop2(i);
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map