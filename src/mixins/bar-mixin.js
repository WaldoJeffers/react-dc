import React from 'react'
import {withProps} from '../utils'

const {bool, number} = React.PropTypes

export default withProps({
  alwaysUseRounding: bool,
  barPadding: number,
  centerBar: bool,
  gap: number,
  outerPadding: number
})
