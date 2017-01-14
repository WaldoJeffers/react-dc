import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import capMixin from '../mixins/cap-mixin'
import colorMixin from '../mixins/color-mixin'

const {bool, number, string} = React.PropTypes

@colorMixin
@capMixin
@baseMixin
export default class PieChart extends BaseChart{
  static displayName = 'PieChart'

  static propTypes = {
    cx: number,
    cy: number,
    drawPaths: bool,
    emptyTitle: string,
    externalLabels: number,
    externalRadiusPadding: number,
    innerRadius: number,
    minAngleForLabel: number,
    radius: number,
    slicesCap: number
  }

  componentDidMount(){
    this.chart = dc.pieChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
