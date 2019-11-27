(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["projectstorm/react-canvas-core"] = factory();
	else
		root["projectstorm/react-canvas-core"] = factory();
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
__export(__webpack_require__(/*! ./src/CanvasEngine */ "./src/CanvasEngine.ts"));
__export(__webpack_require__(/*! ./src/Toolkit */ "./src/Toolkit.ts"));
__export(__webpack_require__(/*! ./src/entities/canvas/CanvasModel */ "./src/entities/canvas/CanvasModel.ts"));
__export(__webpack_require__(/*! ./src/core/AbstractFactory */ "./src/core/AbstractFactory.ts"));
__export(__webpack_require__(/*! ./src/core/AbstractModelFactory */ "./src/core/AbstractModelFactory.ts"));
__export(__webpack_require__(/*! ./src/core/AbstractReactFactory */ "./src/core/AbstractReactFactory.tsx"));
__export(__webpack_require__(/*! ./src/core/BaseObserver */ "./src/core/BaseObserver.ts"));
__export(__webpack_require__(/*! ./src/core/FactoryBank */ "./src/core/FactoryBank.ts"));
__export(__webpack_require__(/*! ./src/core-actions/Action */ "./src/core-actions/Action.ts"));
__export(__webpack_require__(/*! ./src/core-actions/ActionEventBus */ "./src/core-actions/ActionEventBus.ts"));
__export(__webpack_require__(/*! ./src/core-models/BaseEntity */ "./src/core-models/BaseEntity.ts"));
__export(__webpack_require__(/*! ./src/core-models/BaseModel */ "./src/core-models/BaseModel.ts"));
__export(__webpack_require__(/*! ./src/core-models/BasePositionModel */ "./src/core-models/BasePositionModel.ts"));
__export(__webpack_require__(/*! ./src/entities/canvas/CanvasModel */ "./src/entities/canvas/CanvasModel.ts"));
__export(__webpack_require__(/*! ./src/entities/canvas/CanvasWidget */ "./src/entities/canvas/CanvasWidget.tsx"));
__export(__webpack_require__(/*! ./src/entities/layer/LayerModel */ "./src/entities/layer/LayerModel.ts"));
__export(__webpack_require__(/*! ./src/entities/layer/TransformLayerWidget */ "./src/entities/layer/TransformLayerWidget.tsx"));
__export(__webpack_require__(/*! ./src/entities/layer/SmartLayerWidget */ "./src/entities/layer/SmartLayerWidget.tsx"));
__export(__webpack_require__(/*! ./src/entities/selection/SelectionBoxLayerFactory */ "./src/entities/selection/SelectionBoxLayerFactory.tsx"));
__export(__webpack_require__(/*! ./src/entities/selection/SelectionBoxWidget */ "./src/entities/selection/SelectionBoxWidget.tsx"));
__export(__webpack_require__(/*! ./src/entities/selection/SelectionLayerModel */ "./src/entities/selection/SelectionLayerModel.ts"));
__export(__webpack_require__(/*! ./src/widgets/PeformanceWidget */ "./src/widgets/PeformanceWidget.tsx"));
__export(__webpack_require__(/*! ./src/core-state/AbstractDisplacementState */ "./src/core-state/AbstractDisplacementState.ts"));
__export(__webpack_require__(/*! ./src/core-state/State */ "./src/core-state/State.ts"));
__export(__webpack_require__(/*! ./src/core-state/StateMachine */ "./src/core-state/StateMachine.ts"));
__export(__webpack_require__(/*! ./src/states/DefaultState */ "./src/states/DefaultState.ts"));
__export(__webpack_require__(/*! ./src/states/DragCanvasState */ "./src/states/DragCanvasState.ts"));
__export(__webpack_require__(/*! ./src/states/SelectingState */ "./src/states/SelectingState.ts"));
__export(__webpack_require__(/*! ./src/states/SelectionBoxState */ "./src/states/SelectionBoxState.ts"));
__export(__webpack_require__(/*! ./src/states/MoveItemsState */ "./src/states/MoveItemsState.ts"));
__export(__webpack_require__(/*! ./src/actions/DeleteItemsAction */ "./src/actions/DeleteItemsAction.ts"));
__export(__webpack_require__(/*! ./src/actions/ZoomCanvasAction */ "./src/actions/ZoomCanvasAction.ts"));


/***/ }),

/***/ "./src/CanvasEngine.ts":
/*!*****************************!*\
  !*** ./src/CanvasEngine.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FactoryBank_1 = __webpack_require__(/*! ./core/FactoryBank */ "./src/core/FactoryBank.ts");
