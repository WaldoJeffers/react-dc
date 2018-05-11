import React from 'react'
import {any, bool, number, oneOfType} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  elasticX: bool,
  fixedBarHeight: oneOfType([bool, number]),  // true or a Number, but not false
  gap: number,
  labelOffsetX: number,
  labelOffsetY: number,
  x: any, // TO DO instance of d3.quantitative.scale ?
  renderTitleLabel: bool,
  titleLabelOffsetX: number
})
