import React from 'react'
import dc from 'dc'
import CompositeChart from './composite-chart'
import seriesMixin from '../mixins/series-mixin'

export default
@seriesMixin
class SeriesChart extends CompositeChart{
  static displayName = 'SeriesChart'

  componentDidMount(){
    this.chart = dc.seriesChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
