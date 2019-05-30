import React from 'react'
import {func} from 'prop-types'
import {withProps} from '../utils'

export default withProps({
  chart: func,
  seriesAccessor: func.isRequired,
  seriesSort: func,
  valueSort: func
})
