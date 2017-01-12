import React from 'react'

export default (propTypes) => (Component) => class extends Component{
  static propTypes = {...Component.propTypes, ...propTypes}
}
