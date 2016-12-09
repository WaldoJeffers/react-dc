import React from 'react'
import ReactDOM from 'react-dom'
import {RowChart} from '../../index.js'
import ships from './ships.js'
import crossfilter from 'crossfilter'
import d3 from 'd3'

const data = crossfilter(ships)
const byName = data.dimension(ship => ship.name)
const byMGLT = data.dimension(ship => ship.MGLT)
const group = byName.group().reduceSum(d => d.MGLT)
console.log(byMGLT)

ReactDOM.render(<RowChart dimension={byName} group={group} />, document.getElementById('main'));