const BaseObserver_1 = __webpack_require__(/*! ./core/BaseObserver */ "./src/core/BaseObserver.ts");
const geometry_1 = __webpack_require__(/*! @projectstorm/geometry */ "@projectstorm/geometry");
const ActionEventBus_1 = __webpack_require__(/*! ./core-actions/ActionEventBus */ "./src/core-actions/ActionEventBus.ts");
const ZoomCanvasAction_1 = __webpack_require__(/*! ./actions/ZoomCanvasAction */ "./src/actions/ZoomCanvasAction.ts");
const DeleteItemsAction_1 = __webpack_require__(/*! ./actions/DeleteItemsAction */ "./src/actions/DeleteItemsAction.ts");
const StateMachine_1 = __webpack_require__(/*! ./core-state/StateMachine */ "./src/core-state/StateMachine.ts");
class CanvasEngine extends BaseObserver_1.BaseObserver {
    constructor(options = {}) {
        super();
        this.model = null;
        this.eventBus = new ActionEventBus_1.ActionEventBus(this);
        this.stateMachine = new StateMachine_1.StateMachine(this);
        this.layerFactories = new FactoryBank_1.FactoryBank();
        this.registerFactoryBank(this.layerFactories);
        this.options = Object.assign({ registerDefaultDeleteItemsAction: true, registerDefaultZoomCanvasAction: true }, options);
        if (this.options.registerDefaultZoomCanvasAction === true) {
            this.eventBus.registerAction(new ZoomCanvasAction_1.ZoomCanvasAction());
        }
        if (this.options.registerDefaultDeleteItemsAction === true) {
            this.eventBus.registerAction(new DeleteItemsAction_1.DeleteItemsAction());
        }
    }
    getStateMachine() {
        return this.stateMachine;
    }
    getRelativeMousePoint(event) {
        const point = this.getRelativePoint(event.clientX, event.clientY);
        return new geometry_1.Point((point.x - this.model.getOffsetX()) / (this.model.getZoomLevel() / 100.0), (point.y - this.model.getOffsetY()) / (this.model.getZoomLevel() / 100.0));
    }
    getRelativePoint(x, y) {
        const canvasRect = this.canvas.getBoundingClientRect();
        return new geometry_1.Point(x - canvasRect.left, y - canvasRect.top);
    }
    registerFactoryBank(factory) {
        factory.registerListener({
            factoryAdded: event => {
                event.factory.setDiagramEngine(this);
            },
            factoryRemoved: event => {
                event.factory.setDiagramEngine(null);
            }
        });
    }
    getActionEventBus() {
        return this.eventBus;
    }
    getLayerFactories() {
        return this.layerFactories;
    }
    getFactoryForLayer(layer) {
        if (typeof layer === 'string') {
            return this.layerFactories.getFactory(layer);
        }
        return this.layerFactories.getFactory(layer.getType());
    }
    setModel(model) {
        this.model = model;
        if (this.canvas) {
            requestAnimationFrame(() => {
                this.repaintCanvas();
            });
        }
    }
    getModel() {
        return this.model;
    }
    repaintCanvas(promise) {
        const repaint = () => {
            this.iterateListeners(listener => {
                if (listener.repaintCanvas) {
                    listener.repaintCanvas();
                }
            });
        };
        if (promise) {
            return new Promise(resolve => {
                const l = this.registerListener({
                    rendered: () => {
                        resolve();
                        l.deregister();
                    }
                });
                repaint();
            });
        }
        repaint();
    }
    setCanvas(canvas) {
        if (this.canvas !== canvas) {
            this.canvas = canvas;
            if (canvas) {
                this.fireEvent({}, 'canvasReady');
            }
        }
    }
    getCanvas() {
        return this.canvas;
    }
    getMouseElement(event) {
        return null;
    }
    zoomToFit() {
        const xFactor = this.canvas.clientWidth / this.canvas.scrollWidth;
        const yFactor = this.canvas.clientHeight / this.canvas.scrollHeight;
        const zoomFactor = xFactor < yFactor ? xFactor : yFactor;
        this.model.setZoomLevel(this.model.getZoomLevel() * zoomFactor);
        this.model.setOffset(0, 0);
        this.repaintCanvas();
    }
}
exports.CanvasEngine = CanvasEngine;


/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const closest = __webpack_require__(/*! closest */ "closest");
class Toolkit {
    /**
     * Generats a unique ID (thanks Stack overflow :3)
     * @returns {String}
     */
    static UID() {
        if (Toolkit.TESTING) {
            Toolkit.TESTING_UID++;
            return `${Toolkit.TESTING_UID}`;
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
    /**
     * Finds the closest element as a polyfill
     */
    static closest(element, selector) {
        if (document.body.closest) {
            return element.closest(selector);
        }
        return closest(element, selector);
    }
}
Toolkit.TESTING = false;
Toolkit.TESTING_UID = 0;
exports.Toolkit = Toolkit;


/***/ }),

/***/ "./src/actions/DeleteItemsAction.ts":
/*!******************************************!*\
  !*** ./src/actions/DeleteItemsAction.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
/**
 * Deletes all selected items
 */
class DeleteItemsAction extends Action_1.Action {
    constructor(options = {}) {
        options = Object.assign({ keyCodes: [46, 8] }, options);
        super({
            type: Action_1.InputType.KEY_DOWN,
            fire: (event) => {
                if (options.keyCodes.indexOf(event.event.keyCode) !== -1) {
                    _.forEach(this.engine.getModel().getSelectedEntities(), model => {
                        // only delete items which are not locked
                        if (!model.isLocked()) {
                            model.remove();
                        }
                    });
                    this.engine.repaintCanvas();
                }
            }
        });
    }
}
exports.DeleteItemsAction = DeleteItemsAction;


/***/ }),

/***/ "./src/actions/ZoomCanvasAction.ts":
/*!*****************************************!*\
  !*** ./src/actions/ZoomCanvasAction.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
class ZoomCanvasAction extends Action_1.Action {
    constructor(options = {}) {
        super({
            type: Action_1.InputType.MOUSE_WHEEL,
            fire: (actionEvent) => {
                const { event } = actionEvent;
                // we can block layer rendering because we are only targeting the transforms
                for (let layer of this.engine.getModel().getLayers()) {
                    layer.allowRepaint(false);
                }
                const model = this.engine.getModel();
                event.stopPropagation();
                const oldZoomFactor = this.engine.getModel().getZoomLevel() / 100;
                let scrollDelta = options.inverseZoom ? -event.deltaY : event.deltaY;
                //check if it is pinch gesture
                if (event.ctrlKey && scrollDelta % 1 !== 0) {
                    /*
                        Chrome and Firefox sends wheel event with deltaY that
                        have fractional part, also `ctrlKey` prop of the event is true
                        though ctrl isn't pressed
                    */
                    scrollDelta /= 3;
                }
                else {
                    scrollDelta /= 60;
                }
                if (model.getZoomLevel() + scrollDelta > 10) {
                    model.setZoomLevel(model.getZoomLevel() + scrollDelta);
                }
                const zoomFactor = model.getZoomLevel() / 100;
                const boundingRect = event.currentTarget.getBoundingClientRect();
                const clientWidth = boundingRect.width;
                const clientHeight = boundingRect.height;
                // compute difference between rect before and after scroll
                const widthDiff = clientWidth * zoomFactor - clientWidth * oldZoomFactor;
                const heightDiff = clientHeight * zoomFactor - clientHeight * oldZoomFactor;
                // compute mouse coords relative to canvas
                const clientX = event.clientX - boundingRect.left;
                const clientY = event.clientY - boundingRect.top;
                // compute width and height increment factor
                const xFactor = (clientX - model.getOffsetX()) / oldZoomFactor / clientWidth;
                const yFactor = (clientY - model.getOffsetY()) / oldZoomFactor / clientHeight;
                model.setOffset(model.getOffsetX() - widthDiff * xFactor, model.getOffsetY() - heightDiff * yFactor);
                this.engine.repaintCanvas();
                // re-enable rendering
                for (let layer of this.engine.getModel().getLayers()) {
                    layer.allowRepaint(true);
                }
            }
        });
    }
}
exports.ZoomCanvasAction = ZoomCanvasAction;


/***/ }),

/***/ "./src/core-actions/Action.ts":
/*!************************************!*\
  !*** ./src/core-actions/Action.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Toolkit_1 = __webpack_require__(/*! ../Toolkit */ "./src/Toolkit.ts");
