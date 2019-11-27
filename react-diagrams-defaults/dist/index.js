(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["projectstorm/react-diagrams-defaults"] = factory();
	else
		root["projectstorm/react-diagrams-defaults"] = factory();
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
__export(__webpack_require__(/*! ./src/label/DefaultLabelFactory */ "./src/label/DefaultLabelFactory.tsx"));
__export(__webpack_require__(/*! ./src/label/DefaultLabelModel */ "./src/label/DefaultLabelModel.tsx"));
__export(__webpack_require__(/*! ./src/label/DefaultLabelWidget */ "./src/label/DefaultLabelWidget.tsx"));
__export(__webpack_require__(/*! ./src/link/DefaultLinkFactory */ "./src/link/DefaultLinkFactory.tsx"));
__export(__webpack_require__(/*! ./src/link/DefaultLinkModel */ "./src/link/DefaultLinkModel.ts"));
__export(__webpack_require__(/*! ./src/link/DefaultLinkWidget */ "./src/link/DefaultLinkWidget.tsx"));
__export(__webpack_require__(/*! ./src/link/DefaultLinkSegmentWidget */ "./src/link/DefaultLinkSegmentWidget.tsx"));
__export(__webpack_require__(/*! ./src/link/DefaultLinkPointWidget */ "./src/link/DefaultLinkPointWidget.tsx"));
__export(__webpack_require__(/*! ./src/node/DefaultNodeFactory */ "./src/node/DefaultNodeFactory.tsx"));
__export(__webpack_require__(/*! ./src/node/DefaultNodeModel */ "./src/node/DefaultNodeModel.ts"));
__export(__webpack_require__(/*! ./src/node/DefaultNodeWidget */ "./src/node/DefaultNodeWidget.tsx"));
__export(__webpack_require__(/*! ./src/port/DefaultPortFactory */ "./src/port/DefaultPortFactory.tsx"));
__export(__webpack_require__(/*! ./src/port/DefaultPortLabelWidget */ "./src/port/DefaultPortLabelWidget.tsx"));
__export(__webpack_require__(/*! ./src/port/DefaultPortModel */ "./src/port/DefaultPortModel.ts"));


/***/ }),

/***/ "./src/label/DefaultLabelFactory.tsx":
/*!*******************************************!*\
  !*** ./src/label/DefaultLabelFactory.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const DefaultLabelModel_1 = __webpack_require__(/*! ./DefaultLabelModel */ "./src/label/DefaultLabelModel.tsx");
const DefaultLabelWidget_1 = __webpack_require__(/*! ./DefaultLabelWidget */ "./src/label/DefaultLabelWidget.tsx");
const react_canvas_core_1 = __webpack_require__(/*! @projectstorm/react-canvas-core */ "@projectstorm/react-canvas-core");
/**
 * @author Dylan Vorster
 */
class DefaultLabelFactory extends react_canvas_core_1.AbstractReactFactory {
    constructor() {
        super('default');
    }
    generateReactWidget(event) {
        return React.createElement(DefaultLabelWidget_1.DefaultLabelWidget, { model: event.model });
    }
    generateModel(event) {
        return new DefaultLabelModel_1.DefaultLabelModel();
    }
}
exports.DefaultLabelFactory = DefaultLabelFactory;


/***/ }),

/***/ "./src/label/DefaultLabelModel.tsx":
/*!*****************************************!*\
  !*** ./src/label/DefaultLabelModel.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
class DefaultLabelModel extends react_diagrams_core_1.LabelModel {
    constructor(options = {}) {
        super(Object.assign({}, options, { offsetY: options.offsetY == null ? -23 : options.offsetY, type: 'default' }));
    }
    setLabel(label) {
        this.options.label = label;
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.label = event.data.label;
    }
    serialize() {
        return Object.assign({}, super.serialize(), { label: this.options.label });
    }
}
exports.DefaultLabelModel = DefaultLabelModel;


/***/ }),

/***/ "./src/label/DefaultLabelWidget.tsx":
/*!******************************************!*\
  !*** ./src/label/DefaultLabelWidget.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
var S;
(function (S) {
    S.Label = styled_1.default.div `
		background: rgba(0, 0, 0, 0.8);
		border-radius: 5px;
		color: white;
		font-size: 12px;
		padding: 4px 8px;
		font-family: sans-serif;
		user-select: none;
	`;
})(S || (S = {}));
class DefaultLabelWidget extends React.Component {
    render() {
        return React.createElement(S.Label, null, this.props.model.getOptions().label);
    }
}
exports.DefaultLabelWidget = DefaultLabelWidget;


/***/ }),

