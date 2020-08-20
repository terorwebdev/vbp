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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>\n\n<!-- <app-main></app-main> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center; padding: 20px;\">\n    <img style=\"width: 150px;\n  height: 150px;\" src=\"assets/img/magicboard_logo.png\">\n    <h2><p style=\"font-family: 'Montserrat-Black';\">Magic-board:Whiteboard</p></h2>\n</div>\n\n<section class=\"container\">\n    <div class=\"box\" (click)=\"openDialog('Student')\">\n        <h1>Student</h1>\n        <img style=\"width: 250px;\n        height: 250px;\" src=\"assets/stud.png\">\n    </div>\n    <div class=\"box\" (click)=\"openDialog('Teacher')\">\n        <h1>Teacher</h1>\n        <img style=\"width: 250px;\n        height: 250px;\" src=\"assets/teachhh.png\">\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <div class=\"item\">\n        <mat-toolbar>\n            <span>LOGIN</span>\n        </mat-toolbar>\n\n        <mat-card class=\"my-card\">\n\n            <mat-card-content>\n\n                <form class=\"my-form\">\n\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Username\" name=\"username\" required #username>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" required #password>\n                    </mat-form-field>\n\n                </form>\n\n            </mat-card-content>\n\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"onClickSubmit(username.value, password.value)\" color=\"primary\">Login</button> &nbsp;&nbsp;\n                <button mat-button routerLink=\"/register\" color=\"primary\">Register</button>\n            </mat-card-actions>\n\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <h1 matDialogTitle>Student</h1>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Name  : \" [(ngModel)]=\"local_data.hostname\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Password  : \" [(ngModel)]=\"local_data.hostname\">\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onSubmit()\">Add</button>\n    </mat-dialog-actions>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"body2\">\n    <div class='row'>\n        <div class='column'>\n            <div class='blue-column'>\n                <mat-icon (click)=\"toggle()\" style=\"position: absolute;cursor: pointer;\">clear</mat-icon>\n                <span class=\"fill-remaining-space\"></span>\n                <h3>Chatbox</h3>\n                <span class=\"fill-remaining-space\"></span>\n            </div>\n            <div class='blue-column-full'>\n                <div style=\"height: 100%; background-color: white;overflow: auto;\">\n                    <div *ngFor=\"let item of msg_list\" style=\"display: inline-flex;width: 100%;\">\n                        <span style=\"font-family: Montserrat-SemiBold;\">{{item.name}}</span><span>&nbsp;:&nbsp;{{item.msg}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class='blue-column-bottom'>\n                <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"1\"\n                    cdkAutosizeMaxRows=\"10\" style=\"width: 100%;\" [(ngModel)]='msg_to_send'></textarea>\n                &nbsp;\n                <mat-icon (click)=\"send_msg()\" class=\"pointer\">send</mat-icon>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-openerLeft\" (click)=\"toggleLeft()\">\n    <span style=\"display: inline-flex;\n    font-size: large;font-family: 'Montserrat-Black';\">\n        <mat-icon>apps</mat-icon>\n        &nbsp;\n        <img src=\"assets/img/magicboard_logo.png\" width=\"24px\" height=\"20px\">\n        &nbsp;\n        Magic-board:Whiteboard\n    </span>\n    <!-- <mat-icon>undo</mat-icon>\n    <mat-icon>redo</mat-icon> -->\n</div>\n\n<div class=\"box-openerRight\" *ngIf=\"position==='Teacher'\" (click)=\"toggleRight()\">\n    <mat-icon>settings_applications</mat-icon>  &nbsp; Setting\n</div>\n\n<div class=\"box-openerRightBottom\" (click)=\"toggleChatbox()\">\n    <mat-icon>chat</mat-icon> &nbsp; Open Chatbox\n</div>\n\n<app-left-nav class=\"left\" [class.opened]=\"showLeft\">\n</app-left-nav>\n\n<app-layout></app-layout>\n\n<app-right-nav class=\"right\" [class.opened]=\"showRight\"></app-right-nav>\n\n<app-chat-box class=\"rightchatbox\" [class.opened]=\"showChatBox\"></app-chat-box>\n\n<app-upload-view></app-upload-view>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-opener\">\n    <img src=\"assets/img/magicboard_logo_white.png\" width=\"100px\" height=\"80px\" style=\"padding-top: 20px;\">\n</div>\n\n<div class=\"closeleft\">\n    <mat-icon (click)=\"toggle()\">clear</mat-icon>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Pick Color :\n        <div class=\"pickColor\" [ngStyle]=\"{'background-color': currentColor.hex}\"></div>\n    </h3>\n    <div class=\"colors\">\n        <div class=\"color\" *ngFor=\"let item of colorList\" [ngStyle]=\"{'background-color': item.hex}\" (click)=\"toggleColor(item)\"></div>\n    </div>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Adjust Size\n    </h3>\n    <mat-slider style=\"width:80%;\" (input)=\"fontSize = $event.value\" [value]=\"fontSize\" [(ngModel)]=\"fontSize\" (ngModelChange)=\"fontSizeChange($event)\">\n    </mat-slider>\n    {{ fontSize }}\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Line Style\n    </h3>\n    <label *ngFor=\"let radiobutton of lineStyleList\">\n    <input type=\"radio\" name=\"options\" (click)=\"toggleLineStyle(radiobutton)\"\n      [checked]=\"radiobutton === initLineStyle.option\">\n      {{radiobutton}}\n  </label>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-opener\">\n    <h3>Master Setting</h3>\n</div>\n\n<div class=\"closeRight\">\n    <mat-icon (click)=\"toggle()\">clear</mat-icon>\n</div>\n\n<div class=\"box-opener1\">\n    <div>Image : <button (click)=\"openUpload()\">Insert</button></div>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">History</h4>\n    <p> Press <button (click)=\"clearLayout()\">Clear</button> to clean whiteboard</p>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">Export Sketch</h4>\n    <p style=\"text-align: center;\"><button (click)=\"downloadimage()\">Download as image</button></p>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">Access Right</h4>\n\n    <p style=\"font-size: 14px;\">Total Student : {{studentList.length}} </p>\n    <div style=\"text-align: center;\"><button (click)=\"allowAll()\">Allow All</button> <button (click)=\"disAllowAll()\">Disallow All</button></div>\n\n    <ul>\n        <li *ngFor=\"let item of studentList\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.allow\" (change)=\"onChange(item)\">{{item.name}}\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <h1 matDialogTitle>{{position}}</h1>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Name  : \" #username>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Password  : \" #password>\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onSubmit(username.value, password.value)\">Submit</button>\n    </mat-dialog-actions>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>student works!</p>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  <div style=\"position:absolute; left: 300px;\">\n    <button (click)=\"openModal('custom-modal-1')\">Open Modal 1</button>\n</div>\n-->\n\n<jw-modal id=\"custom-modal-1\">\n    <h3>Upload</h3>\n    <p>Only Support Image Only (png / jpg / jpeg)</p>\n    <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n    <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n    <br />\n    <img [src]=\"imgURL\" height=\"200\" width=\"200\" *ngIf=\"imgURL\">\n    <br />\n    <button (click)=\"addBGimage()\">Insert</button>\n    <button (click)=\"closeModal('custom-modal-1')\">Close</button>\n</jw-modal>");

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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");









