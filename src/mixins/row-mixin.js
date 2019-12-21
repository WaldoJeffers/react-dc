import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {any, bool, number, oneOfType} = PropTypes

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