/***/ "./src/link/DefaultLinkFactory.tsx":
/*!*****************************************!*\
  !*** ./src/link/DefaultLinkFactory.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const DefaultLinkModel_1 = __webpack_require__(/*! ./DefaultLinkModel */ "./src/link/DefaultLinkModel.ts");
const DefaultLinkWidget_1 = __webpack_require__(/*! ./DefaultLinkWidget */ "./src/link/DefaultLinkWidget.tsx");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
const core_1 = __webpack_require__(/*! @emotion/core */ "@emotion/core");
const react_canvas_core_1 = __webpack_require__(/*! @projectstorm/react-canvas-core */ "@projectstorm/react-canvas-core");
var S;
(function (S) {
    S.Keyframes = core_1.keyframes `
		from {
			stroke-dashoffset: 24;
		}
		to {
			stroke-dashoffset: 0;
		}
	`;
    const selected = core_1.css `
		stroke-dasharray: 10, 2;
		animation: ${S.Keyframes} 1s linear infinite;
	`;
    S.Path = styled_1.default.path `
		${p => p.selected && selected};
		fill: none;
		pointer-events: all;
	`;
})(S || (S = {}));
class DefaultLinkFactory extends react_canvas_core_1.AbstractReactFactory {
    constructor(type = 'default') {
        super(type);
    }
    generateReactWidget(event) {
        return React.createElement(DefaultLinkWidget_1.DefaultLinkWidget, { link: event.model, diagramEngine: this.engine });
    }
    generateModel(event) {
        return new DefaultLinkModel_1.DefaultLinkModel();
    }
    generateLinkSegment(model, selected, path) {
        return (React.createElement("g", null,
            React.createElement("defs", null,
                React.createElement("marker", { id: "arrow", markerWidth: "100", markerHeight: "100", refX: "6", refY: "2", orient: "auto", markerUnits: "stroke-width" },
                    React.createElement("path", { className: "arrow", d: "M0,0 V4 L2,2 Z", fill: "red" }))),
            React.createElement(S.Path, { selected: selected, stroke: selected ? model.getOptions().selectedColor : model.getOptions().color, strokeWidth: model.getOptions().width, d: path })));
    }
}
exports.DefaultLinkFactory = DefaultLinkFactory;


/***/ }),

/***/ "./src/link/DefaultLinkModel.ts":
/*!**************************************!*\
  !*** ./src/link/DefaultLinkModel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const DefaultLabelModel_1 = __webpack_require__(/*! ../label/DefaultLabelModel */ "./src/label/DefaultLabelModel.tsx");
const geometry_1 = __webpack_require__(/*! @projectstorm/geometry */ "@projectstorm/geometry");
class DefaultLinkModel extends react_diagrams_core_1.LinkModel {
    constructor(options = {}) {
        super(Object.assign({ type: 'default', width: options.width || 3, color: options.color || 'gray', selectedColor: options.selectedColor || 'rgb(0,192,255)', curvyness: 50 }, options));
    }
    calculateControlOffset(port) {
        if (port.getOptions().alignment === react_diagrams_core_1.PortModelAlignment.RIGHT) {
            return [this.options.curvyness, 0];
        }
        else if (port.getOptions().alignment === react_diagrams_core_1.PortModelAlignment.LEFT) {
            return [-this.options.curvyness, 0];
        }
        else if (port.getOptions().alignment === react_diagrams_core_1.PortModelAlignment.TOP) {
            return [0, -this.options.curvyness];
        }
        return [0, this.options.curvyness];
    }
    getSVGPath() {
        if (this.points.length == 2) {
            const curve = new geometry_1.BezierCurve();
            curve.setSource(this.getFirstPoint().getPosition());
            curve.setTarget(this.getLastPoint().getPosition());
            curve.setSourceControl(this.getFirstPoint()
                .getPosition()
                .clone());
            curve.setTargetControl(this.getLastPoint()
                .getPosition()
                .clone());
            if (this.sourcePort) {
                curve.getSourceControl().translate(...this.calculateControlOffset(this.getSourcePort()));
            }
            if (this.targetPort) {
                curve.getTargetControl().translate(...this.calculateControlOffset(this.getTargetPort()));
            }
            return curve.getSVGCurve();
        }
    }
    serialize() {
        return Object.assign({}, super.serialize(), { width: this.options.width, color: this.options.color, curvyness: this.options.curvyness, selectedColor: this.options.selectedColor });
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.color = event.data.color;
        this.options.width = event.data.width;
        this.options.curvyness = event.data.curvyness;
        this.options.selectedColor = event.data.selectedColor;
    }
    addLabel(label) {
        if (label instanceof react_diagrams_core_1.LabelModel) {
            return super.addLabel(label);
        }
        let labelOb = new DefaultLabelModel_1.DefaultLabelModel();
        labelOb.setLabel(label);
        return super.addLabel(labelOb);
    }
    setWidth(width) {
        this.options.width = width;
        this.fireEvent({ width }, 'widthChanged');
    }
    setColor(color) {
        this.options.color = color;
        this.fireEvent({ color }, 'colorChanged');
    }
}
exports.DefaultLinkModel = DefaultLinkModel;


