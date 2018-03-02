'use strict';

var _handler = require('../handler');

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database = {
  save: jest.fn()
};

describe('Handler', function () {
  return [it('sets subKeyword by env var', function () {
    process.env.SUB_KEYWORD = 'follow';
    var handler = new _handler2.default();
    expect(handler.subKeyword).toBe('+follow');
  }), it('has default subKeyword', function () {
    delete process.env.SUB_KEYWORD;
    var handler = new _handler2.default();
    expect(handler.subKeyword).toBe('+mb');
  }), describe('comment()', function () {
    it('calls database.save on match', function () {});
  })];
});