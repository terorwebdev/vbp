(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-opener\" (click)=\"toggle()\">\n    <mat-icon>settings_applications</mat-icon>\n    <mat-icon>undo</mat-icon>\n    <mat-icon>redo</mat-icon>\n</div>\n\n<app-left-nav class=\"left\" [class.opened]=\"show\">\n</app-left-nav>\n\n<app-layout></app-layout>\n\n<app-right-nav class=\"right\"></app-right-nav>\n<app-upload-view></app-upload-view>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas class=\"whiteboard\"></canvas>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-opener\">\n    <h2>Virtual Brainstorming</h2>\n</div>\n\n<div class=\"closeleft\">\n    <mat-icon (click)=\"toggle()\">clear</mat-icon>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Pick Color\n    </h3>\n    <div class=\"colors\">\n        <div class=\"color\" *ngFor=\"let item of colorList\" [ngStyle]=\"{'background-color': item.hex}\" (click)=\"toggleColor(item)\"></div>\n    </div>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Adjust Size\n    </h3>\n    <mat-slider style=\"width:80%;\" (input)=\"fontSize = $event.value\" [value]=\"fontSize\" [(ngModel)]=\"fontSize\" (ngModelChange)=\"fontSizeChange($event)\">\n    </mat-slider>\n    {{ fontSize }}\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Line Style\n    </h3>\n    <label *ngFor=\"let radiobutton of lineStyleList\">\n    <input type=\"radio\" name=\"options\" (click)=\"toggleLineStyle(radiobutton)\"\n      [checked]=\"radiobutton === initLineStyle.option\">\n      {{radiobutton}}\n  </label>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>right-nav works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jw-modal\">\n    <div class=\"jw-modal-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n<div class=\"jw-modal-background\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"position:absolute; left: 300px;\">\n    <button (click)=\"openModal('custom-modal-1')\">Open Modal 1</button>\n</div>\n\n<jw-modal id=\"custom-modal-1\">\n    <h3>Upload</h3>\n    <p>Only Support Image Only (png / jpg / jpeg)</p>\n    <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n    <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n    <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\">\n    <button (click)=\"addBGimage()\">Insert</button>\n    <button (click)=\"closeModal('custom-modal-1')\">Close</button>\n</jw-modal>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/layout/layout.component */ "./src/app/nav/layout/layout.component.ts");
/* harmony import */ var _nav_init_init_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/init/init.component */ "./src/app/nav/init/init.component.ts");
/* harmony import */ var _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/left-nav/left-nav.component */ "./src/app/nav/left-nav/left-nav.component.ts");
/* harmony import */ var _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/right-nav/right-nav.component */ "./src/app/nav/right-nav/right-nav.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");








