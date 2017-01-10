import React from 'react'

export default class BaseChart extends React.Component{
  static propTypes = {
    dimension: React.PropTypes.any.isRequired, // TODO
    group: React.PropTypes.any.isRequired // TODO
  }
  render(){
    return <div ref={chart => this.chart = chart}></div>
  }
}