var InputType;
(function (InputType) {
    InputType["MOUSE_DOWN"] = "mouse-down";
    InputType["MOUSE_UP"] = "mouse-up";
    InputType["MOUSE_MOVE"] = "mouse-move";
    InputType["MOUSE_WHEEL"] = "mouse-wheel";
    InputType["KEY_DOWN"] = "key-down";
    InputType["KEY_UP"] = "key-up";
})(InputType = exports.InputType || (exports.InputType = {}));
class Action {
    constructor(options) {
        this.options = options;
        this.id = Toolkit_1.Toolkit.UID();
    }
    setEngine(engine) {
        this.engine = engine;
    }
}
exports.Action = Action;


/***/ }),

/***/ "./src/core-actions/ActionEventBus.ts":
/*!********************************************!*\
  !*** ./src/core-actions/ActionEventBus.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __webpack_require__(/*! ./Action */ "./src/core-actions/Action.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
class ActionEventBus {
    constructor(engine) {
        this.actions = {};
        this.engine = engine;
        this.keys = {};
    }
    getKeys() {
        return _.keys(this.keys);
    }
    registerAction(action) {
        action.setEngine(this.engine);
        this.actions[action.id] = action;
        return () => {
            this.deregisterAction(action);
        };
    }
    deregisterAction(action) {
        action.setEngine(null);
        delete this.actions[action.id];
    }
    getActionsForType(type) {
        return _.filter(this.actions, action => {
            return action.options.type === type;
        });
    }
    getModelForEvent(actionEvent) {
        if (actionEvent.model) {
            return actionEvent.model;
        }
        return this.engine.getMouseElement(actionEvent.event);
    }
    getActionsForEvent(actionEvent) {
        const { event } = actionEvent;
        if (event.type === 'mousedown') {
            return this.getActionsForType(Action_1.InputType.MOUSE_DOWN);
        }
        else if (event.type === 'mouseup') {
            return this.getActionsForType(Action_1.InputType.MOUSE_UP);
        }
        else if (event.type === 'keydown') {
            // store the recorded key
            this.keys[event.key.toLowerCase()] = true;
            return this.getActionsForType(Action_1.InputType.KEY_DOWN);
        }
        else if (event.type === 'keyup') {
            // delete the recorded key
            delete this.keys[event.key.toLowerCase()];
            return this.getActionsForType(Action_1.InputType.KEY_UP);
        }
        else if (event.type === 'mousemove') {
            return this.getActionsForType(Action_1.InputType.MOUSE_MOVE);
        }
        else if (event.type === 'wheel') {
            return this.getActionsForType(Action_1.InputType.MOUSE_WHEEL);
        }
        return [];
    }
    fireAction(actionEvent) {
        const actions = this.getActionsForEvent(actionEvent);
        for (let action of actions) {
            action.options.fire(actionEvent);
        }
    }
}
exports.ActionEventBus = ActionEventBus;


/***/ }),

/***/ "./src/core-models/BaseEntity.ts":
/*!***************************************!*\
  !*** ./src/core-models/BaseEntity.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Toolkit_1 = __webpack_require__(/*! ../Toolkit */ "./src/Toolkit.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
const BaseObserver_1 = __webpack_require__(/*! ../core/BaseObserver */ "./src/core/BaseObserver.ts");
class BaseEntity extends BaseObserver_1.BaseObserver {
    constructor(options = {}) {
        super();
        this.options = Object.assign({ id: Toolkit_1.Toolkit.UID() }, options);
    }
    getOptions() {
        return this.options;
    }
    getID() {
        return this.options.id;
    }
    doClone(lookupTable = {}, clone) {
        /*noop*/
    }
    clone(lookupTable = {}) {
        // try and use an existing clone first
        if (lookupTable[this.options.id]) {
            return lookupTable[this.options.id];
        }
        let clone = _.clone(this);
        clone.options = Object.assign({}, this.options, { id: Toolkit_1.Toolkit.UID() });
        clone.clearListeners();
        lookupTable[this.options.id] = clone;
        this.doClone(lookupTable, clone);
        return clone;
    }
    clearListeners() {
        this.listeners = {};
    }
    deserialize(event) {
        this.options.id = event.data.id;
        this.options.locked = event.data.locked;
    }
    serialize() {
        return {
            id: this.options.id,
            locked: this.options.locked
        };
    }
    fireEvent(event, k) {
        super.fireEvent(Object.assign({ entity: this }, event), k);
    }
    isLocked() {
        return this.options.locked;
    }
    setLocked(locked = true) {
        this.options.locked = locked;
        this.fireEvent({
            locked: locked
        }, 'lockChanged');
    }
}
exports.BaseEntity = BaseEntity;


/***/ }),

/***/ "./src/core-models/BaseModel.ts":
/*!**************************************!*\
  !*** ./src/core-models/BaseModel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = __webpack_require__(/*! ./BaseEntity */ "./src/core-models/BaseEntity.ts");
const CanvasModel_1 = __webpack_require__(/*! ../entities/canvas/CanvasModel */ "./src/entities/canvas/CanvasModel.ts");
class BaseModel extends BaseEntity_1.BaseEntity {
    constructor(options) {
        super(options);
    }
    performanceTune() {
        return true;
    }
    getParentCanvasModel() {
        if (!this.parent) {
            return null;
        }
        if (this.parent instanceof CanvasModel_1.CanvasModel) {
            return this.parent;
        }
        else if (this.parent instanceof BaseModel) {
            return this.parent.getParentCanvasModel();
        }
        return null;
    }
    getParent() {
        return this.parent;
    }
    setParent(parent) {
        this.parent = parent;
    }
    getSelectionEntities() {
        return [this];
    }
    serialize() {
        return Object.assign({}, super.serialize(), { type: this.options.type, selected: this.options.selected, extras: this.options.extras });
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.extras = event.data.extras;
        this.options.selected = event.data.selected;
    }
    getType() {
        return this.options.type;
    }
    isSelected() {
        return this.options.selected;
    }
    isLocked() {
        const locked = super.isLocked();
        if (locked) {
            return true;
        }
        // delegate this call up to the parent
        if (this.parent) {
            return this.parent.isLocked();
        }
        return false;
    }
    setSelected(selected = true) {
        this.options.selected = selected;
        this.fireEvent({
            isSelected: selected
        }, 'selectionChanged');
    }
    remove() {
        this.fireEvent({}, 'entityRemoved');
    }
}
exports.BaseModel = BaseModel;


/***/ }),

/***/ "./src/core-models/BasePositionModel.ts":
/*!**********************************************!*\
  !*** ./src/core-models/BasePositionModel.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel_1 = __webpack_require__(/*! ./BaseModel */ "./src/core-models/BaseModel.ts");
