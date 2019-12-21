import React from 'react'
import dc from 'dc'
import PropTypes from 'prop-types'
import BaseChart from './base-chart'
import baseMixin from '../mixins/base-mixin'
import capMixin from '../mixins/cap-mixin'
import colorMixin from '../mixins/color-mixin'
import pieMixin from '../mixins/pie-mixin'

const {bool, number, string} = PropTypes

export default
@pieMixin @colorMixin @capMixin @baseMixin
class PieChart extends BaseChart{
  static displayName = 'PieChart'

  componentDidMount(){
    this.chart = dc.pieChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
