import React from 'react'
import mixinCreator from './mixin-creator'

export default mixinCreator({
  margins: React.PropTypes.shape({
    left: React.PropTypes.number.isRequired,
    right: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    bottom: React.PropTypes.number.isRequired
  })
})
