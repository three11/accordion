(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Accordion = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var Accordion = /*#__PURE__*/function () {
    /**
     * Create a new Accordion instance
     *
     * @param  {Object} el DOM Element
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

  _exports["default"] = Accordion;
});
