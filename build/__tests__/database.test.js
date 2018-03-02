'use strict';

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Database', function () {
  var database = new _database2.default();
  var post = { url: 'someUrl' };
  describe('savePostInfo()', function () {
    it('saves post data', function () {
      expect(database.save('123', post)).toBe('123 saved.');
    });
  });
  describe('findById()', function () {
    it('gets post by Id', function () {
      database.save('234', post);
      expect(database.findById('234')).toBe(post);
    });
  });
});