const path = 'http://' + window.location.hostname + ':3000';
const config = { url: path, options: {} };
const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
    { path: 'init', component: _nav_init_init_component__WEBPACK_IMPORTED_MODULE_4__["InitComponent"] },
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
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(config)
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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/upload-view/upload-view.component */ "./src/app/upload/upload-view/upload-view.component.ts");
/* harmony import */ var _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload/upload-view/upload-view.service */ "./src/app/upload/upload-view/upload-view.service.ts");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/init.service */ "./src/app/service/init.service.ts");
/* harmony import */ var _service_left_nav_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/left-nav.service */ "./src/app/service/left-nav.service.ts");
/* harmony import */ var _service_right_nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/right-nav.service */ "./src/app/service/right-nav.service.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_views_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/views.service */ "./src/app/service/views.service.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _upload_upload_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./upload/upload-modal */ "./src/app/upload/upload-modal/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _master_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./master/login/login.component */ "./src/app/master/login/login.component.ts");
/* harmony import */ var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/student-auth.service */ "./src/app/service/student-auth.service.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student/modal-user/modal-user.component */ "./src/app/student/modal-user/modal-user.component.ts");
/* harmony import */ var _service_status_position_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/status-position.service */ "./src/app/service/status-position.service.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _db_conn_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./db/conn.service */ "./src/app/db/conn.service.ts");
/* harmony import */ var _nav_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nav/chat-box/chat-box.component */ "./src/app/nav/chat-box/chat-box.component.ts");





























