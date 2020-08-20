function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet>\n</router-outlet>\n\n<!-- <app-main></app-main> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align: center; padding: 20px;\">\n    <img style=\"width: 150px;\n  height: 150px;\" src=\"assets/img/magicboard_logo.png\">\n    <h2><p style=\"font-family: 'Montserrat-Black';\">Magic-board:Whiteboard</p></h2>\n</div>\n\n<section class=\"container\">\n    <div class=\"box\" (click)=\"openDialog('Student')\">\n        <h1>Student</h1>\n        <img style=\"width: 250px;\n        height: 250px;\" src=\"assets/stud.png\">\n    </div>\n    <div class=\"box\" (click)=\"openDialog('Teacher')\">\n        <h1>Teacher</h1>\n        <img style=\"width: 250px;\n        height: 250px;\" src=\"assets/teachhh.png\">\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMasterLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <div class=\"item\">\n        <mat-toolbar>\n            <span>LOGIN</span>\n        </mat-toolbar>\n\n        <mat-card class=\"my-card\">\n\n            <mat-card-content>\n\n                <form class=\"my-form\">\n\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Username</mat-label>\n                        <input matInput placeholder=\"Username\" name=\"username\" required #username>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"full-width\">\n                        <mat-label>Password</mat-label>\n                        <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" required #password>\n                    </mat-form-field>\n\n                </form>\n\n            </mat-card-content>\n\n            <mat-card-actions>\n                <button mat-raised-button (click)=\"onClickSubmit(username.value, password.value)\" color=\"primary\">Login</button> &nbsp;&nbsp;\n                <button mat-button routerLink=\"/register\" color=\"primary\">Register</button>\n            </mat-card-actions>\n\n        </mat-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMasterMasterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n    <h1 matDialogTitle>Student</h1>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Name  : \" [(ngModel)]=\"local_data.hostname\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Password  : \" [(ngModel)]=\"local_data.hostname\">\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onSubmit()\">Add</button>\n    </mat-dialog-actions>\n\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavChatBoxChatBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"body2\">\n    <div class='row'>\n        <div class='column'>\n            <div class='blue-column'>\n                <mat-icon (click)=\"toggle()\" style=\"position: absolute;cursor: pointer;\">clear</mat-icon>\n                <span class=\"fill-remaining-space\"></span>\n                <h3>Chatbox</h3>\n                <span class=\"fill-remaining-space\"></span>\n            </div>\n            <div class='blue-column-full'>\n                <div style=\"height: 100%; background-color: white;overflow: auto;\">\n                    <div *ngFor=\"let item of msg_list\" style=\"display: inline-flex;width: 100%;\">\n                        <span style=\"font-family: Montserrat-SemiBold;\">{{item.name}}</span><span>&nbsp;:&nbsp;{{item.msg}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class='blue-column-bottom'>\n                <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"1\"\n                    cdkAutosizeMaxRows=\"10\" style=\"width: 100%;\" [(ngModel)]='msg_to_send'></textarea>\n                &nbsp;\n                <mat-icon (click)=\"send_msg()\" class=\"pointer\">send</mat-icon>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavInitInitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-openerLeft\" (click)=\"toggleLeft()\">\n    <span style=\"display: inline-flex;\n    font-size: large;font-family: 'Montserrat-Black';\">\n        <mat-icon>apps</mat-icon>\n        &nbsp;\n        <img src=\"assets/img/magicboard_logo.png\" width=\"24px\" height=\"20px\">\n        &nbsp;\n        Magic-board:Whiteboard\n    </span>\n    <!-- <mat-icon>undo</mat-icon>\n    <mat-icon>redo</mat-icon> -->\n</div>\n\n<div class=\"box-openerRight\" *ngIf=\"position==='Teacher'\" (click)=\"toggleRight()\">\n    <mat-icon>settings_applications</mat-icon>  &nbsp; Setting\n</div>\n\n<div class=\"box-openerRightBottom\" (click)=\"toggleChatbox()\">\n    <mat-icon>chat</mat-icon> &nbsp; Open Chatbox\n</div>\n\n<app-left-nav class=\"left\" [class.opened]=\"showLeft\">\n</app-left-nav>\n\n<app-layout></app-layout>\n\n<app-right-nav class=\"right\" [class.opened]=\"showRight\"></app-right-nav>\n\n<app-chat-box class=\"rightchatbox\" [class.opened]=\"showChatBox\"></app-chat-box>\n\n<app-upload-view></app-upload-view>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<canvas class=\"whiteboard\"></canvas>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavLeftNavLeftNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-opener\">\n    <img src=\"assets/img/magicboard_logo_white.png\" width=\"100px\" height=\"80px\" style=\"padding-top: 20px;\">\n</div>\n\n<div class=\"closeleft\">\n    <mat-icon (click)=\"toggle()\">clear</mat-icon>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Pick Color :\n        <div class=\"pickColor\" [ngStyle]=\"{'background-color': currentColor.hex}\"></div>\n    </h3>\n    <div class=\"colors\">\n        <div class=\"color\" *ngFor=\"let item of colorList\" [ngStyle]=\"{'background-color': item.hex}\" (click)=\"toggleColor(item)\"></div>\n    </div>\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Adjust Size\n    </h3>\n    <mat-slider style=\"width:80%;\" (input)=\"fontSize = $event.value\" [value]=\"fontSize\" [(ngModel)]=\"fontSize\" (ngModelChange)=\"fontSizeChange($event)\">\n    </mat-slider>\n    {{ fontSize }}\n</div>\n\n<div class=\"menu-item\">\n    <h3>\n        Line Style\n    </h3>\n    <label *ngFor=\"let radiobutton of lineStyleList\">\n    <input type=\"radio\" name=\"options\" (click)=\"toggleLineStyle(radiobutton)\"\n      [checked]=\"radiobutton === initLineStyle.option\">\n      {{radiobutton}}\n  </label>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavRightNavRightNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box-opener\">\n    <h3>Master Setting</h3>\n</div>\n\n<div class=\"closeRight\">\n    <mat-icon (click)=\"toggle()\">clear</mat-icon>\n</div>\n\n<div class=\"box-opener1\">\n    <div>Image : <button (click)=\"openUpload()\">Insert</button></div>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">History</h4>\n    <p> Press <button (click)=\"clearLayout()\">Clear</button> to clean whiteboard</p>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">Export Sketch</h4>\n    <p style=\"text-align: center;\"><button (click)=\"downloadimage()\">Download as image</button></p>\n</div>\n\n<div class=\"box-opener2\">\n    <h4 style=\"text-align: center;\">Access Right</h4>\n\n    <p style=\"font-size: 14px;\">Total Student : {{studentList.length}} </p>\n    <div style=\"text-align: center;\"><button (click)=\"allowAll()\">Allow All</button> <button (click)=\"disAllowAll()\">Disallow All</button></div>\n\n    <ul>\n        <li *ngFor=\"let item of studentList\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.allow\" (change)=\"onChange(item)\">{{item.name}}\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentModalUserModalUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n    <h1 matDialogTitle>{{position}}</h1>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Name  : \" #username>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput placeholder=\"Password  : \" #password>\n    </mat-form-field>\n\n    <mat-dialog-actions>\n        <button mat-raised-button (click)=\"onSubmit(username.value, password.value)\">Submit</button>\n    </mat-dialog-actions>\n\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>student works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadUploadModalUploadModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jw-modal\">\n    <div class=\"jw-modal-body\">\n        <ng-content></ng-content>\n    </div>\n</div>\n<div class=\"jw-modal-background\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadUploadViewUploadViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  <div style=\"position:absolute; left: 300px;\">\n    <button (click)=\"openModal('custom-modal-1')\">Open Modal 1</button>\n</div>\n-->\n\n<jw-modal id=\"custom-modal-1\">\n    <h3>Upload</h3>\n    <p>Only Support Image Only (png / jpg / jpeg)</p>\n    <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n    <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n    <br />\n    <img [src]=\"imgURL\" height=\"200\" width=\"200\" *ngIf=\"imgURL\">\n    <br />\n    <button (click)=\"addBGimage()\">Insert</button>\n    <button (click)=\"closeModal('custom-modal-1')\">Close</button>\n</jw-modal>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nav/layout/layout.component */
    "./src/app/nav/layout/layout.component.ts");
    /* harmony import */


    var _nav_init_init_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./nav/init/init.component */
    "./src/app/nav/init/init.component.ts");
    /* harmony import */


    var _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav/left-nav/left-nav.component */
    "./src/app/nav/left-nav/left-nav.component.ts");
    /* harmony import */


    var _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/right-nav/right-nav.component */
    "./src/app/nav/right-nav/right-nav.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");

    var path = 'http://' + window.location.hostname + ':3000';
    var config = {
      url: path,
      options: {}
    };
    var routes = [{
      path: '',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
    }, {
      path: 'init',
      component: _nav_init_init_component__WEBPACK_IMPORTED_MODULE_4__["InitComponent"]
    }, {
      path: 'layout',
      component: _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]
    }, {
      path: 'left',
      component: _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_5__["LeftNavComponent"]
    }, {
      path: 'right',
      component: _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_6__["RightNavComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(config)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'vbp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _service_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service/socket.service */
    "./src/app/service/socket.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/layout/layout.component */
    "./src/app/nav/layout/layout.component.ts");
    /* harmony import */


    var _nav_init_init_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav/init/init.component */
    "./src/app/nav/init/init.component.ts");
    /* harmony import */


    var _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./nav/left-nav/left-nav.component */
    "./src/app/nav/left-nav/left-nav.component.ts");
    /* harmony import */


    var _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav/right-nav/right-nav.component */
    "./src/app/nav/right-nav/right-nav.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./upload/upload-view/upload-view.component */
    "./src/app/upload/upload-view/upload-view.component.ts");
    /* harmony import */


    var _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./upload/upload-view/upload-view.service */
    "./src/app/upload/upload-view/upload-view.service.ts");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./service/init.service */
    "./src/app/service/init.service.ts");
    /* harmony import */


    var _service_left_nav_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./service/left-nav.service */
    "./src/app/service/left-nav.service.ts");
    /* harmony import */


    var _service_right_nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./service/right-nav.service */
    "./src/app/service/right-nav.service.ts");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/layout.service */
    "./src/app/service/layout.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _service_views_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./service/views.service */
    "./src/app/service/views.service.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _upload_upload_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./upload/upload-modal */
    "./src/app/upload/upload-modal/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _master_master_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./master/master.component */
    "./src/app/master/master.component.ts");
    /* harmony import */


    var _master_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./master/login/login.component */
    "./src/app/master/login/login.component.ts");
    /* harmony import */


    var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./service/student-auth.service */
    "./src/app/service/student-auth.service.ts");
    /* harmony import */


    var _student_student_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./student/student.component */
    "./src/app/student/student.component.ts");
    /* harmony import */


    var _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./student/modal-user/modal-user.component */
    "./src/app/student/modal-user/modal-user.component.ts");
    /* harmony import */


    var _service_status_position_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./service/status-position.service */
    "./src/app/service/status-position.service.ts");
    /* harmony import */


    var _service_history_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./service/history.service */
    "./src/app/service/history.service.ts");
    /* harmony import */


    var _db_conn_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./db/conn.service */
    "./src/app/db/conn.service.ts");
    /* harmony import */


    var _nav_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./nav/chat-box/chat-box.component */
    "./src/app/nav/chat-box/chat-box.component.ts"); // db connection


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _nav_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_8__["LeftNavComponent"], _nav_right_nav_right_nav_component__WEBPACK_IMPORTED_MODULE_9__["RightNavComponent"], _upload_upload_view_upload_view_component__WEBPACK_IMPORTED_MODULE_11__["UploadViewComponent"], _nav_init_init_component__WEBPACK_IMPORTED_MODULE_7__["InitComponent"], _master_master_component__WEBPACK_IMPORTED_MODULE_22__["MasterComponent"], _master_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _student_student_component__WEBPACK_IMPORTED_MODULE_25__["StudentComponent"], _nav_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_30__["ChatBoxComponent"], _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__["ModalUserComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_19__["MyMaterialModule"], _upload_upload_modal__WEBPACK_IMPORTED_MODULE_20__["UploadModalModule"]],
      providers: [// db
      _db_conn_service__WEBPACK_IMPORTED_MODULE_29__["ConnService"], // socket
      _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], // master
      _service_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], // current view
      _service_views_service__WEBPACK_IMPORTED_MODULE_18__["ViewsService"], // what position master/student
      _service_status_position_service__WEBPACK_IMPORTED_MODULE_27__["StatusPositionService"], // student
      _service_student_auth_service__WEBPACK_IMPORTED_MODULE_24__["StudentAuthService"], // history
      _service_history_service__WEBPACK_IMPORTED_MODULE_28__["HistoryService"], _service_init_service__WEBPACK_IMPORTED_MODULE_13__["InitService"], _service_left_nav_service__WEBPACK_IMPORTED_MODULE_14__["LeftNavService"], _service_right_nav_service__WEBPACK_IMPORTED_MODULE_15__["RightNavService"], _service_layout_service__WEBPACK_IMPORTED_MODULE_16__["LayoutService"], _upload_upload_view_upload_view_service__WEBPACK_IMPORTED_MODULE_12__["UploadViewService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_26__["ModalUserComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/db/conn.service.ts":
  /*!************************************!*\
    !*** ./src/app/db/conn.service.ts ***!
    \************************************/

  /*! exports provided: ConnService */

  /***/
  function srcAppDbConnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnService", function () {
      return ConnService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConnService = function ConnService() {
      _classCallCheck(this, ConnService);
    };

    ConnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConnService);
    /***/
  },

  /***/
  "./src/app/main/main.component.css":
  /*!*****************************************!*\
    !*** ./src/app/main/main.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n    width: 100%;\n    flex-wrap: wrap;\n    text-align: center;\n    display: flex;\n    vertical-align: middle;\n    -webkit-flex-align: center;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.box {\n    width: 100%;\n    max-width: 30%;\n    border: 1px solid black;\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUcxQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtd2Via2l0LWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_status_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/status-position.service */
    "./src/app/service/status-position.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/student-auth.service */
    "./src/app/service/student-auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../student/modal-user/modal-user.component */
    "./src/app/student/modal-user/modal-user.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(router, statusPosition, authService, StudentAuth, dialog) {
        _classCallCheck(this, MainComponent);

        this.router = router;
        this.statusPosition = statusPosition;
        this.authService = authService;
        this.StudentAuth = StudentAuth;
        this.dialog = dialog; // this.statusPosition.init();
        // this.authService.init();
        // this.StudentAuth.init();
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var pos = this.statusPosition.getPosition();

          if (pos === "Teacher") {
            var status = this.authService.isUserLoggedIn();

            if (status) {
              // route
              this.router.navigate(['init']);
              console.log("master route to layout");
            } else {// not route back
            }
          } else {
            // this.statusPosition.setPosition(result.position);
            var _status = this.StudentAuth.isUserLoggedIn();

            if (_status) {
              // route
              this.router.navigate(['init']);
              console.log("student route to layout");
            } else {// not route back
            }
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog(status) {
          var _this = this;

          var dialogRef = this.dialog.open(_student_modal_user_modal_user_component__WEBPACK_IMPORTED_MODULE_6__["ModalUserComponent"], {
            data: status
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);

            _this.statusPosition.setPosition(result.position);

            if (result.position === "Teacher") {
              // this.statusPosition.setPosition(result.position);
              var _status2 = _this.authService.isUserLoggedIn();

              if (_status2 !== null) {
                // route
                _this.router.navigate(['init']);

                console.log("route to layout");
              } else {// not route back
              }
            } else {
              // this.statusPosition.setPosition(result.position);
              var _status3 = _this.StudentAuth.isUserLoggedIn();

              if (_status3 !== null) {
                // route
                _this.router.navigate(['init']);

                console.log("route to layout");
              } else {// not route back
              }
            }
          });
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_2__["StatusPositionService"]
      }, {
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__["StudentAuthService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-main",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/master/login/login.component.css":
  /*!**************************************************!*\
    !*** ./src/app/master/login/login.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMasterLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.full-width {\n    width: 100%;\n}\n\n.container {\n    width: 100%;\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n}\n\n.item {\n    color: white;\n    font-weight: bold;\n    align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLml0ZW0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/master/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/master/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppMasterLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../service/auth.service */
    "./src/app/service/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.invalidLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit(username, password) {
          if (this.authenticationService.authenticate(username, password)) {
            this.router.navigate(['']);
            this.invalidLogin = false;
          } else {
            this.invalidLogin = true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/master/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/master/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/master/master.component.css":
  /*!*********************************************!*\
    !*** ./src/app/master/master.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMasterMasterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/master/master.component.ts":
  /*!********************************************!*\
    !*** ./src/app/master/master.component.ts ***!
    \********************************************/

  /*! exports provided: MasterComponent */

  /***/
  function srcAppMasterMasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasterComponent", function () {
      return MasterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MasterComponent =
    /*#__PURE__*/
    function () {
      function MasterComponent() {
        _classCallCheck(this, MasterComponent);
      }

      _createClass(MasterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MasterComponent;
    }();

    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-master',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./master.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./master.component.css */
      "./src/app/master/master.component.css")).default]
    })], MasterComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MyMaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function () {
      return MyMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-mat-select-search */
    "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");

    var MyMaterialModule = function MyMaterialModule() {
      _classCallCheck(this, MyMaterialModule);
    };

    MyMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [// CDK
      _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__["NgxMatSelectSearchModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], // angular
      _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]],
      exports: [// CDK
      _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_5__["NgxMatSelectSearchModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], // angular
      _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]]
    })], MyMaterialModule);
    /***/
  },

  /***/
  "./src/app/nav/chat-box/chat-box.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/nav/chat-box/chat-box.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavChatBoxChatBoxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".closeRight {\n    cursor: pointer;\n    display: inline-flex;\n    left: 5px;\n    top: 20px;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.box-opener {\n    padding: 5px;\n    z-index: 1;\n    text-align: center;\n}\n\n.box-opener1 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.box-opener2 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.bottomSend {\n    cursor: pointer;\n    bottom: 10px;\n    width: 100%;\n    display: inline-flex;\n}\n\n.chatlist {\n    background-color: white;\n    padding: 10px;\n    height: 100%;\n}\n\n.flex-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.body2 {\n    display: flex;\n    height: 100%;\n  }\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n}\n\n.row {\ndisplay: flex;\nflex: 1;\nheight: auto;\nborder: 1px;\n}\n\n.column {\ndisplay: flex;\nflex-direction: column;\nflex-basis: 100%;\nflex: 1;\n}\n\n.blue-column {\nheight: auto;\npadding: 10px;\ndisplay: inline-flex;\n}\n\n.fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n}\n\n.blue-column-bottom {\n    display: inline-flex;\n    height: auto;\n    padding: 10px;\n    }\n\n.blue-column-full {\n    height: 100%;\n    padding: 10px;\n    }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztBQUVBO0lBQ0U7K0NBQzJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsT0FBTztBQUNQLFlBQVk7QUFDWixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLG9CQUFvQjtBQUNwQjs7QUFFQTtJQUNJOytDQUMyQztJQUMzQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2I7O0FBRUo7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiIiwiZmlsZSI6InNyYy9hcHAvbmF2L2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2VSaWdodCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3gtb3BlbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3gtb3BlbmVyMSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyMiB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3R0b21TZW5kIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uY2hhdGxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYm9keTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbiAgXG4ucm93IHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4OiAxO1xuaGVpZ2h0OiBhdXRvO1xuYm9yZGVyOiAxcHg7XG59XG5cbi5jb2x1bW4ge1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5mbGV4LWJhc2lzOiAxMDAlO1xuZmxleDogMTtcbn1cblxuLmJsdWUtY29sdW1uIHtcbmhlaWdodDogYXV0bztcbnBhZGRpbmc6IDEwcHg7XG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJsdWUtY29sdW1uLWJvdHRvbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4uYmx1ZS1jb2x1bW4tZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/nav/chat-box/chat-box.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/nav/chat-box/chat-box.component.ts ***!
    \****************************************************/

  /*! exports provided: ChatBoxComponent */

  /***/
  function srcAppNavChatBoxChatBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function () {
      return ChatBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/init.service */
    "./src/app/service/init.service.ts");
    /* harmony import */


    var _service_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/socket.service */
    "./src/app/service/socket.service.ts");
    /* harmony import */


    var _service_status_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/status-position.service */
    "./src/app/service/status-position.service.ts");
    /* harmony import */


    var _service_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/history.service */
    "./src/app/service/history.service.ts");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/layout.service */
    "./src/app/service/layout.service.ts");

    var ChatBoxComponent =
    /*#__PURE__*/
    function () {
      function ChatBoxComponent(initService, historyService, socketService, layoutService, statusPositionService) {
        var _this2 = this;

        _classCallCheck(this, ChatBoxComponent);

        this.initService = initService;
        this.historyService = historyService;
        this.socketService = socketService;
        this.layoutService = layoutService;
        this.statusPositionService = statusPositionService;
        this.msg_to_send = "";
        this.name = "";
        this.msg_list = [];
        this.socketService.getMessage().subscribe(function (msg) {
          console.log('Incoming Message', msg);

          _this2.msg_list.push(msg);
        });
      }

      _createClass(ChatBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle() {
          this.initService.viewChatbox();
        }
      }, {
        key: "send_msg",
        value: function send_msg() {
          console.log(this.statusPositionService.getusername() + ' msg_to_send : ' + this.msg_to_send);
          var to_send_msg = {
            name: this.statusPositionService.getusername(),
            msg: this.msg_to_send
          };
          this.msg_list.push(to_send_msg);
          this.socketService.sendMessage(to_send_msg);
          this.msg_to_send = "";
        }
      }]);

      return ChatBoxComponent;
    }();

    ChatBoxComponent.ctorParameters = function () {
      return [{
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]
      }, {
        type: _service_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"]
      }, {
        type: _service_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
      }, {
        type: _service_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
      }, {
        type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_4__["StatusPositionService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autosize', {
      static: false
    })], ChatBoxComponent.prototype, "autosize", void 0);
    ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/chat-box/chat-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-box.component.css */
      "./src/app/nav/chat-box/chat-box.component.css")).default]
    })], ChatBoxComponent);
    /***/
  },

  /***/
  "./src/app/nav/init/init.component.css":
  /*!*********************************************!*\
    !*** ./src/app/nav/init/init.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavInitInitComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-openerLeft {\n    cursor: pointer;\n    position: absolute;\n    padding: 20px;\n    display: inline-block;\n    z-index: 1;\n}\n\n.box-openerRight {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    padding: 20px;\n    display: inline-flex;\n    z-index: 1;\n}\n\n.box-openerRightBottom {\n    cursor: pointer;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    padding: 20px;\n    display: inline-flex;\n    z-index: 1;\n}\n\n.left {\n    left: 0px;\n    z-index: 1;\n    position: absolute;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.left.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 240px;\n    max-width: 240px;\n    transition: ease-in-out 600ms max-width;\n}\n\n.layout {\n    position: absolute;\n}\n\n.right {\n    position: absolute;\n    right: 0px;\n    z-index: 1;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.right.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 240px;\n    max-width: 240px;\n    transition: ease-in-out 600ms max-width;\n}\n\n.rightchatbox {\n    position: absolute;\n    right: 0px;\n    z-index: 1;\n    background-color: #E69138;\n    height: 100%;\n    max-width: 0px;\n    overflow-y: auto;\n    transition: ease-in-out 400ms max-width;\n}\n\n.rightchatbox.opened {\n    z-index: 1;\n    position: absolute;\n    height: 100%;\n    width: 300px;\n    max-width: 300px;\n    transition: ease-in-out 400ms max-width;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2luaXQvaW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvbmF2L2luaXQvaW5pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXJMZWZ0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyUmlnaHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ib3gtb3BlbmVyUmlnaHRCb3R0b20ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sZWZ0IHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5sZWZ0Lm9wZW5lZCB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC13aWR0aDtcbn1cblxuLmxheW91dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodC5vcGVuZWQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodGNoYXRib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2OTEzODtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtd2lkdGg7XG59XG5cbi5yaWdodGNoYXRib3gub3BlbmVkIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LXdpZHRoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav/init/init.component.ts":
  /*!********************************************!*\
    !*** ./src/app/nav/init/init.component.ts ***!
    \********************************************/

  /*! exports provided: InitComponent */

  /***/
  function srcAppNavInitInitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitComponent", function () {
      return InitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/init.service */
    "./src/app/service/init.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth.service */
    "./src/app/service/auth.service.ts");
    /* harmony import */


    var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/student-auth.service */
    "./src/app/service/student-auth.service.ts");
    /* harmony import */


    var _service_status_position_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/status-position.service */
    "./src/app/service/status-position.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InitComponent =
    /*#__PURE__*/
    function () {
      function InitComponent(router, statusPosition, authService, StudentAuth, initService) {
        var _this3 = this;

        _classCallCheck(this, InitComponent);

        this.router = router;
        this.statusPosition = statusPosition;
        this.authService = authService;
        this.StudentAuth = StudentAuth;
        this.initService = initService;
        this.showLeft = false;
        this.showRight = false;
        this.showChatBox = false;
        this.position = 'Teacher';
        this.initService.toggleLeft.subscribe(function (data) {
          console.log('clicked');

          _this3.toggleLeft();
        });
        this.initService.toggleRight.subscribe(function (data) {
          console.log('clicked');

          _this3.toggleRight();
        });
        this.initService.toggleChatbox.subscribe(function (data) {
          console.log('clicked');

          _this3.toggleChatbox();
        });
      }

      _createClass(InitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.position = this.statusPosition.getPosition();

          if (this.position === "Teacher") {
            var status = this.authService.isUserLoggedIn();

            if (status) {// route
            } else {
              // not route back
              this.router.navigate(['']);
              console.log("route to layout");
            }
          } else {
            // this.statusPosition.setPosition(result.position);
            var _status4 = this.StudentAuth.isUserLoggedIn();

            if (_status4) {
              // route
              this.StudentAuth.masterConnect();
            } else {
              // not route back
              this.router.navigate(['']);
              console.log("route to layout");
            }
          }
        }
      }, {
        key: "toggleLeft",
        value: function toggleLeft() {
          this.showLeft = !this.showLeft;
        }
      }, {
        key: "toggleRight",
        value: function toggleRight() {
          this.showRight = !this.showRight;
        }
      }, {
        key: "toggleChatbox",
        value: function toggleChatbox() {
          this.showChatBox = !this.showChatBox;
        }
      }]);

      return InitComponent;
    }();

    InitComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_5__["StatusPositionService"]
      }, {
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_4__["StudentAuthService"]
      }, {
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]
      }];
    };

    InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-init',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./init.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/init/init.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./init.component.css */
      "./src/app/nav/init/init.component.css")).default]
    })], InitComponent);
    /***/
  },

  /***/
  "./src/app/nav/layout/layout.component.css":
  /*!*************************************************!*\
    !*** ./src/app/nav/layout/layout.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-opener {\n    cursor: pointer;\n}\n\n.whiteboard {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1vcGVuZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndoaXRlYm9hcmQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav/layout/layout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/nav/layout/layout.component.ts ***!
    \************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppNavLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../service/init.service */
    "./src/app/service/init.service.ts");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../service/layout.service */
    "./src/app/service/layout.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/socket.service */
    "./src/app/service/socket.service.ts");
    /* harmony import */


    var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/student-auth.service */
    "./src/app/service/student-auth.service.ts");
    /* harmony import */


    var _service_status_position_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/status-position.service */
    "./src/app/service/status-position.service.ts");
    /* harmony import */


    var _service_history_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/history.service */
    "./src/app/service/history.service.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(socketService, initService, statusPosition, StudentAuth, historyService, layoutService, render) {
        _classCallCheck(this, LayoutComponent);

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

      _createClass(LayoutComponent, [{
        key: "onResize",
        value: function onResize(event) {
          var _this4 = this;

          this.canvas.width = event.target.innerWidth;
          this.canvas.height = event.target.innerHeight;
          this.historyService.getHistory().subscribe(function (data) {
            var list = data.data;
            var w = _this4.canvas.width;
            var h = _this4.canvas.height;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                _this4.drawLine(item.x0 * w, item.y0 * h, item.x1 * w, item.y1 * h, item.color, item.line_style, item.font_size, false);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          });
        }
      }, {
        key: "initResize",
        value: function initResize() {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          // To watch incomming socket message
          this.position = this.statusPosition.getPosition();
          this.historyService.getHistory().subscribe(function (data) {
            console.log(data);
            var list = data.data;
            var w = _this5.canvas.width;
            var h = _this5.canvas.height;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                _this5.drawLine(item.x0 * w, item.y0 * h, item.x1 * w, item.y1 * h, item.color, item.line_style, item.font_size, false);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          });
          this.socketService.getDrawingMessage().subscribe(function (msg) {
            console.log('Incoming Drawing msg', msg);

            if (msg.type === 'ReloadWindow') {
              document.location.reload();
            } else {
              _this5.onDrawingEvent(msg);
            }
          });
          this.socketService.getAuthStudent().subscribe(function (msg) {
            console.log('Incoming Student msg', msg);

            if (msg.name === _this5.StudentAuth.user()) {
              console.log(_this5.StudentAuth.user() + ' Allow Drawing ' + msg.allow);
              _this5.allowDrawing = msg.allow;
            } else {
              _this5.StudentAuth.masterConnect();
            }
          });
          this.socketService.getImage().subscribe(function (msg) {
            console.log('Incoming Image', msg);

            _this5.onBGimgUpdate(msg, false);
          }); // To watch if color change

          this.initService.lineColor.subscribe(function (data) {
            console.log('lineColor : ', data);

            _this5.onColorUpdate(data);
          }); // To watch if line size change

          this.initService.lineSize.subscribe(function (data) {
            console.log('lineColor : ', data);

            _this5.onFontSizeUpdate(data);
          }); // To watch if line size change

          this.initService.lineStyle.subscribe(function (data) {
            console.log('lineColor : ', data);

            _this5.onLineStyleUpdate(data);
          }); // To watch image

          this.layoutService.bgImage.subscribe(function (data) {
            console.log('Bg received : ', data);
            _this5.loadimage = true;

            _this5.onBGimgUpdate(data, true);
          });
          this.layoutService.downloadImage.subscribe(function (data) {
            console.log('Bg received : ', data);

            _this5.download_as_image();
          });
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(msg) {
          this.socketService.sendDrawingMessage(msg);
        }
      }, {
        key: "initCanvas",
        value: function initCanvas() {
          var classCanvas = document.querySelectorAll('.whiteboard');
          this.canvas = classCanvas[0];
          this.context = this.canvas.getContext('2d');
          this.context.fillStyle = '#000000';
          console.log(this.context);
        }
      }, {
        key: "download_as_image",
        value: function download_as_image() {
          var a = document.createElement('a');
          a.href = this.canvas.toDataURL("image/png");
          a.download = "magicboard.png";
          document.body.appendChild(a);
          a.style = 'display: none';
          a.click();
          a.remove();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          this.initCanvas();
          this.initResize(); // Windows browser

          this.render.listen(this.canvas, 'mousedown', function (target) {
            console.log('mousedown', target);

            _this6.onMouseDown(target);
          });
          this.render.listen(this.canvas, 'mouseup', function (target) {
            console.log('mouseup', target);

            _this6.onMouseUp(target);
          });
          this.render.listen(this.canvas, 'mouseout', function (target) {
            // console.log('mouseout', target);
            _this6.onMouseUp(target);
          });
          this.render.listen(this.canvas, 'mousemove', function (target) {
            _this6.onMouseMove(target); // this.throttle(target, 10);
            // console.log('mousemove', target);

          }); // Touch support for mobile devices

          this.render.listen(this.canvas, 'touchstart', function (target) {
            _this6.onMouseDown(target); // console.log('touchstart', target);

          });
          this.render.listen(this.canvas, 'touchcancel', function (target) {
            _this6.onMouseUp(target); // console.log('touchcancel', target);

          });
          this.render.listen(this.canvas, 'mouseout', function (target) {
            _this6.onMouseUp(target); // console.log('mouseout', target);

          });
          this.render.listen(this.canvas, 'touchmove', function (target) {
            _this6.onMouseMove(target); // console.log('mousemove', target);

          });
        }
      }, {
        key: "drawLine",
        value: function drawLine(x0, y0, x1, y1, color1, style, fontSize, emit) {
          console.log(x0, y0);
          this.context.beginPath();
          this.context.moveTo(x0, y0);
          this.context.lineTo(x1, y1);
          this.context.strokeStyle = color1;
          this.context.lineCap = style;
          this.context.lineWidth = fontSize; // this.context.globalCompositeOperation = 'destination-atop';

          this.context.stroke();
          this.context.closePath();

          if (!emit) {
            return;
          }

          var w = this.canvas.width;
          var h = this.canvas.height;
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
      }, {
        key: "onDrawingEvent",
        value: function onDrawingEvent(data) {
          var w = this.canvas.width;
          var h = this.canvas.height;
          console.log(w); // console.log(data.x0, data.y0);

          this.drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.line_style, data.font_size, false);
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown(e) {
          // console.log(e);
          this.drawing = true;
          this.current.x = e.clientX || e.touches[0].clientX;
          this.current.y = e.clientY || e.touches[0].clientY;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(e) {
          if (!this.drawing) {
            return;
          }

          this.drawing = false;

          if (this.position === 'Teacher' || this.allowDrawing) {
            this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
          }
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          if (!this.drawing) {
            return;
          }

          if (this.position === 'Teacher' || this.allowDrawing) {
            this.drawLine(this.current.x, this.current.y, e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, this.current.color, this.current.lineStyle, this.current.fontSize, true);
            this.current.x = e.clientX || e.touches[0].clientX;
            this.current.y = e.clientY || e.touches[0].clientY;
          }
        }
      }, {
        key: "onFontSizeUpdate",
        value: function onFontSizeUpdate(e) {
          this.current.fontSize = e;
        }
      }, {
        key: "onColorUpdate",
        value: function onColorUpdate(e) {
          // this.current.color = e.target.className.split(' ')[1];
          this.current.color = e.hex;
        }
      }, {
        key: "onLineStyleUpdate",
        value: function onLineStyleUpdate(e) {
          this.current.lineStyle = e;
        }
      }, {
        key: "onBGimgUpdate",
        value: function onBGimgUpdate(e, emit) {
          var _this7 = this;

          var image = new Image();

          image.onload = function () {
            // this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
            var top = _this7.canvas.height * 0.10;
            var left = _this7.canvas.width * 0.05;
            var imgHeight = _this7.canvas.height * 0.50;
            var imgWidth = _this7.canvas.width * 0.50;
            console.log('Top : ' + top);
            console.log('Left : ' + left);

            _this7.context.drawImage(image, left, top, imgWidth, imgHeight);
          };

          image.src = e.data;
          this.sendImage(e, emit);
        }
      }, {
        key: "sendImage",
        value: function sendImage(e, emit) {
          if (emit) {
            // this.sendMsg(e);
            this.socketService.sendImage(e);
          }
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _service_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_1__["InitService"]
      }, {
        type: _service_status_position_service__WEBPACK_IMPORTED_MODULE_6__["StatusPositionService"]
      }, {
        type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_5__["StudentAuthService"]
      }, {
        type: _service_history_service__WEBPACK_IMPORTED_MODULE_7__["HistoryService"]
      }, {
        type: _service_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize', ['$event'])], LayoutComponent.prototype, "onResize", null);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.css */
      "./src/app/nav/layout/layout.component.css")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/nav/left-nav/left-nav.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/nav/left-nav/left-nav.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavLeftNavLeftNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box-opener {\n    padding: 5px;\n    display: inline-block;\n    z-index: 1;\n    text-align: center;\n    width: 100%;\n}\n\n.closeleft {\n    position: absolute;\n    cursor: pointer;\n    right: 5px;\n    top: 20px;\n}\n\n.color {\n    display: inline-block;\n    cursor: pointer;\n    margin: 2px;\n    height: 48px;\n    width: 48px;\n}\n\n.pickColor {\n    display: inline-block;\n    height: 12px;\n    width: 12px;\n}\n\n.menu-item {\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2xlZnQtbmF2L2xlZnQtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbGVmdC1uYXYvbGVmdC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtb3BlbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2VsZWZ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyMHB4O1xufVxuXG4uY29sb3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xufVxuXG4ucGlja0NvbG9yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/nav/left-nav/left-nav.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/nav/left-nav/left-nav.component.ts ***!
    \****************************************************/

  /*! exports provided: LeftNavComponent */

  /***/
  function srcAppNavLeftNavLeftNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function () {
      return LeftNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/init.service */
    "./src/app/service/init.service.ts");

    var LeftNavComponent =
    /*#__PURE__*/
    function () {
      function LeftNavComponent(initService) {
        _classCallCheck(this, LeftNavComponent);

        this.initService = initService;
        this.fontSize = 5;
        this.currentColor = {
          name: 'black',
          hex: '#000000'
        };
        this.colorList = [{
          name: 'black',
          hex: '#000000'
        }, {
          name: 'silver',
          hex: '#c0c0c0'
        }, {
          name: 'gray',
          hex: '#808080'
        }, {
          name: 'white',
          hex: '#ffffff'
        }, {
          name: 'maroon',
          hex: '#800000'
        }, {
          name: 'red',
          hex: '#ff0000'
        }, {
          name: 'purple',
          hex: '#800080'
        }, {
          name: 'fuchsia',
          hex: '#ff00ff'
        }, {
          name: 'green',
          hex: '#008000'
        }, {
          name: 'lime',
          hex: '#00ff00'
        }, {
          name: 'olive',
          hex: '#808000'
        }, {
          name: 'yellow',
          hex: '#ffff00'
        }, {
          name: 'navy',
          hex: '#000080'
        }, {
          name: 'blue',
          hex: '#0000ff'
        }, {
          name: 'teal',
          hex: '#008080'
        }, {
          name: 'aqua',
          hex: '#00ffff'
        }];
        this.initLineStyle = {
          option: 'round'
        };
        this.lineStyleList = ['round', 'butt', 'square'];
      }

      _createClass(LeftNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle() {
          this.initService.viewLeft();
        }
      }, {
        key: "toggleColor",
        value: function toggleColor(item) {
          this.currentColor = item;
          this.initService.setLineColor(item);
        }
      }, {
        key: "fontSizeChange",
        value: function fontSizeChange(event) {
          this.initService.setLineSize(event);
        }
      }, {
        key: "toggleLineStyle",
        value: function toggleLineStyle(event) {
          this.initService.setLineStyle(event);
        }
      }]);

      return LeftNavComponent;
    }();

    LeftNavComponent.ctorParameters = function () {
      return [{
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]
      }];
    };

    LeftNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-left-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./left-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/left-nav/left-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./left-nav.component.css */
      "./src/app/nav/left-nav/left-nav.component.css")).default]
    })], LeftNavComponent);
    /***/
  },

  /***/
  "./src/app/nav/right-nav/right-nav.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/nav/right-nav/right-nav.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavRightNavRightNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".closeRight {\n    position: absolute;\n    cursor: pointer;\n    left: 5px;\n    top: 20px;\n}\n\n.box-opener {\n    padding: 5px;\n    z-index: 1;\n    text-align: center;\n}\n\n.box-opener1 {\n    padding: 5px;\n    z-index: 1;\n}\n\n.box-opener2 {\n    padding: 5px;\n    z-index: 1;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3JpZ2h0LW5hdi9yaWdodC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYvcmlnaHQtbmF2L3JpZ2h0LW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlUmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogMjBweDtcbn1cblxuLmJveC1vcGVuZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJveC1vcGVuZXIxIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJveC1vcGVuZXIyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/nav/right-nav/right-nav.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/nav/right-nav/right-nav.component.ts ***!
    \******************************************************/

  /*! exports provided: RightNavComponent */

  /***/
  function srcAppNavRightNavRightNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightNavComponent", function () {
      return RightNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/init.service */
    "./src/app/service/init.service.ts");
    /* harmony import */


    var _service_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/socket.service */
    "./src/app/service/socket.service.ts");
    /* harmony import */


    var _service_history_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/history.service */
    "./src/app/service/history.service.ts");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/layout.service */
    "./src/app/service/layout.service.ts");

    var RightNavComponent =
    /*#__PURE__*/
    function () {
      function RightNavComponent(initService, historyService, socketService, layoutService) {
        _classCallCheck(this, RightNavComponent);

        this.initService = initService;
        this.historyService = historyService;
        this.socketService = socketService;
        this.layoutService = layoutService;
        this.studentList = [];
      }

      _createClass(RightNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.socketService.getAuthMaster().subscribe(function (msg) {
            console.log('Incoming Master msg', msg);

            _this8.addStudentList(msg.student_auth);
          });
          this.socketService.sendStudentMessage({
            type: 'reconnect'
          });
        }
      }, {
        key: "addStudentList",
        value: function addStudentList(name1) {
          var list = this.studentList.filter(function (item) {
            return item.name === name1;
          });

          if (list.length === 0) {
            this.studentList.push({
              name: name1,
              allow: false
            });
          } else {
            console.log(name1 + ' Duplicate');
          }
        }
      }, {
        key: "onChange",
        value: function onChange(item) {
          this.socketService.sendStudentMessage(item);
        }
      }, {
        key: "downloadimage",
        value: function downloadimage() {
          this.layoutService.to_download();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.initService.viewRight();
        }
      }, {
        key: "openUpload",
        value: function openUpload() {
          this.initService.viewUpload();
        }
      }, {
        key: "allowAll",
        value: function allowAll() {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.studentList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var item = _step3.value;
              item.allow = true;
              this.socketService.sendStudentMessage(item);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }, {
        key: "disAllowAll",
        value: function disAllowAll() {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.studentList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var item = _step4.value;
              item.allow = false;
              this.socketService.sendStudentMessage(item);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      }, {
        key: "clearLayout",
        value: function clearLayout() {
          var _this9 = this;

          this.historyService.clearHistory().subscribe(function (data) {
            console.log(data);

            _this9.socketService.sendDrawingMessage({
              type: 'ReloadWindow'
            });

            document.location.reload();
          });
        }
      }]);

      return RightNavComponent;
    }();

    RightNavComponent.ctorParameters = function () {
      return [{
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]
      }, {
        type: _service_history_service__WEBPACK_IMPORTED_MODULE_4__["HistoryService"]
      }, {
        type: _service_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
      }, {
        type: _service_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]
      }];
    };

    RightNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-right-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./right-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/right-nav/right-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./right-nav.component.css */
      "./src/app/nav/right-nav/right-nav.component.css")).default]
    })], RightNavComponent);
    /***/
  },

  /***/
  "./src/app/service/auth.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/auth.service.ts ***!
    \*****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService() {
        _classCallCheck(this, AuthService);
      }

      _createClass(AuthService, [{
        key: "init",
        value: function init() {
          var user = sessionStorage.getItem('master-username');

          if (user === null || user === undefined) {
            sessionStorage.setItem('master-username', null);
          }
        }
      }, {
        key: "authenticate",
        value: function authenticate(username, password) {
          console.log(username + ' ' + password);

          if (username === 'master' && password === 'master') {
            sessionStorage.setItem('master-username', username);
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('master-username');
          console.log(!(user === null));
          return !(user === null);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('master-username');
        }
      }]);

      return AuthService;
    }();

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/service/history.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/history.service.ts ***!
    \********************************************/

  /*! exports provided: HistoryService */

  /***/
  function srcAppServiceHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryService", function () {
      return HistoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HistoryService =
    /*#__PURE__*/
    function () {
      function HistoryService(http) {
        _classCallCheck(this, HistoryService);

        this.http = http;
        this.path = 'http://' + window.location.hostname + ':3000';
      }

      _createClass(HistoryService, [{
        key: "getHistory",
        value: function getHistory() {
          return this.http.get(this.path + '/api/history');
        }
      }, {
        key: "clearHistory",
        value: function clearHistory() {
          return this.http.get(this.path + '/api/clearHistory');
        }
      }]);

      return HistoryService;
    }();

    HistoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HistoryService);
    /***/
  },

  /***/
  "./src/app/service/init.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/init.service.ts ***!
    \*****************************************/

  /*! exports provided: InitService */

  /***/
  function srcAppServiceInitServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitService", function () {
      return InitService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InitService =
    /*#__PURE__*/
    function () {
      function InitService() {
        _classCallCheck(this, InitService);

        this.toggleLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleRight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleChatbox = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineSize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lineStyle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(InitService, [{
        key: "viewLeft",
        value: function viewLeft() {
          this.toggleLeft.emit({});
        }
      }, {
        key: "viewRight",
        value: function viewRight() {
          this.toggleRight.emit({});
        }
      }, {
        key: "viewChatbox",
        value: function viewChatbox() {
          this.toggleChatbox.emit({});
        }
      }, {
        key: "viewUpload",
        value: function viewUpload() {
          this.openUpload.emit({});
        }
      }, {
        key: "setLineColor",
        value: function setLineColor(item) {
          this.lineColor.emit(item);
        }
      }, {
        key: "setLineSize",
        value: function setLineSize(item) {
          this.lineSize.emit(item);
        }
      }, {
        key: "setLineStyle",
        value: function setLineStyle(item) {
          this.lineStyle.emit(item);
        }
      }]);

      return InitService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "toggleLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "toggleRight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "toggleChatbox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "lineColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "lineSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "lineStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InitService.prototype, "openUpload", void 0);
    InitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InitService);
    /***/
  },

  /***/
  "./src/app/service/layout.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/layout.service.ts ***!
    \*******************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppServiceLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutService =
    /*#__PURE__*/
    function () {
      function LayoutService() {
        _classCallCheck(this, LayoutService);

        this.bgImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.downloadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LayoutService, [{
        key: "viewImg",
        value: function viewImg(item) {
          this.bgImage.emit(item);
        }
      }, {
        key: "to_download",
        value: function to_download() {
          this.downloadImage.emit({});
        }
      }]);

      return LayoutService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LayoutService.prototype, "bgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LayoutService.prototype, "downloadImage", void 0);
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/app/service/left-nav.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/service/left-nav.service.ts ***!
    \*********************************************/

  /*! exports provided: LeftNavService */

  /***/
  function srcAppServiceLeftNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftNavService", function () {
      return LeftNavService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LeftNavService = function LeftNavService() {
      _classCallCheck(this, LeftNavService);
    };

    LeftNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LeftNavService);
    /***/
  },

  /***/
  "./src/app/service/right-nav.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/right-nav.service.ts ***!
    \**********************************************/

  /*! exports provided: RightNavService */

  /***/
  function srcAppServiceRightNavServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightNavService", function () {
      return RightNavService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RightNavService = function RightNavService() {
      _classCallCheck(this, RightNavService);
    };

    RightNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RightNavService);
    /***/
  },

  /***/
  "./src/app/service/socket.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/socket.service.ts ***!
    \*******************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServiceSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");

    var SocketService =
    /*#__PURE__*/
    function () {
      function SocketService(socket) {
        _classCallCheck(this, SocketService);

        this.socket = socket;
      }

      _createClass(SocketService, [{
        key: "getDrawingMessage",
        value: function getDrawingMessage() {
          return this.socket.fromEvent('drawing').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getAuthMaster",
        value: function getAuthMaster() {
          return this.socket.fromEvent('auth-master').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getAuthStudent",
        value: function getAuthStudent() {
          return this.socket.fromEvent('auth-student').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getImage",
        value: function getImage() {
          return this.socket.fromEvent('image').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.socket.fromEvent('message-chat').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "sendDrawingMessage",
        value: function sendDrawingMessage(msg) {
          this.socket.emit('drawing', msg);
        }
      }, {
        key: "sendStudentMessage",
        value: function sendStudentMessage(msg) {
          this.socket.emit('auth-student', msg);
        }
      }, {
        key: "sendMasterMessage",
        value: function sendMasterMessage(msg) {
          this.socket.emit('auth-master', msg);
        }
      }, {
        key: "sendImage",
        value: function sendImage(msg) {
          this.socket.emit('image', msg);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(msg) {
          this.socket.emit('message-chat', msg);
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
      }];
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketService);
    /***/
  },

  /***/
  "./src/app/service/status-position.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/service/status-position.service.ts ***!
    \****************************************************/

  /*! exports provided: StatusPositionService */

  /***/
  function srcAppServiceStatusPositionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPositionService", function () {
      return StatusPositionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StatusPositionService =
    /*#__PURE__*/
    function () {
      function StatusPositionService() {
        _classCallCheck(this, StatusPositionService);
      }

      _createClass(StatusPositionService, [{
        key: "init",
        value: function init() {
          var position = sessionStorage.getItem('status-position');

          if (position === null || position === undefined) {
            sessionStorage.setItem('status-position', null);
          }
        }
      }, {
        key: "getPosition",
        value: function getPosition() {
          return sessionStorage.getItem('status-position');
        }
      }, {
        key: "setPosition",
        value: function setPosition(position) {
          sessionStorage.setItem('status-position', position);
          return this.getPosition();
        }
      }, {
        key: "getusername",
        value: function getusername() {
          if (this.getPosition() === 'Student') {
            return sessionStorage.getItem('student-username').toString();
          } else {
            return sessionStorage.getItem('master-username').toString();
          }
        }
      }]);

      return StatusPositionService;
    }();

    StatusPositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StatusPositionService);
    /***/
  },

  /***/
  "./src/app/service/student-auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/student-auth.service.ts ***!
    \*************************************************/

  /*! exports provided: StudentAuthService */

  /***/
  function srcAppServiceStudentAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAuthService", function () {
      return StudentAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/service/socket.service.ts");

    var StudentAuthService =
    /*#__PURE__*/
    function () {
      function StudentAuthService(socketService) {
        _classCallCheck(this, StudentAuthService);

        this.socketService = socketService;
      }

      _createClass(StudentAuthService, [{
        key: "init",
        value: function init() {
          var user = sessionStorage.getItem('student-username');

          if (user === null || user === undefined) {
            sessionStorage.setItem('student-username', null);
          }
        }
      }, {
        key: "authenticate",
        value: function authenticate(username, password) {
          if (username !== '' && password === 'student') {
            sessionStorage.setItem('student-username', username);
            this.masterConnect();
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('student-username');
          console.log(!(user === null));
          return !(user === null);
        }
      }, {
        key: "user",
        value: function user() {
          return sessionStorage.getItem('student-username');
        }
      }, {
        key: "masterConnect",
        value: function masterConnect() {
          var user = sessionStorage.getItem('student-username');
          this.socketService.sendMasterMessage({
            student_auth: user
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          sessionStorage.removeItem('student-username');
        }
      }]);

      return StudentAuthService;
    }();

    StudentAuthService.ctorParameters = function () {
      return [{
        type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
      }];
    };

    StudentAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentAuthService);
    /***/
  },

  /***/
  "./src/app/service/views.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/views.service.ts ***!
    \******************************************/

  /*! exports provided: ViewsService */

  /***/
  function srcAppServiceViewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewsService", function () {
      return ViewsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ViewsService = function ViewsService(httpClient) {
      _classCallCheck(this, ViewsService);

      this.httpClient = httpClient;
    };

    ViewsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ViewsService);
    /***/
  },

  /***/
  "./src/app/student/modal-user/modal-user.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/student/modal-user/modal-user.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentModalUserModalUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-dialog-content {\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9tb2RhbC11c2VyL21vZGFsLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L21vZGFsLXVzZXIvbW9kYWwtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/student/modal-user/modal-user.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/student/modal-user/modal-user.component.ts ***!
    \************************************************************/

  /*! exports provided: ModalUserComponent */

  /***/
  function srcAppStudentModalUserModalUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalUserComponent", function () {
      return ModalUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _service_student_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../service/student-auth.service */
    "./src/app/service/student-auth.service.ts");
    /* harmony import */


    var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../service/auth.service */
    "./src/app/service/auth.service.ts");

    var ModalUserComponent =
    /*#__PURE__*/
    function () {
      function ModalUserComponent(StudentAuth, MasterAuth, dialogRef, data) {
        _classCallCheck(this, ModalUserComponent);

        this.StudentAuth = StudentAuth;
        this.MasterAuth = MasterAuth;
        this.dialogRef = dialogRef;
        this.data = data;
        this.position = '';
        console.log(data);
        this.position = data;
      }

      _createClass(ModalUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(username, password) {
          if (this.data === 'Teacher') {
            var user = this.MasterAuth.authenticate(username, password);

            if (user) {
              this.dialogRef.close({
                position: 'Teacher',
                status: 'success'
              });
            } else {
              console.log('Master wrong Info');
            }
          } else {
            var _user = this.StudentAuth.authenticate(username, password);

            if (_user) {
              this.dialogRef.close({
                position: 'Student',
                status: 'success'
              });
            } else {
              console.log('Master wrong Info');
            }
          }
        }
      }]);

      return ModalUserComponent;
    }();

    ModalUserComponent.ctorParameters = function () {
      return [{
        type: _service_student_auth_service__WEBPACK_IMPORTED_MODULE_3__["StudentAuthService"]
      }, {
        type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ModalUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/modal-user/modal-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-user.component.css */
      "./src/app/student/modal-user/modal-user.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ModalUserComponent);
    /***/
  },

  /***/
  "./src/app/student/student.component.css":
  /*!***********************************************!*\
    !*** ./src/app/student/student.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/student/student.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/student/student.component.ts ***!
    \**********************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudentComponent =
    /*#__PURE__*/
    function () {
      function StudentComponent() {
        _classCallCheck(this, StudentComponent);
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StudentComponent;
    }();

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student.component.css */
      "./src/app/student/student.component.css")).default]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/upload/upload-modal/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/upload/upload-modal/index.ts ***!
    \**********************************************/

  /*! exports provided: UploadModalModule, UploadModalService */

  /***/
  function srcAppUploadUploadModalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _upload_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./upload-modal.module */
    "./src/app/upload/upload-modal/upload-modal.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UploadModalModule", function () {
      return _upload_modal_module__WEBPACK_IMPORTED_MODULE_1__["UploadModalModule"];
    });
    /* harmony import */


    var _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload-modal.service */
    "./src/app/upload/upload-modal/upload-modal.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UploadModalService", function () {
      return _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"];
    });
    /***/

  },

  /***/
  "./src/app/upload/upload-modal/upload-modal.component.less":
  /*!*****************************************************************!*\
    !*** ./src/app/upload/upload-modal/upload-modal.component.less ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadUploadModalUploadModalComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MODAL STYLES\n-------------------------------*/\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\njw-modal .jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\njw-modal .jw-modal .jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n}\njw-modal .jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC1tb2RhbC91cGxvYWQtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvbW9oZGlza2FuZGFyYmluc2Ftc3VkZGluL0RvY3VtZW50cy9ub2RlX2pzX3Byby92YnAvc3JjL2FwcC91cGxvYWQvdXBsb2FkLW1vZGFsL3VwbG9hZC1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtnQ0FDZ0M7QUNDaEM7RURDRSxpQ0FBaUM7RUNDakMsYUFBQTtBRENGO0FDSEE7RURLRSw4Q0FBOEM7RUNDMUMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURDSixxREFBcUQ7RUNFakQsYUFBQTtFREFKLHNDQUFzQztFQ0dsQyxjQUFBO0FERE47QUNmQTtFQW1CVSxhQUFBO0VBQ0EsZ0JBQUE7RUREUixnREFBZ0Q7RUNJeEMsWUFBQTtBREZWO0FDckJBO0VEdUJFLCtDQUErQztFQ00zQyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFREpKLDRCQUE0QjtFQ094QixzQkFBQTtFQUNBLGFBQUE7RURMSiwrREFBK0Q7RUNRM0QsWUFBQTtBRE5OO0FDVUE7RURSRSw2RUFBNkU7RUNVN0UsZ0JBQUE7QURSRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQtbW9kYWwvdXBsb2FkLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuanctbW9kYWwgLmp3LW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5qdy1tb2RhbCAuanctbW9kYWwgLmp3LW1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gIG1hcmdpbjogNDBweDtcbn1cbmp3LW1vZGFsIC5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmp3LW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xuXG4gIC5qdy1tb2RhbCB7XG4gICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuXG4gICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgIC5qdy1tb2RhbC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXG4gICAgICAgICAgbWFyZ2luOiA0MHB4O1xuICAgICAgfVxuICB9XG5cbiAgLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgb3BhY2l0eTogMC43NTtcblxuICAgICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICAgICAgei1pbmRleDogOTAwO1xuICB9XG59XG5cbmJvZHkuanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/upload/upload-modal/upload-modal.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/upload/upload-modal/upload-modal.component.ts ***!
    \***************************************************************/

  /*! exports provided: UploadModalComponent */

  /***/
  function srcAppUploadUploadModalUploadModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadModalComponent", function () {
      return UploadModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./upload-modal.service */
    "./src/app/upload/upload-modal/upload-modal.service.ts");

    var UploadModalComponent =
    /*#__PURE__*/
    function () {
      function UploadModalComponent(modalService, el) {
        _classCallCheck(this, UploadModalComponent);

        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
      }

      _createClass(UploadModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          // ensure id attribute exists
          if (!this.id) {
            console.error('modal must have an id');
            return;
          } // move element to bottom of page (just before </body>) so it can be displayed above everything else


          document.body.appendChild(this.element); // close modal on background click

          this.element.addEventListener('click', function (el) {
            if (el.target.className === 'jw-modal') {
              _this10.close();
            }
          }); // add self (this modal instance) to the modal service so it's accessible from controllers

          this.modalService.add(this);
        } // remove self from modal service when component is destroyed

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.modalService.remove(this.id);
          this.element.remove();
        } // open modal

      }, {
        key: "open",
        value: function open() {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
        } // close modal

      }, {
        key: "close",
        value: function close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
        }
      }]);

      return UploadModalComponent;
    }();

    UploadModalComponent.ctorParameters = function () {
      return [{
        type: _upload_modal_service__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UploadModalComponent.prototype, "id", void 0);
    UploadModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'jw-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-modal/upload-modal.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-modal.component.less */
      "./src/app/upload/upload-modal/upload-modal.component.less")).default]
    })], UploadModalComponent);
    /***/
  },

  /***/
  "./src/app/upload/upload-modal/upload-modal.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/upload/upload-modal/upload-modal.module.ts ***!
    \************************************************************/

  /*! exports provided: UploadModalModule */

  /***/
  function srcAppUploadUploadModalUploadModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadModalModule", function () {
      return UploadModalModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _upload_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-modal.component */
    "./src/app/upload/upload-modal/upload-modal.component.ts");

    var UploadModalModule = function UploadModalModule() {
      _classCallCheck(this, UploadModalModule);
    };

    UploadModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_upload_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadModalComponent"]],
      exports: [_upload_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadModalComponent"]]
    })], UploadModalModule);
    /***/
  },

  /***/
  "./src/app/upload/upload-modal/upload-modal.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/upload/upload-modal/upload-modal.service.ts ***!
    \*************************************************************/

  /*! exports provided: UploadModalService */

  /***/
  function srcAppUploadUploadModalUploadModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadModalService", function () {
      return UploadModalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadModalService =
    /*#__PURE__*/
    function () {
      function UploadModalService() {
        _classCallCheck(this, UploadModalService);

        this.modals = [];
      }

      _createClass(UploadModalService, [{
        key: "add",
        value: function add(modal) {
          // add modal to array of active modals
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          // remove modal from array of active modals
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          // open modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.open();
        }
      }, {
        key: "close",
        value: function close(id) {
          // close modal specified by id
          var modal = this.modals.find(function (x) {
            return x.id === id;
          });
          modal.close();
        }
      }]);

      return UploadModalService;
    }();

    UploadModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadModalService);
    /***/
  },

  /***/
  "./src/app/upload/upload-view/upload-view.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/upload/upload-view/upload-view.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadUploadViewUploadViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQtdmlldy91cGxvYWQtdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/upload/upload-view/upload-view.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/upload/upload-view/upload-view.component.ts ***!
    \*************************************************************/

  /*! exports provided: UploadViewComponent */

  /***/
  function srcAppUploadUploadViewUploadViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadViewComponent", function () {
      return UploadViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _upload_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../upload-modal */
    "./src/app/upload/upload-modal/index.ts");
    /* harmony import */


    var _service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/layout.service */
    "./src/app/service/layout.service.ts");
    /* harmony import */


    var _service_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/init.service */
    "./src/app/service/init.service.ts");

    var UploadViewComponent =
    /*#__PURE__*/
    function () {
      function UploadViewComponent(modalService, initService, layoutService) {
        var _this11 = this;

        _classCallCheck(this, UploadViewComponent);

        this.modalService = modalService;
        this.initService = initService;
        this.layoutService = layoutService;
        this.initService.openUpload.subscribe(function (data) {
          console.log('clicked');

          _this11.openModal('custom-modal-1');
        });
      }

      _createClass(UploadViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "preview",
        value: function preview(files) {
          var _this12 = this;

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

          reader.onload = function (_event) {
            _this12.imgURL = reader.result;
            console.log(reader);
          };
        }
      }, {
        key: "addBGimage",
        value: function addBGimage(item) {
          this.layoutService.viewImg({
            type: 'bgImage',
            data: this.imgURL
          });
          this.closeModal('custom-modal-1');
        }
      }, {
        key: "openModal",
        value: function openModal(id) {
          this.modalService.open(id);
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.imagePath = '';
          this.imgURL = '';
          this.modalService.close(id);
        }
      }]);

      return UploadViewComponent;
    }();

    UploadViewComponent.ctorParameters = function () {
      return [{
        type: _upload_modal__WEBPACK_IMPORTED_MODULE_2__["UploadModalService"]
      }, {
        type: _service_init_service__WEBPACK_IMPORTED_MODULE_4__["InitService"]
      }, {
        type: _service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
      }];
    };

    UploadViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload-view/upload-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-view.component.css */
      "./src/app/upload/upload-view/upload-view.component.css")).default]
    })], UploadViewComponent);
    /***/
  },

  /***/
  "./src/app/upload/upload-view/upload-view.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/upload/upload-view/upload-view.service.ts ***!
    \***********************************************************/

  /*! exports provided: UploadViewService */

  /***/
  function srcAppUploadUploadViewUploadViewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadViewService", function () {
      return UploadViewService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadViewService = function UploadViewService() {
      _classCallCheck(this, UploadViewService);
    };

    UploadViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadViewService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mohdiskandarbinsamsuddin/Documents/node_js_pro/vbp/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map