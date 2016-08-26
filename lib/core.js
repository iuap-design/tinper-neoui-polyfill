(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ex = undefined;

	var _extend = __webpack_require__(1);

	var polyfill = true; /**
	                      * Created by dingrf on 2015-11-18.
	                      */

	var _addClass = function _addClass(element, value) {
	    var classes,
	        cur,
	        clazz,
	        i,
	        finalValue,
	        rclass = /[\t\r\n\f]/g,
	        proceed = typeof value === "string" && value,
	        rnotwhite = /\S+/g;

	    if (proceed) {
	        // The disjunction here is for better compressibility (see removeClass)
	        classes = (value || "").match(rnotwhite) || [];

	        cur = element.nodeType === 1 && (element.className ? (" " + element.className + " ").replace(rclass, " ") : " ");
	        if (cur) {
	            i = 0;
	            while (clazz = classes[i++]) {
	                if (cur.indexOf(" " + clazz + " ") < 0) {
	                    cur += clazz + " ";
	                }
	            }
	            // only assign if different to avoid unneeded rendering.
	            finalValue = (cur + "").trim();
	            if (element.className !== finalValue) {
	                element.className = finalValue;
	            }
	        }
	    }
	    return this;
	};

	var _removeClass = function _removeClass(element, value) {
	    var classes,
	        cur,
	        clazz,
	        j,
	        finalValue,
	        rnotwhite = /\S+/g,
	        rclass = /[\t\r\n\f]/g,
	        proceed = arguments.length === 0 || typeof value === "string" && value;

	    if (proceed) {
	        classes = (value || "").match(rnotwhite) || [];

	        // This expression is here for better compressibility (see addClass)
	        cur = element.nodeType === 1 && (element.className ? (" " + element.className + " ").replace(rclass, " ") : "");
	        if (cur) {
	            j = 0;
	            while (clazz = classes[j++]) {
	                // Remove *all* instances
	                while (cur.indexOf(" " + clazz + " ") >= 0) {
	                    cur = cur.replace(" " + clazz + " ", " ");
	                }
	            }

	            // only assign if different to avoid unneeded rendering.
	            finalValue = value ? (cur + "").trim() : "";
	            if (element.className !== finalValue) {
	                element.className = finalValue;
	            }
	        }
	    }
	    return this;
	};

	var _hasClass = function _hasClass(element, value) {
	    var rclass = /[\t\r\n\f]/g;
	    if (element.nodeType === 1 && (" " + element.className + " ").replace(rclass, " ").indexOf(value) >= 0) {
	        return true;
	    }
	    return false;
	};

	var _toggleClass = function _toggleClass(element, value) {
	    if (_hasClass(element, value)) {
	        _removeClass(element, value);
	    } else {
	        _addClass(element, value);
	    }
	};

	var ex = {
	    polyfill: polyfill,
	    _addClass: _addClass,
	    _removeClass: _removeClass,
	    _hasClass: _hasClass,
	    _toggleClass: _toggleClass
	};

	(0, _extend.extend)(ex, window.u || {});
	window.u = ex;

	exports.ex = ex;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.extend = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Module : Sparrow extend
	                                                                                                                                                                                                                                                   * Author : Kvkens(yueming@yonyou.com)
	                                                                                                                                                                                                                                                   * Date	  : 2016-07-27 21:46:50
	                                                                                                                                                                                                                                                   */

	var _enumerables = __webpack_require__(2);

	/**
	 * 复制对象属性
	 *
	 * @param {Object}  目标对象
	 * @param {config} 源对象
	 */
	var extend = function extend(object, config) {
		var args = arguments,
		    options;
		if (args.length > 1) {
			for (var len = 1; len < args.length; len++) {
				options = args[len];
				if (object && options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					var i, j, k;
					for (i in options) {
						object[i] = options[i];
					}
					if (_enumerables.enumerables) {
						for (j = _enumerables.enumerables.length; j--;) {
							k = _enumerables.enumerables[j];
							if (options.hasOwnProperty && options.hasOwnProperty(k)) {
								object[k] = options[k];
							}
						}
					}
				}
			}
		}
		return object;
	};

	exports.extend = extend;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Module : Sparrow extend enum
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-07-27 21:46:50
	 */

	var U_LANGUAGES = "i_languages";
	var U_THEME = "u_theme";
	var U_LOCALE = "u_locale";
	var U_USERCODE = "usercode";

	var enumerables = true,
	    enumerablesTest = {
		toString: 1
	},
	    toString = Object.prototype.toString;
	for (var i in enumerablesTest) {
		exports.enumerables = enumerables = null;
	}
	if (enumerables) {
		exports.enumerables = enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];
	}

	exports.enumerables = enumerables;
	exports.U_LANGUAGES = U_LANGUAGES;
	exports.U_THEME = U_THEME;
	exports.U_LOCALE = U_LOCALE;
	exports.U_USERCODE = U_USERCODE;

/***/ }
/******/ ])
});
;