const config = { url: 'http://192.168.5.132:3000', options: {} };
const routes = [
    { path: '', component: _nav_init_init_component__WEBPACK_IMPORTED_MODULE_4__["InitComponent"] },
    { path: 'layout', component: _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"] },
    { path: 'left', component: _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_5__["LeftNavComponent"] },
    { path: 'right', component: _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__["RightNavComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["SocketIoModule"].forRoot(config)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'vbp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/socket.service */ "./src/app/service/socket.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/layout/layout.component */ "./src/app/nav/layout/layout.component.ts");
/* harmony import */ var _nav_init_init_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/init/init.component */ "./src/app/nav/init/init.component.ts");
/* harmony import */ var _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/left-nav/left-nav.component */ "./src/app/nav/left-nav/left-nav.component.ts");
/* harmony import */ var _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/right-nav/right-nav.component */ "./src/app/nav/right-nav/right-nav.component.ts");
/* harmony import */ var _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload/upload-view/upload-view.component */ "./src/app/upload/upload-view/upload-view.component.ts");
/* harmony import */ var _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/upload-view/upload-view.service */ "./src/app/upload/upload-view/upload-view.service.ts");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/init.service */ "./src/app/service/init.service.ts");
/* harmony import */ var _service_left_nav_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/left-nav.service */ "./src/app/service/left-nav.service.ts");
/* harmony import */ var _service_right_nav_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/right-nav.service */ "./src/app/service/right-nav.service.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _upload_upload_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload/upload-modal */ "./src/app/upload/upload-modal/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
            _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_8__["LeftNavComponent"],
            _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_9__["RightNavComponent"],
            _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_10__["UploadViewComponent"],
            _nav_init_init_component__WEBPACK_IMPORTED_MODULE_7__["InitComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_16__["MyMaterialModule"],
            _upload_upload_modal__WEBPACK_IMPORTED_MODULE_17__["UploadModalModule"]
        ],
        providers: [
            _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _service_init_service__WEBPACK_IMPORTED_MODULE_12__["InitService"],
            _service_left_nav_service__WEBPACK_IMPORTED_MODULE_13__["LeftNavService"],
            _service_right_nav_service__WEBPACK_IMPORTED_MODULE_14__["RightNavService"],
            _service_layout_service__WEBPACK_IMPORTED_MODULE_15__["LayoutService"],
            _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_11__["UploadViewService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");















let MyMaterialModule = class MyMaterialModule {
};
MyMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatchModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__["NgxMatSelectSearchModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            // angular
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
        ],
        exports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatchModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__["NgxMatSelectSearchModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            // angular
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]
        ]
    })
], MyMaterialModule);



/***/ }),

/***/ "./src/app/nav/init/init.component.css":
/*!*********************************************!*\
  !*** ./src/app/nav/init/init.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-opener {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    padding: 20px;\r\n    display: inline-block;\r\n    z-index: 1;\r\n}\r\n\r\n.left {\r\n    left: 0px;\r\n    z-index: 1;\r\n    position: absolute;\r\n    background-color: #FFCC55;\r\n    height: 100%;\r\n    max-width: 0px;\r\n    overflow-y: auto;\r\n    transition: ease-in-out 400ms max-width;\r\n}\r\n\r\n.left.opened {\r\n    z-index: 1;\r\n    position: absolute;\r\n    height: 100%;\r\n    max-width: 240px;\r\n    transition: ease-in-out 600ms max-width;\r\n}\r\n\r\n.layout {\r\n    position: absolute;\r\n}\r\n\r\n.right {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2luaXQvaW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdi9pbml0L2luaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtb3BlbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0M1NTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC13aWR0aDtcclxufVxyXG5cclxuLmxlZnQub3BlbmVkIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LXdpZHRoO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nav/init/init.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav/init/init.component.ts ***!
  \********************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/init.service */ "./src/app/service/init.service.ts");



let InitComponent = class InitComponent {
    constructor(initService) {
        this.initService = initService;
        this.show = false;
        this.initService.toggleLeft.subscribe(data => {
            console.log('clicked');
            this.toggle();
        });
    }
    ngOnInit() {
    }
    toggle() {
        this.show = !this.show;
    }
};
InitComponent.ctorParameters = () => [
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] }
];
InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-init',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./init.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./init.component.css */ "./src/app/nav/init/init.component.css")).default]
    })
], InitComponent);



/***/ }),

/***/ "./src/app/nav/layout/layout.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/layout/layout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-opener {\r\n    cursor: pointer;\r\n}\r\n\r\n.whiteboard {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2hpdGVib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav/layout/layout.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/layout/layout.component.ts ***!
  \************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/init.service */ "./src/app/service/init.service.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/socket.service */ "./src/app/service/socket.service.ts");





