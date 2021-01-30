import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxCssText from '@jswork/next-css-text';

export default {
  name: 'inline-style',
  importer: (el, children) => {
    if (el.style.cssText) {
      const value = NxCssText.css2obj(el.style.cssText);
      return jsx('text', { inlineStyle: value }, children);
    }
  },
  // to-html
  exporter: (node, children) => {
    if (!children) {
      if (node.inlineStyle) {
        const value = node.inlineStyle;
        return `<span style="${NxCssText.obj2css(value)}">${node.text}</span>`;
      }
    }
  },
  hooks: {
    leaf: (_, { attributes, children, leaf }) => {
      if (leaf.inlineStyle) {
        const value = leaf.inlineStyle;
        return (
          <span {...attributes} style={value}>
            {children}
          </span>
        );
      }
    }
  }
};
