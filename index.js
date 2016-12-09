import React from 'react'
import dc from 'dc'
import crossfilter from 'crossfilter2'
import 'dc/dc.min.css'

class BaseChart extends React.Component{
  componentDidMount(){
    this.chart = dc[this.props.type](this.element)
    this.chart
      .dimension(this.props.dimension)
      .group(this.props.group);

    console.log('baseChartDidMount');
  }
  render(){
    return <div ref={element => this.element = element}></div>
  }
}

BaseChart.propTypes = {
  dimension: React.PropTypes.any.isRequired, // TODO
  group: React.PropTypes.any.isRequired, // TODO
  type: React.PropTypes.oneOf(['barChart', 'rowChart']).isRequired
}

/*export class BarChart extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    console.log('componentDidMount !', this.element)
  }

  render(){
    return <BaseChart ref={element => this.element = element} />;
  }
}*/

export class CoordinateGridMixin extends React.Component{
  componentDidMount(){
    this.chart.x(this.props.x)
  }

  render(){
    const children = React.cloneElement(this.props.children, {
      ref: (baseChart) => this.chart = baseChart.chart
    })
    return children;
  }
}

CoordinateGridMixin.propTypes = {
  x: React.PropTypes.any.isRequired
}

export class BarChart extends React.Component{
  componentDidMount(){
    this.chart.render();
  }

  render(){
    return (
      <CoordinateGridMixin {...this.props} ref={coordinateGridMixin => this.chart = coordinateGridMixin.chart}>
        <BaseChart type="barChart" {...this.props} />
      </CoordinateGridMixin>
    )
  }
}

export class RowChart extends React.Component{
  componentDidMount(){
    this.chart.render();
  }

  render(){
    return (
      <BaseChart type="rowChart" {...this.props} ref={coordinateGridMixin => this.chart = coordinateGridMixin.chart} />
    )
  }
}
