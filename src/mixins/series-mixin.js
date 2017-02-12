import React from 'react'
import {withProps} from '../utils'

const {func} = React.PropTypes

export default withProps({
  chart: func,
  seriesAccessor: func.isRequired,
  seriesSort: func,
  valueSort: func
})
