import React from 'react'
import {withProps} from '../utils'

const {any, bool, func, number, object, oneOfType, shape, string} = React.PropTypes

const groupShape = shape({
  all : func
})

export default withProps({
  dimension: shape({
    filter: func
  }).isRequired, // TO DO : crossfilter.dimension
  keyAccessor: func,
  label: {
    propTypes: oneOfType([func, shape({
      labelFunction: func.isRequired,
      enableLabels: bool.isRequired
    })]),
    setter(method, val){
      if(val.labelFunction && val.enableLabels){
        method(val.labelFunction, val.enableLabels)
      }else{
        method(val)
      }
    }
  },
  filter: any,
  group: {
    propTypes: oneOfType([groupShape, shape({
      group: groupShape.isRequired,
      name: string.isRequired
    })]).isRequired,
    setter: (method, val) => (val.group && val.name) ? method(val.group, val.name) : method(val)
  },
  height: oneOfType([func, number]),
  ordering: func,
  title: func,
  valueAccessor: func,
  width: oneOfType([func, number])
})
