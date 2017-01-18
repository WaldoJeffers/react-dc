import React from 'react'

export default class BaseChart extends React.Component{
  render(){
    return <div ref={chart => this.chart = chart}></div>
  }
}
