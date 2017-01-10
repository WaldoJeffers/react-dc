import React from 'react'


export default const DcHOC = (WrappedComponent) => class DcWrapper extends React.Component{
  componentDidMount(){
    Object.entries(this.props).forEach(([prop, val]) => {
      if (this.constructor.propTypes[prop]){
        this.chart[prop](val)
      }
    })
  }

  render(){
    <WrappedComponent ref={wrappedComponent => this.chart = wrappedComponent.chart} />
  }
}