/***/ }),

/***/ "./src/link/DefaultLinkPointWidget.tsx":
/*!*********************************************!*\
  !*** ./src/link/DefaultLinkPointWidget.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
var S;
(function (S) {
    S.PointTop = styled_1.default.circle `
		pointer-events: all;
	`;
})(S || (S = {}));
class DefaultLinkPointWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }
    render() {
        const { point } = this.props;
        return (React.createElement("g", null,
            React.createElement("circle", { cx: point.getPosition().x, cy: point.getPosition().y, r: 5, fill: this.state.selected || this.props.point.isSelected() ? this.props.colorSelected : this.props.color }),
            React.createElement(S.PointTop, { className: "point", onMouseLeave: () => {
                    this.setState({ selected: false });
                }, onMouseEnter: () => {
                    this.setState({ selected: true });
                }, "data-id": point.getID(), "data-linkid": point.getLink().getID(), cx: point.getPosition().x, cy: point.getPosition().y, r: 15, opacity: 0.0 })));
    }
}
exports.DefaultLinkPointWidget = DefaultLinkPointWidget;


/***/ }),

/***/ "./src/link/DefaultLinkSegmentWidget.tsx":
/*!***********************************************!*\
  !*** ./src/link/DefaultLinkSegmentWidget.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class DefaultLinkSegmentWidget extends React.Component {
    render() {
        const Bottom = React.cloneElement(this.props.factory.generateLinkSegment(this.props.link, this.props.selected || this.props.link.isSelected(), this.props.path), {
            ref: this.props.forwardRef
        });
        const Top = React.cloneElement(Bottom, Object.assign({ strokeLinecap: 'round', onMouseLeave: () => {
                this.props.onSelection(false);
            }, onMouseEnter: () => {
                this.props.onSelection(true);
            } }, this.props.extras, { ref: null, 'data-linkid': this.props.link.getID(), strokeOpacity: this.props.selected ? 0.1 : 0, strokeWidth: 20, fill: 'none', onContextMenu: () => {
                if (!this.props.link.isLocked()) {
                    event.preventDefault();
                    this.props.link.remove();
                }
            } }));
        return (React.createElement("g", null,
            Bottom,
            Top));
    }
}
exports.DefaultLinkSegmentWidget = DefaultLinkSegmentWidget;


/***/ }),

/***/ "./src/link/DefaultLinkWidget.tsx":
/*!****************************************!*\
  !*** ./src/link/DefaultLinkWidget.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const DefaultLinkPointWidget_1 = __webpack_require__(/*! ./DefaultLinkPointWidget */ "./src/link/DefaultLinkPointWidget.tsx");