let LayoutComponent = class LayoutComponent {
    constructor(socketService, initService, layoutService, render) {
        this.socketService = socketService;
        this.initService = initService;
        this.layoutService = layoutService;
        this.render = render;
        this.current = {
            lineStyle: 'round',
            fontSize: 5,
            color: 'black'
        };
        this.drawing = false;
        this.loadimage = false;
    }
    onResize(event) {
        this.canvas.width = event.target.innerWidth;
        this.canvas.height = event.target.innerHeight;
    }
    initResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    ngOnInit() {
        // To watch incomming socket message
        this.socketService
            .getMessage()
            .subscribe(msg => {
            console.log('Incoming msg', msg);
            // this.onDrawingEvent(msg);
            if (msg.type === 'bgImage') {
                this.onBGimgUpdate(msg, false);
            }
            if (msg.type === 'line') {
                // console.log(msg);
                this.onDrawingEvent(msg);
            }
        });
        // To watch if color change
        this.initService.lineColor.subscribe(data => {
            console.log('lineColor : ', data);
            this.onColorUpdate(data);
        });
        // To watch if line size change
        this.initService.lineSize.subscribe(data => {
            console.log('lineColor : ', data);
            this.onFontSizeUpdate(data);
        });
        // To watch if line size change
        this.initService.lineStyle.subscribe(data => {
            console.log('lineColor : ', data);
            this.onLineStyleUpdate(data);
        });
        // To watch image
        this.layoutService.bgImage.subscribe(data => {
            console.log('Bg received : ', data);
            this.loadimage = true;
            this.onBGimgUpdate(data, true);
        });
    }
    sendMsg(msg) {
        this.socketService.sendMessage(msg);
    }
    initCanvas() {
        const classCanvas = document.querySelectorAll('.whiteboard');
        this.canvas = classCanvas[0];
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = '#000000';
        console.log(this.context);
    }
    ngAfterViewInit() {
        this.initCanvas();
        this.initResize();
        // Windows browser
        this.render.listen(this.canvas, 'mousedown', (target) => {
            console.log('mousedown', target);
            this.onMouseDown(target);
        });
        this.render.listen(this.canvas, 'mouseup', (target) => {
            console.log('mouseup', target);
            this.onMouseUp(target);
        });
        this.render.listen(this.canvas, 'mouseout', (target) => {
            // console.log('mouseout', target);
            this.onMouseUp(target);
        });
        this.render.listen(this.canvas, 'mousemove', (target) => {
            this.onMouseMove(target);
            // this.throttle(target, 10);
            // console.log('mousemove', target);
        });
        // Touch support for mobile devices
        this.render.listen(this.canvas, 'touchstart', (target) => {
            this.onMouseDown(target);
            // console.log('touchstart', target);
        });
        this.render.listen(this.canvas, 'touchcancel', (target) => {
            this.onMouseUp(target);
            // console.log('touchcancel', target);
        });
        this.render.listen(this.canvas, 'mouseout', (target) => {
            this.onMouseUp(target);
            // console.log('mouseout', target);
        });
        this.render.listen(this.canvas, 'touchmove', (target) => {
            this.onMouseMove(target);
            // console.log('mousemove', target);
        });
    }
    drawLine(x0, y0, x1, y1, color1, style, fontSize, emit) {
        console.log(x0, y0);
        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.context.strokeStyle = color1;
        this.context.lineCap = style;
        this.context.lineWidth = fontSize;
        // this.context.globalCompositeOperation = 'destination-atop';
        this.context.stroke();
        this.context.closePath();
        if (!emit) {
            return;
        }
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.sendMsg({
            type: 'line',
            x0: x0 / w,
            y0: y0 / h,
            x1: x1 / w,
            y1: y1 / h,
            color: color1,
            line_style: style,
            font_size: fontSize
        });
    }
    onDrawingEvent(data) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        console.log(w);
        // console.log(data.x0, data.y0);
        this.drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.line_style, data.font_size, false);
    }
    onMouseDown(e) {
        // console.log(e);
        this.drawing = true;
        this.current.x = e.clientX || e.touches[0].clientX;
        this.current.y = e.clientY || e.touches[0].clientY;
    }
    onMouseUp(e) {
        if (!this.drawing) {
            return;
        }
        this.drawing = false;
        this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
    }
    onMouseMove(e) {
        if (!this.drawing) {
            return;
        }
        this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
        this.current.x = e.clientX || e.touches[0].clientX;
        this.current.y = e.clientY || e.touches[0].clientY;
    }
    onFontSizeUpdate(e) {
        this.current.fontSize = e;
    }
    onColorUpdate(e) {
        // this.current.color = e.target.className.split(' ')[1];
        this.current.color = e.hex;
    }
    onLineStyleUpdate(e) {
        this.current.lineStyle = e;
    }
    onBGimgUpdate(e, emit) {
        const image = new Image();
        image.onload = () => {
            // this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            const top = this.canvas.height * 0.10;
            const left = this.canvas.width * 0.05;
            const imgHeight = this.canvas.height * 0.50;
            const imgWidth = this.canvas.width * 0.50;
            console.log('Top : ' + top);
            console.log('Left : ' + left);
            this.context.drawImage(image, left, top, imgWidth, imgHeight);
        };
        image.src = e.data;
        this.sendImage(e, emit);
    }
    sendImage(e, emit) {
        if (emit) {
            this.sendMsg(e);
        }
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_1__["InitService"] },
    { type: _service_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize', ['$event'])
], LayoutComponent.prototype, "onResize", null);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/nav/layout/layout.component.css")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/nav/left-nav/left-nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav/left-nav/left-nav.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-opener {\r\n    padding: 5px;\r\n    display: inline-block;\r\n    z-index: 1;\r\n}\r\n\r\n.closeleft {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    right: 5px;\r\n    top: 20px;\r\n}\r\n\r\n.color {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    margin: 2px;\r\n    height: 48px;\r\n    width: 48px;\r\n}\r\n\r\n.menu-item {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xlZnQtbmF2L2xlZnQtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL25hdi9sZWZ0LW5hdi9sZWZ0LW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNsb3NlbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav/left-nav/left-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav/left-nav/left-nav.component.ts ***!
  \****************************************************/
