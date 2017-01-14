import React from 'react'
import {mixinCreator} from '../utils'

const {any, array, func, number, object, oneOf, oneOfType} = React.PropTypes

export default mixinCreator({
  dimension: any.isRequired, // TO DO : crossfilter.dimension
  label: oneOfType([func, array]),
  group: oneOfType([object, array]).isRequired,
  ordering: func,
  title: func,
  width: oneOfType([func, number])
})