// db connection


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
            _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_8__["LeftNavComponent"],
            _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_9__["RightNavComponent"],
            _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_11__["UploadViewComponent"],
            _nav_init_init_component__WEBPACK_IMPORTED_MODULE_7__["InitComponent"],
            _master_master_component__WEBPACK_IMPORTED_MODULE_22__["MasterComponent"],
            _master_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_25__["StudentComponent"],
            _nav_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_30__["ChatBoxComponent"],
            _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__["ModalUserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_19__["MyMaterialModule"],
            _upload_upload_modal__WEBPACK_IMPORTED_MODULE_20__["UploadModalModule"]
        ],
        providers: [
            // db
            _db_conn_service__WEBPACK_IMPORTED_MODULE_29__["ConnService"],
            // socket
            _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            // master
            _service_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
            // current view
            _service_views_service__WEBPACK_IMPORTED_MODULE_18__["ViewsService"],
            // what position master/student
            _service_status_position_service__WEBPACK_IMPORTED_MODULE_27__["StatusPositionService"],
            // student
            _service_student_auth_service__WEBPACK_IMPORTED_MODULE_24__["StudentAuthService"],
            // history
            _service_history_service__WEBPACK_IMPORTED_MODULE_28__["HistoryService"],
            _service_init_service__WEBPACK_IMPORTED_MODULE_13__["InitService"],
            _service_left_nav_service__WEBPACK_IMPORTED_MODULE_14__["LeftNavService"],
            _service_right_nav_service__WEBPACK_IMPORTED_MODULE_15__["RightNavService"],
            _service_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"],
            _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_12__["UploadViewService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [
            _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__["ModalUserComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/db/conn.service.ts":
/*!************************************!*\
  !*** ./src/app/db/conn.service.ts ***!
  \************************************/
/*! exports provided: ConnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnService", function() { return ConnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConnService = class ConnService {
    constructor() { }
};
ConnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConnService);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    width: 100%;\n    flex-wrap: wrap;\n    text-align: center;\n    display: flex;\n    vertical-align: middle;\n    -webkit-flex-align: center;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.box {\n    width: 100%;\n    max-width: 30%;\n    border: 1px solid black;\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUcxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_status_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/status-position.service */ "./src/app/service/status-position.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/student-auth.service */ "./src/app/service/student-auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../student/modal-user/modal-user.component */ "./src/app/student/modal-user/modal-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let MainComponent = class MainComponent {
    constructor(router, statusPosition, authService, StudentAuth, dialog) {
        this.router = router;
        this.statusPosition = statusPosition;
        this.authService = authService;
        this.StudentAuth = StudentAuth;
        this.dialog = dialog;
        // this.statusPosition.init();
        // this.authService.init();
        // this.StudentAuth.init();
    }
    ngOnInit() {
        const pos = this.statusPosition.getPosition();
        if (pos === "Teacher") {
            const status = this.authService.isUserLoggedIn();
            if (status) {
                // route
                this.router.navigate(['init']);
                console.log("master route to layout");
            }
            else {
                // not route back
            }
        }
        else {
            // this.statusPosition.setPosition(result.position);
            const status = this.StudentAuth.isUserLoggedIn();
            if (status) {
                // route
                this.router.navigate(['init']);
                console.log("student route to layout");
            }
            else {
                // not route back
            }
        }
    }
    openDialog(status) {
        const dialogRef = this.dialog.open(_student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_6__["ModalUserComponent"], {
            data: status
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.statusPosition.setPosition(result.position);
            if (result.position === "Teacher") {
                // this.statusPosition.setPosition(result.position);
                const status = this.authService.isUserLoggedIn();
                if (status !== null) {
                    // route
                    this.router.navigate(['init']);
                    console.log("route to layout");
                }
                else {
                    // not route back
                }
            }
            else {
                // this.statusPosition.setPosition(result.position);
                const status = this.StudentAuth.isUserLoggedIn();
                if (status !== null) {
                    // route
                    this.router.navigate(['init']);
                    console.log("route to layout");
                }
                else {
                    // not route back
                }
            }
        });
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_2__["StatusPositionService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__["StudentAuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/master/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/master/login/login.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.full-width {\n    width: 100%;\n}\n\n.container {\n    width: 100%;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n}\n\n.item {\n    color: white;\n    font-weight: bold;\n    align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/master/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/master/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    onClickSubmit(username, password) {
        if (this.authenticationService.authenticate(username, password)) {
            this.router.navigate(['']);
            this.invalidLogin = false;
        }
        else {
            this.invalidLogin = true;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/master/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MasterComponent = class MasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")).default]
    })
], MasterComponent);



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
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
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
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
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

/***/ "./src/app/nav/chat-box/chat-box.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav/chat-box/chat-box.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".closeRight {\n    cursor: pointer;\n    display: inline-flex;\n    left: 5px;\n    top: 20px;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.box-opener {\n    padding: 5px;\n    z-index: 1;\n    text-align: center;\n}\n\n.box-opener1 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.box-opener2 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.bottomSend {\n    cursor: pointer;\n    bottom: 10px;\n    width: 100%;\n    display: inline-flex;\n}\n\n.chatlist {\n    background-color: white;\n    padding: 10px;\n    height: 100%;\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.body2 {\n    display: flex;\n    height: 100%;\n  }\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n}\n\n.row {\ndisplay: flex;\nflex: 1;\nheight: auto;\nborder: 1px;\n}\n\n.column {\ndisplay: flex;\nflex-direction: column;\nflex-basis: 100%;\nflex: 1;\n}\n\n.blue-column {\nheight: auto;\npadding: 10px;\ndisplay: inline-flex;\n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n}\n\n.blue-column-bottom {\n    display: inline-flex;\n    height: auto;\n    padding: 10px;\n    }\n\n.blue-column-full {\n    height: 100%;\n    padding: 10px;\n    }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUVBO0lBQ0U7K0NBQzJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsT0FBTztBQUNQLFlBQVk7QUFDWixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLG9CQUFvQjtBQUNwQjs7QUFFQTtJQUNJOytDQUMyQztJQUMzQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2I7O0FBRUo7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiIiwiZmlsZSI6InNyYy9hcHAvbmF2L2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2VSaWdodCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3gtb3BlbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gtb3BlbmVyMSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyMiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3R0b21TZW5kIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2hhdGxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm9keTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbiAgXG4ucm93IHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4OiAxO1xuaGVpZ2h0OiBhdXRvO1xuYm9yZGVyOiAxcHg7XG59XG5cbi5jb2x1bW4ge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5mbGV4LWJhc2lzOiAxMDAlO1xuZmxleDogMTtcbn1cblxuLmJsdWUtY29sdW1uIHtcbmhlaWdodDogYXV0bztcbnBhZGRpbmc6IDEwcHg7XG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJsdWUtY29sdW1uLWJvdHRvbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4uYmx1ZS1jb2x1bW4tZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/nav/chat-box/chat-box.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav/chat-box/chat-box.component.ts ***!
  \****************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/init.service */ "./src/app/service/init.service.ts");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/socket.service */ "./src/app/service/socket.service.ts");
/* harmony import */ var _service_status_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/status-position.service */ "./src/app/service/status-position.service.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/layout.service */ "./src/app/service/layout.service.ts");







let ChatBoxComponent = class ChatBoxComponent {
    constructor(initService, historyService, socketService, layoutService, statusPositionService) {
        this.initService = initService;
        this.historyService = historyService;
        this.socketService = socketService;
        this.layoutService = layoutService;
        this.statusPositionService = statusPositionService;
        this.msg_to_send = "";
        this.name = "";
        this.msg_list = [];
        this.socketService
            .getMessage()
            .subscribe(msg => {
            console.log('Incoming Message', msg);
            this.msg_list.push(msg);
        });
    }
    ngOnInit() {
    }
    toggle() {
        this.initService.viewChatbox();
    }
    send_msg() {
        console.log(this.statusPositionService.getusername() + ' msg_to_send : ' + this.msg_to_send);
        let to_send_msg = {
            name: this.statusPositionService.getusername(),
            msg: this.msg_to_send
        };
        this.msg_list.push(to_send_msg);
        this.socketService.sendMessage(to_send_msg);
        this.msg_to_send = "";
    }
};
ChatBoxComponent.ctorParameters = () => [
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] },
    { type: _service_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _service_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"] },
    { type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_4__["StatusPositionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autosize', { static: false })
], ChatBoxComponent.prototype, "autosize", void 0);
ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-box.component.css */ "./src/app/nav/chat-box/chat-box.component.css")).default]
    })
], ChatBoxComponent);