const geometry_1 = __webpack_require__(/*! @projectstorm/geometry */ "@projectstorm/geometry");
class BasePositionModel extends BaseModel_1.BaseModel {
    constructor(options) {
        super(options);
        this.position = options.position || new geometry_1.Point(0, 0);
    }
    setPosition(x, y) {
        if (typeof x === 'object') {
            this.position = x;
        }
        else if (typeof x) {
            this.position = new geometry_1.Point(x, y);
        }
        this.fireEvent({}, 'positionChanged');
    }
    getBoundingBox() {
        return new geometry_1.Rectangle(this.position, 0, 0);
    }
    deserialize(event) {
        super.deserialize(event);
        this.position = new geometry_1.Point(event.data.x, event.data.y);
    }
    serialize() {
        return Object.assign({}, super.serialize(), { x: this.position.x, y: this.position.y });
    }
    getPosition() {
        return this.position;
    }
    getX() {
        return this.position.x;
    }
    getY() {
        return this.position.y;
    }
}
exports.BasePositionModel = BasePositionModel;


/***/ }),

/***/ "./src/core-state/AbstractDisplacementState.ts":
/*!*****************************************************!*\
  !*** ./src/core-state/AbstractDisplacementState.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = __webpack_require__(/*! ./State */ "./src/core-state/State.ts");
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
class AbstractDisplacementState extends State_1.State {
    constructor(options) {
        super(options);
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_DOWN,
            fire: (actionEvent) => {
                this.initialX = actionEvent.event.clientX;
                this.initialY = actionEvent.event.clientY;
                const rel = this.engine.getRelativePoint(actionEvent.event.clientX, actionEvent.event.clientY);
                this.initialXRelative = rel.x;
                this.initialYRelative = rel.y;
            }
        }));
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_MOVE,
            fire: (actionEvent) => {
                const { event } = actionEvent;
                this.fireMouseMoved({
                    displacementX: event.clientX - this.initialX,
                    displacementY: event.clientY - this.initialY,
                    virtualDisplacementX: (event.clientX - this.initialX) / (this.engine.getModel().getZoomLevel() / 100.0),
                    virtualDisplacementY: (event.clientY - this.initialY) / (this.engine.getModel().getZoomLevel() / 100.0),
                    event: event
                });
            }
        }));
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_UP,
            fire: (event) => {
                // when the mouse if up, we eject this state
                this.eject();
            }
        }));
    }
}
exports.AbstractDisplacementState = AbstractDisplacementState;


/***/ }),

/***/ "./src/core-state/State.ts":
/*!*********************************!*\
  !*** ./src/core-state/State.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
class State {
    constructor(options) {
        this.actions = [];
        this.keys = [];
        this.childStates = [];
        this.options = options;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    getOptions() {
        return this.options;
    }
    eject() {
        this.engine.getStateMachine().popState();
    }
    transitionWithEvent(state, event) {
        this.engine.getStateMachine().pushState(state);
        this.engine.getActionEventBus().fireAction(event);
    }
    registerAction(action) {
        this.actions.push(action);
    }
    tryActivateParentState(keys) {
        if (this.keys.length > 0 && !this.isKeysFullfilled(keys)) {
            this.eject();
            return true;
        }
        return false;
    }
    tryActivateChildState(keys) {
        const state = this.findStateToActivate(keys);
        if (state) {
            this.engine.getStateMachine().pushState(state);
            return true;
        }
        return false;
    }
    findStateToActivate(keys) {
        for (let child of this.childStates) {
            if (child.isKeysFullfilled(keys)) {
                return child;
            }
        }
        return null;
    }
    isKeysFullfilled(keys) {
        return _.intersection(this.keys, keys).length === this.keys.length;
    }
    activated(previous) {
        const keys = this.engine.getActionEventBus().getKeys();
        if (this.tryActivateParentState(keys) || this.tryActivateChildState(keys)) {
            return;
        }
        // perhaps we need to pop again?
        this.handler1 = this.engine.getActionEventBus().registerAction(new Action_1.Action({
            type: Action_1.InputType.KEY_DOWN,
            fire: () => {
                this.tryActivateChildState(this.engine.getActionEventBus().getKeys());
            }
        }));
        this.handler2 = this.engine.getActionEventBus().registerAction(new Action_1.Action({
            type: Action_1.InputType.KEY_UP,
            fire: () => {
                this.tryActivateParentState(this.engine.getActionEventBus().getKeys());
            }
        }));
        for (let action of this.actions) {
            this.engine.getActionEventBus().registerAction(action);
        }
    }
    deactivated(next) {
        if (this.handler1) {
            this.handler1();
        }
        if (this.handler2) {
            this.handler2();
        }
        // if this happens, we are going into heirachial state machine mode
        for (let action of this.actions) {
            this.engine.getActionEventBus().deregisterAction(action);
        }
    }
}
exports.State = State;


/***/ }),

/***/ "./src/core-state/StateMachine.ts":
/*!****************************************!*\
  !*** ./src/core-state/StateMachine.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const BaseObserver_1 = __webpack_require__(/*! ../core/BaseObserver */ "./src/core/BaseObserver.ts");
class StateMachine extends BaseObserver_1.BaseObserver {
    constructor(engine) {
        super();
        this.engine = engine;
        this.stateStack = [];
    }
    getCurrentState() {
        return this.currentState;
    }
    pushState(state) {
        this.stateStack.push(state);
        this.setState(state);
    }
    popState() {
        this.stateStack.pop();
        this.setState(_.last(this.stateStack));
    }
    setState(state) {
        state.setEngine(this.engine);
        // if no state object, get the initial state
        if (this.currentState) {
            this.currentState.deactivated(state);
        }
        const old = this.currentState;
        this.currentState = state;
        if (this.currentState) {
            this.currentState.activated(old);
            this.fireEvent({
                newState: state
            }, 'stateChanged');
        }
    }
}
exports.StateMachine = StateMachine;


/***/ }),

/***/ "./src/core/AbstractFactory.ts":
/*!*************************************!*\
  !*** ./src/core/AbstractFactory.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base factory for all the different types of entities.
 * Gets registered with the engine, and is used to generate models
 */
class AbstractFactory {
    constructor(type) {
        this.type = type;
    }
    setDiagramEngine(engine) {
        this.engine = engine;
    }
    setFactoryBank(bank) {
        this.bank = bank;
    }
    getType() {
        return this.type;
    }
}
exports.AbstractFactory = AbstractFactory;