/*! exports provided: LeftNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function() { return LeftNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/init.service */ "./src/app/service/init.service.ts");



let LeftNavComponent = class LeftNavComponent {
    constructor(initService) {
        this.initService = initService;
        this.fontSize = 5;
        this.colorList = [
            { name: 'black', hex: '#000000' },
            { name: 'silver', hex: '#c0c0c0' },
            { name: 'gray', hex: '#808080' },
            { name: 'white', hex: '#ffffff' },
            { name: 'maroon', hex: '#800000' },
            { name: 'red', hex: '#ff0000' },
            { name: 'purple', hex: '#800080' },
            { name: 'fuchsia', hex: '#ff00ff' },
            { name: 'green', hex: '#008000' },
            { name: 'lime', hex: '#00ff00' },
            { name: 'olive', hex: '#808000' },
            { name: 'yellow', hex: '#ffff00' },
            { name: 'navy', hex: '#000080' },
            { name: 'blue', hex: '#0000ff' },
            { name: 'teal', hex: '#008080' },
            { name: 'aqua', hex: '#00ffff' }
        ];
        this.initLineStyle = { option: 'round' };
        this.lineStyleList = [
            'round',
            'butt',
            'square'
        ];
    }
    ngOnInit() {
    }
    toggle() {
        this.initService.viewLeft();
    }
    toggleColor(item) {
        this.initService.setLineColor(item);
    }
    fontSizeChange(event) {
        this.initService.setLineSize(event);
    }
    toggleLineStyle(event) {
        this.initService.setLineStyle(event);
    }
};
LeftNavComponent.ctorParameters = () => [
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] }
];
LeftNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-left-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./left-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./left-nav.component.css */ "./src/app/nav/left-nav/left-nav.component.css")).default]
    })
], LeftNavComponent);



/***/ }),

/***/ "./src/app/nav/right-nav/right-nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/nav/right-nav/right-nav.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9yaWdodC1uYXYvcmlnaHQtbmF2LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/nav/right-nav/right-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nav/right-nav/right-nav.component.ts ***!
  \******************************************************/
