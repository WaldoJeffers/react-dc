import React from 'react'
import {bool, number} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  alwaysUseRounding: bool,
  barPadding: number,
  centerBar: bool,
  gap: number,
  outerPadding: number
})
