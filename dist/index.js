'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

exports.default = {
  name: 'inline-style',
  hooks: {
    leaf: function leaf(inContext, inProps) {
      var attributes = inProps.attributes,
          children = inProps.children,
          leaf = inProps.leaf;

      if (!leaf.inlineStyle) return null;

      var _useState = (0, _react.useState)(leaf.inlineStyle),
          _useState2 = _slicedToArray(_useState, 2),
          inlineStyle = _useState2[0],
          setInlineStyle = _useState2[1];

      (0, _react.useEffect)(function () {
        setInlineStyle(_extends({}, inlineStyle, leaf.inlineStyle));
      }, [leaf.inlineStyle]);

      return React.createElement(
        'span',
        _extends({}, attributes, { style: inlineStyle }),
        children
      );
    }
  }
};