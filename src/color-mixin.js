import React from 'react'
import mixinCreator from './mixin-creator'

export default mixinCreator({
  colorAccessor: React.PropTypes.func,
  colorDomain: React.PropTypes.arrayOf(React.PropTypes.string),
  colors: React.PropTypes.func, // TO DO : shape a scale
  linearColors: React.PropTypes.arrayOf(React.PropTypes.number),
  ordinalColors: React.PropTypes.arrayOf(React.PropTypes.string)
})