/***/ }),

/***/ "./src/core/AbstractModelFactory.ts":
/*!******************************************!*\
  !*** ./src/core/AbstractModelFactory.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractFactory_1 = __webpack_require__(/*! ./AbstractFactory */ "./src/core/AbstractFactory.ts");
class AbstractModelFactory extends AbstractFactory_1.AbstractFactory {
}
exports.AbstractModelFactory = AbstractModelFactory;


/***/ }),

/***/ "./src/core/AbstractReactFactory.tsx":
/*!*******************************************!*\
  !*** ./src/core/AbstractReactFactory.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractModelFactory_1 = __webpack_require__(/*! ./AbstractModelFactory */ "./src/core/AbstractModelFactory.ts");
/**
 * Further extends the AbstractFactory to add widget generation capability.
 */
class AbstractReactFactory extends AbstractModelFactory_1.AbstractModelFactory {
}
exports.AbstractReactFactory = AbstractReactFactory;


/***/ }),

/***/ "./src/core/BaseObserver.ts":
/*!**********************************!*\
  !*** ./src/core/BaseObserver.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Toolkit_1 = __webpack_require__(/*! ../Toolkit */ "./src/Toolkit.ts");
/**
 * Base observer pattern class for working with listeners
 */
class BaseObserver {
    constructor() {
        this.listeners = {};
    }
    fireEventInternal(fire, k, event) {
        this.iterateListeners(listener => {
            // returning false here will instruct itteration to stop
            if (!fire && !event.firing) {
                return false;
            }
            // fire selected listener
            if (listener[k]) {
                listener[k](event);
            }
        });
    }
    fireEvent(event, k) {
        event = Object.assign({ firing: true, stopPropagation: () => {
                event.firing = false;
            } }, event);
        // fire pre
        this.fireEventInternal(true, 'eventWillFire', Object.assign({}, event, { function: k }));
        // fire main event
        this.fireEventInternal(false, k, event);
        // fire post
        this.fireEventInternal(true, 'eventDidFire', Object.assign({}, event, { function: k }));
    }
    iterateListeners(cb) {
        for (let id in this.listeners) {
            const res = cb(this.listeners[id]);
            // cancel itteration on false
            if (res === false) {
                return;
            }
        }
    }
    getListenerHandle(listener) {
        for (let id in this.listeners) {
            if (this.listeners[id] === listener) {
                return {
                    id: id,
                    listner: listener,
                    deregister: () => {
                        delete this.listeners[id];
                    }
                };
            }
        }
    }
    registerListener(listener) {
        const id = Toolkit_1.Toolkit.UID();
        this.listeners[id] = listener;
        return {
            id: id,
            listner: listener,
            deregister: () => {
                delete this.listeners[id];
            }
        };
    }
    deregisterListener(listener) {
        if (typeof listener === 'object') {
            listener.deregister();
            return true;
        }
        const handle = this.getListenerHandle(listener);
        if (handle) {
            handle.deregister();
            return true;
        }
        return false;
    }
}
exports.BaseObserver = BaseObserver;


/***/ }),

/***/ "./src/core/FactoryBank.ts":
/*!*********************************!*\
  !*** ./src/core/FactoryBank.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseObserver_1 = __webpack_require__(/*! ./BaseObserver */ "./src/core/BaseObserver.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
/**
 * Store and managed Factories that extend from Abstractfactory
 */
class FactoryBank extends BaseObserver_1.BaseObserver {
    constructor() {
        super();
        this.factories = {};
    }
    getFactories() {
        return _.values(this.factories);
    }
    clearFactories() {
        for (let factory in this.factories) {
            this.deregisterFactory(factory);
        }
    }
    getFactory(type) {
        if (!this.factories[type]) {
            throw new Error(`Cannot find factory with type [${type}]`);
        }
        return this.factories[type];
    }
    registerFactory(factory) {
        factory.setFactoryBank(this);
        this.factories[factory.getType()] = factory;
        // todo fixme
        this.fireEvent({ factory }, 'factoryAdded');
    }
    deregisterFactory(type) {
        const factory = this.factories[type];
        factory.setFactoryBank(null);
        delete this.factories[type];
        // todo fixme
        this.fireEvent({ factory }, 'factoryRemoved');
    }
}
exports.FactoryBank = FactoryBank;


/***/ }),

/***/ "./src/entities/canvas/CanvasModel.ts":
/*!********************************************!*\
  !*** ./src/entities/canvas/CanvasModel.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const BaseEntity_1 = __webpack_require__(/*! ../../core-models/BaseEntity */ "./src/core-models/BaseEntity.ts");
class CanvasModel extends BaseEntity_1.BaseEntity {
    constructor(options = {}) {
        super(Object.assign({ zoom: 100, gridSize: 0, offsetX: 0, offsetY: 0 }, options));
        this.layers = [];
    }
    getSelectionEntities() {
        return _.flatMap(this.layers, layer => {
            return layer.getSelectionEntities();
        });
    }
    getSelectedEntities() {
        return _.filter(this.getSelectionEntities(), ob => {
            return ob.isSelected();
        });
    }
    clearSelection() {
        _.forEach(this.getSelectedEntities(), element => {
            element.setSelected(false);
        });
    }
    getModels() {
        return _.flatMap(this.layers, layer => {
            return _.values(layer.getModels());
        });
    }
    addLayer(layer) {
        layer.setParent(this);
        layer.registerListener({
            entityRemoved: (event) => { }
        });
        this.layers.push(layer);
    }
    removeLayer(layer) {
        const index = this.layers.indexOf(layer);
        if (index !== -1) {
            this.layers.splice(index, 1);
            return true;
        }
        return false;
    }
    getLayers() {
        return this.layers;
    }
    setGridSize(size = 0) {
        this.options.gridSize = size;
        this.fireEvent({ size: size }, 'gridUpdated');
    }
    getGridPosition(pos) {
        if (this.options.gridSize === 0) {
            return pos;
        }
        return this.options.gridSize * Math.floor((pos + this.options.gridSize / 2) / this.options.gridSize);
    }
    deserializeModel(data, engine) {
        const models = {};
        const promises = {};
        const resolvers = {};
        const event = {
            data: data,
            engine: engine,
            registerModel: (model) => {
                models[model.getID()] = model;
                if (resolvers[model.getID()]) {
                    resolvers[model.getID()](model);
                }
            },
            getModel(id) {
                if (models[id]) {
                    return Promise.resolve(models[id]);
                }
                if (!promises[id]) {
                    promises[id] = new Promise(resolve => {
                        resolvers[id] = resolve;
                    });
                }
                return promises[id];
            }
        };
        this.deserialize(event);
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.offsetX = event.data.offsetX;
        this.options.offsetY = event.data.offsetY;
        this.options.zoom = event.data.zoom;
        this.options.gridSize = event.data.gridSize;
        _.forEach(event.data.layers, layer => {
            const layerOb = event.engine.getFactoryForLayer(layer.type).generateModel({
                initialConfig: layer
            });
            layerOb.deserialize(Object.assign({}, event, { data: layer }));
            this.addLayer(layerOb);
        });
    }
    serialize() {
        return Object.assign({}, super.serialize(), { offsetX: this.options.offsetX, offsetY: this.options.offsetY, zoom: this.options.zoom, gridSize: this.options.gridSize, layers: _.map(this.layers, layer => {
                return layer.serialize();
            }) });
    }
    setZoomLevel(zoom) {
        this.options.zoom = zoom;
        this.fireEvent({ zoom }, 'zoomUpdated');
    }
    setOffset(offsetX, offsetY) {
        this.options.offsetX = offsetX;
        this.options.offsetY = offsetY;
        this.fireEvent({ offsetX, offsetY }, 'offsetUpdated');
    }
    setOffsetX(offsetX) {
        this.setOffset(offsetX, this.options.offsetY);
    }
    setOffsetY(offsetY) {
        this.setOffset(this.options.offsetX, offsetY);
    }
    getOffsetY() {
        return this.options.offsetY;
    }
    getOffsetX() {
        return this.options.offsetX;
    }
    getZoomLevel() {
        return this.options.zoom;
    }
}
exports.CanvasModel = CanvasModel;


