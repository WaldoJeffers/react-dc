import React from 'react'

export default (propTypes) => (Component) => class extends React.Component{
  static propTypes = {...Component.propTypes, ...propTypes}
  render(){
    return <Component {...this.props} />
  }
}
