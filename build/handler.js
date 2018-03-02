'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hander = function Hander() {
  _classCallCheck(this, Hander);

  this.subKeyword = '+' + (process.env.SUB_KEYWORD || 'mb');
};

exports.default = Hander;