/***/ }),

/***/ "./src/entities/canvas/CanvasWidget.tsx":
/*!**********************************************!*\
  !*** ./src/entities/canvas/CanvasWidget.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const TransformLayerWidget_1 = __webpack_require__(/*! ../layer/TransformLayerWidget */ "./src/entities/layer/TransformLayerWidget.tsx");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
const SmartLayerWidget_1 = __webpack_require__(/*! ../layer/SmartLayerWidget */ "./src/entities/layer/SmartLayerWidget.tsx");
var S;
(function (S) {
    S.Canvas = styled_1.default.div `
		position: relative;
		cursor: move;
		overflow: hidden;
	`;
})(S || (S = {}));
class CanvasWidget extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            action: null,
            diagramEngineListener: null
        };
    }
    componentWillUnmount() {
        this.props.engine.deregisterListener(this.canvasListener);
        this.props.engine.setCanvas(null);
        document.removeEventListener('keyup', this.keyUp);
        document.removeEventListener('keydown', this.keyDown);
    }
    registerCanvas() {
        this.props.engine.setCanvas(this.ref.current);
        this.props.engine.iterateListeners(list => {
            list.rendered && list.rendered();
        });
    }
    componentDidUpdate() {
        this.registerCanvas();
    }
    componentDidMount() {
        this.canvasListener = this.props.engine.registerListener({
            repaintCanvas: () => {
                this.forceUpdate();
            }
        });
        this.keyDown = event => {
            this.props.engine.getActionEventBus().fireAction({ event });
        };
        this.keyUp = event => {
            this.props.engine.getActionEventBus().fireAction({ event });
        };
        document.addEventListener('keyup', this.keyUp);
        document.addEventListener('keydown', this.keyDown);
        this.registerCanvas();
    }
    render() {
        const engine = this.props.engine;
        const model = engine.getModel();
        return (React.createElement(S.Canvas, { className: this.props.className, ref: this.ref, onWheel: event => {
                this.props.engine.getActionEventBus().fireAction({ event });
            }, onMouseDown: event => {
                this.props.engine.getActionEventBus().fireAction({ event });
            }, onMouseUp: event => {
                this.props.engine.getActionEventBus().fireAction({ event });
            }, onMouseMove: event => {
                this.props.engine.getActionEventBus().fireAction({ event });
            } }, model.getLayers().map(layer => {
            return (React.createElement(TransformLayerWidget_1.TransformLayerWidget, { layer: layer, key: layer.getID() },
                React.createElement(SmartLayerWidget_1.SmartLayerWidget, { layer: layer, engine: this.props.engine, key: layer.getID() })));
        })));
    }
}
exports.CanvasWidget = CanvasWidget;


/***/ }),

/***/ "./src/entities/layer/LayerModel.ts":
/*!******************************************!*\
  !*** ./src/entities/layer/LayerModel.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel_1 = __webpack_require__(/*! ../../core-models/BaseModel */ "./src/core-models/BaseModel.ts");
const _ = __webpack_require__(/*! lodash */ "lodash");
class LayerModel extends BaseModel_1.BaseModel {
    constructor(options = {}) {
        super(options);
        this.models = {};
        this.repaintEnabled = true;
    }
    deserialize(event) {
        super.deserialize(event);
        this.options.isSvg = !!event.data.isSvg;
        this.options.transformed = !!event.data.transformed;
        _.forEach(event.data.models, model => {
            const modelOb = this.getChildModelFactoryBank(event.engine)
                .getFactory(model.type)
                .generateModel({
                initialConfig: model
            });
            modelOb.deserialize(Object.assign({}, event, { data: model }));
            this.addModel(modelOb);
        });
    }
    serialize() {
        return Object.assign({}, super.serialize(), { isSvg: this.options.isSvg, transformed: this.options.transformed, models: _.mapValues(this.models, model => {
                return model.serialize();
            }) });
    }
    isRepaintEnabled() {
        return this.repaintEnabled;
    }
    allowRepaint(allow = true) {
        this.repaintEnabled = allow;
    }
    remove() {
        if (this.parent) {
            this.parent.removeLayer(this);
        }
        super.remove();
    }
    addModel(model) {
        model.setParent(this);
        this.models[model.getID()] = model;
    }
    getSelectionEntities() {
        return _.flatMap(this.models, model => {
            return model.getSelectionEntities();
        });
    }
    getModels() {
        return this.models;
    }
    getModel(id) {
        return this.models[id];
    }
    removeModel(id) {
        const _id = typeof id === 'string' ? id : id.getID();
        if (this.models[_id]) {
            delete this.models[_id];
            return true;
        }
        return false;
    }
}
exports.LayerModel = LayerModel;


/***/ }),

