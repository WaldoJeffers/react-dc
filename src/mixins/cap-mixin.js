import React from 'react'
import {func, bool, number, oneOfType, string} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  cap: number,
  othersGrouper: oneOfType([func, bool]), // disallow true ! only false is accepted
  othersLabel: string
})
