import React from 'react'
import PropTypes from 'prop-types'
import withProps from '../utils.js'

const {arrayOf, bool, object, oneOfType, shape, string} = PropTypes

export default withProps({
  alignYAxes: bool,
  childOptions: object,
  compose: arrayOf(instanceOf(BaseChart)),
  rightY: object,
  rightXAxis: object,
  rightXAxisLabel: {
    propTypes: oneOfType([string, shape({
      rightXAxisLabel: string.isRequired,
      padding: number.isRequired
    })]),
    setter(method, val){
      if (val.rightXAxisLabel && val.padding){
        method(val.rightXAxisLabel, val.padding)
      }else{
        method(val)
      }
    }
  },
  shareColors: bool,
  shareTitle: bool,
  useRightAxisGridLines: bool
})
