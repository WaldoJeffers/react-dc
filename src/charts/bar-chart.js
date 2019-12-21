import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import stackMixin from '../mixins/stack-mixin'
import barMixin from '../mixins/bar-mixin'

export default
@barMixin @stackMixin @coordinateGridMixin
class BarChart extends BaseChart{
  static displayName = 'BarChart'

  componentDidMount(){
    this.chart = dc.barChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
