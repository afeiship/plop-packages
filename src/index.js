const STYLE = { fontWeight: 800 };

export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    switch (inProps.mark.type) {
      case 'bold':
        return <span style={STYLE}>{children}</span>;
      default:
        return inNext();
    }
  }
};
