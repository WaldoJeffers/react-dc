import React from 'react'

export default class BaseChart extends React.Component{
  configure(){
    Object.keys(this.props).forEach(prop => {
      if (this.constructor.propTypes[prop]){
        this.chart[prop](this.props[prop])
      }
    })
  }

  render(){
    return <div ref={chart => this.chart = chart}></div>
  }
}
