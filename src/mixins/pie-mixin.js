import React from 'react'
import {bool, number, string} from 'prop-types'
import {withProps} from '../utils'

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
