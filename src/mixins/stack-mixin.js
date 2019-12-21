import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from '../utils'

const {arrayOf, bool, func, oneOfType, shape, string} = PropTypes

const groupShape = shape({
  all : func
})

const stackShape = shape({
  group: groupShape.isRequired,
  name: string,
  accessor: func
})

const stackType = oneOfType([groupShape, stackShape])

export default withProps({
  hidableStacks: bool,
  stack: {
    propTypes: oneOfType([
      stackType,
      arrayOf(stackType)
    ]),
    setter(method, val){
      const stacks = [].concat(val)
      stacks.forEach(stack => {
        if (stack.group && stack.name && stack.accessor){
          method(stack.group, stack.name, stack.accessor)
        }else{
          method(stack)
        }
      })
    }
  },
  stackLayout: func,
  title: {
    propTypes: shape({
      stackName: string,
      titleAccessor: func
    }),
    setter(method, val){
      method(val.stackName, val.titleAccessor)
    }
  }
})
