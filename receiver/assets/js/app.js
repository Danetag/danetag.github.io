/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// UI
	var UI_NAV_HIDE = exports.UI_NAV_HIDE = 'UI_NAV_HIDE';
	var UI_NAV_SHOW = exports.UI_NAV_SHOW = 'UI_NAV_SHOW';
	var UI_NAV_TOGGLE = exports.UI_NAV_TOGGLE = 'UI_NAV_TOGGLE';
	
	// window
	var RAF = exports.RAF = 'RAF';
	var SCROLL = exports.SCROLL = 'SCROLL';
	
	// CastReceiverManager
	var WELCOME = exports.WELCOME = 'WELCOME';
	var PLAYLIST = exports.PLAYLIST = 'PLAYLIST';
	var PREVIEW = exports.PREVIEW = 'PREVIEW';
	var ERROR = exports.ERROR = 'ERROR';
	var MESSAGE = exports.MESSAGE = 'MESSAGE';

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.responsiveStoreEnhancer = exports.responsiveStateReducer = exports.createResponsiveStoreEnhancer = exports.createResponsiveStateReducer = exports.calculateResponsiveState = exports.CALCULATE_RESPONSIVE_STATE = undefined;
		
		var _types = __webpack_require__(2);
		
		Object.defineProperty(exports, 'CALCULATE_RESPONSIVE_STATE', {
		  enumerable: true,
		  get: function get() {
		    return _types.CALCULATE_RESPONSIVE_STATE;
		  }
		});
		
		var _creators = __webpack_require__(4);
		
		Object.defineProperty(exports, 'calculateResponsiveState', {
		  enumerable: true,
		  get: function get() {
		    return _creators.calculateResponsiveState;
		  }
		});
		
		var _createResponsiveStateReducer2 = __webpack_require__(6);
		
		var _createResponsiveStateReducer3 = _interopRequireDefault(_createResponsiveStateReducer2);
		
		var _createResponsiveStoreEnhancer2 = __webpack_require__(130);
		
		var _createResponsiveStoreEnhancer3 = _interopRequireDefault(_createResponsiveStoreEnhancer2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var createResponsiveStateReducer = exports.createResponsiveStateReducer = _createResponsiveStateReducer3.default;
		var createResponsiveStoreEnhancer = exports.createResponsiveStoreEnhancer = _createResponsiveStoreEnhancer3.default;
		// provide default responsive state reducer
		var responsiveStateReducer = exports.responsiveStateReducer = createResponsiveStateReducer();
		// provide default responsive store enhancer
		var responsiveStoreEnhancer = exports.responsiveStoreEnhancer = createResponsiveStoreEnhancer();
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.CALCULATE_RESPONSIVE_STATE = undefined;
		
		var _CALCULATE_RESPONSIVE_STATE2 = __webpack_require__(3);
		
		var _CALCULATE_RESPONSIVE_STATE3 = _interopRequireDefault(_CALCULATE_RESPONSIVE_STATE2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.CALCULATE_RESPONSIVE_STATE = _CALCULATE_RESPONSIVE_STATE3.default;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = 'redux-responsive/CALCULATE_RESPONSIVE_STATE';
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.calculateResponsiveState = undefined;
		
		var _calculateResponsiveState2 = __webpack_require__(5);
		
		var _calculateResponsiveState3 = _interopRequireDefault(_calculateResponsiveState2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.calculateResponsiveState = _calculateResponsiveState3.default;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _types = __webpack_require__(2);
		
		/**
		 * Action creator taking window-like object and returning action to calculate
		 * responsive state.
		 * @arg {object} window - Any window-like object (has keys `innerWidth` and
		 * `matchMedia`).
		 * @arg {number} window.innerWidth - The value for the browser width (to pass to
		 * the responsive state reducer logic).  See browser global `window.innerWidth`.
		 * @arg {function} window.matchMedia - The method with which to match media
		 * queries (to pass to the responsive sate reducer logic).  See global
		 * `window.matchMedia`.
		 * @returns {object} The resulting action.  Action will have type
		 * `CALCULATE_RESPONSIVE_STATE`, and will be directly given the two keys taken
		 * from the `window` argument.
		 */
		exports.default = function () {
		  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		      innerWidth = _ref.innerWidth,
		      innerHeight = _ref.innerHeight,
		      matchMedia = _ref.matchMedia;
		
		  return {
		    type: _types.CALCULATE_RESPONSIVE_STATE,
		    innerWidth: innerWidth,
		    innerHeight: innerHeight,
		    matchMedia: matchMedia
		  };
		}; // action type
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.defaultBreakpoints = undefined;
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // third party imports
		
		// local imports
		
		
		exports.getOrderMap = getOrderMap;
		exports.getLessThan = getLessThan;
		exports.getIs = getIs;
		exports.getGreaterThan = getGreaterThan;
		
		var _mediaquery = __webpack_require__(7);
		
		var _mediaquery2 = _interopRequireDefault(_mediaquery);
		
		var _transform = __webpack_require__(9);
		
		var _transform2 = _interopRequireDefault(_transform);
		
		var _reduce = __webpack_require__(125);
		
		var _reduce2 = _interopRequireDefault(_reduce);
		
		var _CALCULATE_RESPONSIVE_STATE = __webpack_require__(3);
		
		var _CALCULATE_RESPONSIVE_STATE2 = _interopRequireDefault(_CALCULATE_RESPONSIVE_STATE);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// default breakpoints
		var defaultBreakpoints = exports.defaultBreakpoints = {
		    extraSmall: 480,
		    small: 768,
		    medium: 992,
		    large: 1200
		};
		// media type to default to when no `window` present
		var defaultMediaType = 'infinity';
		// orientation to default to when no `window` present
		var defaultOrientation = null;
		
		/**
		 * Compute a mapping of media type to its ordering where ordering is defined
		 * such that large > medium > small.
		 * @args (object) breakpoints - the breakpoint object
		 */
		function getOrderMap(bps) {
		    // grab the keys in the appropriate order
		    var keys = Object.keys(bps).sort(function (a, b) {
		        // get the associated values
		        var valueA = bps[a];
		        var valueB = bps[b];
		
		        // if a is a number and b is a string
		        if (typeof valueA === 'number' && typeof valueB === 'string') {
		            // put the number first
		            return -1;
		        } else if (typeof valueB === 'number' && typeof valueA === 'string') {
		            // return the number first
		            return 1;
		        }
		
		        // otherwise treat it like normal
		        return valueA >= valueB ? 1 : -1;
		    });
		
		    // map the original breakpoint object
		    return (0, _transform2.default)(bps, function (result, breakpoint, mediaType) {
		        // figure out the index of the mediatype
		        var index = keys.indexOf(mediaType);
		        // if there is an entry in the sort for this
		        if (index !== -1) {
		            // to its index in the sorted list
		            result[mediaType] = index;
		        }
		    });
		}
		
		/**
		 * Compute the `lessThan` object based on the browser width.
		 * @arg {number} browserWidth - Width of the browser.
		 * @arg {object} breakpoints - The breakpoints object.
		 * @arg {currentMediaType} breakpoints - The curent media type.
		 * @returns {object} The `lessThan` object.  Its keys are the same as the
		 * keys of the breakpoints object.  The value for each key indicates whether
		 * or not the browser width is less than the breakpoint.
		 */
		function getLessThan(currentMediaType, breakpointOrder) {
		    // get the ordering of the current media type
		    var currentOrder = breakpointOrder[currentMediaType];
		
		    return (0, _transform2.default)(breakpointOrder, function (result, breakpoint, mediaType) {
		        // if the breakpoint is a number
		        if (typeof breakpoint === 'number' && breakpointOrder[mediaType]) {
		            // store wether or not it is less than the breakpoint
		            result[mediaType] = currentOrder < breakpointOrder[mediaType];
		            // handle non numerical breakpoints specially
		        } else {
		            result[mediaType] = false;
		        }
		    });
		}
		
		/**
		 * Compute the `lessThan` object based on the browser width.
		 * @arg {object} breakpoints - The breakpoints object.
		 * @arg {currentMediaType} breakpoints - The curent media type.
		 * @returns {object} The `lessThan` object.  Its keys are the same as the
		 * keys of the breakpoints object.  The value for each key indicates whether
		 * or not the browser width is less than the breakpoint.
		 */
		function getIs(currentMediaType, breakpoints) {
		    return (0, _transform2.default)(breakpoints, function (result, breakpoint, mediaType) {
		        // if the breakpoint is a number
		        if (typeof breakpoint === 'number' && breakpoints[mediaType]) {
		            // store wether or not it is less than the breakpoint
		            result[mediaType] = mediaType === currentMediaType;
		            // handle non numerical breakpoints specially
		        } else {
		            result[mediaType] = false;
		        }
		    });
		}
		
		/**
		 * Compute the `greaterThan` object based on the browser width.
		 * @arg {number} browserWidth - Width of the browser.
		 * @arg {object} breakpoints - The breakpoints object.
		 * @returns {object} The `greaterThan` object.  Its keys are the same as the
		 * keys of the breakpoints object.  The value for each key indicates whether
		 * or not the browser width is greater than the breakpoint.
		 */
		function getGreaterThan(currentMediaType, breakpointOrder) {
		    // get the ordering of the current media type
		    var currentOrder = breakpointOrder[currentMediaType];
		
		    return (0, _transform2.default)(breakpointOrder, function (result, breakpoint, mediaType) {
		        // if the breakpoint is a number
		        if (typeof breakpoint === 'number') {
		            // store wether or not it is less than the breakpoint
		            result[mediaType] = currentOrder > breakpointOrder[mediaType];
		            // handle non numerical breakpoints specially
		        } else {
		            result[mediaType] = false;
		        }
		    });
		}
		
		/**
		 * Gets the current media type from the global `window`.
		 * @arg {object} mediaQueries - The media queries object.
		 * @arg {string} infinityMediaType - The infinity media type.
		 * @returns {string} The window's current media type.  This is the key of the
		 * breakpoint that is the next breakpoint larger than the window.
		 */
		function getMediaType(matchMedia, mediaQueries, infinityMediaType) {
		    // if there's no window
		    if (typeof matchMedia === 'undefined') {
		        // return the infinity media type
		        return infinityMediaType;
		    }
		
		    // there is a window, so compute the true media type
		    return (0, _reduce2.default)(mediaQueries, function (result, query, type) {
		        // return the new type if the query matches otherwise the previous one
		        return matchMedia(query).matches ? type : result;
		        // use the infinity media type
		    }, infinityMediaType);
		}
		
		/**
		 * Gets the current media type from the global `window`.
		 * @arg {object} mediaQueries - The media queries object.
		 * @returns {string} The window's current media type.  This is the key of the
		 * breakpoint that is the next breakpoint larger than the window.
		 */
		function getOrientation(matchMedia) {
		    // if there's no window
		    if (typeof matchMedia === 'undefined') {
		        // return the default
		        return defaultOrientation;
		    }
		
		    var mediaQueries = {
		        portrait: '(orientation: portrait)',
		        landscape: '(orientation: landscape)'
		    };
		
		    // there is a window, so compute the true orientation
		    return (0, _reduce2.default)(mediaQueries, function (result, query, type) {
		        // return the new type if the query matches otherwise the previous one
		        return matchMedia(query).matches ? type : result;
		        // use the default orientation
		    }, defaultOrientation);
		}
		
		// export the reducer factory
		
		exports.default = function (breakpoints) {
		    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
		        initialMediaType = _ref.initialMediaType,
		        _ref$infinity = _ref.infinity,
		        infinity = _ref$infinity === undefined ? defaultMediaType : _ref$infinity,
		        _ref$extraFields = _ref.extraFields,
		        extraFields = _ref$extraFields === undefined ? function () {
		        return {};
		    } : _ref$extraFields;
		
		    // accept null values
		    if (!breakpoints) {
		        breakpoints = defaultBreakpoints; // eslint-disable-line
		    }
		
		    // add `infinity` breakpoint for upper bound
		    breakpoints[infinity] = Infinity;
		    // media queries associated with the breakpoints
		    var mediaQueries = _mediaquery2.default.asObject(breakpoints);
		    // figure out the ordering
		    var mediaOrdering = getOrderMap(breakpoints);
		
		    // return reducer for handling the responsive state
		    return function (state, _ref2) {
		        var type = _ref2.type,
		            matchMedia = _ref2.matchMedia;
		
		        // if told to recalculate state or state has not yet been initialized
		        if (type === _CALCULATE_RESPONSIVE_STATE2.default || typeof state === 'undefined') {
		            // if the state has never been set before and we have an initial type
		            var mediaType = !state && initialMediaType
		            // use it
		            ? initialMediaType
		            // otherwise figure out the media type from the browser
		            : getMediaType(matchMedia, mediaQueries, infinity);
		
		            // the current orientation
		            var orientation = getOrientation(matchMedia);
		            // build the responsive state
		            var responsiveState = {
		                _responsiveState: true,
		                lessThan: getLessThan(mediaType, mediaOrdering),
		                greaterThan: getGreaterThan(mediaType, mediaOrdering),
		                is: getIs(mediaType, breakpoints),
		                mediaType: mediaType,
		                orientation: orientation,
		                breakpoints: breakpoints
		            };
		
		            // return calculated state
		            return _extends({}, responsiveState, extraFields(responsiveState));
		        }
		        // otherwise return the previous state
		        return state;
		    };
		};
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports =  __webpack_require__(8);
		
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var MQ = {
		
		  asArray: function asArray(obj) {
		    var bp = this.getBreakPoints(obj);
		    var custom = this.getCustomQueries(obj);
		
		    return this._translate(this._makeSteps(this._toSortedArray(bp)))
		      .concat(this._objToArr(custom));
		  },
		
		  asObject: function asObject(obj) {
		    return this._arrToObj(this.asArray(obj));
		  },
		
		  getBreakPoints: function getBreakPoints(obj) {
		    return Object.keys(obj).reduce(function (prev, next) {
		      if (typeof obj[next] === 'number') {
		        prev[next] = obj[next];
		      }
		      return prev;
		    }, {});
		  },
		
		  getCustomQueries: function getCustomQueries(obj) {
		    return Object.keys(obj).reduce(function (prev, next) {
		      if (typeof obj[next] === 'string') {
		        prev[next] = obj[next];
		      }
		      return prev;
		    }, {});
		  },
		
		  _toSortedArray: function _toSortedArray(obj) {
		    return Object.keys(obj).map(function (el) {
		      return [el, obj[el]];
		    }).sort(function (a, b) {
		      return a[1] - b[1];
		    });
		  },
		
		  _makeSteps: function _makeSteps(arr) {
		    return (arr[arr.length - 1][1] === Infinity)?
		      arr
		      : arr.concat([Infinity]);
		  },
		
		  _translate: function _translate(arr) {
		    return arr.map(function (el, index) {
		      return (index === 0)?
		        [el[0], 'screen and (max-width: ' + el[1] + 'px)']
		        : (index === arr.length - 1)?
		          [(el[0] || 'default'), 'screen and (min-width: ' +
		            (arr[index - 1][1] + 1) + 'px)']
		          : [el[0], 'screen and (min-width: ' + (arr[index-1][1] + 1) +
		            'px) and (max-width: ' + el[1] + 'px)'];
		    });
		  },
		
		  _objToArr: function _objToArr(obj) {
		    return Object.keys(obj).map(function (el) {
		      return [el, obj[el]];
		    });
		  },
		
		  _arrToObj: function _arrToObj(arr) {
		    return arr.reduce(function (prev, next) {
		      prev[next[0]] = next[1];
		      return prev;
		    }, {});
		  }
		};
		
		if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		    module.exports = MQ;
		} else {
		  if (true) {
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		      return MQ;
		    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  }
		  else {
		    window.MQ = MQ;
		  }
		}
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		var arrayEach = __webpack_require__(10),
		    baseCreate = __webpack_require__(11),
		    baseForOwn = __webpack_require__(13),
		    baseIteratee = __webpack_require__(44),
		    getPrototype = __webpack_require__(124),
		    isArray = __webpack_require__(28),
		    isBuffer = __webpack_require__(29),
		    isFunction = __webpack_require__(43),
		    isObject = __webpack_require__(12),
		    isTypedArray = __webpack_require__(33);
		
		/**
		 * An alternative to `_.reduce`; this method transforms `object` to a new
		 * `accumulator` object which is the result of running each of its own
		 * enumerable string keyed properties thru `iteratee`, with each invocation
		 * potentially mutating the `accumulator` object. If `accumulator` is not
		 * provided, a new object with the same `[[Prototype]]` will be used. The
		 * iteratee is invoked with four arguments: (accumulator, value, key, object).
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @static
		 * @memberOf _
		 * @since 1.3.0
		 * @category Object
		 * @param {Object} object The object to iterate over.
		 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		 * @param {*} [accumulator] The custom accumulator value.
		 * @returns {*} Returns the accumulated value.
		 * @example
		 *
		 * _.transform([2, 3, 4], function(result, n) {
		 *   result.push(n *= n);
		 *   return n % 2 == 0;
		 * }, []);
		 * // => [4, 9]
		 *
		 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		 *   (result[value] || (result[value] = [])).push(key);
		 * }, {});
		 * // => { '1': ['a', 'c'], '2': ['b'] }
		 */
		function transform(object, iteratee, accumulator) {
		  var isArr = isArray(object),
		      isArrLike = isArr || isBuffer(object) || isTypedArray(object);
		
		  iteratee = baseIteratee(iteratee, 4);
		  if (accumulator == null) {
		    var Ctor = object && object.constructor;
		    if (isArrLike) {
		      accumulator = isArr ? new Ctor : [];
		    }
		    else if (isObject(object)) {
		      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
		    }
		    else {
		      accumulator = {};
		    }
		  }
		  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
		    return iteratee(accumulator, value, index, object);
		  });
		  return accumulator;
		}
		
		module.exports = transform;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `_.forEach` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns `array`.
		 */
		function arrayEach(array, iteratee) {
		  var index = -1,
		      length = array == null ? 0 : array.length;
		
		  while (++index < length) {
		    if (iteratee(array[index], index, array) === false) {
		      break;
		    }
		  }
		  return array;
		}
		
		module.exports = arrayEach;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(12);
		
		/** Built-in value references. */
		var objectCreate = Object.create;
		
		/**
		 * The base implementation of `_.create` without support for assigning
		 * properties to the created object.
		 *
		 * @private
		 * @param {Object} proto The object to inherit from.
		 * @returns {Object} Returns the new object.
		 */
		var baseCreate = (function() {
		  function object() {}
		  return function(proto) {
		    if (!isObject(proto)) {
		      return {};
		    }
		    if (objectCreate) {
		      return objectCreate(proto);
		    }
		    object.prototype = proto;
		    var result = new object;
		    object.prototype = undefined;
		    return result;
		  };
		}());
		
		module.exports = baseCreate;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is the
		 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(_.noop);
		 * // => true
		 *
		 * _.isObject(null);
		 * // => false
		 */
		function isObject(value) {
		  var type = typeof value;
		  return value != null && (type == 'object' || type == 'function');
		}
		
		module.exports = isObject;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseFor = __webpack_require__(14),
		    keys = __webpack_require__(16);
		
		/**
		 * The base implementation of `_.forOwn` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Object} Returns `object`.
		 */
		function baseForOwn(object, iteratee) {
		  return object && baseFor(object, iteratee, keys);
		}
		
		module.exports = baseForOwn;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		var createBaseFor = __webpack_require__(15);
		
		/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */
		var baseFor = createBaseFor();
		
		module.exports = baseFor;
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */
		function createBaseFor(fromRight) {
		  return function(object, iteratee, keysFunc) {
		    var index = -1,
		        iterable = Object(object),
		        props = keysFunc(object),
		        length = props.length;
		
		    while (length--) {
		      var key = props[fromRight ? length : ++index];
		      if (iteratee(iterable[key], key, iterable) === false) {
		        break;
		      }
		    }
		    return object;
		  };
		}
		
		module.exports = createBaseFor;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		var arrayLikeKeys = __webpack_require__(17),
		    baseKeys = __webpack_require__(38),
		    isArrayLike = __webpack_require__(42);
		
		/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */
		function keys(object) {
		  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
		}
		
		module.exports = keys;
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseTimes = __webpack_require__(18),
		    isArguments = __webpack_require__(19),
		    isArray = __webpack_require__(28),
		    isBuffer = __webpack_require__(29),
		    isIndex = __webpack_require__(32),
		    isTypedArray = __webpack_require__(33);
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Creates an array of the enumerable property names of the array-like `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @param {boolean} inherited Specify returning inherited property names.
		 * @returns {Array} Returns the array of property names.
		 */
		function arrayLikeKeys(value, inherited) {
		  var isArr = isArray(value),
		      isArg = !isArr && isArguments(value),
		      isBuff = !isArr && !isArg && isBuffer(value),
		      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
		      skipIndexes = isArr || isArg || isBuff || isType,
		      result = skipIndexes ? baseTimes(value.length, String) : [],
		      length = result.length;
		
		  for (var key in value) {
		    if ((inherited || hasOwnProperty.call(value, key)) &&
		        !(skipIndexes && (
		           // Safari 9 has enumerable `arguments.length` in strict mode.
		           key == 'length' ||
		           // Node.js 0.10 has enumerable non-index properties on buffers.
		           (isBuff && (key == 'offset' || key == 'parent')) ||
		           // PhantomJS 2 has enumerable non-index properties on typed arrays.
		           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
		           // Skip index properties.
		           isIndex(key, length)
		        ))) {
		      result.push(key);
		    }
		  }
		  return result;
		}
		
		module.exports = arrayLikeKeys;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */
		function baseTimes(n, iteratee) {
		  var index = -1,
		      result = Array(n);
		
		  while (++index < n) {
		    result[index] = iteratee(index);
		  }
		  return result;
		}
		
		module.exports = baseTimes;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsArguments = __webpack_require__(20),
		    isObjectLike = __webpack_require__(27);
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/** Built-in value references. */
		var propertyIsEnumerable = objectProto.propertyIsEnumerable;
		
		/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */
		var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
		  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
		    !propertyIsEnumerable.call(value, 'callee');
		};
		
		module.exports = isArguments;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGetTag = __webpack_require__(21),
		    isObjectLike = __webpack_require__(27);
		
		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]';
		
		/**
		 * The base implementation of `_.isArguments`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 */
		function baseIsArguments(value) {
		  return isObjectLike(value) && baseGetTag(value) == argsTag;
		}
		
		module.exports = baseIsArguments;
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Symbol = __webpack_require__(22),
		    getRawTag = __webpack_require__(25),
		    objectToString = __webpack_require__(26);
		
		/** `Object#toString` result references. */
		var nullTag = '[object Null]',
		    undefinedTag = '[object Undefined]';
		
		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
		
		/**
		 * The base implementation of `getTag` without fallbacks for buggy environments.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		function baseGetTag(value) {
		  if (value == null) {
		    return value === undefined ? undefinedTag : nullTag;
		  }
		  value = Object(value);
		  return (symToStringTag && symToStringTag in value)
		    ? getRawTag(value)
		    : objectToString(value);
		}
		
		module.exports = baseGetTag;
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		var root = __webpack_require__(23);
		
		/** Built-in value references. */
		var Symbol = root.Symbol;
		
		module.exports = Symbol;
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		var freeGlobal = __webpack_require__(24);
		
		/** Detect free variable `self`. */
		var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
		
		/** Used as a reference to the global object. */
		var root = freeGlobal || freeSelf || Function('return this')();
		
		module.exports = root;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
		var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
		
		module.exports = freeGlobal;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Symbol = __webpack_require__(22);
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;
		
		/** Built-in value references. */
		var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
		
		/**
		 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the raw `toStringTag`.
		 */
		function getRawTag(value) {
		  var isOwn = hasOwnProperty.call(value, symToStringTag),
		      tag = value[symToStringTag];
		
		  try {
		    value[symToStringTag] = undefined;
		    var unmasked = true;
		  } catch (e) {}
		
		  var result = nativeObjectToString.call(value);
		  if (unmasked) {
		    if (isOwn) {
		      value[symToStringTag] = tag;
		    } else {
		      delete value[symToStringTag];
		    }
		  }
		  return result;
		}
		
		module.exports = getRawTag;
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var nativeObjectToString = objectProto.toString;
		
		/**
		 * Converts `value` to a string using `Object.prototype.toString`.
		 *
		 * @private
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 */
		function objectToString(value) {
		  return nativeObjectToString.call(value);
		}
		
		module.exports = objectToString;
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */
		function isObjectLike(value) {
		  return value != null && typeof value == 'object';
		}
		
		module.exports = isObjectLike;
	
	
	/***/ },
	/* 28 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(document.body.children);
		 * // => false
		 *
		 * _.isArray('abc');
		 * // => false
		 *
		 * _.isArray(_.noop);
		 * // => false
		 */
		var isArray = Array.isArray;
		
		module.exports = isArray;
	
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(23),
		    stubFalse = __webpack_require__(31);
		
		/** Detect free variable `exports`. */
		var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
		
		/** Detect free variable `module`. */
		var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
		
		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;
		
		/** Built-in value references. */
		var Buffer = moduleExports ? root.Buffer : undefined;
		
		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
		
		/**
		 * Checks if `value` is a buffer.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.3.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
		 * @example
		 *
		 * _.isBuffer(new Buffer(2));
		 * // => true
		 *
		 * _.isBuffer(new Uint8Array(2));
		 * // => false
		 */
		var isBuffer = nativeIsBuffer || stubFalse;
		
		module.exports = isBuffer;
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))
	
	/***/ },
	/* 30 */
	/***/ function(module, exports) {
	
		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports) {
	
		/**
		 * This method returns `false`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.13.0
		 * @category Util
		 * @returns {boolean} Returns `false`.
		 * @example
		 *
		 * _.times(2, _.stubFalse);
		 * // => [false, false]
		 */
		function stubFalse() {
		  return false;
		}
		
		module.exports = stubFalse;
	
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;
		
		/** Used to detect unsigned integer values. */
		var reIsUint = /^(?:0|[1-9]\d*)$/;
		
		/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */
		function isIndex(value, length) {
		  length = length == null ? MAX_SAFE_INTEGER : length;
		  return !!length &&
		    (typeof value == 'number' || reIsUint.test(value)) &&
		    (value > -1 && value % 1 == 0 && value < length);
		}
		
		module.exports = isIndex;
	
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsTypedArray = __webpack_require__(34),
		    baseUnary = __webpack_require__(36),
		    nodeUtil = __webpack_require__(37);
		
		/* Node.js helper references. */
		var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
		
		/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */
		var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
		
		module.exports = isTypedArray;
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGetTag = __webpack_require__(21),
		    isLength = __webpack_require__(35),
		    isObjectLike = __webpack_require__(27);
		
		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    objectTag = '[object Object]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    weakMapTag = '[object WeakMap]';
		
		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';
		
		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
		typedArrayTags[errorTag] = typedArrayTags[funcTag] =
		typedArrayTags[mapTag] = typedArrayTags[numberTag] =
		typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
		typedArrayTags[setTag] = typedArrayTags[stringTag] =
		typedArrayTags[weakMapTag] = false;
		
		/**
		 * The base implementation of `_.isTypedArray` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 */
		function baseIsTypedArray(value) {
		  return isObjectLike(value) &&
		    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
		}
		
		module.exports = baseIsTypedArray;
	
	
	/***/ },
	/* 35 */
	/***/ function(module, exports) {
	
		/** Used as references for various `Number` constants. */
		var MAX_SAFE_INTEGER = 9007199254740991;
		
		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This method is loosely based on
		 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		 * @example
		 *
		 * _.isLength(3);
		 * // => true
		 *
		 * _.isLength(Number.MIN_VALUE);
		 * // => false
		 *
		 * _.isLength(Infinity);
		 * // => false
		 *
		 * _.isLength('3');
		 * // => false
		 */
		function isLength(value) {
		  return typeof value == 'number' &&
		    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}
		
		module.exports = isLength;
	
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.unary` without support for storing metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */
		function baseUnary(func) {
		  return function(value) {
		    return func(value);
		  };
		}
		
		module.exports = baseUnary;
	
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(24);
		
		/** Detect free variable `exports`. */
		var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
		
		/** Detect free variable `module`. */
		var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
		
		/** Detect the popular CommonJS extension `module.exports`. */
		var moduleExports = freeModule && freeModule.exports === freeExports;
		
		/** Detect free variable `process` from Node.js. */
		var freeProcess = moduleExports && freeGlobal.process;
		
		/** Used to access faster Node.js helpers. */
		var nodeUtil = (function() {
		  try {
		    return freeProcess && freeProcess.binding && freeProcess.binding('util');
		  } catch (e) {}
		}());
		
		module.exports = nodeUtil;
		
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isPrototype = __webpack_require__(39),
		    nativeKeys = __webpack_require__(40);
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function baseKeys(object) {
		  if (!isPrototype(object)) {
		    return nativeKeys(object);
		  }
		  var result = [];
		  for (var key in Object(object)) {
		    if (hasOwnProperty.call(object, key) && key != 'constructor') {
		      result.push(key);
		    }
		  }
		  return result;
		}
		
		module.exports = baseKeys;
	
	
	/***/ },
	/* 39 */
	/***/ function(module, exports) {
	
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */
		function isPrototype(value) {
		  var Ctor = value && value.constructor,
		      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
		
		  return value === proto;
		}
		
		module.exports = isPrototype;
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		var overArg = __webpack_require__(41);
		
		/* Built-in method references for those with the same name as other `lodash` methods. */
		var nativeKeys = overArg(Object.keys, Object);
		
		module.exports = nativeKeys;
	
	
	/***/ },
	/* 41 */
	/***/ function(module, exports) {
	
		/**
		 * Creates a unary function that invokes `func` with its argument transformed.
		 *
		 * @private
		 * @param {Function} func The function to wrap.
		 * @param {Function} transform The argument transform.
		 * @returns {Function} Returns the new function.
		 */
		function overArg(func, transform) {
		  return function(arg) {
		    return func(transform(arg));
		  };
		}
		
		module.exports = overArg;
	
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isFunction = __webpack_require__(43),
		    isLength = __webpack_require__(35);
		
		/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 * @example
		 *
		 * _.isArrayLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLike(document.body.children);
		 * // => true
		 *
		 * _.isArrayLike('abc');
		 * // => true
		 *
		 * _.isArrayLike(_.noop);
		 * // => false
		 */
		function isArrayLike(value) {
		  return value != null && isLength(value.length) && !isFunction(value);
		}
		
		module.exports = isArrayLike;
	
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGetTag = __webpack_require__(21),
		    isObject = __webpack_require__(12);
		
		/** `Object#toString` result references. */
		var asyncTag = '[object AsyncFunction]',
		    funcTag = '[object Function]',
		    genTag = '[object GeneratorFunction]',
		    proxyTag = '[object Proxy]';
		
		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  if (!isObject(value)) {
		    return false;
		  }
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in Safari 9 which returns 'object' for typed arrays and other constructors.
		  var tag = baseGetTag(value);
		  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
		}
		
		module.exports = isFunction;
	
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseMatches = __webpack_require__(45),
		    baseMatchesProperty = __webpack_require__(104),
		    identity = __webpack_require__(120),
		    isArray = __webpack_require__(28),
		    property = __webpack_require__(121);
		
		/**
		 * The base implementation of `_.iteratee`.
		 *
		 * @private
		 * @param {*} [value=_.identity] The value to convert to an iteratee.
		 * @returns {Function} Returns the iteratee.
		 */
		function baseIteratee(value) {
		  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
		  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
		  if (typeof value == 'function') {
		    return value;
		  }
		  if (value == null) {
		    return identity;
		  }
		  if (typeof value == 'object') {
		    return isArray(value)
		      ? baseMatchesProperty(value[0], value[1])
		      : baseMatches(value);
		  }
		  return property(value);
		}
		
		module.exports = baseIteratee;
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsMatch = __webpack_require__(46),
		    getMatchData = __webpack_require__(101),
		    matchesStrictComparable = __webpack_require__(103);
		
		/**
		 * The base implementation of `_.matches` which doesn't clone `source`.
		 *
		 * @private
		 * @param {Object} source The object of property values to match.
		 * @returns {Function} Returns the new spec function.
		 */
		function baseMatches(source) {
		  var matchData = getMatchData(source);
		  if (matchData.length == 1 && matchData[0][2]) {
		    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		  }
		  return function(object) {
		    return object === source || baseIsMatch(object, source, matchData);
		  };
		}
		
		module.exports = baseMatches;
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Stack = __webpack_require__(47),
		    baseIsEqual = __webpack_require__(83);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;
		
		/**
		 * The base implementation of `_.isMatch` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to inspect.
		 * @param {Object} source The object of property values to match.
		 * @param {Array} matchData The property names, values, and compare flags to match.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		 */
		function baseIsMatch(object, source, matchData, customizer) {
		  var index = matchData.length,
		      length = index,
		      noCustomizer = !customizer;
		
		  if (object == null) {
		    return !length;
		  }
		  object = Object(object);
		  while (index--) {
		    var data = matchData[index];
		    if ((noCustomizer && data[2])
		          ? data[1] !== object[data[0]]
		          : !(data[0] in object)
		        ) {
		      return false;
		    }
		  }
		  while (++index < length) {
		    data = matchData[index];
		    var key = data[0],
		        objValue = object[key],
		        srcValue = data[1];
		
		    if (noCustomizer && data[2]) {
		      if (objValue === undefined && !(key in object)) {
		        return false;
		      }
		    } else {
		      var stack = new Stack;
		      if (customizer) {
		        var result = customizer(objValue, srcValue, key, object, source, stack);
		      }
		      if (!(result === undefined
		            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
		            : result
		          )) {
		        return false;
		      }
		    }
		  }
		  return true;
		}
		
		module.exports = baseIsMatch;
	
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ListCache = __webpack_require__(48),
		    stackClear = __webpack_require__(56),
		    stackDelete = __webpack_require__(57),
		    stackGet = __webpack_require__(58),
		    stackHas = __webpack_require__(59),
		    stackSet = __webpack_require__(60);
		
		/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Stack(entries) {
		  var data = this.__data__ = new ListCache(entries);
		  this.size = data.size;
		}
		
		// Add methods to `Stack`.
		Stack.prototype.clear = stackClear;
		Stack.prototype['delete'] = stackDelete;
		Stack.prototype.get = stackGet;
		Stack.prototype.has = stackHas;
		Stack.prototype.set = stackSet;
		
		module.exports = Stack;
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		var listCacheClear = __webpack_require__(49),
		    listCacheDelete = __webpack_require__(50),
		    listCacheGet = __webpack_require__(53),
		    listCacheHas = __webpack_require__(54),
		    listCacheSet = __webpack_require__(55);
		
		/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function ListCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;
		
		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}
		
		// Add methods to `ListCache`.
		ListCache.prototype.clear = listCacheClear;
		ListCache.prototype['delete'] = listCacheDelete;
		ListCache.prototype.get = listCacheGet;
		ListCache.prototype.has = listCacheHas;
		ListCache.prototype.set = listCacheSet;
		
		module.exports = ListCache;
	
	
	/***/ },
	/* 49 */
	/***/ function(module, exports) {
	
		/**
		 * Removes all key-value entries from the list cache.
		 *
		 * @private
		 * @name clear
		 * @memberOf ListCache
		 */
		function listCacheClear() {
		  this.__data__ = [];
		  this.size = 0;
		}
		
		module.exports = listCacheClear;
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		var assocIndexOf = __webpack_require__(51);
		
		/** Used for built-in method references. */
		var arrayProto = Array.prototype;
		
		/** Built-in value references. */
		var splice = arrayProto.splice;
		
		/**
		 * Removes `key` and its value from the list cache.
		 *
		 * @private
		 * @name delete
		 * @memberOf ListCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function listCacheDelete(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);
		
		  if (index < 0) {
		    return false;
		  }
		  var lastIndex = data.length - 1;
		  if (index == lastIndex) {
		    data.pop();
		  } else {
		    splice.call(data, index, 1);
		  }
		  --this.size;
		  return true;
		}
		
		module.exports = listCacheDelete;
	
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		var eq = __webpack_require__(52);
		
		/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function assocIndexOf(array, key) {
		  var length = array.length;
		  while (length--) {
		    if (eq(array[length][0], key)) {
		      return length;
		    }
		  }
		  return -1;
		}
		
		module.exports = assocIndexOf;
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports) {
	
		/**
		 * Performs a
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 * var other = { 'a': 1 };
		 *
		 * _.eq(object, object);
		 * // => true
		 *
		 * _.eq(object, other);
		 * // => false
		 *
		 * _.eq('a', 'a');
		 * // => true
		 *
		 * _.eq('a', Object('a'));
		 * // => false
		 *
		 * _.eq(NaN, NaN);
		 * // => true
		 */
		function eq(value, other) {
		  return value === other || (value !== value && other !== other);
		}
		
		module.exports = eq;
	
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		var assocIndexOf = __webpack_require__(51);
		
		/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function listCacheGet(key) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);
		
		  return index < 0 ? undefined : data[index][1];
		}
		
		module.exports = listCacheGet;
	
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		var assocIndexOf = __webpack_require__(51);
		
		/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function listCacheHas(key) {
		  return assocIndexOf(this.__data__, key) > -1;
		}
		
		module.exports = listCacheHas;
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		var assocIndexOf = __webpack_require__(51);
		
		/**
		 * Sets the list cache `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf ListCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the list cache instance.
		 */
		function listCacheSet(key, value) {
		  var data = this.__data__,
		      index = assocIndexOf(data, key);
		
		  if (index < 0) {
		    ++this.size;
		    data.push([key, value]);
		  } else {
		    data[index][1] = value;
		  }
		  return this;
		}
		
		module.exports = listCacheSet;
	
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ListCache = __webpack_require__(48);
		
		/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */
		function stackClear() {
		  this.__data__ = new ListCache;
		  this.size = 0;
		}
		
		module.exports = stackClear;
	
	
	/***/ },
	/* 57 */
	/***/ function(module, exports) {
	
		/**
		 * Removes `key` and its value from the stack.
		 *
		 * @private
		 * @name delete
		 * @memberOf Stack
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function stackDelete(key) {
		  var data = this.__data__,
		      result = data['delete'](key);
		
		  this.size = data.size;
		  return result;
		}
		
		module.exports = stackDelete;
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports) {
	
		/**
		 * Gets the stack value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Stack
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function stackGet(key) {
		  return this.__data__.get(key);
		}
		
		module.exports = stackGet;
	
	
	/***/ },
	/* 59 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if a stack value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Stack
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function stackHas(key) {
		  return this.__data__.has(key);
		}
		
		module.exports = stackHas;
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		var ListCache = __webpack_require__(48),
		    Map = __webpack_require__(61),
		    MapCache = __webpack_require__(68);
		
		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;
		
		/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache instance.
		 */
		function stackSet(key, value) {
		  var data = this.__data__;
		  if (data instanceof ListCache) {
		    var pairs = data.__data__;
		    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
		      pairs.push([key, value]);
		      this.size = ++data.size;
		      return this;
		    }
		    data = this.__data__ = new MapCache(pairs);
		  }
		  data.set(key, value);
		  this.size = data.size;
		  return this;
		}
		
		module.exports = stackSet;
	
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62),
		    root = __webpack_require__(23);
		
		/* Built-in method references that are verified to be native. */
		var Map = getNative(root, 'Map');
		
		module.exports = Map;
	
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsNative = __webpack_require__(63),
		    getValue = __webpack_require__(67);
		
		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = getValue(object, key);
		  return baseIsNative(value) ? value : undefined;
		}
		
		module.exports = getNative;
	
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isFunction = __webpack_require__(43),
		    isMasked = __webpack_require__(64),
		    isObject = __webpack_require__(12),
		    toSource = __webpack_require__(66);
		
		/**
		 * Used to match `RegExp`
		 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
		 */
		var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
		
		/** Used to detect host constructors (Safari). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;
		
		/** Used for built-in method references. */
		var funcProto = Function.prototype,
		    objectProto = Object.prototype;
		
		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		);
		
		/**
		 * The base implementation of `_.isNative` without bad shim checks.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function,
		 *  else `false`.
		 */
		function baseIsNative(value) {
		  if (!isObject(value) || isMasked(value)) {
		    return false;
		  }
		  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
		  return pattern.test(toSource(value));
		}
		
		module.exports = baseIsNative;
	
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		var coreJsData = __webpack_require__(65);
		
		/** Used to detect methods masquerading as native. */
		var maskSrcKey = (function() {
		  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
		  return uid ? ('Symbol(src)_1.' + uid) : '';
		}());
		
		/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */
		function isMasked(func) {
		  return !!maskSrcKey && (maskSrcKey in func);
		}
		
		module.exports = isMasked;
	
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		var root = __webpack_require__(23);
		
		/** Used to detect overreaching core-js shims. */
		var coreJsData = root['__core-js_shared__'];
		
		module.exports = coreJsData;
	
	
	/***/ },
	/* 66 */
	/***/ function(module, exports) {
	
		/** Used for built-in method references. */
		var funcProto = Function.prototype;
		
		/** Used to resolve the decompiled source of functions. */
		var funcToString = funcProto.toString;
		
		/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to convert.
		 * @returns {string} Returns the source code.
		 */
		function toSource(func) {
		  if (func != null) {
		    try {
		      return funcToString.call(func);
		    } catch (e) {}
		    try {
		      return (func + '');
		    } catch (e) {}
		  }
		  return '';
		}
		
		module.exports = toSource;
	
	
	/***/ },
	/* 67 */
	/***/ function(module, exports) {
	
		/**
		 * Gets the value at `key` of `object`.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */
		function getValue(object, key) {
		  return object == null ? undefined : object[key];
		}
		
		module.exports = getValue;
	
	
	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {
	
		var mapCacheClear = __webpack_require__(69),
		    mapCacheDelete = __webpack_require__(77),
		    mapCacheGet = __webpack_require__(80),
		    mapCacheHas = __webpack_require__(81),
		    mapCacheSet = __webpack_require__(82);
		
		/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function MapCache(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;
		
		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}
		
		// Add methods to `MapCache`.
		MapCache.prototype.clear = mapCacheClear;
		MapCache.prototype['delete'] = mapCacheDelete;
		MapCache.prototype.get = mapCacheGet;
		MapCache.prototype.has = mapCacheHas;
		MapCache.prototype.set = mapCacheSet;
		
		module.exports = MapCache;
	
	
	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Hash = __webpack_require__(70),
		    ListCache = __webpack_require__(48),
		    Map = __webpack_require__(61);
		
		/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */
		function mapCacheClear() {
		  this.size = 0;
		  this.__data__ = {
		    'hash': new Hash,
		    'map': new (Map || ListCache),
		    'string': new Hash
		  };
		}
		
		module.exports = mapCacheClear;
	
	
	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
	
		var hashClear = __webpack_require__(71),
		    hashDelete = __webpack_require__(73),
		    hashGet = __webpack_require__(74),
		    hashHas = __webpack_require__(75),
		    hashSet = __webpack_require__(76);
		
		/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */
		function Hash(entries) {
		  var index = -1,
		      length = entries == null ? 0 : entries.length;
		
		  this.clear();
		  while (++index < length) {
		    var entry = entries[index];
		    this.set(entry[0], entry[1]);
		  }
		}
		
		// Add methods to `Hash`.
		Hash.prototype.clear = hashClear;
		Hash.prototype['delete'] = hashDelete;
		Hash.prototype.get = hashGet;
		Hash.prototype.has = hashHas;
		Hash.prototype.set = hashSet;
		
		module.exports = Hash;
	
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		var nativeCreate = __webpack_require__(72);
		
		/**
		 * Removes all key-value entries from the hash.
		 *
		 * @private
		 * @name clear
		 * @memberOf Hash
		 */
		function hashClear() {
		  this.__data__ = nativeCreate ? nativeCreate(null) : {};
		  this.size = 0;
		}
		
		module.exports = hashClear;
	
	
	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62);
		
		/* Built-in method references that are verified to be native. */
		var nativeCreate = getNative(Object, 'create');
		
		module.exports = nativeCreate;
	
	
	/***/ },
	/* 73 */
	/***/ function(module, exports) {
	
		/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @name delete
		 * @memberOf Hash
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function hashDelete(key) {
		  var result = this.has(key) && delete this.__data__[key];
		  this.size -= result ? 1 : 0;
		  return result;
		}
		
		module.exports = hashDelete;
	
	
	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {
	
		var nativeCreate = __webpack_require__(72);
		
		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function hashGet(key) {
		  var data = this.__data__;
		  if (nativeCreate) {
		    var result = data[key];
		    return result === HASH_UNDEFINED ? undefined : result;
		  }
		  return hasOwnProperty.call(data, key) ? data[key] : undefined;
		}
		
		module.exports = hashGet;
	
	
	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {
	
		var nativeCreate = __webpack_require__(72);
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function hashHas(key) {
		  var data = this.__data__;
		  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
		}
		
		module.exports = hashHas;
	
	
	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
	
		var nativeCreate = __webpack_require__(72);
		
		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';
		
		/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Hash
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the hash instance.
		 */
		function hashSet(key, value) {
		  var data = this.__data__;
		  this.size += this.has(key) ? 0 : 1;
		  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
		  return this;
		}
		
		module.exports = hashSet;
	
	
	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getMapData = __webpack_require__(78);
		
		/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */
		function mapCacheDelete(key) {
		  var result = getMapData(this, key)['delete'](key);
		  this.size -= result ? 1 : 0;
		  return result;
		}
		
		module.exports = mapCacheDelete;
	
	
	/***/ },
	/* 78 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isKeyable = __webpack_require__(79);
		
		/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */
		function getMapData(map, key) {
		  var data = map.__data__;
		  return isKeyable(key)
		    ? data[typeof key == 'string' ? 'string' : 'hash']
		    : data.map;
		}
		
		module.exports = getMapData;
	
	
	/***/ },
	/* 79 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */
		function isKeyable(value) {
		  var type = typeof value;
		  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
		    ? (value !== '__proto__')
		    : (value === null);
		}
		
		module.exports = isKeyable;
	
	
	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getMapData = __webpack_require__(78);
		
		/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */
		function mapCacheGet(key) {
		  return getMapData(this, key).get(key);
		}
		
		module.exports = mapCacheGet;
	
	
	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getMapData = __webpack_require__(78);
		
		/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function mapCacheHas(key) {
		  return getMapData(this, key).has(key);
		}
		
		module.exports = mapCacheHas;
	
	
	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getMapData = __webpack_require__(78);
		
		/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache instance.
		 */
		function mapCacheSet(key, value) {
		  var data = getMapData(this, key),
		      size = data.size;
		
		  data.set(key, value);
		  this.size += data.size == size ? 0 : 1;
		  return this;
		}
		
		module.exports = mapCacheSet;
	
	
	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsEqualDeep = __webpack_require__(84),
		    isObject = __webpack_require__(12),
		    isObjectLike = __webpack_require__(27);
		
		/**
		 * The base implementation of `_.isEqual` which supports partial comparisons
		 * and tracks traversed objects.
		 *
		 * @private
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @param {boolean} bitmask The bitmask flags.
		 *  1 - Unordered comparison
		 *  2 - Partial comparison
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 */
		function baseIsEqual(value, other, bitmask, customizer, stack) {
		  if (value === other) {
		    return true;
		  }
		  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
		    return value !== value && other !== other;
		  }
		  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
		}
		
		module.exports = baseIsEqual;
	
	
	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Stack = __webpack_require__(47),
		    equalArrays = __webpack_require__(85),
		    equalByTag = __webpack_require__(91),
		    equalObjects = __webpack_require__(95),
		    getTag = __webpack_require__(96),
		    isArray = __webpack_require__(28),
		    isBuffer = __webpack_require__(29),
		    isTypedArray = __webpack_require__(33);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1;
		
		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    objectTag = '[object Object]';
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * A specialized version of `baseIsEqual` for arrays and objects which performs
		 * deep comparisons and tracks traversed objects enabling objects with circular
		 * references to be compared.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		  var objIsArr = isArray(object),
		      othIsArr = isArray(other),
		      objTag = arrayTag,
		      othTag = arrayTag;
		
		  if (!objIsArr) {
		    objTag = getTag(object);
		    objTag = objTag == argsTag ? objectTag : objTag;
		  }
		  if (!othIsArr) {
		    othTag = getTag(other);
		    othTag = othTag == argsTag ? objectTag : othTag;
		  }
		  var objIsObj = objTag == objectTag,
		      othIsObj = othTag == objectTag,
		      isSameTag = objTag == othTag;
		
		  if (isSameTag && isBuffer(object)) {
		    if (!isBuffer(other)) {
		      return false;
		    }
		    objIsArr = true;
		    objIsObj = false;
		  }
		  if (isSameTag && !objIsObj) {
		    stack || (stack = new Stack);
		    return (objIsArr || isTypedArray(object))
		      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
		      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		  }
		  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
		    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
		        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
		
		    if (objIsWrapped || othIsWrapped) {
		      var objUnwrapped = objIsWrapped ? object.value() : object,
		          othUnwrapped = othIsWrapped ? other.value() : other;
		
		      stack || (stack = new Stack);
		      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		    }
		  }
		  if (!isSameTag) {
		    return false;
		  }
		  stack || (stack = new Stack);
		  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
		}
		
		module.exports = baseIsEqualDeep;
	
	
	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {
	
		var SetCache = __webpack_require__(86),
		    arraySome = __webpack_require__(89),
		    cacheHas = __webpack_require__(90);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;
		
		/**
		 * A specialized version of `baseIsEqualDeep` for arrays with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Array} array The array to compare.
		 * @param {Array} other The other array to compare.
		 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Object} stack Tracks traversed `array` and `other` objects.
		 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		 */
		function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
		      arrLength = array.length,
		      othLength = other.length;
		
		  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
		    return false;
		  }
		  // Assume cyclic values are equal.
		  var stacked = stack.get(array);
		  if (stacked && stack.get(other)) {
		    return stacked == other;
		  }
		  var index = -1,
		      result = true,
		      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
		
		  stack.set(array, other);
		  stack.set(other, array);
		
		  // Ignore non-index properties.
		  while (++index < arrLength) {
		    var arrValue = array[index],
		        othValue = other[index];
		
		    if (customizer) {
		      var compared = isPartial
		        ? customizer(othValue, arrValue, index, other, array, stack)
		        : customizer(arrValue, othValue, index, array, other, stack);
		    }
		    if (compared !== undefined) {
		      if (compared) {
		        continue;
		      }
		      result = false;
		      break;
		    }
		    // Recursively compare arrays (susceptible to call stack limits).
		    if (seen) {
		      if (!arraySome(other, function(othValue, othIndex) {
		            if (!cacheHas(seen, othIndex) &&
		                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
		              return seen.push(othIndex);
		            }
		          })) {
		        result = false;
		        break;
		      }
		    } else if (!(
		          arrValue === othValue ||
		            equalFunc(arrValue, othValue, bitmask, customizer, stack)
		        )) {
		      result = false;
		      break;
		    }
		  }
		  stack['delete'](array);
		  stack['delete'](other);
		  return result;
		}
		
		module.exports = equalArrays;
	
	
	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {
	
		var MapCache = __webpack_require__(68),
		    setCacheAdd = __webpack_require__(87),
		    setCacheHas = __webpack_require__(88);
		
		/**
		 *
		 * Creates an array cache object to store unique values.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [values] The values to cache.
		 */
		function SetCache(values) {
		  var index = -1,
		      length = values == null ? 0 : values.length;
		
		  this.__data__ = new MapCache;
		  while (++index < length) {
		    this.add(values[index]);
		  }
		}
		
		// Add methods to `SetCache`.
		SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
		SetCache.prototype.has = setCacheHas;
		
		module.exports = SetCache;
	
	
	/***/ },
	/* 87 */
	/***/ function(module, exports) {
	
		/** Used to stand-in for `undefined` hash values. */
		var HASH_UNDEFINED = '__lodash_hash_undefined__';
		
		/**
		 * Adds `value` to the array cache.
		 *
		 * @private
		 * @name add
		 * @memberOf SetCache
		 * @alias push
		 * @param {*} value The value to cache.
		 * @returns {Object} Returns the cache instance.
		 */
		function setCacheAdd(value) {
		  this.__data__.set(value, HASH_UNDEFINED);
		  return this;
		}
		
		module.exports = setCacheAdd;
	
	
	/***/ },
	/* 88 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is in the array cache.
		 *
		 * @private
		 * @name has
		 * @memberOf SetCache
		 * @param {*} value The value to search for.
		 * @returns {number} Returns `true` if `value` is found, else `false`.
		 */
		function setCacheHas(value) {
		  return this.__data__.has(value);
		}
		
		module.exports = setCacheHas;
	
	
	/***/ },
	/* 89 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `_.some` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check,
		 *  else `false`.
		 */
		function arraySome(array, predicate) {
		  var index = -1,
		      length = array == null ? 0 : array.length;
		
		  while (++index < length) {
		    if (predicate(array[index], index, array)) {
		      return true;
		    }
		  }
		  return false;
		}
		
		module.exports = arraySome;
	
	
	/***/ },
	/* 90 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if a `cache` value for `key` exists.
		 *
		 * @private
		 * @param {Object} cache The cache to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */
		function cacheHas(cache, key) {
		  return cache.has(key);
		}
		
		module.exports = cacheHas;
	
	
	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Symbol = __webpack_require__(22),
		    Uint8Array = __webpack_require__(92),
		    eq = __webpack_require__(52),
		    equalArrays = __webpack_require__(85),
		    mapToArray = __webpack_require__(93),
		    setToArray = __webpack_require__(94);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;
		
		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    symbolTag = '[object Symbol]';
		
		var arrayBufferTag = '[object ArrayBuffer]',
		    dataViewTag = '[object DataView]';
		
		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : undefined,
		    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
		
		/**
		 * A specialized version of `baseIsEqualDeep` for comparing objects of
		 * the same `toStringTag`.
		 *
		 * **Note:** This function only supports comparing values with tags of
		 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {string} tag The `toStringTag` of the objects to compare.
		 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		  switch (tag) {
		    case dataViewTag:
		      if ((object.byteLength != other.byteLength) ||
		          (object.byteOffset != other.byteOffset)) {
		        return false;
		      }
		      object = object.buffer;
		      other = other.buffer;
		
		    case arrayBufferTag:
		      if ((object.byteLength != other.byteLength) ||
		          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
		        return false;
		      }
		      return true;
		
		    case boolTag:
		    case dateTag:
		    case numberTag:
		      // Coerce booleans to `1` or `0` and dates to milliseconds.
		      // Invalid dates are coerced to `NaN`.
		      return eq(+object, +other);
		
		    case errorTag:
		      return object.name == other.name && object.message == other.message;
		
		    case regexpTag:
		    case stringTag:
		      // Coerce regexes to strings and treat strings, primitives and objects,
		      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
		      // for more details.
		      return object == (other + '');
		
		    case mapTag:
		      var convert = mapToArray;
		
		    case setTag:
		      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
		      convert || (convert = setToArray);
		
		      if (object.size != other.size && !isPartial) {
		        return false;
		      }
		      // Assume cyclic values are equal.
		      var stacked = stack.get(object);
		      if (stacked) {
		        return stacked == other;
		      }
		      bitmask |= COMPARE_UNORDERED_FLAG;
		
		      // Recursively compare objects (susceptible to call stack limits).
		      stack.set(object, other);
		      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
		      stack['delete'](object);
		      return result;
		
		    case symbolTag:
		      if (symbolValueOf) {
		        return symbolValueOf.call(object) == symbolValueOf.call(other);
		      }
		  }
		  return false;
		}
		
		module.exports = equalByTag;
	
	
	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {
	
		var root = __webpack_require__(23);
		
		/** Built-in value references. */
		var Uint8Array = root.Uint8Array;
		
		module.exports = Uint8Array;
	
	
	/***/ },
	/* 93 */
	/***/ function(module, exports) {
	
		/**
		 * Converts `map` to its key-value pairs.
		 *
		 * @private
		 * @param {Object} map The map to convert.
		 * @returns {Array} Returns the key-value pairs.
		 */
		function mapToArray(map) {
		  var index = -1,
		      result = Array(map.size);
		
		  map.forEach(function(value, key) {
		    result[++index] = [key, value];
		  });
		  return result;
		}
		
		module.exports = mapToArray;
	
	
	/***/ },
	/* 94 */
	/***/ function(module, exports) {
	
		/**
		 * Converts `set` to an array of its values.
		 *
		 * @private
		 * @param {Object} set The set to convert.
		 * @returns {Array} Returns the values.
		 */
		function setToArray(set) {
		  var index = -1,
		      result = Array(set.size);
		
		  set.forEach(function(value) {
		    result[++index] = value;
		  });
		  return result;
		}
		
		module.exports = setToArray;
	
	
	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {
	
		var keys = __webpack_require__(16);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1;
		
		/** Used for built-in method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * A specialized version of `baseIsEqualDeep` for objects with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
		      objProps = keys(object),
		      objLength = objProps.length,
		      othProps = keys(other),
		      othLength = othProps.length;
		
		  if (objLength != othLength && !isPartial) {
		    return false;
		  }
		  var index = objLength;
		  while (index--) {
		    var key = objProps[index];
		    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
		      return false;
		    }
		  }
		  // Assume cyclic values are equal.
		  var stacked = stack.get(object);
		  if (stacked && stack.get(other)) {
		    return stacked == other;
		  }
		  var result = true;
		  stack.set(object, other);
		  stack.set(other, object);
		
		  var skipCtor = isPartial;
		  while (++index < objLength) {
		    key = objProps[index];
		    var objValue = object[key],
		        othValue = other[key];
		
		    if (customizer) {
		      var compared = isPartial
		        ? customizer(othValue, objValue, key, other, object, stack)
		        : customizer(objValue, othValue, key, object, other, stack);
		    }
		    // Recursively compare objects (susceptible to call stack limits).
		    if (!(compared === undefined
		          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
		          : compared
		        )) {
		      result = false;
		      break;
		    }
		    skipCtor || (skipCtor = key == 'constructor');
		  }
		  if (result && !skipCtor) {
		    var objCtor = object.constructor,
		        othCtor = other.constructor;
		
		    // Non `Object` object instances with different constructors are not equal.
		    if (objCtor != othCtor &&
		        ('constructor' in object && 'constructor' in other) &&
		        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
		          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
		      result = false;
		    }
		  }
		  stack['delete'](object);
		  stack['delete'](other);
		  return result;
		}
		
		module.exports = equalObjects;
	
	
	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {
	
		var DataView = __webpack_require__(97),
		    Map = __webpack_require__(61),
		    Promise = __webpack_require__(98),
		    Set = __webpack_require__(99),
		    WeakMap = __webpack_require__(100),
		    baseGetTag = __webpack_require__(21),
		    toSource = __webpack_require__(66);
		
		/** `Object#toString` result references. */
		var mapTag = '[object Map]',
		    objectTag = '[object Object]',
		    promiseTag = '[object Promise]',
		    setTag = '[object Set]',
		    weakMapTag = '[object WeakMap]';
		
		var dataViewTag = '[object DataView]';
		
		/** Used to detect maps, sets, and weakmaps. */
		var dataViewCtorString = toSource(DataView),
		    mapCtorString = toSource(Map),
		    promiseCtorString = toSource(Promise),
		    setCtorString = toSource(Set),
		    weakMapCtorString = toSource(WeakMap);
		
		/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */
		var getTag = baseGetTag;
		
		// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
		if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
		    (Map && getTag(new Map) != mapTag) ||
		    (Promise && getTag(Promise.resolve()) != promiseTag) ||
		    (Set && getTag(new Set) != setTag) ||
		    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
		  getTag = function(value) {
		    var result = baseGetTag(value),
		        Ctor = result == objectTag ? value.constructor : undefined,
		        ctorString = Ctor ? toSource(Ctor) : '';
		
		    if (ctorString) {
		      switch (ctorString) {
		        case dataViewCtorString: return dataViewTag;
		        case mapCtorString: return mapTag;
		        case promiseCtorString: return promiseTag;
		        case setCtorString: return setTag;
		        case weakMapCtorString: return weakMapTag;
		      }
		    }
		    return result;
		  };
		}
		
		module.exports = getTag;
	
	
	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62),
		    root = __webpack_require__(23);
		
		/* Built-in method references that are verified to be native. */
		var DataView = getNative(root, 'DataView');
		
		module.exports = DataView;
	
	
	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62),
		    root = __webpack_require__(23);
		
		/* Built-in method references that are verified to be native. */
		var Promise = getNative(root, 'Promise');
		
		module.exports = Promise;
	
	
	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62),
		    root = __webpack_require__(23);
		
		/* Built-in method references that are verified to be native. */
		var Set = getNative(root, 'Set');
		
		module.exports = Set;
	
	
	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(62),
		    root = __webpack_require__(23);
		
		/* Built-in method references that are verified to be native. */
		var WeakMap = getNative(root, 'WeakMap');
		
		module.exports = WeakMap;
	
	
	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isStrictComparable = __webpack_require__(102),
		    keys = __webpack_require__(16);
		
		/**
		 * Gets the property names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */
		function getMatchData(object) {
		  var result = keys(object),
		      length = result.length;
		
		  while (length--) {
		    var key = result[length],
		        value = object[key];
		
		    result[length] = [key, value, isStrictComparable(value)];
		  }
		  return result;
		}
		
		module.exports = getMatchData;
	
	
	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(12);
		
		/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */
		function isStrictComparable(value) {
		  return value === value && !isObject(value);
		}
		
		module.exports = isStrictComparable;
	
	
	/***/ },
	/* 103 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `matchesProperty` for source values suitable
		 * for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */
		function matchesStrictComparable(key, srcValue) {
		  return function(object) {
		    if (object == null) {
		      return false;
		    }
		    return object[key] === srcValue &&
		      (srcValue !== undefined || (key in Object(object)));
		  };
		}
		
		module.exports = matchesStrictComparable;
	
	
	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsEqual = __webpack_require__(83),
		    get = __webpack_require__(105),
		    hasIn = __webpack_require__(117),
		    isKey = __webpack_require__(108),
		    isStrictComparable = __webpack_require__(102),
		    matchesStrictComparable = __webpack_require__(103),
		    toKey = __webpack_require__(116);
		
		/** Used to compose bitmasks for value comparisons. */
		var COMPARE_PARTIAL_FLAG = 1,
		    COMPARE_UNORDERED_FLAG = 2;
		
		/**
		 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
		 *
		 * @private
		 * @param {string} path The path of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */
		function baseMatchesProperty(path, srcValue) {
		  if (isKey(path) && isStrictComparable(srcValue)) {
		    return matchesStrictComparable(toKey(path), srcValue);
		  }
		  return function(object) {
		    var objValue = get(object, path);
		    return (objValue === undefined && objValue === srcValue)
		      ? hasIn(object, path)
		      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		  };
		}
		
		module.exports = baseMatchesProperty;
	
	
	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGet = __webpack_require__(106);
		
		/**
		 * Gets the value at `path` of `object`. If the resolved value is
		 * `undefined`, the `defaultValue` is returned in its place.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.7.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
		 * @returns {*} Returns the resolved value.
		 * @example
		 *
		 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		 *
		 * _.get(object, 'a[0].b.c');
		 * // => 3
		 *
		 * _.get(object, ['a', '0', 'b', 'c']);
		 * // => 3
		 *
		 * _.get(object, 'a.b.c', 'default');
		 * // => 'default'
		 */
		function get(object, path, defaultValue) {
		  var result = object == null ? undefined : baseGet(object, path);
		  return result === undefined ? defaultValue : result;
		}
		
		module.exports = get;
	
	
	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {
	
		var castPath = __webpack_require__(107),
		    toKey = __webpack_require__(116);
		
		/**
		 * The base implementation of `_.get` without support for default values.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @returns {*} Returns the resolved value.
		 */
		function baseGet(object, path) {
		  path = castPath(path, object);
		
		  var index = 0,
		      length = path.length;
		
		  while (object != null && index < length) {
		    object = object[toKey(path[index++])];
		  }
		  return (index && index == length) ? object : undefined;
		}
		
		module.exports = baseGet;
	
	
	/***/ },
	/* 107 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArray = __webpack_require__(28),
		    isKey = __webpack_require__(108),
		    stringToPath = __webpack_require__(110),
		    toString = __webpack_require__(113);
		
		/**
		 * Casts `value` to a path array if it's not one.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {Array} Returns the cast property path array.
		 */
		function castPath(value, object) {
		  if (isArray(value)) {
		    return value;
		  }
		  return isKey(value, object) ? [value] : stringToPath(toString(value));
		}
		
		module.exports = castPath;
	
	
	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArray = __webpack_require__(28),
		    isSymbol = __webpack_require__(109);
		
		/** Used to match property names within property paths. */
		var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		    reIsPlainProp = /^\w*$/;
		
		/**
		 * Checks if `value` is a property name and not a property path.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		 */
		function isKey(value, object) {
		  if (isArray(value)) {
		    return false;
		  }
		  var type = typeof value;
		  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
		      value == null || isSymbol(value)) {
		    return true;
		  }
		  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
		    (object != null && value in Object(object));
		}
		
		module.exports = isKey;
	
	
	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGetTag = __webpack_require__(21),
		    isObjectLike = __webpack_require__(27);
		
		/** `Object#toString` result references. */
		var symbolTag = '[object Symbol]';
		
		/**
		 * Checks if `value` is classified as a `Symbol` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
		 * @example
		 *
		 * _.isSymbol(Symbol.iterator);
		 * // => true
		 *
		 * _.isSymbol('abc');
		 * // => false
		 */
		function isSymbol(value) {
		  return typeof value == 'symbol' ||
		    (isObjectLike(value) && baseGetTag(value) == symbolTag);
		}
		
		module.exports = isSymbol;
	
	
	/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {
	
		var memoizeCapped = __webpack_require__(111);
		
		/** Used to match property names within property paths. */
		var reLeadingDot = /^\./,
		    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
		
		/** Used to match backslashes in property paths. */
		var reEscapeChar = /\\(\\)?/g;
		
		/**
		 * Converts `string` to a property path array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the property path array.
		 */
		var stringToPath = memoizeCapped(function(string) {
		  var result = [];
		  if (reLeadingDot.test(string)) {
		    result.push('');
		  }
		  string.replace(rePropName, function(match, number, quote, string) {
		    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
		  });
		  return result;
		});
		
		module.exports = stringToPath;
	
	
	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {
	
		var memoize = __webpack_require__(112);
		
		/** Used as the maximum memoize cache size. */
		var MAX_MEMOIZE_SIZE = 500;
		
		/**
		 * A specialized version of `_.memoize` which clears the memoized function's
		 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
		 *
		 * @private
		 * @param {Function} func The function to have its output memoized.
		 * @returns {Function} Returns the new memoized function.
		 */
		function memoizeCapped(func) {
		  var result = memoize(func, function(key) {
		    if (cache.size === MAX_MEMOIZE_SIZE) {
		      cache.clear();
		    }
		    return key;
		  });
		
		  var cache = result.cache;
		  return result;
		}
		
		module.exports = memoizeCapped;
	
	
	/***/ },
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {
	
		var MapCache = __webpack_require__(68);
		
		/** Error message constants. */
		var FUNC_ERROR_TEXT = 'Expected a function';
		
		/**
		 * Creates a function that memoizes the result of `func`. If `resolver` is
		 * provided, it determines the cache key for storing the result based on the
		 * arguments provided to the memoized function. By default, the first argument
		 * provided to the memoized function is used as the map cache key. The `func`
		 * is invoked with the `this` binding of the memoized function.
		 *
		 * **Note:** The cache is exposed as the `cache` property on the memoized
		 * function. Its creation may be customized by replacing the `_.memoize.Cache`
		 * constructor with one whose instances implement the
		 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
		 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Function
		 * @param {Function} func The function to have its output memoized.
		 * @param {Function} [resolver] The function to resolve the cache key.
		 * @returns {Function} Returns the new memoized function.
		 * @example
		 *
		 * var object = { 'a': 1, 'b': 2 };
		 * var other = { 'c': 3, 'd': 4 };
		 *
		 * var values = _.memoize(_.values);
		 * values(object);
		 * // => [1, 2]
		 *
		 * values(other);
		 * // => [3, 4]
		 *
		 * object.a = 2;
		 * values(object);
		 * // => [1, 2]
		 *
		 * // Modify the result cache.
		 * values.cache.set(object, ['a', 'b']);
		 * values(object);
		 * // => ['a', 'b']
		 *
		 * // Replace `_.memoize.Cache`.
		 * _.memoize.Cache = WeakMap;
		 */
		function memoize(func, resolver) {
		  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
		    throw new TypeError(FUNC_ERROR_TEXT);
		  }
		  var memoized = function() {
		    var args = arguments,
		        key = resolver ? resolver.apply(this, args) : args[0],
		        cache = memoized.cache;
		
		    if (cache.has(key)) {
		      return cache.get(key);
		    }
		    var result = func.apply(this, args);
		    memoized.cache = cache.set(key, result) || cache;
		    return result;
		  };
		  memoized.cache = new (memoize.Cache || MapCache);
		  return memoized;
		}
		
		// Expose `MapCache`.
		memoize.Cache = MapCache;
		
		module.exports = memoize;
	
	
	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseToString = __webpack_require__(114);
		
		/**
		 * Converts `value` to a string. An empty string is returned for `null`
		 * and `undefined` values. The sign of `-0` is preserved.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to convert.
		 * @returns {string} Returns the converted string.
		 * @example
		 *
		 * _.toString(null);
		 * // => ''
		 *
		 * _.toString(-0);
		 * // => '-0'
		 *
		 * _.toString([1, 2, 3]);
		 * // => '1,2,3'
		 */
		function toString(value) {
		  return value == null ? '' : baseToString(value);
		}
		
		module.exports = toString;
	
	
	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Symbol = __webpack_require__(22),
		    arrayMap = __webpack_require__(115),
		    isArray = __webpack_require__(28),
		    isSymbol = __webpack_require__(109);
		
		/** Used as references for various `Number` constants. */
		var INFINITY = 1 / 0;
		
		/** Used to convert symbols to primitives and strings. */
		var symbolProto = Symbol ? Symbol.prototype : undefined,
		    symbolToString = symbolProto ? symbolProto.toString : undefined;
		
		/**
		 * The base implementation of `_.toString` which doesn't convert nullish
		 * values to empty strings.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */
		function baseToString(value) {
		  // Exit early for strings to avoid a performance hit in some environments.
		  if (typeof value == 'string') {
		    return value;
		  }
		  if (isArray(value)) {
		    // Recursively convert values (susceptible to call stack limits).
		    return arrayMap(value, baseToString) + '';
		  }
		  if (isSymbol(value)) {
		    return symbolToString ? symbolToString.call(value) : '';
		  }
		  var result = (value + '');
		  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
		}
		
		module.exports = baseToString;
	
	
	/***/ },
	/* 115 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `_.map` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the new mapped array.
		 */
		function arrayMap(array, iteratee) {
		  var index = -1,
		      length = array == null ? 0 : array.length,
		      result = Array(length);
		
		  while (++index < length) {
		    result[index] = iteratee(array[index], index, array);
		  }
		  return result;
		}
		
		module.exports = arrayMap;
	
	
	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isSymbol = __webpack_require__(109);
		
		/** Used as references for various `Number` constants. */
		var INFINITY = 1 / 0;
		
		/**
		 * Converts `value` to a string key if it's not a string or symbol.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {string|symbol} Returns the key.
		 */
		function toKey(value) {
		  if (typeof value == 'string' || isSymbol(value)) {
		    return value;
		  }
		  var result = (value + '');
		  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
		}
		
		module.exports = toKey;
	
	
	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseHasIn = __webpack_require__(118),
		    hasPath = __webpack_require__(119);
		
		/**
		 * Checks if `path` is a direct or inherited property of `object`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 * @example
		 *
		 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
		 *
		 * _.hasIn(object, 'a');
		 * // => true
		 *
		 * _.hasIn(object, 'a.b');
		 * // => true
		 *
		 * _.hasIn(object, ['a', 'b']);
		 * // => true
		 *
		 * _.hasIn(object, 'b');
		 * // => false
		 */
		function hasIn(object, path) {
		  return object != null && hasPath(object, path, baseHasIn);
		}
		
		module.exports = hasIn;
	
	
	/***/ },
	/* 118 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.hasIn` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */
		function baseHasIn(object, key) {
		  return object != null && key in Object(object);
		}
		
		module.exports = baseHasIn;
	
	
	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {
	
		var castPath = __webpack_require__(107),
		    isArguments = __webpack_require__(19),
		    isArray = __webpack_require__(28),
		    isIndex = __webpack_require__(32),
		    isLength = __webpack_require__(35),
		    toKey = __webpack_require__(116);
		
		/**
		 * Checks if `path` exists on `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @param {Function} hasFunc The function to check properties.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 */
		function hasPath(object, path, hasFunc) {
		  path = castPath(path, object);
		
		  var index = -1,
		      length = path.length,
		      result = false;
		
		  while (++index < length) {
		    var key = toKey(path[index]);
		    if (!(result = object != null && hasFunc(object, key))) {
		      break;
		    }
		    object = object[key];
		  }
		  if (result || ++index != length) {
		    return result;
		  }
		  length = object == null ? 0 : object.length;
		  return !!length && isLength(length) && isIndex(key, length) &&
		    (isArray(object) || isArguments(object));
		}
		
		module.exports = hasPath;
	
	
	/***/ },
	/* 120 */
	/***/ function(module, exports) {
	
		/**
		 * This method returns the first argument it receives.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Util
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 *
		 * console.log(_.identity(object) === object);
		 * // => true
		 */
		function identity(value) {
		  return value;
		}
		
		module.exports = identity;
	
	
	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseProperty = __webpack_require__(122),
		    basePropertyDeep = __webpack_require__(123),
		    isKey = __webpack_require__(108),
		    toKey = __webpack_require__(116);
		
		/**
		 * Creates a function that returns the value at `path` of a given object.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Util
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 * @example
		 *
		 * var objects = [
		 *   { 'a': { 'b': 2 } },
		 *   { 'a': { 'b': 1 } }
		 * ];
		 *
		 * _.map(objects, _.property('a.b'));
		 * // => [2, 1]
		 *
		 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
		 * // => [1, 2]
		 */
		function property(path) {
		  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
		}
		
		module.exports = property;
	
	
	/***/ },
	/* 122 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */
		function baseProperty(key) {
		  return function(object) {
		    return object == null ? undefined : object[key];
		  };
		}
		
		module.exports = baseProperty;
	
	
	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGet = __webpack_require__(106);
		
		/**
		 * A specialized version of `baseProperty` which supports deep paths.
		 *
		 * @private
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */
		function basePropertyDeep(path) {
		  return function(object) {
		    return baseGet(object, path);
		  };
		}
		
		module.exports = basePropertyDeep;
	
	
	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {
	
		var overArg = __webpack_require__(41);
		
		/** Built-in value references. */
		var getPrototype = overArg(Object.getPrototypeOf, Object);
		
		module.exports = getPrototype;
	
	
	/***/ },
	/* 125 */
	/***/ function(module, exports, __webpack_require__) {
	
		var arrayReduce = __webpack_require__(126),
		    baseEach = __webpack_require__(127),
		    baseIteratee = __webpack_require__(44),
		    baseReduce = __webpack_require__(129),
		    isArray = __webpack_require__(28);
		
		/**
		 * Reduces `collection` to a value which is the accumulated result of running
		 * each element in `collection` thru `iteratee`, where each successive
		 * invocation is supplied the return value of the previous. If `accumulator`
		 * is not given, the first element of `collection` is used as the initial
		 * value. The iteratee is invoked with four arguments:
		 * (accumulator, value, index|key, collection).
		 *
		 * Many lodash methods are guarded to work as iteratees for methods like
		 * `_.reduce`, `_.reduceRight`, and `_.transform`.
		 *
		 * The guarded methods are:
		 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
		 * and `sortBy`
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Collection
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		 * @param {*} [accumulator] The initial value.
		 * @returns {*} Returns the accumulated value.
		 * @see _.reduceRight
		 * @example
		 *
		 * _.reduce([1, 2], function(sum, n) {
		 *   return sum + n;
		 * }, 0);
		 * // => 3
		 *
		 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		 *   (result[value] || (result[value] = [])).push(key);
		 *   return result;
		 * }, {});
		 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
		 */
		function reduce(collection, iteratee, accumulator) {
		  var func = isArray(collection) ? arrayReduce : baseReduce,
		      initAccum = arguments.length < 3;
		
		  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
		}
		
		module.exports = reduce;
	
	
	/***/ },
	/* 126 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `_.reduce` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {*} [accumulator] The initial value.
		 * @param {boolean} [initAccum] Specify using the first element of `array` as
		 *  the initial value.
		 * @returns {*} Returns the accumulated value.
		 */
		function arrayReduce(array, iteratee, accumulator, initAccum) {
		  var index = -1,
		      length = array == null ? 0 : array.length;
		
		  if (initAccum && length) {
		    accumulator = array[++index];
		  }
		  while (++index < length) {
		    accumulator = iteratee(accumulator, array[index], index, array);
		  }
		  return accumulator;
		}
		
		module.exports = arrayReduce;
	
	
	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseForOwn = __webpack_require__(13),
		    createBaseEach = __webpack_require__(128);
		
		/**
		 * The base implementation of `_.forEach` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array|Object} Returns `collection`.
		 */
		var baseEach = createBaseEach(baseForOwn);
		
		module.exports = baseEach;
	
	
	/***/ },
	/* 128 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArrayLike = __webpack_require__(42);
		
		/**
		 * Creates a `baseEach` or `baseEachRight` function.
		 *
		 * @private
		 * @param {Function} eachFunc The function to iterate over a collection.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */
		function createBaseEach(eachFunc, fromRight) {
		  return function(collection, iteratee) {
		    if (collection == null) {
		      return collection;
		    }
		    if (!isArrayLike(collection)) {
		      return eachFunc(collection, iteratee);
		    }
		    var length = collection.length,
		        index = fromRight ? length : -1,
		        iterable = Object(collection);
		
		    while ((fromRight ? index-- : ++index < length)) {
		      if (iteratee(iterable[index], index, iterable) === false) {
		        break;
		      }
		    }
		    return collection;
		  };
		}
		
		module.exports = createBaseEach;
	
	
	/***/ },
	/* 129 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.reduce` and `_.reduceRight`, without support
		 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {*} accumulator The initial value.
		 * @param {boolean} initAccum Specify using the first or last element of
		 *  `collection` as the initial value.
		 * @param {Function} eachFunc The function to iterate over `collection`.
		 * @returns {*} Returns the accumulated value.
		 */
		function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
		  eachFunc(collection, function(value, index, collection) {
		    accumulator = initAccum
		      ? (initAccum = false, value)
		      : iteratee(accumulator, value, index, collection);
		  });
		  return accumulator;
		}
		
		module.exports = baseReduce;
	
	
	/***/ },
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _addPerformanceModeHandlers = __webpack_require__(131);
		
		var _addPerformanceModeHandlers2 = _interopRequireDefault(_addPerformanceModeHandlers);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		/**
		 * Creates a store enhancer based off an (optional) throttle time.
		 * @arg {object} [options={calculateInitialState}] - Options object.
		 * @arg {boolean} [options.calculateInitialState=true] - True if the responsive
		 * state must be calculated initially, false otherwise.
		 * @returns {function} - The store enhancer (which adds event listeners to
		 * dispatch actions on window resize).
		 */
		exports.default = function () {
		    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		        _ref$calculateInitial = _ref.calculateInitialState,
		        calculateInitialState = _ref$calculateInitial === undefined ? true : _ref$calculateInitial;
		
		    // return the store enhancer (an enhanced version of `createStore`)
		    return function (createStore) {
		        return function () {
		            // create the store
		            var store = createStore.apply(undefined, arguments);
		
		            // if there is a `window`
		            if (typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined') {
		                // add the handlers that only fire when the responsive state changes
		                (0, _addPerformanceModeHandlers2.default)({ store: store, window: window, calculateInitialState: calculateInitialState });
		            }
		
		            // return the store so that the call is transparent
		            return store;
		        };
		    };
		}; // local imports
	
	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _mediaquery = __webpack_require__(7);
		
		var _mediaquery2 = _interopRequireDefault(_mediaquery);
		
		var _calculateResponsiveState = __webpack_require__(5);
		
		var _calculateResponsiveState2 = _interopRequireDefault(_calculateResponsiveState);
		
		var _getBreakpoints = __webpack_require__(132);
		
		var _getBreakpoints2 = _interopRequireDefault(_getBreakpoints);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// this function adds event handlers to the window that only tirgger
		// when the responsive state changes
		
		// local imports
		exports.default = function (_ref) {
		    var store = _ref.store,
		        window = _ref.window,
		        calculateInitialState = _ref.calculateInitialState;
		
		    // the function to call when calculating the new responsive state
		    function refreshResponsiveState() {
		        store.dispatch((0, _calculateResponsiveState2.default)(window));
		    }
		
		    // get the object of media queries corresponding to the breakpoints in the store
		    var mediaQueries = _mediaquery2.default.asObject((0, _getBreakpoints2.default)(store));
		
		    // for every breakpoint range
		    Object.keys(mediaQueries).forEach(function (breakpoint) {
		        // create a media query list for the breakpoint
		        var mediaQueryList = window.matchMedia(mediaQueries[breakpoint]);
		
		        /* eslint-disable no-loop-func */
		
		        // whenever any of the media query lists status changes
		        mediaQueryList.addListener(function (query) {
		            // if a new query was matched
		            if (query.matches) {
		                // recaulate the state
		                refreshResponsiveState();
		            }
		        });
		    });
		
		    // if we are supposed to calculate the initial state
		    if (calculateInitialState) {
		        // then do so
		        refreshResponsiveState();
		    }
		}; // see: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
		
		// external imports
	
	/***/ },
	/* 132 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		/**
		 * Searches through the given redux store and returns the breakpoints found inside.
		 * @arg {object} - The redux state.
		 * @returns {object} - The breakpoints associated with the responsive state inside the store.
		 */
		function getBreakpoints(store) {
		    // grab the current state of the store
		    var storeState = store.getState();
		
		    var responsiveStateKey = void 0;
		    // if the redux state root is an Immutable.js Iterable
		    if (storeState['@@__IMMUTABLE_ITERABLE__@@'] === true) {
		        responsiveStateKey = storeState.findKey(function (stateBranch) {
		            return stateBranch._responsiveState;
		        });
		    } else {
		        // go through every reducer at the root of the project
		        responsiveStateKey = Object.keys(storeState).reduce(function (prev, current) {
		            return (
		                // if the reducer contains the responsive state marker then keep it
		                storeState[current] && storeState[current]._responsiveState ? current : prev
		                // otherwise the value should be at least falsey
		
		            );
		        }, false);
		    }
		
		    // if we couldn't find a responsive reducer at the root of the project
		    if (!responsiveStateKey) {
		        throw new Error('Could not find responsive state reducer - Performance mode can only ' + 'be used if the responsive reducer is at the root of your reducer tree.' + 'If you are still running into trouble, please open a ticket on github.');
		    }
		
		    // return the breakpoints in the redux store
		    return storeState['@@__IMMUTABLE_ITERABLE__@@'] ? storeState.get(responsiveStateKey).breakpoints : storeState[responsiveStateKey].breakpoints;
		}
		
		exports.default = getBreakpoints;
	
	/***/ }
	/******/ ]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _view = __webpack_require__(16);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _webpackZepto = __webpack_require__(14);
	
	var _webpackZepto2 = _interopRequireDefault(_webpackZepto);
	
	var _underscore = __webpack_require__(13);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	/**
	 * DOMView: Defines a view with basic methods for DOM
	 * @extends View
	 * @constructor
	 */
	
	var DOMView = function (_View) {
		_inherits(DOMView, _View);
	
		_createClass(DOMView, [{
			key: 'events',
			set: function set(events) {
				for (var event in events) {
					// eslint-disable-line guard-for-in
					this._events[event] = events[event];
				}
				this.delegateEvents();
			}
	
			/**
	    * Object as associative array of all the <DOM.events> objects
	    * @type {Object}
	    */
			,
			get: function get() {
				return this._events;
			}
	
			/**
	    * Object as associative array of all the <DOM.elements> objects
	    * @type {Object}
	    */
	
	
			/**
	    * Selector to scope the main element to the view
	    * @type {Object}
	    */
	
	
			/**
	    * main element scoped to the view
	    * @type {Object}
	    */
	
	
			/**
	    * main element scoped to the view
	    * @type {Object}
	    */
	
		}]);
	
		function DOMView() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, DOMView);
	
			var _this = _possibleConstructorReturn(this, (DOMView.__proto__ || Object.getPrototypeOf(DOMView)).call(this));
	
			_this._events = {};
			_this.$els = {};
			_this.selector = null;
			_this.el = null;
			_this.$el = null;
	
			_this.selector = options.selector ? options.selector : _this.selector;
			_this.el = options.el ? options.el : _this.el;
			_this.$el = options.$el ? options.$el : _this.$el;
			_this.setElement();
			return _this;
		}
	
		/**
	  * Render your view
	  * @param {object} options
	  * This is where we scope the main elements
	  */
	
	
		_createClass(DOMView, [{
			key: 'setElement',
			value: function setElement() {
				if (this.$el === null && this.el === null && this.selector === null) {
					console.error('You must provide an el or an $el or a selector to scope a view', this); // @preserve eslint-disable-line no-console
					return;
				}
				if (this.$el === null) {
					this.$el = this.el !== null ? (0, _webpackZepto2.default)(this.el) : (0, _webpackZepto2.default)(this.selector);
					if (this.$el[0] === undefined) {
						console.error('You must provide a correct selector to scope a view', this); // @preserve eslint-disable-line no-console
						return;
					}
				}
				this.el = this.$el[0];
			}
	
			/**
	   * Init the view.
	   * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	   */
	
		}, {
			key: 'initView',
			value: function initView() {
				this.initDOM();
				this.setupDOM();
				setTimeout(this.onDOMInit.bind(this), 0);
			}
	
			/**
	   * Init all your DOM elements here
	   */
	
		}, {
			key: 'initDOM',
			value: function initDOM() {}
	
			/**
	   * Setup your DOM elements here
	   */
	
		}, {
			key: 'setupDOM',
			value: function setupDOM() {}
	
			/**
	   * Init the Timeline here
	   */
	
		}, {
			key: 'onDOMInit',
			value: function onDOMInit() {
				_get(DOMView.prototype.__proto__ || Object.getPrototypeOf(DOMView.prototype), 'initView', this).call(this);
			}
	
			/**
	   * Auto binding with this.events
	   */
	
		}, {
			key: 'delegateEvents',
			value: function delegateEvents() {
				if (this.el === null) return this;
				if (!this.events) return this;
				this.undelegateEvents();
				for (var key in this.events) {
					if (!this.events[key]) continue;
					var method = this.events[key];
					if (!_underscore2.default.isFunction(method)) method = this[method];
					if (!method) continue;
					var match = key.match(delegateEventSplitter);
					this.delegate(match[1], match[2], _underscore2.default.bind(method, this));
				}
				return this;
			}
	
			/**
	   *  Add a single event listener to the view's element (or a child element
	   *  using `selector`). This only works for delegate-able events: not `focus`,
	   *  `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	   */
	
		}, {
			key: 'delegate',
			value: function delegate(eventName, selector, listener) {
				this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
				return this;
			}
		}, {
			key: 'undelegateEvents',
			value: function undelegateEvents() {
				if (this.$el) this.$el.off('.delegateEvents' + this.cid);
				return this;
			}
	
			/**
	   *  A finer-grained `undelegateEvents` for removing a single delegated event.
	   *  `selector` and `listener` are both optional.
	   */
	
		}, {
			key: 'undelegate',
			value: function undelegate(eventName, selector, listener) {
				this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
				return this;
			}
	
			/**
	   * Dispose the view
	   */
	
		}, {
			key: 'dispose',
			value: function dispose() {
				this.undelegateEvents();
				this.$el.remove();
				this.$el = null;
				this.$els = {};
				this._events = {};
				_get(DOMView.prototype.__proto__ || Object.getPrototypeOf(DOMView.prototype), 'dispose', this).call(this);
			}
		}]);
	
		return DOMView;
	}(_view2.default);
	
	exports.default = DOMView;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _store = __webpack_require__(5);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _reduxWatch = __webpack_require__(44);
	
	var _reduxWatch2 = _interopRequireDefault(_reduxWatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Watcher = function () {
		function Watcher() {
			_classCallCheck(this, Watcher);
	
			this._watchers = {};
			this.subscriptions = {};
		}
	
		/**
	   * Object as associative array of all <watcher> objects
	   * @type {Object}
	   */
	
	
		_createClass(Watcher, [{
			key: 'dispose',
			value: function dispose() {
				this.unsubscribe();
			}
		}, {
			key: 'subscribe',
			value: function subscribe() {
				for (var path in this.watchers) {
					if (!this.watchers[path]) continue;
					if (this.subscriptions[path]) this.subscriptions[path]();
					var method = this.watchers[path];
					if (typeof method !== 'function') method = this[method];
					if (!method) continue;
	
					var watcher = (0, _reduxWatch2.default)(_store2.default.getState, path);
					this.subscriptions[path] = _store2.default.subscribe(watcher(method));
				}
			}
		}, {
			key: 'unsubscribe',
			value: function unsubscribe() {
				for (var path in this.subscriptions) {
					if (!this.subscriptions[path]) continue;
					this.subscriptions[path]();
				}
				this.subscriptions = {};
			}
		}, {
			key: 'watchers',
			set: function set(watchers) {
				for (var objectPath in watchers) {
					if (!watchers[objectPath]) continue;
					this._watchers[objectPath] = watchers[objectPath];
				}
				this.subscribe();
			},
			get: function get() {
				return this._watchers;
			}
	
			/**
	    * Object as associative array of all <subscriptions> objects
	    * @type {Object}
	    */
	
		}]);
	
		return Watcher;
	}();
	
	exports.default = Watcher;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _configureStore = __webpack_require__(29);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _configureStore2.default)();
	
	exports.default = store;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(37);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(31),
	    getPrototype = __webpack_require__(33),
	    isObjectLike = __webpack_require__(38);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	
	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	
	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(7);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(48);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(10);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(47);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(46);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(45);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(9);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(12);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
	
	var Zepto = module.exports = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,
	
	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	
	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }
	
	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }
	
	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }
	
	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }
	
	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }
	
	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }
	
	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }
	
	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }
	
	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }
	
	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container
	
	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))
	
	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'
	
	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }
	
	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }
	
	    return dom
	  }
	
	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }
	
	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }
	
	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }
	
	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }
	
	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }
	
	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }
	
	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }
	
	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }
	
	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }
	
	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }
	
	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }
	
	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined
	
	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }
	
	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }
	
	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject
	
	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }
	
	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }
	
	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }
	
	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }
	
	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }
	
	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }
	
	    return elements
	  }
	
	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }
	
	  if (window.JSON) $.parseJSON = JSON.parse
	
	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })
	
	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,
	
	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },
	
	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1
	
	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()
	
	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)
	
	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }
	
	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }
	
	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }
	
	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return
	
	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()
	
	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0
	
	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0
	
	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }
	
	  // for now
	  $.fn.detach = $.fn.remove
	
	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })
	
	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })
	
	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }
	
	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append
	
	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this
	
	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode
	
	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null
	
	        var parentInDocument = $.contains(document.documentElement, parent)
	
	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()
	
	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }
	
	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })
	
	  zepto.Z.prototype = $.fn
	
	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto
	
	  return $
	})()
	
	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }
	
	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'
	
	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }
	
	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }
	
	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }
	
	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }
	
	  $.event = { add: add, remove: remove }
	
	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }
	
	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }
	
	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }
	
	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)
	
	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })
	
	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }
	
	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]
	
	    return compatible(proxy, event)
	  }
	
	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }
	
	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }
	
	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }
	
	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }
	
	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }
	
	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }
	
	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }
	
	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })
	
	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }
	
	})(Zepto)
	
	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')
	
	  originAnchor.href = window.location.href
	
	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }
	
	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }
	
	  // Number of active Ajax requests
	  $.active = 0
	
	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }
	
	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false
	
	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }
	
	  // Empty function, used as default callback
	  function empty() {}
	
	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)
	
	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()
	
	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }
	
	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])
	
	      originalCallback = responseData = undefined
	    })
	
	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }
	
	    window[callbackName] = function(){
	      responseData = arguments
	    }
	
	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)
	
	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)
	
	    return xhr
	  }
	
	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }
	
	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }
	
	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }
	
	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }
	
	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]
	
	    ajaxStart(settings)
	
	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }
	
	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)
	
	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'
	
	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())
	
	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }
	
	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')
	
	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader
	
	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText
	
	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }
	
	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }
	
	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }
	
	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]
	
	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)
	
	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])
	
	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)
	
	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }
	
	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }
	
	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }
	
	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }
	
	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }
	
	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }
	
	  var escape = encodeURIComponent
	
	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }
	
	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)
	
	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }
	
	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }
	
	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }
	
	})(Zepto)
	
	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }
	
	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DOM = __webpack_require__(3);
	
	var _DOM2 = _interopRequireDefault(_DOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * PageView: Defines a page
	 * @extends View
	 * @constructor
	 */
	var PageView = function (_AbstractDOMView) {
	  _inherits(PageView, _AbstractDOMView);
	
	  function PageView() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, PageView);
	
	    options.selector = '#content';
	    return _possibleConstructorReturn(this, (PageView.__proto__ || Object.getPrototypeOf(PageView)).call(this, options));
	  }
	
	  return PageView;
	}(_DOM2.default);
	
	exports.default = PageView;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _underscore = __webpack_require__(13);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _watcher = __webpack_require__(4);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * View: Defines a view with basic methods
	 * @constructor
	 */
	var View = function (_Watcher) {
		_inherits(View, _Watcher);
	
		_createClass(View, [{
			key: 'states',
	
	
			/**
	    * Object as associative array of all the <promises> objects
	    * @type {Object}
	    */
	
	
			/**
	   * Object as associative array of all the <Timeline> objects
	   * @type {Object}
	   */
			set: function set(states) {
				for (var state in states) {
					// eslint-disable-line guard-for-in
					this._states[state] = states[state];
				}
			}
	
			/**
	    * Object as associative array of all the states
	    * @type {Object}
	    */
	
	
			/**
	    * Object as associative array of all the <handlers> objects
	    * @type {Object}
	    */
			,
			get: function get() {
				return this._states;
			}
	
			/**
	    * uniqueId
	    * @type {String}
	    */
	
	
			/**
	    * raf id
	    * @type {String}
	    */
	
		}]);
	
		function View() {
			_classCallCheck(this, View);
	
			var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));
	
			_this.TL = {};
			_this.handlers = {};
			_this.promises = {
				init: {
					resolve: null,
					reject: null
				},
				show: {
					resolve: null,
					reject: null
				},
				hidden: {
					resolve: null,
					reject: null
				}
			};
			_this._states = {};
			_this.cid = null;
			_this.rafID = null;
	
	
			_this.states = {
				canUpdate: false,
				isInit: false,
				isShown: false
			};
	
			_this.watchers = {
				'browser.width': _this.onResize.bind(_this),
				'browser.height': _this.onResize.bind(_this),
				'browser.is': _this.onResize.bind(_this),
				'window.scroll': _this.onScroll.bind(_this)
			};
	
			_this.cid = _underscore2.default.uniqueId('view');
			return _this;
		}
	
		/**
	  * Init
	  * @return Promise a Promise the view is init
	  */
	
	
		_createClass(View, [{
			key: 'init',
			value: function init() {
				var _this2 = this;
	
				return new Promise(function (resolve, reject) {
					_this2.promises.init.resolve = resolve;
					_this2.promises.init.reject = reject;
	
					var isInit = _this2.states.isInit;
	
	
					if (isInit) {
						_this2.promises.init.reject();
						return;
					}
	
					_this2.initView();
				});
			}
	
			/**
	   * Init the view.
	   * Override and trigger onInit when we have to wait for computer procesing, like canvas initialization for instance.
	   */
	
		}, {
			key: 'initView',
			value: function initView() {
				this.initTL();
				this.bindUpdate();
				this.bindEvents();
				this.onInit();
			}
	
			/**
	   * Once the view is init
	   */
	
		}, {
			key: 'onInit',
			value: function onInit() {
				this.setState({ isInit: true, canUpdate: true });
				this.promises.init.resolve();
			}
		}, {
			key: 'bindUpdate',
			value: function bindUpdate() {
				this.handlers.raf = this.update.bind(this);
				this.rafID = window.requestAnimationFrame(this.handlers.raf);
			}
	
			/**
	   * Init the Timeline here
	   */
	
		}, {
			key: 'initTL',
			value: function initTL() {}
	
			/**
	   * Bind yout events here
	   */
	
		}, {
			key: 'bindEvents',
			value: function bindEvents() {}
	
			/**
	   * Unbind yout events here
	   */
	
		}, {
			key: 'unbindEvents',
			value: function unbindEvents() {}
	
			/**
	   * Unbind update
	   */
	
		}, {
			key: 'unbindUpdate',
			value: function unbindUpdate() {
				window.cancelAnimationFrame(this.rafID);
			}
		}, {
			key: 'setState',
			value: function setState() {
				var partialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var callback = arguments[1];
	
				if ((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) !== 'object' && typeof partialState !== 'function' && partialState !== null) {
					console.error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
					return;
				}
	
				for (var key in partialState) {
					// eslint-disable-line guard-for-in
					this.states[key] = partialState[key];
				}
	
				if (callback) callback();
				this.render();
			}
	
			/**
	   * Called on request animation frame
	   */
	
		}, {
			key: 'update',
			value: function update() {
				if (this.states.canUpdate) this.onUpdate();
				this.rafID = window.requestAnimationFrame(this.handlers.raf);
			}
	
			/**
	   * Called on scroll
	   */
	
		}, {
			key: 'onScroll',
			value: function onScroll() {}
	
			/**
	   * Called on update
	   */
	
		}, {
			key: 'onUpdate',
			value: function onUpdate() {}
	
			/**
	   * Called on orientation change
	   */
	
		}, {
			key: 'onOrientationChange',
			value: function onOrientationChange() {}
	
			/**
	   * Called on resize
	   */
	
		}, {
			key: 'onResize',
			value: function onResize() {}
	
			/**
	   * Call render function if you wanna change the view
	   * based on states/data
	   */
	
		}, {
			key: 'render',
			value: function render() {}
	
			/**
	   * Show the view
	   */
	
		}, {
			key: 'show',
			value: function show() {
				var _this3 = this;
	
				return new Promise(function (resolve, reject) {
					_this3.promises.show.resolve = resolve;
					_this3.promises.show.reject = reject;
					_this3.setState({ canUpdate: true });
					_this3.showView();
				});
			}
		}, {
			key: 'showView',
			value: function showView() {
				this.onShown();
			}
	
			/**
	   * The view is shown
	   */
	
		}, {
			key: 'onShown',
			value: function onShown() {
				this.setState({ isShown: true });
				this.promises.show.resolve();
			}
	
			/**
	   * Hide the view
	   */
	
		}, {
			key: 'hide',
			value: function hide() {
				var _this4 = this;
	
				return new Promise(function (resolve, reject) {
					_this4.promises.show.resolve = resolve;
					_this4.promises.show.reject = reject;
					_this4.hideView();
				});
			}
		}, {
			key: 'hideView',
			value: function hideView() {
				this.onHidden();
			}
	
			/**
	   * The view is shown
	   */
	
		}, {
			key: 'onHidden',
			value: function onHidden() {
				this.setState({ isShown: true, canUpdate: false });
				this.promises.hide.resolve();
			}
	
			/**
	   * Dispose the view
	   */
	
		}, {
			key: 'dispose',
			value: function dispose() {
				this.setState({ isInit: false, isShown: true, canUpdate: false });
				this.unbindEvents();
				this.unbindUpdate();
				this.destroyTL();
				this.handlers = {};
				this.promises = {};
				this.super();
			}
	
			/**
	   * Kill a timeline by name
	   * @param {string} name of the timeline stocked in this.TL.
	   */
	
		}, {
			key: 'killTL',
			value: function killTL(name) {
				if (this.TL[name] === undefined || this.TL[name] === null) return;
	
				var tl = this.TL[name];
	
				tl.stop();
				tl.kill();
				tl.clear();
				tl = null;
	
				this.TL[name] = null;
			}
	
			/**
	   * Kill all the timelines
	   */
	
		}, {
			key: 'destroyTL',
			value: function destroyTL() {
				for (var name in this.TL) {
					if (this.TL[name]) this.killTL(name);
				}
				this.TL = {};
			}
		}]);
	
		return View;
	}(_watcher2.default);
	
	exports.default = View;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.welcome = welcome;
	exports.playlist = playlist;
	exports.preview = preview;
	exports.error = error;
	exports.message = message;
	
	var _actionTypes = __webpack_require__(1);
	
	function welcome(data) {
		return {
			type: _actionTypes.WELCOME,
			data: data
		};
	}
	
	function playlist(data) {
		return {
			type: _actionTypes.PLAYLIST,
			data: data
		};
	}
	
	function preview(data) {
		return {
			type: _actionTypes.PREVIEW,
			data: data
		};
	}
	
	function error(data) {
		return {
			type: _actionTypes.ERROR,
			data: data
		};
	}
	
	function message(data) {
		return {
			type: _actionTypes.MESSAGE,
			data: data
		};
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.scroll = scroll;
	exports.raf = raf;
	
	var _actionTypes = __webpack_require__(1);
	
	function scroll(scrollObj) {
		return {
			type: _actionTypes.SCROLL,
			scroll: scrollObj
		};
	}
	function raf(id) {
		return {
			type: _actionTypes.RAF,
			rafID: id
		};
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _watcher = __webpack_require__(4);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _Layout = __webpack_require__(20);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Watcher) {
		_inherits(App, _Watcher);
	
		function App() {
			_classCallCheck(this, App);
	
			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	
			_this.page = null;
			_this.layout = null;
	
	
			_this.watchers = {
				'location.view': _this.onLocationChanged.bind(_this)
			};
			return _this;
		}
	
		_createClass(App, [{
			key: 'init',
			value: function init() {
				this.layout = new _Layout2.default({ el: document.body });
				return this.layout.init();
			}
		}, {
			key: 'onLocationChanged',
			value: function onLocationChanged(page, prevPage, objectPath) {
				var _this2 = this;
	
				// should never happens anyway
				if (this.page === page) return;
	
				if (this.page !== null) {
					this.page.hide().then(function () {
						_this2.page.dipose();
						_this2.renderPage_(page);
					});
				} else {
					this.renderPage_(page);
				}
			}
		}, {
			key: 'renderPage_',
			value: function renderPage_(page) {
				var _this3 = this;
	
				this.page = new page();
				this.page.init().then(function () {
					_this3.page.show();
				}).then(function () {
					console.log('page is shown');
				});
			}
		}]);
	
		return App;
	}(_watcher2.default);
	
	exports.default = App;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DOM = __webpack_require__(3);
	
	var _DOM2 = _interopRequireDefault(_DOM);
	
	var _reduxResponsive = __webpack_require__(2);
	
	var _window = __webpack_require__(18);
	
	var _store = __webpack_require__(5);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Layout = function (_DOMView) {
		_inherits(Layout, _DOMView);
	
		function Layout() {
			var _ref;
	
			var _temp, _this, _ret;
	
			_classCallCheck(this, Layout);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.scrollTicket = false, _temp), _possibleConstructorReturn(_this, _ret);
		}
	
		_createClass(Layout, [{
			key: 'bindEvents',
			value: function bindEvents() {
				var _this2 = this;
	
				window.addEventListener('resize', function () {
					return _store2.default.dispatch((0, _reduxResponsive.calculateResponsiveState)(window));
				}, false);
				window.addEventListener('scroll', function () {
					_this2.scrollTicket = true;
				}, false);
			}
		}, {
			key: 'onUpdate',
			value: function onUpdate() {
				if (this.scrollTicket) {
					this.scrollTicket = false;
					var scrollObj = {
						x: window.scrollX || window.pageXOffset,
						y: window.scrollY || window.pageYOffset
					};
					_store2.default.dispatch((0, _window.scroll)(scrollObj));
				}
			}
		}]);
	
		return Layout;
	}(_DOM2.default);
	
	exports.default = Layout;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _page = __webpack_require__(15);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Homepage = function (_AbstractPageView) {
		_inherits(Homepage, _AbstractPageView);
	
		function Homepage() {
			_classCallCheck(this, Homepage);
	
			var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this));
	
			_this.events = {
				'click': _this.onClick.bind(_this)
			};
	
			console.log('Homepage', _this);
			return _this;
		}
	
		_createClass(Homepage, [{
			key: 'onClick',
			value: function onClick() {
				console.log('onClick');
			}
		}]);
	
		return Homepage;
	}(_page2.default);
	
	exports.default = Homepage;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// LOCATION
	var HOMEPAGE = exports.HOMEPAGE = 'HOMEPAGE';
	var NEWS_PAGE = exports.NEWS_PAGE = 'NEWS';
	var NEWS_DETAILS_PAGE = exports.NEWS_DETAILS_PAGE = 'NEWS_DETAILS';

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import 'babel-polyfill';
	
	
	var _webpackZepto = __webpack_require__(14);
	
	var _webpackZepto2 = _interopRequireDefault(_webpackZepto);
	
	var _cast = __webpack_require__(24);
	
	var _cast2 = _interopRequireDefault(_cast);
	
	var _App = __webpack_require__(19);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Entry = function () {
		function Entry() {
			_classCallCheck(this, Entry);
	
			console.log('--- APP ---'); // @preserve eslint-disable-line no-console
			console.log('\n\n\n'); // @preserve eslint-disable-line no-console
			this.cast = null;
			this.app = null;
		}
	
		_createClass(Entry, [{
			key: 'init',
			value: function init() {
				var _this = this;
	
				this.cast = new _cast2.default();
				this.cast.init().then(function () {
					_this.app = new _App2.default();
					_this.app.init().then(function () {
						_this.app.layout.show();
					}).then(function () {
						console.log('showed!');
					});
				});
			}
		}]);
	
		return Entry;
	}();
	
	// initialize the APP do not make a global reference to it.
	
	
	var entry = module.exports = new Entry();
	(0, _webpackZepto2.default)(document).ready(entry.init.bind(entry));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _cast = __webpack_require__(17);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cast = function () {
		function Cast() {
			_classCallCheck(this, Cast);
	
			window.cast.receiver.logger.setLevelValue(0);
			this.receiverManager = window.cast.receiver.CastReceiverManager.getInstance();
			this.messageBus = null;
			this.initResolve = null;
		}
	
		_createClass(Cast, [{
			key: 'init',
			value: function init() {
				var _this = this;
	
				return new Promise(function (resolve, reject) {
					_this.initResolve = resolve;
	
					// bind events
					_this.receiverManager.onReady = _this._onReady.bind(_this);
					_this.receiverManager.onSenderConnected = _this._onSenderConnected.bind(_this);
					_this.receiverManager.onSenderDisconnected = _this._onSenderDisconnected.bind(_this);
					_this.receiverManager.onSystemVolumeChanged = _this._onSystemVolumeChanged.bind(_this);
	
					// create a CastMessageBus to handle messages for a custom namespace
					_this.messageBus = _this.receiverManager.getCastMessageBus('urn:x-cast:com.danetag.moodmixer');
					_this.messageBus.onMessage = _this._onMessage.bind(_this);
				});
			}
		}, {
			key: '_onReady',
			value: function _onReady(event) {
				console.log('Received Ready event: ' + JSON.stringify(event.data));
				this.receiverManager.setApplicationState('Application status is ready...');
				this.initResolve();
			}
		}, {
			key: '_onSenderConnected',
			value: function _onSenderConnected(event) {
				console.log('Received Sender Connected event: ' + event.data);
				console.log(this.receiverManager.getSender(event.data).userAgent);
			}
		}, {
			key: '_onSenderDisconnected',
			value: function _onSenderDisconnected(event) {
				console.log('Received Sender Disconnected event: ' + event.data);
				if (this.receiverManager.getSenders().length === 0) {
					window.close();
				}
			}
		}, {
			key: '_onSystemVolumeChanged',
			value: function _onSystemVolumeChanged(event) {
				console.log('Received System Volume Changed event: ' + event.data.level + ' ' + event.data.muted);
			}
		}, {
			key: '_onMessage',
			value: function _onMessage(event) {
				var eventObj = JSON.parse(event.data);
	
				switch (eventObj.action) {
					case 'welcome':
						(0, _cast.welcome)(eventObj.data);break;
					case 'error':
						(0, _cast.error)(eventObj.data);break;
					case 'playlist':
						(0, _cast.playlist)(eventObj.data);break;
					case 'preview':
						(0, _cast.preview)(eventObj.data);break;
					default:
						(0, _cast.message)(eventObj.data);break;
				}
	
				// display the message from the sender
				// displayText(data.text);
				// inform all senders on the CastMessageBus of the incoming message event
				// sender message listener will be invoked
				this.messageBus.send(event.senderId, event.data);
			}
		}]);
	
		return Cast;
	}();
	
	exports.default = Cast;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(11);
	
	var _reduxResponsive = __webpack_require__(2);
	
	var _ui = __webpack_require__(27);
	
	var _ui2 = _interopRequireDefault(_ui);
	
	var _location = __webpack_require__(26);
	
	var _location2 = _interopRequireDefault(_location);
	
	var _window = __webpack_require__(28);
	
	var _window2 = _interopRequireDefault(_window);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	  ui: _ui2.default,
	  location: _location2.default,
	  window: _window2.default,
	  browser: (0, _reduxResponsive.createResponsiveStateReducer)({
	    mobile: 640,
	    tablet: 768,
	    tabletH: 1024,
	    desktop: 1280,
	    desktopM: 1440,
	    desktopL: 1680,
	    desktopXL: 1920
	  }, {
	    extraFields: function extraFields() {
	      return {
	        width: _window2.default.innerWidth,
	        height: _window2.default.innerHeight
	      };
	    }
	  })
	});
	
	exports.default = rootReducer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = config;
	
	var _locations = __webpack_require__(22);
	
	var _homepage = __webpack_require__(21);
	
	var _homepage2 = _interopRequireDefault(_homepage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
		view: null
	};
	
	function config() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];
	
		switch (action.type) {
			case _locations.HOMEPAGE:
				{
					return Object.assign({}, state, {
						view: _homepage2.default
					});
				}
			case _locations.NEWS_PAGE:
				{
					return Object.assign({}, state, {
						view: _homepage2.default
					});
				}
			case _locations.NEWS_DETAIL_PAGE:
				{
					return Object.assign({}, state, {
						view: _homepage2.default
					});
				}
			default:
				{
					return state;
				}
		}
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = config;
	
	var _actionTypes = __webpack_require__(1);
	
	var initialState = {
		navOpen: false
	};
	
	function config() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];
	
		switch (action.type) {
			case _actionTypes.UI_NAV_SHOW:
				{
					return Object.assign({}, state, {
						navOpen: true
					});
				}
			case _actionTypes.UI_NAV_HIDE:
				{
					return Object.assign({}, state, {
						navOpen: false
					});
				}
			case _actionTypes.UI_NAV_TOGGLE:
				{
					var navOpen = state.navOpen;
	
					navOpen = !navOpen;
					return Object.assign({}, state, {
						navOpen: navOpen
					});
				}
			default:
				{
					return state;
				}
		}
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = config;
	
	var _actionTypes = __webpack_require__(1);
	
	var initialState = {
		scroll: {
			x: 0,
			y: 0
		},
		rafID: null
	};
	
	function config() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];
	
		switch (action.type) {
			case _actionTypes.SCROLL:
				{
					return Object.assign({}, state, {
						scroll: action.scroll
					});
				}
			case _actionTypes.RAF:
				{
					return Object.assign({}, state, {
						rafID: action.rafID
					});
				}
			default:
				{
					return state;
				}
		}
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(11);
	
	var _reducers = __webpack_require__(25);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reduxLogger = __webpack_require__(43);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxResponsive = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var USE_DEV_TOOLS = (true) && (true) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	
	function configureStore() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _options$initialState = options.initialState,
	      initialState = _options$initialState === undefined ? {} : _options$initialState;
	
	
	  var middlewares = [];
	
	  if (USE_DEV_TOOLS) {
	    middlewares.push((0, _reduxLogger2.default)());
	  }
	
	  var composeEnhancers = USE_DEV_TOOLS ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : _redux.compose;
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers(_reduxResponsive.responsiveStoreEnhancer, _redux.applyMiddleware.apply(undefined, middlewares)));
	
	  return store;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';
	
	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }
	
	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	
	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }
	
	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);
	
	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);
	
	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);
	
	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);
	
	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }
	
	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }
	
	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }
	
	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }
	
	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }
	
	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }
	
	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }
	
	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }
	
	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }
	
	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }
	
	  Object.defineProperties(accumulateDiff, {
	
	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });
	
	  return accumulateDiff;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(6),
	    getRawTag = __webpack_require__(34),
	    objectToString = __webpack_require__(35);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(36);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(6);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(32);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
	  'use strict';
	
	  /*istanbul ignore next:cant test*/
	  if (typeof module === 'object' && typeof module.exports === 'object') {
	    module.exports = factory();
	  } else if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    // Browser globals
	    root.objectPath = factory();
	  }
	})(this, function(){
	  'use strict';
	
	  var
	    toStr = Object.prototype.toString,
	    _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  function isEmpty(value){
	    if (!value) {
	      return true;
	    }
	    if (isArray(value) && value.length === 0) {
	        return true;
	    } else if (!isString(value)) {
	        for (var i in value) {
	            if (_hasOwnProperty.call(value, i)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    return false;
	  }
	
	  function toString(type){
	    return toStr.call(type);
	  }
	
	  function isNumber(value){
	    return typeof value === 'number' || toString(value) === "[object Number]";
	  }
	
	  function isString(obj){
	    return typeof obj === 'string' || toString(obj) === "[object String]";
	  }
	
	  function isObject(obj){
	    return typeof obj === 'object' && toString(obj) === "[object Object]";
	  }
	
	  function isArray(obj){
	    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
	  }
	
	  function isBoolean(obj){
	    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
	  }
	
	  function getKey(key){
	    var intKey = parseInt(key);
	    if (intKey.toString() === key) {
	      return intKey;
	    }
	    return key;
	  }
	
	  function set(obj, path, value, doNotReplace){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isString(path)) {
	      return set(obj, path.split('.').map(getKey), value, doNotReplace);
	    }
	    var currentPath = path[0];
	
	    if (path.length === 1) {
	      var oldVal = obj[currentPath];
	      if (oldVal === void 0 || !doNotReplace) {
	        obj[currentPath] = value;
	      }
	      return oldVal;
	    }
	
	    if (obj[currentPath] === void 0) {
	      //check if we assume an array
	      if(isNumber(path[1])) {
	        obj[currentPath] = [];
	      } else {
	        obj[currentPath] = {};
	      }
	    }
	
	    return set(obj[currentPath], path.slice(1), value, doNotReplace);
	  }
	
	  function del(obj, path) {
	    if (isNumber(path)) {
	      path = [path];
	    }
	
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if(isString(path)) {
	      return del(obj, path.split('.'));
	    }
	
	    var currentPath = getKey(path[0]);
	    var oldVal = obj[currentPath];
	
	    if(path.length === 1) {
	      if (oldVal !== void 0) {
	        if (isArray(obj)) {
	          obj.splice(currentPath, 1);
	        } else {
	          delete obj[currentPath];
	        }
	      }
	    } else {
	      if (obj[currentPath] !== void 0) {
	        return del(obj[currentPath], path.slice(1));
	      }
	    }
	
	    return obj;
	  }
	
	  var objectPath = function(obj) {
	    return Object.keys(objectPath).reduce(function(proxy, prop) {
	      if (typeof objectPath[prop] === 'function') {
	        proxy[prop] = objectPath[prop].bind(objectPath, obj);
	      }
	
	      return proxy;
	    }, {});
	  };
	
	  objectPath.has = function (obj, path) {
	    if (isEmpty(obj)) {
	      return false;
	    }
	
	    if (isNumber(path)) {
	      path = [path];
	    } else if (isString(path)) {
	      path = path.split('.');
	    }
	
	    if (isEmpty(path) || path.length === 0) {
	      return false;
	    }
	
	    for (var i = 0; i < path.length; i++) {
	      var j = path[i];
	      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
	        obj = obj[j];
	      } else {
	        return false;
	      }
	    }
	
	    return true;
	  };
	
	  objectPath.ensureExists = function (obj, path, value){
	    return set(obj, path, value, true);
	  };
	
	  objectPath.set = function (obj, path, value, doNotReplace){
	    return set(obj, path, value, doNotReplace);
	  };
	
	  objectPath.insert = function (obj, path, value, at){
	    var arr = objectPath.get(obj, path);
	    at = ~~at;
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	    arr.splice(at, 0, value);
	  };
	
	  objectPath.empty = function(obj, path) {
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return void 0;
	    }
	
	    var value, i;
	    if (!(value = objectPath.get(obj, path))) {
	      return obj;
	    }
	
	    if (isString(value)) {
	      return objectPath.set(obj, path, '');
	    } else if (isBoolean(value)) {
	      return objectPath.set(obj, path, false);
	    } else if (isNumber(value)) {
	      return objectPath.set(obj, path, 0);
	    } else if (isArray(value)) {
	      value.length = 0;
	    } else if (isObject(value)) {
	      for (i in value) {
	        if (_hasOwnProperty.call(value, i)) {
	          delete value[i];
	        }
	      }
	    } else {
	      return objectPath.set(obj, path, null);
	    }
	  };
	
	  objectPath.push = function (obj, path /*, values */){
	    var arr = objectPath.get(obj, path);
	    if (!isArray(arr)) {
	      arr = [];
	      objectPath.set(obj, path, arr);
	    }
	
	    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
	  };
	
	  objectPath.coalesce = function (obj, paths, defaultValue) {
	    var value;
	
	    for (var i = 0, len = paths.length; i < len; i++) {
	      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
	        return value;
	      }
	    }
	
	    return defaultValue;
	  };
	
	  objectPath.get = function (obj, path, defaultValue){
	    if (isNumber(path)) {
	      path = [path];
	    }
	    if (isEmpty(path)) {
	      return obj;
	    }
	    if (isEmpty(obj)) {
	      return defaultValue;
	    }
	    if (isString(path)) {
	      return objectPath.get(obj, path.split('.'), defaultValue);
	    }
	
	    var currentPath = getKey(path[0]);
	
	    if (path.length === 1) {
	      if (obj[currentPath] === void 0) {
	        return defaultValue;
	      }
	      return obj[currentPath];
	    }
	
	    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
	  };
	
	  objectPath.del = function(obj, path) {
	    return del(obj, path);
	  };
	
	  return objectPath;
	});


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.printBuffer = printBuffer;
	
	var _helpers = __webpack_require__(8);
	
	var _diff = __webpack_require__(42);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp,
	      duration = options.duration;
	
	
	  return function (action, time, took) {
	    var parts = ['action'];
	
	    if (timestamp) parts.push('@ ' + time);
	    parts.push(String(action.type));
	    if (duration) parts.push('(in ' + took.toFixed(2) + ' ms)');
	
	    return parts.join(' ');
	  };
	}
	
	function printBuffer(buffer, options) {
	  var logger = options.logger,
	      actionTransformer = options.actionTransformer,
	      _options$titleFormatt = options.titleFormatter,
	      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
	      collapsed = options.collapsed,
	      colors = options.colors,
	      level = options.level,
	      diff = options.diff;
	
	
	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started,
	        startedTime = logEntry.startedTime,
	        action = logEntry.action,
	        prevState = logEntry.prevState,
	        error = logEntry.error;
	    var took = logEntry.took,
	        nextState = logEntry.nextState;
	
	    var nextEntry = buffer[key + 1];
	
	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }
	
	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action, logEntry) : collapsed;
	
	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);
	
	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }
	
	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');
	
	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }
	
	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }
	
	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }
	
	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }
	
	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }
	
	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('\u2014\u2014 log end \u2014\u2014');
	    }
	  });
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,
	
	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;
	
	var _deepDiff = __webpack_require__(30);
	
	var _deepDiff2 = _interopRequireDefault(_deepDiff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};
	
	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}
	
	function render(diff) {
	  var kind = diff.kind,
	      path = diff.path,
	      lhs = diff.lhs,
	      rhs = diff.rhs,
	      index = diff.index,
	      item = diff.item;
	
	
	  switch (kind) {
	    case 'E':
	      return [path.join('.'), lhs, '\u2192', rhs];
	    case 'N':
	      return [path.join('.'), rhs];
	    case 'D':
	      return [path.join('.')];
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return [];
	  }
	}
	
	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);
	
	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }
	
	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;
	
	      var output = render(elem);
	
	      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
	    });
	  } else {
	    logger.log('\u2014\u2014 no diff \u2014\u2014');
	  }
	
	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _core = __webpack_require__(40);
	
	var _helpers = __webpack_require__(8);
	
	var _defaults = __webpack_require__(41);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var loggerOptions = _extends({}, _defaults2.default, options);
	
	  var logger = loggerOptions.logger,
	      transformer = loggerOptions.transformer,
	      stateTransformer = loggerOptions.stateTransformer,
	      errorTransformer = loggerOptions.errorTransformer,
	      predicate = loggerOptions.predicate,
	      logErrors = loggerOptions.logErrors,
	      diffPredicate = loggerOptions.diffPredicate;
	
	  // Return if 'console' object is not defined
	
	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }
	
	  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
	  if (options.getState && options.dispatch) {
	    // eslint-disable-next-line no-console
	    console.error('redux-logger not installed. Make sure to pass logger instance as middleware:\n\nimport createLogger from \'redux-logger\';\n\nconst logger = createLogger();\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n);');
	
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  var logBuffer = [];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = void 0;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;
	
	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var getValue = __webpack_require__(39).get
	
	function defaultCompare (a, b) {
	  return a === b
	}
	
	function watch (getState, objectPath, compare) {
	  compare = compare || defaultCompare
	  var currentValue = getValue(getState(), objectPath)
	  return function w (fn) {
	    return function () {
	      var newValue = getValue(getState(), objectPath)
	      if (!compare(currentValue, newValue)) {
	        var oldValue = currentValue
	        currentValue = newValue
	        fn(newValue, oldValue, objectPath)
	      }
	    }
	  }
	}
	
	module.exports = watch


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(9);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(10);
	
	var _isPlainObject = __webpack_require__(7);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(12);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (true) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49);


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(50);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(51)(module)))

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map