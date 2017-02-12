import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import stackMixin from '../mixins/stack-mixin'

const {arrayOf, bool, instanceOf, number, object, string} = React.PropTypes

@coordinateGridMixin
export default class CompositeChart extends BaseChart{
  static displayName = 'CompositeChart'

  componentDidMount(){
    this.chart = dc.compositeChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