/***/ "./src/entities/layer/SmartLayerWidget.tsx":
/*!*************************************************!*\
  !*** ./src/entities/layer/SmartLayerWidget.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class SmartLayerWidget extends React.Component {
    shouldComponentUpdate() {
        return this.props.layer.isRepaintEnabled();
    }
    render() {
        return this.props.engine.getFactoryForLayer(this.props.layer).generateReactWidget({ model: this.props.layer });
    }
}
exports.SmartLayerWidget = SmartLayerWidget;


/***/ }),

/***/ "./src/entities/layer/TransformLayerWidget.tsx":
/*!*****************************************************!*\
  !*** ./src/entities/layer/TransformLayerWidget.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
const core_1 = __webpack_require__(/*! @emotion/core */ "@emotion/core");
var S;
(function (S) {
    const shared = core_1.css `
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		pointer-events: none;
		transform-origin: 0 0;
		width: 100%;
		height: 100%;
		overflow: visible;
	`;
    S.DivLayer = styled_1.default.div `
		${shared}
	`;
    S.SvgLayer = styled_1.default.svg `
		${shared}
	`;
})(S || (S = {}));
class TransformLayerWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getTransform() {
        const model = this.props.layer.getParent();
        return `
			translate(
				${model.getOffsetX()}px,
				${model.getOffsetY()}px)
			scale(
				${model.getZoomLevel() / 100.0}
			)
  	`;
    }
    getTransformStyle() {
        if (this.props.layer.getOptions().transformed) {
            return {
                transform: this.getTransform()
            };
        }
        return {};
    }
    render() {
        if (this.props.layer.getOptions().isSvg) {
            return React.createElement(S.SvgLayer, { style: this.getTransformStyle() }, this.props.children);
        }
        return React.createElement(S.DivLayer, { style: this.getTransformStyle() }, this.props.children);
    }
}
exports.TransformLayerWidget = TransformLayerWidget;


/***/ }),

/***/ "./src/entities/selection/SelectionBoxLayerFactory.tsx":
/*!*************************************************************!*\
  !*** ./src/entities/selection/SelectionBoxLayerFactory.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AbstractReactFactory_1 = __webpack_require__(/*! ../../core/AbstractReactFactory */ "./src/core/AbstractReactFactory.tsx");
const SelectionLayerModel_1 = __webpack_require__(/*! ./SelectionLayerModel */ "./src/entities/selection/SelectionLayerModel.ts");
const SelectionBoxWidget_1 = __webpack_require__(/*! ./SelectionBoxWidget */ "./src/entities/selection/SelectionBoxWidget.tsx");
class SelectionBoxLayerFactory extends AbstractReactFactory_1.AbstractReactFactory {
    constructor() {
        super('selection');
    }
    generateModel(event) {
        return new SelectionLayerModel_1.SelectionLayerModel();
    }
    generateReactWidget(event) {
        return React.createElement(SelectionBoxWidget_1.SelectionBoxWidget, { rect: event.model.box });
    }
}
exports.SelectionBoxLayerFactory = SelectionBoxLayerFactory;


/***/ }),

/***/ "./src/entities/selection/SelectionBoxWidget.tsx":
/*!*******************************************************!*\
  !*** ./src/entities/selection/SelectionBoxWidget.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_1 = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
var S;
(function (S) {
    S.Container = styled_1.default.div `
		position: absolute;
		background-color: rgba(0, 192, 255, 0.2);
		border: solid 2px rgb(0, 192, 255);
	`;
})(S || (S = {}));
class SelectionBoxWidget extends React.Component {
    render() {
        const { rect } = this.props;
        return (React.createElement(S.Container, { style: {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            } }));
    }
}
exports.SelectionBoxWidget = SelectionBoxWidget;


/***/ }),

/***/ "./src/entities/selection/SelectionLayerModel.ts":
/*!*******************************************************!*\
  !*** ./src/entities/selection/SelectionLayerModel.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LayerModel_1 = __webpack_require__(/*! ../layer/LayerModel */ "./src/entities/layer/LayerModel.ts");
class SelectionLayerModel extends LayerModel_1.LayerModel {
    constructor() {
        super({
            transformed: false,
            isSvg: false,
            type: 'selection'
        });
    }
    setBox(rect) {
        this.box = rect;
    }
    getChildModelFactoryBank() {
        // is not used as it doesnt serialize
        return null;
    }
}
exports.SelectionLayerModel = SelectionLayerModel;


/***/ }),

/***/ "./src/states/DefaultState.ts":
/*!************************************!*\
  !*** ./src/states/DefaultState.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = __webpack_require__(/*! ../core-state/State */ "./src/core-state/State.ts");
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
const DragCanvasState_1 = __webpack_require__(/*! ./DragCanvasState */ "./src/states/DragCanvasState.ts");
const SelectingState_1 = __webpack_require__(/*! ./SelectingState */ "./src/states/SelectingState.ts");
const MoveItemsState_1 = __webpack_require__(/*! ./MoveItemsState */ "./src/states/MoveItemsState.ts");
class DefaultState extends State_1.State {
    constructor() {
        super({
            name: 'default'
        });
        this.childStates = [new SelectingState_1.SelectingState()];
        // determine what was clicked on
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_DOWN,
            fire: (event) => {
                const element = this.engine.getActionEventBus().getModelForEvent(event);
                // the canvas was clicked on, transition to the dragging canvas state
                if (!element) {
                    this.transitionWithEvent(new DragCanvasState_1.DragCanvasState(), event);
                }
                else {
                    this.transitionWithEvent(new MoveItemsState_1.MoveItemsState(), event);
                }
            }
        }));
    }
}
exports.DefaultState = DefaultState;


/***/ }),

/***/ "./src/states/DragCanvasState.ts":
/*!***************************************!*\
  !*** ./src/states/DragCanvasState.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDisplacementState_1 = __webpack_require__(/*! ../core-state/AbstractDisplacementState */ "./src/core-state/AbstractDisplacementState.ts");
class DragCanvasState extends AbstractDisplacementState_1.AbstractDisplacementState {
    constructor() {
        super({
            name: 'drag-canvas'
        });
    }
    activated(prev) {
        const _super = Object.create(null, {
            activated: { get: () => super.activated }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.activated.call(this, prev);
            this.engine.getModel().clearSelection();
            yield this.engine.repaintCanvas(true);
            // we can block layer rendering because we are only targeting the transforms
            for (let layer of this.engine.getModel().getLayers()) {
                layer.allowRepaint(false);
            }
            this.initialCanvasX = this.engine.getModel().getOffsetX();
            this.initialCanvasY = this.engine.getModel().getOffsetY();
        });
    }
    deactivated(next) {
        super.deactivated(next);
        for (let layer of this.engine.getModel().getLayers()) {
            layer.allowRepaint(true);
        }
    }
    fireMouseMoved(event) {
        this.engine
            .getModel()
            .setOffset(this.initialCanvasX + event.displacementX, this.initialCanvasY + event.displacementY);
        this.engine.repaintCanvas();
    }
}
exports.DragCanvasState = DragCanvasState;


