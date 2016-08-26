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
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by dingrf on 2015-11-18.
	 */

	var polyfill = true;
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

	extend(ex, window.u || {});
	window.u = ex;

	exports.ex = ex;

/***/ }
/******/ ])
});
;