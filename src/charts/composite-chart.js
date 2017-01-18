import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import stackMixin from '../mixins/stack-mixin'

const {arrayOf, bool, instanceOf, number, object, string} = React.PropTypes

@coordinateGridMixin
export default class CompositeChart extends BaseChart{
  static displayName = 'CompositeChart'

  static propTypes = {
    alignYAxes: bool,
    childOptions: object,
    compose: arrayOf(instanceOf(BaseChart)),
    rightY: object,
    rightXAxis: object,
    rightXAxisLabel: {
      propTypes: oneOfType([string, shape({
        rightXAxisLabel: string.isRequired,
        padding: number.isRequired
      })]),
      setter(method, val){
        if (val.rightXAxisLabel && val.padding){
          method(val.rightXAxisLabel, val.padding)
        }else{
          method(val)
        }
      }
    },
    shareColors: bool,
    shareTitle: bool,
    useRightAxisGridLines: bool
  }

  componentDidMount(){
    this.chart = dc.compositeChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
