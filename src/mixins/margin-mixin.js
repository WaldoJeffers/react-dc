import React from 'react'
import {shape, number} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  margins: shape({
    left: number.isRequired,
    right: number.isRequired,
    top: number.isRequired,
    bottom: number.isRequired
  })
})
