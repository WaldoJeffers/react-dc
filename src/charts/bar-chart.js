import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import coordinateGridMixin from '../mixins/coordinate-grid-mixin'
import stackMixin from '../mixins/stack-mixin'

const {bool, number} = React.PropTypes

@stackMixin
@coordinateGridMixin
export default class BarChart extends BaseChart{
  static displayName = 'BarChart'

  static propTypes = {
    alwaysUseRounding: bool,
    barPadding: number,
    centerBar: bool,
    gap: number,
    outerPadding: number
  }

  componentDidMount(){
    this.chart = dc.barChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
