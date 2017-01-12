import 'dc/dc.min.css'
import RowChart from './src/charts/row-chart'
import React from 'react'



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





// const RowChart = capMixin(chartFactory('rowChart', {
//   elasticX: React.PropTypes.bool,
//   fixedBarHeight: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number]),  // true or a Number, but not false
//   gap: React.PropTypes.number,
//   labelOffsetX: React.PropTypes.number,
//   labelOffsetY: React.PropTypes.number,
//   x: React.PropTypes.any, // TO DO instance of d3.quantitative.scale ?
//   renderTitleLabel: React.PropTypes.bool,
//   titleLabelOffsetX: React.PropTypes.number
// }));

console.log(RowChart.displayName);

// RowChart.propTypes = {
//   elasticX: React.PropTypes.bool,
//   fixedBarHeight: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number]),  // true or a Number, but not false
//   gap: React.PropTypes.number,
//   labelOffsetX: React.PropTypes.number,
//   labelOffsetY: React.PropTypes.number,
//   x: React.PropTypes.any, // TO DO instance of d3.quantitative.scale ?
//   renderTitleLabel: React.PropTypes.bool,
//   titleLabelOffsetX: React.PropTypes.number
// }
//


//const RowChart = colorMixin(RChart);



console.log('RowChart.propTypes', RowChart.propTypes)

export {RowChart}