const DefaultLinkSegmentWidget_1 = __webpack_require__(/*! ./DefaultLinkSegmentWidget */ "./src/link/DefaultLinkSegmentWidget.tsx");
class DefaultLinkWidget extends React.Component {
    constructor(props) {
        super(props);
        this.refPaths = [];
        this.state = {
            selected: false
        };
    }
    componentDidUpdate() {
        this.props.link.setRenderedPaths(this.refPaths.map(ref => {
            return ref.current;
        }));
    }
    componentDidMount() {
        this.props.link.setRenderedPaths(this.refPaths.map(ref => {
            return ref.current;
        }));
    }
    componentWillUnmount() {
        this.props.link.setRenderedPaths([]);
    }
    addPointToLink(event, index) {
        if (!event.shiftKey &&
            !this.props.link.isLocked() &&
            this.props.link.getPoints().length - 1 <= this.props.diagramEngine.getMaxNumberPointsPerLink()) {
            const point = new react_diagrams_core_1.PointModel({
                link: this.props.link,
                position: this.props.diagramEngine.getRelativeMousePoint(event)
            });
            this.props.link.addPoint(point, index);
            event.persist();
            event.stopPropagation();
            this.forceUpdate(() => {
                this.props.diagramEngine.getActionEventBus().fireAction({
                    event,
                    model: point
                });
            });
        }
    }
    generatePoint(point) {
        return (React.createElement(DefaultLinkPointWidget_1.DefaultLinkPointWidget, { key: point.getID(), point: point, colorSelected: this.props.link.getOptions().selectedColor, color: this.props.link.getOptions().color }));
    }
    generateLink(path, extraProps, id) {
        const ref = React.createRef();
        this.refPaths.push(ref);
        return (React.createElement(DefaultLinkSegmentWidget_1.DefaultLinkSegmentWidget, { key: `link-${id}`, path: path, selected: this.state.selected, diagramEngine: this.props.diagramEngine, factory: this.props.diagramEngine.getFactoryForLink(this.props.link), link: this.props.link, forwardRef: ref, onSelection: selected => {
                this.setState({ selected: selected });
            }, extras: extraProps }));
    }
    render() {
        //ensure id is present for all points on the path
        var points = this.props.link.getPoints();
        var paths = [];
        this.refPaths = [];
        if (points.length === 2) {
            paths.push(this.generateLink(this.props.link.getSVGPath(), {
                onMouseDown: event => {
                    this.addPointToLink(event, 1);
                }
            }, '0'));
            // draw the link as dangeling
            if (this.props.link.getTargetPort() == null) {
                paths.push(this.generatePoint(points[1]));
            }
        }
        else {
            //draw the multiple anchors and complex line instead
            for (let j = 0; j < points.length - 1; j++) {
                paths.push(this.generateLink(react_diagrams_core_1.LinkWidget.generateLinePath(points[j], points[j + 1]), {
                    'data-linkid': this.props.link.getID(),
                    'data-point': j,
                    onMouseDown: (event) => {
                        this.addPointToLink(event, j + 1);
                    }
                }, j));
            }
            //render the circles
            for (let i = 1; i < points.length - 1; i++) {
                paths.push(this.generatePoint(points[i]));
            }
            if (this.props.link.getTargetPort() == null) {
                paths.push(this.generatePoint(points[points.length - 1]));
            }
        }
        return React.createElement("g", { "data-default-link-test": this.props.link.getOptions().testName }, paths);
    }
}
exports.DefaultLinkWidget = DefaultLinkWidget;


/***/ }),

/***/ "./src/node/DefaultNodeFactory.tsx":
/*!*****************************************!*\
  !*** ./src/node/DefaultNodeFactory.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const DefaultNodeModel_1 = __webpack_require__(/*! ./DefaultNodeModel */ "./src/node/DefaultNodeModel.ts");
const DefaultNodeWidget_1 = __webpack_require__(/*! ./DefaultNodeWidget */ "./src/node/DefaultNodeWidget.tsx");
const react_canvas_core_1 = __webpack_require__(/*! @projectstorm/react-canvas-core */ "@projectstorm/react-canvas-core");
class DefaultNodeFactory extends react_canvas_core_1.AbstractReactFactory {
    constructor() {
        super('default');
    }
    generateReactWidget(event) {
        return React.createElement(DefaultNodeWidget_1.DefaultNodeWidget, { engine: this.engine, node: event.model });
    }
    generateModel(event) {
        return new DefaultNodeModel_1.DefaultNodeModel();
    }
}
exports.DefaultNodeFactory = DefaultNodeFactory;


/***/ }),

/***/ "./src/node/DefaultNodeModel.ts":
/*!**************************************!*\
  !*** ./src/node/DefaultNodeModel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const DefaultPortModel_1 = __webpack_require__(/*! ../port/DefaultPortModel */ "./src/port/DefaultPortModel.ts");