/***/ }),

/***/ "./src/app/nav/init/init.component.css":
/*!*********************************************!*\
  !*** ./src/app/nav/init/init.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box-openerLeft {\n    cursor: pointer;\n    position: absolute;\n    padding: 20px;\n    display: inline-block;\n    z-index: 1;\n}\n\n.box-openerRight {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    padding: 20px;\n    display: inline-flex;\n    z-index: 1;\n}\n\n.box-openerRightBottom {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    padding: 20px;\n    display: inline-flex;\n    z-index: 1;\n}\n\n.left {\n    left: 0px;\n    z-index: 1;\n    position: absolute;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.left.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 240px;\n    max-width: 240px;\n    transition: ease-in-out 600ms max-width;\n}\n\n.layout {\n    position: absolute;\n}\n\n.right {\n    position: absolute;\n    right: 0px;\n    z-index: 1;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.right.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 240px;\n    max-width: 240px;\n    transition: ease-in-out 600ms max-width;\n}\n\n.rightchatbox {\n    position: absolute;\n    right: 0px;\n    z-index: 1;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.rightchatbox.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 300px;\n    max-width: 300px;\n    transition: ease-in-out 400ms max-width;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2luaXQvaW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvbmF2L2luaXQvaW5pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXJMZWZ0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyUmlnaHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyUmlnaHRCb3R0b20ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sZWZ0IHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5sZWZ0Lm9wZW5lZCB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC13aWR0aDtcbn1cblxuLmxheW91dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodC5vcGVuZWQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodGNoYXRib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodGNoYXRib3gub3BlbmVkIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LXdpZHRoO1xufSJdfQ== */");

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
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/student-auth.service */ "./src/app/service/student-auth.service.ts");
/* harmony import */ var _service_status_position_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/status-position.service */ "./src/app/service/status-position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let InitComponent = class InitComponent {
    constructor(router, statusPosition, authService, StudentAuth, initService) {
        this.router = router;
        this.statusPosition = statusPosition;
        this.authService = authService;
        this.StudentAuth = StudentAuth;
        this.initService = initService;
        this.showLeft = false;
        this.showRight = false;
        this.showChatBox = false;
        this.position = 'Teacher';
        this.initService.toggleLeft.subscribe(data => {
            console.log('clicked');
            this.toggleLeft();
        });
        this.initService.toggleRight.subscribe(data => {
            console.log('clicked');
            this.toggleRight();
        });
        this.initService.toggleChatbox.subscribe(data => {
            console.log('clicked');
            this.toggleChatbox();
        });
    }
    ngOnInit() {
        this.position = this.statusPosition.getPosition();
        if (this.position === "Teacher") {
            const status = this.authService.isUserLoggedIn();
            if (status) {
                // route
            }
            else {
                // not route back
                this.router.navigate(['']);
                console.log("route to layout");
            }
        }
        else {
            // this.statusPosition.setPosition(result.position);
            const status = this.StudentAuth.isUserLoggedIn();
            if (status) {
                // route
                this.StudentAuth.masterConnect();
            }
            else {
                // not route back
                this.router.navigate(['']);
                console.log("route to layout");
            }
        }
    }
    toggleLeft() {
        this.showLeft = !this.showLeft;
    }
    toggleRight() {
        this.showRight = !this.showRight;
    }
    toggleChatbox() {
        this.showChatBox = !this.showChatBox;
    }
};
InitComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_5__["StatusPositionService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__["StudentAuthService"] },
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
/* harmony default export */ __webpack_exports__["default"] = (".box-opener {\n    cursor: pointer;\n}\n\n.whiteboard {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndoaXRlYm9hcmQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xufSJdfQ== */");

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
/* harmony import */ var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/student-auth.service */ "./src/app/service/student-auth.service.ts");
/* harmony import */ var _service_status_position_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/status-position.service */ "./src/app/service/status-position.service.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");








