# slate-plugin-inline-style
> Slate rte plugin for inilne style.

## installation
```bash
npm install -S @jswork/slate-plugin-inline-style
```

## usage
```js
import InlineStyle from '@jswork/slate-plugin-inline-style';

//npm i @jsowrk/react-rte-editor
<Editor plugins=[ InlineStyle ] />

// addMark
context.editor.addMark('inlineStyle', { 
  color: 'red', 
  background: 'green', 
  fontSize:18 
});

// removeMark
context.editor.removeMark('inlineStyle');
```
