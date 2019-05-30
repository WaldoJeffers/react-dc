import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import capMixin from '../mixins/cap-mixin'
import colorMixin from '../mixins/color-mixin'
import pieMixin from '../mixins/pie-mixin'

@pieMixin
@colorMixin
@capMixin
@baseMixin
export default class PieChart extends BaseChart{
  static displayName = 'PieChart'

  componentDidMount(){
    this.chart = dc.pieChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