let LayoutComponent = class LayoutComponent {
    constructor(socketService, initService, statusPosition, StudentAuth, historyService, layoutService, render) {
        this.socketService = socketService;
        this.initService = initService;
        this.statusPosition = statusPosition;
        this.StudentAuth = StudentAuth;
        this.historyService = historyService;
        this.layoutService = layoutService;
        this.render = render;
        this.current = {
            lineStyle: 'round',
            fontSize: 5,
            color: 'black'
        };
        this.drawing = false;
        this.loadimage = false;
        this.allowDrawing = false;
        this.position = null;
    }
    onResize(event) {
        this.canvas.width = event.target.innerWidth;
        this.canvas.height = event.target.innerHeight;
        this.historyService.getHistory().subscribe((data) => {
            const list = data.data;
            const w = this.canvas.width;
            const h = this.canvas.height;
            for (const item of list) {
                this.drawLine(item.x0 * w, item.y0 * h, item.x1 * w, item.y1 * h, item.color, item.line_style, item.font_size, false);
            }
        });
    }
    initResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    ngOnInit() {
        // To watch incomming socket message
        this.position = this.statusPosition.getPosition();
        this.historyService.getHistory().subscribe((data) => {
            console.log(data);
            const list = data.data;
            const w = this.canvas.width;
            const h = this.canvas.height;
            for (const item of list) {
                this.drawLine(item.x0 * w, item.y0 * h, item.x1 * w, item.y1 * h, item.color, item.line_style, item.font_size, false);
            }
        });
        this.socketService
            .getDrawingMessage()
            .subscribe(msg => {
            console.log('Incoming Drawing msg', msg);
            if (msg.type === 'ReloadWindow') {
                document.location.reload();
            }
            else {
                this.onDrawingEvent(msg);
            }
        });
        this.socketService
            .getAuthStudent()
            .subscribe(msg => {
            console.log('Incoming Student msg', msg);
            if (msg.name === this.StudentAuth.user()) {
                console.log(this.StudentAuth.user() + ' Allow Drawing ' + msg.allow);
                this.allowDrawing = msg.allow;
            }
            else {
                this.StudentAuth.masterConnect();
            }
        });
        this.socketService
            .getImage()
            .subscribe(msg => {
            console.log('Incoming Image', msg);
            this.onBGimgUpdate(msg, false);
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
        this.layoutService.downloadImage.subscribe(data => {
            console.log('Bg received : ', data);
            this.download_as_image();
        });
    }
    sendMsg(msg) {
        this.socketService.sendDrawingMessage(msg);
    }
    initCanvas() {
        const classCanvas = document.querySelectorAll('.whiteboard');
        this.canvas = classCanvas[0];
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = '#000000';
        console.log(this.context);
    }
    download_as_image() {
        const a = document.createElement('a');
        a.href = this.canvas.toDataURL("image/png");
        a.download = "magicboard.png";
        document.body.appendChild(a);
        a.style = 'display: none';
        a.click();
        a.remove();
    }
    ;
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
        if (this.position === 'Teacher' || this.allowDrawing) {
            this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
        }
    }
    onMouseMove(e) {
        if (!this.drawing) {
            return;
        }
        if (this.position === 'Teacher' || this.allowDrawing) {
            this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
            this.current.x = e.clientX || e.touches[0].clientX;
            this.current.y = e.clientY || e.touches[0].clientY;
        }
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
            // this.sendMsg(e);
            this.socketService.sendImage(e);
        }
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_1__["InitService"] },
    { type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_6__["StatusPositionService"] },
    { type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_5__["StudentAuthService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_7__["HistoryService"] },
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
/* harmony default export */ __webpack_exports__["default"] = (".box-opener {\n    padding: 5px;\n    display: inline-block;\n    z-index: 1;\n    text-align: center;\n    width: 100%;\n}\n\n.closeleft {\n    position: absolute;\n    cursor: pointer;\n    right: 5px;\n    top: 20px;\n}\n\n.color {\n    display: inline-block;\n    cursor: pointer;\n    margin: 2px;\n    height: 48px;\n    width: 48px;\n}\n\n.pickColor {\n    display: inline-block;\n    height: 12px;\n    width: 12px;\n}\n\n.menu-item {\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xlZnQtbmF2L2xlZnQtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbGVmdC1uYXYvbGVmdC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtb3BlbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2VsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyMHB4O1xufVxuXG4uY29sb3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xufVxuXG4ucGlja0NvbG9yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59Il19 */");

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
        this.currentColor = { name: 'black', hex: '#000000' };
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
        this.currentColor = item;
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
/* harmony default export */ __webpack_exports__["default"] = (".closeRight {\n    position: absolute;\n    cursor: pointer;\n    left: 5px;\n    top: 20px;\n}\n\n.box-opener {\n    padding: 5px;\n    z-index: 1;\n    text-align: center;\n}\n\n.box-opener1 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.box-opener2 {\n    padding: 5px;\n    z-index: 1;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3JpZ2h0LW5hdi9yaWdodC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYvcmlnaHQtbmF2L3JpZ2h0LW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlUmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMjBweDtcbn1cblxuLmJveC1vcGVuZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJveC1vcGVuZXIxIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJveC1vcGVuZXIyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuIl19 */");

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
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/init.service */ "./src/app/service/init.service.ts");
/* harmony import */ var _service_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/socket.service */ "./src/app/service/socket.service.ts");
/* harmony import */ var _service_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/history.service */ "./src/app/service/history.service.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/layout.service */ "./src/app/service/layout.service.ts");






let RightNavComponent = class RightNavComponent {
    constructor(initService, historyService, socketService, layoutService) {
        this.initService = initService;
        this.historyService = historyService;
        this.socketService = socketService;
        this.layoutService = layoutService;
        this.studentList = [];
    }
    ngOnInit() {
        this.socketService
            .getAuthMaster()
            .subscribe(msg => {
            console.log('Incoming Master msg', msg);
            this.addStudentList(msg.student_auth);
        });
        this.socketService.sendStudentMessage({ type: 'reconnect' });
    }
    addStudentList(name1) {
        const list = this.studentList.filter(item => item.name === name1);
        if (list.length === 0) {
            this.studentList.push({ name: name1, allow: false });
        }
        else {
            console.log(name1 + ' Duplicate');
        }
    }
    onChange(item) {
        this.socketService.sendStudentMessage(item);
    }
    downloadimage() {
        this.layoutService.to_download();
    }
    toggle() {
        this.initService.viewRight();
    }
    openUpload() {
        this.initService.viewUpload();
    }
    allowAll() {
        for (const item of this.studentList) {
            item.allow = true;
            this.socketService.sendStudentMessage(item);
        }
    }
    disAllowAll() {
        for (const item of this.studentList) {
            item.allow = false;
            this.socketService.sendStudentMessage(item);
        }
    }
    clearLayout() {
        this.historyService.clearHistory().subscribe((data) => {
            console.log(data);
            this.socketService.sendDrawingMessage({ type: 'ReloadWindow' });
            document.location.reload();
        });
    }
};
RightNavComponent.ctorParameters = () => [
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] },
    { type: _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"] },
    { type: _service_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _service_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }
];
RightNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-right-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-nav.component.css */ "./src/app/nav/right-nav/right-nav.component.css")).default]
    })
], RightNavComponent);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    init() {
        let user = sessionStorage.getItem('master-username');
        if (user === null || user === undefined) {
            sessionStorage.setItem('master-username', null);
        }
    }
    authenticate(username, password) {
        console.log(username + ' ' + password);
        if (username === 'master' && password === 'master') {
            sessionStorage.setItem('master-username', username);
            return true;
        }
        else {
            return false;
        }
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('master-username');
        console.log(!(user === null));
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('master-username');
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/service/history.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/history.service.ts ***!
  \********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HistoryService = class HistoryService {
    constructor(http) {
        this.http = http;
        this.path = 'http://' + window.location.hostname + ':3000';
    }
    getHistory() {
        return this.http.get(this.path + '/api/history');
    }
    clearHistory() {
        return this.http.get(this.path + '/api/clearHistory');
    }
};
HistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HistoryService);



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
        this.toggleRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleChatbox = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineStyle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    viewLeft() {
        this.toggleLeft.emit({});
    }
    viewRight() {
        this.toggleRight.emit({});
    }
    viewChatbox() {
        this.toggleChatbox.emit({});
    }
    viewUpload() {
        this.openUpload.emit({});
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
], InitService.prototype, "toggleRight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "toggleChatbox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "lineStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InitService.prototype, "openUpload", void 0);
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
        this.downloadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    viewImg(item) {
        this.bgImage.emit(item);
    }
    to_download() {
        this.downloadImage.emit({});
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LayoutService.prototype, "bgImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LayoutService.prototype, "downloadImage", void 0);
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
    getDrawingMessage() {
        return this.socket
            .fromEvent('drawing')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    getAuthMaster() {
        return this.socket
            .fromEvent('auth-master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    getAuthStudent() {
        return this.socket
            .fromEvent('auth-student')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    getImage() {
        return this.socket
            .fromEvent('image')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    getMessage() {
        return this.socket
            .fromEvent('message-chat')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data));
    }
    sendDrawingMessage(msg) {
        this.socket.emit('drawing', msg);
    }
    sendStudentMessage(msg) {
        this.socket.emit('auth-student', msg);
    }
    sendMasterMessage(msg) {
        this.socket.emit('auth-master', msg);
    }
    sendImage(msg) {
        this.socket.emit('image', msg);
    }
    sendMessage(msg) {
        this.socket.emit('message-chat', msg);
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

/***/ "./src/app/service/status-position.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/status-position.service.ts ***!
  \****************************************************/
/*! exports provided: StatusPositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPositionService", function() { return StatusPositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatusPositionService = class StatusPositionService {
    constructor() { }
    init() {
        let position = sessionStorage.getItem('status-position');
        if (position === null || position === undefined) {
            sessionStorage.setItem('status-position', null);
        }
    }
    getPosition() {
        return sessionStorage.getItem('status-position');
    }
    setPosition(position) {
        sessionStorage.setItem('status-position', position);
        return this.getPosition();
    }
    getusername() {
        if (this.getPosition() === 'Student') {
            return sessionStorage.getItem('student-username').toString();
        }
        else {
            return sessionStorage.getItem('master-username').toString();
        }
    }
};
StatusPositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StatusPositionService);



/***/ }),

/***/ "./src/app/service/student-auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/student-auth.service.ts ***!
  \*************************************************/
/*! exports provided: StudentAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAuthService", function() { return StudentAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ "./src/app/service/socket.service.ts");



let StudentAuthService = class StudentAuthService {
    constructor(socketService) {
        this.socketService = socketService;
    }
    init() {
        let user = sessionStorage.getItem('student-username');
        if (user === null || user === undefined) {
            sessionStorage.setItem('student-username', null);
        }
    }
    authenticate(username, password) {
        if (username !== '' && password === 'student') {
            sessionStorage.setItem('student-username', username);
            this.masterConnect();
            return true;
        }
        else {
            return false;
        }
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('student-username');
        console.log(!(user === null));
        return !(user === null);
    }
    user() {
        return sessionStorage.getItem('student-username');
    }
    masterConnect() {
        let user = sessionStorage.getItem('student-username');
        this.socketService.sendMasterMessage({ student_auth: user });
    }
    logOut() {
        sessionStorage.removeItem('student-username');
    }
};
StudentAuthService.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }
];
StudentAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentAuthService);



/***/ }),