/*! exports provided: RightNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightNavComponent", function() { return RightNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightNavComponent = class RightNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
RightNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-right-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-nav.component.css */ "./src/app/nav/right-nav/right-nav.component.css")).default]
    })
], RightNavComponent);



/***/ }),

/***/ "./src/app/service/init.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/init.service.ts ***!
  \*****************************************/
/*! exports provided: InitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitService", function() { return InitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InitService = class InitService {
    constructor() {
        this.toggleLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineStyle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    viewLeft() {
        this.toggleLeft.emit({});
    }
    setLineColor(item) {
        this.lineColor.emit(item);
    }
    setLineSize(item) {
        this.lineSize.emit(item);
    }
    setLineStyle(item) {
        this.lineStyle.emit(item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "toggleLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineStyle", void 0);
InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InitService);



/***/ }),

/***/ "./src/app/service/layout.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/layout.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutService = class LayoutService {
    constructor() {
        this.bgImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    viewImg(item) {
        this.bgImage.emit(item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LayoutService.prototype, "bgImage", void 0);
LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LayoutService);



/***/ }),

/***/ "./src/app/service/left-nav.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/left-nav.service.ts ***!
  \*********************************************/
/*! exports provided: LeftNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavService", function() { return LeftNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeftNavService = class LeftNavService {
    constructor() { }
};
LeftNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeftNavService);



/***/ }),

/***/ "./src/app/service/right-nav.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/right-nav.service.ts ***!
  \**********************************************/
/*! exports provided: RightNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightNavService", function() { return RightNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightNavService = class RightNavService {
    constructor() { }
};
RightNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RightNavService);



/***/ }),

/***/ "./src/app/service/socket.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/socket.service.ts ***!
  \*******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");




let SocketService = class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
    getMessage() {
        return this.socket
            .fromEvent('drawing')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    sendMessage(msg) {
        this.socket.emit('drawing', msg);
    }
};
SocketService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/upload/upload-modal/index.ts":
/*!**********************************************!*\
  !*** ./src/app/upload/upload-modal/index.ts ***!
  \**********************************************/
/*! exports provided: UploadModalModule, UploadModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _upload_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-modal.module */ "./src/app/upload/upload-modal/upload-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadModalModule", function() { return _upload_modal_module__WEBPACK_IMPORTED_MODULE_1__["UploadModalModule"]; });

/* harmony import */ var _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-modal.service */ "./src/app/upload/upload-modal/upload-modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadModalService", function() { return _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"]; });






/***/ }),

/***/ "./src/app/upload/upload-modal/upload-modal.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/upload/upload-modal/upload-modal.component.less ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC1tb2RhbC91cGxvYWQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3VwbG9hZC91cGxvYWQtbW9kYWwvQzovemFuZGFyRGV2L3ZicC9zcmMvYXBwL3VwbG9hZC91cGxvYWQtbW9kYWwvdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ0NoQztFRENFLGlDQUFpQztFQ0NqQyxhQUFBO0FEQ0Y7QUNIQTtFREtFLDhDQUE4QztFQ0MxQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFRENKLHFEQUFxRDtFQ0VqRCxhQUFBO0VEQUosc0NBQXNDO0VDR2xDLGNBQUE7QURETjtBQ2ZBO0VBbUJVLGFBQUE7RUFDQSxnQkFBQTtFRERSLGdEQUFnRDtFQ0l4QyxZQUFBO0FERlY7QUNyQkE7RUR1QkUsK0NBQStDO0VDTTNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VESkosNEJBQTRCO0VDT3hCLHNCQUFBO0VBQ0EsYUFBQTtFRExKLCtEQUErRDtFQ1EzRCxZQUFBO0FETk47QUNVQTtFRFJFLDZFQUE2RTtFQ1U3RSxnQkFBQTtBRFJGIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkL3VwbG9hZC1tb2RhbC91cGxvYWQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuanctbW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5qdy1tb2RhbCAuanctbW9kYWwge1xuICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbCAuanctbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgbWFyZ2luOiA0MHB4O1xufVxuanctbW9kYWwgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgei1pbmRleDogOTAwO1xufVxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuanctbW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgLmp3LW1vZGFsIHtcbiAgICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgICAgei1pbmRleDogMTAwMDtcblxuICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgLmp3LW1vZGFsLWJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cbiAgICAgICAgICBtYXJnaW46IDQwcHg7XG4gICAgICB9XG4gIH1cblxuICAuanctbW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcblxuICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuXG4gICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICB6LWluZGV4OiA5MDA7XG4gIH1cbn1cblxuYm9keS5qdy1tb2RhbC1vcGVuIHtcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/upload/upload-modal/upload-modal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/upload/upload-modal/upload-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalComponent", function() { return UploadModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-modal.service */ "./src/app/upload/upload-modal/upload-modal.service.ts");



