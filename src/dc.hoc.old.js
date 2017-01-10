import React from 'react'

export default class DcHoc extends React.Component{
  componentDidMount(){
    Object.entries(this.props).forEach(([prop, val]) => {
      if (this.constructor.propTypes[prop]){
        console.log('ok', prop, val)
        this.chart[prop](val)
      }
    })
  }

  render(){
    const children = React.cloneElement(this.props.children, {
      ref: (children) => this.chart = children.chart
    })
    return children;
  }
}
