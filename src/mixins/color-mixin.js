import React from 'react'
import {arrayOf, func, number, string} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  colorAccessor: func,
  colorDomain: arrayOf(string),
  colors: func, // TO DO : shape a scale
  linearColors: arrayOf(number),
  ordinalColors: arrayOf(string)
})
