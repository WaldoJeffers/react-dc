import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {shape, number} = PropTypes

export default withProps({
  margins: shape({
    left: number.isRequired,
    right: number.isRequired,
    top: number.isRequired,
    bottom: number.isRequired
  })
})