/***/ "./src/app/service/views.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/views.service.ts ***!
  \******************************************/
/*! exports provided: ViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return ViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ViewsService = class ViewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
};
ViewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ViewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ViewsService);



/***/ }),

/***/ "./src/app/student/modal-user/modal-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student/modal-user/modal-user.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-content {\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9tb2RhbC11c2VyL21vZGFsLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L21vZGFsLXVzZXIvbW9kYWwtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/student/modal-user/modal-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student/modal-user/modal-user.component.ts ***!
  \************************************************************/
/*! exports provided: ModalUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUserComponent", function() { return ModalUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/student-auth.service */ "./src/app/service/student-auth.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/auth.service */ "./src/app/service/auth.service.ts");





let ModalUserComponent = class ModalUserComponent {
    constructor(StudentAuth, MasterAuth, dialogRef, data) {
        this.StudentAuth = StudentAuth;
        this.MasterAuth = MasterAuth;
        this.dialogRef = dialogRef;
        this.data = data;
        this.position = '';
        console.log(data);
        this.position = data;
    }
    ngOnInit() {
    }
    onSubmit(username, password) {
        if (this.data === 'Teacher') {
            let user = this.MasterAuth.authenticate(username, password);
            if (user) {
                this.dialogRef.close({ position: 'Teacher', status: 'success' });
            }
            else {
                console.log('Master wrong Info');
            }
        }
        else {
            let user = this.StudentAuth.authenticate(username, password);
            if (user) {
                this.dialogRef.close({ position: 'Student', status: 'success' });
            }
            else {
                console.log('Master wrong Info');
            }
        }
    }
};
ModalUserComponent.ctorParameters = () => [
    { type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_3__["StudentAuthService"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-user.component.css */ "./src/app/student/modal-user/modal-user.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalUserComponent);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentComponent = class StudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")).default]
    })
], StudentComponent);



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
/* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC1tb2RhbC91cGxvYWQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvbW9oZGlza2FuZGFyYmluc2Ftc3VkZGluL0RvY3VtZW50cy9ub2RlX2pzX3Byby92YnAvc3JjL2FwcC91cGxvYWQvdXBsb2FkLW1vZGFsL3VwbG9hZC1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtnQ0FDZ0M7QUNDaEM7RURDRSxpQ0FBaUM7RUNDakMsYUFBQTtBRENGO0FDSEE7RURLRSw4Q0FBOEM7RUNDMUMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURDSixxREFBcUQ7RUNFakQsYUFBQTtFREFKLHNDQUFzQztFQ0dsQyxjQUFBO0FERE47QUNmQTtFQW1CVSxhQUFBO0VBQ0EsZ0JBQUE7RUREUixnREFBZ0Q7RUNJeEMsWUFBQTtBREZWO0FDckJBO0VEdUJFLCtDQUErQztFQ00zQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFREpKLDRCQUE0QjtFQ094QixzQkFBQTtFQUNBLGFBQUE7RURMSiwrREFBK0Q7RUNRM0QsWUFBQTtBRE5OO0FDVUE7RURSRSw2RUFBNkU7RUNVN0UsZ0JBQUE7QURSRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQtbW9kYWwvdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5qdy1tb2RhbCAuanctbW9kYWwgLmp3LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gIG1hcmdpbjogNDBweDtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xuXG4gIC5qdy1tb2RhbCB7XG4gICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuXG4gICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgfVxuICB9XG5cbiAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgb3BhY2l0eTogMC43NTtcblxuICAgICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICAgICAgei1pbmRleDogOTAwO1xuICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */");

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
/* harmony import */ var _service_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/init.service */ "./src/app/service/init.service.ts");





let UploadViewComponent = class UploadViewComponent {
    constructor(modalService, initService, layoutService) {
        this.modalService = modalService;
        this.initService = initService;
        this.layoutService = layoutService;
        this.initService.openUpload.subscribe(data => {
            console.log('clicked');
            this.openModal('custom-modal-1');
        });
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
    { type: _service_init_service__WEBPACK_IMPORTED_MODULE_4__["InitService"] },
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

module.exports = __webpack_require__(/*! /Users/mohdiskandarbinsamsuddin/Documents/node_js_pro/vbp/src/main.ts */"./src/main.ts");


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