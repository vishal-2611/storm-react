(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["projectstorm/react-diagrams"] = factory();
	else
		root["projectstorm/react-diagrams"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const react_diagrams_defaults_1 = __webpack_require__(/*! @projectstorm/react-diagrams-defaults */ "@projectstorm/react-diagrams-defaults");
const react_diagrams_routing_1 = __webpack_require__(/*! @projectstorm/react-diagrams-routing */ "@projectstorm/react-diagrams-routing");
const react_canvas_core_1 = __webpack_require__(/*! @projectstorm/react-canvas-core */ "@projectstorm/react-canvas-core");
__export(__webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core"));
__export(__webpack_require__(/*! @projectstorm/react-diagrams-defaults */ "@projectstorm/react-diagrams-defaults"));
__export(__webpack_require__(/*! @projectstorm/react-diagrams-routing */ "@projectstorm/react-diagrams-routing"));
/**
 * Construct an engine with the defaults installed
 */
exports.default = (options = {}) => {
    const engine = new react_diagrams_core_1.DiagramEngine(options);
    // register model factories
    engine.getLayerFactories().registerFactory(new react_diagrams_core_1.NodeLayerFactory());
    engine.getLayerFactories().registerFactory(new react_diagrams_core_1.LinkLayerFactory());
    engine.getLayerFactories().registerFactory(new react_canvas_core_1.SelectionBoxLayerFactory());
    engine.getLabelFactories().registerFactory(new react_diagrams_defaults_1.DefaultLabelFactory());
    engine.getNodeFactories().registerFactory(new react_diagrams_defaults_1.DefaultNodeFactory()); // i cant figure out why
    engine.getLinkFactories().registerFactory(new react_diagrams_defaults_1.DefaultLinkFactory());
    engine.getLinkFactories().registerFactory(new react_diagrams_routing_1.PathFindingLinkFactory());
    engine.getPortFactories().registerFactory(new react_diagrams_defaults_1.DefaultPortFactory());
    // register the default interaction behaviours
    engine.getStateMachine().pushState(new react_diagrams_core_1.DefaultDiagramState());
    return engine;
};


/***/ }),

/***/ "@projectstorm/react-canvas-core":
/*!**************************************************!*\
  !*** external "@projectstorm/react-canvas-core" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@projectstorm/react-canvas-core");

/***/ }),

/***/ "@projectstorm/react-diagrams-core":
/*!****************************************************!*\
  !*** external "@projectstorm/react-diagrams-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@projectstorm/react-diagrams-core");

/***/ }),

/***/ "@projectstorm/react-diagrams-defaults":
/*!********************************************************!*\
  !*** external "@projectstorm/react-diagrams-defaults" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@projectstorm/react-diagrams-defaults");

/***/ }),

/***/ "@projectstorm/react-diagrams-routing":
/*!*******************************************************!*\
  !*** external "@projectstorm/react-diagrams-routing" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@projectstorm/react-diagrams-routing");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map