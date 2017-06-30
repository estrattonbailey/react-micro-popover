import React from 'react'
import {
  unstable_renderSubtreeIntoContainer as renderToPortal,
  unmountComponentAtNode,
  findDOMNode
} from 'react-dom'

import Pop from 'micro-popover'

export default class Popover extends React.Component {
  constructor (props) {
    super(props)

    this.actions = {
      pin: this.pin.bind(this),
      unpin: this.unpin.bind(this),
      toggle: this.toggle.bind(this)
    }
  }

  componentDidMount () {
    const {
      render: Render,
      position = 'bottom',
      transitionSpeed = 0
    } = this.props

    this.mount = document.createElement('div')

    renderToPortal(this, <Render {...this.actions} />, this.mount)

    this.popover = new Pop({
      target: findDOMNode(this),
      popover: this.mount,
      position,
      transitionSpeed
    })
  }

  componentWillUnmount () {
    unmountComponentAtNode(this.mount)
  }

  toggle () {
    this.popover.toggle()
  }

  pin () {
    this.popover.pin()
  }

  unpin (force) {
    this.popover.unpin(force)
  }

  render () {
    return this.props.children(this.actions)
  }
}
