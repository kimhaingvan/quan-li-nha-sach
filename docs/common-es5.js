function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/pipes/pipe/common.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/pipe/common.pipe.ts ***!
    \*******************************************/

  /*! exports provided: standardizedId, VND */

  /***/
  function srcAppPipesPipeCommonPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "standardizedId", function () {
      return standardizedId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VND", function () {
      return VND;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var standardizedId = /*#__PURE__*/function () {
      function standardizedId() {
        _classCallCheck(this, standardizedId);
      }

      _createClass(standardizedId, [{
        key: "transform",
        value: function transform(id) {
          var preNum = "#";

          if (typeof id == "string") {
            id = parseInt(id);
          }

          if (id < 10) {
            preNum = "#00000";
          } else if (id < 100) {
            preNum = "#0000";
          } else if (id < 1000) {
            preNum = "#000";
          } else if (id < 10000) {
            preNum = "#00";
          } else if (id < 100000) {
            preNum = "#0";
          } else {
            preNum = "#";
          }

          return preNum + id;
        }
      }]);

      return standardizedId;
    }();

    standardizedId.ɵfac = function standardizedId_Factory(t) {
      return new (t || standardizedId)();
    };

    standardizedId.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "standardizedId",
      type: standardizedId,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](standardizedId, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'standardizedId'
        }]
      }], null, null);
    })();

    var VND = /*#__PURE__*/function () {
      function VND() {
        _classCallCheck(this, VND);
      }

      _createClass(VND, [{
        key: "transform",
        value: function transform(value) {
          if (typeof value != "number" && typeof value != "string") {
            return value;
          }

          if (typeof value == "string") {
            value = Number(value);
          }

          var valueString = value < 0 ? (-value).toString() : value.toString();

          if (valueString.includes(".")) {
            var wholePart = valueString.split(".")[0].replace(/./g, function (match, p1, p2) {
              return p1 && match !== "," && (p2.length - p1) % 3 === 0 ? '.' + match : match;
            });
            var decimalPart = valueString.split(".")[1];
            return "".concat(value < 0 ? '-' : '').concat(wholePart, ",").concat(decimalPart);
          } else {
            var result = valueString.replace(/./g, function (match, p1, p2) {
              return p1 && match !== "," && (p2.length - p1) % 3 === 0 ? '.' + match : match;
            });
            return "".concat(value < 0 ? '-' : '').concat(result, " \u0111");
          }
        }
      }]);

      return VND;
    }();

    VND.ɵfac = function VND_Factory(t) {
      return new (t || VND)();
    };

    VND.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "vnd",
      type: VND,
      pure: true
    });
    VND.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VND,
      factory: VND.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VND, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'vnd'
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipe/pipe.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/pipe/pipe.module.ts ***!
    \*******************************************/

  /*! exports provided: PipeModule */

  /***/
  function srcAppPipesPipePipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipeModule", function () {
      return PipeModule;
    });
    /* harmony import */


    var _common_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./common.pipe */
    "./src/app/pipes/pipe/common.pipe.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var PipeModule = function PipeModule() {
      _classCallCheck(this, PipeModule);
    };

    PipeModule.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PipeModule,
      factory: PipeModule.ɵfac,
      providedIn: "root"
    });
    PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PipeModule
    });
    PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PipeModule_Factory(t) {
        return new (t || PipeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipeModule, {
        declarations: [_common_pipe__WEBPACK_IMPORTED_MODULE_0__["standardizedId"], _common_pipe__WEBPACK_IMPORTED_MODULE_0__["VND"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_common_pipe__WEBPACK_IMPORTED_MODULE_0__["standardizedId"], _common_pipe__WEBPACK_IMPORTED_MODULE_0__["VND"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [_common_pipe__WEBPACK_IMPORTED_MODULE_0__["standardizedId"], _common_pipe__WEBPACK_IMPORTED_MODULE_0__["VND"]],
          exports: [_common_pipe__WEBPACK_IMPORTED_MODULE_0__["standardizedId"], _common_pipe__WEBPACK_IMPORTED_MODULE_0__["VND"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map