/***/ }),

/***/ "./src/states/MoveItemsState.ts":
/*!**************************************!*\
  !*** ./src/states/MoveItemsState.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDisplacementState_1 = __webpack_require__(/*! ../core-state/AbstractDisplacementState */ "./src/core-state/AbstractDisplacementState.ts");
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
const BasePositionModel_1 = __webpack_require__(/*! ../core-models/BasePositionModel */ "./src/core-models/BasePositionModel.ts");
class MoveItemsState extends AbstractDisplacementState_1.AbstractDisplacementState {
    constructor() {
        super({
            name: 'move-items'
        });
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_DOWN,
            fire: (event) => {
                const element = this.engine.getActionEventBus().getModelForEvent(event);
                if (!element.isSelected()) {
                    this.engine.getModel().clearSelection();
                }
                element.setSelected(true);
                this.engine.repaintCanvas();
            }
        }));
    }
    activated(previous) {
        super.activated(previous);
        this.initialPositions = {};
    }
    fireMouseMoved(event) {
        const items = this.engine.getModel().getSelectedEntities();
        const model = this.engine.getModel();
        for (let item of items) {
            if (item instanceof BasePositionModel_1.BasePositionModel) {
                if (item.isLocked()) {
                    continue;
                }
                if (!this.initialPositions[item.getID()]) {
                    this.initialPositions[item.getID()] = {
                        point: item.getPosition(),
                        item: item
                    };
                }
                const pos = this.initialPositions[item.getID()].point;
                item.setPosition(model.getGridPosition(pos.x + event.virtualDisplacementX), model.getGridPosition(pos.y + event.virtualDisplacementY));
            }
        }
        this.engine.repaintCanvas();
    }
}
exports.MoveItemsState = MoveItemsState;


/***/ }),

/***/ "./src/states/SelectingState.ts":
/*!**************************************!*\
  !*** ./src/states/SelectingState.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = __webpack_require__(/*! ../core-state/State */ "./src/core-state/State.ts");
const Action_1 = __webpack_require__(/*! ../core-actions/Action */ "./src/core-actions/Action.ts");
const SelectionBoxState_1 = __webpack_require__(/*! ./SelectionBoxState */ "./src/states/SelectionBoxState.ts");
class SelectingState extends State_1.State {
    constructor() {
        super({
            name: 'selecting'
        });
        this.keys = ['shift'];
        this.registerAction(new Action_1.Action({
            type: Action_1.InputType.MOUSE_DOWN,
            fire: (event) => {
                const element = this.engine.getActionEventBus().getModelForEvent(event);
                // go into a selection box on the canvas state
                if (!element) {
                    this.transitionWithEvent(new SelectionBoxState_1.SelectionBoxState(), event);
                }
                else {
                    element.setSelected(true);
                    this.engine.repaintCanvas();
                }
            }
        }));
    }
}
exports.SelectingState = SelectingState;


/***/ }),

/***/ "./src/states/SelectionBoxState.ts":
/*!*****************************************!*\
  !*** ./src/states/SelectionBoxState.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AbstractDisplacementState_1 = __webpack_require__(/*! ../core-state/AbstractDisplacementState */ "./src/core-state/AbstractDisplacementState.ts");
const SelectionLayerModel_1 = __webpack_require__(/*! ../entities/selection/SelectionLayerModel */ "./src/entities/selection/SelectionLayerModel.ts");
const geometry_1 = __webpack_require__(/*! @projectstorm/geometry */ "@projectstorm/geometry");
class SelectionBoxState extends AbstractDisplacementState_1.AbstractDisplacementState {
    constructor() {
        super({
            name: 'selection-box'
        });
    }
    activated(previous) {
        super.activated(previous);
        this.layer = new SelectionLayerModel_1.SelectionLayerModel();
        this.engine.getModel().addLayer(this.layer);
    }
    deactivated(next) {
        super.deactivated(next);
        this.layer.remove();
        this.engine.repaintCanvas();
    }
    getBoxDimensions(event) {
        const rel = this.engine.getRelativePoint(event.event.clientX, event.event.clientY);
        return {
            left: rel.x > this.initialXRelative ? this.initialXRelative : rel.x,
            top: rel.y > this.initialYRelative ? this.initialYRelative : rel.y,
            width: Math.abs(rel.x - this.initialXRelative),
            height: Math.abs(rel.y - this.initialYRelative),
            right: rel.x < this.initialXRelative ? this.initialXRelative : rel.x,
            bottom: rel.y < this.initialYRelative ? this.initialYRelative : rel.y
        };
    }
    fireMouseMoved(event) {
        this.layer.setBox(this.getBoxDimensions(event));
        const relative = this.engine.getRelativeMousePoint({
            clientX: this.initialX,
            clientY: this.initialY
        });
        if (event.virtualDisplacementX < 0) {
            relative.x -= Math.abs(event.virtualDisplacementX);
        }
        if (event.virtualDisplacementY < 0) {
            relative.y -= Math.abs(event.virtualDisplacementY);
        }
        const rect = new geometry_1.Rectangle(relative, Math.abs(event.virtualDisplacementX), Math.abs(event.virtualDisplacementY));
        for (let model of this.engine.getModel().getSelectionEntities()) {
            if (model.getBoundingBox) {
                const bounds = model.getBoundingBox();
                if (rect.containsPoint(bounds.getTopLeft()) && rect.containsPoint(bounds.getBottomRight())) {
                    model.setSelected(true);
                }
            }
        }
        this.engine.repaintCanvas();
    }
}
exports.SelectionBoxState = SelectionBoxState;


/***/ }),

/***/ "./src/widgets/PeformanceWidget.tsx":
/*!******************************************!*\
  !*** ./src/widgets/PeformanceWidget.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const _ = __webpack_require__(/*! lodash */ "lodash");
class PeformanceWidget extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!this.props.model.performanceTune()) {
            return true;
        }
        // deserialization event
        if (this.props.model !== nextProps.model) {
            return true;
        }
        // change event
        return !_.isEqual(this.props.serialized, nextProps.serialized);
    }
    render() {
        return this.props.children();
    }
}
exports.PeformanceWidget = PeformanceWidget;


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

/***/ "closest":
/*!**************************!*\
  !*** external "closest" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("closest");

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