import React from 'react'
import mixinCreator from './mixin-creator'

export default mixinCreator({
  cap: React.PropTypes.number,
  othersGrouper: React.PropTypes.func,
  othersLabel: React.PropTypes.string
})
