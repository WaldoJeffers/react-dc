import React from 'react'
import {bool, func, number, oneOfType, string} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  emptySize: number,
  excludedColor: number,
  excludedOpacity: number,
  excludedSize: number,
  existenceAccesor: func,
  highlightedSize: number,
  symbol: oneOfType([func, string]),
  symbolSize: number
})
