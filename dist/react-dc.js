/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _dc = __webpack_require__(32);

	var _dc2 = _interopRequireDefault(_dc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseChart = function (_React$Component) {
	  _inherits(BaseChart, _React$Component);

	  function BaseChart() {
	    _classCallCheck(this, BaseChart);

	    return _possibleConstructorReturn(this, (BaseChart.__proto__ || Object.getPrototypeOf(BaseChart)).apply(this, arguments));
	  }

	  _createClass(BaseChart, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      _react2.default.createElement('div', { ref: function ref(element) {
	          return _this2.element = element;
	        } });
	    }
	  }]);

	  return BaseChart;
	}(_react2.default.Component);

	/*class BarChart extends BaseChart{
	  componentDidMount(){
	    console.log('componentDidMount !')
	  }
	}*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactChildren = __webpack_require__(5);
	var ReactComponent = __webpack_require__(18);
	var ReactPureComponent = __webpack_require__(21);
	var ReactClass = __webpack_require__(22);
	var ReactDOMFactories = __webpack_require__(24);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypes = __webpack_require__(29);
	var ReactVersion = __webpack_require__(30);

	var onlyChild = __webpack_require__(31);
	var warning = __webpack_require__(11);

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(25);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var __spread = _assign;

	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}

	var React = {

	  // Modern

	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },

	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,

	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,

	  // Classic

	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },

	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,

	  version: ReactVersion,

	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};

	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var PooledClass = __webpack_require__(6);
	var ReactElement = __webpack_require__(9);

	var emptyFunction = __webpack_require__(12);
	var traverseAllChildren = __webpack_require__(15);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;

	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;

	  func.call(context, child, bookKeeping.count++);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;


	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}

	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}

	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};

	module.exports = ReactChildren;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var invariant = __webpack_require__(8);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};

	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactCurrentOwner = __webpack_require__(10);

	var warning = __webpack_require__(11);
	var canDefineProperty = __webpack_require__(13);
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var REACT_ELEMENT_TYPE = __webpack_require__(14);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};

	var specialPropKeyWarningShown, specialPropRefWarningShown;

	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,

	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,

	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};

	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};

	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

	  return newElement;
	};

	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = _assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }

	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};

	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};

	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(12);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.

	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

	module.exports = REACT_ELEMENT_TYPE;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(10);
	var REACT_ELEMENT_TYPE = __webpack_require__(14);

	var getIteratorFn = __webpack_require__(16);
	var invariant = __webpack_require__(8);
	var KeyEscapeUtils = __webpack_require__(17);
	var warning = __webpack_require__(11);

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';

	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var didWarnAboutMaps = false;

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}

	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/* global Symbol */

	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });

	  return '$' + escapedString;
	}

	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}

	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};

	module.exports = KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactNoopUpdateQueue = __webpack_require__(19);

	var canDefineProperty = __webpack_require__(13);
	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	ReactComponent.prototype.isReactComponent = {};

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var warning = __webpack_require__(11);

	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}

	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(4);

	var ReactComponent = __webpack_require__(18);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;

	module.exports = ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7),
	    _assign = __webpack_require__(4);

	var ReactComponent = __webpack_require__(18);
	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactNoopUpdateQueue = __webpack_require__(19);

	var emptyObject = __webpack_require__(20);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: 'DEFINE_MANY',

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: 'DEFINE_MANY',

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: 'DEFINE_MANY',

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: 'DEFINE_MANY',

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: 'DEFINE_MANY_MERGED',

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: 'DEFINE_MANY_MERGED',

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: 'DEFINE_MANY_MERGED',

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: 'DEFINE_ONCE',

	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: 'DEFINE_MANY',

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: 'DEFINE_MANY',

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: 'DEFINE_MANY',

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: 'DEFINE_ONCE',

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: 'DEFINE_MANY',

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: 'DEFINE_MANY',

	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: 'OVERRIDE_BASE'

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, 'childContext');
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, 'context');
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, 'prop');
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}

	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;

	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }

	    return;
	  }

	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }

	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === 'DEFINE_MANY_MERGED') {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === 'DEFINE_MANY') {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};

	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(9);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(25);
	  createDOMFactory = ReactElementValidator.createFactory;
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),

	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};

	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactCurrentOwner = __webpack_require__(10);
	var ReactComponentTreeHook = __webpack_require__(26);
	var ReactElement = __webpack_require__(9);

	var checkReactTypeSpec = __webpack_require__(27);

	var canDefineProperty = __webpack_require__(13);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }

	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}

	var ReactElementValidator = {

	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }

	    return validatedFactory;
	  },

	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactCurrentOwner = __webpack_require__(10);

	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;

	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();

	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };

	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};

	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };

	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };

	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}

	var unmountedIDs = [];

	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },


	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(28);

	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);

	var ReactComponentTreeHook;

	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(26);
	}

	var loggedTypeFailures = {};

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var componentStackInfo = '';

	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(26);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }

	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}

	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var ReactElement = __webpack_require__(9);
	var ReactPropTypeLocationNames = __webpack_require__(23);
	var ReactPropTypesSecret = __webpack_require__(28);

	var emptyFunction = __webpack_require__(12);
	var getIteratorFn = __webpack_require__(16);
	var warning = __webpack_require__(11);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/

	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;

	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        if (props[propName] === null) {
	          return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	        }
	        return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }

	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }

	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }

	      return true;
	    default:
	      return false;
	  }
	}

	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }

	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }

	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }

	  return false;
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}

	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	module.exports = '15.4.1';

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';

	var _prodInvariant = __webpack_require__(7);

	var ReactElement = __webpack_require__(9);

	var invariant = __webpack_require__(8);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}

	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 *  dc 2.0.0-beta.32
	 *  http://dc-js.github.io/dc.js/
	 *  Copyright 2012-2016 Nick Zhu & the dc.js Developers
	 *  https://github.com/dc-js/dc.js/blob/master/AUTHORS
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	(function() { function _dc(d3, crossfilter) {
	'use strict';

	/**
	 * The entire dc.js library is scoped under the **dc** name space. It does not introduce
	 * anything else into the global name space.
	 *
	 * Most `dc` functions are designed to allow function chaining, meaning they return the current chart
	 * instance whenever it is appropriate.  The getter forms of functions do not participate in function
	 * chaining because they return values that are not the chart, although some,
	 * such as {@link dc.baseMixin#svg .svg} and {@link dc.coordinateGridMixin#xAxis .xAxis},
	 * return values that are themselves chainable d3 objects.
	 * @namespace dc
	 * @version 2.0.0-beta.32
	 * @example
	 * // Example chaining
	 * chart.width(300)
	 *      .height(300)
	 *      .filter('sunday');
	 */
	/*jshint -W079*/
	var dc = {
	    version: '2.0.0-beta.32',
	    constants: {
	        CHART_CLASS: 'dc-chart',
	        DEBUG_GROUP_CLASS: 'debug',
	        STACK_CLASS: 'stack',
	        DESELECTED_CLASS: 'deselected',
	        SELECTED_CLASS: 'selected',
	        NODE_INDEX_NAME: '__index__',
	        GROUP_INDEX_NAME: '__group_index__',
	        DEFAULT_CHART_GROUP: '__default_chart_group__',
	        EVENT_DELAY: 40,
	        NEGLIGIBLE_NUMBER: 1e-10
	    },
	    _renderlet: null
	};
	/*jshint +W079*/

	/**
	 * The dc.chartRegistry object maintains sets of all instantiated dc.js charts under named groups
	 * and the default group.
	 *
	 * A chart group often corresponds to a crossfilter instance. It specifies
	 * the set of charts which should be updated when a filter changes on one of the charts or when the
	 * global functions {@link dc.filterAll dc.filterAll}, {@link dc.refocusAll dc.refocusAll},
	 * {@link dc.renderAll dc.renderAll}, {@link dc.redrawAll dc.redrawAll}, or chart functions
	 * {@link dc.baseMixin#renderGroup baseMixin.renderGroup},
	 * {@link dc.baseMixin#redrawGroup baseMixin.redrawGroup} are called.
	 *
	 * @namespace chartRegistry
	 * @memberof dc
	 * @type {{has, register, deregister, clear, list}}
	 */
	dc.chartRegistry = (function () {
	    // chartGroup:string => charts:array
	    var _chartMap = {};

	    function initializeChartGroup (group) {
	        if (!group) {
	            group = dc.constants.DEFAULT_CHART_GROUP;
	        }

	        if (!_chartMap[group]) {
	            _chartMap[group] = [];
	        }

	        return group;
	    }

	    return {
	        /**
	         * Determine if a given chart instance resides in any group in the registry.
	         * @method has
	         * @memberof dc.chartRegistry
	         * @param {Object} chart dc.js chart instance
	         * @returns {Boolean}
	         */
	        has: function (chart) {
	            for (var e in _chartMap) {
	                if (_chartMap[e].indexOf(chart) >= 0) {
	                    return true;
	                }
	            }
	            return false;
	        },

	        /**
	         * Add given chart instance to the given group, creating the group if necessary.
	         * If no group is provided, the default group `dc.constants.DEFAULT_CHART_GROUP` will be used.
	         * @method register
	         * @memberof dc.chartRegistry
	         * @param {Object} chart dc.js chart instance
	         * @param {String} [group] Group name
	         */
	        register: function (chart, group) {
	            group = initializeChartGroup(group);
	            _chartMap[group].push(chart);
	        },

	        /**
	         * Remove given chart instance from the given group, creating the group if necessary.
	         * If no group is provided, the default group `dc.constants.DEFAULT_CHART_GROUP` will be used.
	         * @method deregister
	         * @memberof dc.chartRegistry
	         * @param {Object} chart dc.js chart instance
	         * @param {String} [group] Group name
	         */
	        deregister: function (chart, group) {
	            group = initializeChartGroup(group);
	            for (var i = 0; i < _chartMap[group].length; i++) {
	                if (_chartMap[group][i].anchorName() === chart.anchorName()) {
	                    _chartMap[group].splice(i, 1);
	                    break;
	                }
	            }
	        },

	        /**
	         * Clear given group if one is provided, otherwise clears all groups.
	         * @method clear
	         * @memberof dc.chartRegistry
	         * @param {String} group Group name
	         */
	        clear: function (group) {
	            if (group) {
	                delete _chartMap[group];
	            } else {
	                _chartMap = {};
	            }
	        },

	        /**
	         * Get an array of each chart instance in the given group.
	         * If no group is provided, the charts in the default group are returned.
	         * @method list
	         * @memberof dc.chartRegistry
	         * @param {String} [group] Group name
	         * @returns {Array<Object>}
	         */
	        list: function (group) {
	            group = initializeChartGroup(group);
	            return _chartMap[group];
	        }
	    };
	})();

	/**
	 * Add given chart instance to the given group, creating the group if necessary.
	 * If no group is provided, the default group `dc.constants.DEFAULT_CHART_GROUP` will be used.
	 * @memberof dc
	 * @method registerChart
	 * @param {Object} chart dc.js chart instance
	 * @param {String} [group] Group name
	 */
	dc.registerChart = function (chart, group) {
	    dc.chartRegistry.register(chart, group);
	};

	/**
	 * Remove given chart instance from the given group, creating the group if necessary.
	 * If no group is provided, the default group `dc.constants.DEFAULT_CHART_GROUP` will be used.
	 * @memberof dc
	 * @method deregisterChart
	 * @param {Object} chart dc.js chart instance
	 * @param {String} [group] Group name
	 */
	dc.deregisterChart = function (chart, group) {
	    dc.chartRegistry.deregister(chart, group);
	};

	/**
	 * Determine if a given chart instance resides in any group in the registry.
	 * @memberof dc
	 * @method hasChart
	 * @param {Object} chart dc.js chart instance
	 * @returns {Boolean}
	 */
	dc.hasChart = function (chart) {
	    return dc.chartRegistry.has(chart);
	};

	/**
	 * Clear given group if one is provided, otherwise clears all groups.
	 * @memberof dc
	 * @method deregisterAllCharts
	 * @param {String} group Group name
	 */
	dc.deregisterAllCharts = function (group) {
	    dc.chartRegistry.clear(group);
	};

	/**
	 * Clear all filters on all charts within the given chart group. If the chart group is not given then
	 * only charts that belong to the default chart group will be reset.
	 * @memberof dc
	 * @method filterAll
	 * @param {String} [group]
	 */
	dc.filterAll = function (group) {
	    var charts = dc.chartRegistry.list(group);
	    for (var i = 0; i < charts.length; ++i) {
	        charts[i].filterAll();
	    }
	};

	/**
	 * Reset zoom level / focus on all charts that belong to the given chart group. If the chart group is
	 * not given then only charts that belong to the default chart group will be reset.
	 * @memberof dc
	 * @method refocusAll
	 * @param {String} [group]
	 */
	dc.refocusAll = function (group) {
	    var charts = dc.chartRegistry.list(group);
	    for (var i = 0; i < charts.length; ++i) {
	        if (charts[i].focus) {
	            charts[i].focus();
	        }
	    }
	};

	/**
	 * Re-render all charts belong to the given chart group. If the chart group is not given then only
	 * charts that belong to the default chart group will be re-rendered.
	 * @memberof dc
	 * @method renderAll
	 * @param {String} [group]
	 */
	dc.renderAll = function (group) {
	    var charts = dc.chartRegistry.list(group);
	    for (var i = 0; i < charts.length; ++i) {
	        charts[i].render();
	    }

	    if (dc._renderlet !== null) {
	        dc._renderlet(group);
	    }
	};

	/**
	 * Redraw all charts belong to the given chart group. If the chart group is not given then only charts
	 * that belong to the default chart group will be re-drawn. Redraw is different from re-render since
	 * when redrawing dc tries to update the graphic incrementally, using transitions, instead of starting
	 * from scratch.
	 * @memberof dc
	 * @method redrawAll
	 * @param {String} [group]
	 */
	dc.redrawAll = function (group) {
	    var charts = dc.chartRegistry.list(group);
	    for (var i = 0; i < charts.length; ++i) {
	        charts[i].redraw();
	    }

	    if (dc._renderlet !== null) {
	        dc._renderlet(group);
	    }
	};

	/**
	 * If this boolean is set truthy, all transitions will be disabled, and changes to the charts will happen
	 * immediately
	 * @memberof dc
	 * @method disableTransitions
	 * @type {Boolean}
	 * @default false
	 */
	dc.disableTransitions = false;

	dc.transition = function (selections, duration, callback, name) {
	    if (duration <= 0 || duration === undefined || dc.disableTransitions) {
	        return selections;
	    }

	    var s = selections
	        .transition(name)
	        .duration(duration);

	    if (typeof(callback) === 'function') {
	        callback(s);
	    }

	    return s;
	};

	/* somewhat silly, but to avoid duplicating logic */
	dc.optionalTransition = function (enable, duration, callback, name) {
	    if (enable) {
	        return function (selection) {
	            return dc.transition(selection, duration, callback, name);
	        };
	    } else {
	        return function (selection) {
	            return selection;
	        };
	    }
	};

	// See http://stackoverflow.com/a/20773846
	dc.afterTransition = function (transition, callback) {
	    if (transition.empty() || !transition.duration) {
	        callback.call(transition);
	    } else {
	        var n = 0;
	        transition
	            .each(function () { ++n; })
	            .each('end', function () {
	                if (!--n) {
	                    callback.call(transition);
	                }
	            });
	    }
	};

	/**
	 * @namespace units
	 * @memberof dc
	 * @type {{}}
	 */
	dc.units = {};

	/**
	 * The default value for {@link dc.coordinateGridMixin#xUnits .xUnits} for the
	 * {@link dc.coordinateGridMixin Coordinate Grid Chart} and should
	 * be used when the x values are a sequence of integers.
	 * It is a function that counts the number of integers in the range supplied in its start and end parameters.
	 * @method integers
	 * @memberof dc.units
	 * @see {@link dc.coordinateGridMixin#xUnits coordinateGridMixin.xUnits}
	 * @example
	 * chart.xUnits(dc.units.integers) // already the default
	 * @param {Number} start
	 * @param {Number} end
	 * @return {Number}
	 */
	dc.units.integers = function (start, end) {
	    return Math.abs(end - start);
	};

	/**
	 * This argument can be passed to the {@link dc.coordinateGridMixin#xUnits .xUnits} function of the to
	 * specify ordinal units for the x axis. Usually this parameter is used in combination with passing
	 * {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales d3.scale.ordinal} to
	 * {@link dc.coordinateGridMixin#x .x}.
	 * It just returns the domain passed to it, which for ordinal charts is an array of all values.
	 * @method ordinal
	 * @memberof dc.units
	 * @see {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales d3.scale.ordinal}
	 * @see {@link dc.coordinateGridMixin#xUnits coordinateGridMixin.xUnits}
	 * @see {@link dc.coordinateGridMixin#x coordinateGridMixin.x}
	 * @example
	 * chart.xUnits(dc.units.ordinal)
	 *      .x(d3.scale.ordinal())
	 * @param {*} start
	 * @param {*} end
	 * @param {Array<String>} domain
	 * @return {Array<String>}
	 */
	dc.units.ordinal = function (start, end, domain) {
	    return domain;
	};

	/**
	 * @namespace fp
	 * @memberof dc.units
	 * @type {{}}
	 */
	dc.units.fp = {};
	/**
	 * This function generates an argument for the {@link dc.coordinateGridMixin Coordinate Grid Chart}
	 * {@link dc.coordinateGridMixin#xUnits .xUnits} function specifying that the x values are floating-point
	 * numbers with the given precision.
	 * The returned function determines how many values at the given precision will fit into the range
	 * supplied in its start and end parameters.
	 * @method precision
	 * @memberof dc.units.fp
	 * @see {@link dc.coordinateGridMixin#xUnits coordinateGridMixin.xUnits}
	 * @example
	 * // specify values (and ticks) every 0.1 units
	 * chart.xUnits(dc.units.fp.precision(0.1)
	 * // there are 500 units between 0.5 and 1 if the precision is 0.001
	 * var thousandths = dc.units.fp.precision(0.001);
	 * thousandths(0.5, 1.0) // returns 500
	 * @param {Number} precision
	 * @return {Function} start-end unit function
	 */
	dc.units.fp.precision = function (precision) {
	    var _f = function (s, e) {
	        var d = Math.abs((e - s) / _f.resolution);
	        if (dc.utils.isNegligible(d - Math.floor(d))) {
	            return Math.floor(d);
	        } else {
	            return Math.ceil(d);
	        }
	    };
	    _f.resolution = precision;
	    return _f;
	};

	dc.round = {};
	dc.round.floor = function (n) {
	    return Math.floor(n);
	};
	dc.round.ceil = function (n) {
	    return Math.ceil(n);
	};
	dc.round.round = function (n) {
	    return Math.round(n);
	};

	dc.override = function (obj, functionName, newFunction) {
	    var existingFunction = obj[functionName];
	    obj['_' + functionName] = existingFunction;
	    obj[functionName] = newFunction;
	};

	dc.renderlet = function (_) {
	    if (!arguments.length) {
	        return dc._renderlet;
	    }
	    dc._renderlet = _;
	    return dc;
	};

	dc.instanceOfChart = function (o) {
	    return o instanceof Object && o.__dcFlag__ && true;
	};

	dc.errors = {};

	dc.errors.Exception = function (msg) {
	    var _msg = msg || 'Unexpected internal error';

	    this.message = _msg;

	    this.toString = function () {
	        return _msg;
	    };
	    this.stack = (new Error()).stack;
	};
	dc.errors.Exception.prototype = Object.create(Error.prototype);
	dc.errors.Exception.prototype.constructor = dc.errors.Exception;

	dc.errors.InvalidStateException = function () {
	    dc.errors.Exception.apply(this, arguments);
	};

	dc.errors.InvalidStateException.prototype = Object.create(dc.errors.Exception.prototype);
	dc.errors.InvalidStateException.prototype.constructor = dc.errors.InvalidStateException;

	dc.errors.BadArgumentException = function () {
	    dc.errors.Exception.apply(this, arguments);
	};

	dc.errors.BadArgumentException.prototype = Object.create(dc.errors.Exception.prototype);
	dc.errors.BadArgumentException.prototype.constructor = dc.errors.BadArgumentException;

	/**
	 * The default date format for dc.js
	 * @name dateFormat
	 * @memberof dc
	 * @type {Function}
	 * @default d3.time.format('%m/%d/%Y')
	 */
	dc.dateFormat = d3.time.format('%m/%d/%Y');

	/**
	 * @namespace printers
	 * @memberof dc
	 * @type {{}}
	 */
	dc.printers = {};

	/**
	 * Converts a list of filters into a readable string
	 * @method filters
	 * @memberof dc.printers
	 * @param {Array<dc.filters|any>} filters
	 * @returns {String}
	 */
	dc.printers.filters = function (filters) {
	    var s = '';

	    for (var i = 0; i < filters.length; ++i) {
	        if (i > 0) {
	            s += ', ';
	        }
	        s += dc.printers.filter(filters[i]);
	    }

	    return s;
	};

	/**
	 * Converts a filter into a readable string
	 * @method filter
	 * @memberof dc.printers
	 * @param {dc.filters|any|Array<any>} filter
	 * @returns {String}
	 */
	dc.printers.filter = function (filter) {
	    var s = '';

	    if (typeof filter !== 'undefined' && filter !== null) {
	        if (filter instanceof Array) {
	            if (filter.length >= 2) {
	                s = '[' + dc.utils.printSingleValue(filter[0]) + ' -> ' + dc.utils.printSingleValue(filter[1]) + ']';
	            } else if (filter.length >= 1) {
	                s = dc.utils.printSingleValue(filter[0]);
	            }
	        } else {
	            s = dc.utils.printSingleValue(filter);
	        }
	    }

	    return s;
	};

	/**
	 * Returns a function that given a string property name, can be used to pluck the property off an object.  A function
	 * can be passed as the second argument to also alter the data being returned.  This can be a useful shorthand method to create
	 * accessor functions.
	 * @method pluck
	 * @memberof dc
	 * @example
	 * var xPluck = dc.pluck('x');
	 * var objA = {x: 1};
	 * xPluck(objA) // 1
	 * @example
	 * var xPosition = dc.pluck('x', function (x, i) {
	 *     // `this` is the original datum,
	 *     // `x` is the x property of the datum,
	 *     // `i` is the position in the array
	 *     return this.radius + x;
	 * });
	 * dc.selectAll('.circle').data(...).x(xPosition);
	 * @param {String} n
	 * @param {Function} [f]
	 * @returns {Function}
	 */
	dc.pluck = function (n, f) {
	    if (!f) {
	        return function (d) { return d[n]; };
	    }
	    return function (d, i) { return f.call(d, d[n], i); };
	};

	/**
	 * @namespace utils
	 * @memberof dc
	 * @type {{}}
	 */
	dc.utils = {};

	/**
	 * Print a single value filter
	 * @method printSingleValue
	 * @memberof dc.utils
	 * @param {any} filter
	 * @returns {String}
	 */
	dc.utils.printSingleValue = function (filter) {
	    var s = '' + filter;

	    if (filter instanceof Date) {
	        s = dc.dateFormat(filter);
	    } else if (typeof(filter) === 'string') {
	        s = filter;
	    } else if (dc.utils.isFloat(filter)) {
	        s = dc.utils.printSingleValue.fformat(filter);
	    } else if (dc.utils.isInteger(filter)) {
	        s = Math.round(filter);
	    }

	    return s;
	};
	dc.utils.printSingleValue.fformat = d3.format('.2f');

	/**
	 * Arbitrary add one value to another.
	 * @method add
	 * @memberof dc.utils
	 * @todo
	 * These assume than any string r is a percentage (whether or not it includes %).
	 * They also generate strange results if l is a string.
	 * @param {String|Date|Number} l
	 * @param {Number} r
	 * @returns {String|Date|Number}
	 */
	dc.utils.add = function (l, r) {
	    if (typeof r === 'string') {
	        r = r.replace('%', '');
	    }

	    if (l instanceof Date) {
	        if (typeof r === 'string') {
	            r = +r;
	        }
	        var d = new Date();
	        d.setTime(l.getTime());
	        d.setDate(l.getDate() + r);
	        return d;
	    } else if (typeof r === 'string') {
	        var percentage = (+r / 100);
	        return l > 0 ? l * (1 + percentage) : l * (1 - percentage);
	    } else {
	        return l + r;
	    }
	};

	/**
	 * Arbitrary subtract one value from another.
	 * @method subtract
	 * @memberof dc.utils
	 * @todo
	 * These assume than any string r is a percentage (whether or not it includes %).
	 * They also generate strange results if l is a string.
	 * @param {String|Date|Number} l
	 * @param {Number} r
	 * @returns {String|Date|Number}
	 */
	dc.utils.subtract = function (l, r) {
	    if (typeof r === 'string') {
	        r = r.replace('%', '');
	    }

	    if (l instanceof Date) {
	        if (typeof r === 'string') {
	            r = +r;
	        }
	        var d = new Date();
	        d.setTime(l.getTime());
	        d.setDate(l.getDate() - r);
	        return d;
	    } else if (typeof r === 'string') {
	        var percentage = (+r / 100);
	        return l < 0 ? l * (1 + percentage) : l * (1 - percentage);
	    } else {
	        return l - r;
	    }
	};

	/**
	 * Is the value a number?
	 * @method isNumber
	 * @memberof dc.utils
	 * @param {any} n
	 * @returns {Boolean}
	 */
	dc.utils.isNumber = function (n) {
	    return n === +n;
	};

	/**
	 * Is the value a float?
	 * @method isFloat
	 * @memberof dc.utils
	 * @param {any} n
	 * @returns {Boolean}
	 */
	dc.utils.isFloat = function (n) {
	    return n === +n && n !== (n | 0);
	};

	/**
	 * Is the value an integer?
	 * @method isInteger
	 * @memberof dc.utils
	 * @param {any} n
	 * @returns {Boolean}
	 */
	dc.utils.isInteger = function (n) {
	    return n === +n && n === (n | 0);
	};

	/**
	 * Is the value very close to zero?
	 * @method isNegligible
	 * @memberof dc.utils
	 * @param {any} n
	 * @returns {Boolean}
	 */
	dc.utils.isNegligible = function (n) {
	    return !dc.utils.isNumber(n) || (n < dc.constants.NEGLIGIBLE_NUMBER && n > -dc.constants.NEGLIGIBLE_NUMBER);
	};

	/**
	 * Ensure the value is no greater or less than the min/max values.  If it is return the boundary value.
	 * @method clamp
	 * @memberof dc.utils
	 * @param {any} val
	 * @param {any} min
	 * @param {any} max
	 * @returns {any}
	 */
	dc.utils.clamp = function (val, min, max) {
	    return val < min ? min : (val > max ? max : val);
	};

	/**
	 * Using a simple static counter, provide a unique integer id.
	 * @method uniqueId
	 * @memberof dc.utils
	 * @returns {Number}
	 */
	var _idCounter = 0;
	dc.utils.uniqueId = function () {
	    return ++_idCounter;
	};

	/**
	 * Convert a name to an ID.
	 * @method nameToId
	 * @memberof dc.utils
	 * @param {String} name
	 * @returns {String}
	 */
	dc.utils.nameToId = function (name) {
	    return name.toLowerCase().replace(/[\s]/g, '_').replace(/[\.']/g, '');
	};

	/**
	 * Append or select an item on a parent element
	 * @method appendOrSelect
	 * @memberof dc.utils
	 * @param {d3.selection} parent
	 * @param {String} selector
	 * @param {String} tag
	 * @returns {d3.selection}
	 */
	dc.utils.appendOrSelect = function (parent, selector, tag) {
	    tag = tag || selector;
	    var element = parent.select(selector);
	    if (element.empty()) {
	        element = parent.append(tag);
	    }
	    return element;
	};

	/**
	 * Return the number if the value is a number; else 0.
	 * @method safeNumber
	 * @memberof dc.utils
	 * @param {Number|any} n
	 * @returns {Number}
	 */
	dc.utils.safeNumber = function (n) { return dc.utils.isNumber(+n) ? +n : 0;};

	dc.logger = {};

	dc.logger.enableDebugLog = false;

	dc.logger.warn = function (msg) {
	    if (console) {
	        if (console.warn) {
	            console.warn(msg);
	        } else if (console.log) {
	            console.log(msg);
	        }
	    }

	    return dc.logger;
	};

	dc.logger.debug = function (msg) {
	    if (dc.logger.enableDebugLog && console) {
	        if (console.debug) {
	            console.debug(msg);
	        } else if (console.log) {
	            console.log(msg);
	        }
	    }

	    return dc.logger;
	};

	dc.logger.deprecate = function (fn, msg) {
	    // Allow logging of deprecation
	    var warned = false;
	    function deprecated () {
	        if (!warned) {
	            dc.logger.warn(msg);
	            warned = true;
	        }
	        return fn.apply(this, arguments);
	    }
	    return deprecated;
	};

	dc.events = {
	    current: null
	};

	/**
	 * This function triggers a throttled event function with a specified delay (in milli-seconds).  Events
	 * that are triggered repetitively due to user interaction such brush dragging might flood the library
	 * and invoke more renders than can be executed in time. Using this function to wrap your event
	 * function allows the library to smooth out the rendering by throttling events and only responding to
	 * the most recent event.
	 * @name events.trigger
	 * @memberof dc
	 * @example
	 * chart.on('renderlet', function(chart) {
	 *     // smooth the rendering through event throttling
	 *     dc.events.trigger(function(){
	 *         // focus some other chart to the range selected by user on this chart
	 *         someOtherChart.focus(chart.filter());
	 *     });
	 * })
	 * @param {Function} closure
	 * @param {Number} [delay]
	 */
	dc.events.trigger = function (closure, delay) {
	    if (!delay) {
	        closure();
	        return;
	    }

	    dc.events.current = closure;

	    setTimeout(function () {
	        if (closure === dc.events.current) {
	            closure();
	        }
	    }, delay);
	};

	/**
	 * The dc.js filters are functions which are passed into crossfilter to chose which records will be
	 * accumulated to produce values for the charts.  In the crossfilter model, any filters applied on one
	 * dimension will affect all the other dimensions but not that one.  dc always applies a filter
	 * function to the dimension; the function combines multiple filters and if any of them accept a
	 * record, it is filtered in.
	 *
	 * These filter constructors are used as appropriate by the various charts to implement brushing.  We
	 * mention below which chart uses which filter.  In some cases, many instances of a filter will be added.
	 *
	 * Each of the dc.js filters is an object with the following properties:
	 * * `isFiltered` - a function that returns true if a value is within the filter
	 * * `filterType` - a string identifying the filter, here the name of the constructor
	 *
	 * Currently these filter objects are also arrays, but this is not a requirement. Custom filters
	 * can be used as long as they have the properties above.
	 * @namespace filters
	 * @memberof dc
	 * @type {{}}
	 */
	dc.filters = {};

	/**
	 * RangedFilter is a filter which accepts keys between `low` and `high`.  It is used to implement X
	 * axis brushing for the {@link dc.coordinateGridMixin coordinate grid charts}.
	 *
	 * Its `filterType` is 'RangedFilter'
	 * @name RangedFilter
	 * @memberof dc.filters
	 * @param {Number} low
	 * @param {Number} high
	 * @return {Array<Number>}
	 * @constructor
	 */
	dc.filters.RangedFilter = function (low, high) {
	    var range = new Array(low, high);
	    range.isFiltered = function (value) {
	        return value >= this[0] && value < this[1];
	    };
	    range.filterType = 'RangedFilter';

	    return range;
	};

	/**
	 * TwoDimensionalFilter is a filter which accepts a single two-dimensional value.  It is used by the
	 * {@link dc.heatMap heat map chart} to include particular cells as they are clicked.  (Rows and columns are
	 * filtered by filtering all the cells in the row or column.)
	 *
	 * Its `filterType` is 'TwoDimensionalFilter'
	 * @name TwoDimensionalFilter
	 * @memberof dc.filters
	 * @param {Array<Number>} filter
	 * @return {Array<Number>}
	 * @constructor
	 */
	dc.filters.TwoDimensionalFilter = function (filter) {
	    if (filter === null) { return null; }

	    var f = filter;
	    f.isFiltered = function (value) {
	        return value.length && value.length === f.length &&
	               value[0] === f[0] && value[1] === f[1];
	    };
	    f.filterType = 'TwoDimensionalFilter';

	    return f;
	};

	/**
	 * The RangedTwoDimensionalFilter allows filtering all values which fit within a rectangular
	 * region. It is used by the {@link dc.scatterPlot scatter plot} to implement rectangular brushing.
	 *
	 * It takes two two-dimensional points in the form `[[x1,y1],[x2,y2]]`, and normalizes them so that
	 * `x1 <= x2` and `y1 <= y2`. It then returns a filter which accepts any points which are in the
	 * rectangular range including the lower values but excluding the higher values.
	 *
	 * If an array of two values are given to the RangedTwoDimensionalFilter, it interprets the values as
	 * two x coordinates `x1` and `x2` and returns a filter which accepts any points for which `x1 <= x <
	 * x2`.
	 *
	 * Its `filterType` is 'RangedTwoDimensionalFilter'
	 * @name RangedTwoDimensionalFilter
	 * @memberof dc.filters
	 * @param {Array<Array<Number>>} filter
	 * @return {Array<Array<Number>>}
	 * @constructor
	 */
	dc.filters.RangedTwoDimensionalFilter = function (filter) {
	    if (filter === null) { return null; }

	    var f = filter;
	    var fromBottomLeft;

	    if (f[0] instanceof Array) {
	        fromBottomLeft = [
	            [Math.min(filter[0][0], filter[1][0]), Math.min(filter[0][1], filter[1][1])],
	            [Math.max(filter[0][0], filter[1][0]), Math.max(filter[0][1], filter[1][1])]
	        ];
	    } else {
	        fromBottomLeft = [[filter[0], -Infinity], [filter[1], Infinity]];
	    }

	    f.isFiltered = function (value) {
	        var x, y;

	        if (value instanceof Array) {
	            if (value.length !== 2) {
	                return false;
	            }
	            x = value[0];
	            y = value[1];
	        } else {
	            x = value;
	            y = fromBottomLeft[0][1];
	        }

	        return x >= fromBottomLeft[0][0] && x < fromBottomLeft[1][0] &&
	               y >= fromBottomLeft[0][1] && y < fromBottomLeft[1][1];
	    };
	    f.filterType = 'RangedTwoDimensionalFilter';

	    return f;
	};

	/**
	 * `dc.baseMixin` is an abstract functional object representing a basic `dc` chart object
	 * for all chart and widget implementations. Methods from the {@link #dc.baseMixin dc.baseMixin} are inherited
	 * and available on all chart implementations in the `dc` library.
	 * @name baseMixin
	 * @memberof dc
	 * @mixin
	 * @param {Object} _chart
	 * @return {dc.baseMixin}
	 */
	dc.baseMixin = function (_chart) {
	    _chart.__dcFlag__ = dc.utils.uniqueId();

	    var _dimension;
	    var _group;

	    var _anchor;
	    var _root;
	    var _svg;
	    var _isChild;

	    var _minWidth = 200;
	    var _defaultWidthCalc = function (element) {
	        var width = element && element.getBoundingClientRect && element.getBoundingClientRect().width;
	        return (width && width > _minWidth) ? width : _minWidth;
	    };
	    var _widthCalc = _defaultWidthCalc;

	    var _minHeight = 200;
	    var _defaultHeightCalc = function (element) {
	        var height = element && element.getBoundingClientRect && element.getBoundingClientRect().height;
	        return (height && height > _minHeight) ? height : _minHeight;
	    };
	    var _heightCalc = _defaultHeightCalc;
	    var _width, _height;

	    var _keyAccessor = dc.pluck('key');
	    var _valueAccessor = dc.pluck('value');
	    var _label = dc.pluck('key');

	    var _ordering = dc.pluck('key');
	    var _orderSort;

	    var _renderLabel = false;

	    var _title = function (d) {
	        return _chart.keyAccessor()(d) + ': ' + _chart.valueAccessor()(d);
	    };
	    var _renderTitle = true;
	    var _controlsUseVisibility = false;

	    var _transitionDuration = 750;

	    var _filterPrinter = dc.printers.filters;

	    var _mandatoryAttributes = ['dimension', 'group'];

	    var _chartGroup = dc.constants.DEFAULT_CHART_GROUP;

	    var _listeners = d3.dispatch(
	        'preRender',
	        'postRender',
	        'preRedraw',
	        'postRedraw',
	        'filtered',
	        'zoomed',
	        'renderlet',
	        'pretransition');

	    var _legend;
	    var _commitHandler;

	    var _filters = [];
	    var _filterHandler = function (dimension, filters) {
	        if (filters.length === 0) {
	            dimension.filter(null);
	        } else if (filters.length === 1 && !filters[0].isFiltered) {
	            // single value and not a function-based filter
	            dimension.filterExact(filters[0]);
	        } else if (filters.length === 1 && filters[0].filterType === 'RangedFilter') {
	            // single range-based filter
	            dimension.filterRange(filters[0]);
	        } else {
	            dimension.filterFunction(function (d) {
	                for (var i = 0; i < filters.length; i++) {
	                    var filter = filters[i];
	                    if (filter.isFiltered && filter.isFiltered(d)) {
	                        return true;
	                    } else if (filter <= d && filter >= d) {
	                        return true;
	                    }
	                }
	                return false;
	            });
	        }
	        return filters;
	    };

	    var _data = function (group) {
	        return group.all();
	    };

	    /**
	     * Set or get the height attribute of a chart. The height is applied to the SVGElement generated by
	     * the chart when rendered (or re-rendered). If a value is given, then it will be used to calculate
	     * the new height and the chart returned for method chaining.  The value can either be a numeric, a
	     * function, or falsy. If no value is specified then the value of the current height attribute will
	     * be returned.
	     *
	     * By default, without an explicit height being given, the chart will select the width of its
	     * anchor element. If that isn't possible it defaults to 200 (provided by the
	     * {@link dc.baseMixin#minHeight minHeight} property). Setting the value falsy will return
	     * the chart to the default behavior.
	     * @method height
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#minHeight minHeight}
	     * @example
	     * // Default height
	     * chart.height(function (element) {
	     *     var height = element && element.getBoundingClientRect && element.getBoundingClientRect().height;
	     *     return (height && height > chart.minHeight()) ? height : chart.minHeight();
	     * });
	     *
	     * chart.height(250); // Set the chart's height to 250px;
	     * chart.height(function(anchor) { return doSomethingWith(anchor); }); // set the chart's height with a function
	     * chart.height(null); // reset the height to the default auto calculation
	     * @param {Number|Function} [height]
	     * @return {Number}
	     * @return {dc.baseMixin}
	     */
	    _chart.height = function (height) {
	        if (!arguments.length) {
	            if (!dc.utils.isNumber(_height)) {
	                // only calculate once
	                _height = _heightCalc(_root.node());
	            }
	            return _height;
	        }
	        _heightCalc = d3.functor(height || _defaultHeightCalc);
	        _height = undefined;
	        return _chart;
	    };

	    /**
	     * Set or get the width attribute of a chart.
	     * @method width
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#height height}
	     * @see {@link dc.baseMixin#minWidth minWidth}
	     * @example
	     * // Default width
	     * chart.width(function (element) {
	     *     var width = element && element.getBoundingClientRect && element.getBoundingClientRect().width;
	     *     return (width && width > chart.minWidth()) ? width : chart.minWidth();
	     * });
	     * @param {Number|Function} [width]
	     * @return {Number}
	     * @return {dc.baseMixin}
	     */
	    _chart.width = function (width) {
	        if (!arguments.length) {
	            if (!dc.utils.isNumber(_width)) {
	                // only calculate once
	                _width = _widthCalc(_root.node());
	            }
	            return _width;
	        }
	        _widthCalc = d3.functor(width || _defaultWidthCalc);
	        _width = undefined;
	        return _chart;
	    };

	    /**
	     * Set or get the minimum width attribute of a chart. This only has effect when used with the default
	     * {@link dc.baseMixin#width width} function.
	     * @method minWidth
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#width width}
	     * @param {Number} [minWidth=200]
	     * @return {Number}
	     * @return {dc.baseMixin}
	     */
	    _chart.minWidth = function (minWidth) {
	        if (!arguments.length) {
	            return _minWidth;
	        }
	        _minWidth = minWidth;
	        return _chart;
	    };

	    /**
	     * Set or get the minimum height attribute of a chart. This only has effect when used with the default
	     * {@link dc.baseMixin#height height} function.
	     * @method minHeight
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#height height}
	     * @param {Number} [minHeight=200]
	     * @return {Number}
	     * @return {dc.baseMixin}
	     */
	    _chart.minHeight = function (minHeight) {
	        if (!arguments.length) {
	            return _minHeight;
	        }
	        _minHeight = minHeight;
	        return _chart;
	    };

	    /**
	     * **mandatory**
	     *
	     * Set or get the dimension attribute of a chart. In `dc`, a dimension can be any valid [crossfilter
	     * dimension](https://github.com/square/crossfilter/wiki/API-Reference#wiki-dimension).
	     *
	     * If a value is given, then it will be used as the new dimension. If no value is specified then
	     * the current dimension will be returned.
	     * @method dimension
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/square/crossfilter/wiki/API-Reference#dimension crossfilter.dimension}
	     * @example
	     * var index = crossfilter([]);
	     * var dimension = index.dimension(dc.pluck('key'));
	     * chart.dimension(dimension);
	     * @param {crossfilter.dimension} [dimension]
	     * @return {crossfilter.dimension}
	     * @return {dc.baseMixin}
	     */
	    _chart.dimension = function (dimension) {
	        if (!arguments.length) {
	            return _dimension;
	        }
	        _dimension = dimension;
	        _chart.expireCache();
	        return _chart;
	    };

	    /**
	     * Set the data callback or retrieve the chart's data set. The data callback is passed the chart's
	     * group and by default will return
	     * {@link https://github.com/square/crossfilter/wiki/API-Reference#group_all group.all}.
	     * This behavior may be modified to, for instance, return only the top 5 groups.
	     * @method data
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // Default data function
	     * chart.data(function (group) { return group.all(); });
	     *
	     * chart.data(function (group) { return group.top(5); });
	     * @param {Function} [callback]
	     * @return {*}
	     * @return {dc.baseMixin}
	     */
	    _chart.data = function (callback) {
	        if (!arguments.length) {
	            return _data.call(_chart, _group);
	        }
	        _data = d3.functor(callback);
	        _chart.expireCache();
	        return _chart;
	    };

	    /**
	     * **mandatory**
	     *
	     * Set or get the group attribute of a chart. In `dc` a group is a
	     * {@link https://github.com/square/crossfilter/wiki/API-Reference#group-map-reduce crossfilter group}.
	     * Usually the group should be created from the particular dimension associated with the same chart. If a value is
	     * given, then it will be used as the new group.
	     *
	     * If no value specified then the current group will be returned.
	     * If `name` is specified then it will be used to generate legend label.
	     * @method group
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/square/crossfilter/wiki/API-Reference#group-map-reduce crossfilter.group}
	     * @example
	     * var index = crossfilter([]);
	     * var dimension = index.dimension(dc.pluck('key'));
	     * chart.dimension(dimension);
	     * chart.group(dimension.group(crossfilter.reduceSum()));
	     * @param {crossfilter.group} [group]
	     * @param {String} [name]
	     * @return {crossfilter.group}
	     * @return {dc.baseMixin}
	     */
	    _chart.group = function (group, name) {
	        if (!arguments.length) {
	            return _group;
	        }
	        _group = group;
	        _chart._groupName = name;
	        _chart.expireCache();
	        return _chart;
	    };

	    /**
	     * Get or set an accessor to order ordinal dimensions.  The chart uses
	     * {@link https://github.com/square/crossfilter/wiki/API-Reference#quicksort_by crossfilter.quicksort.by}
	     * to sort elements; this accessor returns the value to order on.
	     * @method ordering
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/square/crossfilter/wiki/API-Reference#quicksort_by crossfilter.quicksort.by}
	     * @example
	     * // Default ordering accessor
	     * _chart.ordering(dc.pluck('key'));
	     * @param {Function} [orderFunction]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.ordering = function (orderFunction) {
	        if (!arguments.length) {
	            return _ordering;
	        }
	        _ordering = orderFunction;
	        _orderSort = crossfilter.quicksort.by(_ordering);
	        _chart.expireCache();
	        return _chart;
	    };

	    _chart._computeOrderedGroups = function (data) {
	        var dataCopy = data.slice(0);

	        if (dataCopy.length <= 1) {
	            return dataCopy;
	        }

	        if (!_orderSort) {
	            _orderSort = crossfilter.quicksort.by(_ordering);
	        }

	        return _orderSort(dataCopy, 0, dataCopy.length);
	    };

	    /**
	     * Clear all filters associated with this chart
	     *
	     * The same can be achieved by calling {@link dc.baseMixin#filter chart.filter(null)}.
	     * @method filterAll
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.filterAll = function () {
	        return _chart.filter(null);
	    };

	    /**
	     * Execute d3 single selection in the chart's scope using the given selector and return the d3
	     * selection.
	     *
	     * This function is **not chainable** since it does not return a chart instance; however the d3
	     * selection result can be chained to d3 function calls.
	     * @method select
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Selections d3.selection}
	     * @example
	     * // Similar to:
	     * d3.select('#chart-id').select(selector);
	     * @return {d3.selection}
	     */
	    _chart.select = function (s) {
	        return _root.select(s);
	    };

	    /**
	     * Execute in scope d3 selectAll using the given selector and return d3 selection result.
	     *
	     * This function is **not chainable** since it does not return a chart instance; however the d3
	     * selection result can be chained to d3 function calls.
	     * @method selectAll
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Selections d3.selection}
	     * @example
	     * // Similar to:
	     * d3.select('#chart-id').selectAll(selector);
	     * @return {d3.selection}
	     */
	    _chart.selectAll = function (s) {
	        return _root ? _root.selectAll(s) : null;
	    };

	    /**
	     * Set the root SVGElement to either be an existing chart's root; or any valid [d3 single
	     * selector](https://github.com/mbostock/d3/wiki/Selections#selecting-elements) specifying a dom
	     * block element such as a div; or a dom element or d3 selection. Optionally registers the chart
	     * within the chartGroup. This class is called internally on chart initialization, but be called
	     * again to relocate the chart. However, it will orphan any previously created SVGElements.
	     * @method anchor
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {anchorChart|anchorSelector|anchorNode} [parent]
	     * @param {String} [chartGroup]
	     * @return {String|node|d3.selection}
	     * @return {dc.baseMixin}
	     */
	    _chart.anchor = function (parent, chartGroup) {
	        if (!arguments.length) {
	            return _anchor;
	        }
	        if (dc.instanceOfChart(parent)) {
	            _anchor = parent.anchor();
	            _root = parent.root();
	            _isChild = true;
	        } else if (parent) {
	            if (parent.select && parent.classed) { // detect d3 selection
	                _anchor = parent.node();
	            } else {
	                _anchor = parent;
	            }
	            _root = d3.select(_anchor);
	            _root.classed(dc.constants.CHART_CLASS, true);
	            dc.registerChart(_chart, chartGroup);
	            _isChild = false;
	        } else {
	            throw new dc.errors.BadArgumentException('parent must be defined');
	        }
	        _chartGroup = chartGroup;
	        return _chart;
	    };

	    /**
	     * Returns the DOM id for the chart's anchored location.
	     * @method anchorName
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {String}
	     */
	    _chart.anchorName = function () {
	        var a = _chart.anchor();
	        if (a && a.id) {
	            return a.id;
	        }
	        if (a && a.replace) {
	            return a.replace('#', '');
	        }
	        return 'dc-chart' + _chart.chartID();
	    };

	    /**
	     * Returns the root element where a chart resides. Usually it will be the parent div element where
	     * the SVGElement was created. You can also pass in a new root element however this is usually handled by
	     * dc internally. Resetting the root element on a chart outside of dc internals may have
	     * unexpected consequences.
	     * @method root
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement HTMLElement}
	     * @param {HTMLElement} [rootElement]
	     * @return {HTMLElement}
	     * @return {dc.baseMixin}
	     */
	    _chart.root = function (rootElement) {
	        if (!arguments.length) {
	            return _root;
	        }
	        _root = rootElement;
	        return _chart;
	    };

	    /**
	     * Returns the top SVGElement for this specific chart. You can also pass in a new SVGElement,
	     * however this is usually handled by dc internally. Resetting the SVGElement on a chart outside
	     * of dc internals may have unexpected consequences.
	     * @method svg
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SVGElement SVGElement}
	     * @param {SVGElement|d3.selection} [svgElement]
	     * @return {SVGElement|d3.selection}
	     * @return {dc.baseMixin}
	     */
	    _chart.svg = function (svgElement) {
	        if (!arguments.length) {
	            return _svg;
	        }
	        _svg = svgElement;
	        return _chart;
	    };

	    /**
	     * Remove the chart's SVGElements from the dom and recreate the container SVGElement.
	     * @method resetSvg
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/SVGElement SVGElement}
	     * @return {SVGElement}
	     */
	    _chart.resetSvg = function () {
	        _chart.select('svg').remove();
	        return generateSvg();
	    };

	    function sizeSvg () {
	        if (_svg) {
	            _svg
	                .attr('width', _chart.width())
	                .attr('height', _chart.height());
	        }
	    }

	    function generateSvg () {
	        _svg = _chart.root().append('svg');
	        sizeSvg();
	        return _svg;
	    }

	    /**
	     * Set or get the filter printer function. The filter printer function is used to generate human
	     * friendly text for filter value(s) associated with the chart instance. By default dc charts use a
	     * default filter printer `dc.printers.filter` that provides simple printing support for both
	     * single value and ranged filters.
	     * @method filterPrinter
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {Function} [filterPrinterFunction=dc.printers.filter]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.filterPrinter = function (filterPrinterFunction) {
	        if (!arguments.length) {
	            return _filterPrinter;
	        }
	        _filterPrinter = filterPrinterFunction;
	        return _chart;
	    };

	    /**
	     * If set, use the `visibility` attribute instead of the `display` attribute for showing/hiding
	     * chart reset and filter controls, for less disruption to the layout.
	     * @method controlsUseVisibility
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {Boolean} [controlsUseVisibility=false]
	     * @return {Boolean}
	     * @return {dc.baseMixin}
	     **/
	    _chart.controlsUseVisibility = function (_) {
	        if (!arguments.length) {
	            return _controlsUseVisibility;
	        }
	        _controlsUseVisibility = _;
	        return _chart;
	    };

	    /**
	     * Turn on optional control elements within the root element. dc currently supports the
	     * following html control elements.
	     * * root.selectAll('.reset') - elements are turned on if the chart has an active filter. This type
	     * of control element is usually used to store a reset link to allow user to reset filter on a
	     * certain chart. This element will be turned off automatically if the filter is cleared.
	     * * root.selectAll('.filter') elements are turned on if the chart has an active filter. The text
	     * content of this element is then replaced with the current filter value using the filter printer
	     * function. This type of element will be turned off automatically if the filter is cleared.
	     * @method turnOnControls
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.turnOnControls = function () {
	        if (_root) {
	            var attribute = _chart.controlsUseVisibility() ? 'visibility' : 'display';
	            _chart.selectAll('.reset').style(attribute, null);
	            _chart.selectAll('.filter').text(_filterPrinter(_chart.filters())).style(attribute, null);
	        }
	        return _chart;
	    };

	    /**
	     * Turn off optional control elements within the root element.
	     * @method turnOffControls
	     * @memberof dc.baseMixin
	     * @see {@link dc.baseMixin#turnOnControls turnOnControls}
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.turnOffControls = function () {
	        if (_root) {
	            var attribute = _chart.controlsUseVisibility() ? 'visibility' : 'display';
	            var value = _chart.controlsUseVisibility() ? 'hidden' : 'none';
	            _chart.selectAll('.reset').style(attribute, value);
	            _chart.selectAll('.filter').style(attribute, value).text(_chart.filter());
	        }
	        return _chart;
	    };

	    /**
	     * Set or get the animation transition duration (in milliseconds) for this chart instance.
	     * @method transitionDuration
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {Number} [duration=750]
	     * @return {Number}
	     * @return {dc.baseMixin}
	     */
	    _chart.transitionDuration = function (duration) {
	        if (!arguments.length) {
	            return _transitionDuration;
	        }
	        _transitionDuration = duration;
	        return _chart;
	    };

	    _chart._mandatoryAttributes = function (_) {
	        if (!arguments.length) {
	            return _mandatoryAttributes;
	        }
	        _mandatoryAttributes = _;
	        return _chart;
	    };

	    function checkForMandatoryAttributes (a) {
	        if (!_chart[a] || !_chart[a]()) {
	            throw new dc.errors.InvalidStateException('Mandatory attribute chart.' + a +
	                ' is missing on chart[#' + _chart.anchorName() + ']');
	        }
	    }

	    /**
	     * Invoking this method will force the chart to re-render everything from scratch. Generally it
	     * should only be used to render the chart for the first time on the page or if you want to make
	     * sure everything is redrawn from scratch instead of relying on the default incremental redrawing
	     * behaviour.
	     * @method render
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.render = function () {
	        _height = _width = undefined; // force recalculate
	        _listeners.preRender(_chart);

	        if (_mandatoryAttributes) {
	            _mandatoryAttributes.forEach(checkForMandatoryAttributes);
	        }

	        var result = _chart._doRender();

	        if (_legend) {
	            _legend.render();
	        }

	        _chart._activateRenderlets('postRender');

	        return result;
	    };

	    _chart._activateRenderlets = function (event) {
	        _listeners.pretransition(_chart);
	        if (_chart.transitionDuration() > 0 && _svg) {
	            _svg.transition().duration(_chart.transitionDuration())
	                .each('end', function () {
	                    _listeners.renderlet(_chart);
	                    if (event) {
	                        _listeners[event](_chart);
	                    }
	                });
	        } else {
	            _listeners.renderlet(_chart);
	            if (event) {
	                _listeners[event](_chart);
	            }
	        }
	    };

	    /**
	     * Calling redraw will cause the chart to re-render data changes incrementally. If there is no
	     * change in the underlying data dimension then calling this method will have no effect on the
	     * chart. Most chart interaction in dc will automatically trigger this method through internal
	     * events (in particular {@link dc.redrawAll dc.redrawAll}); therefore, you only need to
	     * manually invoke this function if data is manipulated outside of dc's control (for example if
	     * data is loaded in the background using
	     * {@link https://github.com/square/crossfilter/wiki/API-Reference#crossfilter_add crossfilter.add}.
	     * @method redraw
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.redraw = function () {
	        sizeSvg();
	        _listeners.preRedraw(_chart);

	        var result = _chart._doRedraw();

	        if (_legend) {
	            _legend.render();
	        }

	        _chart._activateRenderlets('postRedraw');

	        return result;
	    };

	    /**
	     * Gets/sets the commit handler. If the chart has a commit handler, the handler will be called when
	     * the chart's filters have changed, in order to send the filter data asynchronously to a server.
	     *
	     * Unlike other functions in dc.js, the commit handler is asynchronous. It takes two arguments:
	     * a flag indicating whether this is a render (true) or a redraw (false), and a callback to be
	     * triggered once the commit is filtered. The callback has the standard node.js continuation signature
	     * with error first and result second.
	     * @method commitHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.commitHandler = function (commitHandler) {
	        if (!arguments.length) {
	            return _commitHandler;
	        }
	        _commitHandler = commitHandler;
	        return _chart;
	    };

	    /**
	     * Redraws all charts in the same group as this chart, typically in reaction to a filter
	     * change. If the chart has a {@link dc.baseMixin.commitFilter commitHandler}, it will
	     * be executed and waited for.
	     * @method redrawGroup
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.redrawGroup = function () {
	        if (_commitHandler) {
	            _commitHandler(false, function (error, result) {
	                if (error) {
	                    console.log(error);
	                } else {
	                    dc.redrawAll(_chart.chartGroup());
	                }
	            });
	        } else {
	            dc.redrawAll(_chart.chartGroup());
	        }
	        return _chart;
	    };

	    /**
	     * Renders all charts in the same group as this chart. If the chart has a
	     * {@link dc.baseMixin.commitFilter commitHandler}, it will be executed and waited for
	     * @method renderGroup
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.renderGroup = function () {
	        if (_commitHandler) {
	            _commitHandler(false, function (error, result) {
	                if (error) {
	                    console.log(error);
	                } else {
	                    dc.renderAll(_chart.chartGroup());
	                }
	            });
	        } else {
	            dc.renderAll(_chart.chartGroup());
	        }
	        return _chart;
	    };

	    _chart._invokeFilteredListener = function (f) {
	        if (f !== undefined) {
	            _listeners.filtered(_chart, f);
	        }
	    };

	    _chart._invokeZoomedListener = function () {
	        _listeners.zoomed(_chart);
	    };

	    var _hasFilterHandler = function (filters, filter) {
	        if (filter === null || typeof(filter) === 'undefined') {
	            return filters.length > 0;
	        }
	        return filters.some(function (f) {
	            return filter <= f && filter >= f;
	        });
	    };

	    /**
	     * Set or get the has filter handler. The has filter handler is a function that checks to see if
	     * the chart's current filters include a specific filter.  Using a custom has filter handler allows
	     * you to change the way filters are checked for and replaced.
	     * @method hasFilterHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default has filter handler
	     * chart.hasFilterHandler(function (filters, filter) {
	     *     if (filter === null || typeof(filter) === 'undefined') {
	     *         return filters.length > 0;
	     *     }
	     *     return filters.some(function (f) {
	     *         return filter <= f && filter >= f;
	     *     });
	     * });
	     *
	     * // custom filter handler (no-op)
	     * chart.hasFilterHandler(function(filters, filter) {
	     *     return false;
	     * });
	     * @param {Function} [hasFilterHandler]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.hasFilterHandler = function (hasFilterHandler) {
	        if (!arguments.length) {
	            return _hasFilterHandler;
	        }
	        _hasFilterHandler = hasFilterHandler;
	        return _chart;
	    };

	    /**
	     * Check whether any active filter or a specific filter is associated with particular chart instance.
	     * This function is **not chainable**.
	     * @method hasFilter
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#hasFilterHandler hasFilterHandler}
	     * @param {*} [filter]
	     * @return {Boolean}
	     */
	    _chart.hasFilter = function (filter) {
	        return _hasFilterHandler(_filters, filter);
	    };

	    var _removeFilterHandler = function (filters, filter) {
	        for (var i = 0; i < filters.length; i++) {
	            if (filters[i] <= filter && filters[i] >= filter) {
	                filters.splice(i, 1);
	                break;
	            }
	        }
	        return filters;
	    };

	    /**
	     * Set or get the remove filter handler. The remove filter handler is a function that removes a
	     * filter from the chart's current filters. Using a custom remove filter handler allows you to
	     * change how filters are removed or perform additional work when removing a filter, e.g. when
	     * using a filter server other than crossfilter.
	     *
	     * Any changes should modify the `filters` array argument and return that array.
	     * @method removeFilterHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default remove filter handler
	     * chart.removeFilterHandler(function (filters, filter) {
	     *     for (var i = 0; i < filters.length; i++) {
	     *         if (filters[i] <= filter && filters[i] >= filter) {
	     *             filters.splice(i, 1);
	     *             break;
	     *         }
	     *     }
	     *     return filters;
	     * });
	     *
	     * // custom filter handler (no-op)
	     * chart.removeFilterHandler(function(filters, filter) {
	     *     return filters;
	     * });
	     * @param {Function} [removeFilterHandler]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.removeFilterHandler = function (removeFilterHandler) {
	        if (!arguments.length) {
	            return _removeFilterHandler;
	        }
	        _removeFilterHandler = removeFilterHandler;
	        return _chart;
	    };

	    var _addFilterHandler = function (filters, filter) {
	        filters.push(filter);
	        return filters;
	    };

	    /**
	     * Set or get the add filter handler. The add filter handler is a function that adds a filter to
	     * the chart's filter list. Using a custom add filter handler allows you to change the way filters
	     * are added or perform additional work when adding a filter, e.g. when using a filter server other
	     * than crossfilter.
	     *
	     * Any changes should modify the `filters` array argument and return that array.
	     * @method addFilterHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default add filter handler
	     * chart.addFilterHandler(function (filters, filter) {
	     *     filters.push(filter);
	     *     return filters;
	     * });
	     *
	     * // custom filter handler (no-op)
	     * chart.addFilterHandler(function(filters, filter) {
	     *     return filters;
	     * });
	     * @param {Function} [addFilterHandler]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.addFilterHandler = function (addFilterHandler) {
	        if (!arguments.length) {
	            return _addFilterHandler;
	        }
	        _addFilterHandler = addFilterHandler;
	        return _chart;
	    };

	    var _resetFilterHandler = function (filters) {
	        return [];
	    };

	    /**
	     * Set or get the reset filter handler. The reset filter handler is a function that resets the
	     * chart's filter list by returning a new list. Using a custom reset filter handler allows you to
	     * change the way filters are reset, or perform additional work when resetting the filters,
	     * e.g. when using a filter server other than crossfilter.
	     *
	     * This function should return an array.
	     * @method resetFilterHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default remove filter handler
	     * function (filters) {
	     *     return [];
	     * }
	     *
	     * // custom filter handler (no-op)
	     * chart.resetFilterHandler(function(filters) {
	     *     return filters;
	     * });
	     * @param {Function} [resetFilterHandler]
	     * @return {dc.baseMixin}
	     */
	    _chart.resetFilterHandler = function (resetFilterHandler) {
	        if (!arguments.length) {
	            return _resetFilterHandler;
	        }
	        _resetFilterHandler = resetFilterHandler;
	        return _chart;
	    };

	    function applyFilters () {
	        if (_chart.dimension() && _chart.dimension().filter) {
	            var fs = _filterHandler(_chart.dimension(), _filters);
	            _filters = fs ? fs : _filters;
	        }
	    }

	    /**
	     * Replace the chart filter. This is equivalent to calling `chart.filter(null).filter(filter)`
	     *
	     * @method replaceFilter
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {*} [filter]
	     * @return {dc.baseMixin}
	     **/
	    _chart.replaceFilter = function (filter) {
	        _filters = _resetFilterHandler(_filters);
	        _chart.filter(filter);
	    };

	    /**
	     * Filter the chart by the given parameter, or return the current filter if no input parameter
	     * is given.
	     *
	     * The filter parameter can take one of these forms:
	     * * A single value: the value will be toggled (added if it is not present in the current
	     * filters, removed if it is present)
	     * * An array containing a single array of values (`[[value,value,value]]`): each value is
	     * toggled
	     * * When appropriate for the chart, a {@link dc.filters dc filter object} such as
	     *   * {@link dc.filters.RangedFilter `dc.filters.RangedFilter`} for the
	     * {@link dc.coordinateGridMixin dc.coordinateGridMixin} charts
	     *   * {@link dc.filters.TwoDimensionalFilter `dc.filters.TwoDimensionalFilter`} for the
	     * {@link dc.heatMap heat map}
	     *   * {@link dc.filters.RangedTwoDimensionalFilter `dc.filters.RangedTwoDimensionalFilter`}
	     * for the {@link dc.scatterPlot scatter plot}
	     * * `null`: the filter will be reset using the
	     * {@link dc.baseMixin#resetFilterHandler resetFilterHandler}
	     *
	     * Note that this is always a toggle (even when it doesn't make sense for the filter type). If
	     * you wish to replace the current filter, either call `chart.filter(null)` first, or
	     * equivalently, call {@link dc.baseMixin#replaceFilter `chart.replaceFilter(filter)`} instead.
	     *
	     * Each toggle is executed by checking if the value is already present using the
	     * {@link dc.baseMixin#hasFilterHandler hasFilterHandler}; if it is not present, it is added
	     * using the {@link dc.baseMixin#addFilterHandler addFilterHandler}; if it is already present,
	     * it is removed using the {@link dc.baseMixin#removeFilterHandler removeFilterHandler}.
	     *
	     * Once the filters array has been updated, the filters are applied to the
	     * crossfilter dimension, using the {@link dc.baseMixin#filterHandler filterHandler}.
	     *
	     * Once you have set the filters, call {@link dc.baseMixin#redrawGroup `chart.redrawGroup()`}
	     * (or {@link dc.redrawAll `dc.redrawAll()`}) to redraw the chart's group.
	     * @method filter
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link dc.baseMixin#addFilterHandler addFilterHandler}
	     * @see {@link dc.baseMixin#removeFilterHandler removeFilterHandler}
	     * @see {@link dc.baseMixin#resetFilterHandler resetFilterHandler}
	     * @see {@link dc.baseMixin#filterHandler filterHandler}
	     * @example
	     * // filter by a single string
	     * chart.filter('Sunday');
	     * // filter by a single age
	     * chart.filter(18);
	     * // filter by a set of states
	     * chart.filter([['MA', 'TX', 'ND', 'WA']]);
	     * // filter by range -- note the use of dc.filters.RangedFilter, which is different
	     * // from the syntax for filtering a crossfilter dimension directly, dimension.filter([15,20])
	     * chart.filter(dc.filters.RangedFilter(15,20));
	     * @param {*} [filter]
	     * @return {dc.baseMixin}
	     */
	    _chart.filter = function (filter) {
	        if (!arguments.length) {
	            return _filters.length > 0 ? _filters[0] : null;
	        }
	        if (filter instanceof Array && filter[0] instanceof Array && !filter.isFiltered) {
	            filter[0].forEach(function (d) {
	                if (_chart.hasFilter(d)) {
	                    _removeFilterHandler(_filters, d);
	                } else {
	                    _addFilterHandler(_filters, d);
	                }
	            });
	        } else if (filter === null) {
	            _filters = _resetFilterHandler(_filters);
	        } else {
	            if (_chart.hasFilter(filter)) {
	                _removeFilterHandler(_filters, filter);
	            } else {
	                _addFilterHandler(_filters, filter);
	            }
	        }
	        applyFilters();
	        _chart._invokeFilteredListener(filter);

	        if (_root !== null && _chart.hasFilter()) {
	            _chart.turnOnControls();
	        } else {
	            _chart.turnOffControls();
	        }

	        return _chart;
	    };

	    /**
	     * Returns all current filters. This method does not perform defensive cloning of the internal
	     * filter array before returning, therefore any modification of the returned array will effect the
	     * chart's internal filter storage.
	     * @method filters
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {Array<*>}
	     */
	    _chart.filters = function () {
	        return _filters;
	    };

	    _chart.highlightSelected = function (e) {
	        d3.select(e).classed(dc.constants.SELECTED_CLASS, true);
	        d3.select(e).classed(dc.constants.DESELECTED_CLASS, false);
	    };

	    _chart.fadeDeselected = function (e) {
	        d3.select(e).classed(dc.constants.SELECTED_CLASS, false);
	        d3.select(e).classed(dc.constants.DESELECTED_CLASS, true);
	    };

	    _chart.resetHighlight = function (e) {
	        d3.select(e).classed(dc.constants.SELECTED_CLASS, false);
	        d3.select(e).classed(dc.constants.DESELECTED_CLASS, false);
	    };

	    /**
	     * This function is passed to d3 as the onClick handler for each chart. The default behavior is to
	     * filter on the clicked datum (passed to the callback) and redraw the chart group.
	     * @method onClick
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {*} datum
	     */
	    _chart.onClick = function (datum) {
	        var filter = _chart.keyAccessor()(datum);
	        dc.events.trigger(function () {
	            _chart.filter(filter);
	            _chart.redrawGroup();
	        });
	    };

	    /**
	     * Set or get the filter handler. The filter handler is a function that performs the filter action
	     * on a specific dimension. Using a custom filter handler allows you to perform additional logic
	     * before or after filtering.
	     * @method filterHandler
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/square/crossfilter/wiki/API-Reference#dimension_filter crossfilter.dimension.filter}
	     * @example
	     * // default filter handler
	     * chart.filterHandler(function (dimension, filters) {
	     *     dimension.filter(null);
	     *     if (filters.length === 0) {
	     *         dimension.filter(null);
	     *     } else {
	     *         dimension.filterFunction(function (d) {
	     *             for (var i = 0; i < filters.length; i++) {
	     *                 var filter = filters[i];
	     *                 if (filter.isFiltered && filter.isFiltered(d)) {
	     *                     return true;
	     *                 } else if (filter <= d && filter >= d) {
	     *                     return true;
	     *                 }
	     *             }
	     *             return false;
	     *         });
	     *     }
	     *     return filters;
	     * });
	     *
	     * // custom filter handler
	     * chart.filterHandler(function(dimension, filter){
	     *     var newFilter = filter + 10;
	     *     dimension.filter(newFilter);
	     *     return newFilter; // set the actual filter value to the new value
	     * });
	     * @param {Function} [filterHandler]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.filterHandler = function (filterHandler) {
	        if (!arguments.length) {
	            return _filterHandler;
	        }
	        _filterHandler = filterHandler;
	        return _chart;
	    };

	    // abstract function stub
	    _chart._doRender = function () {
	        // do nothing in base, should be overridden by sub-function
	        return _chart;
	    };

	    _chart._doRedraw = function () {
	        // do nothing in base, should be overridden by sub-function
	        return _chart;
	    };

	    _chart.legendables = function () {
	        // do nothing in base, should be overridden by sub-function
	        return [];
	    };

	    _chart.legendHighlight = function () {
	        // do nothing in base, should be overridden by sub-function
	    };

	    _chart.legendReset = function () {
	        // do nothing in base, should be overridden by sub-function
	    };

	    _chart.legendToggle = function () {
	        // do nothing in base, should be overriden by sub-function
	    };

	    _chart.isLegendableHidden = function () {
	        // do nothing in base, should be overridden by sub-function
	        return false;
	    };

	    /**
	     * Set or get the key accessor function. The key accessor function is used to retrieve the key
	     * value from the crossfilter group. Key values are used differently in different charts, for
	     * example keys correspond to slices in a pie chart and x axis positions in a grid coordinate chart.
	     * @method keyAccessor
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default key accessor
	     * chart.keyAccessor(function(d) { return d.key; });
	     * // custom key accessor for a multi-value crossfilter reduction
	     * chart.keyAccessor(function(p) { return p.value.absGain; });
	     * @param {Function} [keyAccessor]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.keyAccessor = function (keyAccessor) {
	        if (!arguments.length) {
	            return _keyAccessor;
	        }
	        _keyAccessor = keyAccessor;
	        return _chart;
	    };

	    /**
	     * Set or get the value accessor function. The value accessor function is used to retrieve the
	     * value from the crossfilter group. Group values are used differently in different charts, for
	     * example values correspond to slice sizes in a pie chart and y axis positions in a grid
	     * coordinate chart.
	     * @method valueAccessor
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default value accessor
	     * chart.valueAccessor(function(d) { return d.value; });
	     * // custom value accessor for a multi-value crossfilter reduction
	     * chart.valueAccessor(function(p) { return p.value.percentageGain; });
	     * @param {Function} [valueAccessor]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.valueAccessor = function (valueAccessor) {
	        if (!arguments.length) {
	            return _valueAccessor;
	        }
	        _valueAccessor = valueAccessor;
	        return _chart;
	    };

	    /**
	     * Set or get the label function. The chart class will use this function to render labels for each
	     * child element in the chart, e.g. slices in a pie chart or bubbles in a bubble chart. Not every
	     * chart supports the label function, for example line chart does not use this function
	     * at all. By default, enables labels; pass false for the second parameter if this is not desired.
	     * @method label
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default label function just return the key
	     * chart.label(function(d) { return d.key; });
	     * // label function has access to the standard d3 data binding and can get quite complicated
	     * chart.label(function(d) { return d.data.key + '(' + Math.floor(d.data.value / all.value() * 100) + '%)'; });
	     * @param {Function} [labelFunction]
	     * @param {Boolean} [enableLabels=true]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.label = function (labelFunction, enableLabels) {
	        if (!arguments.length) {
	            return _label;
	        }
	        _label = labelFunction;
	        if ((enableLabels === undefined) || enableLabels) {
	            _renderLabel = true;
	        }
	        return _chart;
	    };

	    /**
	     * Turn on/off label rendering
	     * @method renderLabel
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {Boolean} [renderLabel=false]
	     * @return {Boolean}
	     * @return {dc.baseMixin}
	     */
	    _chart.renderLabel = function (renderLabel) {
	        if (!arguments.length) {
	            return _renderLabel;
	        }
	        _renderLabel = renderLabel;
	        return _chart;
	    };

	    /**
	     * Set or get the title function. The chart class will use this function to render the SVGElement title
	     * (usually interpreted by browser as tooltips) for each child element in the chart, e.g. a slice
	     * in a pie chart or a bubble in a bubble chart. Almost every chart supports the title function;
	     * however in grid coordinate charts you need to turn off the brush in order to see titles, because
	     * otherwise the brush layer will block tooltip triggering.
	     * @method title
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * // default title function shows "key: value"
	     * chart.title(function(d) { return d.key + ': ' + d.value; });
	     * // title function has access to the standard d3 data binding and can get quite complicated
	     * chart.title(function(p) {
	     *    return p.key.getFullYear()
	     *        + '\n'
	     *        + 'Index Gain: ' + numberFormat(p.value.absGain) + '\n'
	     *        + 'Index Gain in Percentage: ' + numberFormat(p.value.percentageGain) + '%\n'
	     *        + 'Fluctuation / Index Ratio: ' + numberFormat(p.value.fluctuationPercentage) + '%';
	     * });
	     * @param {Function} [titleFunction]
	     * @return {Function}
	     * @return {dc.baseMixin}
	     */
	    _chart.title = function (titleFunction) {
	        if (!arguments.length) {
	            return _title;
	        }
	        _title = titleFunction;
	        return _chart;
	    };

	    /**
	     * Turn on/off title rendering, or return the state of the render title flag if no arguments are
	     * given.
	     * @method renderTitle
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {Boolean} [renderTitle=true]
	     * @return {Boolean}
	     * @return {dc.baseMixin}
	     */
	    _chart.renderTitle = function (renderTitle) {
	        if (!arguments.length) {
	            return _renderTitle;
	        }
	        _renderTitle = renderTitle;
	        return _chart;
	    };

	    /**
	     * A renderlet is similar to an event listener on rendering event. Multiple renderlets can be added
	     * to an individual chart.  Each time a chart is rerendered or redrawn the renderlets are invoked
	     * right after the chart finishes its transitions, giving you a way to modify the SVGElements.
	     * Renderlet functions take the chart instance as the only input parameter and you can
	     * use the dc API or use raw d3 to achieve pretty much any effect.
	     *
	     * Use {@link dc.baseMixin#on on} with a 'renderlet' prefix.
	     * Generates a random key for the renderlet, which makes it hard to remove.
	     * @method renderlet
	     * @memberof dc.baseMixin
	     * @instance
	     * @deprecated
	     * @example
	     * // do this instead of .renderlet(function(chart) { ... })
	     * chart.on("renderlet", function(chart){
	     *     // mix of dc API and d3 manipulation
	     *     chart.select('g.y').style('display', 'none');
	     *     // its a closure so you can also access other chart variable available in the closure scope
	     *     moveChart.filter(chart.filter());
	     * });
	     * @param {Function} renderletFunction
	     * @return {dc.baseMixin}
	     */
	    _chart.renderlet = dc.logger.deprecate(function (renderletFunction) {
	        _chart.on('renderlet.' + dc.utils.uniqueId(), renderletFunction);
	        return _chart;
	    }, 'chart.renderlet has been deprecated.  Please use chart.on("renderlet.<renderletKey>", renderletFunction)');

	    /**
	     * Get or set the chart group to which this chart belongs. Chart groups are rendered or redrawn
	     * together since it is expected they share the same underlying crossfilter data set.
	     * @method chartGroup
	     * @memberof dc.baseMixin
	     * @instance
	     * @param {String} [chartGroup]
	     * @return {String}
	     * @return {dc.baseMixin}
	     */
	    _chart.chartGroup = function (chartGroup) {
	        if (!arguments.length) {
	            return _chartGroup;
	        }
	        if (!_isChild) {
	            dc.deregisterChart(_chart, _chartGroup);
	        }
	        _chartGroup = chartGroup;
	        if (!_isChild) {
	            dc.registerChart(_chart, _chartGroup);
	        }
	        return _chart;
	    };

	    /**
	     * Expire the internal chart cache. dc charts cache some data internally on a per chart basis to
	     * speed up rendering and avoid unnecessary calculation; however it might be useful to clear the
	     * cache if you have changed state which will affect rendering.  For example if you invoke the
	     * {@link https://github.com/square/crossfilter/wiki/API-Reference#crossfilter_add crossfilter.add}
	     * function or reset group or dimension after rendering it is a good idea to
	     * clear the cache to make sure charts are rendered properly.
	     * @method expireCache
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {dc.baseMixin}
	     */
	    _chart.expireCache = function () {
	        // do nothing in base, should be overridden by sub-function
	        return _chart;
	    };

	    /**
	     * Attach a dc.legend widget to this chart. The legend widget will automatically draw legend labels
	     * based on the color setting and names associated with each group.
	     * @method legend
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * chart.legend(dc.legend().x(400).y(10).itemHeight(13).gap(5))
	     * @param {dc.legend} [legend]
	     * @return {dc.legend}
	     * @return {dc.baseMixin}
	     */
	    _chart.legend = function (legend) {
	        if (!arguments.length) {
	            return _legend;
	        }
	        _legend = legend;
	        _legend.parent(_chart);
	        return _chart;
	    };

	    /**
	     * Returns the internal numeric ID of the chart.
	     * @method chartID
	     * @memberof dc.baseMixin
	     * @instance
	     * @return {String}
	     */
	    _chart.chartID = function () {
	        return _chart.__dcFlag__;
	    };

	    /**
	     * Set chart options using a configuration object. Each key in the object will cause the method of
	     * the same name to be called with the value to set that attribute for the chart.
	     * @method options
	     * @memberof dc.baseMixin
	     * @instance
	     * @example
	     * chart.options({dimension: myDimension, group: myGroup});
	     * @param {{}} opts
	     * @return {dc.baseMixin}
	     */
	    _chart.options = function (opts) {
	        var applyOptions = [
	            'anchor',
	            'group',
	            'xAxisLabel',
	            'yAxisLabel',
	            'stack',
	            'title',
	            'point',
	            'getColor',
	            'overlayGeoJson'
	        ];

	        for (var o in opts) {
	            if (typeof(_chart[o]) === 'function') {
	                if (opts[o] instanceof Array && applyOptions.indexOf(o) !== -1) {
	                    _chart[o].apply(_chart, opts[o]);
	                } else {
	                    _chart[o].call(_chart, opts[o]);
	                }
	            } else {
	                dc.logger.debug('Not a valid option setter name: ' + o);
	            }
	        }
	        return _chart;
	    };

	    /**
	     * All dc chart instance supports the following listeners.
	     * Supports the following events:
	     * * `renderlet` - This listener function will be invoked after transitions after redraw and render. Replaces the
	     * deprecated {@link dc.baseMixin#renderlet renderlet} method.
	     * * `pretransition` - Like `.on('renderlet', ...)` but the event is fired before transitions start.
	     * * `preRender` - This listener function will be invoked before chart rendering.
	     * * `postRender` - This listener function will be invoked after chart finish rendering including
	     * all renderlets' logic.
	     * * `preRedraw` - This listener function will be invoked before chart redrawing.
	     * * `postRedraw` - This listener function will be invoked after chart finish redrawing
	     * including all renderlets' logic.
	     * * `filtered` - This listener function will be invoked after a filter is applied, added or removed.
	     * * `zoomed` - This listener function will be invoked after a zoom is triggered.
	     * @method on
	     * @memberof dc.baseMixin
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Internals#dispatch_on d3.dispatch.on}
	     * @example
	     * .on('renderlet', function(chart, filter){...})
	     * .on('pretransition', function(chart, filter){...})
	     * .on('preRender', function(chart){...})
	     * .on('postRender', function(chart){...})
	     * .on('preRedraw', function(chart){...})
	     * .on('postRedraw', function(chart){...})
	     * .on('filtered', function(chart, filter){...})
	     * .on('zoomed', function(chart, filter){...})
	     * @param {String} event
	     * @param {Function} listener
	     * @return {dc.baseMixin}
	     */
	    _chart.on = function (event, listener) {
	        _listeners.on(event, listener);
	        return _chart;
	    };

	    return _chart;
	};

	/**
	 * Margin is a mixin that provides margin utility functions for both the Row Chart and Coordinate Grid
	 * Charts.
	 * @name marginMixin
	 * @memberof dc
	 * @mixin
	 * @param {Object} _chart
	 * @return {dc.marginMixin}
	 */
	dc.marginMixin = function (_chart) {
	    var _margin = {top: 10, right: 50, bottom: 30, left: 30};

	    /**
	     * Get or set the margins for a particular coordinate grid chart instance. The margins is stored as
	     * an associative Javascript array.
	     * @method margins
	     * @memberof dc.marginMixin
	     * @instance
	     * @example
	     * var leftMargin = chart.margins().left; // 30 by default
	     * chart.margins().left = 50;
	     * leftMargin = chart.margins().left; // now 50
	     * @param {{top: Number, right: Number, left: Number, bottom: Number}} [margins={top: 10, right: 50, bottom: 30, left: 30}]
	     * @return {{top: Number, right: Number, left: Number, bottom: Number}}
	     * @return {dc.marginMixin}
	     */
	    _chart.margins = function (margins) {
	        if (!arguments.length) {
	            return _margin;
	        }
	        _margin = margins;
	        return _chart;
	    };

	    _chart.effectiveWidth = function () {
	        return _chart.width() - _chart.margins().left - _chart.margins().right;
	    };

	    _chart.effectiveHeight = function () {
	        return _chart.height() - _chart.margins().top - _chart.margins().bottom;
	    };

	    return _chart;
	};

	/**
	 * The Color Mixin is an abstract chart functional class providing universal coloring support
	 * as a mix-in for any concrete chart implementation.
	 * @name colorMixin
	 * @memberof dc
	 * @mixin
	 * @param {Object} _chart
	 * @return {dc.colorMixin}
	 */
	dc.colorMixin = function (_chart) {
	    var _colors = d3.scale.category20c();
	    var _defaultAccessor = true;

	    var _colorAccessor = function (d) { return _chart.keyAccessor()(d); };

	    /**
	     * Retrieve current color scale or set a new color scale. This methods accepts any function that
	     * operates like a d3 scale.
	     * @method colors
	     * @memberof dc.colorMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/Scales d3.scale}
	     * @example
	     * // alternate categorical scale
	     * chart.colors(d3.scale.category20b());
	     * // ordinal scale
	     * chart.colors(d3.scale.ordinal().range(['red','green','blue']));
	     * // convenience method, the same as above
	     * chart.ordinalColors(['red','green','blue']);
	     * // set a linear scale
	     * chart.linearColors(["#4575b4", "#ffffbf", "#a50026"]);
	     * @param {d3.scale} [colorScale=d3.scale.category20c()]
	     * @return {d3.scale}
	     * @return {dc.colorMixin}
	     */
	    _chart.colors = function (colorScale) {
	        if (!arguments.length) {
	            return _colors;
	        }
	        if (colorScale instanceof Array) {
	            _colors = d3.scale.quantize().range(colorScale); // deprecated legacy support, note: this fails for ordinal domains
	        } else {
	            _colors = d3.functor(colorScale);
	        }
	        return _chart;
	    };

	    /**
	     * Convenience method to set the color scale to
	     * {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales#ordinal d3.scale.ordinal} with
	     * range `r`.
	     * @method ordinalColors
	     * @memberof dc.colorMixin
	     * @instance
	     * @param {Array<String>} r
	     * @return {dc.colorMixin}
	     */
	    _chart.ordinalColors = function (r) {
	        return _chart.colors(d3.scale.ordinal().range(r));
	    };

	    /**
	     * Convenience method to set the color scale to an Hcl interpolated linear scale with range `r`.
	     * @method linearColors
	     * @memberof dc.colorMixin
	     * @instance
	     * @param {Array<Number>} r
	     * @return {dc.colorMixin}
	     */
	    _chart.linearColors = function (r) {
	        return _chart.colors(d3.scale.linear()
	                             .range(r)
	                             .interpolate(d3.interpolateHcl));
	    };

	    /**
	     * Set or the get color accessor function. This function will be used to map a data point in a
	     * crossfilter group to a color value on the color scale. The default function uses the key
	     * accessor.
	     * @method colorAccessor
	     * @memberof dc.colorMixin
	     * @instance
	     * @example
	     * // default index based color accessor
	     * .colorAccessor(function (d, i){return i;})
	     * // color accessor for a multi-value crossfilter reduction
	     * .colorAccessor(function (d){return d.value.absGain;})
	     * @param {Function} [colorAccessor]
	     * @return {Function}
	     * @return {dc.colorMixin}
	     */
	    _chart.colorAccessor = function (colorAccessor) {
	        if (!arguments.length) {
	            return _colorAccessor;
	        }
	        _colorAccessor = colorAccessor;
	        _defaultAccessor = false;
	        return _chart;
	    };

	    // what is this?
	    _chart.defaultColorAccessor = function () {
	        return _defaultAccessor;
	    };

	    /**
	     * Set or get the current domain for the color mapping function. The domain must be supplied as an
	     * array.
	     *
	     * Note: previously this method accepted a callback function. Instead you may use a custom scale
	     * set by {@link dc.colorMixin#colors .colors}.
	     * @method colorDomain
	     * @memberof dc.colorMixin
	     * @instance
	     * @param {Array<String>} [domain]
	     * @return {Array<String>}
	     * @return {dc.colorMixin}
	     */
	    _chart.colorDomain = function (domain) {
	        if (!arguments.length) {
	            return _colors.domain();
	        }
	        _colors.domain(domain);
	        return _chart;
	    };

	    /**
	     * Set the domain by determining the min and max values as retrieved by
	     * {@link dc.colorMixin#colorAccessor .colorAccessor} over the chart's dataset.
	     * @method calculateColorDomain
	     * @memberof dc.colorMixin
	     * @instance
	     * @return {dc.colorMixin}
	     */
	    _chart.calculateColorDomain = function () {
	        var newDomain = [d3.min(_chart.data(), _chart.colorAccessor()),
	                         d3.max(_chart.data(), _chart.colorAccessor())];
	        _colors.domain(newDomain);
	        return _chart;
	    };

	    /**
	     * Get the color for the datum d and counter i. This is used internally by charts to retrieve a color.
	     * @method getColor
	     * @memberof dc.colorMixin
	     * @instance
	     * @param {*} d
	     * @param {Number} [i]
	     * @return {String}
	     */
	    _chart.getColor = function (d, i) {
	        return _colors(_colorAccessor.call(this, d, i));
	    };

	    /**
	     * Get the color for the datum d and counter i. This is used internally by charts to retrieve a color.
	     * @method colorCalculator
	     * @memberof dc.colorMixin
	     * @instance
	     * @param {*} [colorCalculator]
	     * @return {*}
	     */
	    _chart.colorCalculator = function (colorCalculator) {
	        if (!arguments.length) {
	            return _chart.getColor;
	        }
	        _chart.getColor = colorCalculator;
	        return _chart;
	    };

	    return _chart;
	};

	/**
	 * Coordinate Grid is an abstract base chart designed to support a number of coordinate grid based
	 * concrete chart types, e.g. bar chart, line chart, and bubble chart.
	 * @name coordinateGridMixin
	 * @memberof dc
	 * @mixin
	 * @mixes dc.colorMixin
	 * @mixes dc.marginMixin
	 * @mixes dc.baseMixin
	 * @param {Object} _chart
	 * @return {dc.coordinateGridMixin}
	 */
	dc.coordinateGridMixin = function (_chart) {
	    var GRID_LINE_CLASS = 'grid-line';
	    var HORIZONTAL_CLASS = 'horizontal';
	    var VERTICAL_CLASS = 'vertical';
	    var Y_AXIS_LABEL_CLASS = 'y-axis-label';
	    var X_AXIS_LABEL_CLASS = 'x-axis-label';
	    var DEFAULT_AXIS_LABEL_PADDING = 12;

	    _chart = dc.colorMixin(dc.marginMixin(dc.baseMixin(_chart)));

	    _chart.colors(d3.scale.category10());
	    _chart._mandatoryAttributes().push('x');

	    function zoomHandler () {
	        _refocused = true;
	        if (_zoomOutRestrict) {
	            _chart.x().domain(constrainRange(_chart.x().domain(), _xOriginalDomain));
	            if (_rangeChart) {
	                _chart.x().domain(constrainRange(_chart.x().domain(), _rangeChart.x().domain()));
	            }
	        }

	        var domain = _chart.x().domain();
	        var domFilter = dc.filters.RangedFilter(domain[0], domain[1]);

	        _chart.replaceFilter(domFilter);
	        _chart.rescale();
	        _chart.redraw();

	        if (_rangeChart && !rangesEqual(_chart.filter(), _rangeChart.filter())) {
	            dc.events.trigger(function () {
	                _rangeChart.replaceFilter(domFilter);
	                _rangeChart.redraw();
	            });
	        }

	        _chart._invokeZoomedListener();

	        dc.events.trigger(function () {
	            _chart.redrawGroup();
	        }, dc.constants.EVENT_DELAY);

	        _refocused = !rangesEqual(domain, _xOriginalDomain);
	    }

	    var _parent;
	    var _g;
	    var _chartBodyG;

	    var _x;
	    var _xOriginalDomain;
	    var _xAxis = d3.svg.axis().orient('bottom');
	    var _xUnits = dc.units.integers;
	    var _xAxisPadding = 0;
	    var _xElasticity = false;
	    var _xAxisLabel;
	    var _xAxisLabelPadding = 0;
	    var _lastXDomain;

	    var _y;
	    var _yAxis = d3.svg.axis().orient('left');
	    var _yAxisPadding = 0;
	    var _yElasticity = false;
	    var _yAxisLabel;
	    var _yAxisLabelPadding = 0;

	    var _brush = d3.svg.brush();
	    var _brushOn = true;
	    var _round;

	    var _renderHorizontalGridLine = false;
	    var _renderVerticalGridLine = false;

	    var _refocused = false, _resizing = false;
	    var _unitCount;

	    var _zoomScale = [1, Infinity];
	    var _zoomOutRestrict = true;

	    var _zoom = d3.behavior.zoom().on('zoom', zoomHandler);
	    var _nullZoom = d3.behavior.zoom().on('zoom', null);
	    var _hasBeenMouseZoomable = false;

	    var _rangeChart;
	    var _focusChart;

	    var _mouseZoomable = false;
	    var _clipPadding = 0;

	    var _outerRangeBandPadding = 0.5;
	    var _rangeBandPadding = 0;

	    var _useRightYAxis = false;

	    /**
	     * When changing the domain of the x or y scale, it is necessary to tell the chart to recalculate
	     * and redraw the axes. (`.rescale()` is called automatically when the x or y scale is replaced
	     * with {@link dc.coordinateGridMixin+x .x()} or {@link dc.coordinateGridMixin#y .y()}, and has
	     * no effect on elastic scales.)
	     * @method rescale
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.rescale = function () {
	        _unitCount = undefined;
	        _resizing = true;
	        return _chart;
	    };

	    _chart.resizing = function () {
	        return _resizing;
	    };

	    /**
	     * Get or set the range selection chart associated with this instance. Setting the range selection
	     * chart using this function will automatically update its selection brush when the current chart
	     * zooms in. In return the given range chart will also automatically attach this chart as its focus
	     * chart hence zoom in when range brush updates.
	     *
	     * Usually the range and focus charts will share a dimension. The range chart will set the zoom
	     * boundaries for the focus chart, so its dimension values must be compatible with the domain of
	     * the focus chart.
	     *
	     * See the [Nasdaq 100 Index](http://dc-js.github.com/dc.js/) example for this effect in action.
	     * @method rangeChart
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {dc.coordinateGridMixin} [rangeChart]
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.rangeChart = function (rangeChart) {
	        if (!arguments.length) {
	            return _rangeChart;
	        }
	        _rangeChart = rangeChart;
	        _rangeChart.focusChart(_chart);
	        return _chart;
	    };

	    /**
	     * Get or set the scale extent for mouse zooms.
	     * @method zoomScale
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Array<Number|Date>} [extent=[1, Infinity]]
	     * @return {Array<Number|Date>}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.zoomScale = function (extent) {
	        if (!arguments.length) {
	            return _zoomScale;
	        }
	        _zoomScale = extent;
	        return _chart;
	    };

	    /**
	     * Get or set the zoom restriction for the chart. If true limits the zoom to origional domain of the chart.
	     * @method zoomOutRestrict
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [zoomOutRestrict=true]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.zoomOutRestrict = function (zoomOutRestrict) {
	        if (!arguments.length) {
	            return _zoomOutRestrict;
	        }
	        _zoomScale[0] = zoomOutRestrict ? 1 : 0;
	        _zoomOutRestrict = zoomOutRestrict;
	        return _chart;
	    };

	    _chart._generateG = function (parent) {
	        if (parent === undefined) {
	            _parent = _chart.svg();
	        } else {
	            _parent = parent;
	        }

	        var href = window.location.href.split('#')[0];

	        _g = _parent.append('g');

	        _chartBodyG = _g.append('g').attr('class', 'chart-body')
	            .attr('transform', 'translate(' + _chart.margins().left + ', ' + _chart.margins().top + ')')
	            .attr('clip-path', 'url(' + href + '#' + getClipPathId() + ')');

	        return _g;
	    };

	    /**
	     * Get or set the root g element. This method is usually used to retrieve the g element in order to
	     * overlay custom svg drawing programatically. **Caution**: The root g element is usually generated
	     * by dc.js internals, and resetting it might produce unpredictable result.
	     * @method g
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {SVGElement} [gElement]
	     * @return {SVGElement}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.g = function (gElement) {
	        if (!arguments.length) {
	            return _g;
	        }
	        _g = gElement;
	        return _chart;
	    };

	    /**
	     * Set or get mouse zoom capability flag (default: false). When turned on the chart will be
	     * zoomable using the mouse wheel. If the range selector chart is attached zooming will also update
	     * the range selection brush on the associated range selector chart.
	     * @method mouseZoomable
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [mouseZoomable=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.mouseZoomable = function (mouseZoomable) {
	        if (!arguments.length) {
	            return _mouseZoomable;
	        }
	        _mouseZoomable = mouseZoomable;
	        return _chart;
	    };

	    /**
	     * Retrieve the svg group for the chart body.
	     * @method chartBodyG
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {SVGElement} [chartBodyG]
	     * @return {SVGElement}
	     */
	    _chart.chartBodyG = function (chartBodyG) {
	        if (!arguments.length) {
	            return _chartBodyG;
	        }
	        _chartBodyG = chartBodyG;
	        return _chart;
	    };

	    /**
	     * **mandatory**
	     *
	     * Get or set the x scale. The x scale can be any d3
	     * {@link https://github.com/mbostock/d3/wiki/Quantitative-Scales quantitive scale} or
	     * {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales ordinal scale}.
	     * @method x
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/Scales d3.scale}
	     * @example
	     * // set x to a linear scale
	     * chart.x(d3.scale.linear().domain([-2500, 2500]))
	     * // set x to a time scale to generate histogram
	     * chart.x(d3.time.scale().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
	     * @param {d3.scale} [xScale]
	     * @return {d3.scale}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.x = function (xScale) {
	        if (!arguments.length) {
	            return _x;
	        }
	        _x = xScale;
	        _xOriginalDomain = _x.domain();
	        _chart.rescale();
	        return _chart;
	    };

	    _chart.xOriginalDomain = function () {
	        return _xOriginalDomain;
	    };

	    /**
	     * Set or get the xUnits function. The coordinate grid chart uses the xUnits function to calculate
	     * the number of data projections on x axis such as the number of bars for a bar chart or the
	     * number of dots for a line chart. This function is expected to return a Javascript array of all
	     * data points on x axis, or the number of points on the axis. [d3 time range functions
	     * d3.time.days, d3.time.months, and
	     * d3.time.years](https://github.com/mbostock/d3/wiki/Time-Intervals#aliases) are all valid xUnits
	     * function. dc.js also provides a few units function, see the {@link dc.utils Utilities} section for
	     * a list of built-in units functions. The default xUnits function is dc.units.integers.
	     * @method xUnits
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @todo Add docs for utilities
	     * @example
	     * // set x units to count days
	     * chart.xUnits(d3.time.days);
	     * // set x units to count months
	     * chart.xUnits(d3.time.months);
	     *
	     * // A custom xUnits function can be used as long as it follows the following interface:
	     * // units in integer
	     * function(start, end, xDomain) {
	     *      // simply calculates how many integers in the domain
	     *      return Math.abs(end - start);
	     * };
	     *
	     * // fixed units
	     * function(start, end, xDomain) {
	     *      // be aware using fixed units will disable the focus/zoom ability on the chart
	     *      return 1000;
	     * @param {Function} [xUnits]
	     * @return {Function}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.xUnits = function (xUnits) {
	        if (!arguments.length) {
	            return _xUnits;
	        }
	        _xUnits = xUnits;
	        return _chart;
	    };

	    /**
	     * Set or get the x axis used by a particular coordinate grid chart instance. This function is most
	     * useful when x axis customization is required. The x axis in dc.js is an instance of a [d3
	     * axis object](https://github.com/mbostock/d3/wiki/SVG-Axes#wiki-axis); therefore it supports any
	     * valid d3 axis manipulation. **Caution**: The x axis is usually generated internally by dc;
	     * resetting it may cause unexpected results.
	     * @method xAxis
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/SVG-Axes d3.svg.axis}
	     * @example
	     * // customize x axis tick format
	     * chart.xAxis().tickFormat(function(v) {return v + '%';});
	     * // customize x axis tick values
	     * chart.xAxis().tickValues([0, 100, 200, 300]);
	     * @param {d3.svg.axis} [xAxis=d3.svg.axis().orient('bottom')]
	     * @return {d3.svg.axis}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.xAxis = function (xAxis) {
	        if (!arguments.length) {
	            return _xAxis;
	        }
	        _xAxis = xAxis;
	        return _chart;
	    };

	    /**
	     * Turn on/off elastic x axis behavior. If x axis elasticity is turned on, then the grid chart will
	     * attempt to recalculate the x axis range whenever a redraw event is triggered.
	     * @method elasticX
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [elasticX=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.elasticX = function (elasticX) {
	        if (!arguments.length) {
	            return _xElasticity;
	        }
	        _xElasticity = elasticX;
	        return _chart;
	    };

	    /**
	     * Set or get x axis padding for the elastic x axis. The padding will be added to both end of the x
	     * axis if elasticX is turned on; otherwise it is ignored.
	     *
	     * padding can be an integer or percentage in string (e.g. '10%'). Padding can be applied to
	     * number or date x axes.  When padding a date axis, an integer represents number of days being padded
	     * and a percentage string will be treated the same as an integer.
	     * @method xAxisPadding
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Number|String} [padding=0]
	     * @return {Number|String}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.xAxisPadding = function (padding) {
	        if (!arguments.length) {
	            return _xAxisPadding;
	        }
	        _xAxisPadding = padding;
	        return _chart;
	    };

	    /**
	     * Returns the number of units displayed on the x axis using the unit measure configured by
	     * .xUnits.
	     * @method xUnitCount
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {Number}
	     */
	    _chart.xUnitCount = function () {
	        if (_unitCount === undefined) {
	            var units = _chart.xUnits()(_chart.x().domain()[0], _chart.x().domain()[1], _chart.x().domain());

	            if (units instanceof Array) {
	                _unitCount = units.length;
	            } else {
	                _unitCount = units;
	            }
	        }

	        return _unitCount;
	    };

	    /**
	     * Gets or sets whether the chart should be drawn with a right axis instead of a left axis. When
	     * used with a chart in a composite chart, allows both left and right Y axes to be shown on a
	     * chart.
	     * @method useRightYAxis
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [useRightYAxis=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.useRightYAxis = function (useRightYAxis) {
	        if (!arguments.length) {
	            return _useRightYAxis;
	        }
	        _useRightYAxis = useRightYAxis;
	        return _chart;
	    };

	    /**
	     * Returns true if the chart is using ordinal xUnits ({@link dc.units.ordinal dc.units.ordinal}, or false
	     * otherwise. Most charts behave differently with ordinal data and use the result of this method to
	     * trigger the appropriate logic.
	     * @method isOrdinal
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {Boolean}
	     */
	    _chart.isOrdinal = function () {
	        return _chart.xUnits() === dc.units.ordinal;
	    };

	    _chart._useOuterPadding = function () {
	        return true;
	    };

	    _chart._ordinalXDomain = function () {
	        var groups = _chart._computeOrderedGroups(_chart.data());
	        return groups.map(_chart.keyAccessor());
	    };

	    function compareDomains (d1, d2) {
	        return !d1 || !d2 || d1.length !== d2.length ||
	            d1.some(function (elem, i) { return (elem && d2[i]) ? elem.toString() !== d2[i].toString() : elem === d2[i]; });
	    }

	    function prepareXAxis (g, render) {
	        if (!_chart.isOrdinal()) {
	            if (_chart.elasticX()) {
	                _x.domain([_chart.xAxisMin(), _chart.xAxisMax()]);
	            }
	        } else { // _chart.isOrdinal()
	            if (_chart.elasticX() || _x.domain().length === 0) {
	                _x.domain(_chart._ordinalXDomain());
	            }
	        }

	        // has the domain changed?
	        var xdom = _x.domain();
	        if (render || compareDomains(_lastXDomain, xdom)) {
	            _chart.rescale();
	        }
	        _lastXDomain = xdom;

	        // please can't we always use rangeBands for bar charts?
	        if (_chart.isOrdinal()) {
	            _x.rangeBands([0, _chart.xAxisLength()], _rangeBandPadding,
	                          _chart._useOuterPadding() ? _outerRangeBandPadding : 0);
	        } else {
	            _x.range([0, _chart.xAxisLength()]);
	        }

	        _xAxis = _xAxis.scale(_chart.x());

	        renderVerticalGridLines(g);
	    }

	    _chart.renderXAxis = function (g) {
	        var axisXG = g.selectAll('g.x');

	        if (axisXG.empty()) {
	            axisXG = g.append('g')
	                .attr('class', 'axis x')
	                .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart._xAxisY() + ')');
	        }

	        var axisXLab = g.selectAll('text.' + X_AXIS_LABEL_CLASS);
	        if (axisXLab.empty() && _chart.xAxisLabel()) {
	            axisXLab = g.append('text')
	                .attr('class', X_AXIS_LABEL_CLASS)
	                .attr('transform', 'translate(' + (_chart.margins().left + _chart.xAxisLength() / 2) + ',' +
	                      (_chart.height() - _xAxisLabelPadding) + ')')
	                .attr('text-anchor', 'middle');
	        }
	        if (_chart.xAxisLabel() && axisXLab.text() !== _chart.xAxisLabel()) {
	            axisXLab.text(_chart.xAxisLabel());
	        }

	        dc.transition(axisXG, _chart.transitionDuration())
	            .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart._xAxisY() + ')')
	            .call(_xAxis);
	        dc.transition(axisXLab, _chart.transitionDuration())
	            .attr('transform', 'translate(' + (_chart.margins().left + _chart.xAxisLength() / 2) + ',' +
	                  (_chart.height() - _xAxisLabelPadding) + ')');
	    };

	    function renderVerticalGridLines (g) {
	        var gridLineG = g.selectAll('g.' + VERTICAL_CLASS);

	        if (_renderVerticalGridLine) {
	            if (gridLineG.empty()) {
	                gridLineG = g.insert('g', ':first-child')
	                    .attr('class', GRID_LINE_CLASS + ' ' + VERTICAL_CLASS)
	                    .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart.margins().top + ')');
	            }

	            var ticks = _xAxis.tickValues() ? _xAxis.tickValues() :
	                    (typeof _x.ticks === 'function' ? _x.ticks(_xAxis.ticks()[0]) : _x.domain());

	            var lines = gridLineG.selectAll('line')
	                .data(ticks);

	            // enter
	            var linesGEnter = lines.enter()
	                .append('line')
	                .attr('x1', function (d) {
	                    return _x(d);
	                })
	                .attr('y1', _chart._xAxisY() - _chart.margins().top)
	                .attr('x2', function (d) {
	                    return _x(d);
	                })
	                .attr('y2', 0)
	                .attr('opacity', 0);
	            dc.transition(linesGEnter, _chart.transitionDuration())
	                .attr('opacity', 1);

	            // update
	            dc.transition(lines, _chart.transitionDuration())
	                .attr('x1', function (d) {
	                    return _x(d);
	                })
	                .attr('y1', _chart._xAxisY() - _chart.margins().top)
	                .attr('x2', function (d) {
	                    return _x(d);
	                })
	                .attr('y2', 0);

	            // exit
	            lines.exit().remove();
	        } else {
	            gridLineG.selectAll('line').remove();
	        }
	    }

	    _chart._xAxisY = function () {
	        return (_chart.height() - _chart.margins().bottom);
	    };

	    _chart.xAxisLength = function () {
	        return _chart.effectiveWidth();
	    };

	    /**
	     * Set or get the x axis label. If setting the label, you may optionally include additional padding to
	     * the margin to make room for the label. By default the padded is set to 12 to accomodate the text height.
	     * @method xAxisLabel
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {String} [labelText]
	     * @param {Number} [padding=12]
	     * @return {String}
	     */
	    _chart.xAxisLabel = function (labelText, padding) {
	        if (!arguments.length) {
	            return _xAxisLabel;
	        }
	        _xAxisLabel = labelText;
	        _chart.margins().bottom -= _xAxisLabelPadding;
	        _xAxisLabelPadding = (padding === undefined) ? DEFAULT_AXIS_LABEL_PADDING : padding;
	        _chart.margins().bottom += _xAxisLabelPadding;
	        return _chart;
	    };

	    _chart._prepareYAxis = function (g) {
	        if (_y === undefined || _chart.elasticY()) {
	            if (_y === undefined) {
	                _y = d3.scale.linear();
	            }
	            var min = _chart.yAxisMin() || 0,
	                max = _chart.yAxisMax() || 0;
	            _y.domain([min, max]).rangeRound([_chart.yAxisHeight(), 0]);
	        }

	        _y.range([_chart.yAxisHeight(), 0]);
	        _yAxis = _yAxis.scale(_y);

	        if (_useRightYAxis) {
	            _yAxis.orient('right');
	        }

	        _chart._renderHorizontalGridLinesForAxis(g, _y, _yAxis);
	    };

	    _chart.renderYAxisLabel = function (axisClass, text, rotation, labelXPosition) {
	        labelXPosition = labelXPosition || _yAxisLabelPadding;

	        var axisYLab = _chart.g().selectAll('text.' + Y_AXIS_LABEL_CLASS + '.' + axisClass + '-label');
	        var labelYPosition = (_chart.margins().top + _chart.yAxisHeight() / 2);
	        if (axisYLab.empty() && text) {
	            axisYLab = _chart.g().append('text')
	                .attr('transform', 'translate(' + labelXPosition + ',' + labelYPosition + '),rotate(' + rotation + ')')
	                .attr('class', Y_AXIS_LABEL_CLASS + ' ' + axisClass + '-label')
	                .attr('text-anchor', 'middle')
	                .text(text);
	        }
	        if (text && axisYLab.text() !== text) {
	            axisYLab.text(text);
	        }
	        dc.transition(axisYLab, _chart.transitionDuration())
	            .attr('transform', 'translate(' + labelXPosition + ',' + labelYPosition + '),rotate(' + rotation + ')');
	    };

	    _chart.renderYAxisAt = function (axisClass, axis, position) {
	        var axisYG = _chart.g().selectAll('g.' + axisClass);
	        if (axisYG.empty()) {
	            axisYG = _chart.g().append('g')
	                .attr('class', 'axis ' + axisClass)
	                .attr('transform', 'translate(' + position + ',' + _chart.margins().top + ')');
	        }

	        dc.transition(axisYG, _chart.transitionDuration())
	            .attr('transform', 'translate(' + position + ',' + _chart.margins().top + ')')
	            .call(axis);
	    };

	    _chart.renderYAxis = function () {
	        var axisPosition = _useRightYAxis ? (_chart.width() - _chart.margins().right) : _chart._yAxisX();
	        _chart.renderYAxisAt('y', _yAxis, axisPosition);
	        var labelPosition = _useRightYAxis ? (_chart.width() - _yAxisLabelPadding) : _yAxisLabelPadding;
	        var rotation = _useRightYAxis ? 90 : -90;
	        _chart.renderYAxisLabel('y', _chart.yAxisLabel(), rotation, labelPosition);
	    };

	    _chart._renderHorizontalGridLinesForAxis = function (g, scale, axis) {
	        var gridLineG = g.selectAll('g.' + HORIZONTAL_CLASS);

	        if (_renderHorizontalGridLine) {
	            var ticks = axis.tickValues() ? axis.tickValues() : scale.ticks(axis.ticks()[0]);

	            if (gridLineG.empty()) {
	                gridLineG = g.insert('g', ':first-child')
	                    .attr('class', GRID_LINE_CLASS + ' ' + HORIZONTAL_CLASS)
	                    .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart.margins().top + ')');
	            }

	            var lines = gridLineG.selectAll('line')
	                .data(ticks);

	            // enter
	            var linesGEnter = lines.enter()
	                .append('line')
	                .attr('x1', 1)
	                .attr('y1', function (d) {
	                    return scale(d);
	                })
	                .attr('x2', _chart.xAxisLength())
	                .attr('y2', function (d) {
	                    return scale(d);
	                })
	                .attr('opacity', 0);
	            dc.transition(linesGEnter, _chart.transitionDuration())
	                .attr('opacity', 1);

	            // update
	            dc.transition(lines, _chart.transitionDuration())
	                .attr('x1', 1)
	                .attr('y1', function (d) {
	                    return scale(d);
	                })
	                .attr('x2', _chart.xAxisLength())
	                .attr('y2', function (d) {
	                    return scale(d);
	                });

	            // exit
	            lines.exit().remove();
	        } else {
	            gridLineG.selectAll('line').remove();
	        }
	    };

	    _chart._yAxisX = function () {
	        return _chart.useRightYAxis() ? _chart.width() - _chart.margins().right : _chart.margins().left;
	    };

	    /**
	     * Set or get the y axis label. If setting the label, you may optionally include additional padding
	     * to the margin to make room for the label. By default the padded is set to 12 to accomodate the
	     * text height.
	     * @method yAxisLabel
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {String} [labelText]
	     * @param {Number} [padding=12]
	     * @return {String}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.yAxisLabel = function (labelText, padding) {
	        if (!arguments.length) {
	            return _yAxisLabel;
	        }
	        _yAxisLabel = labelText;
	        _chart.margins().left -= _yAxisLabelPadding;
	        _yAxisLabelPadding = (padding === undefined) ? DEFAULT_AXIS_LABEL_PADDING : padding;
	        _chart.margins().left += _yAxisLabelPadding;
	        return _chart;
	    };

	    /**
	     * Get or set the y scale. The y scale is typically automatically determined by the chart implementation.
	     * @method y
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/Scales d3.scale}
	     * @param {d3.scale} [yScale]
	     * @return {d3.scale}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.y = function (yScale) {
	        if (!arguments.length) {
	            return _y;
	        }
	        _y = yScale;
	        _chart.rescale();
	        return _chart;
	    };

	    /**
	     * Set or get the y axis used by the coordinate grid chart instance. This function is most useful
	     * when y axis customization is required. The y axis in dc.js is simply an instance of a [d3 axis
	     * object](https://github.com/mbostock/d3/wiki/SVG-Axes#wiki-_axis); therefore it supports any
	     * valid d3 axis manipulation. **Caution**: The y axis is usually generated internally by dc;
	     * resetting it may cause unexpected results.
	     * @method yAxis
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/SVG-Axes d3.svg.axis}
	     * @example
	     * // customize y axis tick format
	     * chart.yAxis().tickFormat(function(v) {return v + '%';});
	     * // customize y axis tick values
	     * chart.yAxis().tickValues([0, 100, 200, 300]);
	     * @param {d3.svg.axis} [yAxis=d3.svg.axis().orient('left')]
	     * @return {d3.svg.axis}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.yAxis = function (yAxis) {
	        if (!arguments.length) {
	            return _yAxis;
	        }
	        _yAxis = yAxis;
	        return _chart;
	    };

	    /**
	     * Turn on/off elastic y axis behavior. If y axis elasticity is turned on, then the grid chart will
	     * attempt to recalculate the y axis range whenever a redraw event is triggered.
	     * @method elasticY
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [elasticY=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.elasticY = function (elasticY) {
	        if (!arguments.length) {
	            return _yElasticity;
	        }
	        _yElasticity = elasticY;
	        return _chart;
	    };

	    /**
	     * Turn on/off horizontal grid lines.
	     * @method renderHorizontalGridLines
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [renderHorizontalGridLines=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.renderHorizontalGridLines = function (renderHorizontalGridLines) {
	        if (!arguments.length) {
	            return _renderHorizontalGridLine;
	        }
	        _renderHorizontalGridLine = renderHorizontalGridLines;
	        return _chart;
	    };

	    /**
	     * Turn on/off vertical grid lines.
	     * @method renderVerticalGridLines
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [renderVerticalGridLines=false]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.renderVerticalGridLines = function (renderVerticalGridLines) {
	        if (!arguments.length) {
	            return _renderVerticalGridLine;
	        }
	        _renderVerticalGridLine = renderVerticalGridLines;
	        return _chart;
	    };

	    /**
	     * Calculates the minimum x value to display in the chart. Includes xAxisPadding if set.
	     * @method xAxisMin
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {*}
	     */
	    _chart.xAxisMin = function () {
	        var min = d3.min(_chart.data(), function (e) {
	            return _chart.keyAccessor()(e);
	        });
	        return dc.utils.subtract(min, _xAxisPadding);
	    };

	    /**
	     * Calculates the maximum x value to display in the chart. Includes xAxisPadding if set.
	     * @method xAxisMax
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {*}
	     */
	    _chart.xAxisMax = function () {
	        var max = d3.max(_chart.data(), function (e) {
	            return _chart.keyAccessor()(e);
	        });
	        return dc.utils.add(max, _xAxisPadding);
	    };

	    /**
	     * Calculates the minimum y value to display in the chart. Includes yAxisPadding if set.
	     * @method yAxisMin
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {*}
	     */
	    _chart.yAxisMin = function () {
	        var min = d3.min(_chart.data(), function (e) {
	            return _chart.valueAccessor()(e);
	        });
	        return dc.utils.subtract(min, _yAxisPadding);
	    };

	    /**
	     * Calculates the maximum y value to display in the chart. Includes yAxisPadding if set.
	     * @method yAxisMax
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @return {*}
	     */
	    _chart.yAxisMax = function () {
	        var max = d3.max(_chart.data(), function (e) {
	            return _chart.valueAccessor()(e);
	        });
	        return dc.utils.add(max, _yAxisPadding);
	    };

	    /**
	     * Set or get y axis padding for the elastic y axis. The padding will be added to the top and
	     * bottom of the y axis if elasticY is turned on; otherwise it is ignored.
	     *
	     * Padding can be an integer or percentage in string (e.g. '10%'). Padding can be applied to
	     * number or date axes. When padding a date axis, an integer represents number of days being padded
	     * and a percentage string will be treated the same as an integer.
	     * @method yAxisPadding
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Number|String} [padding=0]
	     * @return {Number}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.yAxisPadding = function (padding) {
	        if (!arguments.length) {
	            return _yAxisPadding;
	        }
	        _yAxisPadding = padding;
	        return _chart;
	    };

	    _chart.yAxisHeight = function () {
	        return _chart.effectiveHeight();
	    };

	    /**
	     * Set or get the rounding function used to quantize the selection when brushing is enabled.
	     * @method round
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @example
	     * // set x unit round to by month, this will make sure range selection brush will
	     * // select whole months
	     * chart.round(d3.time.month.round);
	     * @param {Function} [round]
	     * @return {Function}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.round = function (round) {
	        if (!arguments.length) {
	            return _round;
	        }
	        _round = round;
	        return _chart;
	    };

	    _chart._rangeBandPadding = function (_) {
	        if (!arguments.length) {
	            return _rangeBandPadding;
	        }
	        _rangeBandPadding = _;
	        return _chart;
	    };

	    _chart._outerRangeBandPadding = function (_) {
	        if (!arguments.length) {
	            return _outerRangeBandPadding;
	        }
	        _outerRangeBandPadding = _;
	        return _chart;
	    };

	    dc.override(_chart, 'filter', function (_) {
	        if (!arguments.length) {
	            return _chart._filter();
	        }

	        _chart._filter(_);

	        if (_) {
	            _chart.brush().extent(_);
	        } else {
	            _chart.brush().clear();
	        }

	        return _chart;
	    });

	    _chart.brush = function (_) {
	        if (!arguments.length) {
	            return _brush;
	        }
	        _brush = _;
	        return _chart;
	    };

	    function brushHeight () {
	        return _chart._xAxisY() - _chart.margins().top;
	    }

	    _chart.renderBrush = function (g) {
	        if (_brushOn) {
	            _brush.on('brush', _chart._brushing);
	            _brush.on('brushstart', _chart._disableMouseZoom);
	            _brush.on('brushend', configureMouseZoom);

	            var gBrush = g.append('g')
	                .attr('class', 'brush')
	                .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart.margins().top + ')')
	                .call(_brush.x(_chart.x()));
	            _chart.setBrushY(gBrush, false);
	            _chart.setHandlePaths(gBrush);

	            if (_chart.hasFilter()) {
	                _chart.redrawBrush(g, false);
	            }
	        }
	    };

	    _chart.setHandlePaths = function (gBrush) {
	        gBrush.selectAll('.resize').append('path').attr('d', _chart.resizeHandlePath);
	    };

	    _chart.setBrushY = function (gBrush) {
	        gBrush.selectAll('rect')
	            .attr('height', brushHeight());
	        gBrush.selectAll('.resize path')
	            .attr('d', _chart.resizeHandlePath);
	    };

	    _chart.extendBrush = function () {
	        var extent = _brush.extent();
	        if (_chart.round()) {
	            extent[0] = extent.map(_chart.round())[0];
	            extent[1] = extent.map(_chart.round())[1];

	            _g.select('.brush')
	                .call(_brush.extent(extent));
	        }
	        return extent;
	    };

	    _chart.brushIsEmpty = function (extent) {
	        return _brush.empty() || !extent || extent[1] <= extent[0];
	    };

	    _chart._brushing = function () {
	        var extent = _chart.extendBrush();

	        _chart.redrawBrush(_g, false);

	        if (_chart.brushIsEmpty(extent)) {
	            dc.events.trigger(function () {
	                _chart.filter(null);
	                _chart.redrawGroup();
	            }, dc.constants.EVENT_DELAY);
	        } else {
	            var rangedFilter = dc.filters.RangedFilter(extent[0], extent[1]);

	            dc.events.trigger(function () {
	                _chart.replaceFilter(rangedFilter);
	                _chart.redrawGroup();
	            }, dc.constants.EVENT_DELAY);
	        }
	    };

	    _chart.redrawBrush = function (g, doTransition) {
	        if (_brushOn) {
	            if (_chart.filter() && _chart.brush().empty()) {
	                _chart.brush().extent(_chart.filter());
	            }

	            var gBrush = dc.optionalTransition(doTransition, _chart.transitionDuration())(g.select('g.brush'));
	            _chart.setBrushY(gBrush);
	            gBrush.call(_chart.brush()
	                      .x(_chart.x())
	                      .extent(_chart.brush().extent()));
	        }

	        _chart.fadeDeselectedArea();
	    };

	    _chart.fadeDeselectedArea = function () {
	        // do nothing, sub-chart should override this function
	    };

	    // borrowed from Crossfilter example
	    _chart.resizeHandlePath = function (d) {
	        var e = +(d === 'e'), x = e ? 1 : -1, y = brushHeight() / 3;
	        return 'M' + (0.5 * x) + ',' + y +
	            'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6) +
	            'V' + (2 * y - 6) +
	            'A6,6 0 0 ' + e + ' ' + (0.5 * x) + ',' + (2 * y) +
	            'Z' +
	            'M' + (2.5 * x) + ',' + (y + 8) +
	            'V' + (2 * y - 8) +
	            'M' + (4.5 * x) + ',' + (y + 8) +
	            'V' + (2 * y - 8);
	    };

	    function getClipPathId () {
	        return _chart.anchorName().replace(/[ .#=\[\]]/g, '-') + '-clip';
	    }

	    /**
	     * Get or set the padding in pixels for the clip path. Once set padding will be applied evenly to
	     * the top, left, right, and bottom when the clip path is generated. If set to zero, the clip area
	     * will be exactly the chart body area minus the margins.
	     * @method clipPadding
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Number} [padding=5]
	     * @return {Number}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.clipPadding = function (padding) {
	        if (!arguments.length) {
	            return _clipPadding;
	        }
	        _clipPadding = padding;
	        return _chart;
	    };

	    function generateClipPath () {
	        var defs = dc.utils.appendOrSelect(_parent, 'defs');
	        // cannot select <clippath> elements; bug in WebKit, must select by id
	        // https://groups.google.com/forum/#!topic/d3-js/6EpAzQ2gU9I
	        var id = getClipPathId();
	        var chartBodyClip = dc.utils.appendOrSelect(defs, '#' + id, 'clipPath').attr('id', id);

	        var padding = _clipPadding * 2;

	        dc.utils.appendOrSelect(chartBodyClip, 'rect')
	            .attr('width', _chart.xAxisLength() + padding)
	            .attr('height', _chart.yAxisHeight() + padding)
	            .attr('transform', 'translate(-' + _clipPadding + ', -' + _clipPadding + ')');
	    }

	    _chart._preprocessData = function () {};

	    _chart._doRender = function () {
	        _chart.resetSvg();

	        _chart._preprocessData();

	        _chart._generateG();
	        generateClipPath();

	        drawChart(true);

	        configureMouseZoom();

	        return _chart;
	    };

	    _chart._doRedraw = function () {
	        _chart._preprocessData();

	        drawChart(false);
	        generateClipPath();

	        return _chart;
	    };

	    function drawChart (render) {
	        if (_chart.isOrdinal()) {
	            _brushOn = false;
	        }

	        prepareXAxis(_chart.g(), render);
	        _chart._prepareYAxis(_chart.g());

	        _chart.plotData();

	        if (_chart.elasticX() || _resizing || render) {
	            _chart.renderXAxis(_chart.g());
	        }

	        if (_chart.elasticY() || _resizing || render) {
	            _chart.renderYAxis(_chart.g());
	        }

	        if (render) {
	            _chart.renderBrush(_chart.g(), false);
	        } else {
	            _chart.redrawBrush(_chart.g(), _resizing);
	        }
	        _chart.fadeDeselectedArea();
	        _resizing = false;
	    }

	    function configureMouseZoom () {
	        if (_mouseZoomable) {
	            _chart._enableMouseZoom();
	        } else if (_hasBeenMouseZoomable) {
	            _chart._disableMouseZoom();
	        }
	    }

	    _chart._enableMouseZoom = function () {
	        _hasBeenMouseZoomable = true;
	        _zoom.x(_chart.x())
	            .scaleExtent(_zoomScale)
	            .size([_chart.width(), _chart.height()])
	            .duration(_chart.transitionDuration());
	        _chart.root().call(_zoom);
	    };

	    _chart._disableMouseZoom = function () {
	        _chart.root().call(_nullZoom);
	    };

	    function constrainRange (range, constraint) {
	        var constrainedRange = [];
	        constrainedRange[0] = d3.max([range[0], constraint[0]]);
	        constrainedRange[1] = d3.min([range[1], constraint[1]]);
	        return constrainedRange;
	    }

	    /**
	     * Zoom this chart to focus on the given range. The given range should be an array containing only
	     * 2 elements (`[start, end]`) defining a range in the x domain. If the range is not given or set
	     * to null, then the zoom will be reset. _For focus to work elasticX has to be turned off;
	     * otherwise focus will be ignored.
	     * @method focus
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @example
	     * chart.on('renderlet', function(chart) {
	     *     // smooth the rendering through event throttling
	     *     dc.events.trigger(function(){
	     *          // focus some other chart to the range selected by user on this chart
	     *          someOtherChart.focus(chart.filter());
	     *     });
	     * })
	     * @param {Array<Number>} [range]
	     */
	    _chart.focus = function (range) {
	        if (hasRangeSelected(range)) {
	            _chart.x().domain(range);
	        } else {
	            _chart.x().domain(_xOriginalDomain);
	        }

	        _zoom.x(_chart.x());
	        zoomHandler();
	    };

	    _chart.refocused = function () {
	        return _refocused;
	    };

	    _chart.focusChart = function (c) {
	        if (!arguments.length) {
	            return _focusChart;
	        }
	        _focusChart = c;
	        _chart.on('filtered', function (chart) {
	            if (!chart.filter()) {
	                dc.events.trigger(function () {
	                    _focusChart.x().domain(_focusChart.xOriginalDomain());
	                });
	            } else if (!rangesEqual(chart.filter(), _focusChart.filter())) {
	                dc.events.trigger(function () {
	                    _focusChart.focus(chart.filter());
	                });
	            }
	        });
	        return _chart;
	    };

	    function rangesEqual (range1, range2) {
	        if (!range1 && !range2) {
	            return true;
	        } else if (!range1 || !range2) {
	            return false;
	        } else if (range1.length === 0 && range2.length === 0) {
	            return true;
	        } else if (range1[0].valueOf() === range2[0].valueOf() &&
	            range1[1].valueOf() === range2[1].valueOf()) {
	            return true;
	        }
	        return false;
	    }

	    /**
	     * Turn on/off the brush-based range filter. When brushing is on then user can drag the mouse
	     * across a chart with a quantitative scale to perform range filtering based on the extent of the
	     * brush, or click on the bars of an ordinal bar chart or slices of a pie chart to filter and
	     * un-filter them. However turning on the brush filter will disable other interactive elements on
	     * the chart such as highlighting, tool tips, and reference lines. Zooming will still be possible
	     * if enabled, but only via scrolling (panning will be disabled.)
	     * @method brushOn
	     * @memberof dc.coordinateGridMixin
	     * @instance
	     * @param {Boolean} [brushOn=true]
	     * @return {Boolean}
	     * @return {dc.coordinateGridMixin}
	     */
	    _chart.brushOn = function (brushOn) {
	        if (!arguments.length) {
	            return _brushOn;
	        }
	        _brushOn = brushOn;
	        return _chart;
	    };

	    function hasRangeSelected (range) {
	        return range instanceof Array && range.length > 1;
	    }

	    return _chart;
	};

	/**
	 * Stack Mixin is an mixin that provides cross-chart support of stackability using d3.layout.stack.
	 * @name stackMixin
	 * @memberof dc
	 * @mixin
	 * @param {Object} _chart
	 * @return {dc.stackMixin}
	 */
	dc.stackMixin = function (_chart) {

	    function prepareValues (layer, layerIdx) {
	        var valAccessor = layer.accessor || _chart.valueAccessor();
	        layer.name = String(layer.name || layerIdx);
	        layer.values = layer.group.all().map(function (d, i) {
	            return {
	                x: _chart.keyAccessor()(d, i),
	                y: layer.hidden ? null : valAccessor(d, i),
	                data: d,
	                layer: layer.name,
	                hidden: layer.hidden
	            };
	        });

	        layer.values = layer.values.filter(domainFilter());
	        return layer.values;
	    }

	    var _stackLayout = d3.layout.stack()
	        .values(prepareValues);

	    var _stack = [];
	    var _titles = {};

	    var _hidableStacks = false;

	    function domainFilter () {
	        if (!_chart.x()) {
	            return d3.functor(true);
	        }
	        var xDomain = _chart.x().domain();
	        if (_chart.isOrdinal()) {
	            // TODO #416
	            //var domainSet = d3.set(xDomain);
	            return function () {
	                return true; //domainSet.has(p.x);
	            };
	        }
	        if (_chart.elasticX()) {
	            return function () { return true; };
	        }
	        return function (p) {
	            //return true;
	            return p.x >= xDomain[0] && p.x <= xDomain[xDomain.length - 1];
	        };
	    }

	    /**
	     * Stack a new crossfilter group onto this chart with an optional custom value accessor. All stacks
	     * in the same chart will share the same key accessor and therefore the same set of keys.
	     *
	     * For example, in a stacked bar chart, the bars of each stack will be positioned using the same set
	     * of keys on the x axis, while stacked vertically. If name is specified then it will be used to
	     * generate the legend label.
	     * @method stack
	     * @memberof dc.stackMixin
	     * @instance
	     * @see {@link https://github.com/square/crossfilter/wiki/API-Reference#group-map-reduce crossfilter.group}
	     * @example
	     * // stack group using default accessor
	     * chart.stack(valueSumGroup)
	     * // stack group using custom accessor
	     * .stack(avgByDayGroup, function(d){return d.value.avgByDay;});
	     * @param {crossfilter.group} group
	     * @param {String} [name]
	     * @param {Function} [accessor]
	     * @return {Array<{group: crossfilter.group, name: String, accessor: Function}>}
	     * @return {dc.stackMixin}
	     */
	    _chart.stack = function (group, name, accessor) {
	        if (!arguments.length) {
	            return _stack;
	        }

	        if (arguments.length <= 2) {
	            accessor = name;
	        }

	        var layer = {group: group};
	        if (typeof name === 'string') {
	            layer.name = name;
	        }
	        if (typeof accessor === 'function') {
	            layer.accessor = accessor;
	        }
	        _stack.push(layer);

	        return _chart;
	    };

	    dc.override(_chart, 'group', function (g, n, f) {
	        if (!arguments.length) {
	            return _chart._group();
	        }
	        _stack = [];
	        _titles = {};
	        _chart.stack(g, n);
	        if (f) {
	            _chart.valueAccessor(f);
	        }
	        return _chart._group(g, n);
	    });

	    /**
	     * Allow named stacks to be hidden or shown by clicking on legend items.
	     * This does not affect the behavior of hideStack or showStack.
	     * @method hidableStacks
	     * @memberof dc.stackMixin
	     * @instance
	     * @param {Boolean} [hidableStacks=false]
	     * @return {Boolean}
	     * @return {dc.stackMixin}
	     */
	    _chart.hidableStacks = function (hidableStacks) {
	        if (!arguments.length) {
	            return _hidableStacks;
	        }
	        _hidableStacks = hidableStacks;
	        return _chart;
	    };

	    function findLayerByName (n) {
	        var i = _stack.map(dc.pluck('name')).indexOf(n);
	        return _stack[i];
	    }

	    /**
	     * Hide all stacks on the chart with the given name.
	     * The chart must be re-rendered for this change to appear.
	     * @method hideStack
	     * @memberof dc.stackMixin
	     * @instance
	     * @param {String} stackName
	     * @return {dc.stackMixin}
	     */
	    _chart.hideStack = function (stackName) {
	        var layer = findLayerByName(stackName);
	        if (layer) {
	            layer.hidden = true;
	        }
	        return _chart;
	    };

	    /**
	     * Show all stacks on the chart with the given name.
	     * The chart must be re-rendered for this change to appear.
	     * @method showStack
	     * @memberof dc.stackMixin
	     * @instance
	     * @param {String} stackName
	     * @return {dc.stackMixin}
	     */
	    _chart.showStack = function (stackName) {
	        var layer = findLayerByName(stackName);
	        if (layer) {
	            layer.hidden = false;
	        }
	        return _chart;
	    };

	    _chart.getValueAccessorByIndex = function (index) {
	        return _stack[index].accessor || _chart.valueAccessor();
	    };

	    _chart.yAxisMin = function () {
	        var min = d3.min(flattenStack(), function (p) {
	            return (p.y < 0) ? (p.y + p.y0) : p.y0;
	        });

	        return dc.utils.subtract(min, _chart.yAxisPadding());

	    };

	    _chart.yAxisMax = function () {
	        var max = d3.max(flattenStack(), function (p) {
	            return (p.y > 0) ? (p.y + p.y0) : p.y0;
	        });

	        return dc.utils.add(max, _chart.yAxisPadding());
	    };

	    function flattenStack () {
	        var valueses = _chart.data().map(function (layer) { return layer.values; });
	        return Array.prototype.concat.apply([], valueses);
	    }

	    _chart.xAxisMin = function () {
	        var min = d3.min(flattenStack(), dc.pluck('x'));
	        return dc.utils.subtract(min, _chart.xAxisPadding());
	    };

	    _chart.xAxisMax = function () {
	        var max = d3.max(flattenStack(), dc.pluck('x'));
	        return dc.utils.add(max, _chart.xAxisPadding());
	    };

	    /**
	     * Set or get the title function. Chart class will use this function to render svg title (usually interpreted by
	     * browser as tooltips) for each child element in the chart, i.e. a slice in a pie chart or a bubble in a bubble chart.
	     * Almost every chart supports title function however in grid coordinate chart you need to turn off brush in order to
	     * use title otherwise the brush layer will block tooltip trigger.
	     *
	     * If the first argument is a stack name, the title function will get or set the title for that stack. If stackName
	     * is not provided, the first stack is implied.
	     * @method title
	     * @memberof dc.stackMixin
	     * @instance
	     * @example
	     * // set a title function on 'first stack'
	     * chart.title('first stack', function(d) { return d.key + ': ' + d.value; });
	     * // get a title function from 'second stack'
	     * var secondTitleFunction = chart.title('second stack');
	     * @param {String} [stackName]
	     * @param {Function} [titleAccessor]
	     * @return {String}
	     * @return {dc.stackMixin}
	     */
	    dc.override(_chart, 'title', function (stackName, titleAccessor) {
	        if (!stackName) {
	            return _chart._title();
	        }

	        if (typeof stackName === 'function') {
	            return _chart._title(stackName);
	        }
	        if (stackName === _chart._groupName && typeof titleAccessor === 'function') {
	            return _chart._title(titleAccessor);
	        }

	        if (typeof titleAccessor !== 'function') {
	            return _titles[stackName] || _chart._title();
	        }

	        _titles[stackName] = titleAccessor;

	        return _chart;
	    });

	    /**
	     * Gets or sets the stack layout algorithm, which computes a baseline for each stack and
	     * propagates it to the next
	     * @method stackLayout
	     * @memberof dc.stackMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/Stack-Layout d3.layout.stack}
	     * @param {Function} [stack=d3.layout.stack]
	     * @return {Function}
	     * @return {dc.stackMixin}
	     */
	    _chart.stackLayout = function (stack) {
	        if (!arguments.length) {
	            return _stackLayout;
	        }
	        _stackLayout = stack;
	        if (_stackLayout.values() === d3.layout.stack().values()) {
	            _stackLayout.values(prepareValues);
	        }
	        return _chart;
	    };

	    function visability (l) {
	        return !l.hidden;
	    }

	    _chart.data(function () {
	        var layers = _stack.filter(visability);
	        return layers.length ? _chart.stackLayout()(layers) : [];
	    });

	    _chart._ordinalXDomain = function () {
	        var flat = flattenStack().map(dc.pluck('data'));
	        var ordered = _chart._computeOrderedGroups(flat);
	        return ordered.map(_chart.keyAccessor());
	    };

	    _chart.colorAccessor(function (d) {
	        var layer = this.layer || this.name || d.name || d.layer;
	        return layer;
	    });

	    _chart.legendables = function () {
	        return _stack.map(function (layer, i) {
	            return {
	                chart: _chart,
	                name: layer.name,
	                hidden: layer.hidden || false,
	                color: _chart.getColor.call(layer, layer.values, i)
	            };
	        });
	    };

	    _chart.isLegendableHidden = function (d) {
	        var layer = findLayerByName(d.name);
	        return layer ? layer.hidden : false;
	    };

	    _chart.legendToggle = function (d) {
	        if (_hidableStacks) {
	            if (_chart.isLegendableHidden(d)) {
	                _chart.showStack(d.name);
	            } else {
	                _chart.hideStack(d.name);
	            }
	            //_chart.redraw();
	            _chart.renderGroup();
	        }
	    };

	    return _chart;
	};

	/**
	 * Cap is a mixin that groups small data elements below a _cap_ into an *others* grouping for both the
	 * Row and Pie Charts.
	 *
	 * The top ordered elements in the group up to the cap amount will be kept in the chart, and the rest
	 * will be replaced with an *others* element, with value equal to the sum of the replaced values. The
	 * keys of the elements below the cap limit are recorded in order to filter by those keys when the
	 * others* element is clicked.
	 * @name capMixin
	 * @memberof dc
	 * @mixin
	 * @param {Object} _chart
	 * @return {dc.capMixin}
	 */
	dc.capMixin = function (_chart) {

	    var _cap = Infinity;

	    var _othersLabel = 'Others';

	    var _othersGrouper = function (topRows) {
	        var topRowsSum = d3.sum(topRows, _chart.valueAccessor()),
	            allRows = _chart.group().all(),
	            allRowsSum = d3.sum(allRows, _chart.valueAccessor()),
	            topKeys = topRows.map(_chart.keyAccessor()),
	            allKeys = allRows.map(_chart.keyAccessor()),
	            topSet = d3.set(topKeys),
	            others = allKeys.filter(function (d) {return !topSet.has(d);});
	        if (allRowsSum > topRowsSum) {
	            return topRows.concat([{'others': others, 'key': _othersLabel, 'value': allRowsSum - topRowsSum}]);
	        }
	        return topRows;
	    };

	    _chart.cappedKeyAccessor = function (d, i) {
	        if (d.others) {
	            return d.key;
	        }
	        return _chart.keyAccessor()(d, i);
	    };

	    _chart.cappedValueAccessor = function (d, i) {
	        if (d.others) {
	            return d.value;
	        }
	        return _chart.valueAccessor()(d, i);
	    };

	    _chart.data(function (group) {
	        if (_cap === Infinity) {
	            return _chart._computeOrderedGroups(group.all());
	        } else {
	            var topRows = group.top(_cap); // ordered by crossfilter group order (default value)
	            topRows = _chart._computeOrderedGroups(topRows); // re-order using ordering (default key)
	            if (_othersGrouper) {
	                return _othersGrouper(topRows);
	            }
	            return topRows;
	        }
	    });

	    /**
	     * Get or set the count of elements to that will be included in the cap.
	     * @method cap
	     * @memberof dc.capMixin
	     * @instance
	     * @param {Number} [count=Infinity]
	     * @return {Number}
	     * @return {dc.capMixin}
	     */
	    _chart.cap = function (count) {
	        if (!arguments.length) {
	            return _cap;
	        }
	        _cap = count;
	        return _chart;
	    };

	    /**
	     * Get or set the label for *Others* slice when slices cap is specified
	     * @method othersLabel
	     * @memberof dc.capMixin
	     * @instance
	     * @param {String} [label="Others"]
	     * @return {String}
	     * @return {dc.capMixin}
	     */
	    _chart.othersLabel = function (label) {
	        if (!arguments.length) {
	            return _othersLabel;
	        }
	        _othersLabel = label;
	        return _chart;
	    };

	    /**
	     * Get or set the grouper function that will perform the insertion of data for the *Others* slice
	     * if the slices cap is specified. If set to a falsy value, no others will be added. By default the
	     * grouper function computes the sum of all values below the cap.
	     * @method othersGrouper
	     * @memberof dc.capMixin
	     * @instance
	     * @example
	     * // Default others grouper
	     * chart.othersGrouper(function (topRows) {
	     *    var topRowsSum = d3.sum(topRows, _chart.valueAccessor()),
	     *        allRows = _chart.group().all(),
	     *        allRowsSum = d3.sum(allRows, _chart.valueAccessor()),
	     *        topKeys = topRows.map(_chart.keyAccessor()),
	     *        allKeys = allRows.map(_chart.keyAccessor()),
	     *        topSet = d3.set(topKeys),
	     *        others = allKeys.filter(function (d) {return !topSet.has(d);});
	     *    if (allRowsSum > topRowsSum) {
	     *        return topRows.concat([{'others': others, 'key': _othersLabel, 'value': allRowsSum - topRowsSum}]);
	     *    }
	     *    return topRows;
	     * });
	     * // Custom others grouper
	     * chart.othersGrouper(function (data) {
	     *     // compute the value for others, presumably the sum of all values below the cap
	     *     var othersSum  = yourComputeOthersValueLogic(data)
	     *
	     *     // the keys are needed to properly filter when the others element is clicked
	     *     var othersKeys = yourComputeOthersKeysArrayLogic(data);
	     *
	     *     // add the others row to the dataset
	     *     data.push({'key': 'Others', 'value': othersSum, 'others': othersKeys });
	     *
	     *     return data;
	     * });
	     * @param {Function} [grouperFunction]
	     * @return {Function}
	     * @return {dc.capMixin}
	     */
	    _chart.othersGrouper = function (grouperFunction) {
	        if (!arguments.length) {
	            return _othersGrouper;
	        }
	        _othersGrouper = grouperFunction;
	        return _chart;
	    };

	    dc.override(_chart, 'onClick', function (d) {
	        if (d.others) {
	            _chart.filter([d.others]);
	        }
	        _chart._onClick(d);
	    });

	    return _chart;
	};

	/**
	 * This Mixin provides reusable functionalities for any chart that needs to visualize data using bubbles.
	 * @name bubbleMixin
	 * @memberof dc
	 * @mixin
	 * @mixes dc.colorMixin
	 * @param {Object} _chart
	 * @return {dc.bubbleMixin}
	 */
	dc.bubbleMixin = function (_chart) {
	    var _maxBubbleRelativeSize = 0.3;
	    var _minRadiusWithLabel = 10;

	    _chart.BUBBLE_NODE_CLASS = 'node';
	    _chart.BUBBLE_CLASS = 'bubble';
	    _chart.MIN_RADIUS = 10;

	    _chart = dc.colorMixin(_chart);

	    _chart.renderLabel(true);

	    _chart.data(function (group) {
	        return group.top(Infinity);
	    });

	    var _r = d3.scale.linear().domain([0, 100]);

	    var _rValueAccessor = function (d) {
	        return d.r;
	    };

	    /**
	     * Get or set the bubble radius scale. By default the bubble chart uses
	     * {@link https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear d3.scale.linear().domain([0, 100])}
	     * as its radius scale.
	     * @method r
	     * @memberof dc.bubbleMixin
	     * @instance
	     * @see {@link http://github.com/mbostock/d3/wiki/Scales d3.scale}
	     * @param {d3.scale} [bubbleRadiusScale=d3.scale.linear().domain([0, 100])]
	     * @return {d3.scale}
	     * @return {dc.bubbleMixin}
	     */
	    _chart.r = function (bubbleRadiusScale) {
	        if (!arguments.length) {
	            return _r;
	        }
	        _r = bubbleRadiusScale;
	        return _chart;
	    };

	    /**
	     * Get or set the radius value accessor function. If set, the radius value accessor function will
	     * be used to retrieve a data value for each bubble. The data retrieved then will be mapped using
	     * the r scale to the actual bubble radius. This allows you to encode a data dimension using bubble
	     * size.
	     * @method radiusValueAccessor
	     * @memberof dc.bubbleMixin
	     * @instance
	     * @param {Function} [radiusValueAccessor]
	     * @return {Function}
	     * @return {dc.bubbleMixin}
	     */
	    _chart.radiusValueAccessor = function (radiusValueAccessor) {
	        if (!arguments.length) {
	            return _rValueAccessor;
	        }
	        _rValueAccessor = radiusValueAccessor;
	        return _chart;
	    };

	    _chart.rMin = function () {
	        var min = d3.min(_chart.data(), function (e) {
	            return _chart.radiusValueAccessor()(e);
	        });
	        return min;
	    };

	    _chart.rMax = function () {
	        var max = d3.max(_chart.data(), function (e) {
	            return _chart.radiusValueAccessor()(e);
	        });
	        return max;
	    };

	    _chart.bubbleR = function (d) {
	        var value = _chart.radiusValueAccessor()(d);
	        var r = _chart.r()(value);
	        if (isNaN(r) || value <= 0) {
	            r = 0;
	        }
	        return r;
	    };

	    var labelFunction = function (d) {
	        return _chart.label()(d);
	    };

	    var shouldLabel = function (d) {
	        return (_chart.bubbleR(d) > _minRadiusWithLabel);
	    };

	    var labelOpacity = function (d) {
	        return shouldLabel(d) ? 1 : 0;
	    };

	    var labelPointerEvent = function (d) {
	        return shouldLabel(d) ? 'all' : 'none';
	    };

	    _chart._doRenderLabel = function (bubbleGEnter) {
	        if (_chart.renderLabel()) {
	            var label = bubbleGEnter.select('text');

	            if (label.empty()) {
	                label = bubbleGEnter.append('text')
	                    .attr('text-anchor', 'middle')
	                    .attr('dy', '.3em')
	                    .on('click', _chart.onClick);
	            }

	            label
	                .attr('opacity', 0)
	                .attr('pointer-events', labelPointerEvent)
	                .text(labelFunction);
	            dc.transition(label, _chart.transitionDuration())
	                .attr('opacity', labelOpacity);
	        }
	    };

	    _chart.doUpdateLabels = function (bubbleGEnter) {
	        if (_chart.renderLabel()) {
	            var labels = bubbleGEnter.selectAll('text')
	                .attr('pointer-events', labelPointerEvent)
	                .text(labelFunction);
	            dc.transition(labels, _chart.transitionDuration())
	                .attr('opacity', labelOpacity);
	        }
	    };

	    var titleFunction = function (d) {
	        return _chart.title()(d);
	    };

	    _chart._doRenderTitles = function (g) {
	        if (_chart.renderTitle()) {
	            var title = g.select('title');

	            if (title.empty()) {
	                g.append('title').text(titleFunction);
	            }
	        }
	    };

	    _chart.doUpdateTitles = function (g) {
	        if (_chart.renderTitle()) {
	            g.selectAll('title').text(titleFunction);
	        }
	    };

	    /**
	     * Get or set the minimum radius. This will be used to initialize the radius scale's range.
	     * @method minRadius
	     * @memberof dc.bubbleMixin
	     * @instance
	     * @param {Number} [radius=10]
	     * @return {Number}
	     * @return {dc.bubbleMixin}
	     */
	    _chart.minRadius = function (radius) {
	        if (!arguments.length) {
	            return _chart.MIN_RADIUS;
	        }
	        _chart.MIN_RADIUS = radius;
	        return _chart;
	    };

	    /**
	     * Get or set the minimum radius for label rendering. If a bubble's radius is less than this value
	     * then no label will be rendered.
	     * @method minRadiusWithLabel
	     * @memberof dc.bubbleMixin
	     * @instance
	     * @param {Number} [radius=10]
	     * @return {Number}
	     * @return {dc.bubbleMixin}
	     */

	    _chart.minRadiusWithLabel = function (radius) {
	        if (!arguments.length) {
	            return _minRadiusWithLabel;
	        }
	        _minRadiusWithLabel = radius;
	        return _chart;
	    };

	    /**
	     * Get or set the maximum relative size of a bubble to the length of x axis. This value is useful
	     * when the difference in radius between bubbles is too great.
	     * @method maxBubbleRelativeSize
	     * @memberof dc.bubbleMixin
	     * @instance
	     * @param {Number} [relativeSize=0.3]
	     * @return {Number}
	     * @return {dc.bubbleMixin}
	     */
	    _chart.maxBubbleRelativeSize = function (relativeSize) {
	        if (!arguments.length) {
	            return _maxBubbleRelativeSize;
	        }
	        _maxBubbleRelativeSize = relativeSize;
	        return _chart;
	    };

	    _chart.fadeDeselectedArea = function () {
	        if (_chart.hasFilter()) {
	            _chart.selectAll('g.' + _chart.BUBBLE_NODE_CLASS).each(function (d) {
	                if (_chart.isSelectedNode(d)) {
	                    _chart.highlightSelected(this);
	                } else {
	                    _chart.fadeDeselected(this);
	                }
	            });
	        } else {
	            _chart.selectAll('g.' + _chart.BUBBLE_NODE_CLASS).each(function () {
	                _chart.resetHighlight(this);
	            });
	        }
	    };

	    _chart.isSelectedNode = function (d) {
	        return _chart.hasFilter(d.key);
	    };

	    _chart.onClick = function (d) {
	        var filter = d.key;
	        dc.events.trigger(function () {
	            _chart.filter(filter);
	            _chart.redrawGroup();
	        });
	    };

	    return _chart;
	};

	/**
	 * The pie chart implementation is usually used to visualize a small categorical distribution.  The pie
	 * chart uses keyAccessor to determine the slices, and valueAccessor to calculate the size of each
	 * slice relative to the sum of all values. Slices are ordered by {@link dc.baseMixin#ordering ordering}
	 * which defaults to sorting by key.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * @class pieChart
	 * @memberof dc
	 * @mixes dc.capMixin
	 * @mixes dc.colorMixin
	 * @mixes dc.baseMixin
	 * @example
	 * // create a pie chart under #chart-container1 element using the default global chart group
	 * var chart1 = dc.pieChart('#chart-container1');
	 * // create a pie chart under #chart-container2 element using chart group A
	 * var chart2 = dc.pieChart('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.pieChart}
	 */
	dc.pieChart = function (parent, chartGroup) {
	    var DEFAULT_MIN_ANGLE_FOR_LABEL = 0.5;

	    var _sliceCssClass = 'pie-slice';
	    var _labelCssClass = 'pie-label';
	    var _sliceGroupCssClass = 'pie-slice-group';
	    var _labelGroupCssClass = 'pie-label-group';
	    var _emptyCssClass = 'empty-chart';
	    var _emptyTitle = 'empty';

	    var _radius,
	        _givenRadius, // specified radius, if any
	        _innerRadius = 0,
	        _externalRadiusPadding = 0;

	    var _g;
	    var _cx;
	    var _cy;
	    var _minAngleForLabel = DEFAULT_MIN_ANGLE_FOR_LABEL;
	    var _externalLabelRadius;
	    var _drawPaths = false;
	    var _chart = dc.capMixin(dc.colorMixin(dc.baseMixin({})));

	    _chart.colorAccessor(_chart.cappedKeyAccessor);

	    _chart.title(function (d) {
	        return _chart.cappedKeyAccessor(d) + ': ' + _chart.cappedValueAccessor(d);
	    });

	    /**
	     * Get or set the maximum number of slices the pie chart will generate. The top slices are determined by
	     * value from high to low. Other slices exeeding the cap will be rolled up into one single *Others* slice.
	     * @method slicesCap
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [cap]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.slicesCap = _chart.cap;

	    _chart.label(_chart.cappedKeyAccessor);
	    _chart.renderLabel(true);

	    _chart.transitionDuration(350);

	    _chart._doRender = function () {
	        _chart.resetSvg();

	        _g = _chart.svg()
	            .append('g')
	            .attr('transform', 'translate(' + _chart.cx() + ',' + _chart.cy() + ')');

	        _g.append('g').attr('class', _sliceGroupCssClass);
	        _g.append('g').attr('class', _labelGroupCssClass);

	        drawChart();

	        return _chart;
	    };

	    function drawChart () {
	        // set radius on basis of chart dimension if missing
	        _radius = _givenRadius ? _givenRadius : d3.min([_chart.width(), _chart.height()]) / 2;

	        var arc = buildArcs();

	        var pie = pieLayout();
	        var pieData;
	        // if we have data...
	        if (d3.sum(_chart.data(), _chart.valueAccessor())) {
	            pieData = pie(_chart.data());
	            _g.classed(_emptyCssClass, false);
	        } else {
	            // otherwise we'd be getting NaNs, so override
	            // note: abuse others for its ignoring the value accessor
	            pieData = pie([{key: _emptyTitle, value: 1, others: [_emptyTitle]}]);
	            _g.classed(_emptyCssClass, true);
	        }

	        if (_g) {
	            var slices = _g.select('g.' + _sliceGroupCssClass)
	                .selectAll('g.' + _sliceCssClass)
	                .data(pieData);

	            var labels = _g.select('g.' + _labelGroupCssClass)
	                .selectAll('text.' + _labelCssClass)
	                .data(pieData);

	            createElements(slices, labels, arc, pieData);

	            updateElements(pieData, arc);

	            removeElements(slices, labels);

	            highlightFilter();

	            dc.transition(_g, _chart.transitionDuration())
	                .attr('transform', 'translate(' + _chart.cx() + ',' + _chart.cy() + ')');
	        }
	    }

	    function createElements (slices, labels, arc, pieData) {
	        var slicesEnter = createSliceNodes(slices);

	        createSlicePath(slicesEnter, arc);

	        createTitles(slicesEnter);

	        createLabels(labels, pieData, arc);
	    }

	    function createSliceNodes (slices) {
	        var slicesEnter = slices
	            .enter()
	            .append('g')
	            .attr('class', function (d, i) {
	                return _sliceCssClass + ' _' + i;
	            });
	        return slicesEnter;
	    }

	    function createSlicePath (slicesEnter, arc) {
	        var slicePath = slicesEnter.append('path')
	            .attr('fill', fill)
	            .on('click', onClick)
	            .attr('d', function (d, i) {
	                return safeArc(d, i, arc);
	            });

	        dc.transition(slicePath, _chart.transitionDuration(), function (s) {
	            s.attrTween('d', tweenPie);
	        });
	    }

	    function createTitles (slicesEnter) {
	        if (_chart.renderTitle()) {
	            slicesEnter.append('title').text(function (d) {
	                return _chart.title()(d.data);
	            });
	        }
	    }

	    _chart._applyLabelText = function (labels) {
	        labels
	            .text(function (d) {
	                var data = d.data;
	                if ((sliceHasNoData(data) || sliceTooSmall(d)) && !isSelectedSlice(d)) {
	                    return '';
	                }
	                return _chart.label()(d.data);
	            });
	    };

	    function positionLabels (labels, arc) {
	        _chart._applyLabelText(labels);
	        dc.transition(labels, _chart.transitionDuration())
	            .attr('transform', function (d) {
	                return labelPosition(d, arc);
	            })
	            .attr('text-anchor', 'middle');
	    }

	    function highlightSlice (i, whether) {
	        _chart.select('g.pie-slice._' + i)
	            .classed('highlight', whether);
	    }

	    function createLabels (labels, pieData, arc) {
	        if (_chart.renderLabel()) {
	            var labelsEnter = labels
	                .enter()
	                .append('text')
	                .attr('class', function (d, i) {
	                    var classes = _sliceCssClass + ' ' + _labelCssClass + ' _' + i;
	                    if (_externalLabelRadius) {
	                        classes += ' external';
	                    }
	                    return classes;
	                })
	                .on('click', onClick)
	                .on('mouseover', function (d, i) {
	                    highlightSlice(i, true);
	                })
	                .on('mouseout', function (d, i) {
	                    highlightSlice(i, false);
	                });
	            positionLabels(labelsEnter, arc);
	            if (_externalLabelRadius && _drawPaths) {
	                updateLabelPaths(pieData, arc);
	            }
	        }
	    }

	    function updateLabelPaths (pieData, arc) {
	        var polyline = _g.selectAll('polyline.' + _sliceCssClass)
	                .data(pieData);

	        polyline
	                .enter()
	                .append('polyline')
	                .attr('class', function (d, i) {
	                    return 'pie-path _' + i + ' ' + _sliceCssClass;
	                })
	                .on('click', onClick)
	                .on('mouseover', function (d, i) {
	                    highlightSlice(i, true);
	                })
	                .on('mouseout', function (d, i) {
	                    highlightSlice(i, false);
	                });

	        polyline.exit().remove();
	        var arc2 = d3.svg.arc()
	                .outerRadius(_radius - _externalRadiusPadding + _externalLabelRadius)
	                .innerRadius(_radius - _externalRadiusPadding);
	        var transition = dc.transition(polyline, _chart.transitionDuration());
	        // this is one rare case where d3.selection differs from d3.transition
	        if (transition.attrTween) {
	            transition
	                .attrTween('points', function (d) {
	                    this._current = this._current || d;
	                    var interpolate = d3.interpolate(this._current, d);
	                    this._current = interpolate(0);
	                    return function (t) {
	                        var d2 = interpolate(t);
	                        return [arc.centroid(d2), arc2.centroid(d2)];
	                    };
	                });
	        } else {
	            transition.attr('points', function (d) {
	                return [arc.centroid(d), arc2.centroid(d)];
	            });
	        }
	        transition.style('visibility', function (d) {
	            return d.endAngle - d.startAngle < 0.0001 ? 'hidden' : 'visible';
	        });

	    }

	    function updateElements (pieData, arc) {
	        updateSlicePaths(pieData, arc);
	        updateLabels(pieData, arc);
	        updateTitles(pieData);
	    }

	    function updateSlicePaths (pieData, arc) {
	        var slicePaths = _g.selectAll('g.' + _sliceCssClass)
	            .data(pieData)
	            .select('path')
	            .attr('d', function (d, i) {
	                return safeArc(d, i, arc);
	            });
	        dc.transition(slicePaths, _chart.transitionDuration(),
	            function (s) {
	                s.attrTween('d', tweenPie);
	            }).attr('fill', fill);
	    }

	    function updateLabels (pieData, arc) {
	        if (_chart.renderLabel()) {
	            var labels = _g.selectAll('text.' + _labelCssClass)
	                .data(pieData);
	            positionLabels(labels, arc);
	            if (_externalLabelRadius && _drawPaths) {
	                updateLabelPaths(pieData, arc);
	            }
	        }
	    }

	    function updateTitles (pieData) {
	        if (_chart.renderTitle()) {
	            _g.selectAll('g.' + _sliceCssClass)
	                .data(pieData)
	                .select('title')
	                .text(function (d) {
	                    return _chart.title()(d.data);
	                });
	        }
	    }

	    function removeElements (slices, labels) {
	        slices.exit().remove();
	        labels.exit().remove();
	    }

	    function highlightFilter () {
	        if (_chart.hasFilter()) {
	            _chart.selectAll('g.' + _sliceCssClass).each(function (d) {
	                if (isSelectedSlice(d)) {
	                    _chart.highlightSelected(this);
	                } else {
	                    _chart.fadeDeselected(this);
	                }
	            });
	        } else {
	            _chart.selectAll('g.' + _sliceCssClass).each(function () {
	                _chart.resetHighlight(this);
	            });
	        }
	    }

	    /**
	     * Get or set the external radius padding of the pie chart. This will force the radius of the
	     * pie chart to become smaller or larger depending on the value.
	     * @method externalRadiusPadding
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [externalRadiusPadding=0]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.externalRadiusPadding = function (externalRadiusPadding) {
	        if (!arguments.length) {
	            return _externalRadiusPadding;
	        }
	        _externalRadiusPadding = externalRadiusPadding;
	        return _chart;
	    };

	    /**
	     * Get or set the inner radius of the pie chart. If the inner radius is greater than 0px then the
	     * pie chart will be rendered as a doughnut chart.
	     * @method innerRadius
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [innerRadius=0]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.innerRadius = function (innerRadius) {
	        if (!arguments.length) {
	            return _innerRadius;
	        }
	        _innerRadius = innerRadius;
	        return _chart;
	    };

	    /**
	     * Get or set the outer radius. If the radius is not set, it will be half of the minimum of the
	     * chart width and height.
	     * @method radius
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [radius]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.radius = function (radius) {
	        if (!arguments.length) {
	            return _givenRadius;
	        }
	        _givenRadius = radius;
	        return _chart;
	    };

	    /**
	     * Get or set center x coordinate position. Default is center of svg.
	     * @method cx
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [cx]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.cx = function (cx) {
	        if (!arguments.length) {
	            return (_cx ||  _chart.width() / 2);
	        }
	        _cx = cx;
	        return _chart;
	    };

	    /**
	     * Get or set center y coordinate position. Default is center of svg.
	     * @method cy
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [cy]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.cy = function (cy) {
	        if (!arguments.length) {
	            return (_cy ||  _chart.height() / 2);
	        }
	        _cy = cy;
	        return _chart;
	    };

	    function buildArcs () {
	        return d3.svg.arc()
	            .outerRadius(_radius - _externalRadiusPadding)
	            .innerRadius(_innerRadius);
	    }

	    function isSelectedSlice (d) {
	        return _chart.hasFilter(_chart.cappedKeyAccessor(d.data));
	    }

	    _chart._doRedraw = function () {
	        drawChart();
	        return _chart;
	    };

	    /**
	     * Get or set the minimal slice angle for label rendering. Any slice with a smaller angle will not
	     * display a slice label.
	     * @method minAngleForLabel
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [minAngleForLabel=0.5]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.minAngleForLabel = function (minAngleForLabel) {
	        if (!arguments.length) {
	            return _minAngleForLabel;
	        }
	        _minAngleForLabel = minAngleForLabel;
	        return _chart;
	    };

	    function pieLayout () {
	        return d3.layout.pie().sort(null).value(_chart.cappedValueAccessor);
	    }

	    function sliceTooSmall (d) {
	        var angle = (d.endAngle - d.startAngle);
	        return isNaN(angle) || angle < _minAngleForLabel;
	    }

	    function sliceHasNoData (d) {
	        return _chart.cappedValueAccessor(d) === 0;
	    }

	    function tweenPie (b) {
	        b.innerRadius = _innerRadius;
	        var current = this._current;
	        if (isOffCanvas(current)) {
	            current = {startAngle: 0, endAngle: 0};
	        } else {
	            // only interpolate startAngle & endAngle, not the whole data object
	            current = {startAngle: current.startAngle, endAngle: current.endAngle};
	        }
	        var i = d3.interpolate(current, b);
	        this._current = i(0);
	        return function (t) {
	            return safeArc(i(t), 0, buildArcs());
	        };
	    }

	    function isOffCanvas (current) {
	        return !current || isNaN(current.startAngle) || isNaN(current.endAngle);
	    }

	    function fill (d, i) {
	        return _chart.getColor(d.data, i);
	    }

	    function onClick (d, i) {
	        if (_g.attr('class') !== _emptyCssClass) {
	            _chart.onClick(d.data, i);
	        }
	    }

	    function safeArc (d, i, arc) {
	        var path = arc(d, i);
	        if (path.indexOf('NaN') >= 0) {
	            path = 'M0,0';
	        }
	        return path;
	    }

	    /**
	     * Title to use for the only slice when there is no data.
	     * @method emptyTitle
	     * @memberof dc.pieChart
	     * @instance
	     * @param {String} [title]
	     * @return {String}
	     * @return {dc.pieChart}
	     */
	    _chart.emptyTitle = function (title) {
	        if (arguments.length === 0) {
	            return _emptyTitle;
	        }
	        _emptyTitle = title;
	        return _chart;
	    };

	    /**
	     * Position slice labels offset from the outer edge of the chart
	     *
	     * The given argument sets the radial offset.
	     * @method externalLabels
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Number} [externalLabelRadius]
	     * @return {Number}
	     * @return {dc.pieChart}
	     */
	    _chart.externalLabels = function (externalLabelRadius) {
	        if (arguments.length === 0) {
	            return _externalLabelRadius;
	        } else if (externalLabelRadius) {
	            _externalLabelRadius = externalLabelRadius;
	        } else {
	            _externalLabelRadius = undefined;
	        }

	        return _chart;
	    };

	    /**
	     * Get or set whether to draw lines from pie slices to their labels.
	     *
	     * @method drawPaths
	     * @memberof dc.pieChart
	     * @instance
	     * @param {Boolean} [drawPaths]
	     * @return {Boolean}
	     * @return {dc.pieChart}
	     */
	    _chart.drawPaths = function (drawPaths) {
	        if (arguments.length === 0) {
	            return _drawPaths;
	        }
	        _drawPaths = drawPaths;
	        return _chart;
	    };

	    function labelPosition (d, arc) {
	        var centroid;
	        if (_externalLabelRadius) {
	            centroid = d3.svg.arc()
	                .outerRadius(_radius - _externalRadiusPadding + _externalLabelRadius)
	                .innerRadius(_radius - _externalRadiusPadding + _externalLabelRadius)
	                .centroid(d);
	        } else {
	            centroid = arc.centroid(d);
	        }
	        if (isNaN(centroid[0]) || isNaN(centroid[1])) {
	            return 'translate(0,0)';
	        } else {
	            return 'translate(' + centroid + ')';
	        }
	    }

	    _chart.legendables = function () {
	        return _chart.data().map(function (d, i) {
	            var legendable = {name: d.key, data: d.value, others: d.others, chart: _chart};
	            legendable.color = _chart.getColor(d, i);
	            return legendable;
	        });
	    };

	    _chart.legendHighlight = function (d) {
	        highlightSliceFromLegendable(d, true);
	    };

	    _chart.legendReset = function (d) {
	        highlightSliceFromLegendable(d, false);
	    };

	    _chart.legendToggle = function (d) {
	        _chart.onClick({key: d.name, others: d.others});
	    };

	    function highlightSliceFromLegendable (legendable, highlighted) {
	        _chart.selectAll('g.pie-slice').each(function (d) {
	            if (legendable.name === d.data.key) {
	                d3.select(this).classed('highlight', highlighted);
	            }
	        });
	    }

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * Concrete bar chart/histogram implementation.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * - {@link http://dc-js.github.com/dc.js/crime/index.html Canadian City Crime Stats}
	 * @class barChart
	 * @memberof dc
	 * @mixes dc.stackMixin
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a bar chart under #chart-container1 element using the default global chart group
	 * var chart1 = dc.barChart('#chart-container1');
	 * // create a bar chart under #chart-container2 element using chart group A
	 * var chart2 = dc.barChart('#chart-container2', 'chartGroupA');
	 * // create a sub-chart under a composite parent chart
	 * var chart3 = dc.barChart(compositeChart);
	 * @param {String|node|d3.selection|dc.compositeChart} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector}
	 * specifying a dom block element such as a div; or a dom element or d3 selection.  If the bar
	 * chart is a sub-chart in a {@link dc.compositeChart Composite Chart} then pass in the parent
	 * composite chart instance instead.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.barChart}
	 */
	dc.barChart = function (parent, chartGroup) {
	    var MIN_BAR_WIDTH = 1;
	    var DEFAULT_GAP_BETWEEN_BARS = 2;
	    var LABEL_PADDING = 3;

	    var _chart = dc.stackMixin(dc.coordinateGridMixin({}));

	    var _gap = DEFAULT_GAP_BETWEEN_BARS;
	    var _centerBar = false;
	    var _alwaysUseRounding = false;

	    var _barWidth;

	    dc.override(_chart, 'rescale', function () {
	        _chart._rescale();
	        _barWidth = undefined;
	        return _chart;
	    });

	    dc.override(_chart, 'render', function () {
	        if (_chart.round() && _centerBar && !_alwaysUseRounding) {
	            dc.logger.warn('By default, brush rounding is disabled if bars are centered. ' +
	                         'See dc.js bar chart API documentation for details.');
	        }

	        return _chart._render();
	    });

	    _chart.label(function (d) {
	        return dc.utils.printSingleValue(d.y0 + d.y);
	    }, false);

	    _chart.plotData = function () {
	        var layers = _chart.chartBodyG().selectAll('g.stack')
	            .data(_chart.data());

	        calculateBarWidth();

	        layers
	            .enter()
	            .append('g')
	            .attr('class', function (d, i) {
	                return 'stack ' + '_' + i;
	            });

	        var last = layers.size() - 1;
	        layers.each(function (d, i) {
	            var layer = d3.select(this);

	            renderBars(layer, i, d);

	            if (_chart.renderLabel() && last === i) {
	                renderLabels(layer, i, d);
	            }
	        });
	    };

	    function barHeight (d) {
	        return dc.utils.safeNumber(Math.abs(_chart.y()(d.y + d.y0) - _chart.y()(d.y0)));
	    }

	    function renderLabels (layer, layerIndex, d) {
	        var labels = layer.selectAll('text.barLabel')
	            .data(d.values, dc.pluck('x'));

	        labels.enter()
	            .append('text')
	            .attr('class', 'barLabel')
	            .attr('text-anchor', 'middle');

	        if (_chart.isOrdinal()) {
	            labels.on('click', _chart.onClick);
	            labels.attr('cursor', 'pointer');
	        }

	        dc.transition(labels, _chart.transitionDuration())
	            .attr('x', function (d) {
	                var x = _chart.x()(d.x);
	                if (!_centerBar) {
	                    x += _barWidth / 2;
	                }
	                return dc.utils.safeNumber(x);
	            })
	            .attr('y', function (d) {
	                var y = _chart.y()(d.y + d.y0);

	                if (d.y < 0) {
	                    y -= barHeight(d);
	                }

	                return dc.utils.safeNumber(y - LABEL_PADDING);
	            })
	            .text(function (d) {
	                return _chart.label()(d);
	            });

	        dc.transition(labels.exit(), _chart.transitionDuration())
	            .attr('height', 0)
	            .remove();
	    }

	    function renderBars (layer, layerIndex, d) {
	        var bars = layer.selectAll('rect.bar')
	            .data(d.values, dc.pluck('x'));

	        var enter = bars.enter()
	            .append('rect')
	            .attr('class', 'bar')
	            .attr('fill', dc.pluck('data', _chart.getColor))
	            .attr('y', _chart.yAxisHeight())
	            .attr('height', 0);

	        if (_chart.renderTitle()) {
	            enter.append('title').text(dc.pluck('data', _chart.title(d.name)));
	        }

	        if (_chart.isOrdinal()) {
	            bars.on('click', _chart.onClick);
	        }

	        dc.transition(bars, _chart.transitionDuration())
	            .attr('x', function (d) {
	                var x = _chart.x()(d.x);
	                if (_centerBar) {
	                    x -= _barWidth / 2;
	                }
	                if (_chart.isOrdinal() && _gap !== undefined) {
	                    x += _gap / 2;
	                }
	                return dc.utils.safeNumber(x);
	            })
	            .attr('y', function (d) {
	                var y = _chart.y()(d.y + d.y0);

	                if (d.y < 0) {
	                    y -= barHeight(d);
	                }

	                return dc.utils.safeNumber(y);
	            })
	            .attr('width', _barWidth)
	            .attr('height', function (d) {
	                return barHeight(d);
	            })
	            .attr('fill', dc.pluck('data', _chart.getColor))
	            .select('title').text(dc.pluck('data', _chart.title(d.name)));

	        dc.transition(bars.exit(), _chart.transitionDuration())
	            .attr('x', function (d) { return _chart.x()(d.x); })
	            .attr('width', _barWidth * 0.9)
	            .remove();
	    }

	    function calculateBarWidth () {
	        if (_barWidth === undefined) {
	            var numberOfBars = _chart.xUnitCount();

	            // please can't we always use rangeBands for bar charts?
	            if (_chart.isOrdinal() && _gap === undefined) {
	                _barWidth = Math.floor(_chart.x().rangeBand());
	            } else if (_gap) {
	                _barWidth = Math.floor((_chart.xAxisLength() - (numberOfBars - 1) * _gap) / numberOfBars);
	            } else {
	                _barWidth = Math.floor(_chart.xAxisLength() / (1 + _chart.barPadding()) / numberOfBars);
	            }

	            if (_barWidth === Infinity || isNaN(_barWidth) || _barWidth < MIN_BAR_WIDTH) {
	                _barWidth = MIN_BAR_WIDTH;
	            }
	        }
	    }

	    _chart.fadeDeselectedArea = function () {
	        var bars = _chart.chartBodyG().selectAll('rect.bar');
	        var extent = _chart.brush().extent();

	        if (_chart.isOrdinal()) {
	            if (_chart.hasFilter()) {
	                bars.classed(dc.constants.SELECTED_CLASS, function (d) {
	                    return _chart.hasFilter(d.x);
	                });
	                bars.classed(dc.constants.DESELECTED_CLASS, function (d) {
	                    return !_chart.hasFilter(d.x);
	                });
	            } else {
	                bars.classed(dc.constants.SELECTED_CLASS, false);
	                bars.classed(dc.constants.DESELECTED_CLASS, false);
	            }
	        } else {
	            if (!_chart.brushIsEmpty(extent)) {
	                var start = extent[0];
	                var end = extent[1];

	                bars.classed(dc.constants.DESELECTED_CLASS, function (d) {
	                    return d.x < start || d.x >= end;
	                });
	            } else {
	                bars.classed(dc.constants.DESELECTED_CLASS, false);
	            }
	        }
	    };

	    /**
	     * Whether the bar chart will render each bar centered around the data position on the x-axis.
	     * @method centerBar
	     * @memberof dc.barChart
	     * @instance
	     * @param {Boolean} [centerBar=false]
	     * @return {Boolean}
	     * @return {dc.barChart}
	     */
	    _chart.centerBar = function (centerBar) {
	        if (!arguments.length) {
	            return _centerBar;
	        }
	        _centerBar = centerBar;
	        return _chart;
	    };

	    dc.override(_chart, 'onClick', function (d) {
	        _chart._onClick(d.data);
	    });

	    /**
	     * Get or set the spacing between bars as a fraction of bar size. Valid values are between 0-1.
	     * Setting this value will also remove any previously set {@link dc.barChart#gap gap}. See the
	     * {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal_rangeBands d3 docs}
	     * for a visual description of how the padding is applied.
	     * @method barPadding
	     * @memberof dc.barChart
	     * @instance
	     * @param {Number} [barPadding=0]
	     * @return {Number}
	     * @return {dc.barChart}
	     */
	    _chart.barPadding = function (barPadding) {
	        if (!arguments.length) {
	            return _chart._rangeBandPadding();
	        }
	        _chart._rangeBandPadding(barPadding);
	        _gap = undefined;
	        return _chart;
	    };

	    _chart._useOuterPadding = function () {
	        return _gap === undefined;
	    };

	    /**
	     * Get or set the outer padding on an ordinal bar chart. This setting has no effect on non-ordinal charts.
	     * Will pad the width by `padding * barWidth` on each side of the chart.
	     * @method outerPadding
	     * @memberof dc.barChart
	     * @instance
	     * @param {Number} [padding=0.5]
	     * @return {Number}
	     * @return {dc.barChart}
	     */
	    _chart.outerPadding = _chart._outerRangeBandPadding;

	    /**
	     * Manually set fixed gap (in px) between bars instead of relying on the default auto-generated
	     * gap.  By default the bar chart implementation will calculate and set the gap automatically
	     * based on the number of data points and the length of the x axis.
	     * @method gap
	     * @memberof dc.barChart
	     * @instance
	     * @param {Number} [gap=2]
	     * @return {Number}
	     * @return {dc.barChart}
	     */
	    _chart.gap = function (gap) {
	        if (!arguments.length) {
	            return _gap;
	        }
	        _gap = gap;
	        return _chart;
	    };

	    _chart.extendBrush = function () {
	        var extent = _chart.brush().extent();
	        if (_chart.round() && (!_centerBar || _alwaysUseRounding)) {
	            extent[0] = extent.map(_chart.round())[0];
	            extent[1] = extent.map(_chart.round())[1];

	            _chart.chartBodyG().select('.brush')
	                .call(_chart.brush().extent(extent));
	        }

	        return extent;
	    };

	    /**
	     * Set or get whether rounding is enabled when bars are centered. If false, using
	     * rounding with centered bars will result in a warning and rounding will be ignored.  This flag
	     * has no effect if bars are not {@link dc.barChart#centerBar centered}.
	     * When using standard d3.js rounding methods, the brush often doesn't align correctly with
	     * centered bars since the bars are offset.  The rounding function must add an offset to
	     * compensate, such as in the following example.
	     * @method alwaysUseRounding
	     * @memberof dc.barChart
	     * @instance
	     * @example
	     * chart.round(function(n) { return Math.floor(n) + 0.5; });
	     * @param {Boolean} [alwaysUseRounding=false]
	     * @return {Boolean}
	     * @return {dc.barChart}
	     */
	    _chart.alwaysUseRounding = function (alwaysUseRounding) {
	        if (!arguments.length) {
	            return _alwaysUseRounding;
	        }
	        _alwaysUseRounding = alwaysUseRounding;
	        return _chart;
	    };

	    function colorFilter (color, inv) {
	        return function () {
	            var item = d3.select(this);
	            var match = item.attr('fill') === color;
	            return inv ? !match : match;
	        };
	    }

	    _chart.legendHighlight = function (d) {
	        if (!_chart.isLegendableHidden(d)) {
	            _chart.g().selectAll('rect.bar')
	                .classed('highlight', colorFilter(d.color))
	                .classed('fadeout', colorFilter(d.color, true));
	        }
	    };

	    _chart.legendReset = function () {
	        _chart.g().selectAll('rect.bar')
	            .classed('highlight', false)
	            .classed('fadeout', false);
	    };

	    dc.override(_chart, 'xAxisMax', function () {
	        var max = this._xAxisMax();
	        if ('resolution' in _chart.xUnits()) {
	            var res = _chart.xUnits().resolution;
	            max += res;
	        }
	        return max;
	    });

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * Concrete line/area chart implementation.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * - {@link http://dc-js.github.com/dc.js/crime/index.html Canadian City Crime Stats}
	 * @class lineChart
	 * @memberof dc
	 * @mixes dc.stackMixin
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a line chart under #chart-container1 element using the default global chart group
	 * var chart1 = dc.lineChart('#chart-container1');
	 * // create a line chart under #chart-container2 element using chart group A
	 * var chart2 = dc.lineChart('#chart-container2', 'chartGroupA');
	 * // create a sub-chart under a composite parent chart
	 * var chart3 = dc.lineChart(compositeChart);
	 * @param {String|node|d3.selection|dc.compositeChart} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector}
	 * specifying a dom block element such as a div; or a dom element or d3 selection.  If the line
	 * chart is a sub-chart in a {@link dc.compositeChart Composite Chart} then pass in the parent
	 * composite chart instance instead.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.lineChart}
	 */
	dc.lineChart = function (parent, chartGroup) {
	    var DEFAULT_DOT_RADIUS = 5;
	    var TOOLTIP_G_CLASS = 'dc-tooltip';
	    var DOT_CIRCLE_CLASS = 'dot';
	    var Y_AXIS_REF_LINE_CLASS = 'yRef';
	    var X_AXIS_REF_LINE_CLASS = 'xRef';
	    var DEFAULT_DOT_OPACITY = 1e-6;
	    var LABEL_PADDING = 3;

	    var _chart = dc.stackMixin(dc.coordinateGridMixin({}));
	    var _renderArea = false;
	    var _dotRadius = DEFAULT_DOT_RADIUS;
	    var _dataPointRadius = null;
	    var _dataPointFillOpacity = DEFAULT_DOT_OPACITY;
	    var _dataPointStrokeOpacity = DEFAULT_DOT_OPACITY;
	    var _interpolate = 'linear';
	    var _tension = 0.7;
	    var _defined;
	    var _dashStyle;
	    var _xyTipsOn = true;

	    _chart.transitionDuration(500);
	    _chart._rangeBandPadding(1);

	    _chart.plotData = function () {
	        var chartBody = _chart.chartBodyG();
	        var layersList = chartBody.selectAll('g.stack-list');

	        if (layersList.empty()) {
	            layersList = chartBody.append('g').attr('class', 'stack-list');
	        }

	        var layers = layersList.selectAll('g.stack').data(_chart.data());

	        var layersEnter = layers
	            .enter()
	            .append('g')
	            .attr('class', function (d, i) {
	                return 'stack ' + '_' + i;
	            });

	        drawLine(layersEnter, layers);

	        drawArea(layersEnter, layers);

	        drawDots(chartBody, layers);

	        if (_chart.renderLabel()) {
	            drawLabels(layers);
	        }
	    };

	    /**
	     * Gets or sets the interpolator to use for lines drawn, by string name, allowing e.g. step
	     * functions, splines, and cubic interpolation.  This is passed to
	     * {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate d3.svg.line.interpolate} and
	     * {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#area_interpolate d3.svg.area.interpolate},
	     * where you can find a complete list of valid arguments
	     * @method interpolate
	     * @memberof dc.lineChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate d3.svg.line.interpolate}
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#area_interpolate d3.svg.area.interpolate}
	     * @param  {String} [interpolate='linear']
	     * @return {String}
	     * @return {dc.lineChart}
	     */
	    _chart.interpolate = function (interpolate) {
	        if (!arguments.length) {
	            return _interpolate;
	        }
	        _interpolate = interpolate;
	        return _chart;
	    };

	    /**
	     * Gets or sets the tension to use for lines drawn, in the range 0 to 1.
	     * This parameter further customizes the interpolation behavior.  It is passed to
	     * {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_tension d3.svg.line.tension} and
	     * {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#area_tension d3.svg.area.tension}.
	     * @method tension
	     * @memberof dc.lineChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate d3.svg.line.interpolate}
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#area_interpolate d3.svg.area.interpolate}
	     * @param  {Number} [tension=0.7]
	     * @return {Number}
	     * @return {dc.lineChart}
	     */
	    _chart.tension = function (tension) {
	        if (!arguments.length) {
	            return _tension;
	        }
	        _tension = tension;
	        return _chart;
	    };

	    /**
	     * Gets or sets a function that will determine discontinuities in the line which should be
	     * skipped: the path will be broken into separate subpaths if some points are undefined.
	     * This function is passed to
	     * {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_defined d3.svg.line.defined}
	     *
	     * Note: crossfilter will sometimes coerce nulls to 0, so you may need to carefully write
	     * custom reduce functions to get this to work, depending on your data. See
	     * https://github.com/dc-js/dc.js/issues/615#issuecomment-49089248
	     * @method defined
	     * @memberof dc.lineChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#line_defined d3.svg.line.defined}
	     * @param  {Function} [defined]
	     * @return {Function}
	     * @return {dc.lineChart}
	     */
	    _chart.defined = function (defined) {
	        if (!arguments.length) {
	            return _defined;
	        }
	        _defined = defined;
	        return _chart;
	    };

	    /**
	     * Set the line's d3 dashstyle. This value becomes the 'stroke-dasharray' of line. Defaults to empty
	     * array (solid line).
	     * @method dashStyle
	     * @memberof dc.lineChart
	     * @instance
	     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray stroke-dasharray}
	     * @example
	     * // create a Dash Dot Dot Dot
	     * chart.dashStyle([3,1,1,1]);
	     * @param  {Array<Number>} [dashStyle=[]]
	     * @return {Array<Number>}
	     * @return {dc.lineChart}
	     */
	    _chart.dashStyle = function (dashStyle) {
	        if (!arguments.length) {
	            return _dashStyle;
	        }
	        _dashStyle = dashStyle;
	        return _chart;
	    };

	    /**
	     * Get or set render area flag. If the flag is set to true then the chart will render the area
	     * beneath each line and the line chart effectively becomes an area chart.
	     * @method renderArea
	     * @memberof dc.lineChart
	     * @instance
	     * @param  {Boolean} [renderArea=false]
	     * @return {Boolean}
	     * @return {dc.lineChart}
	     */
	    _chart.renderArea = function (renderArea) {
	        if (!arguments.length) {
	            return _renderArea;
	        }
	        _renderArea = renderArea;
	        return _chart;
	    };

	    function colors (d, i) {
	        return _chart.getColor.call(d, d.values, i);
	    }

	    function drawLine (layersEnter, layers) {
	        var line = d3.svg.line()
	            .x(function (d) {
	                return _chart.x()(d.x);
	            })
	            .y(function (d) {
	                return _chart.y()(d.y + d.y0);
	            })
	            .interpolate(_interpolate)
	            .tension(_tension);
	        if (_defined) {
	            line.defined(_defined);
	        }

	        var path = layersEnter.append('path')
	            .attr('class', 'line')
	            .attr('stroke', colors);
	        if (_dashStyle) {
	            path.attr('stroke-dasharray', _dashStyle);
	        }

	        dc.transition(layers.select('path.line'), _chart.transitionDuration())
	            //.ease('linear')
	            .attr('stroke', colors)
	            .attr('d', function (d) {
	                return safeD(line(d.values));
	            });
	    }

	    function drawArea (layersEnter, layers) {
	        if (_renderArea) {
	            var area = d3.svg.area()
	                .x(function (d) {
	                    return _chart.x()(d.x);
	                })
	                .y(function (d) {
	                    return _chart.y()(d.y + d.y0);
	                })
	                .y0(function (d) {
	                    return _chart.y()(d.y0);
	                })
	                .interpolate(_interpolate)
	                .tension(_tension);
	            if (_defined) {
	                area.defined(_defined);
	            }

	            layersEnter.append('path')
	                .attr('class', 'area')
	                .attr('fill', colors)
	                .attr('d', function (d) {
	                    return safeD(area(d.values));
	                });

	            dc.transition(layers.select('path.area'), _chart.transitionDuration())
	                //.ease('linear')
	                .attr('fill', colors)
	                .attr('d', function (d) {
	                    return safeD(area(d.values));
	                });
	        }
	    }

	    function safeD (d) {
	        return (!d || d.indexOf('NaN') >= 0) ? 'M0,0' : d;
	    }

	    function drawDots (chartBody, layers) {
	        if (!_chart.brushOn() && _chart.xyTipsOn()) {
	            var tooltipListClass = TOOLTIP_G_CLASS + '-list';
	            var tooltips = chartBody.select('g.' + tooltipListClass);

	            if (tooltips.empty()) {
	                tooltips = chartBody.append('g').attr('class', tooltipListClass);
	            }

	            layers.each(function (d, layerIndex) {
	                var points = d.values;
	                if (_defined) {
	                    points = points.filter(_defined);
	                }

	                var g = tooltips.select('g.' + TOOLTIP_G_CLASS + '._' + layerIndex);
	                if (g.empty()) {
	                    g = tooltips.append('g').attr('class', TOOLTIP_G_CLASS + ' _' + layerIndex);
	                }

	                createRefLines(g);

	                var dots = g.selectAll('circle.' + DOT_CIRCLE_CLASS)
	                    .data(points, dc.pluck('x'));

	                dots.enter()
	                    .append('circle')
	                    .attr('class', DOT_CIRCLE_CLASS)
	                    .attr('r', getDotRadius())
	                    .style('fill-opacity', _dataPointFillOpacity)
	                    .style('stroke-opacity', _dataPointStrokeOpacity)
	                    .attr('fill', _chart.getColor)
	                    .on('mousemove', function () {
	                        var dot = d3.select(this);
	                        showDot(dot);
	                        showRefLines(dot, g);
	                    })
	                    .on('mouseout', function () {
	                        var dot = d3.select(this);
	                        hideDot(dot);
	                        hideRefLines(g);
	                    });

	                dots.call(renderTitle, d);

	                dc.transition(dots, _chart.transitionDuration())
	                    .attr('cx', function (d) {
	                        return dc.utils.safeNumber(_chart.x()(d.x));
	                    })
	                    .attr('cy', function (d) {
	                        return dc.utils.safeNumber(_chart.y()(d.y + d.y0));
	                    })
	                    .attr('fill', _chart.getColor);

	                dots.exit().remove();
	            });
	        }
	    }

	    _chart.label(function (d) {
	        return dc.utils.printSingleValue(d.y0 + d.y);
	    }, false);

	    function drawLabels (layers) {
	        layers.each(function (d, layerIndex) {
	            var layer = d3.select(this);
	            var labels = layer.selectAll('text.lineLabel')
	                .data(d.values, dc.pluck('x'));

	            labels.enter()
	                .append('text')
	                .attr('class', 'lineLabel')
	                .attr('text-anchor', 'middle');

	            dc.transition(labels, _chart.transitionDuration())
	                .attr('x', function (d) {
	                    return dc.utils.safeNumber(_chart.x()(d.x));
	                })
	                .attr('y', function (d) {
	                    var y = _chart.y()(d.y + d.y0) - LABEL_PADDING;
	                    return dc.utils.safeNumber(y);
	                })
	                .text(function (d) {
	                    return _chart.label()(d);
	                });

	            dc.transition(labels.exit(), _chart.transitionDuration())
	                .attr('height', 0)
	                .remove();
	        });
	    }

	    function createRefLines (g) {
	        var yRefLine = g.select('path.' + Y_AXIS_REF_LINE_CLASS).empty() ?
	            g.append('path').attr('class', Y_AXIS_REF_LINE_CLASS) : g.select('path.' + Y_AXIS_REF_LINE_CLASS);
	        yRefLine.style('display', 'none').attr('stroke-dasharray', '5,5');

	        var xRefLine = g.select('path.' + X_AXIS_REF_LINE_CLASS).empty() ?
	            g.append('path').attr('class', X_AXIS_REF_LINE_CLASS) : g.select('path.' + X_AXIS_REF_LINE_CLASS);
	        xRefLine.style('display', 'none').attr('stroke-dasharray', '5,5');
	    }

	    function showDot (dot) {
	        dot.style('fill-opacity', 0.8);
	        dot.style('stroke-opacity', 0.8);
	        dot.attr('r', _dotRadius);
	        return dot;
	    }

	    function showRefLines (dot, g) {
	        var x = dot.attr('cx');
	        var y = dot.attr('cy');
	        var yAxisX = (_chart._yAxisX() - _chart.margins().left);
	        var yAxisRefPathD = 'M' + yAxisX + ' ' + y + 'L' + (x) + ' ' + (y);
	        var xAxisRefPathD = 'M' + x + ' ' + _chart.yAxisHeight() + 'L' + x + ' ' + y;
	        g.select('path.' + Y_AXIS_REF_LINE_CLASS).style('display', '').attr('d', yAxisRefPathD);
	        g.select('path.' + X_AXIS_REF_LINE_CLASS).style('display', '').attr('d', xAxisRefPathD);
	    }

	    function getDotRadius () {
	        return _dataPointRadius || _dotRadius;
	    }

	    function hideDot (dot) {
	        dot.style('fill-opacity', _dataPointFillOpacity)
	            .style('stroke-opacity', _dataPointStrokeOpacity)
	            .attr('r', getDotRadius());
	    }

	    function hideRefLines (g) {
	        g.select('path.' + Y_AXIS_REF_LINE_CLASS).style('display', 'none');
	        g.select('path.' + X_AXIS_REF_LINE_CLASS).style('display', 'none');
	    }

	    function renderTitle (dot, d) {
	        if (_chart.renderTitle()) {
	            dot.selectAll('title').remove();
	            dot.append('title').text(dc.pluck('data', _chart.title(d.name)));
	        }
	    }

	    /**
	     * Turn on/off the mouseover behavior of an individual data point which renders a circle and x/y axis
	     * dashed lines back to each respective axis.  This is ignored if the chart
	     * {@link dc.coordinateGridMixin#brushOn brush} is on
	     * @method xyTipsOn
	     * @memberof dc.lineChart
	     * @instance
	     * @param  {Boolean} [xyTipsOn=false]
	     * @return {Boolean}
	     * @return {dc.lineChart}
	     */
	    _chart.xyTipsOn = function (xyTipsOn) {
	        if (!arguments.length) {
	            return _xyTipsOn;
	        }
	        _xyTipsOn = xyTipsOn;
	        return _chart;
	    };

	    /**
	     * Get or set the radius (in px) for dots displayed on the data points.
	     * @method dotRadius
	     * @memberof dc.lineChart
	     * @instance
	     * @param  {Number} [dotRadius=5]
	     * @return {Number}
	     * @return {dc.lineChart}
	     */
	    _chart.dotRadius = function (dotRadius) {
	        if (!arguments.length) {
	            return _dotRadius;
	        }
	        _dotRadius = dotRadius;
	        return _chart;
	    };

	    /**
	     * Always show individual dots for each datapoint.
	     * If `options` is falsy, it disables data point rendering.
	     *
	     * If no `options` are provided, the current `options` values are instead returned.
	     * @method renderDataPoints
	     * @memberof dc.lineChart
	     * @instance
	     * @example
	     * chart.renderDataPoints({radius: 2, fillOpacity: 0.8, strokeOpacity: 0.8})
	     * @param  {{fillOpacity: Number, strokeOpacity: Number, radius: Number}} [options={fillOpacity: 0.8, strokeOpacity: 0.8, radius: 2}]
	     * @return {{fillOpacity: Number, strokeOpacity: Number, radius: Number}}
	     * @return {dc.lineChart}
	     */
	    _chart.renderDataPoints = function (options) {
	        if (!arguments.length) {
	            return {
	                fillOpacity: _dataPointFillOpacity,
	                strokeOpacity: _dataPointStrokeOpacity,
	                radius: _dataPointRadius
	            };
	        } else if (!options) {
	            _dataPointFillOpacity = DEFAULT_DOT_OPACITY;
	            _dataPointStrokeOpacity = DEFAULT_DOT_OPACITY;
	            _dataPointRadius = null;
	        } else {
	            _dataPointFillOpacity = options.fillOpacity || 0.8;
	            _dataPointStrokeOpacity = options.strokeOpacity || 0.8;
	            _dataPointRadius = options.radius || 2;
	        }
	        return _chart;
	    };

	    function colorFilter (color, dashstyle, inv) {
	        return function () {
	            var item = d3.select(this);
	            var match = (item.attr('stroke') === color &&
	                item.attr('stroke-dasharray') === ((dashstyle instanceof Array) ?
	                    dashstyle.join(',') : null)) || item.attr('fill') === color;
	            return inv ? !match : match;
	        };
	    }

	    _chart.legendHighlight = function (d) {
	        if (!_chart.isLegendableHidden(d)) {
	            _chart.g().selectAll('path.line, path.area')
	                .classed('highlight', colorFilter(d.color, d.dashstyle))
	                .classed('fadeout', colorFilter(d.color, d.dashstyle, true));
	        }
	    };

	    _chart.legendReset = function () {
	        _chart.g().selectAll('path.line, path.area')
	            .classed('highlight', false)
	            .classed('fadeout', false);
	    };

	    dc.override(_chart, 'legendables', function () {
	        var legendables = _chart._legendables();
	        if (!_dashStyle) {
	            return legendables;
	        }
	        return legendables.map(function (l) {
	            l.dashstyle = _dashStyle;
	            return l;
	        });
	    });

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * The data count widget is a simple widget designed to display the number of records selected by the
	 * current filters out of the total number of records in the data set. Once created the data count widget
	 * will automatically update the text content of the following elements under the parent element.
	 *
	 * Note: this widget works best for the specific case of showing the number of records out of a
	 * total. If you want a more general-purpose numeric display, please use the
	 * {@link dc.numberDisplay} widget instead.
	 *
	 * '.total-count' - total number of records
	 * '.filter-count' - number of records matched by the current filters
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * @class dataCount
	 * @memberof dc
	 * @mixes dc.baseMixin
	 * @example
	 * var ndx = crossfilter(data);
	 * var all = ndx.groupAll();
	 *
	 * dc.dataCount('.dc-data-count')
	 *     .dimension(ndx)
	 *     .group(all);
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.dataCount}
	 */
	dc.dataCount = function (parent, chartGroup) {
	    var _formatNumber = d3.format(',d');
	    var _chart = dc.baseMixin({});
	    var _html = {some: '', all: ''};

	    /**
	     * Gets or sets an optional object specifying HTML templates to use depending how many items are
	     * selected. The text `%total-count` will replaced with the total number of records, and the text
	     * `%filter-count` will be replaced with the number of selected records.
	     * - all: HTML template to use if all items are selected
	     * - some: HTML template to use if not all items are selected
	     * @method html
	     * @memberof dc.dataCount
	     * @instance
	     * @example
	     * counter.html({
	     *      some: '%filter-count out of %total-count records selected',
	     *      all: 'All records selected. Click on charts to apply filters'
	     * })
	     * @param {{some:String, all: String}} [options]
	     * @return {{some:String, all: String}}
	     * @return {dc.dataCount}
	     */
	    _chart.html = function (options) {
	        if (!arguments.length) {
	            return _html;
	        }
	        if (options.all) {
	            _html.all = options.all;
	        }
	        if (options.some) {
	            _html.some = options.some;
	        }
	        return _chart;
	    };

	    /**
	     * Gets or sets an optional function to format the filter count and total count.
	     * @method formatNumber
	     * @memberof dc.dataCount
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Formatting d3.format}
	     * @example
	     * counter.formatNumber(d3.format('.2g'))
	     * @param {Function} [formatter=d3.format('.2g')]
	     * @return {Function}
	     * @return {dc.dataCount}
	     */
	    _chart.formatNumber = function (formatter) {
	        if (!arguments.length) {
	            return _formatNumber;
	        }
	        _formatNumber = formatter;
	        return _chart;
	    };

	    _chart._doRender = function () {
	        var tot = _chart.dimension().size(),
	            val = _chart.group().value();
	        var all = _formatNumber(tot);
	        var selected = _formatNumber(val);

	        if ((tot === val) && (_html.all !== '')) {
	            _chart.root().html(_html.all.replace('%total-count', all).replace('%filter-count', selected));
	        } else if (_html.some !== '') {
	            _chart.root().html(_html.some.replace('%total-count', all).replace('%filter-count', selected));
	        } else {
	            _chart.selectAll('.total-count').text(all);
	            _chart.selectAll('.filter-count').text(selected);
	        }
	        return _chart;
	    };

	    _chart._doRedraw = function () {
	        return _chart._doRender();
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * The data table is a simple widget designed to list crossfilter focused data set (rows being
	 * filtered) in a good old tabular fashion.
	 *
	 * Note: Unlike other charts, the data table (and data grid chart) use the group attribute as a
	 * keying function for {@link https://github.com/mbostock/d3/wiki/Arrays#-nest nesting} the data
	 * together in groups.  Do not pass in a crossfilter group as this will not work.
	 *
	 * Another interesting feature of the data table is that you can pass a crossfilter group to the `dimension`, as
	 * long as you specify the {@link dc.dataTable#order order} as `d3.descending`, since the data
	 * table will use `dimension.top()` to fetch the data in that case, and the method is equally
	 * supported on the crossfilter group as the crossfilter dimension.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * - {@link http://dc-js.github.io/dc.js/examples/table-on-aggregated-data.html dataTable on a crossfilter group}
	 * ({@link https://github.com/dc-js/dc.js/blob/develop/web/examples/table-on-aggregated-data.html source})
	 * @class dataTable
	 * @memberof dc
	 * @mixes dc.baseMixin
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.dataTable}
	 */
	dc.dataTable = function (parent, chartGroup) {
	    var LABEL_CSS_CLASS = 'dc-table-label';
	    var ROW_CSS_CLASS = 'dc-table-row';
	    var COLUMN_CSS_CLASS = 'dc-table-column';
	    var GROUP_CSS_CLASS = 'dc-table-group';
	    var HEAD_CSS_CLASS = 'dc-table-head';

	    var _chart = dc.baseMixin({});

	    var _size = 25;
	    var _columns = [];
	    var _sortBy = function (d) {
	        return d;
	    };
	    var _order = d3.ascending;
	    var _beginSlice = 0;
	    var _endSlice;
	    var _showGroups = true;

	    _chart._doRender = function () {
	        _chart.selectAll('tbody').remove();

	        renderRows(renderGroups());

	        return _chart;
	    };

	    _chart._doColumnValueFormat = function (v, d) {
	        return ((typeof v === 'function') ?
	                v(d) :                          // v as function
	                ((typeof v === 'string') ?
	                 d[v] :                         // v is field name string
	                 v.format(d)                        // v is Object, use fn (element 2)
	                )
	               );
	    };

	    _chart._doColumnHeaderFormat = function (d) {
	        // if 'function', convert to string representation
	        // show a string capitalized
	        // if an object then display its label string as-is.
	        return (typeof d === 'function') ?
	                _chart._doColumnHeaderFnToString(d) :
	                ((typeof d === 'string') ?
	                 _chart._doColumnHeaderCapitalize(d) : String(d.label));
	    };

	    _chart._doColumnHeaderCapitalize = function (s) {
	        // capitalize
	        return s.charAt(0).toUpperCase() + s.slice(1);
	    };

	    _chart._doColumnHeaderFnToString = function (f) {
	        // columnString(f) {
	        var s = String(f);
	        var i1 = s.indexOf('return ');
	        if (i1 >= 0) {
	            var i2 = s.lastIndexOf(';');
	            if (i2 >= 0) {
	                s = s.substring(i1 + 7, i2);
	                var i3 = s.indexOf('numberFormat');
	                if (i3 >= 0) {
	                    s = s.replace('numberFormat', '');
	                }
	            }
	        }
	        return s;
	    };

	    function renderGroups () {
	        // The 'original' example uses all 'functions'.
	        // If all 'functions' are used, then don't remove/add a header, and leave
	        // the html alone. This preserves the functionality of earlier releases.
	        // A 2nd option is a string representing a field in the data.
	        // A third option is to supply an Object such as an array of 'information', and
	        // supply your own _doColumnHeaderFormat and _doColumnValueFormat functions to
	        // create what you need.
	        var bAllFunctions = true;
	        _columns.forEach(function (f) {
	            bAllFunctions = bAllFunctions & (typeof f === 'function');
	        });

	        if (!bAllFunctions) {
	            // ensure one thead
	            var thead = _chart.selectAll('thead').data([0]);
	            thead.enter().append('thead');
	            thead.exit().remove();

	            // with one tr
	            var headrow = thead.selectAll('tr').data([0]);
	            headrow.enter().append('tr');
	            headrow.exit().remove();

	            // with a th for each column
	            var headcols = headrow.selectAll('th')
	                .data(_columns);
	            headcols.enter().append('th');
	            headcols.exit().remove();

	            headcols
	                .attr('class', HEAD_CSS_CLASS)
	                    .html(function (d) {
	                        return (_chart._doColumnHeaderFormat(d));

	                    });
	        }

	        var groups = _chart.root().selectAll('tbody')
	            .data(nestEntries(), function (d) {
	                return _chart.keyAccessor()(d);
	            });

	        var rowGroup = groups
	            .enter()
	            .append('tbody');

	        if (_showGroups === true) {
	            rowGroup
	                .append('tr')
	                .attr('class', GROUP_CSS_CLASS)
	                    .append('td')
	                    .attr('class', LABEL_CSS_CLASS)
	                    .attr('colspan', _columns.length)
	                    .html(function (d) {
	                        return _chart.keyAccessor()(d);
	                    });
	        }

	        groups.exit().remove();

	        return rowGroup;
	    }

	    function nestEntries () {
	        var entries;
	        if (_order === d3.ascending) {
	            entries = _chart.dimension().bottom(_size);
	        } else {
	            entries = _chart.dimension().top(_size);
	        }

	        return d3.nest()
	            .key(_chart.group())
	            .sortKeys(_order)
	            .entries(entries.sort(function (a, b) {
	                return _order(_sortBy(a), _sortBy(b));
	            }).slice(_beginSlice, _endSlice));
	    }

	    function renderRows (groups) {
	        var rows = groups.order()
	            .selectAll('tr.' + ROW_CSS_CLASS)
	            .data(function (d) {
	                return d.values;
	            });

	        var rowEnter = rows.enter()
	            .append('tr')
	            .attr('class', ROW_CSS_CLASS);

	        _columns.forEach(function (v, i) {
	            rowEnter.append('td')
	                .attr('class', COLUMN_CSS_CLASS + ' _' + i)
	                .html(function (d) {
	                    return _chart._doColumnValueFormat(v, d);
	                });
	        });

	        rows.exit().remove();

	        return rows;
	    }

	    _chart._doRedraw = function () {
	        return _chart._doRender();
	    };

	    /**
	     * Get or set the table size which determines the number of rows displayed by the widget.
	     * @method size
	     * @memberof dc.dataTable
	     * @instance
	     * @param {Number} [size=25]
	     * @return {Number}
	     * @return {dc.dataTable}
	     */
	    _chart.size = function (size) {
	        if (!arguments.length) {
	            return _size;
	        }
	        _size = size;
	        return _chart;
	    };

	    /**
	     * Get or set the index of the beginning slice which determines which entries get displayed
	     * by the widget. Useful when implementing pagination.
	     *
	     * Note: the sortBy function will determine how the rows are ordered for pagination purposes.

	     * See the {@link http://dc-js.github.io/dc.js/examples/table-pagination.html table pagination example}
	     * to see how to implement the pagination user interface using `beginSlice` and `endSlice`.
	     * @method beginSlice
	     * @memberof dc.dataTable
	     * @instance
	     * @param {Number} [beginSlice=0]
	     * @return {Number}
	     * @return {dc.dataTable}
	     */
	    _chart.beginSlice = function (beginSlice) {
	        if (!arguments.length) {
	            return _beginSlice;
	        }
	        _beginSlice = beginSlice;
	        return _chart;
	    };

	    /**
	     * Get or set the index of the end slice which determines which entries get displayed by the
	     * widget. Useful when implementing pagination. See {@link dc.dataTable#beginSlice `beginSlice`} for more information.
	     * @method endSlice
	     * @memberof dc.dataTable
	     * @instance
	     * @param {Number|undefined} [endSlice=undefined]
	     * @return {Number}
	     * @return {dc.dataTable}
	     */
	    _chart.endSlice = function (endSlice) {
	        if (!arguments.length) {
	            return _endSlice;
	        }
	        _endSlice = endSlice;
	        return _chart;
	    };

	    /**
	     * Get or set column functions. The data table widget supports several methods of specifying the
	     * columns to display.
	     *
	     * The original method uses an array of functions to generate dynamic columns. Column functions
	     * are simple javascript functions with only one input argument `d` which represents a row in
	     * the data set. The return value of these functions will be used to generate the content for
	     * each cell. However, this method requires the HTML for the table to have a fixed set of column
	     * headers.
	     *
	     * <pre><code>chart.columns([
	     *     function(d) { return d.date; },
	     *     function(d) { return d.open; },
	     *     function(d) { return d.close; },
	     *     function(d) { return numberFormat(d.close - d.open); },
	     *     function(d) { return d.volume; }
	     * ]);
	     * </code></pre>
	     *
	     * In the second method, you can list the columns to read from the data without specifying it as
	     * a function, except where necessary (ie, computed columns).  Note the data element name is
	     * capitalized when displayed in the table header. You can also mix in functions as necessary,
	     * using the third `{label, format}` form, as shown below.
	     *
	     * <pre><code>chart.columns([
	     *     "date",    // d["date"], ie, a field accessor; capitalized automatically
	     *     "open",    // ...
	     *     "close",   // ...
	     *     {
	     *         label: "Change",
	     *         format: function (d) {
	     *             return numberFormat(d.close - d.open);
	     *         }
	     *     },
	     *     "volume"   // d["volume"], ie, a field accessor; capitalized automatically
	     * ]);
	     * </code></pre>
	     *
	     * In the third example, we specify all fields using the `{label, format}` method:
	     * <pre><code>chart.columns([
	     *     {
	     *         label: "Date",
	     *         format: function (d) { return d.date; }
	     *     },
	     *     {
	     *         label: "Open",
	     *         format: function (d) { return numberFormat(d.open); }
	     *     },
	     *     {
	     *         label: "Close",
	     *         format: function (d) { return numberFormat(d.close); }
	     *     },
	     *     {
	     *         label: "Change",
	     *         format: function (d) { return numberFormat(d.close - d.open); }
	     *     },
	     *     {
	     *         label: "Volume",
	     *         format: function (d) { return d.volume; }
	     *     }
	     * ]);
	     * </code></pre>
	     *
	     * You may wish to override the dataTable functions `_doColumnHeaderCapitalize` and
	     * `_doColumnHeaderFnToString`, which are used internally to translate the column information or
	     * function into a displayed header. The first one is used on the "string" column specifier; the
	     * second is used to transform a stringified function into something displayable. For the Stock
	     * example, the function for Change becomes the table header **d.close - d.open**.
	     *
	     * Finally, you can even specify a completely different form of column definition. To do this,
	     * override `_chart._doColumnHeaderFormat` and `_chart._doColumnValueFormat` Be aware that
	     * fields without numberFormat specification will be displayed just as they are stored in the
	     * data, unformatted.
	     * @method columns
	     * @memberof dc.dataTable
	     * @instance
	     * @param {Array<Function>} [columns=[]]
	     * @return {Array<Function>}}
	     * @return {dc.dataTable}
	     */
	    _chart.columns = function (columns) {
	        if (!arguments.length) {
	            return _columns;
	        }
	        _columns = columns;
	        return _chart;
	    };

	    /**
	     * Get or set sort-by function. This function works as a value accessor at row level and returns a
	     * particular field to be sorted by. Default value: identity function
	     * @method sortBy
	     * @memberof dc.dataTable
	     * @instance
	     * @example
	     * chart.sortBy(function(d) {
	     *     return d.date;
	     * });
	     * @param {Function} [sortBy]
	     * @return {Function}
	     * @return {dc.dataTable}
	     */
	    _chart.sortBy = function (sortBy) {
	        if (!arguments.length) {
	            return _sortBy;
	        }
	        _sortBy = sortBy;
	        return _chart;
	    };

	    /**
	     * Get or set sort order. If the order is `d3.ascending`, the data table will use
	     * `dimension().bottom()` to fetch the data; otherwise it will use `dimension().top()`
	     * @method order
	     * @memberof dc.dataTable
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_ascending d3.ascending}
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_descending d3.descending}
	     * @example
	     * chart.order(d3.descending);
	     * @param {Function} [order=d3.ascending]
	     * @return {Function}
	     * @return {dc.dataTable}
	     */
	    _chart.order = function (order) {
	        if (!arguments.length) {
	            return _order;
	        }
	        _order = order;
	        return _chart;
	    };

	    /**
	     * Get or set if group rows will be shown.
	     *
	     * The .group() getter-setter must be provided in either case.
	     * @method showGroups
	     * @memberof dc.dataTable
	     * @instance
	     * @example
	     * chart
	     *     .group([value], [name])
	     *     .showGroups(true|false);
	     * @param {Boolean} [showGroups=true]
	     * @return {Boolean}
	     * @return {dc.dataTable}
	     */
	    _chart.showGroups = function (showGroups) {
	        if (!arguments.length) {
	            return _showGroups;
	        }
	        _showGroups = showGroups;
	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * Data grid is a simple widget designed to list the filtered records, providing
	 * a simple way to define how the items are displayed.
	 *
	 * Note: Unlike other charts, the data grid chart (and data table) use the group attribute as a keying function
	 * for {@link https://github.com/mbostock/d3/wiki/Arrays#-nest nesting} the data together in groups.
	 * Do not pass in a crossfilter group as this will not work.
	 *
	 * Examples:
	 * - {@link http://europarl.me/dc.js/web/ep/index.html List of members of the european parliament}
	 * @class dataGrid
	 * @memberof dc
	 * @mixes dc.baseMixin
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.dataGrid}
	 */
	dc.dataGrid = function (parent, chartGroup) {
	    var LABEL_CSS_CLASS = 'dc-grid-label';
	    var ITEM_CSS_CLASS = 'dc-grid-item';
	    var GROUP_CSS_CLASS = 'dc-grid-group';
	    var GRID_CSS_CLASS = 'dc-grid-top';

	    var _chart = dc.baseMixin({});

	    var _size = 999; // shouldn't be needed, but you might
	    var _html = function (d) { return 'you need to provide an html() handling param:  ' + JSON.stringify(d); };
	    var _sortBy = function (d) {
	        return d;
	    };
	    var _order = d3.ascending;
	    var _beginSlice = 0, _endSlice;

	    var _htmlGroup = function (d) {
	        return '<div class=\'' + GROUP_CSS_CLASS + '\'><h1 class=\'' + LABEL_CSS_CLASS + '\'>' +
	            _chart.keyAccessor()(d) + '</h1></div>';
	    };

	    _chart._doRender = function () {
	        _chart.selectAll('div.' + GRID_CSS_CLASS).remove();

	        renderItems(renderGroups());

	        return _chart;
	    };

	    function renderGroups () {
	        var groups = _chart.root().selectAll('div.' + GRID_CSS_CLASS)
	                .data(nestEntries(), function (d) {
	                    return _chart.keyAccessor()(d);
	                });

	        var itemGroup = groups
	                .enter()
	                .append('div')
	                .attr('class', GRID_CSS_CLASS);

	        if (_htmlGroup) {
	            itemGroup
	                .html(function (d) {
	                    return _htmlGroup(d);
	                });
	        }

	        groups.exit().remove();
	        return itemGroup;
	    }

	    function nestEntries () {
	        var entries = _chart.dimension().top(_size);

	        return d3.nest()
	            .key(_chart.group())
	            .sortKeys(_order)
	            .entries(entries.sort(function (a, b) {
	                return _order(_sortBy(a), _sortBy(b));
	            }).slice(_beginSlice, _endSlice));
	    }

	    function renderItems (groups) {
	        var items = groups.order()
	                .selectAll('div.' + ITEM_CSS_CLASS)
	                .data(function (d) {
	                    return d.values;
	                });

	        items.enter()
	            .append('div')
	            .attr('class', ITEM_CSS_CLASS)
	            .html(function (d) {
	                return _html(d);
	            });

	        items.exit().remove();

	        return items;
	    }

	    _chart._doRedraw = function () {
	        return _chart._doRender();
	    };

	    /**
	     * Get or set the index of the beginning slice which determines which entries get displayed by the widget.
	     * Useful when implementing pagination.
	     * @method beginSlice
	     * @memberof dc.dataGrid
	     * @instance
	     * @param {Number} [beginSlice=0]
	     * @return {Number}
	     * @return {dc.dataGrid}
	     */
	    _chart.beginSlice = function (beginSlice) {
	        if (!arguments.length) {
	            return _beginSlice;
	        }
	        _beginSlice = beginSlice;
	        return _chart;
	    };

	    /**
	     * Get or set the index of the end slice which determines which entries get displayed by the widget
	     * Useful when implementing pagination.
	     * @method endSlice
	     * @memberof dc.dataGrid
	     * @instance
	     * @param {Number} [endSlice]
	     * @return {Number}
	     * @return {dc.dataGrid}
	     */
	    _chart.endSlice = function (endSlice) {
	        if (!arguments.length) {
	            return _endSlice;
	        }
	        _endSlice = endSlice;
	        return _chart;
	    };

	    /**
	     * Get or set the grid size which determines the number of items displayed by the widget.
	     * @method size
	     * @memberof dc.dataGrid
	     * @instance
	     * @param {Number} [size=999]
	     * @return {Number}
	     * @return {dc.dataGrid}
	     */
	    _chart.size = function (size) {
	        if (!arguments.length) {
	            return _size;
	        }
	        _size = size;
	        return _chart;
	    };

	    /**
	     * Get or set the function that formats an item. The data grid widget uses a
	     * function to generate dynamic html. Use your favourite templating engine or
	     * generate the string directly.
	     * @method html
	     * @memberof dc.dataGrid
	     * @instance
	     * @example
	     * chart.html(function (d) { return '<div class='item '+data.exampleCategory+''>'+data.exampleString+'</div>';});
	     * @param {Function} [html]
	     * @return {Function}
	     * @return {dc.dataGrid}
	     */
	    _chart.html = function (html) {
	        if (!arguments.length) {
	            return _html;
	        }
	        _html = html;
	        return _chart;
	    };

	    /**
	     * Get or set the function that formats a group label.
	     * @method htmlGroup
	     * @memberof dc.dataGrid
	     * @instance
	     * @example
	     * chart.htmlGroup (function (d) { return '<h2>'.d.key . 'with ' . d.values.length .' items</h2>'});
	     * @param {Function} [htmlGroup]
	     * @return {Function}
	     * @return {dc.dataGrid}
	     */
	    _chart.htmlGroup = function (htmlGroup) {
	        if (!arguments.length) {
	            return _htmlGroup;
	        }
	        _htmlGroup = htmlGroup;
	        return _chart;
	    };

	    /**
	     * Get or set sort-by function. This function works as a value accessor at the item
	     * level and returns a particular field to be sorted.
	     * @method sortBy
	     * @memberof dc.dataGrid
	     * @instance
	     * @example
	     * chart.sortBy(function(d) {
	     *     return d.date;
	     * });
	     * @param {Function} [sortByFunction]
	     * @return {Function}
	     * @return {dc.dataGrid}
	     */
	    _chart.sortBy = function (sortByFunction) {
	        if (!arguments.length) {
	            return _sortBy;
	        }
	        _sortBy = sortByFunction;
	        return _chart;
	    };

	    /**
	     * Get or set sort order function.
	     * @method order
	     * @memberof dc.dataGrid
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_ascending d3.ascending}
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_descending d3.descending}
	     * @example
	     * chart.order(d3.descending);
	     * @param {Function} [order=d3.ascending]
	     * @return {Function}
	     * @return {dc.dataGrid}
	     */
	    _chart.order = function (order) {
	        if (!arguments.length) {
	            return _order;
	        }
	        _order = order;
	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * A concrete implementation of a general purpose bubble chart that allows data visualization using the
	 * following dimensions:
	 * - x axis position
	 * - y axis position
	 * - bubble radius
	 * - color
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * - {@link http://dc-js.github.com/dc.js/vc/index.html US Venture Capital Landscape 2011}
	 * @class bubbleChart
	 * @memberof dc
	 * @mixes dc.bubbleMixin
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a bubble chart under #chart-container1 element using the default global chart group
	 * var bubbleChart1 = dc.bubbleChart('#chart-container1');
	 * // create a bubble chart under #chart-container2 element using chart group A
	 * var bubbleChart2 = dc.bubbleChart('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.bubbleChart}
	 */
	dc.bubbleChart = function (parent, chartGroup) {
	    var _chart = dc.bubbleMixin(dc.coordinateGridMixin({}));

	    var _elasticRadius = false;
	    var _sortBubbleSize = false;

	    _chart.transitionDuration(750);

	    var bubbleLocator = function (d) {
	        return 'translate(' + (bubbleX(d)) + ',' + (bubbleY(d)) + ')';
	    };

	    /**
	     * Turn on or off the elastic bubble radius feature, or return the value of the flag. If this
	     * feature is turned on, then bubble radii will be automatically rescaled to fit the chart better.
	     * @method elasticRadius
	     * @memberof dc.bubbleChart
	     * @instance
	     * @param {Boolean} [elasticRadius=false]
	     * @return {Boolean}
	     * @return {dc.bubbleChart}
	     */
	    _chart.elasticRadius = function (elasticRadius) {
	        if (!arguments.length) {
	            return _elasticRadius;
	        }
	        _elasticRadius = elasticRadius;
	        return _chart;
	    };

	    /**
	     * Turn on or off the bubble sorting feature, or return the value of the flag. If enabled,
	     * bubbles will be sorted by their radius, with smaller bubbles in front.
	     * @method sortBubbleSize
	     * @memberof dc.bubbleChart
	     * @instance
	     * @param {Boolean} [sortBubbleSize=false]
	     * @return {Boolean}
	     * @return {dc.bubbleChart}
	     */
	    _chart.sortBubbleSize = function (sortBubbleSize) {
	        if (!arguments.length) {
	            return _sortBubbleSize;
	        }
	        _sortBubbleSize = sortBubbleSize;
	        return _chart;
	    };

	    _chart.plotData = function () {
	        if (_elasticRadius) {
	            _chart.r().domain([_chart.rMin(), _chart.rMax()]);
	        }

	        _chart.r().range([_chart.MIN_RADIUS, _chart.xAxisLength() * _chart.maxBubbleRelativeSize()]);

	        var data = _chart.data();
	        if (_sortBubbleSize) {
	            // sort descending so smaller bubbles are on top
	            var radiusAccessor = _chart.radiusValueAccessor();
	            data.sort(function (a, b) { return d3.descending(radiusAccessor(a), radiusAccessor(b)); });
	        }
	        var bubbleG = _chart.chartBodyG().selectAll('g.' + _chart.BUBBLE_NODE_CLASS)
	                .data(data, function (d) { return d.key; });
	        if (_sortBubbleSize) {
	            // Call order here to update dom order based on sort
	            bubbleG.order();
	        }

	        renderNodes(bubbleG);

	        updateNodes(bubbleG);

	        removeNodes(bubbleG);

	        _chart.fadeDeselectedArea();
	    };

	    function renderNodes (bubbleG) {
	        var bubbleGEnter = bubbleG.enter().append('g');

	        bubbleGEnter
	            .attr('class', _chart.BUBBLE_NODE_CLASS)
	            .attr('transform', bubbleLocator)
	            .append('circle').attr('class', function (d, i) {
	                return _chart.BUBBLE_CLASS + ' _' + i;
	            })
	            .on('click', _chart.onClick)
	            .attr('fill', _chart.getColor)
	            .attr('r', 0);
	        dc.transition(bubbleG, _chart.transitionDuration())
	            .selectAll('circle.' + _chart.BUBBLE_CLASS)
	            .attr('r', function (d) {
	                return _chart.bubbleR(d);
	            })
	            .attr('opacity', function (d) {
	                return (_chart.bubbleR(d) > 0) ? 1 : 0;
	            });

	        _chart._doRenderLabel(bubbleGEnter);

	        _chart._doRenderTitles(bubbleGEnter);
	    }

	    function updateNodes (bubbleG) {
	        dc.transition(bubbleG, _chart.transitionDuration())
	            .attr('transform', bubbleLocator)
	            .selectAll('circle.' + _chart.BUBBLE_CLASS)
	            .attr('fill', _chart.getColor)
	            .attr('r', function (d) {
	                return _chart.bubbleR(d);
	            })
	            .attr('opacity', function (d) {
	                return (_chart.bubbleR(d) > 0) ? 1 : 0;
	            });

	        _chart.doUpdateLabels(bubbleG);
	        _chart.doUpdateTitles(bubbleG);
	    }

	    function removeNodes (bubbleG) {
	        bubbleG.exit().remove();
	    }

	    function bubbleX (d) {
	        var x = _chart.x()(_chart.keyAccessor()(d));
	        if (isNaN(x)) {
	            x = 0;
	        }
	        return x;
	    }

	    function bubbleY (d) {
	        var y = _chart.y()(_chart.valueAccessor()(d));
	        if (isNaN(y)) {
	            y = 0;
	        }
	        return y;
	    }

	    _chart.renderBrush = function () {
	        // override default x axis brush from parent chart
	    };

	    _chart.redrawBrush = function () {
	        // override default x axis brush from parent chart
	        _chart.fadeDeselectedArea();
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * Composite charts are a special kind of chart that render multiple charts on the same Coordinate
	 * Grid. You can overlay (compose) different bar/line/area charts in a single composite chart to
	 * achieve some quite flexible charting effects.
	 * @class compositeChart
	 * @memberof dc
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a composite chart under #chart-container1 element using the default global chart group
	 * var compositeChart1 = dc.compositeChart('#chart-container1');
	 * // create a composite chart under #chart-container2 element using chart group A
	 * var compositeChart2 = dc.compositeChart('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.compositeChart}
	 */
	dc.compositeChart = function (parent, chartGroup) {

	    var SUB_CHART_CLASS = 'sub';
	    var DEFAULT_RIGHT_Y_AXIS_LABEL_PADDING = 12;

	    var _chart = dc.coordinateGridMixin({});
	    var _children = [];

	    var _childOptions = {};

	    var _shareColors = false,
	        _shareTitle = true,
	        _alignYAxes = false;

	    var _rightYAxis = d3.svg.axis(),
	        _rightYAxisLabel = 0,
	        _rightYAxisLabelPadding = DEFAULT_RIGHT_Y_AXIS_LABEL_PADDING,
	        _rightY,
	        _rightAxisGridLines = false;

	    _chart._mandatoryAttributes([]);
	    _chart.transitionDuration(500);

	    dc.override(_chart, '_generateG', function () {
	        var g = this.__generateG();

	        for (var i = 0; i < _children.length; ++i) {
	            var child = _children[i];

	            generateChildG(child, i);

	            if (!child.dimension()) {
	                child.dimension(_chart.dimension());
	            }
	            if (!child.group()) {
	                child.group(_chart.group());
	            }

	            child.chartGroup(_chart.chartGroup());
	            child.svg(_chart.svg());
	            child.xUnits(_chart.xUnits());
	            child.transitionDuration(_chart.transitionDuration());
	            child.brushOn(_chart.brushOn());
	            child.renderTitle(_chart.renderTitle());
	            child.elasticX(_chart.elasticX());
	        }

	        return g;
	    });

	    _chart._brushing = function () {
	        var extent = _chart.extendBrush();
	        var brushIsEmpty = _chart.brushIsEmpty(extent);

	        for (var i = 0; i < _children.length; ++i) {
	            _children[i].replaceFilter(brushIsEmpty ? null : extent);
	        }
	    };

	    _chart._prepareYAxis = function () {
	        var left = (leftYAxisChildren().length !== 0);
	        var right = (rightYAxisChildren().length !== 0);
	        var ranges = calculateYAxisRanges(left, right);

	        if (left) { prepareLeftYAxis(ranges); }
	        if (right) { prepareRightYAxis(ranges); }

	        if (leftYAxisChildren().length > 0 && !_rightAxisGridLines) {
	            _chart._renderHorizontalGridLinesForAxis(_chart.g(), _chart.y(), _chart.yAxis());
	        } else if (rightYAxisChildren().length > 0) {
	            _chart._renderHorizontalGridLinesForAxis(_chart.g(), _rightY, _rightYAxis);
	        }
	    };

	    _chart.renderYAxis = function () {
	        if (leftYAxisChildren().length !== 0) {
	            _chart.renderYAxisAt('y', _chart.yAxis(), _chart.margins().left);
	            _chart.renderYAxisLabel('y', _chart.yAxisLabel(), -90);
	        }

	        if (rightYAxisChildren().length !== 0) {
	            _chart.renderYAxisAt('yr', _chart.rightYAxis(), _chart.width() - _chart.margins().right);
	            _chart.renderYAxisLabel('yr', _chart.rightYAxisLabel(), 90, _chart.width() - _rightYAxisLabelPadding);
	        }
	    };

	    function calculateYAxisRanges (left, right) {
	        var lyAxisMin, lyAxisMax, ryAxisMin, ryAxisMax;
	        var ranges;

	        if (left) {
	            lyAxisMin = yAxisMin();
	            lyAxisMax = yAxisMax();
	        }

	        if (right) {
	            ryAxisMin = rightYAxisMin();
	            ryAxisMax = rightYAxisMax();
	        }

	        if (_chart.alignYAxes() && left && right) {
	            ranges = alignYAxisRanges(lyAxisMin, lyAxisMax, ryAxisMin, ryAxisMax);
	        }

	        return ranges || {
	            lyAxisMin: lyAxisMin,
	            lyAxisMax: lyAxisMax,
	            ryAxisMin: ryAxisMin,
	            ryAxisMax: ryAxisMax
	        };
	    }

	    function alignYAxisRanges (lyAxisMin, lyAxisMax, ryAxisMin, ryAxisMax) {
	        // since the two series will share a zero, each Y is just a multiple
	        // of the other. and the ratio should be the ratio of the ranges of the
	        // input data, so that they come out the same height. so we just min/max

	        // note: both ranges already include zero due to the stack mixin (#667)
	        // if #667 changes, we can reconsider whether we want data height or
	        // height from zero to be equal. and it will be possible for the axes
	        // to be aligned but not visible.
	        var extentRatio = (ryAxisMax - ryAxisMin) / (lyAxisMax - lyAxisMin);

	        return {
	            lyAxisMin: Math.min(lyAxisMin, ryAxisMin / extentRatio),
	            lyAxisMax: Math.max(lyAxisMax, ryAxisMax / extentRatio),
	            ryAxisMin: Math.min(ryAxisMin, lyAxisMin * extentRatio),
	            ryAxisMax: Math.max(ryAxisMax, lyAxisMax * extentRatio)
	        };
	    }

	    function prepareRightYAxis (ranges) {
	        var needDomain = _chart.rightY() === undefined || _chart.elasticY(),
	            needRange = needDomain || _chart.resizing();
	        if (_chart.rightY() === undefined) {
	            _chart.rightY(d3.scale.linear());
	        }
	        if (needDomain) {
	            _chart.rightY().domain([ranges.ryAxisMin, ranges.ryAxisMax]);
	        }
	        if (needRange) {
	            _chart.rightY().rangeRound([_chart.yAxisHeight(), 0]);
	        }

	        _chart.rightY().range([_chart.yAxisHeight(), 0]);
	        _chart.rightYAxis(_chart.rightYAxis().scale(_chart.rightY()));

	        _chart.rightYAxis().orient('right');
	    }

	    function prepareLeftYAxis (ranges) {
	        var needDomain = _chart.y() === undefined || _chart.elasticY(),
	            needRange = needDomain || _chart.resizing();
	        if (_chart.y() === undefined) {
	            _chart.y(d3.scale.linear());
	        }
	        if (needDomain) {
	            _chart.y().domain([ranges.lyAxisMin, ranges.lyAxisMax]);
	        }
	        if (needRange) {
	            _chart.y().rangeRound([_chart.yAxisHeight(), 0]);
	        }

	        _chart.y().range([_chart.yAxisHeight(), 0]);
	        _chart.yAxis(_chart.yAxis().scale(_chart.y()));

	        _chart.yAxis().orient('left');
	    }

	    function generateChildG (child, i) {
	        child._generateG(_chart.g());
	        child.g().attr('class', SUB_CHART_CLASS + ' _' + i);
	    }

	    _chart.plotData = function () {
	        for (var i = 0; i < _children.length; ++i) {
	            var child = _children[i];

	            if (!child.g()) {
	                generateChildG(child, i);
	            }

	            if (_shareColors) {
	                child.colors(_chart.colors());
	            }

	            child.x(_chart.x());

	            child.xAxis(_chart.xAxis());

	            if (child.useRightYAxis()) {
	                child.y(_chart.rightY());
	                child.yAxis(_chart.rightYAxis());
	            } else {
	                child.y(_chart.y());
	                child.yAxis(_chart.yAxis());
	            }

	            child.plotData();

	            child._activateRenderlets();
	        }
	    };

	    /**
	     * Get or set whether to draw gridlines from the right y axis.  Drawing from the left y axis is the
	     * default behavior. This option is only respected when subcharts with both left and right y-axes
	     * are present.
	     * @method useRightAxisGridLines
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {Boolean} [useRightAxisGridLines=false]
	     * @return {Boolean}
	     * @return {dc.compositeChart}
	     */
	    _chart.useRightAxisGridLines = function (useRightAxisGridLines) {
	        if (!arguments) {
	            return _rightAxisGridLines;
	        }

	        _rightAxisGridLines = useRightAxisGridLines;
	        return _chart;
	    };

	    /**
	     * Get or set chart-specific options for all child charts. This is equivalent to calling
	     * {@link dc.baseMixin#options .options} on each child chart.
	     * @method childOptions
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {Object} [childOptions]
	     * @return {Object}
	     * @return {dc.compositeChart}
	     */
	    _chart.childOptions = function (childOptions) {
	        if (!arguments.length) {
	            return _childOptions;
	        }
	        _childOptions = childOptions;
	        _children.forEach(function (child) {
	            child.options(_childOptions);
	        });
	        return _chart;
	    };

	    _chart.fadeDeselectedArea = function () {
	        for (var i = 0; i < _children.length; ++i) {
	            var child = _children[i];
	            child.brush(_chart.brush());
	            child.fadeDeselectedArea();
	        }
	    };

	    /**
	     * Set or get the right y axis label.
	     * @method rightYAxisLabel
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {String} [rightYAxisLabel]
	     * @param {Number} [padding]
	     * @return {String}
	     * @return {dc.compositeChart}
	     */
	    _chart.rightYAxisLabel = function (rightYAxisLabel, padding) {
	        if (!arguments.length) {
	            return _rightYAxisLabel;
	        }
	        _rightYAxisLabel = rightYAxisLabel;
	        _chart.margins().right -= _rightYAxisLabelPadding;
	        _rightYAxisLabelPadding = (padding === undefined) ? DEFAULT_RIGHT_Y_AXIS_LABEL_PADDING : padding;
	        _chart.margins().right += _rightYAxisLabelPadding;
	        return _chart;
	    };

	    /**
	     * Combine the given charts into one single composite coordinate grid chart.
	     * @method compose
	     * @memberof dc.compositeChart
	     * @instance
	     * @example
	     * moveChart.compose([
	     *     // when creating sub-chart you need to pass in the parent chart
	     *     dc.lineChart(moveChart)
	     *         .group(indexAvgByMonthGroup) // if group is missing then parent's group will be used
	     *         .valueAccessor(function (d){return d.value.avg;})
	     *         // most of the normal functions will continue to work in a composed chart
	     *         .renderArea(true)
	     *         .stack(monthlyMoveGroup, function (d){return d.value;})
	     *         .title(function (d){
	     *             var value = d.value.avg?d.value.avg:d.value;
	     *             if(isNaN(value)) value = 0;
	     *             return dateFormat(d.key) + '\n' + numberFormat(value);
	     *         }),
	     *     dc.barChart(moveChart)
	     *         .group(volumeByMonthGroup)
	     *         .centerBar(true)
	     * ]);
	     * @param {Array<Chart>} [subChartArray]
	     * @return {dc.compositeChart}
	     */
	    _chart.compose = function (subChartArray) {
	        _children = subChartArray;
	        _children.forEach(function (child) {
	            child.height(_chart.height());
	            child.width(_chart.width());
	            child.margins(_chart.margins());

	            if (_shareTitle) {
	                child.title(_chart.title());
	            }

	            child.options(_childOptions);
	        });
	        return _chart;
	    };

	    /**
	     * Returns the child charts which are composed into the composite chart.
	     * @method children
	     * @memberof dc.compositeChart
	     * @instance
	     * @return {Array<dc.baseMixin>}
	     */
	    _chart.children = function () {
	        return _children;
	    };

	    /**
	     * Get or set color sharing for the chart. If set, the {@link dc.colorMixin#colors .colors()} value from this chart
	     * will be shared with composed children. Additionally if the child chart implements
	     * Stackable and has not set a custom .colorAccessor, then it will generate a color
	     * specific to its order in the composition.
	     * @method shareColors
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {Boolean} [shareColors=false]
	     * @return {Boolean}
	     * @return {dc.compositeChart}
	     */
	    _chart.shareColors = function (shareColors) {
	        if (!arguments.length) {
	            return _shareColors;
	        }
	        _shareColors = shareColors;
	        return _chart;
	    };

	    /**
	     * Get or set title sharing for the chart. If set, the {@link dc.baseMixin#title .title()} value from
	     * this chart will be shared with composed children.
	     * @method shareTitle
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {Boolean} [shareTitle=true]
	     * @return {Boolean}
	     * @return {dc.compositeChart}
	     */
	    _chart.shareTitle = function (shareTitle) {
	        if (!arguments.length) {
	            return _shareTitle;
	        }
	        _shareTitle = shareTitle;
	        return _chart;
	    };

	    /**
	     * Get or set the y scale for the right axis. The right y scale is typically automatically
	     * generated by the chart implementation.
	     * @method rightY
	     * @memberof dc.compositeChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Scales d3.scale}
	     * @param {d3.scale} [yScale]
	     * @return {d3.scale}
	     * @return {dc.compositeChart}
	     */
	    _chart.rightY = function (yScale) {
	        if (!arguments.length) {
	            return _rightY;
	        }
	        _rightY = yScale;
	        _chart.rescale();
	        return _chart;
	    };

	    /**
	     * Get or set alignment between left and right y axes. A line connecting '0' on both y axis
	     * will be parallel to x axis. This only has effect when {@link #dc.coordinateGridMixin+elasticY elasticY} is true.
	     * @method alignYAxes
	     * @memberof dc.compositeChart
	     * @instance
	     * @param {Boolean} [alignYAxes=false]
	     * @return {Chart}
	     */
	    _chart.alignYAxes = function (alignYAxes) {
	        if (!arguments.length) {
	            return _alignYAxes;
	        }
	        _alignYAxes = alignYAxes;
	        _chart.rescale();
	        return _chart;
	    };

	    function leftYAxisChildren () {
	        return _children.filter(function (child) {
	            return !child.useRightYAxis();
	        });
	    }

	    function rightYAxisChildren () {
	        return _children.filter(function (child) {
	            return child.useRightYAxis();
	        });
	    }

	    function getYAxisMin (charts) {
	        return charts.map(function (c) {
	            return c.yAxisMin();
	        });
	    }

	    delete _chart.yAxisMin;
	    function yAxisMin () {
	        return d3.min(getYAxisMin(leftYAxisChildren()));
	    }

	    function rightYAxisMin () {
	        return d3.min(getYAxisMin(rightYAxisChildren()));
	    }

	    function getYAxisMax (charts) {
	        return charts.map(function (c) {
	            return c.yAxisMax();
	        });
	    }

	    delete _chart.yAxisMax;
	    function yAxisMax () {
	        return dc.utils.add(d3.max(getYAxisMax(leftYAxisChildren())), _chart.yAxisPadding());
	    }

	    function rightYAxisMax () {
	        return dc.utils.add(d3.max(getYAxisMax(rightYAxisChildren())), _chart.yAxisPadding());
	    }

	    function getAllXAxisMinFromChildCharts () {
	        return _children.map(function (c) {
	            return c.xAxisMin();
	        });
	    }

	    dc.override(_chart, 'xAxisMin', function () {
	        return dc.utils.subtract(d3.min(getAllXAxisMinFromChildCharts()), _chart.xAxisPadding());
	    });

	    function getAllXAxisMaxFromChildCharts () {
	        return _children.map(function (c) {
	            return c.xAxisMax();
	        });
	    }

	    dc.override(_chart, 'xAxisMax', function () {
	        return dc.utils.add(d3.max(getAllXAxisMaxFromChildCharts()), _chart.xAxisPadding());
	    });

	    _chart.legendables = function () {
	        return _children.reduce(function (items, child) {
	            if (_shareColors) {
	                child.colors(_chart.colors());
	            }
	            items.push.apply(items, child.legendables());
	            return items;
	        }, []);
	    };

	    _chart.legendHighlight = function (d) {
	        for (var j = 0; j < _children.length; ++j) {
	            var child = _children[j];
	            child.legendHighlight(d);
	        }
	    };

	    _chart.legendReset = function (d) {
	        for (var j = 0; j < _children.length; ++j) {
	            var child = _children[j];
	            child.legendReset(d);
	        }
	    };

	    _chart.legendToggle = function () {
	        console.log('composite should not be getting legendToggle itself');
	    };

	    /**
	     * Set or get the right y axis used by the composite chart. This function is most useful when y
	     * axis customization is required. The y axis in dc.js is an instance of a [d3 axis
	     * object](https://github.com/mbostock/d3/wiki/SVG-Axes#wiki-_axis) therefore it supports any valid
	     * d3 axis manipulation. **Caution**: The y axis is usually generated internally by dc;
	     * resetting it may cause unexpected results.
	     * @method rightYAxis
	     * @memberof dc.compositeChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Axes d3.svg.axis}
	     * @example
	     * // customize y axis tick format
	     * chart.rightYAxis().tickFormat(function (v) {return v + '%';});
	     * // customize y axis tick values
	     * chart.rightYAxis().tickValues([0, 100, 200, 300]);
	     * @param {d3.svg.axis} [rightYAxis]
	     * @return {d3.svg.axis}
	     * @return {dc.compositeChart}
	     */
	    _chart.rightYAxis = function (rightYAxis) {
	        if (!arguments.length) {
	            return _rightYAxis;
	        }
	        _rightYAxis = rightYAxis;
	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * A series chart is a chart that shows multiple series of data overlaid on one chart, where the
	 * series is specified in the data. It is a specialization of Composite Chart and inherits all
	 * composite features other than recomposing the chart.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.io/dc.js/examples/series.html Series Chart}
	 * @class seriesChart
	 * @memberof dc
	 * @mixes dc.compositeChart
	 * @example
	 * // create a series chart under #chart-container1 element using the default global chart group
	 * var seriesChart1 = dc.seriesChart("#chart-container1");
	 * // create a series chart under #chart-container2 element using chart group A
	 * var seriesChart2 = dc.seriesChart("#chart-container2", "chartGroupA");
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.seriesChart}
	 */
	dc.seriesChart = function (parent, chartGroup) {
	    var _chart = dc.compositeChart(parent, chartGroup);

	    function keySort (a, b) {
	        return d3.ascending(_chart.keyAccessor()(a), _chart.keyAccessor()(b));
	    }

	    var _charts = {};
	    var _chartFunction = dc.lineChart;
	    var _seriesAccessor;
	    var _seriesSort = d3.ascending;
	    var _valueSort = keySort;

	    _chart._mandatoryAttributes().push('seriesAccessor', 'chart');
	    _chart.shareColors(true);

	    _chart._preprocessData = function () {
	        var keep = [];
	        var childrenChanged;
	        var nester = d3.nest().key(_seriesAccessor);
	        if (_seriesSort) {
	            nester.sortKeys(_seriesSort);
	        }
	        if (_valueSort) {
	            nester.sortValues(_valueSort);
	        }
	        var nesting = nester.entries(_chart.data());
	        var children =
	            nesting.map(function (sub, i) {
	                var subChart = _charts[sub.key] || _chartFunction.call(_chart, _chart, chartGroup, sub.key, i);
	                if (!_charts[sub.key]) {
	                    childrenChanged = true;
	                }
	                _charts[sub.key] = subChart;
	                keep.push(sub.key);
	                return subChart
	                    .dimension(_chart.dimension())
	                    .group({all: d3.functor(sub.values)}, sub.key)
	                    .keyAccessor(_chart.keyAccessor())
	                    .valueAccessor(_chart.valueAccessor())
	                    .brushOn(_chart.brushOn());
	            });
	        // this works around the fact compositeChart doesn't really
	        // have a removal interface
	        Object.keys(_charts)
	            .filter(function (c) {return keep.indexOf(c) === -1;})
	            .forEach(function (c) {
	                clearChart(c);
	                childrenChanged = true;
	            });
	        _chart._compose(children);
	        if (childrenChanged && _chart.legend()) {
	            _chart.legend().render();
	        }
	    };

	    function clearChart (c) {
	        if (_charts[c].g()) {
	            _charts[c].g().remove();
	        }
	        delete _charts[c];
	    }

	    function resetChildren () {
	        Object.keys(_charts).map(clearChart);
	        _charts = {};
	    }

	    /**
	     * Get or set the chart function, which generates the child charts.
	     * @method chart
	     * @memberof dc.seriesChart
	     * @instance
	     * @example
	     * // put interpolation on the line charts used for the series
	     * chart.chart(function(c) { return dc.lineChart(c).interpolate('basis'); })
	     * // do a scatter series chart
	     * chart.chart(dc.scatterPlot)
	     * @param {Function} [chartFunction=dc.lineChart]
	     * @return {Function}
	     * @return {dc.seriesChart}
	     */
	    _chart.chart = function (chartFunction) {
	        if (!arguments.length) {
	            return _chartFunction;
	        }
	        _chartFunction = chartFunction;
	        resetChildren();
	        return _chart;
	    };

	    /**
	     * **mandatory**
	     *
	     * Get or set accessor function for the displayed series. Given a datum, this function
	     * should return the series that datum belongs to.
	     * @method seriesAccessor
	     * @memberof dc.seriesChart
	     * @instance
	     * @example
	     * // simple series accessor
	     * chart.seriesAccessor(function(d) { return "Expt: " + d.key[0]; })
	     * @param {Function} [accessor]
	     * @return {Function}
	     * @return {dc.seriesChart}
	     */
	    _chart.seriesAccessor = function (accessor) {
	        if (!arguments.length) {
	            return _seriesAccessor;
	        }
	        _seriesAccessor = accessor;
	        resetChildren();
	        return _chart;
	    };

	    /**
	     * Get or set a function to sort the list of series by, given series values.
	     * @method seriesSort
	     * @memberof dc.seriesChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_ascending d3.ascending}
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_descending d3.descending}
	     * @example
	     * chart.seriesSort(d3.descending);
	     * @param {Function} [sortFunction=d3.ascending]
	     * @return {Function}
	     * @return {dc.seriesChart}
	     */
	    _chart.seriesSort = function (sortFunction) {
	        if (!arguments.length) {
	            return _seriesSort;
	        }
	        _seriesSort = sortFunction;
	        resetChildren();
	        return _chart;
	    };

	    /**
	     * Get or set a function to sort each series values by. By default this is the key accessor which,
	     * for example, will ensure a lineChart series connects its points in increasing key/x order,
	     * rather than haphazardly.
	     * @method valueSort
	     * @memberof dc.seriesChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_ascending d3.ascending}
	     * @see {@link https://github.com/mbostock/d3/wiki/Arrays#d3_descending d3.descending}
	     * @example
	     * // Default value sort
	     * _chart.valueSort(function keySort (a, b) {
	     *     return d3.ascending(_chart.keyAccessor()(a), _chart.keyAccessor()(b));
	     * });
	     * @param {Function} [sortFunction]
	     * @return {Function}
	     * @return {dc.seriesChart}
	     */
	    _chart.valueSort = function (sortFunction) {
	        if (!arguments.length) {
	            return _valueSort;
	        }
	        _valueSort = sortFunction;
	        resetChildren();
	        return _chart;
	    };

	    // make compose private
	    _chart._compose = _chart.compose;
	    delete _chart.compose;

	    return _chart;
	};

	/**
	 * The geo choropleth chart is designed as an easy way to create a crossfilter driven choropleth map
	 * from GeoJson data. This chart implementation was inspired by
	 * {@link http://bl.ocks.org/4060606 the great d3 choropleth example}.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/vc/index.html US Venture Capital Landscape 2011}
	 * @class geoChoroplethChart
	 * @memberof dc
	 * @mixes dc.colorMixin
	 * @mixes dc.baseMixin
	 * @example
	 * // create a choropleth chart under '#us-chart' element using the default global chart group
	 * var chart1 = dc.geoChoroplethChart('#us-chart');
	 * // create a choropleth chart under '#us-chart2' element using chart group A
	 * var chart2 = dc.compositeChart('#us-chart2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.geoChoroplethChart}
	 */
	dc.geoChoroplethChart = function (parent, chartGroup) {
	    var _chart = dc.colorMixin(dc.baseMixin({}));

	    _chart.colorAccessor(function (d) {
	        return d || 0;
	    });

	    var _geoPath = d3.geo.path();
	    var _projectionFlag;

	    var _geoJsons = [];

	    _chart._doRender = function () {
	        _chart.resetSvg();
	        for (var layerIndex = 0; layerIndex < _geoJsons.length; ++layerIndex) {
	            var states = _chart.svg().append('g')
	                .attr('class', 'layer' + layerIndex);

	            var regionG = states.selectAll('g.' + geoJson(layerIndex).name)
	                .data(geoJson(layerIndex).data)
	                .enter()
	                .append('g')
	                .attr('class', geoJson(layerIndex).name);

	            regionG
	                .append('path')
	                .attr('fill', 'white')
	                .attr('d', _geoPath);

	            regionG.append('title');

	            plotData(layerIndex);
	        }
	        _projectionFlag = false;
	    };

	    function plotData (layerIndex) {
	        var data = generateLayeredData();

	        if (isDataLayer(layerIndex)) {
	            var regionG = renderRegionG(layerIndex);

	            renderPaths(regionG, layerIndex, data);

	            renderTitle(regionG, layerIndex, data);
	        }
	    }

	    function generateLayeredData () {
	        var data = {};
	        var groupAll = _chart.data();
	        for (var i = 0; i < groupAll.length; ++i) {
	            data[_chart.keyAccessor()(groupAll[i])] = _chart.valueAccessor()(groupAll[i]);
	        }
	        return data;
	    }

	    function isDataLayer (layerIndex) {
	        return geoJson(layerIndex).keyAccessor;
	    }

	    function renderRegionG (layerIndex) {
	        var regionG = _chart.svg()
	            .selectAll(layerSelector(layerIndex))
	            .classed('selected', function (d) {
	                return isSelected(layerIndex, d);
	            })
	            .classed('deselected', function (d) {
	                return isDeselected(layerIndex, d);
	            })
	            .attr('class', function (d) {
	                var layerNameClass = geoJson(layerIndex).name;
	                var regionClass = dc.utils.nameToId(geoJson(layerIndex).keyAccessor(d));
	                var baseClasses = layerNameClass + ' ' + regionClass;
	                if (isSelected(layerIndex, d)) {
	                    baseClasses += ' selected';
	                }
	                if (isDeselected(layerIndex, d)) {
	                    baseClasses += ' deselected';
	                }
	                return baseClasses;
	            });
	        return regionG;
	    }

	    function layerSelector (layerIndex) {
	        return 'g.layer' + layerIndex + ' g.' + geoJson(layerIndex).name;
	    }

	    function isSelected (layerIndex, d) {
	        return _chart.hasFilter() && _chart.hasFilter(getKey(layerIndex, d));
	    }

	    function isDeselected (layerIndex, d) {
	        return _chart.hasFilter() && !_chart.hasFilter(getKey(layerIndex, d));
	    }

	    function getKey (layerIndex, d) {
	        return geoJson(layerIndex).keyAccessor(d);
	    }

	    function geoJson (index) {
	        return _geoJsons[index];
	    }

	    function renderPaths (regionG, layerIndex, data) {
	        var paths = regionG
	            .select('path')
	            .attr('fill', function () {
	                var currentFill = d3.select(this).attr('fill');
	                if (currentFill) {
	                    return currentFill;
	                }
	                return 'none';
	            })
	            .on('click', function (d) {
	                return _chart.onClick(d, layerIndex);
	            });

	        dc.transition(paths, _chart.transitionDuration()).attr('fill', function (d, i) {
	            return _chart.getColor(data[geoJson(layerIndex).keyAccessor(d)], i);
	        });
	    }

	    _chart.onClick = function (d, layerIndex) {
	        var selectedRegion = geoJson(layerIndex).keyAccessor(d);
	        dc.events.trigger(function () {
	            _chart.filter(selectedRegion);
	            _chart.redrawGroup();
	        });
	    };

	    function renderTitle (regionG, layerIndex, data) {
	        if (_chart.renderTitle()) {
	            regionG.selectAll('title').text(function (d) {
	                var key = getKey(layerIndex, d);
	                var value = data[key];
	                return _chart.title()({key: key, value: value});
	            });
	        }
	    }

	    _chart._doRedraw = function () {
	        for (var layerIndex = 0; layerIndex < _geoJsons.length; ++layerIndex) {
	            plotData(layerIndex);
	            if (_projectionFlag) {
	                _chart.svg().selectAll('g.' + geoJson(layerIndex).name + ' path').attr('d', _geoPath);
	            }
	        }
	        _projectionFlag = false;
	    };

	    /**
	     * **mandatory**
	     *
	     * Use this function to insert a new GeoJson map layer. This function can be invoked multiple times
	     * if you have multiple GeoJson data layers to render on top of each other. If you overlay multiple
	     * layers with the same name the new overlay will override the existing one.
	     * @method overlayGeoJson
	     * @memberof dc.geoChoroplethChart
	     * @instance
	     * @see {@link http://geojson.org/ GeoJSON}
	     * @see {@link https://github.com/mbostock/topojson/wiki TopoJSON}
	     * @see {@link https://github.com/mbostock/topojson/wiki/API-Reference#feature topojson.feature}
	     * @example
	     * // insert a layer for rendering US states
	     * chart.overlayGeoJson(statesJson.features, 'state', function(d) {
	     *      return d.properties.name;
	     * });
	     * @param {geoJson} json - a geojson feed
	     * @param {String} name - name of the layer
	     * @param {Function} keyAccessor - accessor function used to extract 'key' from the GeoJson data. The key extracted by
	     * this function should match the keys returned by the crossfilter groups.
	     * @return {dc.geoChoroplethChart}
	     */
	    _chart.overlayGeoJson = function (json, name, keyAccessor) {
	        for (var i = 0; i < _geoJsons.length; ++i) {
	            if (_geoJsons[i].name === name) {
	                _geoJsons[i].data = json;
	                _geoJsons[i].keyAccessor = keyAccessor;
	                return _chart;
	            }
	        }
	        _geoJsons.push({name: name, data: json, keyAccessor: keyAccessor});
	        return _chart;
	    };

	    /**
	     * Set custom geo projection function. See the available [d3 geo projection
	     * functions](https://github.com/mbostock/d3/wiki/Geo-Projections).
	     * @method projection
	     * @memberof dc.geoChoroplethChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Geo-Projections d3.geo.projection}
	     * @see {@link https://github.com/d3/d3-geo-projection Extended d3.geo.projection}
	     * @param {d3.projection} [projection=d3.geo.albersUsa()]
	     * @return {dc.geoChoroplethChart}
	     */
	    _chart.projection = function (projection) {
	        _geoPath.projection(projection);
	        _projectionFlag = true;
	        return _chart;
	    };

	    /**
	     * Returns all GeoJson layers currently registered with this chart. The returned array is a
	     * reference to this chart's internal data structure, so any modification to this array will also
	     * modify this chart's internal registration.
	     * @method geoJsons
	     * @memberof dc.geoChoroplethChart
	     * @instance
	     * @return {Array<{name:String, data: Object, accessor: Function}>}
	     */
	    _chart.geoJsons = function () {
	        return _geoJsons;
	    };

	    /**
	     * Returns the {@link https://github.com/mbostock/d3/wiki/Geo-Paths#path d3.geo.path} object used to
	     * render the projection and features.  Can be useful for figuring out the bounding box of the
	     * feature set and thus a way to calculate scale and translation for the projection.
	     * @method geoPath
	     * @memberof dc.geoChoroplethChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Geo-Paths#path d3.geo.path}
	     * @return {d3.geo.path}
	     */
	    _chart.geoPath = function () {
	        return _geoPath;
	    };

	    /**
	     * Remove a GeoJson layer from this chart by name
	     * @method removeGeoJson
	     * @memberof dc.geoChoroplethChart
	     * @instance
	     * @param {String} name
	     * @return {dc.geoChoroplethChart}
	     */
	    _chart.removeGeoJson = function (name) {
	        var geoJsons = [];

	        for (var i = 0; i < _geoJsons.length; ++i) {
	            var layer = _geoJsons[i];
	            if (layer.name !== name) {
	                geoJsons.push(layer);
	            }
	        }

	        _geoJsons = geoJsons;

	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * The bubble overlay chart is quite different from the typical bubble chart. With the bubble overlay
	 * chart you can arbitrarily place bubbles on an existing svg or bitmap image, thus changing the
	 * typical x and y positioning while retaining the capability to visualize data using bubble radius
	 * and coloring.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/crime/index.html Canadian City Crime Stats}
	 * @class bubbleOverlay
	 * @memberof dc
	 * @mixes dc.bubbleMixin
	 * @mixes dc.baseMixin
	 * @example
	 * // create a bubble overlay chart on top of the '#chart-container1 svg' element using the default global chart group
	 * var bubbleChart1 = dc.bubbleOverlayChart('#chart-container1').svg(d3.select('#chart-container1 svg'));
	 * // create a bubble overlay chart on top of the '#chart-container2 svg' element using chart group A
	 * var bubbleChart2 = dc.compositeChart('#chart-container2', 'chartGroupA').svg(d3.select('#chart-container2 svg'));
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.bubbleOverlay}
	 */
	dc.bubbleOverlay = function (parent, chartGroup) {
	    var BUBBLE_OVERLAY_CLASS = 'bubble-overlay';
	    var BUBBLE_NODE_CLASS = 'node';
	    var BUBBLE_CLASS = 'bubble';

	    /**
	     * **mandatory**
	     *
	     * Set the underlying svg image element. Unlike other dc charts this chart will not generate a svg
	     * element; therefore the bubble overlay chart will not work if this function is not invoked. If the
	     * underlying image is a bitmap, then an empty svg will need to be created on top of the image.
	     * @method svg
	     * @memberof dc.bubbleOverlay
	     * @instance
	     * @example
	     * // set up underlying svg element
	     * chart.svg(d3.select('#chart svg'));
	     * @param {SVGElement|d3.selection} [imageElement]
	     * @return {dc.bubbleOverlay}
	     */
	    var _chart = dc.bubbleMixin(dc.baseMixin({}));
	    var _g;
	    var _points = [];

	    _chart.transitionDuration(750);

	    _chart.radiusValueAccessor(function (d) {
	        return d.value;
	    });

	    /**
	     * **mandatory**
	     *
	     * Set up a data point on the overlay. The name of a data point should match a specific 'key' among
	     * data groups generated using keyAccessor.  If a match is found (point name <-> data group key)
	     * then a bubble will be generated at the position specified by the function. x and y
	     * value specified here are relative to the underlying svg.
	     * @method point
	     * @memberof dc.bubbleOverlay
	     * @instance
	     * @param {String} name
	     * @param {Number} x
	     * @param {Number} y
	     * @return {dc.bubbleOverlay}
	     */
	    _chart.point = function (name, x, y) {
	        _points.push({name: name, x: x, y: y});
	        return _chart;
	    };

	    _chart._doRender = function () {
	        _g = initOverlayG();

	        _chart.r().range([_chart.MIN_RADIUS, _chart.width() * _chart.maxBubbleRelativeSize()]);

	        initializeBubbles();

	        _chart.fadeDeselectedArea();

	        return _chart;
	    };

	    function initOverlayG () {
	        _g = _chart.select('g.' + BUBBLE_OVERLAY_CLASS);
	        if (_g.empty()) {
	            _g = _chart.svg().append('g').attr('class', BUBBLE_OVERLAY_CLASS);
	        }
	        return _g;
	    }

	    function initializeBubbles () {
	        var data = mapData();

	        _points.forEach(function (point) {
	            var nodeG = getNodeG(point, data);

	            var circle = nodeG.select('circle.' + BUBBLE_CLASS);

	            if (circle.empty()) {
	                circle = nodeG.append('circle')
	                    .attr('class', BUBBLE_CLASS)
	                    .attr('r', 0)
	                    .attr('fill', _chart.getColor)
	                    .on('click', _chart.onClick);
	            }

	            dc.transition(circle, _chart.transitionDuration())
	                .attr('r', function (d) {
	                    return _chart.bubbleR(d);
	                });

	            _chart._doRenderLabel(nodeG);

	            _chart._doRenderTitles(nodeG);
	        });
	    }

	    function mapData () {
	        var data = {};
	        _chart.data().forEach(function (datum) {
	            data[_chart.keyAccessor()(datum)] = datum;
	        });
	        return data;
	    }

	    function getNodeG (point, data) {
	        var bubbleNodeClass = BUBBLE_NODE_CLASS + ' ' + dc.utils.nameToId(point.name);

	        var nodeG = _g.select('g.' + dc.utils.nameToId(point.name));

	        if (nodeG.empty()) {
	            nodeG = _g.append('g')
	                .attr('class', bubbleNodeClass)
	                .attr('transform', 'translate(' + point.x + ',' + point.y + ')');
	        }

	        nodeG.datum(data[point.name]);

	        return nodeG;
	    }

	    _chart._doRedraw = function () {
	        updateBubbles();

	        _chart.fadeDeselectedArea();

	        return _chart;
	    };

	    function updateBubbles () {
	        var data = mapData();

	        _points.forEach(function (point) {
	            var nodeG = getNodeG(point, data);

	            var circle = nodeG.select('circle.' + BUBBLE_CLASS);

	            dc.transition(circle, _chart.transitionDuration())
	                .attr('r', function (d) {
	                    return _chart.bubbleR(d);
	                })
	                .attr('fill', _chart.getColor);

	            _chart.doUpdateLabels(nodeG);

	            _chart.doUpdateTitles(nodeG);
	        });
	    }

	    _chart.debug = function (flag) {
	        if (flag) {
	            var debugG = _chart.select('g.' + dc.constants.DEBUG_GROUP_CLASS);

	            if (debugG.empty()) {
	                debugG = _chart.svg()
	                    .append('g')
	                    .attr('class', dc.constants.DEBUG_GROUP_CLASS);
	            }

	            var debugText = debugG.append('text')
	                .attr('x', 10)
	                .attr('y', 20);

	            debugG
	                .append('rect')
	                .attr('width', _chart.width())
	                .attr('height', _chart.height())
	                .on('mousemove', function () {
	                    var position = d3.mouse(debugG.node());
	                    var msg = position[0] + ', ' + position[1];
	                    debugText.text(msg);
	                });
	        } else {
	            _chart.selectAll('.debug').remove();
	        }

	        return _chart;
	    };

	    _chart.anchor(parent, chartGroup);

	    return _chart;
	};

	/**
	 * Concrete row chart implementation.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * @class rowChart
	 * @memberof dc
	 * @mixes dc.capMixin
	 * @mixes dc.marginMixin
	 * @mixes dc.colorMixin
	 * @mixes dc.baseMixin
	 * @example
	 * // create a row chart under #chart-container1 element using the default global chart group
	 * var chart1 = dc.rowChart('#chart-container1');
	 * // create a row chart under #chart-container2 element using chart group A
	 * var chart2 = dc.rowChart('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.rowChart}
	 */
	dc.rowChart = function (parent, chartGroup) {

	    var _g;

	    var _labelOffsetX = 10;
	    var _labelOffsetY = 15;
	    var _hasLabelOffsetY = false;
	    var _dyOffset = '0.35em';  // this helps center labels https://github.com/mbostock/d3/wiki/SVG-Shapes#svg_text
	    var _titleLabelOffsetX = 2;

	    var _gap = 5;

	    var _fixedBarHeight = false;
	    var _rowCssClass = 'row';
	    var _titleRowCssClass = 'titlerow';
	    var _renderTitleLabel = false;

	    var _chart = dc.capMixin(dc.marginMixin(dc.colorMixin(dc.baseMixin({}))));

	    var _x;

	    var _elasticX;

	    var _xAxis = d3.svg.axis().orient('bottom');

	    var _rowData;

	    _chart.rowsCap = _chart.cap;

	    function calculateAxisScale () {
	        if (!_x || _elasticX) {
	            var extent = d3.extent(_rowData, _chart.cappedValueAccessor);
	            if (extent[0] > 0) {
	                extent[0] = 0;
	            }
	            if (extent[1] < 0) {
	                extent[1] = 0;
	            }
	            _x = d3.scale.linear().domain(extent)
	                .range([0, _chart.effectiveWidth()]);
	        }
	        _xAxis.scale(_x);
	    }

	    function drawAxis () {
	        var axisG = _g.select('g.axis');

	        calculateAxisScale();

	        if (axisG.empty()) {
	            axisG = _g.append('g').attr('class', 'axis');
	        }
	        axisG.attr('transform', 'translate(0, ' + _chart.effectiveHeight() + ')');

	        dc.transition(axisG, _chart.transitionDuration())
	            .call(_xAxis);
	    }

	    _chart._doRender = function () {
	        _chart.resetSvg();

	        _g = _chart.svg()
	            .append('g')
	            .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart.margins().top + ')');

	        drawChart();

	        return _chart;
	    };

	    _chart.title(function (d) {
	        return _chart.cappedKeyAccessor(d) + ': ' + _chart.cappedValueAccessor(d);
	    });

	    _chart.label(_chart.cappedKeyAccessor);

	    /**
	     * Gets or sets the x scale. The x scale can be any d3
	     * {@link https://github.com/mbostock/d3/wiki/Quantitative-Scales quantitive scale}
	     * @method x
	     * @memberof dc.rowChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Quantitative-Scales quantitive scale}
	     * @param {d3.scale} [scale]
	     * @return {d3.scale}
	     * @return {dc.rowChart}
	     */
	    _chart.x = function (scale) {
	        if (!arguments.length) {
	            return _x;
	        }
	        _x = scale;
	        return _chart;
	    };

	    function drawGridLines () {
	        _g.selectAll('g.tick')
	            .select('line.grid-line')
	            .remove();

	        _g.selectAll('g.tick')
	            .append('line')
	            .attr('class', 'grid-line')
	            .attr('x1', 0)
	            .attr('y1', 0)
	            .attr('x2', 0)
	            .attr('y2', function () {
	                return -_chart.effectiveHeight();
	            });
	    }

	    function drawChart () {
	        _rowData = _chart.data();

	        drawAxis();
	        drawGridLines();

	        var rows = _g.selectAll('g.' + _rowCssClass)
	            .data(_rowData);

	        createElements(rows);
	        removeElements(rows);
	        updateElements(rows);
	    }

	    function createElements (rows) {
	        var rowEnter = rows.enter()
	            .append('g')
	            .attr('class', function (d, i) {
	                return _rowCssClass + ' _' + i;
	            });

	        rowEnter.append('rect').attr('width', 0);

	        createLabels(rowEnter);
	    }

	    function removeElements (rows) {
	        rows.exit().remove();
	    }

	    function rootValue () {
	        var root = _x(0);
	        return (root === -Infinity || root !== root) ? _x(1) : root;
	    }

	    function updateElements (rows) {
	        var n = _rowData.length;

	        var height;
	        if (!_fixedBarHeight) {
	            height = (_chart.effectiveHeight() - (n + 1) * _gap) / n;
	        } else {
	            height = _fixedBarHeight;
	        }

	        // vertically align label in center unless they override the value via property setter
	        if (!_hasLabelOffsetY) {
	            _labelOffsetY = height / 2;
	        }

	        var rect = rows.attr('transform', function (d, i) {
	                return 'translate(0,' + ((i + 1) * _gap + i * height) + ')';
	            }).select('rect')
	            .attr('height', height)
	            .attr('fill', _chart.getColor)
	            .on('click', onClick)
	            .classed('deselected', function (d) {
	                return (_chart.hasFilter()) ? !isSelectedRow(d) : false;
	            })
	            .classed('selected', function (d) {
	                return (_chart.hasFilter()) ? isSelectedRow(d) : false;
	            });

	        dc.transition(rect, _chart.transitionDuration())
	            .attr('width', function (d) {
	                return Math.abs(rootValue() - _x(_chart.valueAccessor()(d)));
	            })
	            .attr('transform', translateX);

	        createTitles(rows);
	        updateLabels(rows);
	    }

	    function createTitles (rows) {
	        if (_chart.renderTitle()) {
	            rows.selectAll('title').remove();
	            rows.append('title').text(_chart.title());
	        }
	    }

	    function createLabels (rowEnter) {
	        if (_chart.renderLabel()) {
	            rowEnter.append('text')
	                .on('click', onClick);
	        }
	        if (_chart.renderTitleLabel()) {
	            rowEnter.append('text')
	                .attr('class', _titleRowCssClass)
	                .on('click', onClick);
	        }
	    }

	    function updateLabels (rows) {
	        if (_chart.renderLabel()) {
	            var lab = rows.select('text')
	                .attr('x', _labelOffsetX)
	                .attr('y', _labelOffsetY)
	                .attr('dy', _dyOffset)
	                .on('click', onClick)
	                .attr('class', function (d, i) {
	                    return _rowCssClass + ' _' + i;
	                })
	                .text(function (d) {
	                    return _chart.label()(d);
	                });
	            dc.transition(lab, _chart.transitionDuration())
	                .attr('transform', translateX);
	        }
	        if (_chart.renderTitleLabel()) {
	            var titlelab = rows.select('.' + _titleRowCssClass)
	                    .attr('x', _chart.effectiveWidth() - _titleLabelOffsetX)
	                    .attr('y', _labelOffsetY)
	                    .attr('dy', _dyOffset)
	                    .attr('text-anchor', 'end')
	                    .on('click', onClick)
	                    .attr('class', function (d, i) {
	                        return _titleRowCssClass + ' _' + i ;
	                    })
	                    .text(function (d) {
	                        return _chart.title()(d);
	                    });
	            dc.transition(titlelab, _chart.transitionDuration())
	                .attr('transform', translateX);
	        }
	    }

	    /**
	     * Turn on/off Title label rendering (values) using SVG style of text-anchor 'end'
	     * @method renderTitleLabel
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Boolean} [renderTitleLabel=false]
	     * @return {Boolean}
	     * @return {dc.rowChart}
	     */
	    _chart.renderTitleLabel = function (renderTitleLabel) {
	        if (!arguments.length) {
	            return _renderTitleLabel;
	        }
	        _renderTitleLabel = renderTitleLabel;
	        return _chart;
	    };

	    function onClick (d) {
	        _chart.onClick(d);
	    }

	    function translateX (d) {
	        var x = _x(_chart.cappedValueAccessor(d)),
	            x0 = rootValue(),
	            s = x > x0 ? x0 : x;
	        return 'translate(' + s + ',0)';
	    }

	    _chart._doRedraw = function () {
	        drawChart();
	        return _chart;
	    };

	    /**
	     * Get the x axis for the row chart instance.  Note: not settable for row charts.
	     * See the {@link https://github.com/mbostock/d3/wiki/SVG-Axes#wiki-axis d3 axis object}
	     * documention for more information.
	     * @method xAxis
	     * @memberof dc.rowChart
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Axes#wiki-axis d3.svg.axis}
	     * @example
	     * // customize x axis tick format
	     * chart.xAxis().tickFormat(function (v) {return v + '%';});
	     * // customize x axis tick values
	     * chart.xAxis().tickValues([0, 100, 200, 300]);
	     * @return {d3.svg.axis}
	     */
	    _chart.xAxis = function () {
	        return _xAxis;
	    };

	    /**
	     * Get or set the fixed bar height. Default is [false] which will auto-scale bars.
	     * For example, if you want to fix the height for a specific number of bars (useful in TopN charts)
	     * you could fix height as follows (where count = total number of bars in your TopN and gap is
	     * your vertical gap space).
	     * @method fixedBarHeight
	     * @memberof dc.rowChart
	     * @instance
	     * @example
	     * chart.fixedBarHeight( chartheight - (count + 1) * gap / count);
	     * @param {Boolean|Number} [fixedBarHeight=false]
	     * @return {Boolean|Number}
	     * @return {dc.rowChart}
	     */
	    _chart.fixedBarHeight = function (fixedBarHeight) {
	        if (!arguments.length) {
	            return _fixedBarHeight;
	        }
	        _fixedBarHeight = fixedBarHeight;
	        return _chart;
	    };

	    /**
	     * Get or set the vertical gap space between rows on a particular row chart instance
	     * @method gap
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Number} [gap=5]
	     * @return {Number}
	     * @return {dc.rowChart}
	     */
	    _chart.gap = function (gap) {
	        if (!arguments.length) {
	            return _gap;
	        }
	        _gap = gap;
	        return _chart;
	    };

	    /**
	     * Get or set the elasticity on x axis. If this attribute is set to true, then the x axis will rescle to auto-fit the
	     * data range when filtered.
	     * @method elasticX
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Boolean} [elasticX]
	     * @return {Boolean}
	     * @return {dc.rowChart}
	     */
	    _chart.elasticX = function (elasticX) {
	        if (!arguments.length) {
	            return _elasticX;
	        }
	        _elasticX = elasticX;
	        return _chart;
	    };

	    /**
	     * Get or set the x offset (horizontal space to the top left corner of a row) for labels on a particular row chart.
	     * @method labelOffsetX
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Number} [labelOffsetX=10]
	     * @return {Number}
	     * @return {dc.rowChart}
	     */
	    _chart.labelOffsetX = function (labelOffsetX) {
	        if (!arguments.length) {
	            return _labelOffsetX;
	        }
	        _labelOffsetX = labelOffsetX;
	        return _chart;
	    };

	    /**
	     * Get or set the y offset (vertical space to the top left corner of a row) for labels on a particular row chart.
	     * @method labelOffsetY
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Number} [labelOffsety=15]
	     * @return {Number}
	     * @return {dc.rowChart}
	     */
	    _chart.labelOffsetY = function (labelOffsety) {
	        if (!arguments.length) {
	            return _labelOffsetY;
	        }
	        _labelOffsetY = labelOffsety;
	        _hasLabelOffsetY = true;
	        return _chart;
	    };

	    /**
	     * Get of set the x offset (horizontal space between right edge of row and right edge or text.
	     * @method titleLabelOffsetX
	     * @memberof dc.rowChart
	     * @instance
	     * @param {Number} [titleLabelOffsetX=2]
	     * @return {Number}
	     * @return {dc.rowChart}
	     */
	    _chart.titleLabelOffsetX = function (titleLabelOffsetX) {
	        if (!arguments.length) {
	            return _titleLabelOffsetX;
	        }
	        _titleLabelOffsetX = titleLabelOffsetX;
	        return _chart;
	    };

	    function isSelectedRow (d) {
	        return _chart.hasFilter(_chart.cappedKeyAccessor(d));
	    }

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * Legend is a attachable widget that can be added to other dc charts to render horizontal legend
	 * labels.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.com/dc.js/ Nasdaq 100 Index}
	 * - {@link http://dc-js.github.com/dc.js/crime/index.html Canadian City Crime Stats}
	 * @class legend
	 * @memberof dc
	 * @example
	 * chart.legend(dc.legend().x(400).y(10).itemHeight(13).gap(5))
	 * @return {dc.legend}
	 */
	dc.legend = function () {
	    var LABEL_GAP = 2;

	    var _legend = {},
	        _parent,
	        _x = 0,
	        _y = 0,
	        _itemHeight = 12,
	        _gap = 5,
	        _horizontal = false,
	        _legendWidth = 560,
	        _itemWidth = 70,
	        _autoItemWidth = false,
	        _legendText = dc.pluck('name');

	    var _g;

	    _legend.parent = function (p) {
	        if (!arguments.length) {
	            return _parent;
	        }
	        _parent = p;
	        return _legend;
	    };

	    _legend.render = function () {
	        _parent.svg().select('g.dc-legend').remove();
	        _g = _parent.svg().append('g')
	            .attr('class', 'dc-legend')
	            .attr('transform', 'translate(' + _x + ',' + _y + ')');
	        var legendables = _parent.legendables();

	        var itemEnter = _g.selectAll('g.dc-legend-item')
	            .data(legendables)
	            .enter()
	            .append('g')
	            .attr('class', 'dc-legend-item')
	            .on('mouseover', function (d) {
	                _parent.legendHighlight(d);
	            })
	            .on('mouseout', function (d) {
	                _parent.legendReset(d);
	            })
	            .on('click', function (d) {
	                d.chart.legendToggle(d);
	            });

	        _g.selectAll('g.dc-legend-item')
	            .classed('fadeout', function (d) {
	                return d.chart.isLegendableHidden(d);
	            });

	        if (legendables.some(dc.pluck('dashstyle'))) {
	            itemEnter
	                .append('line')
	                .attr('x1', 0)
	                .attr('y1', _itemHeight / 2)
	                .attr('x2', _itemHeight)
	                .attr('y2', _itemHeight / 2)
	                .attr('stroke-width', 2)
	                .attr('stroke-dasharray', dc.pluck('dashstyle'))
	                .attr('stroke', dc.pluck('color'));
	        } else {
	            itemEnter
	                .append('rect')
	                .attr('width', _itemHeight)
	                .attr('height', _itemHeight)
	                .attr('fill', function (d) {return d ? d.color : 'blue';});
	        }

	        itemEnter.append('text')
	                .text(_legendText)
	                .attr('x', _itemHeight + LABEL_GAP)
	                .attr('y', function () {
	                    return _itemHeight / 2 + (this.clientHeight ? this.clientHeight : 13) / 2 - 2;
	                });

	        var _cumulativeLegendTextWidth = 0;
	        var row = 0;
	        itemEnter.attr('transform', function (d, i) {
	            if (_horizontal) {
	                var translateBy = 'translate(' + _cumulativeLegendTextWidth + ',' + row * legendItemHeight() + ')';
	                var itemWidth   = _autoItemWidth === true ? this.getBBox().width + _gap : _itemWidth;

	                if ((_cumulativeLegendTextWidth + itemWidth) >= _legendWidth) {
	                    ++row ;
	                    _cumulativeLegendTextWidth = 0 ;
	                } else {
	                    _cumulativeLegendTextWidth += itemWidth;
	                }
	                return translateBy;
	            } else {
	                return 'translate(0,' + i * legendItemHeight() + ')';
	            }
	        });
	    };

	    function legendItemHeight () {
	        return _gap + _itemHeight;
	    }

	    /**
	     * Set or get x coordinate for legend widget.
	     * @method x
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [x=0]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.x = function (x) {
	        if (!arguments.length) {
	            return _x;
	        }
	        _x = x;
	        return _legend;
	    };

	    /**
	     * Set or get y coordinate for legend widget.
	     * @method y
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [y=0]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.y = function (y) {
	        if (!arguments.length) {
	            return _y;
	        }
	        _y = y;
	        return _legend;
	    };

	    /**
	     * Set or get gap between legend items.
	     * @method gap
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [gap=5]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.gap = function (gap) {
	        if (!arguments.length) {
	            return _gap;
	        }
	        _gap = gap;
	        return _legend;
	    };

	    /**
	     * Set or get legend item height.
	     * @method itemHeight
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [itemHeight=12]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.itemHeight = function (itemHeight) {
	        if (!arguments.length) {
	            return _itemHeight;
	        }
	        _itemHeight = itemHeight;
	        return _legend;
	    };

	    /**
	     * Position legend horizontally instead of vertically.
	     * @method horizontal
	     * @memberof dc.legend
	     * @instance
	     * @param  {Boolean} [horizontal=false]
	     * @return {Boolean}
	     * @return {dc.legend}
	     */
	    _legend.horizontal = function (horizontal) {
	        if (!arguments.length) {
	            return _horizontal;
	        }
	        _horizontal = horizontal;
	        return _legend;
	    };

	    /**
	     * Maximum width for horizontal legend.
	     * @method legendWidth
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [legendWidth=500]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.legendWidth = function (legendWidth) {
	        if (!arguments.length) {
	            return _legendWidth;
	        }
	        _legendWidth = legendWidth;
	        return _legend;
	    };

	    /**
	     * legendItem width for horizontal legend.
	     * @method itemWidth
	     * @memberof dc.legend
	     * @instance
	     * @param  {Number} [itemWidth=70]
	     * @return {Number}
	     * @return {dc.legend}
	     */
	    _legend.itemWidth = function (itemWidth) {
	        if (!arguments.length) {
	            return _itemWidth;
	        }
	        _itemWidth = itemWidth;
	        return _legend;
	    };

	    /**
	     * Turn automatic width for legend items on or off. If true, {@link dc.legend#itemWidth itemWidth} is ignored.
	     * This setting takes into account {@link dc.legend#gap gap}.
	     * @method autoItemWidth
	     * @memberof dc.legend
	     * @instance
	     * @param  {Boolean} [autoItemWidth=false]
	     * @return {Boolean}
	     * @return {dc.legend}
	     */
	    _legend.autoItemWidth = function (autoItemWidth) {
	        if (!arguments.length) {
	            return _autoItemWidth;
	        }
	        _autoItemWidth = autoItemWidth;
	        return _legend;
	    };

	    /**
	     * Set or get the legend text function. The legend widget uses this function to render the legend
	     * text for each item. If no function is specified the legend widget will display the names
	     * associated with each group.
	     * @method legendText
	     * @memberof dc.legend
	     * @instance
	     * @param  {Function} [legendText]
	     * @return {Function}
	     * @return {dc.legend}
	     * @example
	     * // default legendText
	     * legend.legendText(dc.pluck('name'))
	     *
	     * // create numbered legend items
	     * chart.legend(dc.legend().legendText(function(d, i) { return i + '. ' + d.name; }))
	     *
	     * // create legend displaying group counts
	     * chart.legend(dc.legend().legendText(function(d) { return d.name + ': ' d.data; }))
	     **/
	    _legend.legendText = function (legendText) {
	        if (!arguments.length) {
	            return _legendText;
	        }
	        _legendText = legendText;
	        return _legend;
	    };

	    return _legend;
	};

	/**
	 * A scatter plot chart
	 *
	 * Examples:
	 * - {@link http://dc-js.github.io/dc.js/examples/scatter.html Scatter Chart}
	 * - {@link http://dc-js.github.io/dc.js/examples/multi-scatter.html Multi-Scatter Chart}
	 * @class scatterPlot
	 * @memberof dc
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a scatter plot under #chart-container1 element using the default global chart group
	 * var chart1 = dc.scatterPlot('#chart-container1');
	 * // create a scatter plot under #chart-container2 element using chart group A
	 * var chart2 = dc.scatterPlot('#chart-container2', 'chartGroupA');
	 * // create a sub-chart under a composite parent chart
	 * var chart3 = dc.scatterPlot(compositeChart);
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.scatterPlot}
	 */
	dc.scatterPlot = function (parent, chartGroup) {
	    var _chart = dc.coordinateGridMixin({});
	    var _symbol = d3.svg.symbol();

	    var _existenceAccessor = function (d) { return d.value; };

	    var originalKeyAccessor = _chart.keyAccessor();
	    _chart.keyAccessor(function (d) { return originalKeyAccessor(d)[0]; });
	    _chart.valueAccessor(function (d) { return originalKeyAccessor(d)[1]; });
	    _chart.colorAccessor(function () { return _chart._groupName; });

	    var _locator = function (d) {
	        return 'translate(' + _chart.x()(_chart.keyAccessor()(d)) + ',' +
	            _chart.y()(_chart.valueAccessor()(d)) + ')';
	    };

	    var _highlightedSize = 7;
	    var _symbolSize = 5;
	    var _excludedSize = 3;
	    var _excludedColor = null;
	    var _excludedOpacity = 1.0;
	    var _emptySize = 0;
	    var _filtered = [];

	    _symbol.size(function (d, i) {
	        if (!_existenceAccessor(d)) {
	            return _emptySize;
	        } else if (_filtered[i]) {
	            return Math.pow(_symbolSize, 2);
	        } else {
	            return Math.pow(_excludedSize, 2);
	        }
	    });

	    dc.override(_chart, '_filter', function (filter) {
	        if (!arguments.length) {
	            return _chart.__filter();
	        }

	        return _chart.__filter(dc.filters.RangedTwoDimensionalFilter(filter));
	    });

	    _chart.plotData = function () {
	        var symbols = _chart.chartBodyG().selectAll('path.symbol')
	                .data(_chart.data());

	        symbols
	            .enter()
	            .append('path')
	            .attr('class', 'symbol')
	            .attr('opacity', 0)
	            .attr('fill', _chart.getColor)
	            .attr('transform', _locator);

	        symbols.each(function (d, i) {
	            _filtered[i] = !_chart.filter() || _chart.filter().isFiltered([d.key[0], d.key[1]]);
	        });

	        dc.transition(symbols, _chart.transitionDuration())
	            .attr('opacity', function (d, i) {
	                return !_existenceAccessor(d) ? 0 :
	                    _filtered[i] ? 1 : _chart.excludedOpacity();
	            })
	            .attr('fill', function (d, i) {
	                return _chart.excludedColor() && !_filtered[i] ?
	                    _chart.excludedColor() :
	                    _chart.getColor(d);
	            })
	            .attr('transform', _locator)
	            .attr('d', _symbol);

	        dc.transition(symbols.exit(), _chart.transitionDuration())
	            .attr('opacity', 0).remove();
	    };

	    /**
	     * Get or set the existence accessor.  If a point exists, it is drawn with
	     * {@link dc.scatterPlot#symbolSize symbolSize} radius and
	     * opacity 1; if it does not exist, it is drawn with
	     * {@link dc.scatterPlot#emptySize emptySize} radius and opacity 0. By default,
	     * the existence accessor checks if the reduced value is truthy.
	     * @method existenceAccessor
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link dc.scatterPlot#symbolSize symbolSize}
	     * @see {@link dc.scatterPlot#emptySize emptySize}
	     * @example
	     * // default accessor
	     * chart.existenceAccessor(function (d) { return d.value; });
	     * @param {Function} [accessor]
	     * @return {Function}
	     * @return {dc.scatterPlot}
	     */
	    _chart.existenceAccessor = function (accessor) {
	        if (!arguments.length) {
	            return _existenceAccessor;
	        }
	        _existenceAccessor = accessor;
	        return this;
	    };

	    /**
	     * Get or set the symbol type used for each point. By default the symbol is a circle.
	     * Type can be a constant or an accessor.
	     * @method symbol
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_type d3.svg.symbol().type()}
	     * @example
	     * // Circle type
	     * chart.symbol('circle');
	     * // Square type
	     * chart.symbol('square');
	     * @param {String|Function} [type='circle']
	     * @return {String|Function}
	     * @return {dc.scatterPlot}
	     */
	    _chart.symbol = function (type) {
	        if (!arguments.length) {
	            return _symbol.type();
	        }
	        _symbol.type(type);
	        return _chart;
	    };

	    /**
	     * Set or get radius for symbols.
	     * @method symbolSize
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [symbolSize=3]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.symbolSize = function (symbolSize) {
	        if (!arguments.length) {
	            return _symbolSize;
	        }
	        _symbolSize = symbolSize;
	        return _chart;
	    };

	    /**
	     * Set or get radius for highlighted symbols.
	     * @method highlightedSize
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [highlightedSize=5]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.highlightedSize = function (highlightedSize) {
	        if (!arguments.length) {
	            return _highlightedSize;
	        }
	        _highlightedSize = highlightedSize;
	        return _chart;
	    };

	    /**
	     * Set or get size for symbols excluded from this chart's filter. If null, no
	     * special size is applied for symbols based on their filter status
	     * @method excludedSize
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [excludedSize=null]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.excludedSize = function (excludedSize) {
	        if (!arguments.length) {
	            return _excludedSize;
	        }
	        _excludedSize = excludedSize;
	        return _chart;
	    };

	    /**
	     * Set or get color for symbols excluded from this chart's filter. If null, no
	     * special color is applied for symbols based on their filter status
	     * @method excludedColor
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [excludedColor=null]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.excludedColor = function (excludedColor) {
	        if (!arguments.length) {
	            return _excludedColor;
	        }
	        _excludedColor = excludedColor;
	        return _chart;
	    };

	    /**
	     * Set or get opacity for symbols excluded from this chart's filter.
	     * @method excludedOpacity
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [excludedOpacity=1.0]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.excludedOpacity = function (excludedOpacity) {
	        if (!arguments.length) {
	            return _excludedOpacity;
	        }
	        _excludedOpacity = excludedOpacity;
	        return _chart;
	    };

	    /**
	     * Set or get radius for symbols when the group is empty.
	     * @method emptySize
	     * @memberof dc.scatterPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/SVG-Shapes#symbol_size d3.svg.symbol().size()}
	     * @param {Number} [emptySize=0]
	     * @return {Number}
	     * @return {dc.scatterPlot}
	     */
	    _chart.hiddenSize = _chart.emptySize = function (emptySize) {
	        if (!arguments.length) {
	            return _emptySize;
	        }
	        _emptySize = emptySize;
	        return _chart;
	    };

	    _chart.legendables = function () {
	        return [{chart: _chart, name: _chart._groupName, color: _chart.getColor()}];
	    };

	    _chart.legendHighlight = function (d) {
	        resizeSymbolsWhere(function (symbol) {
	            return symbol.attr('fill') === d.color;
	        }, _highlightedSize);
	        _chart.selectAll('.chart-body path.symbol').filter(function () {
	            return d3.select(this).attr('fill') !== d.color;
	        }).classed('fadeout', true);
	    };

	    _chart.legendReset = function (d) {
	        resizeSymbolsWhere(function (symbol) {
	            return symbol.attr('fill') === d.color;
	        }, _symbolSize);
	        _chart.selectAll('.chart-body path.symbol').filter(function () {
	            return d3.select(this).attr('fill') !== d.color;
	        }).classed('fadeout', false);
	    };

	    function resizeSymbolsWhere (condition, size) {
	        var symbols = _chart.selectAll('.chart-body path.symbol').filter(function () {
	            return condition(d3.select(this));
	        });
	        var oldSize = _symbol.size();
	        _symbol.size(Math.pow(size, 2));
	        dc.transition(symbols, _chart.transitionDuration()).attr('d', _symbol);
	        _symbol.size(oldSize);
	    }

	    _chart.setHandlePaths = function () {
	        // no handle paths for poly-brushes
	    };

	    _chart.extendBrush = function () {
	        var extent = _chart.brush().extent();
	        if (_chart.round()) {
	            extent[0] = extent[0].map(_chart.round());
	            extent[1] = extent[1].map(_chart.round());

	            _chart.g().select('.brush')
	                .call(_chart.brush().extent(extent));
	        }
	        return extent;
	    };

	    _chart.brushIsEmpty = function (extent) {
	        return _chart.brush().empty() || !extent || extent[0][0] >= extent[1][0] || extent[0][1] >= extent[1][1];
	    };

	    _chart._brushing = function () {
	        var extent = _chart.extendBrush();

	        _chart.redrawBrush(_chart.g());

	        if (_chart.brushIsEmpty(extent)) {
	            dc.events.trigger(function () {
	                _chart.filter(null);
	                _chart.redrawGroup();
	            });

	        } else {
	            var ranged2DFilter = dc.filters.RangedTwoDimensionalFilter(extent);
	            dc.events.trigger(function () {
	                _chart.filter(null);
	                _chart.filter(ranged2DFilter);
	                _chart.redrawGroup();
	            }, dc.constants.EVENT_DELAY);

	        }
	    };

	    _chart.setBrushY = function (gBrush) {
	        gBrush.call(_chart.brush().y(_chart.y()));
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * A display of a single numeric value.
	 * Unlike other charts, you do not need to set a dimension. Instead a group object must be provided and
	 * a valueAccessor that returns a single value.
	 * @class numberDisplay
	 * @memberof dc
	 * @mixes dc.baseMixin
	 * @example
	 * // create a number display under #chart-container1 element using the default global chart group
	 * var display1 = dc.numberDisplay('#chart-container1');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.numberDisplay}
	 */
	dc.numberDisplay = function (parent, chartGroup) {
	    var SPAN_CLASS = 'number-display';
	    var _formatNumber = d3.format('.2s');
	    var _chart = dc.baseMixin({});
	    var _html = {one: '', some: '', none: ''};
	    var _lastValue;

	    // dimension not required
	    _chart._mandatoryAttributes(['group']);

	    /**
	     * Gets or sets an optional object specifying HTML templates to use depending on the number
	     * displayed.  The text `%number` will be replaced with the current value.
	     * - one: HTML template to use if the number is 1
	     * - zero: HTML template to use if the number is 0
	     * - some: HTML template to use otherwise
	     * @method html
	     * @memberof dc.numberDisplay
	     * @instance
	     * @example
	     * numberWidget.html({
	     *      one:'%number record',
	     *      some:'%number records',
	     *      none:'no records'})
	     * @param {{one:String, some:String, none:String}} [html={one: '', some: '', none: ''}]
	     * @return {{one:String, some:String, none:String}}
	     * @return {dc.numberDisplay}
	     */
	    _chart.html = function (html) {
	        if (!arguments.length) {
	            return _html;
	        }
	        if (html.none) {
	            _html.none = html.none;//if none available
	        } else if (html.one) {
	            _html.none = html.one;//if none not available use one
	        } else if (html.some) {
	            _html.none = html.some;//if none and one not available use some
	        }
	        if (html.one) {
	            _html.one = html.one;//if one available
	        } else if (html.some) {
	            _html.one = html.some;//if one not available use some
	        }
	        if (html.some) {
	            _html.some = html.some;//if some available
	        } else if (html.one) {
	            _html.some = html.one;//if some not available use one
	        }
	        return _chart;
	    };

	    /**
	     * Calculate and return the underlying value of the display
	     * @method value
	     * @memberof dc.numberDisplay
	     * @instance
	     * @return {Number}
	     */
	    _chart.value = function () {
	        return _chart.data();
	    };

	    _chart.data(function (group) {
	        var valObj = group.value ? group.value() : group.top(1)[0];
	        return _chart.valueAccessor()(valObj);
	    });

	    _chart.transitionDuration(250); // good default

	    _chart._doRender = function () {
	        var newValue = _chart.value(),
	            span = _chart.selectAll('.' + SPAN_CLASS);

	        if (span.empty()) {
	            span = span.data([0])
	                .enter()
	                .append('span')
	                .attr('class', SPAN_CLASS);
	        }

	        span.transition()
	            .duration(_chart.transitionDuration())
	            .ease('quad-out-in')
	            .tween('text', function () {
	                // [XA] don't try and interpolate from Infinity, else this breaks.
	                var interpStart = isFinite(_lastValue) ? _lastValue : 0;
	                var interp = d3.interpolateNumber(interpStart || 0, newValue);
	                _lastValue = newValue;
	                return function (t) {
	                    var html = null, num = _chart.formatNumber()(interp(t));
	                    if (newValue === 0 && (_html.none !== '')) {
	                        html = _html.none;
	                    } else if (newValue === 1 && (_html.one !== '')) {
	                        html = _html.one;
	                    } else if (_html.some !== '') {
	                        html = _html.some;
	                    }
	                    this.innerHTML = html ? html.replace('%number', num) : num;
	                };
	            });
	    };

	    _chart._doRedraw = function () {
	        return _chart._doRender();
	    };

	    /**
	     * Get or set a function to format the value for the display.
	     * @method formatNumber
	     * @memberof dc.numberDisplay
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Formatting d3.format}
	     * @param {Function} [formatter=d3.format('.2s')]
	     * @return {Function}
	     * @return {dc.numberDisplay}
	     */
	    _chart.formatNumber = function (formatter) {
	        if (!arguments.length) {
	            return _formatNumber;
	        }
	        _formatNumber = formatter;
	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	/**
	 * A heat map is matrix that represents the values of two dimensions of data using colors.
	 * @class heatMap
	 * @memberof dc
	 * @mixes dc.colorMixin
	 * @mixes dc.marginMixin
	 * @mixes dc.baseMixin
	 * @example
	 * // create a heat map under #chart-container1 element using the default global chart group
	 * var heatMap1 = dc.heatMap('#chart-container1');
	 * // create a heat map under #chart-container2 element using chart group A
	 * var heatMap2 = dc.heatMap('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.heatMap}
	 */
	dc.heatMap = function (parent, chartGroup) {

	    var DEFAULT_BORDER_RADIUS = 6.75;

	    var _chartBody;

	    var _cols;
	    var _rows;
	    var _xBorderRadius = DEFAULT_BORDER_RADIUS;
	    var _yBorderRadius = DEFAULT_BORDER_RADIUS;

	    var _chart = dc.colorMixin(dc.marginMixin(dc.baseMixin({})));
	    _chart._mandatoryAttributes(['group']);
	    _chart.title(_chart.colorAccessor());

	    var _colsLabel = function (d) {
	        return d;
	    };
	    var _rowsLabel = function (d) {
	        return d;
	    };

	    /**
	     * Set or get the column label function. The chart class uses this function to render
	     * column labels on the X axis. It is passed the column name.
	     * @method colsLabel
	     * @memberof dc.heatMap
	     * @instance
	     * @example
	     * // the default label function just returns the name
	     * chart.colsLabel(function(d) { return d; });
	     * @param  {Function} [labelFunction=function(d) { return d; }]
	     * @return {Function}
	     * @return {dc.heatMap}
	     */
	    _chart.colsLabel = function (labelFunction) {
	        if (!arguments.length) {
	            return _colsLabel;
	        }
	        _colsLabel = labelFunction;
	        return _chart;
	    };

	    /**
	     * Set or get the row label function. The chart class uses this function to render
	     * row labels on the Y axis. It is passed the row name.
	     * @method rowsLabel
	     * @memberof dc.heatMap
	     * @instance
	     * @example
	     * // the default label function just returns the name
	     * chart.rowsLabel(function(d) { return d; });
	     * @param  {Function} [labelFunction=function(d) { return d; }]
	     * @return {Function}
	     * @return {dc.heatMap}
	     */
	    _chart.rowsLabel = function (labelFunction) {
	        if (!arguments.length) {
	            return _rowsLabel;
	        }
	        _rowsLabel = labelFunction;
	        return _chart;
	    };

	    var _xAxisOnClick = function (d) { filterAxis(0, d); };
	    var _yAxisOnClick = function (d) { filterAxis(1, d); };
	    var _boxOnClick = function (d) {
	        var filter = d.key;
	        dc.events.trigger(function () {
	            _chart.filter(filter);
	            _chart.redrawGroup();
	        });
	    };

	    function filterAxis (axis, value) {
	        var cellsOnAxis = _chart.selectAll('.box-group').filter(function (d) {
	            return d.key[axis] === value;
	        });
	        var unfilteredCellsOnAxis = cellsOnAxis.filter(function (d) {
	            return !_chart.hasFilter(d.key);
	        });
	        dc.events.trigger(function () {
	            if (unfilteredCellsOnAxis.empty()) {
	                cellsOnAxis.each(function (d) {
	                    _chart.filter(d.key);
	                });
	            } else {
	                unfilteredCellsOnAxis.each(function (d) {
	                    _chart.filter(d.key);
	                });
	            }
	            _chart.redrawGroup();
	        });
	    }

	    dc.override(_chart, 'filter', function (filter) {
	        if (!arguments.length) {
	            return _chart._filter();
	        }

	        return _chart._filter(dc.filters.TwoDimensionalFilter(filter));
	    });

	    function uniq (d, i, a) {
	        return !i || a[i - 1] !== d;
	    }

	    /**
	     * Gets or sets the values used to create the rows of the heatmap, as an array. By default, all
	     * the values will be fetched from the data using the value accessor, and they will be sorted in
	     * ascending order.
	     * @method rows
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Array<String|Number>} [rows]
	     * @return {Array<String|Number>}
	     * @return {dc.heatMap}
	     */
	    _chart.rows = function (rows) {
	        if (arguments.length) {
	            _rows = rows;
	            return _chart;
	        }
	        if (_rows) {
	            return _rows;
	        }
	        var rowValues = _chart.data().map(_chart.valueAccessor());
	        rowValues.sort(d3.ascending);
	        return d3.scale.ordinal().domain(rowValues.filter(uniq));
	    };

	    /**
	     * Gets or sets the keys used to create the columns of the heatmap, as an array. By default, all
	     * the values will be fetched from the data using the key accessor, and they will be sorted in
	     * ascending order.
	     * @method cols
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Array<String|Number>} [cols]
	     * @return {Array<String|Number>}
	     * @return {dc.heatMap}
	     */
	    _chart.cols = function (cols) {
	        if (arguments.length) {
	            _cols = cols;
	            return _chart;
	        }
	        if (_cols) {
	            return _cols;
	        }
	        var colValues = _chart.data().map(_chart.keyAccessor());
	        colValues.sort(d3.ascending);
	        return d3.scale.ordinal().domain(colValues.filter(uniq));
	    };

	    _chart._doRender = function () {
	        _chart.resetSvg();

	        _chartBody = _chart.svg()
	            .append('g')
	            .attr('class', 'heatmap')
	            .attr('transform', 'translate(' + _chart.margins().left + ',' + _chart.margins().top + ')');

	        return _chart._doRedraw();
	    };

	    _chart._doRedraw = function () {
	        var rows = _chart.rows(),
	            cols = _chart.cols(),
	            rowCount = rows.domain().length,
	            colCount = cols.domain().length,
	            boxWidth = Math.floor(_chart.effectiveWidth() / colCount),
	            boxHeight = Math.floor(_chart.effectiveHeight() / rowCount);

	        cols.rangeRoundBands([0, _chart.effectiveWidth()]);
	        rows.rangeRoundBands([_chart.effectiveHeight(), 0]);

	        var boxes = _chartBody.selectAll('g.box-group').data(_chart.data(), function (d, i) {
	            return _chart.keyAccessor()(d, i) + '\0' + _chart.valueAccessor()(d, i);
	        });
	        var gEnter = boxes.enter().append('g')
	            .attr('class', 'box-group');

	        gEnter.append('rect')
	            .attr('class', 'heat-box')
	            .attr('fill', 'white')
	            .on('click', _chart.boxOnClick());

	        if (_chart.renderTitle()) {
	            gEnter.append('title');
	            boxes.selectAll('title').text(_chart.title());
	        }

	        dc.transition(boxes.selectAll('rect'), _chart.transitionDuration())
	            .attr('x', function (d, i) { return cols(_chart.keyAccessor()(d, i)); })
	            .attr('y', function (d, i) { return rows(_chart.valueAccessor()(d, i)); })
	            .attr('rx', _xBorderRadius)
	            .attr('ry', _yBorderRadius)
	            .attr('fill', _chart.getColor)
	            .attr('width', boxWidth)
	            .attr('height', boxHeight);

	        boxes.exit().remove();

	        var gCols = _chartBody.selectAll('g.cols');
	        if (gCols.empty()) {
	            gCols = _chartBody.append('g').attr('class', 'cols axis');
	        }
	        var gColsText = gCols.selectAll('text').data(cols.domain());
	        gColsText.enter().append('text')
	              .attr('x', function (d) { return cols(d) + boxWidth / 2; })
	              .style('text-anchor', 'middle')
	              .attr('y', _chart.effectiveHeight())
	              .attr('dy', 12)
	              .on('click', _chart.xAxisOnClick())
	              .text(_chart.colsLabel());
	        dc.transition(gColsText, _chart.transitionDuration())
	               .text(_chart.colsLabel())
	               .attr('x', function (d) { return cols(d) + boxWidth / 2; })
	               .attr('y', _chart.effectiveHeight());
	        gColsText.exit().remove();
	        var gRows = _chartBody.selectAll('g.rows');
	        if (gRows.empty()) {
	            gRows = _chartBody.append('g').attr('class', 'rows axis');
	        }
	        var gRowsText = gRows.selectAll('text').data(rows.domain());
	        gRowsText.enter().append('text')
	              .attr('dy', 6)
	              .style('text-anchor', 'end')
	              .attr('x', 0)
	              .attr('dx', -2)
	              .on('click', _chart.yAxisOnClick())
	              .text(_chart.rowsLabel());
	        dc.transition(gRowsText, _chart.transitionDuration())
	              .text(_chart.rowsLabel())
	              .attr('y', function (d) { return rows(d) + boxHeight / 2; });
	        gRowsText.exit().remove();

	        if (_chart.hasFilter()) {
	            _chart.selectAll('g.box-group').each(function (d) {
	                if (_chart.isSelectedNode(d)) {
	                    _chart.highlightSelected(this);
	                } else {
	                    _chart.fadeDeselected(this);
	                }
	            });
	        } else {
	            _chart.selectAll('g.box-group').each(function () {
	                _chart.resetHighlight(this);
	            });
	        }
	        return _chart;
	    };

	    /**
	     * Gets or sets the handler that fires when an individual cell is clicked in the heatmap.
	     * By default, filtering of the cell will be toggled.
	     * @method boxOnClick
	     * @memberof dc.heatMap
	     * @instance
	     * @example
	     * // default box on click handler
	     * chart.boxOnClick(function (d) {
	     *     var filter = d.key;
	     *     dc.events.trigger(function () {
	     *         _chart.filter(filter);
	     *         _chart.redrawGroup();
	     *     });
	     * });
	     * @param  {Function} [handler]
	     * @return {Function}
	     * @return {dc.heatMap}
	     */
	    _chart.boxOnClick = function (handler) {
	        if (!arguments.length) {
	            return _boxOnClick;
	        }
	        _boxOnClick = handler;
	        return _chart;
	    };

	    /**
	     * Gets or sets the handler that fires when a column tick is clicked in the x axis.
	     * By default, if any cells in the column are unselected, the whole column will be selected,
	     * otherwise the whole column will be unselected.
	     * @method xAxisOnClick
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Function} [handler]
	     * @return {Function}
	     * @return {dc.heatMap}
	     */
	    _chart.xAxisOnClick = function (handler) {
	        if (!arguments.length) {
	            return _xAxisOnClick;
	        }
	        _xAxisOnClick = handler;
	        return _chart;
	    };

	    /**
	     * Gets or sets the handler that fires when a row tick is clicked in the y axis.
	     * By default, if any cells in the row are unselected, the whole row will be selected,
	     * otherwise the whole row will be unselected.
	     * @method yAxisOnClick
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Function} [handler]
	     * @return {Function}
	     * @return {dc.heatMap}
	     */
	    _chart.yAxisOnClick = function (handler) {
	        if (!arguments.length) {
	            return _yAxisOnClick;
	        }
	        _yAxisOnClick = handler;
	        return _chart;
	    };

	    /**
	     * Gets or sets the X border radius.  Set to 0 to get full rectangles.
	     * @method xBorderRadius
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Number} [xBorderRadius=6.75]
	     * @return {Number}
	     * @return {dc.heatMap}
	     */
	    _chart.xBorderRadius = function (xBorderRadius) {
	        if (!arguments.length) {
	            return _xBorderRadius;
	        }
	        _xBorderRadius = xBorderRadius;
	        return _chart;
	    };

	    /**
	     * Gets or sets the Y border radius.  Set to 0 to get full rectangles.
	     * @method yBorderRadius
	     * @memberof dc.heatMap
	     * @instance
	     * @param  {Number} [yBorderRadius=6.75]
	     * @return {Number}
	     * @return {dc.heatMap}
	     */
	    _chart.yBorderRadius = function (yBorderRadius) {
	        if (!arguments.length) {
	            return _yBorderRadius;
	        }
	        _yBorderRadius = yBorderRadius;
	        return _chart;
	    };

	    _chart.isSelectedNode = function (d) {
	        return _chart.hasFilter(d.key);
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	// https://github.com/d3/d3-plugins/blob/master/box/box.js
	(function () {

	    // Inspired by http://informationandvisualization.de/blog/box-plot
	    d3.box = function () {
	        var width = 1,
	            height = 1,
	            duration = 0,
	            domain = null,
	            value = Number,
	            whiskers = boxWhiskers,
	            quartiles = boxQuartiles,
	            tickFormat = null;

	        // For each small multiple…
	        function box (g) {
	            g.each(function (d, i) {
	                d = d.map(value).sort(d3.ascending);
	                var g = d3.select(this),
	                    n = d.length,
	                    min = d[0],
	                    max = d[n - 1];

	                // Compute quartiles. Must return exactly 3 elements.
	                var quartileData = d.quartiles = quartiles(d);

	                // Compute whiskers. Must return exactly 2 elements, or null.
	                var whiskerIndices = whiskers && whiskers.call(this, d, i),
	                    whiskerData = whiskerIndices && whiskerIndices.map(function (i) { return d[i]; });

	                // Compute outliers. If no whiskers are specified, all data are 'outliers'.
	                // We compute the outliers as indices, so that we can join across transitions!
	                var outlierIndices = whiskerIndices ?
	                    d3.range(0, whiskerIndices[0]).concat(d3.range(whiskerIndices[1] + 1, n)) : d3.range(n);

	                // Compute the new x-scale.
	                var x1 = d3.scale.linear()
	                    .domain(domain && domain.call(this, d, i) || [min, max])
	                    .range([height, 0]);

	                // Retrieve the old x-scale, if this is an update.
	                var x0 = this.__chart__ || d3.scale.linear()
	                    .domain([0, Infinity])
	                    .range(x1.range());

	                // Stash the new scale.
	                this.__chart__ = x1;

	                // Note: the box, median, and box tick elements are fixed in number,
	                // so we only have to handle enter and update. In contrast, the outliers
	                // and other elements are variable, so we need to exit them! Variable
	                // elements also fade in and out.

	                // Update center line: the vertical line spanning the whiskers.
	                var center = g.selectAll('line.center')
	                    .data(whiskerData ? [whiskerData] : []);

	                center.enter().insert('line', 'rect')
	                    .attr('class', 'center')
	                    .attr('x1', width / 2)
	                    .attr('y1', function (d) { return x0(d[0]); })
	                    .attr('x2', width / 2)
	                    .attr('y2', function (d) { return x0(d[1]); })
	                    .style('opacity', 1e-6)
	                  .transition()
	                    .duration(duration)
	                    .style('opacity', 1)
	                    .attr('y1', function (d) { return x1(d[0]); })
	                    .attr('y2', function (d) { return x1(d[1]); });

	                center.transition()
	                    .duration(duration)
	                    .style('opacity', 1)
	                    .attr('y1', function (d) { return x1(d[0]); })
	                    .attr('y2', function (d) { return x1(d[1]); });

	                center.exit().transition()
	                    .duration(duration)
	                    .style('opacity', 1e-6)
	                    .attr('y1', function (d) { return x1(d[0]); })
	                    .attr('y2', function (d) { return x1(d[1]); })
	                    .remove();

	                // Update innerquartile box.
	                var box = g.selectAll('rect.box')
	                    .data([quartileData]);

	                box.enter().append('rect')
	                    .attr('class', 'box')
	                    .attr('x', 0)
	                    .attr('y', function (d) { return x0(d[2]); })
	                    .attr('width', width)
	                    .attr('height', function (d) { return x0(d[0]) - x0(d[2]); })
	                  .transition()
	                    .duration(duration)
	                    .attr('y', function (d) { return x1(d[2]); })
	                    .attr('height', function (d) { return x1(d[0]) - x1(d[2]); });

	                box.transition()
	                    .duration(duration)
	                    .attr('y', function (d) { return x1(d[2]); })
	                    .attr('height', function (d) { return x1(d[0]) - x1(d[2]); });

	                // Update median line.
	                var medianLine = g.selectAll('line.median')
	                    .data([quartileData[1]]);

	                medianLine.enter().append('line')
	                    .attr('class', 'median')
	                    .attr('x1', 0)
	                    .attr('y1', x0)
	                    .attr('x2', width)
	                    .attr('y2', x0)
	                    .transition()
	                    .duration(duration)
	                    .attr('y1', x1)
	                    .attr('y2', x1);

	                medianLine.transition()
	                    .duration(duration)
	                    .attr('y1', x1)
	                    .attr('y2', x1);

	                // Update whiskers.
	                var whisker = g.selectAll('line.whisker')
	                    .data(whiskerData || []);

	                whisker.enter().insert('line', 'circle, text')
	                    .attr('class', 'whisker')
	                    .attr('x1', 0)
	                    .attr('y1', x0)
	                    .attr('x2', width)
	                    .attr('y2', x0)
	                    .style('opacity', 1e-6)
	                  .transition()
	                    .duration(duration)
	                    .attr('y1', x1)
	                    .attr('y2', x1)
	                    .style('opacity', 1);

	                whisker.transition()
	                    .duration(duration)
	                    .attr('y1', x1)
	                    .attr('y2', x1)
	                    .style('opacity', 1);

	                whisker.exit().transition()
	                    .duration(duration)
	                    .attr('y1', x1)
	                    .attr('y2', x1)
	                    .style('opacity', 1e-6)
	                    .remove();

	                // Update outliers.
	                var outlier = g.selectAll('circle.outlier')
	                    .data(outlierIndices, Number);

	                outlier.enter().insert('circle', 'text')
	                    .attr('class', 'outlier')
	                    .attr('r', 5)
	                    .attr('cx', width / 2)
	                    .attr('cy', function (i) { return x0(d[i]); })
	                    .style('opacity', 1e-6)
	                    .transition()
	                    .duration(duration)
	                    .attr('cy', function (i) { return x1(d[i]); })
	                    .style('opacity', 1);

	                outlier.transition()
	                    .duration(duration)
	                    .attr('cy', function (i) { return x1(d[i]); })
	                    .style('opacity', 1);

	                outlier.exit().transition()
	                    .duration(duration)
	                    .attr('cy', function (i) { return x1(d[i]); })
	                    .style('opacity', 1e-6)
	                    .remove();

	                // Compute the tick format.
	                var format = tickFormat || x1.tickFormat(8);

	                // Update box ticks.
	                var boxTick = g.selectAll('text.box')
	                    .data(quartileData);

	                boxTick.enter().append('text')
	                    .attr('class', 'box')
	                    .attr('dy', '.3em')
	                    .attr('dx', function (d, i) { return i & 1 ? 6 : -6; })
	                    .attr('x', function (d, i) { return i & 1 ? width : 0; })
	                    .attr('y', x0)
	                    .attr('text-anchor', function (d, i) { return i & 1 ? 'start' : 'end'; })
	                    .text(format)
	                    .transition()
	                    .duration(duration)
	                    .attr('y', x1);

	                boxTick.transition()
	                    .duration(duration)
	                    .text(format)
	                    .attr('y', x1);

	                // Update whisker ticks. These are handled separately from the box
	                // ticks because they may or may not exist, and we want don't want
	                // to join box ticks pre-transition with whisker ticks post-.
	                var whiskerTick = g.selectAll('text.whisker')
	                    .data(whiskerData || []);

	                whiskerTick.enter().append('text')
	                    .attr('class', 'whisker')
	                    .attr('dy', '.3em')
	                    .attr('dx', 6)
	                    .attr('x', width)
	                    .attr('y', x0)
	                    .text(format)
	                    .style('opacity', 1e-6)
	                    .transition()
	                    .duration(duration)
	                    .attr('y', x1)
	                    .style('opacity', 1);

	                whiskerTick.transition()
	                    .duration(duration)
	                    .text(format)
	                    .attr('y', x1)
	                    .style('opacity', 1);

	                whiskerTick.exit().transition()
	                    .duration(duration)
	                    .attr('y', x1)
	                    .style('opacity', 1e-6)
	                    .remove();
	            });
	            d3.timer.flush();
	        }

	        box.width = function (x) {
	            if (!arguments.length) {
	                return width;
	            }
	            width = x;
	            return box;
	        };

	        box.height = function (x) {
	            if (!arguments.length) {
	                return height;
	            }
	            height = x;
	            return box;
	        };

	        box.tickFormat = function (x) {
	            if (!arguments.length) {
	                return tickFormat;
	            }
	            tickFormat = x;
	            return box;
	        };

	        box.duration = function (x) {
	            if (!arguments.length) {
	                return duration;
	            }
	            duration = x;
	            return box;
	        };

	        box.domain = function (x) {
	            if (!arguments.length) {
	                return domain;
	            }
	            domain = x === null ? x : d3.functor(x);
	            return box;
	        };

	        box.value = function (x) {
	            if (!arguments.length) {
	                return value;
	            }
	            value = x;
	            return box;
	        };

	        box.whiskers = function (x) {
	            if (!arguments.length) {
	                return whiskers;
	            }
	            whiskers = x;
	            return box;
	        };

	        box.quartiles = function (x) {
	            if (!arguments.length) {
	                return quartiles;
	            }
	            quartiles = x;
	            return box;
	        };

	        return box;
	    };

	    function boxWhiskers (d) {
	        return [0, d.length - 1];
	    }

	    function boxQuartiles (d) {
	        return [
	            d3.quantile(d, 0.25),
	            d3.quantile(d, 0.5),
	            d3.quantile(d, 0.75)
	        ];
	    }

	})();

	/**
	 * A box plot is a chart that depicts numerical data via their quartile ranges.
	 *
	 * Examples:
	 * - {@link http://dc-js.github.io/dc.js/examples/box-plot-time.html Box plot time example}
	 * - {@link http://dc-js.github.io/dc.js/examples/box-plot.html Box plot example}
	 * @class boxPlot
	 * @memberof dc
	 * @mixes dc.coordinateGridMixin
	 * @example
	 * // create a box plot under #chart-container1 element using the default global chart group
	 * var boxPlot1 = dc.boxPlot('#chart-container1');
	 * // create a box plot under #chart-container2 element using chart group A
	 * var boxPlot2 = dc.boxPlot('#chart-container2', 'chartGroupA');
	 * @param {String|node|d3.selection} parent - Any valid
	 * {@link https://github.com/mbostock/d3/wiki/Selections#selecting-elements d3 single selector} specifying
	 * a dom block element such as a div; or a dom element or d3 selection.
	 * @param {String} [chartGroup] - The name of the chart group this chart instance should be placed in.
	 * Interaction with a chart will only trigger events and redraws within the chart's group.
	 * @return {dc.boxPlot}
	 */
	dc.boxPlot = function (parent, chartGroup) {
	    var _chart = dc.coordinateGridMixin({});

	    // Returns a function to compute the interquartile range.
	    function DEFAULT_WHISKERS_IQR (k) {
	        return function (d) {
	            var q1 = d.quartiles[0],
	                q3 = d.quartiles[2],
	                iqr = (q3 - q1) * k,
	                i = -1,
	                j = d.length;
	            do { ++i; } while (d[i] < q1 - iqr);
	            do { --j; } while (d[j] > q3 + iqr);
	            return [i, j];
	        };
	    }

	    var _whiskerIqrFactor = 1.5;
	    var _whiskersIqr = DEFAULT_WHISKERS_IQR;
	    var _whiskers = _whiskersIqr(_whiskerIqrFactor);

	    var _box = d3.box();
	    var _tickFormat = null;

	    var _boxWidth = function (innerChartWidth, xUnits) {
	        if (_chart.isOrdinal()) {
	            return _chart.x().rangeBand();
	        } else {
	            return innerChartWidth / (1 + _chart.boxPadding()) / xUnits;
	        }
	    };

	    // default padding to handle min/max whisker text
	    _chart.yAxisPadding(12);

	    // default to ordinal
	    _chart.x(d3.scale.ordinal());
	    _chart.xUnits(dc.units.ordinal);

	    // valueAccessor should return an array of values that can be coerced into numbers
	    // or if data is overloaded for a static array of arrays, it should be `Number`.
	    // Empty arrays are not included.
	    _chart.data(function (group) {
	        return group.all().map(function (d) {
	            d.map = function (accessor) { return accessor.call(d, d); };
	            return d;
	        }).filter(function (d) {
	            var values = _chart.valueAccessor()(d);
	            return values.length !== 0;
	        });
	    });

	    /**
	     * Get or set the spacing between boxes as a fraction of box size. Valid values are within 0-1.
	     * See the {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal_rangeBands d3 docs}
	     * for a visual description of how the padding is applied.
	     * @method boxPadding
	     * @memberof dc.boxPlot
	     * @instance
	     * @see {@link https://github.com/mbostock/d3/wiki/Ordinal-Scales#wiki-ordinal_rangeBands d3.scale.ordinal.rangeBands}
	     * @param {Number} [padding=0.8]
	     * @return {Number}
	     * @return {dc.boxPlot}
	     */
	    _chart.boxPadding = _chart._rangeBandPadding;
	    _chart.boxPadding(0.8);

	    /**
	     * Get or set the outer padding on an ordinal box chart. This setting has no effect on non-ordinal charts
	     * or on charts with a custom {@link dc.boxPlot#boxWidth .boxWidth}. Will pad the width by
	     * `padding * barWidth` on each side of the chart.
	     * @method outerPadding
	     * @memberof dc.boxPlot
	     * @instance
	     * @param {Number} [padding=0.5]
	     * @return {Number}
	     * @return {dc.boxPlot}
	     */
	    _chart.outerPadding = _chart._outerRangeBandPadding;
	    _chart.outerPadding(0.5);

	    /**
	     * Get or set the numerical width of the boxplot box. The width may also be a function taking as
	     * parameters the chart width excluding the right and left margins, as well as the number of x
	     * units.
	     * @example
	     * // Using numerical parameter
	     * chart.boxWidth(10);
	     * // Using function
	     * chart.boxWidth((innerChartWidth, xUnits) { ... });
	     * @method boxWidth
	     * @memberof dc.boxPlot
	     * @instance
	     * @param {Number|Function} [boxWidth=0.5]
	     * @return {Number|Function}
	     * @return {dc.boxPlot}
	     */
	    _chart.boxWidth = function (boxWidth) {
	        if (!arguments.length) {
	            return _boxWidth;
	        }
	        _boxWidth = d3.functor(boxWidth);
	        return _chart;
	    };

	    var boxTransform = function (d, i) {
	        var xOffset = _chart.x()(_chart.keyAccessor()(d, i));
	        return 'translate(' + xOffset + ', 0)';
	    };

	    _chart._preprocessData = function () {
	        if (_chart.elasticX()) {
	            _chart.x().domain([]);
	        }
	    };

	    _chart.plotData = function () {
	        var _calculatedBoxWidth = _boxWidth(_chart.effectiveWidth(), _chart.xUnitCount());

	        _box.whiskers(_whiskers)
	            .width(_calculatedBoxWidth)
	            .height(_chart.effectiveHeight())
	            .value(_chart.valueAccessor())
	            .domain(_chart.y().domain())
	            .duration(_chart.transitionDuration())
	            .tickFormat(_tickFormat);

	        var boxesG = _chart.chartBodyG().selectAll('g.box').data(_chart.data(), function (d) { return d.key; });

	        renderBoxes(boxesG);
	        updateBoxes(boxesG);
	        removeBoxes(boxesG);

	        _chart.fadeDeselectedArea();
	    };

	    function renderBoxes (boxesG) {
	        var boxesGEnter = boxesG.enter().append('g');

	        boxesGEnter
	            .attr('class', 'box')
	            .attr('transform', boxTransform)
	            .call(_box)
	            .on('click', function (d) {
	                _chart.filter(d.key);
	                _chart.redrawGroup();
	            });
	    }

	    function updateBoxes (boxesG) {
	        dc.transition(boxesG, _chart.transitionDuration())
	            .attr('transform', boxTransform)
	            .call(_box)
	            .each(function () {
	                d3.select(this).select('rect.box').attr('fill', _chart.getColor);
	            });
	    }

	    function removeBoxes (boxesG) {
	        boxesG.exit().remove().call(_box);
	    }

	    _chart.fadeDeselectedArea = function () {
	        if (_chart.hasFilter()) {
	            _chart.g().selectAll('g.box').each(function (d) {
	                if (_chart.isSelectedNode(d)) {
	                    _chart.highlightSelected(this);
	                } else {
	                    _chart.fadeDeselected(this);
	                }
	            });
	        } else {
	            _chart.g().selectAll('g.box').each(function () {
	                _chart.resetHighlight(this);
	            });
	        }
	    };

	    _chart.isSelectedNode = function (d) {
	        return _chart.hasFilter(d.key);
	    };

	    _chart.yAxisMin = function () {
	        var min = d3.min(_chart.data(), function (e) {
	            return d3.min(_chart.valueAccessor()(e));
	        });
	        return dc.utils.subtract(min, _chart.yAxisPadding());
	    };

	    _chart.yAxisMax = function () {
	        var max = d3.max(_chart.data(), function (e) {
	            return d3.max(_chart.valueAccessor()(e));
	        });
	        return dc.utils.add(max, _chart.yAxisPadding());
	    };

	    /**
	     * Set the numerical format of the boxplot median, whiskers and quartile labels. Defaults to
	     * integer formatting.
	     * @example
	     * // format ticks to 2 decimal places
	     * chart.tickFormat(d3.format('.2f'));
	     * @method tickFormat
	     * @memberof dc.boxPlot
	     * @instance
	     * @param {Function} [tickFormat]
	     * @return {Number|Function}
	     * @return {dc.boxPlot}
	     */
	    _chart.tickFormat = function (tickFormat) {
	        if (!arguments.length) {
	            return _tickFormat;
	        }
	        _tickFormat = tickFormat;
	        return _chart;
	    };

	    return _chart.anchor(parent, chartGroup);
	};

	// Renamed functions

	dc.abstractBubbleChart = dc.bubbleMixin;
	dc.baseChart = dc.baseMixin;
	dc.capped = dc.capMixin;
	dc.colorChart = dc.colorMixin;
	dc.coordinateGridChart = dc.coordinateGridMixin;
	dc.marginable = dc.marginMixin;
	dc.stackableChart = dc.stackMixin;

	// Expose d3 and crossfilter, so that clients in browserify
	// case can obtain them if they need them.
	dc.d3 = d3;
	dc.crossfilter = crossfilter;

	return dc;}
	    if(true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33), __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (_dc), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if(typeof module === "object" && module.exports) {
	        var _d3 = require('d3');
	        var _crossfilter = require('crossfilter2');
	        // When using npm + browserify, 'crossfilter' is a function,
	        // since package.json specifies index.js as main function, and it
	        // does special handling. When using bower + browserify,
	        // there's no main in bower.json (in fact, there's no bower.json),
	        // so we need to fix it.
	        if (typeof _crossfilter !== "function") {
	            _crossfilter = _crossfilter.crossfilter;
	        }
	        module.exports = _dc(_d3, _crossfilter);
	    } else {
	        this.dc = _dc(d3, crossfilter);
	    }
	}
	)();

	//# sourceMappingURL=dc.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.5.17"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
	      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }

	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;

	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;

	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;

	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();

	       case "c":
	        exponent = false;

	       case "d":
	        integer = true;
	        precision = 0;
	        break;

	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;

	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;

	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;

	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
	      0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
	      0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(35).crossfilter;


/***/ },
/* 35 */
/***/ function(module, exports) {

	(function(exports){
	crossfilter.version = "1.3.14";
	function crossfilter_identity(d) {
	  return d;
	}
	crossfilter.permute = permute;

	function permute(array, index) {
	  for (var i = 0, n = index.length, copy = new Array(n); i < n; ++i) {
	    copy[i] = array[index[i]];
	  }
	  return copy;
	}
	var bisect = crossfilter.bisect = bisect_by(crossfilter_identity);

	bisect.by = bisect_by;

	function bisect_by(f) {

	  // Locate the insertion point for x in a to maintain sorted order. The
	  // arguments lo and hi may be used to specify a subset of the array which
	  // should be considered; by default the entire array is used. If x is already
	  // present in a, the insertion point will be before (to the left of) any
	  // existing entries. The return value is suitable for use as the first
	  // argument to `array.splice` assuming that a is already sorted.
	  //
	  // The returned insertion point i partitions the array a into two halves so
	  // that all v < x for v in a[lo:i] for the left side and all v >= x for v in
	  // a[i:hi] for the right side.
	  function bisectLeft(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (f(a[mid]) < x) lo = mid + 1;
	      else hi = mid;
	    }
	    return lo;
	  }

	  // Similar to bisectLeft, but returns an insertion point which comes after (to
	  // the right of) any existing entries of x in a.
	  //
	  // The returned insertion point i partitions the array into two halves so that
	  // all v <= x for v in a[lo:i] for the left side and all v > x for v in
	  // a[i:hi] for the right side.
	  function bisectRight(a, x, lo, hi) {
	    while (lo < hi) {
	      var mid = lo + hi >>> 1;
	      if (x < f(a[mid])) hi = mid;
	      else lo = mid + 1;
	    }
	    return lo;
	  }

	  bisectRight.right = bisectRight;
	  bisectRight.left = bisectLeft;
	  return bisectRight;
	}
	var heap = crossfilter.heap = heap_by(crossfilter_identity);

	heap.by = heap_by;

	function heap_by(f) {

	  // Builds a binary heap within the specified array a[lo:hi]. The heap has the
	  // property such that the parent a[lo+i] is always less than or equal to its
	  // two children: a[lo+2*i+1] and a[lo+2*i+2].
	  function heap(a, lo, hi) {
	    var n = hi - lo,
	        i = (n >>> 1) + 1;
	    while (--i > 0) sift(a, i, n, lo);
	    return a;
	  }

	  // Sorts the specified array a[lo:hi] in descending order, assuming it is
	  // already a heap.
	  function sort(a, lo, hi) {
	    var n = hi - lo,
	        t;
	    while (--n > 0) t = a[lo], a[lo] = a[lo + n], a[lo + n] = t, sift(a, 1, n, lo);
	    return a;
	  }

	  // Sifts the element a[lo+i-1] down the heap, where the heap is the contiguous
	  // slice of array a[lo:lo+n]. This method can also be used to update the heap
	  // incrementally, without incurring the full cost of reconstructing the heap.
	  function sift(a, i, n, lo) {
	    var d = a[--lo + i],
	        x = f(d),
	        child;
	    while ((child = i << 1) <= n) {
	      if (child < n && f(a[lo + child]) > f(a[lo + child + 1])) child++;
	      if (x <= f(a[lo + child])) break;
	      a[lo + i] = a[lo + child];
	      i = child;
	    }
	    a[lo + i] = d;
	  }

	  heap.sort = sort;
	  return heap;
	}
	var heapselect = crossfilter.heapselect = heapselect_by(crossfilter_identity);

	heapselect.by = heapselect_by;

	function heapselect_by(f) {
	  var heap = heap_by(f);

	  // Returns a new array containing the top k elements in the array a[lo:hi].
	  // The returned array is not sorted, but maintains the heap property. If k is
	  // greater than hi - lo, then fewer than k elements will be returned. The
	  // order of elements in a is unchanged by this operation.
	  function heapselect(a, lo, hi, k) {
	    var queue = new Array(k = Math.min(hi - lo, k)),
	        min,
	        i,
	        x,
	        d;

	    for (i = 0; i < k; ++i) queue[i] = a[lo++];
	    heap(queue, 0, k);

	    if (lo < hi) {
	      min = f(queue[0]);
	      do {
	        if (x = f(d = a[lo]) > min) {
	          queue[0] = d;
	          min = f(heap(queue, 0, k)[0]);
	        }
	      } while (++lo < hi);
	    }

	    return queue;
	  }

	  return heapselect;
	}
	var insertionsort = crossfilter.insertionsort = insertionsort_by(crossfilter_identity);

	insertionsort.by = insertionsort_by;

	function insertionsort_by(f) {

	  function insertionsort(a, lo, hi) {
	    for (var i = lo + 1; i < hi; ++i) {
	      for (var j = i, t = a[i], x = f(t); j > lo && f(a[j - 1]) > x; --j) {
	        a[j] = a[j - 1];
	      }
	      a[j] = t;
	    }
	    return a;
	  }

	  return insertionsort;
	}
	// Algorithm designed by Vladimir Yaroslavskiy.
	// Implementation based on the Dart project; see lib/dart/LICENSE for details.

	var quicksort = crossfilter.quicksort = quicksort_by(crossfilter_identity);

	quicksort.by = quicksort_by;

	function quicksort_by(f) {
	  var insertionsort = insertionsort_by(f);

	  function sort(a, lo, hi) {
	    return (hi - lo < quicksort_sizeThreshold
	        ? insertionsort
	        : quicksort)(a, lo, hi);
	  }

	  function quicksort(a, lo, hi) {
	    // Compute the two pivots by looking at 5 elements.
	    var sixth = (hi - lo) / 6 | 0,
	        i1 = lo + sixth,
	        i5 = hi - 1 - sixth,
	        i3 = lo + hi - 1 >> 1,  // The midpoint.
	        i2 = i3 - sixth,
	        i4 = i3 + sixth;

	    var e1 = a[i1], x1 = f(e1),
	        e2 = a[i2], x2 = f(e2),
	        e3 = a[i3], x3 = f(e3),
	        e4 = a[i4], x4 = f(e4),
	        e5 = a[i5], x5 = f(e5);

	    var t;

	    // Sort the selected 5 elements using a sorting network.
	    if (x1 > x2) t = e1, e1 = e2, e2 = t, t = x1, x1 = x2, x2 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;
	    if (x1 > x3) t = e1, e1 = e3, e3 = t, t = x1, x1 = x3, x3 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x1 > x4) t = e1, e1 = e4, e4 = t, t = x1, x1 = x4, x4 = t;
	    if (x3 > x4) t = e3, e3 = e4, e4 = t, t = x3, x3 = x4, x4 = t;
	    if (x2 > x5) t = e2, e2 = e5, e5 = t, t = x2, x2 = x5, x5 = t;
	    if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	    if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;

	    var pivot1 = e2, pivotValue1 = x2,
	        pivot2 = e4, pivotValue2 = x4;

	    // e2 and e4 have been saved in the pivot variables. They will be written
	    // back, once the partitioning is finished.
	    a[i1] = e1;
	    a[i2] = a[lo];
	    a[i3] = e3;
	    a[i4] = a[hi - 1];
	    a[i5] = e5;

	    var less = lo + 1,   // First element in the middle partition.
	        great = hi - 2;  // Last element in the middle partition.

	    // Note that for value comparison, <, <=, >= and > coerce to a primitive via
	    // Object.prototype.valueOf; == and === do not, so in order to be consistent
	    // with natural order (such as for Date objects), we must do two compares.
	    var pivotsEqual = pivotValue1 <= pivotValue2 && pivotValue1 >= pivotValue2;
	    if (pivotsEqual) {

	      // Degenerated case where the partitioning becomes a dutch national flag
	      // problem.
	      //
	      // [ |  < pivot  | == pivot | unpartitioned | > pivot  | ]
	      //  ^             ^          ^             ^            ^
	      // left         less         k           great         right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1) for x in ]left, less[ : x < pivot.
	      //   2) for x in [less, k[ : x == pivot.
	      //   3) for x in ]great, right[ : x > pivot.
	      for (var k = less; k <= great; ++k) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else if (xk > pivotValue1) {

	          // Find the first element <= pivot in the range [k - 1, great] and
	          // put [:ek:] there. We know that such an element must exist:
	          // When k == less, then el3 (which is equal to pivot) lies in the
	          // interval. Otherwise a[k - 1] == pivot and the search stops at k-1.
	          // Note that in the latter case invariant 2 will be violated for a
	          // short amount of time. The invariant will be restored when the
	          // pivots are put into their final positions.
	          while (true) {
	            var greatValue = f(a[great]);
	            if (greatValue > pivotValue1) {
	              great--;
	              // This is the only location in the while-loop where a new
	              // iteration is started.
	              continue;
	            } else if (greatValue < pivotValue1) {
	              // Triple exchange.
	              a[k] = a[less];
	              a[less++] = a[great];
	              a[great--] = ek;
	              break;
	            } else {
	              a[k] = a[great];
	              a[great--] = ek;
	              // Note: if great < k then we will exit the outer loop and fix
	              // invariant 2 (which we just violated).
	              break;
	            }
	          }
	        }
	      }
	    } else {

	      // We partition the list into three parts:
	      //  1. < pivot1
	      //  2. >= pivot1 && <= pivot2
	      //  3. > pivot2
	      //
	      // During the loop we have:
	      // [ | < pivot1 | >= pivot1 && <= pivot2 | unpartitioned  | > pivot2  | ]
	      //  ^            ^                        ^              ^             ^
	      // left         less                     k              great        right
	      //
	      // a[left] and a[right] are undefined and are filled after the
	      // partitioning.
	      //
	      // Invariants:
	      //   1. for x in ]left, less[ : x < pivot1
	      //   2. for x in [less, k[ : pivot1 <= x && x <= pivot2
	      //   3. for x in ]great, right[ : x > pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk < pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          ++less;
	        } else {
	          if (xk > pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue > pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] <= pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] >= pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // Move pivots into their final positions.
	    // We shrunk the list from both sides (a[left] and a[right] have
	    // meaningless values in them) and now we move elements from the first
	    // and third partition into these locations so that we can store the
	    // pivots.
	    a[lo] = a[less - 1];
	    a[less - 1] = pivot1;
	    a[hi - 1] = a[great + 1];
	    a[great + 1] = pivot2;

	    // The list is now partitioned into three partitions:
	    // [ < pivot1   | >= pivot1 && <= pivot2   |  > pivot2   ]
	    //  ^            ^                        ^             ^
	    // left         less                     great        right

	    // Recursive descent. (Don't include the pivot values.)
	    sort(a, lo, less - 1);
	    sort(a, great + 2, hi);

	    if (pivotsEqual) {
	      // All elements in the second partition are equal to the pivot. No
	      // need to sort them.
	      return a;
	    }

	    // In theory it should be enough to call _doSort recursively on the second
	    // partition.
	    // The Android source however removes the pivot elements from the recursive
	    // call if the second partition is too large (more than 2/3 of the list).
	    if (less < i1 && great > i5) {
	      var lessValue, greatValue;
	      while ((lessValue = f(a[less])) <= pivotValue1 && lessValue >= pivotValue1) ++less;
	      while ((greatValue = f(a[great])) <= pivotValue2 && greatValue >= pivotValue2) --great;

	      // Copy paste of the previous 3-way partitioning with adaptions.
	      //
	      // We partition the list into three parts:
	      //  1. == pivot1
	      //  2. > pivot1 && < pivot2
	      //  3. == pivot2
	      //
	      // During the loop we have:
	      // [ == pivot1 | > pivot1 && < pivot2 | unpartitioned  | == pivot2 ]
	      //              ^                      ^              ^
	      //            less                     k              great
	      //
	      // Invariants:
	      //   1. for x in [ *, less[ : x == pivot1
	      //   2. for x in [less, k[ : pivot1 < x && x < pivot2
	      //   3. for x in ]great, * ] : x == pivot2
	      for (var k = less; k <= great; k++) {
	        var ek = a[k], xk = f(ek);
	        if (xk <= pivotValue1 && xk >= pivotValue1) {
	          if (k !== less) {
	            a[k] = a[less];
	            a[less] = ek;
	          }
	          less++;
	        } else {
	          if (xk <= pivotValue2 && xk >= pivotValue2) {
	            while (true) {
	              var greatValue = f(a[great]);
	              if (greatValue <= pivotValue2 && greatValue >= pivotValue2) {
	                great--;
	                if (great < k) break;
	                // This is the only location inside the loop where a new
	                // iteration is started.
	                continue;
	              } else {
	                // a[great] < pivot2.
	                if (greatValue < pivotValue1) {
	                  // Triple exchange.
	                  a[k] = a[less];
	                  a[less++] = a[great];
	                  a[great--] = ek;
	                } else {
	                  // a[great] == pivot1.
	                  a[k] = a[great];
	                  a[great--] = ek;
	                }
	                break;
	              }
	            }
	          }
	        }
	      }
	    }

	    // The second partition has now been cleared of pivot elements and looks
	    // as follows:
	    // [  *  |  > pivot1 && < pivot2  | * ]
	    //        ^                      ^
	    //       less                  great
	    // Sort the second partition using recursive descent.

	    // The second partition looks as follows:
	    // [  *  |  >= pivot1 && <= pivot2  | * ]
	    //        ^                        ^
	    //       less                    great
	    // Simply sort it by recursive descent.

	    return sort(a, less, great + 1);
	  }

	  return sort;
	}

	var quicksort_sizeThreshold = 32;
	var crossfilter_array8 = crossfilter_arrayUntyped,
	    crossfilter_array16 = crossfilter_arrayUntyped,
	    crossfilter_array32 = crossfilter_arrayUntyped,
	    crossfilter_arrayLengthen = crossfilter_arrayLengthenUntyped,
	    crossfilter_arrayWiden = crossfilter_arrayWidenUntyped;

	if (typeof Uint8Array !== "undefined") {
	  crossfilter_array8 = function(n) { return new Uint8Array(n); };
	  crossfilter_array16 = function(n) { return new Uint16Array(n); };
	  crossfilter_array32 = function(n) { return new Uint32Array(n); };

	  crossfilter_arrayLengthen = function(array, length) {
	    if (array.length >= length) return array;
	    var copy = new array.constructor(length);
	    copy.set(array);
	    return copy;
	  };

	  crossfilter_arrayWiden = function(array, width) {
	    var copy;
	    switch (width) {
	      case 16: copy = crossfilter_array16(array.length); break;
	      case 32: copy = crossfilter_array32(array.length); break;
	      default: throw new Error("invalid array width!");
	    }
	    copy.set(array);
	    return copy;
	  };
	}

	function crossfilter_arrayUntyped(n) {
	  var array = new Array(n), i = -1;
	  while (++i < n) array[i] = 0;
	  return array;
	}

	function crossfilter_arrayLengthenUntyped(array, length) {
	  var n = array.length;
	  while (n < length) array[n++] = 0;
	  return array;
	}

	function crossfilter_arrayWidenUntyped(array, width) {
	  if (width > 32) throw new Error("invalid array width!");
	  return array;
	}
	function crossfilter_filterExact(bisect, value) {
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, value, 0, n), bisect.right(values, value, 0, n)];
	  };
	}

	function crossfilter_filterRange(bisect, range) {
	  var min = range[0],
	      max = range[1];
	  return function(values) {
	    var n = values.length;
	    return [bisect.left(values, min, 0, n), bisect.left(values, max, 0, n)];
	  };
	}

	function crossfilter_filterAll(values) {
	  return [0, values.length];
	}
	function crossfilter_null() {
	  return null;
	}
	function crossfilter_zero() {
	  return 0;
	}
	function crossfilter_reduceIncrement(p) {
	  return p + 1;
	}

	function crossfilter_reduceDecrement(p) {
	  return p - 1;
	}

	function crossfilter_reduceAdd(f) {
	  return function(p, v) {
	    return p + +f(v);
	  };
	}

	function crossfilter_reduceSubtract(f) {
	  return function(p, v) {
	    return p - f(v);
	  };
	}
	exports.crossfilter = crossfilter;

	function crossfilter() {
	  var crossfilter = {
	    add: add,
	    remove: removeData,
	    dimension: dimension,
	    groupAll: groupAll,
	    size: size
	  };

	  var data = [], // the records
	      n = 0, // the number of records; data.length
	      m = 0, // a bit mask representing which dimensions are in use
	      M = 8, // number of dimensions that can fit in `filters`
	      filters = crossfilter_array8(0), // M bits per record; 1 is filtered out
	      filterListeners = [], // when the filters change
	      dataListeners = [], // when data is added
	      removeDataListeners = []; // when data is removed

	  // Adds the specified new records to this crossfilter.
	  function add(newData) {
	    var n0 = n,
	        n1 = newData.length;

	    // If there's actually new data to add…
	    // Merge the new data into the existing data.
	    // Lengthen the filter bitset to handle the new records.
	    // Notify listeners (dimensions and groups) that new data is available.
	    if (n1) {
	      data = data.concat(newData);
	      filters = crossfilter_arrayLengthen(filters, n += n1);
	      dataListeners.forEach(function(l) { l(newData, n0, n1); });
	    }

	    return crossfilter;
	  }

	  // Removes all records that match the current filters.
	  function removeData() {
	    var newIndex = crossfilter_index(n, n),
	        removed = [];
	    for (var i = 0, j = 0; i < n; ++i) {
	      if (filters[i]) newIndex[i] = j++;
	      else removed.push(i);
	    }

	    // Remove all matching records from groups.
	    filterListeners.forEach(function(l) { l(0, [], removed); });

	    // Update indexes.
	    removeDataListeners.forEach(function(l) { l(newIndex); });

	    // Remove old filters and data by overwriting.
	    for (var i = 0, j = 0, k; i < n; ++i) {
	      if (k = filters[i]) {
	        if (i !== j) filters[j] = k, data[j] = data[i];
	        ++j;
	      }
	    }
	    data.length = j;
	    while (n > j) filters[--n] = 0;
	  }

	  // Adds a new dimension with the specified value accessor function.
	  function dimension(value) {
	    var dimension = {
	      filter: filter,
	      filterExact: filterExact,
	      filterRange: filterRange,
	      filterFunction: filterFunction,
	      filterAll: filterAll,
	      top: top,
	      bottom: bottom,
	      group: group,
	      groupAll: groupAll,
	      dispose: dispose,
	      remove: dispose // for backwards-compatibility
	    };

	    var one = ~m & -~m, // lowest unset bit as mask, e.g., 00001000
	        zero = ~one, // inverted one, e.g., 11110111
	        values, // sorted, cached array
	        index, // value rank ↦ object id
	        newValues, // temporary array storing newly-added values
	        newIndex, // temporary array storing newly-added index
	        sort = quicksort_by(function(i) { return newValues[i]; }),
	        refilter = crossfilter_filterAll, // for recomputing filter
	        refilterFunction, // the custom filter function in use
	        indexListeners = [], // when data is added
	        dimensionGroups = [],
	        lo0 = 0,
	        hi0 = 0;

	    // Updating a dimension is a two-stage process. First, we must update the
	    // associated filters for the newly-added records. Once all dimensions have
	    // updated their filters, the groups are notified to update.
	    dataListeners.unshift(preAdd);
	    dataListeners.push(postAdd);

	    removeDataListeners.push(removeData);

	    // Incorporate any existing data into this dimension, and make sure that the
	    // filter bitset is wide enough to handle the new dimension.
	    m |= one;
	    if (M >= 32 ? !one : m & -(1 << M)) {
	      filters = crossfilter_arrayWiden(filters, M <<= 1);
	    }
	    preAdd(data, 0, n);
	    postAdd(data, 0, n);

	    // Incorporates the specified new records into this dimension.
	    // This function is responsible for updating filters, values, and index.
	    function preAdd(newData, n0, n1) {

	      // Permute new values into natural order using a sorted index.
	      newValues = newData.map(value);
	      newIndex = sort(crossfilter_range(n1), 0, n1);
	      newValues = permute(newValues, newIndex);

	      // Bisect newValues to determine which new records are selected.
	      var bounds = refilter(newValues), lo1 = bounds[0], hi1 = bounds[1], i;
	      if (refilterFunction) {
	        for (i = 0; i < n1; ++i) {
	          if (!refilterFunction(newValues[i], i)) filters[newIndex[i] + n0] |= one;
	        }
	      } else {
	        for (i = 0; i < lo1; ++i) filters[newIndex[i] + n0] |= one;
	        for (i = hi1; i < n1; ++i) filters[newIndex[i] + n0] |= one;
	      }

	      // If this dimension previously had no data, then we don't need to do the
	      // more expensive merge operation; use the new values and index as-is.
	      if (!n0) {
	        values = newValues;
	        index = newIndex;
	        lo0 = lo1;
	        hi0 = hi1;
	        return;
	      }

	      var oldValues = values,
	          oldIndex = index,
	          i0 = 0,
	          i1 = 0;

	      // Otherwise, create new arrays into which to merge new and old.
	      values = new Array(n);
	      index = crossfilter_index(n, n);

	      // Merge the old and new sorted values, and old and new index.
	      for (i = 0; i0 < n0 && i1 < n1; ++i) {
	        if (oldValues[i0] < newValues[i1]) {
	          values[i] = oldValues[i0];
	          index[i] = oldIndex[i0++];
	        } else {
	          values[i] = newValues[i1];
	          index[i] = newIndex[i1++] + n0;
	        }
	      }

	      // Add any remaining old values.
	      for (; i0 < n0; ++i0, ++i) {
	        values[i] = oldValues[i0];
	        index[i] = oldIndex[i0];
	      }

	      // Add any remaining new values.
	      for (; i1 < n1; ++i1, ++i) {
	        values[i] = newValues[i1];
	        index[i] = newIndex[i1] + n0;
	      }

	      // Bisect again to recompute lo0 and hi0.
	      bounds = refilter(values), lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // When all filters have updated, notify index listeners of the new values.
	    function postAdd(newData, n0, n1) {
	      indexListeners.forEach(function(l) { l(newValues, newIndex, n0, n1); });
	      newValues = newIndex = null;
	    }

	    function removeData(reIndex) {
	      for (var i = 0, j = 0, k; i < n; ++i) {
	        if (filters[k = index[i]]) {
	          if (i !== j) values[j] = values[i];
	          index[j] = reIndex[k];
	          ++j;
	        }
	      }
	      values.length = j;
	      while (j < n) index[j++] = 0;

	      // Bisect again to recompute lo0 and hi0.
	      var bounds = refilter(values);
	      lo0 = bounds[0], hi0 = bounds[1];
	    }

	    // Updates the selected values based on the specified bounds [lo, hi].
	    // This implementation is used by all the public filter methods.
	    function filterIndexBounds(bounds) {
	      var lo1 = bounds[0],
	          hi1 = bounds[1];

	      if (refilterFunction) {
	        refilterFunction = null;
	        filterIndexFunction(function(d, i) { return lo1 <= i && i < hi1; });
	        lo0 = lo1;
	        hi0 = hi1;
	        return dimension;
	      }

	      var i,
	          j,
	          k,
	          added = [],
	          removed = [];

	      // Fast incremental update based on previous lo index.
	      if (lo1 < lo0) {
	        for (i = lo1, j = Math.min(lo0, hi1); i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          added.push(k);
	        }
	      } else if (lo1 > lo0) {
	        for (i = lo0, j = Math.min(lo1, hi0); i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          removed.push(k);
	        }
	      }

	      // Fast incremental update based on previous hi index.
	      if (hi1 > hi0) {
	        for (i = Math.max(lo1, hi0), j = hi1; i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          added.push(k);
	        }
	      } else if (hi1 < hi0) {
	        for (i = Math.max(lo0, hi1), j = hi0; i < j; ++i) {
	          filters[k = index[i]] ^= one;
	          removed.push(k);
	        }
	      }

	      lo0 = lo1;
	      hi0 = hi1;
	      filterListeners.forEach(function(l) { l(one, added, removed); });
	      return dimension;
	    }

	    // Filters this dimension using the specified range, value, or null.
	    // If the range is null, this is equivalent to filterAll.
	    // If the range is an array, this is equivalent to filterRange.
	    // Otherwise, this is equivalent to filterExact.
	    function filter(range) {
	      return range == null
	          ? filterAll() : Array.isArray(range)
	          ? filterRange(range) : typeof range === "function"
	          ? filterFunction(range)
	          : filterExact(range);
	    }

	    // Filters this dimension to select the exact value.
	    function filterExact(value) {
	      return filterIndexBounds((refilter = crossfilter_filterExact(bisect, value))(values));
	    }

	    // Filters this dimension to select the specified range [lo, hi].
	    // The lower bound is inclusive, and the upper bound is exclusive.
	    function filterRange(range) {
	      return filterIndexBounds((refilter = crossfilter_filterRange(bisect, range))(values));
	    }

	    // Clears any filters on this dimension.
	    function filterAll() {
	      return filterIndexBounds((refilter = crossfilter_filterAll)(values));
	    }

	    // Filters this dimension using an arbitrary function.
	    function filterFunction(f) {
	      refilter = crossfilter_filterAll;

	      filterIndexFunction(refilterFunction = f);

	      lo0 = 0;
	      hi0 = n;

	      return dimension;
	    }

	    function filterIndexFunction(f) {
	      var i,
	          k,
	          x,
	          added = [],
	          removed = [];

	      for (i = 0; i < n; ++i) {
	        if (!(filters[k = index[i]] & one) ^ !!(x = f(values[i], i))) {
	          if (x) filters[k] &= zero, added.push(k);
	          else filters[k] |= one, removed.push(k);
	        }
	      }
	      filterListeners.forEach(function(l) { l(one, added, removed); });
	    }

	    // Returns the top K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function top(k) {
	      var array = [],
	          i = hi0,
	          j;

	      while (--i >= lo0 && k > 0) {
	        if (!filters[j = index[i]]) {
	          array.push(data[j]);
	          --k;
	        }
	      }

	      return array;
	    }

	    // Returns the bottom K selected records based on this dimension's order.
	    // Note: observes this dimension's filter, unlike group and groupAll.
	    function bottom(k) {
	      var array = [],
	          i = lo0,
	          j;

	      while (i < hi0 && k > 0) {
	        if (!filters[j = index[i]]) {
	          array.push(data[j]);
	          --k;
	        }
	        i++;
	      }

	      return array;
	    }

	    // Adds a new group to this dimension, using the specified key function.
	    function group(key) {
	      var group = {
	        top: top,
	        all: all,
	        reduce: reduce,
	        reduceCount: reduceCount,
	        reduceSum: reduceSum,
	        order: order,
	        orderNatural: orderNatural,
	        size: size,
	        dispose: dispose,
	        remove: dispose // for backwards-compatibility
	      };

	      // Ensure that this group will be removed when the dimension is removed.
	      dimensionGroups.push(group);

	      var groups, // array of {key, value}
	          groupIndex, // object id ↦ group id
	          groupWidth = 8,
	          groupCapacity = crossfilter_capacity(groupWidth),
	          k = 0, // cardinality
	          select,
	          heap,
	          reduceAdd,
	          reduceRemove,
	          reduceInitial,
	          update = crossfilter_null,
	          reset = crossfilter_null,
	          resetNeeded = true,
	          groupAll = key === crossfilter_null;

	      if (arguments.length < 1) key = crossfilter_identity;

	      // The group listens to the crossfilter for when any dimension changes, so
	      // that it can update the associated reduce values. It must also listen to
	      // the parent dimension for when data is added, and compute new keys.
	      filterListeners.push(update);
	      indexListeners.push(add);
	      removeDataListeners.push(removeData);

	      // Incorporate any existing data into the grouping.
	      add(values, index, 0, n);

	      // Incorporates the specified new values into this group.
	      // This function is responsible for updating groups and groupIndex.
	      function add(newValues, newIndex, n0, n1) {
	        var oldGroups = groups,
	            reIndex = crossfilter_index(k, groupCapacity),
	            add = reduceAdd,
	            initial = reduceInitial,
	            k0 = k, // old cardinality
	            i0 = 0, // index of old group
	            i1 = 0, // index of new record
	            j, // object id
	            g0, // old group
	            x0, // old key
	            x1, // new key
	            g, // group to add
	            x; // key of group to add

	        // If a reset is needed, we don't need to update the reduce values.
	        if (resetNeeded) add = initial = crossfilter_null;

	        // Reset the new groups (k is a lower bound).
	        // Also, make sure that groupIndex exists and is long enough.
	        groups = new Array(k), k = 0;
	        groupIndex = k0 > 1 ? crossfilter_arrayLengthen(groupIndex, n) : crossfilter_index(n, groupCapacity);

	        // Get the first old key (x0 of g0), if it exists.
	        if (k0) x0 = (g0 = oldGroups[0]).key;

	        // Find the first new key (x1), skipping NaN keys.
	        while (i1 < n1 && !((x1 = key(newValues[i1])) >= x1)) ++i1;

	        // While new keys remain…
	        while (i1 < n1) {

	          // Determine the lesser of the two current keys; new and old.
	          // If there are no old keys remaining, then always add the new key.
	          if (g0 && x0 <= x1) {
	            g = g0, x = x0;

	            // Record the new index of the old group.
	            reIndex[i0] = k;

	            // Retrieve the next old key.
	            if (g0 = oldGroups[++i0]) x0 = g0.key;
	          } else {
	            g = {key: x1, value: initial()}, x = x1;
	          }

	          // Add the lesser group.
	          groups[k] = g;

	          // Add any selected records belonging to the added group, while
	          // advancing the new key and populating the associated group index.
	          while (!(x1 > x)) {
	            groupIndex[j = newIndex[i1] + n0] = k;
	            if (!(filters[j] & zero)) g.value = add(g.value, data[j]);
	            if (++i1 >= n1) break;
	            x1 = key(newValues[i1]);
	          }

	          groupIncrement();
	        }

	        // Add any remaining old groups that were greater than all new keys.
	        // No incremental reduce is needed; these groups have no new records.
	        // Also record the new index of the old group.
	        while (i0 < k0) {
	          groups[reIndex[i0] = k] = oldGroups[i0++];
	          groupIncrement();
	        }

	        // If we added any new groups before any old groups,
	        // update the group index of all the old records.
	        if (k > i0) for (i0 = 0; i0 < n0; ++i0) {
	          groupIndex[i0] = reIndex[groupIndex[i0]];
	        }

	        // Modify the update and reset behavior based on the cardinality.
	        // If the cardinality is less than or equal to one, then the groupIndex
	        // is not needed. If the cardinality is zero, then there are no records
	        // and therefore no groups to update or reset. Note that we also must
	        // change the registered listener to point to the new method.
	        j = filterListeners.indexOf(update);
	        if (k > 1) {
	          update = updateMany;
	          reset = resetMany;
	        } else {
	          if (!k && groupAll) {
	            k = 1;
	            groups = [{key: null, value: initial()}];
	          }
	          if (k === 1) {
	            update = updateOne;
	            reset = resetOne;
	          } else {
	            update = crossfilter_null;
	            reset = crossfilter_null;
	          }
	          groupIndex = null;
	        }
	        filterListeners[j] = update;

	        // Count the number of added groups,
	        // and widen the group index as needed.
	        function groupIncrement() {
	          if (++k === groupCapacity) {
	            reIndex = crossfilter_arrayWiden(reIndex, groupWidth <<= 1);
	            groupIndex = crossfilter_arrayWiden(groupIndex, groupWidth);
	            groupCapacity = crossfilter_capacity(groupWidth);
	          }
	        }
	      }

	      function removeData() {
	        if (k > 1) {
	          var oldK = k,
	              oldGroups = groups,
	              seenGroups = crossfilter_index(oldK, oldK);

	          // Filter out non-matches by copying matching group index entries to
	          // the beginning of the array.
	          for (var i = 0, j = 0; i < n; ++i) {
	            if (filters[i]) {
	              seenGroups[groupIndex[j] = groupIndex[i]] = 1;
	              ++j;
	            }
	          }

	          // Reassemble groups including only those groups that were referred
	          // to by matching group index entries.  Note the new group index in
	          // seenGroups.
	          groups = [], k = 0;
	          for (i = 0; i < oldK; ++i) {
	            if (seenGroups[i]) {
	              seenGroups[i] = k++;
	              groups.push(oldGroups[i]);
	            }
	          }

	          if (k > 1) {
	            // Reindex the group index using seenGroups to find the new index.
	            for (var i = 0; i < j; ++i) groupIndex[i] = seenGroups[groupIndex[i]];
	          } else {
	            groupIndex = null;
	          }
	          filterListeners[filterListeners.indexOf(update)] = k > 1
	              ? (reset = resetMany, update = updateMany)
	              : k === 1 ? (reset = resetOne, update = updateOne)
	              : reset = update = crossfilter_null;
	        } else if (k === 1) {
	          if (groupAll) return;
	          for (var i = 0; i < n; ++i) if (filters[i]) return;
	          groups = [], k = 0;
	          filterListeners[filterListeners.indexOf(update)] =
	          update = reset = crossfilter_null;
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is greater than 1.
	      function updateMany(filterOne, added, removed) {
	        if (filterOne === one || resetNeeded) return;

	        var i,
	            k,
	            n,
	            g;

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (!(filters[k = added[i]] & zero)) {
	            g = groups[groupIndex[k]];
	            g.value = reduceAdd(g.value, data[k]);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if ((filters[k = removed[i]] & zero) === filterOne) {
	            g = groups[groupIndex[k]];
	            g.value = reduceRemove(g.value, data[k]);
	          }
	        }
	      }

	      // Reduces the specified selected or deselected records.
	      // This function is only used when the cardinality is 1.
	      function updateOne(filterOne, added, removed) {
	        if (filterOne === one || resetNeeded) return;

	        var i,
	            k,
	            n,
	            g = groups[0];

	        // Add the added values.
	        for (i = 0, n = added.length; i < n; ++i) {
	          if (!(filters[k = added[i]] & zero)) {
	            g.value = reduceAdd(g.value, data[k]);
	          }
	        }

	        // Remove the removed values.
	        for (i = 0, n = removed.length; i < n; ++i) {
	          if ((filters[k = removed[i]] & zero) === filterOne) {
	            g.value = reduceRemove(g.value, data[k]);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is greater than 1.
	      function resetMany() {
	        var i,
	            g;

	        // Reset all group values.
	        for (i = 0; i < k; ++i) {
	          groups[i].value = reduceInitial();
	        }

	        // Add any selected records.
	        for (i = 0; i < n; ++i) {
	          if (!(filters[i] & zero)) {
	            g = groups[groupIndex[i]];
	            g.value = reduceAdd(g.value, data[i]);
	          }
	        }
	      }

	      // Recomputes the group reduce values from scratch.
	      // This function is only used when the cardinality is 1.
	      function resetOne() {
	        var i,
	            g = groups[0];

	        // Reset the singleton group values.
	        g.value = reduceInitial();

	        // Add any selected records.
	        for (i = 0; i < n; ++i) {
	          if (!(filters[i] & zero)) {
	            g.value = reduceAdd(g.value, data[i]);
	          }
	        }
	      }

	      // Returns the array of group values, in the dimension's natural order.
	      function all() {
	        if (resetNeeded) reset(), resetNeeded = false;
	        return groups;
	      }

	      // Returns a new array containing the top K group values, in reduce order.
	      function top(k) {
	        var top = select(all(), 0, groups.length, k);
	        return heap.sort(top, 0, top.length);
	      }

	      // Sets the reduce behavior for this group to use the specified functions.
	      // This method lazily recomputes the reduce values, waiting until needed.
	      function reduce(add, remove, initial) {
	        reduceAdd = add;
	        reduceRemove = remove;
	        reduceInitial = initial;
	        resetNeeded = true;
	        return group;
	      }

	      // A convenience method for reducing by count.
	      function reduceCount() {
	        return reduce(crossfilter_reduceIncrement, crossfilter_reduceDecrement, crossfilter_zero);
	      }

	      // A convenience method for reducing by sum(value).
	      function reduceSum(value) {
	        return reduce(crossfilter_reduceAdd(value), crossfilter_reduceSubtract(value), crossfilter_zero);
	      }

	      // Sets the reduce order, using the specified accessor.
	      function order(value) {
	        select = heapselect_by(valueOf);
	        heap = heap_by(valueOf);
	        function valueOf(d) { return value(d.value); }
	        return group;
	      }

	      // A convenience method for natural ordering by reduce value.
	      function orderNatural() {
	        return order(crossfilter_identity);
	      }

	      // Returns the cardinality of this group, irrespective of any filters.
	      function size() {
	        return k;
	      }

	      // Removes this group and associated event listeners.
	      function dispose() {
	        var i = filterListeners.indexOf(update);
	        if (i >= 0) filterListeners.splice(i, 1);
	        i = indexListeners.indexOf(add);
	        if (i >= 0) indexListeners.splice(i, 1);
	        i = removeDataListeners.indexOf(removeData);
	        if (i >= 0) removeDataListeners.splice(i, 1);
	        return group;
	      }

	      return reduceCount().orderNatural();
	    }

	    // A convenience function for generating a singleton group.
	    function groupAll() {
	      var g = group(crossfilter_null), all = g.all;
	      delete g.all;
	      delete g.top;
	      delete g.order;
	      delete g.orderNatural;
	      delete g.size;
	      g.value = function() { return all()[0].value; };
	      return g;
	    }

	    // Removes this dimension and associated groups and event listeners.
	    function dispose() {
	      dimensionGroups.forEach(function(group) { group.dispose(); });
	      var i = dataListeners.indexOf(preAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = dataListeners.indexOf(postAdd);
	      if (i >= 0) dataListeners.splice(i, 1);
	      i = removeDataListeners.indexOf(removeData);
	      if (i >= 0) removeDataListeners.splice(i, 1);
	      m &= zero;
	      return filterAll();
	    }

	    return dimension;
	  }

	  // A convenience method for groupAll on a dummy dimension.
	  // This implementation can be optimized since it always has cardinality 1.
	  function groupAll() {
	    var group = {
	      reduce: reduce,
	      reduceCount: reduceCount,
	      reduceSum: reduceSum,
	      value: value,
	      dispose: dispose,
	      remove: dispose // for backwards-compatibility
	    };

	    var reduceValue,
	        reduceAdd,
	        reduceRemove,
	        reduceInitial,
	        resetNeeded = true;

	    // The group listens to the crossfilter for when any dimension changes, so
	    // that it can update the reduce value. It must also listen to the parent
	    // dimension for when data is added.
	    filterListeners.push(update);
	    dataListeners.push(add);

	    // For consistency; actually a no-op since resetNeeded is true.
	    add(data, 0, n);

	    // Incorporates the specified new values into this group.
	    function add(newData, n0) {
	      var i;

	      if (resetNeeded) return;

	      // Add the added values.
	      for (i = n0; i < n; ++i) {
	        if (!filters[i]) {
	          reduceValue = reduceAdd(reduceValue, data[i]);
	        }
	      }
	    }

	    // Reduces the specified selected or deselected records.
	    function update(filterOne, added, removed) {
	      var i,
	          k,
	          n;

	      if (resetNeeded) return;

	      // Add the added values.
	      for (i = 0, n = added.length; i < n; ++i) {
	        if (!filters[k = added[i]]) {
	          reduceValue = reduceAdd(reduceValue, data[k]);
	        }
	      }

	      // Remove the removed values.
	      for (i = 0, n = removed.length; i < n; ++i) {
	        if (filters[k = removed[i]] === filterOne) {
	          reduceValue = reduceRemove(reduceValue, data[k]);
	        }
	      }
	    }

	    // Recomputes the group reduce value from scratch.
	    function reset() {
	      var i;

	      reduceValue = reduceInitial();

	      for (i = 0; i < n; ++i) {
	        if (!filters[i]) {
	          reduceValue = reduceAdd(reduceValue, data[i]);
	        }
	      }
	    }

	    // Sets the reduce behavior for this group to use the specified functions.
	    // This method lazily recomputes the reduce value, waiting until needed.
	    function reduce(add, remove, initial) {
	      reduceAdd = add;
	      reduceRemove = remove;
	      reduceInitial = initial;
	      resetNeeded = true;
	      return group;
	    }

	    // A convenience method for reducing by count.
	    function reduceCount() {
	      return reduce(crossfilter_reduceIncrement, crossfilter_reduceDecrement, crossfilter_zero);
	    }

	    // A convenience method for reducing by sum(value).
	    function reduceSum(value) {
	      return reduce(crossfilter_reduceAdd(value), crossfilter_reduceSubtract(value), crossfilter_zero);
	    }

	    // Returns the computed reduce value.
	    function value() {
	      if (resetNeeded) reset(), resetNeeded = false;
	      return reduceValue;
	    }

	    // Removes this group and associated event listeners.
	    function dispose() {
	      var i = filterListeners.indexOf(update);
	      if (i >= 0) filterListeners.splice(i);
	      i = dataListeners.indexOf(add);
	      if (i >= 0) dataListeners.splice(i);
	      return group;
	    }

	    return reduceCount();
	  }

	  // Returns the number of records in this crossfilter, irrespective of any filters.
	  function size() {
	    return n;
	  }

	  return arguments.length
	      ? add(arguments[0])
	      : crossfilter;
	}

	// Returns an array of size n, big enough to store ids up to m.
	function crossfilter_index(n, m) {
	  return (m < 0x101
	      ? crossfilter_array8 : m < 0x10001
	      ? crossfilter_array16
	      : crossfilter_array32)(n);
	}

	// Constructs a new array of size n, with sequential values from 0 to n - 1.
	function crossfilter_range(n) {
	  var range = crossfilter_index(n, n);
	  for (var i = -1; ++i < n;) range[i] = i;
	  return range;
	}

	function crossfilter_capacity(w) {
	  return w === 8
	      ? 0x100 : w === 16
	      ? 0x10000
	      : 0x100000000;
	}
	})(typeof exports !== 'undefined' && exports || this);


/***/ }
/******/ ]);