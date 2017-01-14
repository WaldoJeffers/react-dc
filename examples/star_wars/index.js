import React from 'react'
import ReactDOM from 'react-dom'
import {PieChart, RowChart} from '../../index'
import ships from './ships'
import people from './people'
import crossfilter from 'crossfilter'
import d3 from 'd3'

const data = {
  people: crossfilter(people),
  ships: crossfilter(ships)
};
const peopleByHomeworld = data.people.dimension(person => person.homeworld.name)
const peopleByHomeworldGroup = peopleByHomeworld.group().reduceCount()
const shipsByName = data.ships.dimension(ship => ship.name)
const shipsByMGLT = data.ships.dimension(ship => ship.MGLT)
const shipsByNameGroup = shipsByName.group().reduceSum(d => d.MGLT)

const graphs = (
  <div>
    <RowChart dimension={shipsByName} group={shipsByNameGroup} labelOffsetX={18} test="test" />
    <PieChart dimension={peopleByHomeworld} group={peopleByHomeworldGroup} slicesCap="5" />
  </div>
)

ReactDOM.render(graphs, document.getElementById('main'));
