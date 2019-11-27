(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["projectstorm/react-diagrams-gemoetry"] = factory();
	else
		root["projectstorm/react-diagrams-gemoetry"] = factory();
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
__export(__webpack_require__(/*! ./src/Point */ "./src/Point.ts"));
__export(__webpack_require__(/*! ./src/Polygon */ "./src/Polygon.ts"));
__export(__webpack_require__(/*! ./src/Rectangle */ "./src/Rectangle.ts"));
__export(__webpack_require__(/*! ./src/BezierCurve */ "./src/BezierCurve.ts"));


/***/ }),

/***/ "./src/BezierCurve.ts":
/*!****************************!*\
  !*** ./src/BezierCurve.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
const Polygon_1 = __webpack_require__(/*! ./Polygon */ "./src/Polygon.ts");
var BezierCurvepPoints;
(function (BezierCurvepPoints) {
    BezierCurvepPoints[BezierCurvepPoints["SOURCE"] = 0] = "SOURCE";
    BezierCurvepPoints[BezierCurvepPoints["SOURCE_CONTROL"] = 1] = "SOURCE_CONTROL";
    BezierCurvepPoints[BezierCurvepPoints["TARGET_CONTROL"] = 2] = "TARGET_CONTROL";
    BezierCurvepPoints[BezierCurvepPoints["TARGET"] = 3] = "TARGET";
})(BezierCurvepPoints = exports.BezierCurvepPoints || (exports.BezierCurvepPoints = {}));
class BezierCurve extends Polygon_1.Polygon {
    constructor() {
        super([new Point_1.Point(0, 0), new Point_1.Point(0, 0), new Point_1.Point(0, 0), new Point_1.Point(0, 0)]);
    }
    getSVGCurve() {
        return `M${this.getSource().toSVG()} C${this.getSourceControl().toSVG()}, ${this.getTargetControl().toSVG()}, ${this.getTarget().toSVG()}`;
    }
    setPoints(points) {
        if (points.length !== 4) {
            throw new Error('BezierCurve must have extactly 4 points');
        }
        super.setPoints(points);
    }
    getSource() {
        return this.points[BezierCurvepPoints.SOURCE];
    }
    getSourceControl() {
        return this.points[BezierCurvepPoints.SOURCE_CONTROL];
    }
    getTargetControl() {
        return this.points[BezierCurvepPoints.TARGET_CONTROL];
    }
    getTarget() {
        return this.points[BezierCurvepPoints.TARGET];
    }
    setSource(point) {
        this.points[BezierCurvepPoints.SOURCE] = point;
    }
    setSourceControl(point) {
        this.points[BezierCurvepPoints.SOURCE_CONTROL] = point;
    }
    setTargetControl(point) {
        this.points[BezierCurvepPoints.TARGET_CONTROL] = point;
    }
    setTarget(point) {
        this.points[BezierCurvepPoints.TARGET] = point;
    }
}
exports.BezierCurve = BezierCurve;


/***/ }),

/***/ "./src/Point.ts":
/*!**********************!*\
  !*** ./src/Point.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mathjs = __webpack_require__(/*! mathjs */ "mathjs");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    translate(x, y) {
        this.x += x;
        this.y += y;
    }
    clone() {
        return new Point(this.x, this.y);
    }
    toSVG() {
        return this.x + ' ' + this.y;
    }
    asMatrix() {
        return mathjs.matrix([[this.x], [this.y], [1]]);
    }
    transform(matrix) {
        let final = mathjs.multiply(matrix, this.asMatrix());
        this.x = final.get([0, 0]);
        this.y = final.get([1, 0]);
    }
    static middlePoint(pointA, pointB) {
        return new Point((pointB.x + pointA.x) / 2, (pointB.y + pointA.y) / 2);
    }
    static multiply(...matrices) {
        let m = matrices[0];
        for (let i = 1; i < matrices.length; i++) {
            m = mathjs.multiply(m, matrices[i]);
        }
        return m;
    }
    static scaleMatrix(x, y) {
        return mathjs.matrix([[x, 0, 0], [0, y, 0], [0, 0, 1]]);
    }
    static translateMatrix(x, y) {
        return mathjs.matrix([[1, 0, x], [0, 1, y], [0, 0, 1]]);
    }
    static rotateMatrix(deg) {
        return mathjs.matrix([[Math.cos(deg), -1 * Math.sin(deg), 0], [Math.sin(deg), Math.cos(deg), 0], [0, 0, 1]]);
    }
    static createScaleMatrix(x, y, origin) {
        return this.multiply(Point.translateMatrix(origin.x, origin.y), Point.scaleMatrix(x, y), Point.translateMatrix(-origin.x, -origin.y));
    }
    static createRotateMatrix(deg, origin) {
        return this.multiply(Point.translateMatrix(origin.x, origin.y), Point.rotateMatrix(deg), Point.translateMatrix(-origin.x, -origin.y));
    }
}
exports.Point = Point;


/***/ }),

