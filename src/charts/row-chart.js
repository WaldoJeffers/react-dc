import React from 'react'
import dc from 'dc'
import BaseChart from './base-chart'
import marginMixin from '../mixins/margin-mixin'
import capMixin from '../mixins/cap-mixin'
import colorMixin from '../mixins/color-mixin'


@colorMixin
@capMixin
@marginMixin
export default class RowChart extends BaseChart{
  static displayName = 'RowChart'
  static propTypes = {
    ...BaseChart.propTypes,
    elasticX: React.PropTypes.bool,
    fixedBarHeight: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number]),  // true or a Number, but not false
    gap: React.PropTypes.number,
    labelOffsetX: React.PropTypes.number,
    labelOffsetY: React.PropTypes.number,
    x: React.PropTypes.any, // TO DO instance of d3.quantitative.scale ?
    renderTitleLabel: React.PropTypes.bool,
    titleLabelOffsetX: React.PropTypes.number
  }
  componentDidMount(){
    this.chart = dc.rowChart(this.chart)
    this.configure()
    this.chart.render()
  }
}
