import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import scatterMixin from '../mixins/scatter-mixin'

@scatterMixin
@coordinateGridMixin
export default class ScatterPlot extends BaseChart{
  static displayName = 'ScatterPlot'

  componentDidMount(){
    console.log('scatter')
    this.chart = dc.scatterPlot(this.chart)
    this.configure()
    this.chart.render()
  }
}
