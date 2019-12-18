import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {arrayOf, func, number, string} = PropTypes

export default withProps({
  colorAccessor: func,
  colorDomain: arrayOf(string),
  colors: func, // TO DO : shape a scale
  linearColors: arrayOf(number),
  ordinalColors: arrayOf(string)
})
