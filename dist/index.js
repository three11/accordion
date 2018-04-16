(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Accordion"] = factory();
	else
		root["Accordion"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion =
/*#__PURE__*/
function () {
  /**
   * Create a new Accordion instance
   *
   * @param  {Object} el DOM Element
   *
   * @return {Object}    Accordion instance
   */
  function Accordion(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Accordion);

    this.settings = _objectSpread({
      headSelector: '[data-title]',
      bodySelector: '[data-content]',
      hiddenClass: 'is--hidden',
      activeClass: 'is--active'
    }, options);
    this.el = el;
    this.head = this.el.querySelector(this.settings.headSelector);
    this.body = this.el.querySelector(this.settings.bodySelector);
    this.isOpen = false;
    this.height = 0;
    this.bind().close();
    return this;
  }
  /**
   * Bind event listeners
   *
   * @return {Object}    Accordion instance
   */


  _createClass(Accordion, [{
    key: "bind",
    value: function bind() {
      var _this = this;

      this.head.addEventListener('click', this.toggle.bind(this));
      this.body.addEventListener('transitionend', function () {
        if (!_this.isOpen) {
          _this.el.classList.add(_this.settings.hiddenClass);
        }
      });
      return this;
    }
    /**
     * Set instance's height
     *
     * @param {Number} n
     *
     * @return {Object}    Accordion instance
     */

  }, {
    key: "setHeight",
    value: function setHeight(n) {
      var _this2 = this;

      setTimeout(function () {
        _this2.body.style.maxHeight = "".concat(n, "px");
      }, 1);
      return this;
    }
    /**
     * Toggle state
     *
     * @return {Object}    Accordion instance
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.height = this.body.scrollHeight;

      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }

      return this;
    }
    /**
     * Close the accordion
     *
     * @return {Object}    Accordion instance
     */

  }, {
    key: "close",
    value: function close() {
      this.isOpen = false;
      this.el.classList.remove(this.settings.activeClass);
      this.body.style.maxHeight = "".concat(this.height, "px");
      this.setHeight(0);
      return this;
    }
    /**
     * Open the accordion
     *
     * @return {Object}    Accordion instance
     */

  }, {
    key: "open",
    value: function open() {
      this.isOpen = true;
      this.el.classList.add(this.settings.activeClass);
      this.el.classList.remove(this.settings.hiddenClass);
      this.body.style.maxHeight = "".concat(0, "px");
      this.setHeight(this.height);
      return this;
    }
  }]);

  return Accordion;
}();

exports.default = Accordion;

/***/ })
/******/ ])["default"];
});