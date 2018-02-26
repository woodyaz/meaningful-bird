'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Express) {
  _inherits(App, _Express);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.use((0, _morgan2.default)('combined'));
    _this.use(_bodyParser2.default.json());
    _this.use(function (req, res, next) {
      // Check that the verify_token matches
      if (req.method === 'GET') {
        if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {
          next();
        } else {
          res.status(403).send('Forbidden');
        }
      } else {
        next();
      }
    });

    // Return challenge string if set, otherwise send "ok"
    _this.get('/', function (req, res) {
      if (req.query['hub.challenge']) {
        res.status(200).send(req.query['hub.challenge']);
      } else {
        res.status(200).send('ok');
      }
    });

    _this.post('/', function (req, res) {
      if (req.body.entry) {
        console.log(req.body.entry);
        res.status(200).send('ok');
      }
    });
    return _this;
  }

  return App;
}(_express2.default);

exports.default = App;