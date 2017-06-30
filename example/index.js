import React from 'react'
import { render } from 'react-dom'

import Popover from '../package/dist/index.js'

class MyPopover extends React.Component {
  constructor (props, context) {
    super(props, context)

    console.log(context)
  }

  render () {
    return (
      <div className="my-popover bottom">
        <h5 className="mv0">Hello world!</h5>
      </div>
    )
  }
}
MyPopover.contextTypes = {
  test: React.PropTypes.string
}


class Provider extends React.Component {
  getChildContext () {
    return {
      test: 'Context works!'
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}
Provider.childContextTypes = {
  test: React.PropTypes.string
}


const App = props => (
  <Provider>
    <div className="outer flex flex-items-center flex-justify-center">

      <Popover render={MyPopover} transitionSpeed={200}>
        {props => {
          return <button className="button" onClick={e => props.toggle()}>I have a popover</button>
        }}
      </Popover>

    </div>
  </Provider>
)

render(<App/>, document.getElementById('root'))
