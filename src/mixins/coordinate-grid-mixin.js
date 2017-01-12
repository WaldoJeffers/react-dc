import React from 'react'
import mixinCreator from './mixin-creator'

const {arrayOf, bool, func, instanceOf, number, oneOfType, shape, string} = React.PropTypes

export default mixinCreator({
  brushOn: bool,
  clipPadding: React.PropTypes.numb,
  elasticX: bool,
  elasticY: bool,
  focus: arrayOf(number),
  mouseZoomable: bool,
  //rangeChart??????
  renderHorizontalGridLines: bool,
  renderVerticalGridLines: bool,
  round: func,
  useRightYAxis: bool,
  x: any, // TO DO : any d3 quantitive scale or ordinal scale
  xAxisLabel: ({
    labelText: string,
    padding: number
  }),
  xAxisPadding: oneOfType(number, string),
  xAxisUnit: string,
  y: any, // TO DO : d3 scale
  xUnits: func,
  yAxisLabel: shape({
    labelText: string,
    padding: number
  }),
  yAxisPadding: oneOfType(number, string),
  zoomOutRestrict: bool,
  zoomScale: oneOfType(arrayOf(number), arrayOf(instanceOf(Date)))
})
