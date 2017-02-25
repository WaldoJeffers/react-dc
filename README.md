# React-dc

React-dc is a wrapper around [dc.js charts](http://dc-js.github.io/dc.js/) for React. Dc.js is an awesome library , but like many charting libraries, its API is imperative, meaning you have to select a DOM element by its id to transform it into a chart. The goal of this library is to make it very easy for you create and use dc.js charts as React components.


## Table of contents
* [Installation](https://github.com/WaldoJeffers/react-dc#installation)
* [Usage](https://github.com/WaldoJeffers/react-dc#usage)
* [Components](https://github.com/WaldoJeffers/react-dc#components)
* [FAQ](https://github.com/WaldoJeffers/react-dc#faq)
* Full documentation *(coming soon)*

## Installation

### Using npm *(recommended)*
```
npm install --save react-dc
```

You will also need [React](https://www.npmjs.com/package/react), which is a [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) of this library. The reasoning behind this is that you are probably already using React in your project, and don't want to up with two versions of React in your final bundle. If you haven't already installed React, run:
```
npm install --save react
```

### Without npm
An UMD build is available on [unpkg](https://unpkg.com):
```html
<script src="https://unpkg.com/react-dc"></script>
```

## Usage
React-js comes with two versions: an UMD ES5 build, and an ES6 module version to allow for a better integration with your module bundler (like [Webkpack](https://webpack.js.org/) or [Rollup](http://rollupjs.org/)), if you use one. Rollup has a [great article on this topic on their wiki](https://github.com/rollup/rollup/wiki/pkg.module).

### In an ES6 environment
```js
import {BarChart, PieChart, RowChart} from 'react-dc'
```

### In an ES5 environment
The library is available as a global variable: **react-dc**

## Charts
### BarChart
```js
import {BarChart} from 'react-dc'
import crossfilter from 'crossfilter'

const records = [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 1}, {x: 4, y: 2}]
const data = crossfilter(records)
const dimension = data.dimension(record => record.x)
const group = dimenion.group().reduceSum(record => record.y)

export default () => <BarChart dimension={dimension} group={dimension} />
```


## FAQ
**Is React-dc production ready ?**

Not yet. This library is being actively developed, and needs to be thoroughly tested before being production-ready. However, you can use for a personal project. If you encounter any bug, please open an issue.