class DefaultNodeModel extends react_diagrams_core_1.NodeModel {
    constructor(options = {}, color) {
        if (typeof options === 'string') {
            options = {
                name: options,
                color: color
            };
        }
        super(Object.assign({ type: 'default', name: 'Untitled', color: 'rgb(0,192,255)' }, options));
        this.portsOut = [];
        this.portsIn = [];
    }
    doClone(lookupTable, clone) {
        clone.portsIn = [];
        clone.portsOut = [];
        super.doClone(lookupTable, clone);
    }
    removePort(port) {
        super.removePort(port);
        if (port.getOptions().in) {
            this.portsIn.splice(this.portsIn.indexOf(port));
        }
        else {
            this.portsOut.splice(this.portsOut.indexOf(port));
        }
    }
    addPort(port) {
        super.addPort(port);
        if (port.getOptions().in) {
            if (this.portsIn.indexOf(port) === -1) {
                this.portsIn.push(port);
            }
        }
        else {
            if (this.portsOut.indexOf(port) === -1) {
                this.portsOut.push(port);
            }
        }
        return port;
    }
    addInPort(label, after = true) {
        const p = new DefaultPortModel_1.DefaultPortModel({
            in: true,
            name: label,
            label: label,
            alignment: react_diagrams_core_1.PortModelAlignment.LEFT
        });
        if (!after) {
            this.portsIn.splice(0, 0, p);
        }
        return this.addPort(p);
    }
    addOutPort(label, after = true) {
        const p = new DefaultPortModel_1.DefaultPortModel({
            in: false,
            name: label,
            label: label,
            alignment: react_diagrams_core_1.PortModelAlignment.RIGHT
        });
        if (!after) {
            this.portsOut.splice(0, 0, p);
        }
        return this.addPort(p);
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.name = event.data.name;
        this.options.color = event.data.color;
        this.portsIn = _.map(event.data.portsInOrder, id => {
            return this.getPortFromID(id);
        });
        this.portsOut = _.map(event.data.portsOutOrder, id => {
            return this.getPortFromID(id);
        });
    }
    serialize() {
        return Object.assign({}, super.serialize(), { name: this.options.name, color: this.options.color, portsInOrder: _.map(this.portsIn, port => {
                return port.getID();
            }), portsOutOrder: _.map(this.portsOut, port => {
                return port.getID();
            }) });
    }
    getInPorts() {
        return this.portsIn;
    }
    getOutPorts() {
        return this.portsOut;
    }
}
exports.DefaultNodeModel = DefaultNodeModel;


/***/ }),

/***/ "./src/node/DefaultNodeWidget.tsx":
/*!****************************************!*\
  !*** ./src/node/DefaultNodeWidget.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const _ = __webpack_require__(/*! lodash */ "lodash");
const DefaultPortLabelWidget_1 = __webpack_require__(/*! ../port/DefaultPortLabelWidget */ "./src/port/DefaultPortLabelWidget.tsx");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
var S;
(function (S) {
    S.Node = styled_1.default.div `
		background-color: ${p => p.background};
		border-radius: 5px;
		font-family: sans-serif;
		color: white;
		border: solid 2px black;
		overflow: visible;
		font-size: 11px;
		border: solid 2px ${p => (p.selected ? 'rgb(0,192,255)' : 'black')};
	`;
    S.Title = styled_1.default.div `
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		white-space: nowrap;
		justify-items: center;
	`;
    S.TitleName = styled_1.default.div `
		flex-grow: 1;
		padding: 5px 5px;
	`;
    S.Ports = styled_1.default.div `
		display: flex;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
	`;
    S.PortsContainer = styled_1.default.div `
		flex-grow: 1;
		display: flex;
		flex-direction: column;

		&:first-of-type {
			margin-right: 10px;
		}

		&:only-child {
			margin-right: 0px;
		}
	`;
})(S || (S = {}));
/**
 * Default node that models the DefaultNodeModel. It creates two columns
 * for both all the input ports on the left, and the output ports on the right.
 */
