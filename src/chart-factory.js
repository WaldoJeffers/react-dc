import BaseChart from './base-chart'

export default (type, propTypes) => class DcChart extends BaseChart{
  static displayName = type[0].toUpperCase() + type.substring(1)
  static propTypes = {...BaseChart.propTypes, ...propTypes}

  componentDidMount(){
    this.chart = dc[type]();
  }
}
