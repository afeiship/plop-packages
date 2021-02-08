'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

var _nextCssText = require('@jswork/next-css-text');

var _nextCssText2 = _interopRequireDefault(_nextCssText);

var _nextIsBlockElement = require('@jswork/next-is-block-element');

var _nextIsBlockElement2 = _interopRequireDefault(_nextIsBlockElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @usage:
 * Transforms.setNodes(editor, { type:'default' })
 *
 * 注意这里的 style处理，所有的 block 元素，都有可能被直接设置 style;
 * input/output 都需要针对style写一些代码
 */

exports.default = _nextSlatePlugin2.default.define({
  id: 'default',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      if ((0, _nextIsBlockElement2.default)(el)) {
        var css = el.style.cssText;
        return (0, _slateHyperscript.jsx)('element', { type: 'default', style: _nextCssText2.default.css2obj(css) }, children);
      }
    },
    output: function output(node, children) {
      var style = node.style;

      return '<div' + style + ' class=\'react-rte__default\'>' + children + '</div>';
    }
  },
  render: function render(_, _ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        element = _ref2.element;

    return _react2.default.createElement(
      'div',
      _extends({ className: 'react-rte__default' }, attributes),
      children
    );
  }
});