# react-micro-popover
A tiny, fast, configurable popover, built with [micro-popover](https://github.com/estrattonbailey/micro-popover). [Demo](http://estrattonbailey.com/react-micro-popover/) 🍻

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Usage
```javascript
import Popover from 'react-micro-popover'

const MyPopover = props => (
  <h5>This is a popover!</h5>
)

const App = props => (
  <Popover render={MyPopover} position={'bottom'} transitionSpeed={200}>
    {({ pin, unpin }) => {
      return <button className="button" onClick={e => pin()}>Trigger Popover</button>
    }}
  </Popover>
)
```

Required CSS:
```css
.micro-popover {
  position: absolute;
  z-index: 9999;
  top: 0; left: 0;
}
```

MIT License
