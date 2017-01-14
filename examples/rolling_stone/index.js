import React from 'react'
import ReactDOM from 'react-dom'
import {PieChart, RowChart, BarChart} from '../../index'
import albums from './albums'
import crossfilter from 'crossfilter'
import d3 from 'd3'
import dc from 'dc'

const data = crossfilter(albums);
const byArtist = data.dimension(album => album.artist)
const byYear = data.dimension(album => new Date(album.year, 0, 1))
const byArtistGroup = byArtist.group().reduceCount()
const byYearGroup = byYear.group().reduceCount()

const graphs = (
  <div>
    <RowChart dimension={byArtist} group={byArtistGroup} title={record => record.value} ordering={record => -record.value} othersGrouper={false} renderTitleLabel cap={10} />
    <BarChart
      dimension={byYear}
      group={byYearGroup}
      x={d3.time.scale()}
      renderHorizontalGridLines={true}
      elasticX={true}
      xUnits={d3.time.years}
    />
    <BarChart
      dimension={byArtist}
      group={byArtistGroup}
      x={d3.scale.ordinal()}
      xUnits={dc.units.ordinal}
      gap={0}
      ordering={record => -record.value}
      renderHorizontalGridLines={true}
    />
  </div>
)

ReactDOM.render(graphs, document.getElementById('main'));
