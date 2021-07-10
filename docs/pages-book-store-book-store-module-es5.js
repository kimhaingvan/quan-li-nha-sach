function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-book-store-book-store-module"], {
  /***/
  "./src/app/pages/book-store/book-store-routing.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/book-store/book-store-routing.service.ts ***!
    \****************************************************************/

  /*! exports provided: BookStoreRoutingModule */

  /***/
  function srcAppPagesBookStoreBookStoreRoutingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookStoreRoutingModule", function () {
      return BookStoreRoutingModule;
    });
    /* harmony import */


    var _book_store_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./book-store.component */
    "./src/app/pages/book-store/book-store.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _book_store_component__WEBPACK_IMPORTED_MODULE_0__["BookStoreComponent"]
    }];

    var BookStoreRoutingModule = function BookStoreRoutingModule() {
      _classCallCheck(this, BookStoreRoutingModule);
    };

    BookStoreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BookStoreRoutingModule
    });
    BookStoreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function BookStoreRoutingModule_Factory(t) {
        return new (t || BookStoreRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookStoreRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookStoreRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/book-store/book-store.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/book-store/book-store.component.ts ***!
    \**********************************************************/

  /*! exports provided: BookStoreComponent */

  /***/
  function srcAppPagesBookStoreBookStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookStoreComponent", function () {
      return BookStoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/web-socket.service */
    "./src/app/services/web-socket.service.ts");
    /* harmony import */


    var src_app_states_account_store_account_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/states/account-store/account.query */
    "./src/app/states/account-store/account.query.ts");
    /* harmony import */


    var _states_message_store_message_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../states/message-store/message.store */
    "./src/app/states/message-store/message.store.ts");
    /* harmony import */


    var _states_message_store_message_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../states/message-store/message.query */
    "./src/app/states/message-store/message.query.ts");
    /* harmony import */


    var _states_message_store_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../states/message-store/message.service */
    "./src/app/states/message-store/message.service.ts");
    /* harmony import */


    var _components_shop_header_shop_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shop-header/shop-header.component */
    "./src/app/pages/book-store/components/shop-header/shop-header.component.ts");
    /* harmony import */


    var _components_shop_footer_shop_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shop-footer/shop-footer.component */
    "./src/app/pages/book-store/components/shop-footer/shop-footer.component.ts");

    var _c0 = ["mes"];

    var BookStoreComponent = /*#__PURE__*/function () {
      function BookStoreComponent(webSocketService, accountQuery, messageStore, messageQuery, messageService) {
        _classCallCheck(this, BookStoreComponent);

        this.webSocketService = webSocketService;
        this.accountQuery = accountQuery;
        this.messageStore = messageStore;
        this.messageQuery = messageQuery;
        this.messageService = messageService;
        this.isDisplayMessage = false;
        this.messages = [];
        this.message_list$ = this.messageQuery.messages_list$;
        this.chatText = '';
      }

      _createClass(BookStoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _a, _b;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var req, conversation;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(((_a = this.accountQuery.getValue().auth_info) === null || _a === void 0 ? void 0 : _a.account.role.role_id) == 3 && this.accountQuery.getValue().auth_info.account.role.role_name == "customer")) {
                      _context.next = 7;
                      break;
                    }

                    req = {
                      'customer_account_id': this.accountQuery.getValue().auth_info.account.account_id
                    };
                    _context.next = 4;
                    return this.messageService.GetConversationByCustomerAccountId(req);

                  case 4:
                    conversation = _context.sent;
                    this.messageService.SetActiveConversation(conversation);
                    this.messageService.SetActiveConversationId(conversation['conversation_id']);

                  case 7:
                    this.webSocketService.emit('join', {
                      'auth_info': JSON.parse(localStorage.getItem('auth_info')),
                      'room': (_b = this.messageQuery.getValue().active_conversation) === null || _b === void 0 ? void 0 : _b.conversation_id
                    }); // this.webSocketService.listen('message').subscribe(message => {
                    //   this.ListenMessage(message)
                    // })

                    _context.next = 10;
                    return this.messageService.GetMoreMessageAndPushIntoStore({
                      page: 0,
                      perPage: 10,
                      conversation_id: this.messageQuery.getValue().active_conversation_id
                    }).then(function (_) {
                      _this.messages = _this.messageQuery.getValue().messages_list;
                    });

                  case 10:
                    this.MessageScrollToBottom();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ListenMessage",
        value: function ListenMessage(message) {
          var account_id_from_server = message['account_id'];
          var account_id_from_client = this.accountQuery.getValue().auth_info.account.account_id;
          var isReplyMessage = account_id_from_server != account_id_from_client;
          message.type = isReplyMessage ? 'reply' : 'send';
          this.messages.push(message);
          this.messageStore.update({
            messages_list: this.messages
          });
          this.MessageScrollToBottom();
        }
      }, {
        key: "SendMessage",
        value: function SendMessage() {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var sendMessageReq;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.chatText) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    sendMessageReq = {
                      conversation_id: this.messageQuery.getValue().active_conversation_id,
                      account_id: this.accountQuery.getValue().auth_info.account.account_id,
                      content: this.chatText,
                      room: (_a = this.messageQuery.getValue().active_conversation) === null || _a === void 0 ? void 0 : _a.conversation_id
                    };
                    this.webSocketService.emit('incoming-msg', sendMessageReq);
                    this.chatText = '';
                    this.MessageScrollToBottom();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "LeaveRoom",
        value: function LeaveRoom() {
          this.webSocketService.emit('leave', {
            'room': 'ROOM'
          });
        }
      }, {
        key: "MessageScrollToBottom",
        value: function MessageScrollToBottom() {
          var _a;

          if (this.isDisplayMessage && this.message) {
            this.message.nativeElement.scrollTop = (_a = this.message) === null || _a === void 0 ? void 0 : _a.nativeElement.scrollHeight;
          }
        }
      }, {
        key: "ToggleDisplayMessage",
        value: function ToggleDisplayMessage() {
          this.isDisplayMessage = !this.isDisplayMessage;
          this.MessageScrollToBottom();
        }
      }]);

      return BookStoreComponent;
    }();

    BookStoreComponent.ɵfac = function BookStoreComponent_Factory(t) {
      return new (t || BookStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_states_account_store_account_query__WEBPACK_IMPORTED_MODULE_3__["AccountQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_states_message_store_message_store__WEBPACK_IMPORTED_MODULE_4__["MessageStore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_states_message_store_message_query__WEBPACK_IMPORTED_MODULE_5__["MessageQuery"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_states_message_store_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]));
    };

    BookStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BookStoreComponent,
      selectors: [["app-book-store"]],
      viewQuery: function BookStoreComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      template: function BookStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-shop-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-shop-footer");
        }
      },
      directives: [_components_shop_header_shop_header_component__WEBPACK_IMPORTED_MODULE_7__["ShopHeaderComponent"], _components_shop_footer_shop_footer_component__WEBPACK_IMPORTED_MODULE_8__["ShopFooterComponent"]],
      styles: [".box[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  border: 1px solid #eee;\n}\n\n.setting-box[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n\n.setting-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n\n.setting-body[_ngcontent-%COMP%], .setting-footer[_ngcontent-%COMP%], .setting-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.setting-body[_ngcontent-%COMP%], .setting-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n}\n\n.setting-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.note[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: left;\n}\n\n.read-only[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n.menu-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  padding: 0.75rem 1.25rem;\n  margin: 0.5rem 0;\n  cursor: pointer;\n  color: gray;\n}\n\n.menu-list[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border-radius: 0.4rem;\n  color: var(--app-color);\n}\n\n.menu-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  font-weight: bold;\n}\n\n.menu-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:focus {\n  border: 0px solid !important;\n  outline: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n\n.send-content-message[_ngcontent-%COMP%] {\n  width: auto;\n  text-align: left;\n  max-width: 80%;\n  padding: 6px 10px;\n  border-bottom-left-radius: 24px;\n  border-top-left-radius: 24px;\n  background-color: var(--app-color);\n  color: white;\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n}\n\n.reply-content-message[_ngcontent-%COMP%] {\n  width: auto;\n  text-align: left;\n  max-width: 80%;\n  padding: 6px 10px;\n  border-bottom-left-radius: 24px;\n  border-top-left-radius: 24px;\n  background-color: lightgray;\n  color: black;\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row-reverse;\n  margin-top: 3px;\n}\n\n.message-box[_ngcontent-%COMP%] {\n  bottom: 20px;\n  position: fixed;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbm1hYy93b3Jrc3BhY2UvbGlicmFyeS1tYW5hZ2VtZW50LUZFL3NyYy9hcHAvcGFnZXMvYm9vay1zdG9yZS9ib29rLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rLXN0b3JlL2Jvb2stc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRENBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEREU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURERTtFQUNFLGlCQUFBO0FDR0o7O0FEREU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNHSjs7QURDQTtFQUNFLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rLXN0b3JlL2Jvb2stc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwwLDAsLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICB9XG5cbiAgLnNldHRpbmctYm94IHtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICB9XG5cbiAgLnNldHRpbmctaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnNldHRpbmctYm9keSwgLnNldHRpbmctZm9vdGVyLCAuc2V0dGluZy1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5zZXR0aW5nLWJvZHksIC5zZXR0aW5nLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLnNldHRpbmctZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3RlIHtcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yZWFkLW9ubHkge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5tZW51LWxpc3QgZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWNvbG9yKTtcbiAgfVxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6MHB4IHNvbGlkICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4O1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZW51LXNpZGViYXIge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG5cbi5zZW5kLWNvbnRlbnQtbWVzc2FnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNHB4O1xufVxuXG4ucmVwbHktY29udGVudC1tZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogODAlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi10b3A6M3B4O1xufVxuXG4ubWVzc2FnZS1ib3gge1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG59IiwiLmJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uc2V0dGluZy1ib3gge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuXG4uc2V0dGluZy1oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnNldHRpbmctYm9keSwgLnNldHRpbmctZm9vdGVyLCAuc2V0dGluZy1oZWFkZXIge1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5zZXR0aW5nLWJvZHksIC5zZXR0aW5nLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5zZXR0aW5nLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90ZSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucmVhZC1vbmx5IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm1lbnUtbGlzdCBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JheTtcbn1cbi5tZW51LWxpc3QgZGl2LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgY29sb3I6IHZhcigtLWFwcC1jb2xvcik7XG59XG4ubWVudS1saXN0IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1lbnUtbGlzdCBkaXY6Zm9jdXMge1xuICBib3JkZXI6IDBweCBzb2xpZCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiAwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZW51LXNpZGViYXIge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG5cbi5zZW5kLWNvbnRlbnQtbWVzc2FnZSB7XG4gIHdpZHRoOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNHB4O1xufVxuXG4ucmVwbHktY29udGVudC1tZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1heC13aWR0aDogODAlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm1lc3NhZ2UtYm94IHtcbiAgYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-book-store',
          templateUrl: './book-store.component.html',
          styleUrls: ['./book-store.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]
        }, {
          type: src_app_states_account_store_account_query__WEBPACK_IMPORTED_MODULE_3__["AccountQuery"]
        }, {
          type: _states_message_store_message_store__WEBPACK_IMPORTED_MODULE_4__["MessageStore"]
        }, {
          type: _states_message_store_message_query__WEBPACK_IMPORTED_MODULE_5__["MessageQuery"]
        }, {
          type: _states_message_store_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mes', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/book-store/book-store.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/book-store/book-store.module.ts ***!
    \*******************************************************/

  /*! exports provided: BookStoreModule */

  /***/
  function srcAppPagesBookStoreBookStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookStoreModule", function () {
      return BookStoreModule;
    });
    /* harmony import */


    var _components_share_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../components/share-component.module */
    "./src/app/pages/components/share-component.module.ts");
    /* harmony import */


    var _book_store_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./book-store-routing.service */
    "./src/app/pages/book-store/book-store-routing.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _book_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./book-store.component */
    "./src/app/pages/book-store/book-store.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_shop_header_shop_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shop-header/shop-header.component */
    "./src/app/pages/book-store/components/shop-header/shop-header.component.ts");
    /* harmony import */


    var _components_shop_footer_shop_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shop-footer/shop-footer.component */
    "./src/app/pages/book-store/components/shop-footer/shop-footer.component.ts");

    var BookStoreModule = function BookStoreModule() {
      _classCallCheck(this, BookStoreModule);
    };

    BookStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BookStoreModule
    });
    BookStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function BookStoreModule_Factory(t) {
        return new (t || BookStoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _book_store_routing_service__WEBPACK_IMPORTED_MODULE_1__["BookStoreRoutingModule"], _components_share_component_module__WEBPACK_IMPORTED_MODULE_0__["ShareComponentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BookStoreModule, {
        declarations: [_book_store_component__WEBPACK_IMPORTED_MODULE_4__["BookStoreComponent"], _components_shop_header_shop_header_component__WEBPACK_IMPORTED_MODULE_6__["ShopHeaderComponent"], _components_shop_footer_shop_footer_component__WEBPACK_IMPORTED_MODULE_7__["ShopFooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _book_store_routing_service__WEBPACK_IMPORTED_MODULE_1__["BookStoreRoutingModule"], _components_share_component_module__WEBPACK_IMPORTED_MODULE_0__["ShareComponentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _book_store_routing_service__WEBPACK_IMPORTED_MODULE_1__["BookStoreRoutingModule"], _components_share_component_module__WEBPACK_IMPORTED_MODULE_0__["ShareComponentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          declarations: [_book_store_component__WEBPACK_IMPORTED_MODULE_4__["BookStoreComponent"], _components_shop_header_shop_header_component__WEBPACK_IMPORTED_MODULE_6__["ShopHeaderComponent"], _components_shop_footer_shop_footer_component__WEBPACK_IMPORTED_MODULE_7__["ShopFooterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/book-store/components/shop-footer/shop-footer.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/book-store/components/shop-footer/shop-footer.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ShopFooterComponent */

  /***/
  function srcAppPagesBookStoreComponentsShopFooterShopFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopFooterComponent", function () {
      return ShopFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ShopFooterComponent = /*#__PURE__*/function () {
      function ShopFooterComponent() {
        _classCallCheck(this, ShopFooterComponent);
      }

      _createClass(ShopFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopFooterComponent;
    }();

    ShopFooterComponent.ɵfac = function ShopFooterComponent_Factory(t) {
      return new (t || ShopFooterComponent)();
    };

    ShopFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopFooterComponent,
      selectors: [["app-shop-footer"]],
      decls: 137,
      vars: 0,
      consts: [["id", "footer"], [1, "container-fluid", 2, "margin-inline", "100px"], [1, "row", "text-left", "text-xs-left", "text-sm-left", "text-md-left"], [1, "col-xs-12", "col-sm-4", "col-md-3"], [2, "font-weight", "bold"], [1, "list-unstyled", "quick-links"], ["href", "javascript:void();", 2, "color", "#333333"], ["href", "javascript:void();"], [1, "col-xs-12", "col-sm-12", "col-md-3"], [1, "list-unstyled", "list-inline"], [1, "list-inline-item"], ["src", "https://developers.momo.vn/images/logo.png", "width", "50"], [1, "col-xs-12", "col-sm-12", "col-md-6"], [1, "list-inline"], ["src", "https://img.icons8.com/nolan/50/facebook-new.png"], ["src", "https://img.icons8.com/nolan/50 /instagram-new.png"], ["src", "https://img.icons8.com/nolan/50/youtube-music.png"], ["href", "javascript:void();", "target", "_blank"], ["src", "https://img.icons8.com/nolan/50/email.png"], ["src", "https://img.icons8.com/color/50/000000/google-play.png"], ["src", "https://img.icons8.com/dusk/50/000000/apple-app-store--v2.png"], [1, "footer-widget"], [1, "animate-border", "border-black"], [2, "margin-top", "15px"], ["action", "#"], [1, "form-row"], [1, "col", "dk-footer-form"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit"], [1, "fa", "fa-send"], [1, "col-xs-12", "col-sm-6", "col-md-12"], [1, "column", 2, "margin-top", "100px"], [1, "text-left", 2, "font-weight", "bold", "font-size", "15px"], [1, "column"], [1, "col-md-10", "col-sm-6", "col-xs-12"], [2, "padding-top", "10px"], [1, "col-md-2", "col-sm-6", "col-xs-12"], ["href", "https://hotro.tiki.vn/hc/vi/articles/115005575826", "rel", "noreferrer", "aria-label", ""], ["src", "https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png", "width", "36", "alt", ""], ["href", "http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=21201", "rel", "noreferrer", "aria-label", ""], ["src", "https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg", "width", "120", "alt", ""]],
      template: function ShopFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "H\u1ED6 TR\u1EE2 KH\xC1CH H\xC0NG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "C\xE1c c\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "H\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "G\u1EEDi y\xEAu c\u1EA7u h\u1ED7 tr\u1EE3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ph\u01B0\u01A1ng th\u1EE9c v\u1EADn chuy\u1EC3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ch\xEDnh s\u1EA3n ph\u1EA9m \u0111\u1ED5i tr\u1EA3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "H\u01B0\u1EDBng d\u1EABn tr\u1EA3 g\xF3p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ch\xEDnh s\u1EA3n ph\u1EA9m h\xE0ng nh\u1EADp kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "H\u1ED7 tr\u1EE3 kh\xE1ch h\xE0ng: hotro@taha.vn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "B\xE1o l\u1ED7i b\u1EA3o m\u1EADt: security@taha.vn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "V\u1EC0 CH\xDANG T\xD4I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gi\u1EDBi thi\u1EC7u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Tuy\u1EC3n d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "G\u1EEDi y\xEAu c\u1EA7u h\u1ED7 tr\u1EE3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ch\xEDnh s\u1EA3n ph\u1EA9m b\u1EA3o m\u1EADt thanh to\xE1n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Ch\xEDnh s\u1EA3n ph\u1EA9m b\u1EA3o m\u1EADt th\xF4ng tin c\xE1 nh\xE2n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ch\xEDnh s\u1EA3n ph\u1EA9m gi\u1EA3i quy\u1EBFt khi\u1EBFu n\u1EA1i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "B\xE1n h\xE0ng doanh nghi\u1EC7p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "H\u1EE2P T\xC1C V\xC0 LI\xCAN K\u1EBET");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Quy ch\u1EBF ho\u1EA1t \u0111\u1ED9ng s\xE0n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "B\xE1n h\xE0ng c\xF9ng ch\xFAng t\xF4i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "PH\u01AF\u01A0NG TH\u1EE8C THANH TO\xC1N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "K\u1EBET N\u1ED0I V\u1EDAI CH\xDANG T\xD4I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "T\u1EA2I \u1EE8NG D\u1EE4NG TR\xCAN \u0110I\u1EC6N THO\u1EA0I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0110\u0102NG K\xDD NH\u1EACN B\u1EA2N TIN TAHA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u0110\u1EEBng b\u1ECF l\u1EE1 ng\xE0n s\u1EA3n ph\u1EA9m v\xE0 ch\u01B0\u01A1ng tr\xECnh si\xEAu h\u1EA5p d\u1EABn ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "form", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\u0110\u1ECBa ch\u1EC9 v\u0103n ph\xF2ng: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "52 \xDAt T\u1ECBch, ph\u01B0\u1EDDng 4, qu\u1EADn T\xE2n B\xECnh, th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh TAHA nh\u1EADn \u0111\u1EB7t h\xE0ng tr\u1EF1c tuy\u1EBFn v\xE0 giao h\xE0ng t\u1EADn n\u01A1i, ch\u01B0a h\u1ED7 tr\u1EE3 mua v\xE0 nh\u1EADn h\xE0ng tr\u1EF1c ti\u1EBFp t\u1EA1i v\u0103n ph\xF2ng ho\u1EB7c trung t\xE2m x\u1EED l\xFD \u0111\u01A1n h\xE0ng");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Copyright \xA9 2017 All Rights Reserved by TAHA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333333;\n  line-height: 2.5;\n}\n\n.animate-border[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 115px;\n  height: 3px;\n  background: #007bff;\n}\n\n.animate-border[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 35px;\n  height: 3px;\n  left: 0;\n  bottom: 0;\n  border-left: 10px solid #fff;\n  border-right: 10px solid #fff;\n  -webkit-animation: animborder 2s linear infinite;\n  animation: animborder 2s linear infinite;\n}\n\n@-webkit-keyframes animborder {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(113px);\n  }\n}\n\n@keyframes animborder {\n  0% {\n    transform: translateX(0px);\n  }\n  100% {\n    transform: translateX(113px);\n  }\n}\n\n.animate-border.border-white[_ngcontent-%COMP%]:after {\n  border-color: #fff;\n}\n\n.animate-border.border-yellow[_ngcontent-%COMP%]:after {\n  border-color: #F5B02E;\n}\n\n.animate-border.border-orange[_ngcontent-%COMP%]:after {\n  border-right-color: #007bff;\n  border-left-color: #007bff;\n}\n\n.animate-border.border-ash[_ngcontent-%COMP%]:after {\n  border-right-color: #EEF0EF;\n  border-left-color: #EEF0EF;\n}\n\n.animate-border.border-offwhite[_ngcontent-%COMP%]:after {\n  border-right-color: #F7F9F8;\n  border-left-color: #F7F9F8;\n}\n\n.dk-footer-form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.dk-footer-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border-radius: 50px;\n  height: 47px;\n  background: #ffffff;\n  border: 1px solid #007bff;\n}\n\n.dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .dk-footer-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #878787;\n  font-size: 14px;\n}\n\n.dk-footer-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0;\n  padding: 12px 24px 12px 17px;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 1.6px solid #007bff;\n  background: #007bff;\n  color: #fff;\n}\n\n.dk-footer-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.footer-widget[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: black;\n  position: relative;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.footer-widget[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbm1hYy93b3Jrc3BhY2UvbGlicmFyeS1tYW5hZ2VtZW50LUZFL3NyYy9hcHAvcGFnZXMvYm9vay1zdG9yZS9jb21wb25lbnRzL3Nob3AtZm9vdGVyL3Nob3AtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rLXN0b3JlL2NvbXBvbmVudHMvc2hvcC1mb290ZXIvc2hvcC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3Q0FBQTtBQ0dGOztBREZBO0VBQ0U7SUFFRSwwQkFBQTtFQ0tGO0VESkE7SUFFRSw0QkFBQTtFQ01GO0FBQ0Y7O0FEYkE7RUFDRTtJQUVFLDBCQUFBO0VDS0Y7RURKQTtJQUVFLDRCQUFBO0VDTUY7QUFDRjs7QURMQTtFQUNFLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQ1NGOztBRFBBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQ1VGOztBRFJBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7QUNZRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ2NGOztBRFZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNrQkY7O0FEakJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDb0JGOztBRG5CQTtFQUNFLGVBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ3VCRjs7QURyQkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUN3QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rLXN0b3JlL2NvbXBvbmVudHMvc2hvcC1mb290ZXIvc2hvcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSBhe1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6Mi41XG59XG4uYW5pbWF0ZS1ib3JkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmOyB9XG5cbi5hbmltYXRlLWJvcmRlcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWJvcmRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYW5pbWJvcmRlciAycyBsaW5lYXIgaW5maW5pdGU7IH1cbkBrZXlmcmFtZXMgYW5pbWJvcmRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEzcHgpOyB9IH1cblxuLmFuaW1hdGUtYm9yZGVyLmJvcmRlci13aGl0ZTphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjsgfVxuXG4uYW5pbWF0ZS1ib3JkZXIuYm9yZGVyLXllbGxvdzphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI0Y1QjAyRTsgfVxuXG4uYW5pbWF0ZS1ib3JkZXIuYm9yZGVyLW9yYW5nZTphZnRlciB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDdiZmY7IH1cblxuLmFuaW1hdGUtYm9yZGVyLmJvcmRlci1hc2g6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNFRUYwRUY7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRUVGMEVGOyB9XG5cbi5hbmltYXRlLWJvcmRlci5ib3JkZXItb2Zmd2hpdGU6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNGN0Y5Rjg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjdGOUY4OyB9XG5cbi5kay1mb290ZXItZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmRrLWZvb3Rlci1mb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7IH1cbi5kay1mb290ZXItZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuLmRrLWZvb3Rlci1mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIC5kay1mb290ZXItZm9ybSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5kay1mb290ZXItZm9ybSBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuLmRrLWZvb3Rlci1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDEuNnB4IHNvbGlkICMwMDdiZmY7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmOyB9XG4uZGstZm9vdGVyLWZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5mb290ZXItd2lkZ2V0IGg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDsgfVxuXG4uZm9vdGVyLXdpZGdldDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDsgfVxuXG4iLCJsaSBhIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cbi5hbmltYXRlLWJvcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG59XG5cbi5hbmltYXRlLWJvcmRlcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWJvcmRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYW5pbWJvcmRlciAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWJvcmRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTEzcHgpO1xuICB9XG59XG4uYW5pbWF0ZS1ib3JkZXIuYm9yZGVyLXdoaXRlOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4uYW5pbWF0ZS1ib3JkZXIuYm9yZGVyLXllbGxvdzphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI0Y1QjAyRTtcbn1cblxuLmFuaW1hdGUtYm9yZGVyLmJvcmRlci1vcmFuZ2U6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA3YmZmO1xufVxuXG4uYW5pbWF0ZS1ib3JkZXIuYm9yZGVyLWFzaDphZnRlciB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI0VFRjBFRjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNFRUYwRUY7XG59XG5cbi5hbmltYXRlLWJvcmRlci5ib3JkZXItb2Zmd2hpdGU6YWZ0ZXIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNGN0Y5Rjg7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjdGOUY4O1xufVxuXG4uZGstZm9vdGVyLWZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kay1mb290ZXItZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHBhZGRpbmc6IDE0cHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xufVxuXG4uZGstZm9vdGVyLWZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5kay1mb290ZXItZm9ybSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5kay1mb290ZXItZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODc4Nzg3O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kay1mb290ZXItZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAuZGstZm9vdGVyLWZvcm0gaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmRrLWZvb3Rlci1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODc4Nzg3O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kay1mb290ZXItZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxLjZweCBzb2xpZCAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRrLWZvb3Rlci1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvb3Rlci13aWRnZXQgaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZm9vdGVyLXdpZGdldDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop-footer',
          templateUrl: './shop-footer.component.html',
          styleUrls: ['./shop-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/book-store/components/shop-header/shop-header.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/book-store/components/shop-header/shop-header.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ShopHeaderComponent */

  /***/
  function srcAppPagesBookStoreComponentsShopHeaderShopHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopHeaderComponent", function () {
      return ShopHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ShopHeaderComponent = /*#__PURE__*/function () {
      function ShopHeaderComponent() {
        _classCallCheck(this, ShopHeaderComponent);
      }

      _createClass(ShopHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopHeaderComponent;
    }();

    ShopHeaderComponent.ɵfac = function ShopHeaderComponent_Factory(t) {
      return new (t || ShopHeaderComponent)();
    };

    ShopHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopHeaderComponent,
      selectors: [["app-shop-header"]],
      decls: 40,
      vars: 0,
      consts: [[1, "header-dark"], [1, "navbar", "navbar-dark", "navbar-expand-md", "navigation-clean-search"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["data-toggle", "collapse", "data-target", "#navcol-1", 1, "navbar-toggler"], [1, "sr-only"], [1, "navbar-toggler-icon"], ["id", "navcol-1", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-expanded", "false", "href", "#", 1, "dropdown-toggle", "nav-link", "dropdown-toggle"], ["role", "menu", 1, "dropdown-menu"], ["role", "presentation", "href", "#", 1, "dropdown-item"], ["target", "_self", 1, "form-inline", "mr-auto"], [1, "form-group"], ["placeholder", "T\xECm s\u1EA3n ph\u1EA9m, danh m\u1EE5c hay th\u01B0\u01A1ng hi\u1EC7u mong mu\u1ED1n", "type", "search", "name", "search", "id", "search-field", 1, "form-control", "search-field"], ["for", "search-field"], [1, "fa", "fa-search"], [1, ""], [1, "material-icons"], [1, "navbar-text", "ml-2"], ["href", "#", 1, "login"], [1, "navbar-text"], [1, "ml-3", "cart-wrapper"], ["role", "button", "href", "#", 1, "shopping_cart"]],
      template: function ShopHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toggle navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Danh m\u1EE5c s\u1EA3n ph\u1EA9m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SecondItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Third Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " account_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0110\u0103ng nh\u1EADp / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0110\u0103ng k\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " shopping_cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Gi\u1ECF h\xE0ng ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".header-dark[_ngcontent-%COMP%] {\n  background-color: #3498db;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background: transparent;\n  padding-top: 0;\n  padding-bottom: 0;\n  color: #fff;\n  border-radius: 0;\n  box-shadow: none;\n  border: none;\n}\n\n@media (min-width: 768px) {\n  .header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: inherit;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n  color: #f0f0f0;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  color: #d9d9d9;\n  margin-right: 0.5rem;\n  text-decoration: none;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: #747474;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%], .header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%] {\n  border-color: #636363;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #d9d9d9;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .header-dark[_ngcontent-%COMP%]   .navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #fcfeff !important;\n  background-color: transparent;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  border-radius: 2px;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  line-height: 2;\n  font-size: 14px;\n  color: #37434d;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:focus, .header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .drodown-item[_ngcontent-%COMP%]:hover {\n  background: #ebeff1;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%], .header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:active {\n  background: #208f8f;\n  border-radius: 20px;\n  font-size: inherit;\n  color: #fff;\n  box-shadow: none;\n  border: none;\n  text-shadow: none;\n  padding: 0.5rem 0.8rem;\n  transition: background-color 0.25s;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: #269d9d;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 95%;\n  background: none;\n  border: none;\n  border-bottom: 1px solid transparent;\n  border-radius: 0;\n  color: #ccc;\n  box-shadow: none;\n  color: inherit;\n  transition: border-bottom-color 0.3s;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  box-shadow: rgba(98, 98, 98, 0.5) 0px 1px 2px 0px;\n  padding: 5px;\n  margin-left: 50px;\n}\n\n.header-dark[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid #ccc;\n}\n\n.header-dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n@media (min-width: 768px) {\n  .header-dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n\n.header-dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Bitter\", serif;\n  font-size: 40px;\n  margin-top: 20px;\n  margin-bottom: 80px;\n}\n\n@media (min-width: 768px) {\n  .header-dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n    line-height: 1.5;\n  }\n}\n\n.header-dark[_ngcontent-%COMP%]   .hero[_ngcontent-%COMP%]   .embed-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  background-color: #666;\n}\n\ndiv.form-group[_ngcontent-%COMP%] {\n  width: 460px;\n}\n\ninput.search-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #fff;\n}\n\ninput.search-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #fff;\n}\n\ninput.search-field[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n}\n\n.shopping_cart[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\nspan.material-icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbm1hYy93b3Jrc3BhY2UvbGlicmFyeS1tYW5hZ2VtZW50LUZFL3NyYy9hcHAvcGFnZXMvYm9vay1zdG9yZS9jb21wb25lbnRzL3Nob3AtaGVhZGVyL3Nob3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rLXN0b3JlL2NvbXBvbmVudHMvc2hvcC1oZWFkZXIvc2hvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSx1QkFBQTtFQ0NKO0FBQ0Y7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0FDQUo7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBRElFO0VBQ0UsV0FBQTtBQ0RKOztBRElFO0VBQ0UscUJBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtBQ0RKOztBRElFO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQ0RKOztBRElFO0VBQ0UsaURBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJRTtFQUNFLDZCQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtBQ0RKOztBRElFO0VBQ0U7SUFDRSxnQkFBQTtFQ0RKO0FBQ0Y7O0FESUU7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VDRko7QUFDRjs7QURLRTtFQUNFLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxZQUFBO0FDSEo7O0FETUU7RUFDRSxXQUFBO0FDSEo7O0FERUU7RUFDRSxXQUFBO0FDSEo7O0FERUU7RUFDRSxXQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9vay1zdG9yZS9jb21wb25lbnRzL3Nob3AtaGVhZGVyL3Nob3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xufVxuICBcbi5oZWFkZXItZGFyayAubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctdG9wOjA7XG4gICAgcGFkZGluZy1ib3R0b206MDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG59XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xuICAgIC5oZWFkZXItZGFyayAubmF2YmFyIHtcbiAgICAgIHBhZGRpbmctdG9wOi43NXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOi43NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY29sb3I6aW5oZXJpdDtcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgY29sb3I6I2YwZjBmMDtcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSBzcGFuIHtcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSBzcGFuIC5sb2dpbiB7XG4gICAgY29sb3I6I2Q5ZDlkOTtcbiAgICBtYXJnaW4tcmlnaHQ6LjVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItY29sbGFwc2Ugc3BhbiAubG9naW46aG92ZXIge1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyLWNvbG9yOiM3NDc0NzQ7XG4gIH1cbiAgXG4gIFxuICAuaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGNvbG9yOiNlZWU7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UsIC5oZWFkZXItZGFyayAubmF2YmFyIC5mb3JtLWlubGluZSB7XG4gICAgYm9yZGVyLWNvbG9yOiM2MzYzNjM7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgY29sb3I6I2Q5ZDlkOTtcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAuaGVhZGVyLWRhcmsgLm5hdmJhci5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiNmY2ZlZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi10b3A6LTVweDtcbiAgICBib3gtc2hhZG93OjAgNHB4IDhweCByZ2JhKDAsMCwwLC4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzLCAuaGVhZGVyLWRhcmsgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6MjtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBjb2xvcjojMzc0MzRkO1xuICB9XG4gIFxuICAuaGVhZGVyLWRhcmsgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cywgLmhlYWRlci1kYXJrIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgLmRyb2Rvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDojZWJlZmYxO1xuICB9XG4gIFxuICAuaGVhZGVyLWRhcmsgLm5hdmJhciAuYWN0aW9uLWJ1dHRvbiwgLmhlYWRlci1kYXJrIC5uYXZiYXIgLmFjdGlvbi1idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiMyMDhmOGY7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGZvbnQtc2l6ZTppbmhlcml0O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHRleHQtc2hhZG93Om5vbmU7XG4gICAgcGFkZGluZzouNXJlbSAuOHJlbTtcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4yNXM7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiMyNjlkOWQ7XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAubmF2YmFyIC5mb3JtLWlubGluZSBsYWJlbCB7XG4gICAgY29sb3I6I2NjYztcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIgLmZvcm0taW5saW5lIC5zZWFyY2gtZmllbGQge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOjk1JTtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czowO1xuICAgIGNvbG9yOiNjY2M7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgdHJhbnNpdGlvbjpib3JkZXItYm90dG9tLWNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC5mb3JtLWlubGluZXtcbiAgICBib3gtc2hhZG93OiByZ2JhKDk4LCA5OCwgOTgsIDAuNSkgMHB4IDFweCAycHggMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5uYXZiYXIgLnNlYXJjaC1maWVsZDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5oZXJvIHtcbiAgICBtYXJnaW4tdG9wOjYwcHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLmhlYWRlci1kYXJrIC5oZXJvIHtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkZXItZGFyayAuaGVybyBoMSB7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LWZhbWlseTonQml0dGVyJywgc2VyaWY7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206ODBweDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAuaGVhZGVyLWRhcmsgLmhlcm8gaDEge1xuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6MS41O1xuICAgIH1cbiAgfVxuICBcbiAgLmhlYWRlci1kYXJrIC5oZXJvIC5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjY2O1xuICB9XG5cbiAgZGl2LmZvcm0tZ3JvdXB7XG4gICAgd2lkdGg6IDQ2MHB4O1xuICB9XG5cbiAgaW5wdXQuc2VhcmNoLWZpZWxkOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5zaG9wcGluZ19jYXJ0e1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIHNwYW4ubWF0ZXJpYWwtaWNvbnN7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICB9XG4gICIsIi5oZWFkZXItZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXItZGFyayAubmF2YmFyIHtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgfVxufVxuLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiAjZjBmMGYwO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItY29sbGFwc2Ugc3BhbiAubG9naW4ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlci1kYXJrIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSBzcGFuIC5sb2dpbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXItY29sb3I6ICM3NDc0NzQ7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLCAuaGVhZGVyLWRhcmsgLm5hdmJhciAuZm9ybS1pbmxpbmUge1xuICBib3JkZXItY29sb3I6ICM2MzYzNjM7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZDlkOWQ5O1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhci5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIC5oZWFkZXItZGFyayAubmF2YmFyLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmNmZWZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOmZvY3VzLCAuaGVhZGVyLWRhcmsgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzc0MzRkO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpmb2N1cywgLmhlYWRlci1kYXJrIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUgLmRyb2Rvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlYmVmZjE7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIC5hY3Rpb24tYnV0dG9uLCAuaGVhZGVyLWRhcmsgLm5hdmJhciAuYWN0aW9uLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMjA4ZjhmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAuYWN0aW9uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyNjlkOWQ7XG59XG5cbi5oZWFkZXItZGFyayAubmF2YmFyIC5mb3JtLWlubGluZSBsYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAuZm9ybS1pbmxpbmUgLnNlYXJjaC1maWVsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjY2NjO1xuICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjNzO1xufVxuXG4uZm9ybS1pbmxpbmUge1xuICBib3gtc2hhZG93OiByZ2JhKDk4LCA5OCwgOTgsIDAuNSkgMHB4IDFweCAycHggMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaGVhZGVyLWRhcmsgLm5hdmJhciAuc2VhcmNoLWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5oZWFkZXItZGFyayAuaGVybyB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyLWRhcmsgLmhlcm8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5oZWFkZXItZGFyayAuaGVybyBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJCaXR0ZXJcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXItZGFyayAuaGVybyBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG4uaGVhZGVyLWRhcmsgLmhlcm8gLmVtYmVkLXJlc3BvbnNpdmUgaWZyYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2Njtcbn1cblxuZGl2LmZvcm0tZ3JvdXAge1xuICB3aWR0aDogNDYwcHg7XG59XG5cbmlucHV0LnNlYXJjaC1maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNob3BwaW5nX2NhcnQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zcGFuLm1hdGVyaWFsLWljb25zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shop-header',
          templateUrl: './shop-header.component.html',
          styleUrls: ['./shop-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-book-store-book-store-module-es5.js.map