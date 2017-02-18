# React-dc

React-dc is a wrapper around [dc.js charts](http://dc-js.github.io/dc.js/) for React. Dc.js is an awesome library , but like many charting libraries, its API is imperative, meaning you have to select a DOM element by its id to transform it into a chart. The goal of this library is to make it very easy for you create and use dc.js charts as React components.


## Table of contents
* [Installation](https://github.com/WaldoJeffers/react-dc#installation)
* [Usage](https://github.com/WaldoJeffers/react-dc#usage)
* Full documentation

## Installation
Using npm:
```
npm install --save react-dc
```
## Usage
React-js comes with two versions: a CommonJS/UMD ES5 build, and an ES2015 module version to allow better integration with your module bundler, if you use one. Rollup has a [great article on this topic on their wiki](https://github.com/rollup/rollup/wiki/pkg.module).
### With a module bundler
With a module bundler like [Webkpack](https://webpack.js.org/) or [Rollup](http://rollupjs.org/):
```js
import {BarChart, PieChart, RowChart} from 'react-dc'
```
### Without a module bundler
The UMD build is available on [unpkg](https://unpkg.com):
```html
<script src="https://unpkg.com/react-dc"></script>
```

## Charts
### BarChart
```jsx
import {BarChart} from 'react-dc'
import crossfilter from 'crossfilter'

const records = [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 1}, {x: 4, y: 2}]
const data = crossfilter(records)
const dimension = data.dimension(record => record.x)
const group = dimenion.group().reduceSum(record => record.y)

export default () => <BarChart dimension={dimension} group={dimension} />
```
