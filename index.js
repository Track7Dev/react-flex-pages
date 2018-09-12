'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flexin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flexin = exports.Flexin = function (_Component) {
  _inherits(Flexin, _Component);

  function Flexin() {
    _classCallCheck(this, Flexin);

    return _possibleConstructorReturn(this, (Flexin.__proto__ || Object.getPrototypeOf(Flexin)).apply(this, arguments));
  }

  _createClass(Flexin, [{
    key: 'createDiv',
    value: function createDiv(options) {
      var className = options.className,
          backgroundColor = options.backgroundColor,
          content = options.content,
          ratio = options.ratio,
          align = options.align,
          scroll = options.scroll;

      var height = ratio[0];
      var width = ratio[1];
      var alignItems = align[0];
      var justifyContent = align[1];
      return _react2.default.createElement(
        'div',
        { className: className ? className : '', style: {
            display: 'flex',
            height: height,
            width: width,
            backgroundColor: backgroundColor,
            justifyContent: justifyContent,
            alignItems: alignItems,
            overflowY: scroll ? 'auto' : 'hidden',
            overflowX: 'hidden'
          } },
        content
      );
    }
  }, {
    key: 'createPage',
    value: function createPage(options) {

      return _react2.default.createElement(
        'div',
        { className: options.className, style: { display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minWidth: 300, position: 'absolute' } },
        options.header && _react2.default.createElement(
          'header',
          { style: { display: 'flex', height: options.header.height || 'auto', justifyContent: options.header.align[0] || '', alignItems: options.header.align[1] || '' } },
          options.header.title
        ),
        _react2.default.createElement(
          'div',
          { style: { overflowY: options.scroll ? 'auto' : '', height: '100%', width: '100%' } },
          options.body
        ),
        options.footer && _react2.default.createElement(
          'footer',
          { style: { height: options.footer.height, display: 'flex', justifyContent: options.footer.align[0] || '', alignItems: options.footer.align[1] || '' } },
          options.footer.title
        )
      );
    }
  }]);

  return Flexin;
}(_react.Component);