let UploadModalComponent = class UploadModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
UploadModalComponent.ctorParameters = () => [
    { type: _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadModalComponent.prototype, "id", void 0);
UploadModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'jw-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-modal.component.less */ "./src/app/upload/upload-modal/upload-modal.component.less")).default]
    })
], UploadModalComponent);



/***/ }),

/***/ "./src/app/upload/upload-modal/upload-modal.module.ts":
/*!************************************************************!*\
  !*** ./src/app/upload/upload-modal/upload-modal.module.ts ***!
  \************************************************************/
/*! exports provided: UploadModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalModule", function() { return UploadModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _upload_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-modal.component */ "./src/app/upload/upload-modal/upload-modal.component.ts");




let UploadModalModule = class UploadModalModule {
};
UploadModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _upload_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadModalComponent"]
        ],
        exports: [
            _upload_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadModalComponent"]
        ]
    })
], UploadModalModule);



/***/ }),

/***/ "./src/app/upload/upload-modal/upload-modal.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/upload/upload-modal/upload-modal.service.ts ***!
  \*************************************************************/
/*! exports provided: UploadModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModalService", function() { return UploadModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploadModalService = class UploadModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
};
UploadModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadModalService);



/***/ }),

/***/ "./src/app/upload/upload-view/upload-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/upload/upload-view/upload-view.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQtdmlldy91cGxvYWQtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/upload/upload-view/upload-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/upload/upload-view/upload-view.component.ts ***!
  \*************************************************************/
/*! exports provided: UploadViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadViewComponent", function() { return UploadViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upload_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-modal */ "./src/app/upload/upload-modal/index.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/layout.service */ "./src/app/service/layout.service.ts");




let UploadViewComponent = class UploadViewComponent {
    constructor(modalService, layoutService) {
        this.modalService = modalService;
        this.layoutService = layoutService;
    }
    ngOnInit() {
    }
    preview(files) {
        console.log(files);
        if (files.length === 0) {
            return;
        }
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        console.log(this.imagePath);
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            console.log(reader);
        };
    }
    addBGimage(item) {
        this.layoutService.viewImg({ type: 'bgImage', data: this.imgURL });
        this.closeModal('custom-modal-1');
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(id) {
        this.imagePath = '';
        this.imgURL = '';
        this.modalService.close(id);
    }
};
UploadViewComponent.ctorParameters = () => [
    { type: _upload_modal__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"] },
    { type: _service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"] }
];
UploadViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-view.component.css */ "./src/app/upload/upload-view/upload-view.component.css")).default]
    })
], UploadViewComponent);



/***/ }),

/***/ "./src/app/upload/upload-view/upload-view.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/upload/upload-view/upload-view.service.ts ***!
  \***********************************************************/
/*! exports provided: UploadViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadViewService", function() { return UploadViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploadViewService = class UploadViewService {
    constructor() { }
};
UploadViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadViewService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\zandarDev\vbp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map