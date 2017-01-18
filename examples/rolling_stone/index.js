import React from 'react'
import ReactDOM from 'react-dom'
import {PieChart, LineChart, RowChart, BarChart} from '../../index'
import albums from './albums'
import crossfilter from 'crossfilter'
import d3 from 'd3'
import dc from 'dc'

const data = crossfilter(albums);
const byArtist = data.dimension(album => album.artist)
const byGenre = data.dimension(album => album.genres, true)
const byYear = data.dimension(album => new Date(album.year, 0, 1))
const byArtistGroup = byArtist.group().reduceCount()
const byGenreGroup = byGenre.group().reduceCount()
const byYearGroup = byYear.group().reduceCount()

const rockByYearGroup = byYear.group().reduceSum(album => (album.genres.includes('Rock')) ? 1 : 0)
const popByYearGroup = byYear.group().reduceSum(album => (album.genres.includes('Pop')) ? 1 : 0)
const funkSoulByYearGroup = byYear.group().reduceSum(album => (album.genres.includes('Funk / Soul')) ? 1 : 0)
const electroByYearGroup = byYear.group().reduceSum(album => (album.genres.includes('Electronic')) ? 1 : 0)
const hipHopByYearGroup = byYear.group().reduceSum(album => (album.genres.includes('Hip Hop')) ? 1 : 0)

const byArtistGroupTop20 = {
  all: () => byArtistGroup.top(20)
}

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
      xAxisLabel="Year"
    />
    <LineChart
      dimension={byYear}
      group={rockByYearGroup}
      x={d3.time.scale()}
      renderHorizontalGridLines={true}
      elasticX={true}
      xUnits={d3.time.years}
      xAxisLabel="Year"
      renderArea={true}
      stack={[popByYearGroup, funkSoulByYearGroup, electroByYearGroup, hipHopByYearGroup]}
      xyTipsOn={true}
      brushOn={false}
    />
    <BarChart
      dimension={byGenre}
      group={byGenreGroup}
      x={d3.scale.ordinal()}
      xUnits={dc.units.ordinal}
      gap={0}
      renderHorizontalGridLines={true}
    />
    <PieChart
      dimension={byGenre}
      group={byGenreGroup}
      slicesCap={5}
    />
  </div>
)

ReactDOM.render(graphs, document.getElementById('main'));
