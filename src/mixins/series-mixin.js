import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {func} = PropTypes

export default withProps({
  chart: func,
  seriesAccessor: func.isRequired,
  seriesSort: func,
  valueSort: func
})
