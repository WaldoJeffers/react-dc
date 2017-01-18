import React from 'react'
import {withProps} from '../utils'

const {func, bool, number, oneOfType, string} = React.PropTypes

export default withProps({
  cap: number,
  othersGrouper: oneOfType([func, bool]), // disallow true ! only false is accepted
  othersLabel: string
})
