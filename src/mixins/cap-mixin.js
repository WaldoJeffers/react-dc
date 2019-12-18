import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {func, bool, number, oneOfType, string} = PropTypes

export default withProps({
  cap: number,
  othersGrouper: oneOfType([func, bool]), // disallow true ! only false is accepted
  othersLabel: string
})
