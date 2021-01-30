'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextCssText = require('@jswork/next-css-text');

var _nextCssText2 = _interopRequireDefault(_nextCssText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'inline-style',
  importer: function importer(el, children) {
    if (el.style.cssText) {
      var value = _nextCssText2.default.css2obj(el.style.cssText);
      return (0, _slateHyperscript.jsx)('text', { inlineStyle: value }, children);
    }
  },
  // to-html
  exporter: function exporter(node, children) {
    if (!children) {
      if (node.inlineStyle) {
        var value = node.inlineStyle;
        return '<span style="' + _nextCssText2.default.obj2css(value) + '">' + node.text + '</span>';
      }
    }
  },
  hooks: {
    leaf: function leaf(_, _ref) {
      var attributes = _ref.attributes,
          children = _ref.children,
          _leaf = _ref.leaf;

      if (_leaf.inlineStyle) {
        var value = _leaf.inlineStyle;
        return _react2.default.createElement(
          'span',
          _extends({}, attributes, { style: value }),
          children
        );
      }
    }
  }
};