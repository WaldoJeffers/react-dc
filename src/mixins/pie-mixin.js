import React from 'react'
import {withProps} from '../utils'

const {bool, number, string} = React.PropTypes

export default withProps({
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
})
