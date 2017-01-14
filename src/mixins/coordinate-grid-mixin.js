import React from 'react'
import {compose, mixinCreator} from '../utils'
import colorMixin from './color-mixin'
import marginMixin from './margin-mixin'
import baseMixin from './base-mixin'
import d3 from 'd3'
console.log(Object.keys(d3.svg.axis()))

const {any, array, arrayOf, bool, func, instanceOf, number, oneOfType, shape, string} = React.PropTypes

const coordinateGridMixin = mixinCreator({
  brushOn: bool,
  clipPadding: number,
  elasticX: bool,
  elasticY: bool,
  focus: arrayOf(number),
  mouseZoomable: bool,
  //rangeChart??????
  renderHorizontalGridLines: bool,
  renderVerticalGridLines: bool,
  round: func,
  useRightYAxis: bool,
  x: any.isRequired, // TO DO : any d3 quantitive scale or ordinal scale
  xAxis: shape({
    orient: string,
    ticks: array,
    tickValues: arrayOf(oneOfType([number, string, Date])),
    tickSize: arrayOf(number),
    innerTickSize: number,
    outerTickSize: number,
    tickPadding: number,
    tickFormat: func
  }),
  xAxisLabel: shape({
    labelText: string,
    padding: number
  }),
  xAxisPadding: oneOfType([number, string]),
  xAxisUnit: string,
  y: any, // TO DO : d3 scale
  xUnits: func,
  yAxisLabel: shape({
    labelText: string,
    padding: number
  }),
  yAxisPadding: oneOfType([number, string]),
  zoomOutRestrict: bool,
  zoomScale: oneOfType([arrayOf(number), arrayOf(instanceOf(Date))])
})

export default compose(coordinateGridMixin, colorMixin, marginMixin, baseMixin)
