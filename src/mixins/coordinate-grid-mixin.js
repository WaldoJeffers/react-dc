import React from 'react'
import {compose, withProps} from '../utils'
import colorMixin from './color-mixin'
import marginMixin from './margin-mixin'
import baseMixin from './base-mixin'

const {any, array, arrayOf, bool, func, instanceOf, number, oneOfType, shape, string} = React.PropTypes

const coordinateGridMixin = withProps({
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
  xAxis: {
    propTypes: shape({
      orient: string,
      ticks: array,
      tickValues: arrayOf(oneOfType([number, string, Date])),
      tickSize: arrayOf(number),
      innerTickSize: number,
      outerTickSize: number,
      tickPadding: number,
      tickFormat: func
    }),
    setter(method, val){
      Object.entries(val).forEach(([key, value]) => method()[key](value))
    }
  },
  xAxisLabel: {
    propTypes: oneOfType([string, shape({
      labelText: string.isRequired,
      padding: number.isRequired
    })]),
    setter(method, val){
      if (val.labelText && val.padding){
        method(val.labelText, val.padding)
      }else{
        method(val)
      }
    }
  },
  xAxisPadding: oneOfType([number, string]),
  xAxisUnit: string,
  y: any, // TO DO : d3 scale
  xUnits: func,
  yAxis: {
    propTypes: shape({
      orient: string,
      ticks: array,
      tickValues: arrayOf(oneOfType([number, string, Date])),
      tickSize: arrayOf(number),
      innerTickSize: number,
      outerTickSize: number,
      tickPadding: number,
      tickFormat: func
    }),
    setter(method, val){
      Object.entries(val).forEach(([key, value]) => method()[key](value))
    }
  },
  yAxisLabel:  {
    propTypes: oneOfType([string, shape({
      labelText: string.isRequired,
      padding: number.isRequired
    })]),
    setter(method, val){
      if (val.labelText && val.padding){
        method(val.labelText, val.padding)
      }else{
        method(val)
      }
    }
  },
  yAxisPadding: oneOfType([number, string]),
  zoomOutRestrict: bool,
  zoomScale: oneOfType([arrayOf(number), arrayOf(instanceOf(Date))])
})

export default compose(coordinateGridMixin, colorMixin, marginMixin, baseMixin)