class DefaultNodeWidget extends React.Component {
    constructor() {
        super(...arguments);
        this.generatePort = port => {
            return React.createElement(DefaultPortLabelWidget_1.DefaultPortLabel, { engine: this.props.engine, port: port, key: port.getID() });
        };
    }
    render() {
        return (React.createElement(S.Node, { "data-default-node-name": this.props.node.getOptions().name, selected: this.props.node.isSelected(), background: this.props.node.getOptions().color },
            React.createElement(S.Title, null,
                React.createElement(S.TitleName, null, this.props.node.getOptions().name)),
            React.createElement(S.Ports, null,
                React.createElement(S.PortsContainer, null, _.map(this.props.node.getInPorts(), this.generatePort)),
                React.createElement(S.PortsContainer, null, _.map(this.props.node.getOutPorts(), this.generatePort)))));
    }
}
exports.DefaultNodeWidget = DefaultNodeWidget;


/***/ }),

/***/ "./src/port/DefaultPortFactory.tsx":
/*!*****************************************!*\
  !*** ./src/port/DefaultPortFactory.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DefaultPortModel_1 = __webpack_require__(/*! ./DefaultPortModel */ "./src/port/DefaultPortModel.ts");
const react_canvas_core_1 = __webpack_require__(/*! @projectstorm/react-canvas-core */ "@projectstorm/react-canvas-core");
class DefaultPortFactory extends react_canvas_core_1.AbstractModelFactory {
    constructor() {
        super('default');
    }
    generateModel() {
        return new DefaultPortModel_1.DefaultPortModel({
            name: 'unknown'
        });
    }
}
exports.DefaultPortFactory = DefaultPortFactory;


/***/ }),

/***/ "./src/port/DefaultPortLabelWidget.tsx":
/*!*********************************************!*\
  !*** ./src/port/DefaultPortLabelWidget.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
var S;
(function (S) {
    S.PortLabel = styled_1.default.div `
		display: flex;
		margin-top: 1px;
		align-items: center;
	`;
    S.Label = styled_1.default.div `
		padding: 0 5px;
		flex-grow: 1;
	`;
    S.Port = styled_1.default.div `
		width: 15px;
		height: 15px;
		background: rgba(white, 0.1);

		&:hover {
			background: rgb(192, 255, 0);
		}
	`;
})(S || (S = {}));
class DefaultPortLabel extends React.Component {
    render() {
        const port = (React.createElement(react_diagrams_core_1.PortWidget, { engine: this.props.engine, port: this.props.port },
            React.createElement(S.Port, null)));
        const label = React.createElement(S.Label, null, this.props.port.getOptions().label);
        return (React.createElement(S.PortLabel, null,
            this.props.port.getOptions().in ? port : label,
            this.props.port.getOptions().in ? label : port));
    }
}
exports.DefaultPortLabel = DefaultPortLabel;


/***/ }),

/***/ "./src/port/DefaultPortModel.ts":
/*!**************************************!*\
  !*** ./src/port/DefaultPortModel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_diagrams_core_1 = __webpack_require__(/*! @projectstorm/react-diagrams-core */ "@projectstorm/react-diagrams-core");
const DefaultLinkModel_1 = __webpack_require__(/*! ../link/DefaultLinkModel */ "./src/link/DefaultLinkModel.ts");
class DefaultPortModel extends react_diagrams_core_1.PortModel {
    constructor(options, name, label) {
        if (!!name) {
            options = {
                in: !!options,
                name: name,
                label: label
            };
        }
        options = options;
        super(Object.assign({ label: options.label || options.name, alignment: options.in ? react_diagrams_core_1.PortModelAlignment.LEFT : react_diagrams_core_1.PortModelAlignment.RIGHT, type: 'default' }, options));
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.in = event.data.in;
        this.options.label = event.data.label;
    }
    serialize() {
        return Object.assign({}, super.serialize(), { in: this.options.in, label: this.options.label });
    }
    link(port, factory) {
        let link = this.createLinkModel(factory);
        link.setSourcePort(this);
        link.setTargetPort(port);
        return link;
    }
    canLinkToPort(port) {
        if (port instanceof DefaultPortModel) {
            return this.options.in !== port.getOptions().in;
        }
        return true;
    }
    createLinkModel(factory) {
        let link = super.createLinkModel();
        if (!link && factory) {
            return factory.generateModel({});
        }
        return link || new DefaultLinkModel_1.DefaultLinkModel();
    }
}
exports.DefaultPortModel = DefaultPortModel;


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "@projectstorm/geometry":
/*!*****************************************!*\
  !*** external "@projectstorm/geometry" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@projectstorm/geometry");

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map