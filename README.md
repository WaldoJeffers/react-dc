# React-dc

React-dc is a wrapper around [dc.js charts](http://dc-js.github.io/dc.js/) for React. Dc.js is an awesome library, but like many charting libraries, its API is imperative, meaning you have to select a DOM element by its id to transform it into a chart. The goal of this library is to make it very easy for you create and use dc.js charts as React components.


## Table of contents
* [Installation](https://github.com/WaldoJeffers/react-dc#installation)
* [Usage](https://github.com/WaldoJeffers/react-dc#usage)
* [Charts](https://github.com/WaldoJeffers/react-dc#charts)
* [Roadmap](https://github.com/WaldoJeffers/react-dc#roadmap)
* [Common issues](https://github.com/WaldoJeffers/react-dc#common-issues)
* [FAQ](#faq)
* Full documentation *(coming soon)*

## Installation

### Using npm *(recommended)*
```
npm install --save react-dc
```

### Without npm
An UMD build is available on [unpkg](https://unpkg.com):
```html
<script src="https://unpkg.com/react-dc"></script>
```

**Warning:** You will also need [React](https://www.npmjs.com/package/react), which is a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) of this library. The reasoning behind this is that you are probably already using React in your project, and don't want to end up with two versions of React in your final bundle. If you haven't already installed React, you can install it from npm with `npm install --save react`, or use a [CDN version](https://cdnjs.com/libraries/react/).

## Usage
React-js comes with two versions: an UMD ES5 build, and an ES6 module version to allow for a better integration with your module bundler (like [Webpack](https://webpack.js.org/) or [Rollup](http://rollupjs.org/)), if you use one. Rollup has a [great article on this topic on their wiki](https://github.com/rollup/rollup/wiki/pkg.module).

### In an ES6 environment
```js
import {BarChart, PieChart, RowChart} from 'react-dc'
```

### In an ES5 environment
The library is available as a global variable: **react-dc**

## Charts
### BarChart
```js
import React from 'react'
import d3 from 'd3'
import crossfilter from 'crossfilter'
import {BarChart} from 'react-dc'

const records = [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 1}, {x: 4, y: 2}]
const data = crossfilter(records)
const dimension = data.dimension(record => record.x)
const group = dimenion.group().reduceSum(record => record.y)

export default () => <BarChart dimension={dimension} group={group} x={d3.scale.linear().domain([0, 5])} />
```

## Roadmap
- [] Document all components (charts)
- [] Add a component for every dc chart
  - [x] BarChart
  - [x] BaseChart
  - [] BoxPlot
  - [] BubbleChart
  - [] BubbleOverlay
  - [] DataCount
  - [] DataGrid
  - [] DataTable
  - [x] CompositeChart
  - [] GeoChoroplethChart
  - [] Heatmap
  - [x] LineChart
  - [] NumberDisplay
  - [x] PieChart
  - [x] RowChart
  - [x] ScatterPlot
  - [] SelectMenu
  - [x] SeriesChart
- [] Make sure charts are properly re-rendered when props change
- [] Make charts responsive


## Common issues
When using Webpack, you might see the following error in your console `Module not found: Error: Can't resolve 'crossfilter'` or `Uncaught Error: Cannot find module "crossfilter"`. This issue is **not** a problem with `react-dc` itself. This is due to dc.js' use of a library called [crossfilter2](https://www.npmjs.com/package/crossfilter2), which is a fork of [crossfilter](https://www.npmjs.com/package/crossfilter). See [this issue](https://github.com/dc-js/dc.js/issues/1214) for more information. It can be fixed using [Webpack's resolve feature](https://webpack.js.org/configuration/resolve) :
```js
{
  resolve: {
    alias: {
     'crossfilter': 'crossfilter2'
    }
  }
}
```


## FAQ
**Is React-dc production ready ?**

Not yet. This library is still being actively developed, and needs to be thoroughly tested before being production-ready. However, you can use it for a personal project. If you encounter any bug, please open an issue.
