import React from 'react'
import {withProps} from '../utils'

export default withProps({
  margins: React.PropTypes.shape({
    left: React.PropTypes.number.isRequired,
    right: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    bottom: React.PropTypes.number.isRequired
  })
})
