import React from 'react'
import {mixinCreator} from '../utils'

const {func, bool, number, oneOfType, string} = React.PropTypes

export default mixinCreator({
  cap: number,
  othersGrouper: oneOfType([func, bool]), // disallow true ! only false is accepted
  othersLabel: string
})