/***/ "./src/Polygon.ts":
/*!************************!*\
  !*** ./src/Polygon.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
class Polygon {
    constructor(points = []) {
        this.points = points;
    }
    serialize() {
        return _.map(this.points, point => {
            return [point.x, point.y];
        });
    }
    deserialize(data) {
        this.points = _.map(data, point => {
            return new Point_1.Point(point[0], point[1]);
        });
    }
    scale(x, y, origin) {
        let matrix = Point_1.Point.createScaleMatrix(x, y, origin);
        _.forEach(this.points, point => {
            point.transform(matrix);
        });
    }
    transform(matrix) {
        _.forEach(this.points, point => {
            point.transform(matrix);
        });
    }
    setPoints(points) {
        this.points = points;
    }
    getPoints() {
        return this.points;
    }
    rotate(degrees) {
        this.transform(Point_1.Point.createRotateMatrix(degrees / (180 / Math.PI), this.getOrigin()));
    }
    translate(offsetX, offsetY) {
        _.forEach(this.points, point => {
            point.translate(offsetX, offsetY);
        });
    }
    doClone(ob) {
        this.points = _.map(ob.points, point => {
            return point.clone();
        });
    }
    clone() {
        let ob = Object.create(this);
        ob.doClone(this);
        return ob;
    }
    getOrigin() {
        if (this.points.length === 0) {
            return null;
        }
        let dimensions = this.getBoundingBox();
        return Point_1.Point.middlePoint(dimensions.getTopLeft(), dimensions.getBottomRight());
    }
    static boundingBoxFromPolygons(polygons) {
        return Polygon.boundingBoxFromPoints(_.flatMap(polygons, polygon => {
            return polygon.getPoints();
        }));
    }
    static boundingBoxFromPoints(points) {
        if (points.length === 0) {
            return new Rectangle_1.Rectangle(0, 0, 0, 0);
        }
        let minX = points[0].x;
        let maxX = points[0].x;
        let minY = points[0].y;
        let maxY = points[0].y;
        for (let i = 1; i < points.length; i++) {
            if (points[i].x < minX) {
                minX = points[i].x;
            }
            if (points[i].x > maxX) {
                maxX = points[i].x;
            }
            if (points[i].y < minY) {
                minY = points[i].y;
            }
            if (points[i].y > maxY) {
                maxY = points[i].y;
            }
        }
        return new Rectangle_1.Rectangle(new Point_1.Point(minX, minY), new Point_1.Point(maxX, minY), new Point_1.Point(maxX, maxY), new Point_1.Point(minX, maxY));
    }
    getBoundingBox() {
        let minX = this.points[0].x;
        let maxX = this.points[0].x;
        let minY = this.points[0].y;
        let maxY = this.points[0].y;
        for (let i = 1; i < this.points.length; i++) {
            if (this.points[i].x < minX) {
                minX = this.points[i].x;
            }
            if (this.points[i].x > maxX) {
                maxX = this.points[i].x;
            }
            if (this.points[i].y < minY) {
                minY = this.points[i].y;
            }
            if (this.points[i].y > maxY) {
                maxY = this.points[i].y;
            }
        }
        return new Rectangle_1.Rectangle(new Point_1.Point(minX, minY), new Point_1.Point(maxX, minY), new Point_1.Point(maxX, maxY), new Point_1.Point(minX, maxY));
    }
}
exports.Polygon = Polygon;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./src/Rectangle.ts");


/***/ }),

/***/ "./src/Rectangle.ts":
/*!**************************!*\
  !*** ./src/Rectangle.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __webpack_require__(/*! ./Point */ "./src/Point.ts");
const Polygon_1 = __webpack_require__(/*! ./Polygon */ "./src/Polygon.ts");
class Rectangle extends Polygon_1.Polygon {
    constructor(a = 0, b = 0, c = 0, d = 0) {
        if (a instanceof Point_1.Point && b instanceof Point_1.Point && c instanceof Point_1.Point && d instanceof Point_1.Point) {
            super([a, b, c, d]);
        }
        else if (a instanceof Point_1.Point) {
            super([a, new Point_1.Point(a.x + b, a.y), new Point_1.Point(a.x + b, a.y + c), new Point_1.Point(a.x, a.y + c)]);
        }
        else {
            super(Rectangle.pointsFromBounds(a, b, c, d));
        }
    }
    static pointsFromBounds(x, y, width, height) {
        return [new Point_1.Point(x, y), new Point_1.Point(x + width, y), new Point_1.Point(x + width, y + height), new Point_1.Point(x, y + height)];
    }
    updateDimensions(x, y, width, height) {
        this.points = Rectangle.pointsFromBounds(x, y, width, height);
    }
    setPoints(points) {
        if (points.length !== 4) {
            throw 'Rectangles must always have 4 points';
        }
        super.setPoints(points);
    }
    containsPoint(point) {
        const tl = this.getTopLeft();
        const br = this.getBottomRight();
        return point.x >= tl.x && point.x <= br.x && point.y >= tl.y && point.y <= br.y;
    }
    getWidth() {
        return Math.sqrt(Math.pow(this.getTopLeft().x - this.getTopRight().x, 2) + Math.pow(this.getTopLeft().y - this.getTopRight().y, 2));
    }
    getHeight() {
        return Math.sqrt(Math.pow(this.getBottomLeft().x - this.getTopLeft().x, 2) +
            Math.pow(this.getBottomLeft().y - this.getTopLeft().y, 2));
    }
    getTopMiddle() {
        return Point_1.Point.middlePoint(this.getTopLeft(), this.getTopRight());
    }
    getBottomMiddle() {
        return Point_1.Point.middlePoint(this.getBottomLeft(), this.getBottomRight());
    }
    getLeftMiddle() {
        return Point_1.Point.middlePoint(this.getBottomLeft(), this.getTopLeft());
    }
    getRightMiddle() {
        return Point_1.Point.middlePoint(this.getBottomRight(), this.getTopRight());
    }
    getTopLeft() {
        return this.points[0];
    }
    getTopRight() {
        return this.points[1];
    }
    getBottomRight() {
        return this.points[2];
    }
    getBottomLeft() {
        return this.points[3];
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "mathjs":
/*!*************************!*\
  !*** external "mathjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mathjs");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map