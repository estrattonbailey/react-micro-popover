import React from 'react'
import {
  unstable_renderSubtreeIntoContainer as renderToPortal,
  unmountComponentAtNode,
  findDOMNode
} from 'react-dom'

import Pop from 'micro-popover'

export default class Popover extends React.Component {
  componentDidMount () {
    const {
      render: Render,
      position = 'bottom',
      transitionSpeed = 0
    } = this.props

    this.mount = document.createElement('div')

    renderToPortal(this, <Render />, this.mount)

    this.popover = new Pop({
      target: findDOMNode(this),
      popover: this.mount,
      position,
      transitionSpeed
    })
  }

  pin () {
    this.popover.pin()
  }

  unpin () {
    this.popover.unpin()
  }

  componentWillUnmount () {
    unmountComponentAtNode(this.mount)
  }

  render () {
    return this.props.children({
      pin: this.pin.bind(this),
      unpin: this.unpin.bind(this)
    })
  }
}
