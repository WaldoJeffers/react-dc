import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {bool, number} = PropTypes

export default withProps({
  alwaysUseRounding: bool,
  barPadding: number,
  centerBar: bool,
  gap: number,
  outerPadding: number
})
