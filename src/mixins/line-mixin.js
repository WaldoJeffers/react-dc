import React from 'react'
import {arrayOf, bool, func, number, oneOfType, shape, string} from 'prop-types'
import {withProps} from '../utils'


export default withProps({
  dashStyle: arrayOf(number),
  defined: func,
  dotRaidus: number,
  interpolate: string,
  renderArea: bool,
  renderDataPoints : oneOfType([
    bool,
    shape({
      fillOpacity: number,
      strokeOpacity: number,
      radius: number
    })
  ]),
  tension: number,
  xyTipsOn: bool
})
