import React from 'react'
import {mixinCreator} from '../utils'

const {any, arrayOf, bool, func, shape, string} = React.PropTypes

export default mixinCreator({
  hidableStacks: bool,
  stack: arrayOf(shape({
    group: any.isRequired,
    name: string,
    accessor: func
  })),
  stackLayout: func,
  title: shape({
    stackName: string,
    titleAccessor: func
  })
})
