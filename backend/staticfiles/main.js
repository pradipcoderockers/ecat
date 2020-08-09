(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jaicataloguinew';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.service */ "./src/app/header.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./breadcrum/breadcrum.component */ "./src/app/breadcrum/breadcrum.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/item-modal/item-modal.component */ "./src/app/modal/item-modal/item-modal.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _service_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/interceptor */ "./src/app/service/interceptor.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/favourite/favourite.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular2-useful-swiper */ "./node_modules/angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _modal_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modal/order-modal/order-modal.component */ "./src/app/modal/order-modal/order-modal.component.ts");
/* harmony import */ var _modal_homepage_modal_homepage_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modal/homepage-modal/homepage-modal.component */ "./src/app/modal/homepage-modal/homepage-modal.component.ts");
/* harmony import */ var _favouriteadd_favouriteadd_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./favouriteadd/favouriteadd.component */ "./src/app/favouriteadd/favouriteadd.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");









// import { ItemComponent } from './item/item.component';




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                // ItemComponent,
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"],
                _breadcrum_breadcrum_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumComponent"],
                _modal_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_16__["ItemModalComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_20__["EditprofileComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_23__["FileUploadComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_26__["CreateUserComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__["CartComponent"],
                _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_28__["FavouriteComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_29__["UserProfileComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_31__["OrderComponent"],
                _modal_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_32__["OrderModalComponent"],
                _modal_homepage_modal_homepage_modal_component__WEBPACK_IMPORTED_MODULE_33__["HomepageModalComponent"],
                _favouriteadd_favouriteadd_component__WEBPACK_IMPORTED_MODULE_34__["FavouriteaddComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_36__["VerifyEmailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__["FileUploadModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                angular2_useful_swiper__WEBPACK_IMPORTED_MODULE_30__["SwiperModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_35__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptor"],
                    multi: true }, _header_service__WEBPACK_IMPORTED_MODULE_3__["HeaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _modal_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_16__["ItemModalComponent"], _modal_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_32__["OrderModalComponent"], _modal_homepage_modal_homepage_modal_component__WEBPACK_IMPORTED_MODULE_33__["HomepageModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favourite/favourite.component */ "./src/app/favourite/favourite.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'home', component: _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'editprofile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_6__["EditprofileComponent"] },
    { path: 'createProfile', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_9__["CreateUserComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: 'verify-email/:code', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_14__["VerifyEmailComponent"] },
    { path: 'upload', component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_8__["FileUploadComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"] },
    { path: 'fave', component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_11__["FavouriteComponent"] },
    { path: 'userProfile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_13__["OrderComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/breadcrum/breadcrum.component.css":
/*!***************************************************!*\
  !*** ./src/app/breadcrum/breadcrum.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bS9icmVhZGNydW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/breadcrum/breadcrum.component.html":
/*!****************************************************!*\
  !*** ./src/app/breadcrum/breadcrum.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  breadcrum works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/breadcrum/breadcrum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/breadcrum/breadcrum.component.ts ***!
  \**************************************************/
/*! exports provided: BreadcrumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumComponent", function() { return BreadcrumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumComponent = /** @class */ (function () {
    function BreadcrumComponent() {
    }
    BreadcrumComponent.prototype.ngOnInit = function () {
    };
    BreadcrumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrum',
            template: __webpack_require__(/*! ./breadcrum.component.html */ "./src/app/breadcrum/breadcrum.component.html"),
            styles: [__webpack_require__(/*! ./breadcrum.component.css */ "./src/app/breadcrum/breadcrum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumComponent);
    return BreadcrumComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n  <div class=\"main-box\">\r\n    <div class=\"container\">\r\n      <div class=\"table table-fav\">\r\n        <table width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <th>IMAGE</th>\r\n              <th width=\"14%\">NAME</th>\r\n              <th>VARIANT</th>\r\n              <th>PRODUCT CODE</th>\r\n              <th>QUANTITY</th>\r\n              <th>UNIT PRICE</th>\r\n              <th>TOTAL</th>\r\n              <th>REMOVE</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"cartItems\">\r\n            <tr *ngFor=\"let cart of cartItems\">\r\n              <td>\r\n                <a class=\"fav-frame\">\r\n                    <img src=\"assets/images/ecat/category/{{cart.product.category.code}}.png\">\r\n                </a>\r\n              </td>\r\n              <td width=\"15%\">\r\n                <a>{{cart.product.name}}</a>\r\n              </td>\r\n              <td>\r\n                <a>{{cart.product.variant}}</a>\r\n              </td>\r\n              <td>\r\n                <a>{{cart.product.item_code}}</a>\r\n              </td>\r\n              <td class=\"quan\">\r\n                {{cart.quantity}}\r\n              </td>\r\n              <td>\r\n                <a>&#8377;{{cart.product[userMrp]}}</a>\r\n              </td>\r\n              <td>\r\n                <a>&#8377;{{cart.product[userMrp] * cart.quantity}}</a>\r\n              </td>\r\n              <td>\r\n                <a class=\"fav-btn-remove\" (click)=\"removeFromCart(cart)\">REMOVE</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div *ngIf=\"cartItems.length==0\" ><p style=\"text-align: center\">Your cart is empty!</p></div>\r\n      <div *ngIf=\"cartItems.length>0\" class=\"cart-total\">\r\n        <div class=\"text-right\">\r\n          <h4>\r\n            Sub-Total: &#8377;{{total}}\r\n          </h4>\r\n          <h4>Total: &#8377;{{total}}</h4>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"cartItems.length>0\" class=\"fav-continue-shop\">\r\n        <div class=\"text-right\">\r\n          <div class=\"invoice-cart\">\r\n            <div class=\"invoice\">\r\n              <a (click)=generateInvoice()>Place Order</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(service, router) {
        this.service = service;
        this.router = router;
        this.total = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.localStorage.setItem('breadcrum', '');
        this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
        var userName = window.localStorage.getItem('token');
        var stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
        this.userMrp = 'mrp1';
        if ((stateDetail.role == 1 || stateDetail.role == 2) && stateDetail.state.dbp) {
            this.userMrp = stateDetail.state.dbp;
        }
        var userId = "";
        if (userName != null && userName != undefined) {
            this.service.getCart().subscribe(function (data) {
                _this.cartItems = data.results;
                for (var _i = 0, _a = data.results; _i < _a.length; _i++) {
                    var cart = _a[_i];
                    if (_this.userMrp == 'mrp1') {
                        _this.total = _this.total + cart.quantity * cart.product.mrp1;
                    }
                    else {
                        _this.total = _this.total + cart.quantity * cart.product.dbp1;
                    }
                }
            });
        }
        else {
            this.cartItems = [];
        }
    };
    CartComponent.prototype.updateQty = function (item, ele) {
        var index = this.cartItems.indexOf(item);
        this.cartItems[index].qty = ele;
    };
    CartComponent.prototype.removeFromCart = function (cartItem) {
        var _this = this;
        var index = this.cartItems.indexOf(cartItem);
        this.cartItems.splice(index, 1);
        this.service.deleteCart(cartItem.id).subscribe(function (data) {
            _this.total = 0;
            var userName = window.localStorage.getItem('token');
            var userId = "";
            if (userName != null && userName != undefined) {
                _this.service.getCart().subscribe(function (data) {
                    _this.cartItems = data.results;
                    for (var _i = 0, _a = data.results; _i < _a.length; _i++) {
                        var cart = _a[_i];
                        if (_this.userMrp == 'mrp1') {
                            _this.total = _this.total + cart.quantity * cart.product.mrp1;
                        }
                        else {
                            _this.total = _this.total + cart.quantity * cart.product.dbp1;
                        }
                    }
                });
            }
        });
    };
    CartComponent.prototype.generateInvoice = function () {
        var _this = this;
        var userName = window.localStorage.getItem('token');
        if (userName != null && userName != undefined && this.cartItems.length > 0) {
            this.service.createOrder().subscribe(function (data) {
                alert("Your order has been successfully placed");
                _this.router.navigate(['']);
            });
        }
        else {
            alert("Please add your product to cart first!");
        }
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"product-segment-slider\">\r\n        <div class=\"container\">\r\n            <div class=\"product-segment-center\">\r\n                <div class=\"row\" *ngIf=\"subcategoriesloading\">\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-3 hover\">\r\n                        <img src=\"assets/images/dribbble.gif\" style=\"text-align:center;width:50%;\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"subcategories && subcategories.length>0\">\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 hover\" *ngFor=\"let category of subcategories;\">\r\n                        <div *ngIf=\"category[catType]!=null && category[catType].code\" class=\"car-model-box\" (click)=\"openSubCat($event, category, catType)\">\r\n                            <a>\r\n                                <figure>\r\n                                    <img style=\"width: 80%\" src=\"assets/images/ecat/{{catType}}/{{category[catType].code}}.png\" alt=\"\">\r\n                                </figure>\r\n                                <h5>{{category[catType].name | uppercase}} </h5>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"subcategories.length==0\">\r\n                    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-12 hover\">\r\n                        <img src=\"assets/images/product-not-found.png\" class=\"product-not-found-img\">\r\n                        <p class=\"product-not-available\">PRODUCT NOT AVAILABLE NOW, PLEASE CHECK AFTER SOMETIME...</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.subcategoriesloading = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.subcategoriesloading = true;
            var category = params['category'] ? params['category'] : "";
            var subcategory = params['subcategory'] ? params['subcategory'] : "";
            var segment = params['segment'] ? params['segment'] : "";
            var subsegment = params['subsegment'] ? params['subsegment'] : "";
            var leaftype = params['leaftype'] ? params['leaftype'] : "";
            var vechicle = params['vechicle'] ? params['vechicle'] : "";
            var leafposition = params['leafposition'] ? params['leafposition'] : "";
            var vechiclemodel = params['vechiclemodel'] ? params['vechiclemodel'] : "";
            if (vechiclemodel && leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
                _this.route.queryParams.subscribe(function (params) {
                    _this.router.navigate(['products'], { queryParams: params });
                });
            }
            else if (leafposition && vechicle && leaftype && subsegment && segment && subcategory && category) {
                _this.catType = 'vechiclemodel';
                _this.service.getVechiclemodel(leafposition).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (vechicle && leaftype && subsegment && segment && subcategory && category) {
                _this.catType = 'leafposition';
                _this.service.getLeafposition(vechicle).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (leaftype && subsegment && segment && subcategory && category) {
                _this.catType = 'vechicle';
                _this.service.getVechicle(leaftype).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (subsegment && segment && subcategory && category) {
                _this.catType = 'leaftype';
                _this.service.getLeaftype(subsegment).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (segment && subcategory && category) {
                _this.catType = 'subsegment';
                _this.service.getSubSegment(segment).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (subcategory && category) {
                _this.catType = 'segment';
                _this.service.getSegment(subcategory).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else if (category) {
                _this.catType = 'subcategory';
                _this.service.getSubcategory(category).subscribe(function (data) {
                    _this.subcategories = data;
                    _this.subcategoriesloading = false;
                });
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CategoryComponent.prototype.openSubCat = function (event, cat, catType) {
        var _this = this;
        var breadcrum = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
        var breadCrumNew = cat[catType];
        breadCrumNew.type = catType;
        breadcrum.push(breadCrumNew);
        this.service.topcat = breadcrum;
        window.localStorage.setItem('breadcrum', JSON.stringify(breadcrum));
        this.route.queryParams.subscribe(function (params) {
            var paramsList = {};
            if (params['category']) {
                paramsList['category'] = params['category'];
            }
            if (catType == "subcategory" || params['subcategory']) {
                paramsList['subcategory'] = params['subcategory'] ? params['subcategory'] : cat['subcategory']['code'];
            }
            if (catType == "segment" || params['segment']) {
                paramsList['segment'] = params['segment'] ? params['segment'] : cat['segment']['code'];
            }
            if (catType == "subsegment" || params['subsegment']) {
                paramsList['subsegment'] = params['subsegment'] ? params['subsegment'] : cat['subsegment']['code'];
            }
            if (catType == "leaftype" || params['leaftype']) {
                paramsList['leaftype'] = params['leaftype'] ? params['leaftype'] : cat['leaftype']['code'];
            }
            if (catType == "vechicle" || params['vechicle']) {
                paramsList['vechicle'] = params['vechicle'] ? params['vechicle'] : cat['vechicle']['code'];
            }
            if (catType == "leafposition" || params['leafposition']) {
                paramsList['leafposition'] = params['leafposition'] ? params['leafposition'] : cat['leafposition']['code'];
            }
            if (catType == "vechiclemodel" || params['vechiclemodel']) {
                paramsList['vechiclemodel'] = params['vechiclemodel'] ? params['vechiclemodel'] : cat['vechiclemodel']['code'];
            }
            if (catType == "vechiclemodel" || params['vechiclemodel']) {
                _this.router.navigate(['products'], { queryParams: paramsList });
            }
            else {
                _this.router.navigate(['home'], { queryParams: paramsList });
            }
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_3__["CatagoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"detail-user-profile\">\r\n        <div class=\"left-user-data\">\r\n            <div class=\"left-user-img\">\r\n                <figure>\r\n                    <img src=\"assets/images/profile.jpg\" alt=\"\">\r\n                </figure>\r\n            </div>\r\n        </div>\r\n        <div class=\"right-user-data\">\r\n            <h4>PROFILE</h4>\r\n            <form #myform=\"ngForm\" (ngSubmit)=\"register(myform)\" class=\"form form-register\">\r\n                <div class=\"right-inner-left-data\">\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>First Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" ngModel name=\"firstName\" id=\"firstName\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Last Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" name=\"lastName\" class=\"mat-input\" id=\"lastName\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>User Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" name=\"username\" class=\"mat-input\" id=\"username\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Password</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"password\" ngModel name=\"password1\" class=\"mat-input\" id=\"password1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Repeat Password</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"password\" ngModel name=\"password2\" class=\"mat-input\" id=\"password2\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Email</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"email\" name=\"emailId\" class=\"mat-input\" id=\"emailId\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"editProfileBtn\">Save</button>\r\n            </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");




var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(service) {
        this.service = service;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
    };
    CreateUserComponent.prototype.register = function (form) {
        var first_name = form.value.firstName;
        var last_name = form.value.lastName;
        var email = form.value.emailId;
        var password1 = form.value.password1;
        var password2 = form.value.password2;
        var username = form.value.username;
        if (password1 !== password2) {
            alert("Password dont match");
            return;
        }
        var userLoad = new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        userLoad.first_name = first_name;
        userLoad.last_name = last_name;
        userLoad.email = email;
        userLoad.password1 = password1;
        userLoad.password2 = password2;
        userLoad.username = username;
        this.service.createUser(userLoad).subscribe(function (data) {
            alert(data.message);
        });
        // console.log(postLoad);
    };
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_3__["CatagoryService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"detail-user-profile\">\r\n        <div class=\"left-user-data\">\r\n           <div class=\"left-user-img\">\r\n            <figure>\r\n                <img src=\"assets/images/profile.jpg\" alt=\"\">\r\n            </figure>\r\n        </div>\r\n          </div>\r\n          <div class=\"right-user-data\">\r\n              <h4>PROFILE</h4>\r\n              <div class=\"right-inner-left-data\">\r\n                 <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>USERNAME</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\" placeholder=\"ADMIN\">\r\n                  </div>\r\n              </div>  \r\n              \r\n               <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>ADDRESS1</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\">\r\n                  </div>\r\n              </div>  \r\n              \r\n                   <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>USER TYPE</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\">\r\n                  </div>\r\n              </div>  \r\n              \r\n               <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>ADDRESS2</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\">\r\n                  </div>\r\n              </div>  \r\n              \r\n               <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>REG. DATE</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"date\">\r\n                  </div>\r\n              </div>  \r\n              \r\n               <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>CITY</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\" placeholder=\"DELHI\">\r\n                  </div>\r\n              </div>  \r\n          \r\n       \r\n                 \r\n                    <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>EMAIL</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"email\"> \r\n                  </div>\r\n              </div> \r\n              \r\n                <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>STATE</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\" placeholder=\"DELHI\">\r\n                  </div>\r\n              </div>  \r\n              \r\n                <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>MOBILE NUMBER</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"tel\" placeholder=\"9999999999\">\r\n                  </div>\r\n              </div>  \r\n              \r\n                <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>COUNTRY</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\" placeholder=\"INDIA\">\r\n                  </div>\r\n              </div>  \r\n              \r\n                <div class=\"inner-main\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>CONTACT NUMBER</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"tel\">\r\n                  </div>\r\n              </div>  \r\n              \r\n                <div class=\"inner-main last-detail\">\r\n                  <div class=\"left-inner-detail\">\r\n                      <label>PIN CODE</label>\r\n                  </div>\r\n                  <div class=\"right-inner-detail\">\r\n                     <input type=\"text\">\r\n                  </div>\r\n              </div> \r\n              \r\n              </div>\r\n              <button class=\"editProfileBtn\" >Save</button>  \r\n          </div>\r\n                                                          \r\n                 \r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent() {
    }
    EditprofileComponent.prototype.ngOnInit = function () {
    };
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/favourite/favourite.component.css":
/*!***************************************************!*\
  !*** ./src/app/favourite/favourite.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZS9mYXZvdXJpdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/favourite/favourite.component.html":
/*!****************************************************!*\
  !*** ./src/app/favourite/favourite.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n  <div class=\"main-box\">\r\n    <div class=\"container\">\r\n      <div class=\"table table-fav\">\r\n        <div id=\"closealert\" class=\"alert alert-{{alertClass}} fade in alert-dismissible\" style=\"margin-top:18px;\" [hidden]=\"!successmsg\">\r\n          <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" title=\"close\">×</a>\r\n          {{successmsg}}\r\n        </div>\r\n        <table width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <th>IMAGE</th>\r\n              <th>NAME</th>\r\n              <th>PRODUCT CODE</th>\r\n              <th>ADD TO CART</th>\r\n              <th>REMOVE</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"favouriteList.length>0\" >\r\n            <tr *ngFor=\"let fav of favouriteList\">\r\n              <td>\r\n                <a class=\"fav-frame\">\r\n                  <img src=\"assets/images/ecat/category/{{fav.product.category.code}}.png\">\r\n                </a>\r\n              </td>\r\n              <td>\r\n                <a>{{fav.product.name?fav.product.name:'N/A'}}</a>\r\n              </td>\r\n              <td>\r\n                <a>{{fav.product.item_code}}</a>\r\n              </td>\r\n              <td>\r\n                <a class=\"fav-text\" (click)=\"addToCart(fav)\">\r\n                  <i class=\"fas fa-shopping-cart\"></i>ADD TO CART</a>\r\n              </td>\r\n              <td>\r\n                <a class=\"fav-btn-remove\" (click)=\"removeFromCart(fav)\">REMOVE</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div *ngIf=\"favouriteList.length==0\" ><p style=\"margin-top:20px;text-align: center\">Your favorite list is empty!</p></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/favourite/favourite.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favourite/favourite.component.ts ***!
  \**************************************************/
/*! exports provided: FavouriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteComponent", function() { return FavouriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/add-cart-item-request.model */ "./src/app/model/add-cart-item-request.model.ts");





var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent(service, router) {
        this.service = service;
        this.router = router;
        this.total = 0;
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.localStorage.setItem('breadcrum', '');
        this.service.getFavourite().subscribe(function (data) {
            _this.favouriteList = data.results;
        });
    };
    FavouriteComponent.prototype.removeFromCart = function (cartItem) {
        var _this = this;
        this.service.deleteFavourite(cartItem.id).subscribe(function (data) {
            _this.service.getFavourite().subscribe(function (data) {
                _this.favouriteList = data.results;
            });
        });
    };
    FavouriteComponent.prototype.addToCart = function (item, type, pro, fvrtid) {
        var _this = this;
        var userName = window.localStorage.getItem('token');
        if (!userName) {
            this.alertClass = "info";
            this.successmsg = "User not logged in. Please login to continue.";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
            return false;
        }
        var quntity = prompt("Please enter quantity :", "1");
        var quntityp = parseInt(quntity);
        if (quntityp > 0) {
            var cartReq = new _model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_4__["AddCartItemRequest"]();
            cartReq.product_id = item.product.id;
            cartReq.quantity = quntityp;
            if (userName != null && userName != undefined) {
                this.service.postCart(cartReq).subscribe(function (data) {
                    _this.alertClass = "success";
                    _this.successmsg = "Successfully added to your cart list!";
                    setTimeout(function () {
                        _this.successmsg = '';
                    }, 6000);
                });
            }
            else {
                this.alertClass = "info";
                this.successmsg = "User not logged in. Please login to continue.";
                setTimeout(function () {
                    _this.successmsg = '';
                }, 6000);
            }
        }
        else {
            this.alertClass = "danger";
            this.successmsg = "Please enter quantity .";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
        }
    };
    FavouriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourite',
            template: __webpack_require__(/*! ./favourite.component.html */ "./src/app/favourite/favourite.component.html"),
            styles: [__webpack_require__(/*! ./favourite.component.css */ "./src/app/favourite/favourite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FavouriteComponent);
    return FavouriteComponent;
}());



/***/ }),

/***/ "./src/app/favouriteadd/favouriteadd.component.css":
/*!*********************************************************!*\
  !*** ./src/app/favouriteadd/favouriteadd.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZWFkZC9mYXZvdXJpdGVhZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/favouriteadd/favouriteadd.component.html":
/*!**********************************************************!*\
  !*** ./src/app/favouriteadd/favouriteadd.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"table-responsive\">\r\n\t<div class=\"row\" *ngIf=\"productsloading\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-3 hover\" >\r\n\t\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 \" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<img src =\"assets/images/dribbble.gif\" style=\"text-align:center;width:50%;\" >\r\n\t\t\t</div>\r\n    </div>\r\n\t   \r\n\t\t\r\n\t  \r\n\t\r\n<div class=\"row\" [ngClass]=\"loaded?'show':'hide'\">\r\n\r\n\t\t<div style=\"margin: 0px 0px 0px 40%; cursor:pointer\" (click)=\"openNalert()\" >\r\n\t\t\t<span  style=\"font-size: 20px !important;\" title=\"Add favourite\"> \r\n\t\t\t\t<i  class=\"fas fa-folder\" style=\"color:black;\" >Add favourite</i>  \r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t\r\n\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" >\r\n\t  \r\n\t    \r\n\t   \r\n\t  <thead>\r\n\t\t<tr>\r\n\t\t  <th>NAME</th>\r\n\t\t  <th> DELETE </th>\r\n\t\t   \r\n\t    </tr>\r\n\t  </thead>\r\n\t  <tbody>\r\n\t\t<tr *ngFor=\"let favouriteListOne of favouriteList\">\r\n\t\t  <td> \r\n\t\t\t<img _ngcontent-afa-c1=\"\" alt=\"folder\" src=\"../../assets/images/folder.png\">\r\n\t\t\t{{favouriteListOne.name}} \r\n\t\t  </td>\r\n\t\t   \r\n\t\t  <td>\r\n\t\t\t<span  style=\"font-size: 20px !important;\" (click)=\"deletefvt(favouriteListOne.id)\"> \r\n\t\t\t\t<i  class=\"fas fa-trash\" style=\"color:black;\" ></i>  \r\n\t\t\t</span>\r\n\t\t  </td>\r\n\t\t \r\n\t\t</tr>\r\n\t  </tbody>\r\n\t  </table>\r\n  \r\n  \r\n</div>\r\n  \r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/favouriteadd/favouriteadd.component.ts":
/*!********************************************************!*\
  !*** ./src/app/favouriteadd/favouriteadd.component.ts ***!
  \********************************************************/
/*! exports provided: FavouriteaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteaddComponent", function() { return FavouriteaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var FavouriteaddComponent = /** @class */ (function () {
    function FavouriteaddComponent(router, route, service, modalService) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this.dtOptions = {};
        this.loaded = false;
        this.productsloading = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    FavouriteaddComponent.prototype.ngOnInit = function () {
        this.loginuserName = (window.localStorage.getItem('userName')) ? window.localStorage.getItem('userName') : '';
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
        this.loadpagedata();
    };
    FavouriteaddComponent.prototype.loadpagedata = function () {
        var _this = this;
        this.productsloading = true;
        this.service.getfavouriteById(this.loginuserName).subscribe(function (data) {
            _this.favouriteList = data.result;
            _this.loaded = true;
            _this.dtTrigger.next();
            _this.productsloading = false;
        });
    };
    FavouriteaddComponent.prototype.openNalert = function () {
        var _this = this;
        var person = prompt("Please enter your favourite name:", "");
        if (person) {
            this.service.addfavouriteById(this.loginuserName, person).subscribe(function (data) {
                _this.favouriteList = data.result;
            });
        }
    };
    FavouriteaddComponent.prototype.deletefvt = function (id) {
        var _this = this;
        var r = confirm("Are you sure?");
        if (r == true) {
            this.service.deletefavouriteById(this.loginuserName, id).subscribe(function (data) {
                _this.favouriteList = data.result;
            });
        }
    };
    FavouriteaddComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    FavouriteaddComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    FavouriteaddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favouriteadd',
            template: __webpack_require__(/*! ./favouriteadd.component.html */ "./src/app/favouriteadd/favouriteadd.component.html"),
            styles: [__webpack_require__(/*! ./favouriteadd.component.css */ "./src/app/favouriteadd/favouriteadd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], FavouriteaddComponent);
    return FavouriteaddComponent;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.css":
/*!*******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n \r\n   <div class=\"row\">\r\n\r\n      <div class=\"col-md-3\">\r\n\r\n          <h3>Select files</h3>\r\n\r\n          <div ng2FileDrop\r\n               [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n               (fileOver)=\"fileOverBase($event)\"\r\n               [uploader]=\"uploader\"\r\n               class=\"well my-drop-zone\">\r\n              Base drop zone\r\n          </div>\r\n\r\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n      </div>\r\n\r\n      <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n\r\n          <h3>Upload queue</h3>\r\n          <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n          <table class=\"table\">\r\n              <thead>\r\n              <tr>\r\n                  <th width=\"50%\">Name</th>\r\n                  <th>Size</th>\r\n                  <th>Progress</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let item of uploader.queue\">\r\n                  <td><strong>{{ item?.file?.name }}</strong></td>\r\n                  <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                  <td *ngIf=\"uploader.isHTML5\">\r\n                      <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                      </div>\r\n                  </td>\r\n                  <td class=\"text-center\">\r\n                      <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                      <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                      <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                  </td>\r\n                  <td nowrap>\r\n                      <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                              (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                          <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                              (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                              (click)=\"item.remove()\">\r\n                          <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                      </button>\r\n                  </td>\r\n              </tr>\r\n              </tbody>\r\n          </table>\r\n\r\n          <div>\r\n              <div>\r\n                  Queue progress:\r\n                  <div class=\"progress\" style=\"\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                  </div>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                      (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                  <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                      (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                  <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                      (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                  <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n              </button>\r\n          </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");







var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(fb, http, modalService, catServic) {
        this.fb = fb;
        this.http = http;
        this.modalService = modalService;
        this.catServic = catServic;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            isHTML5: true
        });
        this.title = 'File Upload';
        this.fileUpload = { status: '', message: 0 };
    }
    FileUploadComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    FileUploadComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    FileUploadComponent.prototype.uploadSubmit = function () {
        for (var i = 0; i < this.uploader.queue.length; i++) {
            var fileItem = this.uploader.queue[i]._file;
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
            var data = new FormData();
            var fileItem = this.uploader.queue[j]._file;
            console.log(fileItem.name);
            data.append('file', fileItem);
            data.append('fileSeq', 'seq' + j);
            this.uploadFile(data);
        }
        this.uploader.clearQueue();
    };
    FileUploadComponent.prototype.uploadFile = function (data) {
        var _this = this;
        return this.catServic.uploadFile(data).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                var percentDone = Math.round(100 * event.loaded / event.total);
                _this.fileUpload = { status: 'progress', message: percentDone };
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
                _this.modalService.dismissAll();
                _this.fileUpload = { status: 'progress', message: 0 };
            }
        });
    };
    FileUploadComponent.prototype.ngOnInit = function () {
        this.fileUpload = { status: 'progress', message: 0 };
    };
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/file-upload/file-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_6__["CatagoryService"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/header.service.ts":
/*!***********************************!*\
  !*** ./src/app/header.service.ts ***!
  \***********************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('Title');
    }
    HeaderService.prototype.setTitle = function (title) {
        this.title.next(title);
    };
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main_head\">\r\n  <div class=\"maininnerleft\">\r\n    <figure>\r\n      <a [routerLink]=\"['/']\">\r\n        <img src=\"assets/images/logo.png\" alt=\"logo\">\r\n      </a>\r\n    </figure>\r\n  </div>\r\n\r\n\r\n  <div class=\"maininnerright\">\r\n    <div class=\"innerrighticon\">\r\n      <span>\r\n        <a [routerLink]=\"['/fave']\">FAVOURITE\r\n          <i class=\"fas fa-heart\" style=\"color:red;\"></i>\r\n        </a>\r\n      </span>\r\n      <span>\r\n        <a [routerLink]=\"['/cart']\">CART\r\n          <i class=\"fas fa-shopping-cart\"></i>\r\n        </a>\r\n      </span>\r\n      <span class=\"dropdown-profile\">\r\n        <a [routerLink]=\"['/userProfile']\" id=\"user-profile\">\r\n          <i class=\"fas fa-user-circle\"></i>\r\n        </a>\r\n        <div class=\"dropdown-content-user\">\r\n          <a [routerLink]=\"['/order']\" *ngIf=\"loginuser\">My Order</a>\r\n          <a [routerLink]=\"['/fave']\" *ngIf=\"loginuser\">My Favourite List</a>\r\n          <a [routerLink]=\"['/profile']\" *ngIf=\"loginuser\">My Profile</a>\r\n          <a [routerLink]=\"['/userProfile']\" *ngIf=\"!loginuser\"> Create User Profile</a>\r\n          <a [routerLink]=\"['/login']\" *ngIf=\"!loginuser\">Login</a>\r\n          <a [routerLink]=\"['/logout']\" *ngIf=\"loginuser\">Log Out</a>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"nav\">\r\n  <!-- <span class=\"arrow\">\r\n    <a *ngIf=\"router.url!='/'\" class=\"fingerPoint\" (click)=\"backClicked()\">\r\n      <i class=\"fas fa-arrow-left\"></i>\r\n    </a>\r\n  </span> -->\r\n  <span class=\"home-icon\">\r\n    <a href=\"/\">\r\n      <i class=\"fas fa-home\"></i>HOME</a>\r\n  </span>\r\n  <span  style=\"margin-left: 3%\" class=\"category-icon\">\r\n    <a *ngFor=\"let catbrud of catagoryService.topcat;  last as isLast\" (click)=\"(!isLast)?selectBreadCrum(catbrud):''\">{{catbrud.name?(!isLast)?catbrud.name+\" /\":catbrud.name:''}} </a>\r\n  </span>\r\n</div>\r\n<div class=\"main-box\">\r\n  <div class=\"left-data\">\r\n    <div class=\"category-left-side-title\">CATEGORY</div>\r\n    <div class=\"list\">\r\n      <ul>\r\n        <li *ngFor=\"let category of categories;\" (click)=\"openSubCat($event, category)\" class=\"fingerPoint\">\r\n          <a>\r\n            <img src=\"../../assets/images/folder.png\" alt=\"folder\">{{category.name}}</a>\r\n        </li>\r\n        <li *ngIf=\"!categories;\" class=\"fingerPoint\">\r\n          <a>Loding..</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"form-box\">\r\n      <div class=\"search-head\">SEARCH BY</div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">CATEGORY</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedCategory\" class=\"select-form\" (change)=\"loadSubCategory()\">\r\n            <option [ngValue]=\"null\" disabled>Select  Category</option>\r\n            <option *ngFor=\"let cat of categories\" [ngValue]=\"cat\">{{cat.name | uppercase}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">SUB CATEGORY</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedSubCategory\" class=\"select-form\" (change)=\"loadSegment()\">\r\n            <option value=\"\" disabled selected>Select Sub Category</option>\r\n            <option *ngFor=\"let subcat of subCategories\" [ngValue]=\"subcat.subcategory\">{{subcat && subcat.subcategory.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">SEGMENT</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedSegment\" class=\"select-form\" (change)=\"loadSubSegment()\">\r\n            <option value=\"\" disabled selected>Select Segment</option>\r\n            <option *ngFor=\"let segment of segments\" [ngValue]=\"segment.segment\">{{segment.segment.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">SUB SEGMENT</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedSubSegment\" class=\"select-form\" (change)=\"loadLeafType()\">\r\n            <option value=\"\" disabled selected>Select Sub Segment</option>\r\n            <option *ngFor=\"let item of subSegments\" [ngValue]=\"item.subsegment\">{{item && item.subsegment.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">LEAFTYPE</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedLeafType\" class=\"select-form\" (change)=\"loadVechicle()\">\r\n            <option value=\"\" disabled selected>Select Leaf Type</option>\r\n            <option *ngFor=\"let item of leafType\" [ngValue]=\"item && item.leaftype\">{{item && item.leaftype &&  item.leaftype.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">VECHICLE</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedVechicle\" class=\"select-form\" (change)=\"loadLeafPosition()\">\r\n            <option value=\"\" disabled selected>Select Vechicle</option>\r\n            <option *ngFor=\"let item of vechicles\" [ngValue]=\"item.vechicle\">{{item && item.vechicle.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">LEAF POSITION</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedLeafPosition\" class=\"select-form\" (change)=\"loadVechicleModel()\">\r\n            <option value=\"\" disabled selected>Select Leaf Position</option>\r\n            <option *ngFor=\"let item of leafPosition\" [ngValue]=\"item.leafposition\">{{ item && item.leafposition.name | uppercase}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">VECHICLE MODEL</div>\r\n        <div class=\"category-box\">\r\n          <select [(ngModel)]=\"selectedVechiclemodel\" class=\"select-form\" (change)=\"loadProduct()\">\r\n            <option value=\"\" disabled selected>select a Brand</option>\r\n            <option *ngFor=\"let item of vechicleModel\" [ngValue]=\"item.vechiclemodel\">{{item && item.vechiclemodel.name | uppercase }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <p style=\"text-align: center; color: red; font-size: 1.5rem; font-weight: bold\">OR</p>\r\n      <div class=\"category\">\r\n        <div class=\"category-name\">PRODUCT CODE </div>\r\n        <div class=\"category-box\">\r\n          <input [(ngModel)]=\"itemCode\" name=\"part-desc\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <div class=\"category btn-box\">\r\n        <input type=\"button\" id=\" \" value=\"SEARCH\" (click)=\"filterCategory({code:itemCode},'item_code')\" class=\"search btn-primary\">\r\n        <input type=\"button\" id=\" \" value=\"RESET\" class=\"search btn-primary\" (click)=\"resetSearch()\" style=\"background: #424143;\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(catagoryService, route, router, _location) {
        this.catagoryService = catagoryService;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.loginuser = false;
        this.slist = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.loginuser = (window.localStorage.getItem('token')) ? true : false;
        this.loadCategory();
        this.catagoryService.topcat = this.breadcrum = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
    };
    HeaderComponent.prototype.loadCategory = function () {
        var _this = this;
        this.catagoryService.getRootTopCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    HeaderComponent.prototype.loadSubCategory = function () {
        var _this = this;
        this.catagoryService.getSubcategory(this.selectedCategory.code).subscribe(function (data) {
            _this.subCategories = data;
            _this.router.navigate(['home'], { queryParams: { category: _this.selectedCategory.code } });
        });
    };
    HeaderComponent.prototype.loadSegment = function () {
        var _this = this;
        this.catagoryService.getSegment(this.selectedSubCategory.code).subscribe(function (data) {
            _this.segments = data;
            _this.filterCategory(_this.selectedSubCategory, 'subcategory');
        });
    };
    HeaderComponent.prototype.loadSubSegment = function () {
        var _this = this;
        this.catagoryService.getSubSegment(this.selectedSegment.code).subscribe(function (data) {
            _this.subSegments = data;
            _this.filterCategory(_this.selectedSegment, 'segment');
        });
    };
    HeaderComponent.prototype.loadLeafType = function () {
        var _this = this;
        this.catagoryService.getLeaftype(this.selectedSubSegment.code).subscribe(function (data) {
            _this.leafType = data;
            _this.filterCategory(_this.selectedSubSegment, 'subsegment');
        });
    };
    HeaderComponent.prototype.loadVechicle = function () {
        var _this = this;
        this.catagoryService.getVechicle(this.selectedLeafType.code).subscribe(function (data) {
            _this.vechicles = data;
            _this.filterCategory(_this.selectedLeafType, 'leaftype');
        });
    };
    HeaderComponent.prototype.loadLeafPosition = function () {
        var _this = this;
        this.catagoryService.getLeafposition(this.selectedVechicle.code).subscribe(function (data) {
            _this.leafPosition = data;
            _this.filterCategory(_this.selectedVechicle, 'vechicle');
        });
    };
    HeaderComponent.prototype.loadVechicleModel = function () {
        var _this = this;
        this.catagoryService.getVechiclemodel(this.selectedLeafPosition.code).subscribe(function (data) {
            _this.vechicleModel = data;
            _this.filterCategory(_this.selectedLeafPosition, 'leafposition');
        });
    };
    HeaderComponent.prototype.loadProduct = function () {
        console.log(this.selectedVechiclemodel);
        this.filterCategory(this.selectedVechiclemodel, 'vechiclemodel');
    };
    HeaderComponent.prototype.openSubCat = function (event, cat, type) {
        var breadcrum = [];
        breadcrum.push(cat);
        window.localStorage.setItem('breadcrum', JSON.stringify(breadcrum));
        window.location.href = '/home?category=' + cat.code;
    };
    HeaderComponent.prototype.filterCategory = function (cat, catType) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var paramsList = {};
            if (params['category']) {
                paramsList['category'] = params['category'];
            }
            if (catType == "subcategory" || params['subcategory']) {
                paramsList['subcategory'] = params['subcategory'] ? params['subcategory'] : cat['code'];
            }
            if (catType == "segment" || params['segment']) {
                paramsList['segment'] = params['segment'] ? params['segment'] : cat['code'];
            }
            if (catType == "subsegment" || params['subsegment']) {
                paramsList['subsegment'] = params['subsegment'] ? params['subsegment'] : cat['code'];
            }
            if (catType == "leaftype" || params['leaftype']) {
                paramsList['leaftype'] = params['leaftype'] ? params['leaftype'] : cat['code'];
            }
            if (catType == "vechicle" || params['vechicle']) {
                paramsList['vechicle'] = params['vechicle'] ? params['vechicle'] : cat['code'];
            }
            if (catType == "leafposition" || params['leafposition']) {
                paramsList['leafposition'] = params['leafposition'] ? params['leafposition'] : cat['code'];
            }
            if (catType == "vechiclemodel" || params['vechiclemodel']) {
                paramsList['vechiclemodel'] = params['vechiclemodel'] ? params['vechiclemodel'] : cat['code'];
            }
            if (catType == "vechiclemodel") {
                _this.router.navigate(['products'], { queryParams: paramsList });
            }
            if (catType == "item_code") {
                paramsList['item_code'] = cat['code'];
                _this.router.navigate(['products'], { queryParams: paramsList });
            }
            else {
                _this.router.navigate(['home'], { queryParams: paramsList });
            }
        });
    };
    HeaderComponent.prototype.selectBreadCrum = function (cat) {
        var newBreadCrum = [];
        if (cat) {
            var result = this.catagoryService.topcat ? this.catagoryService.topcat : [];
            var index = result.indexOf(cat);
            if (index > -1) {
                var url = window.location.href;
                for (var i = 0; i <= index; i++) {
                    var breadC = this.catagoryService.topcat[i];
                    newBreadCrum.push(breadC);
                }
                window.localStorage.setItem('breadcrum', JSON.stringify(newBreadCrum));
                var replaceName = cat.type + "=" + cat.code;
                url = url.replace(replaceName, '__REPLACEME__').split("__REPLACEME__")[0] + replaceName;
                window.location.href = url.replace('products', 'home');
            }
        }
    };
    HeaderComponent.prototype.resetSearch = function () {
        this.selectedCategory = null;
        this.selectedSegment = null;
        this.selectedBrand = null;
        this.selectedModel = null;
        this.router.navigate(['']);
        this.catagoryService.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
    };
    HeaderComponent.prototype.backClicked = function () {
        window.history.go(-1);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n  <div class=\"slider\">\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n      <!-- Indicators -->\r\n      <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      </ol>\r\n      <!-- Wrapper for slides -->\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"item active\">\r\n          <img src=\"../../assets/images/slider-1.jpg\" style=\"width:100%; height:325px;\">\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"../../assets/images/slider-2.jpg\" style=\"width:100%; height:325px;\">\r\n        </div>\r\n        <div class=\"item\">\r\n          <img src=\"../../assets/images/slider-3.jpg\" style=\"width:100%; height:325px;\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!segments\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n        <img src=\"assets/images/dribbble.gif\" style=\"text-align:center;width:50%;\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"product-segment\">\r\n    <a href=\"#\">PRODUCT CATEGORIES</a>\r\n    <div class=\"circle-product-segment\"></div>\r\n    <div class=\"line product-segment-line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"product-segment-slider\">\r\n    <div class=\"container\">\r\n      <div class=\"product-segment-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 hover\" *ngFor=\"let cat of categories\">\r\n            <div *ngIf=\"cat.code!=null\" class=\"car-model-box\" (click)=\"openSubCat($event,cat)\">\r\n              <a>\r\n                <figure>\r\n                  <img src=\"assets/images/ecat/category/{{cat.code}}.png\" alt=\"\">\r\n                </figure>\r\n                <h5>{{cat.name | uppercase}}</h5>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"product-segment\">\r\n    <a href=\"#\">PRODUCT BRAND</a>\r\n    <div class=\"circle\"></div>\r\n    <div class=\"line product-brand-line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"product-segment-slider\">\r\n    <div class=\"container\">\r\n      <div class=\"product-segment-center\">\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let mod of models;\" class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 hover\">\r\n            <div class=\"car-model-1\" (click)=\"openSubCat($event, mod,'pro')\">\r\n              <a>\r\n                <figure style=\"padding:10px\">\r\n                  <img src=\"assets/images/ecat/vechicle/{{mod.vechicle.code}}.png\" alt=\"\">\r\n                </figure>\r\n                <h5>{{mod && mod.vechicle && mod.vechicle.name | uppercase }}</h5>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(catagoryService, router, config, modalService, service) {
        this.catagoryService = catagoryService;
        this.router = router;
        this.modalService = modalService;
        this.service = service;
        this.images = ['../../assets/images/slider-1.jpg', '../../assets/images/slider-2.jpg', '../../assets/images/slider-3.jpg'];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.configSwipe = {
            autoplay: 3000,
            initialSlide: 3,
            slidesPerView: 3,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30 // Space between each Item
        };
        config.interval = 1000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var token = window.localStorage.getItem('token');
        window.localStorage.setItem('breadcrum', '');
        this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
        this.loadCategory();
        if (token) {
            this.service.getUserDetail().subscribe(function (data) {
                window.localStorage.setItem('stateDetail', JSON.stringify(data.profile));
            });
        }
    };
    HomeComponent.prototype.loadCategory = function () {
        var _this = this;
        this.catagoryService.getRootTopCategories().subscribe(function (data) {
            _this.categories = data;
            _this.segments = data;
        });
        this.catagoryService.brandsVihcleCategories().subscribe(function (data) {
            _this.models = data;
        });
    };
    HomeComponent.prototype.openSubCat = function (event, cat, type) {
        var breadcrum = [];
        var newBreadCrum = cat;
        newBreadCrum['type'] = 'category';
        breadcrum.push(newBreadCrum);
        window.localStorage.setItem('breadcrum', JSON.stringify(breadcrum));
        this.router.navigate(['home'], { queryParams: { category: cat.code } });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"right-data\">\r\n<div class=\"login-main\">\r\n\r\n    <!--login-page e-catelog div-->\r\n    <div class=\"e-catelog\">\r\n        <figure>\r\n            <img src=\"./assets/images/logo.png\" alt=\"e-catelog\">\r\n        </figure>\r\n        <div class=\"line-center line-center-main\"></div>\r\n        <div class=\"line-center\"></div>\r\n        <div class=\"line-center\"></div>\r\n    </div>\r\n    <!--login-page login-form div-->\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"login-form\">\r\n        <div class=\"login-form-field\">\r\n            <figure>\r\n                <img src=\"./assets/images/logo.png\" alt=\"logo\">\r\n            </figure>\r\n            <div class=\"form-username\">\r\n                <label for=\"username\" class=\"label-style\">Username</label><br>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\" placeholder=\"Your Email *\">\r\n                                  <div class=\"error\" *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\">Username is required</div> \r\n            </div>\r\n            <div class=\"form-password\">\r\n                <label for=\"pass-word\" class=\"label-style\">Password</label><br> \r\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\" placeholder=\"Your Password *\">\r\n                <div class=\"error\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">Password is required</div>\r\n            </div>\r\n            <div class=\"keep-log\">\r\n                <span class=\"check-box\"><input type=\"checkbox\"><p> Keep me Sign in </p></span>\r\n            </div>\r\n            <div >\r\n                <button class=\"btnSubmit\" [disabled]=\"loginForm.invalid\">Login</button>\r\n                <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                    <div>Invalid credentials.</div>\r\n                </div>\r\n                \r\n            </div>\r\n            <div class=\"line-form\"></div>\r\n            <div class=\"forgot-password\">\r\n                <a href=\"#\">Forgot Password?</a>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n  </form>\r\n  \r\n  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.invalidLogin = false;
        this.loginuser = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.localStorage.removeItem('token');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.controls.username.value && this.loginForm.controls.password.value) {
            var loginPayload = {
                email: this.loginForm.controls.username.value,
                password: this.loginForm.controls.password.value
            };
            this.service.login(loginPayload).subscribe(function (data) {
                if (data.key) {
                    _this.loginuser = true;
                    window.localStorage.setItem('token', data.key);
                    window.location.href = '/';
                }
                else {
                    _this.invalidLogin = true;
                    alert(data.message);
                }
            });
        }
        else {
            alert("Please enter valid username and password!");
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
        this.loginuser = false;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.loginuser = false;
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('stateDetail');
        window.localStorage.removeItem('breadcrum');
        window.location.href = '';
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/modal/homepage-modal/homepage-modal.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modal/homepage-modal/homepage-modal.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL2hvbWVwYWdlLW1vZGFsL2hvbWVwYWdlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/homepage-modal/homepage-modal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modal/homepage-modal/homepage-modal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-sandbox\"></div>\r\n    <div class=\"modal-box\">\r\n\t\t\t\t\t       \r\n\t\t\t\t<div class=\"modal-body\" >\r\n\r\n                            <div class=\"col-xs-12\">\t\t\t\t\t\r\n\r\n<header>\r\n       <div class=\"container-fluid\">\r\n          <div class=\"img_logo\">\r\n               <figure>\r\n               <img src=\"assets/images/logo.png\" alt=\"logo\">\r\n           </figure>\r\n          </div>\r\n       </div>\r\n  \r\n</header>\r\n<section>\r\n    <div class=\"space\">\r\n        <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 col-sm-12 col-lg-3 mt-5 main-inner\">\r\n              <a   [routerLink]=\"['/login']\" *ngIf=\"!loginuser\" (click)=\"activeModal.dismiss('Cross click')\">\r\n               <div class=\"main\">\r\n                   <div class=\"flip\">\r\n                       \r\n                    <div class=\"text-center\">\r\n                    <figure>\r\n                    <img src=\"assets/images/retailer.png\" alt=\"retailer\">\r\n                </figure>\r\n                </div>\r\n                <div class=\"text-cente main-text\">\r\n                    <h2>Retailer</h2>\r\n                </div>\r\n                <div class=\"text-center flip-back\">\r\n                      <h2>I am a Retailer</h2>\r\n                  </div>\r\n              \r\n                  \r\n                   </div>\r\n               </div>\r\n                </a>\r\n            </div>\r\n           \r\n             <div class=\"col-md-3 col-sm-12 col-lg-3 mt-5 main-inner\">\r\n             <a   [routerLink]=\"['/login']\" *ngIf=\"!loginuser\" (click)=\"activeModal.dismiss('Cross click')\">\r\n              <div class=\"main\">\r\n                   <div class=\"flip\">\r\n                       \r\n                    <div class=\"text-center\">\r\n                    <figure>\r\n                    <img src=\"assets/images/distributor.png\" alt=\"distributor\">\r\n                </figure>\r\n                </div>\r\n                <div class=\"text-center main-text\">\r\n                    <h2>Distributor</h2>\r\n                </div>\r\n                                  <div class=\"text-center flip-back\">\r\n                      <h2>I am a Distributor</h2>\r\n                  </div>\r\n               \r\n                   </div>\r\n              </div>\r\n              </a>\r\n            </div>\r\n           <!--  <div class=\"col-md-4 col-sm-12 col-lg-4 mt-5 main-inner\" (click)=\"activeModal.dismiss('Cross click')\">\r\n                <a  >\r\n                <div class=\"main\">\r\n                    <div class=\"flip\">\r\n                       \r\n                    <div class=\"text-center\">\r\n                    <figure>\r\n                    <img src=\"assets/images/visitor.png\" alt=\"visitor\">\r\n                </figure>\r\n                </div>\r\n                <div class=\"text-center main-text\">\r\n                    <h2>Visitor</h2>\r\n                </div>\r\n                    <div class=\"text-center flip-back\">\r\n                      <h2>I am a Visitor</h2>\r\n                  </div>\r\n             \r\n                    </div>\r\n                </div>\r\n                   </a>\r\n            </div>\r\n\t\t\t-->\r\n\t\t\t<div class=\"col-md-3 col-sm-12 col-lg-3 mt-5 main-inner\" (click)=\"activeModal.dismiss('Cross click')\">\r\n                <a  >\r\n                <div class=\"main\">\r\n                    <div class=\"flip\">\r\n                       \r\n                    <div class=\"text-center\">\r\n                    <figure>\r\n                    <img src=\"assets/images/suspension_client.png\" alt=\"Suspension\">\r\n                </figure>\r\n                </div>\r\n                <div class=\"text-center main-text\">\r\n                    <h2>Suspension User</h2>\r\n                </div>\r\n                    <div class=\"text-center flip-back\">\r\n                      <h2>I am a Suspension User</h2>\r\n                  </div>\r\n             \r\n                    </div>\r\n                </div>\r\n                   </a>\r\n            </div>\r\n\t\t\t<div class=\"col-md-3 col-sm-12 col-lg-3 mt-5 main-inner\" (click)=\"activeModal.dismiss('Cross click')\">\r\n                <a  >\r\n                <div class=\"main\">\r\n                    <div class=\"flip\">\r\n                       \r\n                    <div class=\"text-center\">\r\n                    <figure>\r\n                    <img src=\"assets/images/exportor_user.png\" alt=\"Exporter\">\r\n                </figure>\r\n                </div>\r\n                <div class=\"text-center main-text\">\r\n                    <h2>Exporter</h2>\r\n                </div>\r\n                    <div class=\"text-center flip-back\">\r\n                      <h2>I am a Exporter</h2>\r\n                  </div>\r\n             \r\n                    </div>\r\n                </div>\r\n                   </a>\r\n            </div>\r\n\t\t\t\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>\r\n<div class=\"container-fluid\">\r\n          <div class=\"img_line\">\r\n               <div class=\"line\">\r\n                   \r\n               </div>\r\n      \r\n          </div>\r\n       </div>\r\n\t\r\n\t\r\n\t</div>\r\n</div>\r\n</div>\r\n<style>\r\nhtml,\r\nbody\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #424143;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nheader figure img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.main {\r\n/*    background: #ed3439;*/\r\n    padding: 5px;\r\n    width: 100%;\r\n    height: auto;\r\n  cursor: pointer;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    text-decoration: none;\r\n     text-decoration-style: none;\r\n}\r\n.main h2 {\r\n    font-size: 15px;\r\n    color: #424143;\r\n  text-transform: uppercase;\r\n}\r\n.flip {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.6s;\r\n  transform-style: preserve-3d;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  padding: 25px;\r\n}\r\n.main:hover .main-text h2{\r\n  color: transparent;\r\n}\r\n.main:hover .flip {\r\n  transform: rotateY(180deg);\r\n  \r\n}\r\n.flip-front,\r\n.flip-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backface-visibility: hidden;\r\n  padding: 25px;\r\n}\r\n\r\n.flip-back {\r\n  background-color: transparent;\r\n    color: #424143;\r\n    transform: rotateY(180deg);\r\n    /* overflow: hidden; */\r\n    width: 100%;\r\n    height: 50px;\r\n}\r\n.flip-back h2 {\r\n    color: #424143;\r\n  width: 100%;\r\n    text-align: center;\r\n    margin: 1rem 2rem;\r\n  font-size: 15px;\r\n}\r\n.flip figure img {\r\n  margin-top: 5px; \r\n}\r\n.img_logo {\r\n  margin-bottom: 5%;\r\n}\r\n.img_logo,\r\n.img_line\r\n{\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n.img_logo figure {\r\n    width: 200px;\r\n    height: 94px;\r\n}\r\n.img_logo figure img {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    top: 1rem;\r\n}\r\n\r\n.line {\r\n    border-bottom: 2px solid red;\r\n    height: 5px;\r\n    width: 32%;\r\n    margin-top: 5rem;\r\n    border-radius: 0 0 0px 0px;\r\n}\r\n\r\n.space {\r\n\tmargin-top: 3%;\r\n}\r\n.container {\r\n\r\n    width: 812px;\r\n\r\n}\r\n\r\n.modal-body\r\n{\r\nheight: 500px !important;\r\n}\r\n</style>\r\n"

/***/ }),

/***/ "./src/app/modal/homepage-modal/homepage-modal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modal/homepage-modal/homepage-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: HomepageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModalComponent", function() { return HomepageModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_model_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/catagory.service */ "./src/app/service/catagory.service.ts");





var HomepageModalComponent = /** @class */ (function () {
    function HomepageModalComponent(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
        this.loginuser = window.localStorage.getItem('userName');
    }
    HomepageModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_order_model__WEBPACK_IMPORTED_MODULE_3__["Order"])
    ], HomepageModalComponent.prototype, "order", void 0);
    HomepageModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage-modal',
            template: __webpack_require__(/*! ./homepage-modal.component.html */ "./src/app/modal/homepage-modal/homepage-modal.component.html"),
            styles: [__webpack_require__(/*! ./homepage-modal.component.css */ "./src/app/modal/homepage-modal/homepage-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"]])
    ], HomepageModalComponent);
    return HomepageModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/item-modal/item-modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modal/item-modal/item-modal.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL2l0ZW0tbW9kYWwvaXRlbS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/item-modal/item-modal.component.html":
/*!************************************************************!*\
  !*** ./src/app/modal/item-modal/item-modal.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-sandbox\"></div>\r\n<div class=\"modal-box\">\r\n    <div class=\"modal-header\" *ngIf=\"item.item_code\">\r\n        <div class=\"close-modal\">\r\n            <span CLASS=\"model-head-detail\">DETAILS OF PRODUCT CODE : {{item.item_code}}</span>\r\n            <span style=\"color:red; font-size:1.4rem;\" (click)=\"activeModal.dismiss('Cross click')\">&#10006;</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"min-height: 650px !important;max-height: 950px !important;\" *ngIf=\"item\">\r\n        <div class=\"{{(item.image)?'col-xs-6':'col-xs-12'}} \">\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                    CATEGORY\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                   {{item.category.name}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                    SUB CATEGORY\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                   {{item.subcategory.name}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                   SEGMENT\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                   {{item.segment.name}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                   SUB SEGMENT\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                   {{item.subsegment.name}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                    ITEM CODE\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                     {{item.item_code}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                    ITEM NAME\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.name}} \r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.particuler\">\r\n                <div class=\"part-model-left\">\r\n                    PARTICULAR\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.particuler}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.length\">\r\n                <div class=\"part-model-left\">\r\n                    LENGTH(INCH)\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.length}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.variant\">\r\n                <div class=\"part-model-left\">\r\n                    VARIENT\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.variant}}\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"part-name-modal\" *ngIf=\"item.leaf_desc\">\r\n                <div class=\"part-model-left\">\r\n                    TYPE\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.leaf_desc}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.drawing_refno\">\r\n                <div class=\"part-model-left\">\r\n                    DRAWING REF. NO\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.drawing_refno}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.ch_detail\">\r\n                <div class=\"part-model-left\">\r\n                    C.H.&#8709;[mm] & POSITION\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.ch_detail}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.sh_detail\">\r\n                <div class=\"part-model-left\">\r\n                    S.H.DETAIL[mm]\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.sh_detail}}\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.varientcode\">\r\n                <div class=\"part-model-left\">\r\n                    Varient Code\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.varientcode}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.suitableFor\">\r\n                <div class=\"part-model-left\">\r\n                    SUITABLE FOR\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.suitableFor}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\" *ngIf=\"item.weight\">\r\n                <div class=\"part-model-left\">\r\n                    WEIGHT(KG)\r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                    {{item.weight}}\r\n                </div>\r\n            </div>\r\n            <div class=\"part-name-modal\">\r\n                <div class=\"part-model-left\">\r\n                    MRP(Rs)\r\n                \r\n                </div>\r\n                <span class=\"colon-modal\">:</span>\r\n                <div class=\"part-model-right\">\r\n                {{ (!userName)?item.mrp1:item.mrp1 }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"part-name-modal\">\r\n            <div class=\"part-model-left\">\r\n                IMAGE\r\n                \r\n            </div>\r\n            <span class=\"colon-modal\">:</span>\r\n            <div  *ngIf=\"item.category\" class=\"part-model-right\">\r\n                <img id=\"myImgN\" style=\"height: 100px\" src=\"/assets/images/ecat/category/{{item.category.code}}.png\" class=\"open-img\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/item-modal/item-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modal/item-modal/item-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModalComponent", function() { return ItemModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_model_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/item.model */ "./src/app/model/item.model.ts");
/* harmony import */ var src_app_model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/add-cart-item-request.model */ "./src/app/model/add-cart-item-request.model.ts");
/* harmony import */ var src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/catagory.service */ "./src/app/service/catagory.service.ts");






var ItemModalComponent = /** @class */ (function () {
    function ItemModalComponent(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
        this.userName = window.localStorage.getItem('userName');
    }
    ItemModalComponent.prototype.ngOnInit = function () {
    };
    ItemModalComponent.prototype.transform = function (value) {
        var p = value.split('_');
        return p[1] ? p[1] : p[0];
    };
    ItemModalComponent.prototype.addToCart = function (item, qty, pro) {
        var _this = this;
        var cartReq = new src_app_model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_4__["AddCartItemRequest"]();
        var userName = window.localStorage.getItem('userName');
        cartReq.product_id = item.id;
        cartReq.quantity = qty;
        cartReq.pro = pro;
        var quntityp = (qty);
        if (quntityp > 0) {
            if (userName != null && userName != undefined) {
                this.service.getUserByUserName(userName).subscribe(function (data) {
                    cartReq.userId = data.result.id;
                    cartReq.page_type = 'cart';
                    _this.service.addToCart(cartReq).subscribe(function (data) {
                        _this.alertClass = "success";
                        _this.successmsg = "Added to cart";
                        setTimeout(function () { _this.successmsg = ''; }, 6000);
                        _this.activeModal.dismiss();
                    });
                });
            }
            else {
                /*
              this.ngFlashMessageService.showFlashMessage({
                      // Array of messages each will be displayed in new line
                      messages: ["User not logged in. Please login to continue."],
                      // Whether the flash can be dismissed by the user defaults to false
                      dismissible: true,
                      // Time after which the flash disappears defaults to 2000ms
                      timeout: false,
                      // Type of flash message, it defaults to info and success, warning, danger types can also be used
                      type: 'warning'
                    });
                    */
                this.alertClass = "info";
                this.successmsg = "User not logged in. Please login to continue.";
                setTimeout(function () { _this.successmsg = ''; }, 6000);
            }
        }
        else {
            this.alertClass = "danger";
            this.successmsg = "Please enter quantity .";
            setTimeout(function () { _this.successmsg = ''; }, 6000);
            /*
            this.ngFlashMessageService.showFlashMessage({
                      // Array of messages each will be displayed in new line
                      messages: ["Please enter quantity ."],
                      // Whether the flash can be dismissed by the user defaults to false
                      dismissible: true,
                      // Time after which the flash disappears defaults to 2000ms
                      timeout: false,
                      // Type of flash message, it defaults to info and success, warning, danger types can also be used
                      type: 'danger'
                    });
                    */
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_item_model__WEBPACK_IMPORTED_MODULE_3__["Item"])
    ], ItemModalComponent.prototype, "item", void 0);
    ItemModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./item-modal.component.html */ "./src/app/modal/item-modal/item-modal.component.html"),
            styles: [__webpack_require__(/*! ./item-modal.component.css */ "./src/app/modal/item-modal/item-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_5__["CatagoryService"]])
    ], ItemModalComponent);
    return ItemModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/order-modal/order-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modal/order-modal/order-modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL29yZGVyLW1vZGFsL29yZGVyLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/order-modal/order-modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modal/order-modal/order-modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-sandbox\"></div>\r\n<div class=\"modal-box\">\r\n\t<div class=\"modal-header\">\r\n\t\t<div class=\"close-modal\">\r\n\t\t\t<span CLASS=\"model-head-detail\">ORDER DETAIL </span>\r\n\t\t\t<span style=\"color:red; font-size:1.4rem;\" (click)=\"activeModal.dismiss('Cross click')\">&#10006;</span>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\t<div class=\"modal-body-order\">\r\n\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t\t<div class=\"part-name-modal\">\r\n\t\t\t\t\t<div style=\"width: 40%\" class=\"part-model-left\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>Order Id</strong>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"colon-modal\">:</span>\r\n\t\t\t\t\t<div style=\"width: 60%\" class=\"part-model-right\">\r\n\t\t\t\t\t\t<p> {{ Order.orderId }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<div class=\"part-name-modal\">\r\n\t\t\t\t\t<div style=\"width: 40%\" class=\"part-model-left\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>Date</strong>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<span class=\"colon-modal\">:</span>\r\n\t\t\t\t\t<div style=\"width: 60%\" class=\"part-model-right\">\r\n\t\t\t\t\t\t<p> {{ Order.addedon }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<strong>CATEGORY</strong>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<strong>NAME</strong>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<strong>CODE</strong>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<strong>MRP</strong>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<strong>QUANTITY</strong>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-xs-12\" *ngFor=\"let  orderOne of Order.order_details\" style=\"border-top: .1px solid grey;padding-top: 10px\">\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p> {{ orderOne.product.category.name }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p> {{ orderOne.product.name }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p> {{ orderOne.product.item_code }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p> {{ orderOne.product[userMrp]}} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-2\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p> {{ orderOne.quantity }} </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"col-xs-8\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>TOTAL</strong>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"part-model-left\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong> {{ Order.total }}</strong>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/order-modal/order-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modal/order-modal/order-modal.component.ts ***!
  \************************************************************/
/*! exports provided: OrderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModalComponent", function() { return OrderModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/catagory.service */ "./src/app/service/catagory.service.ts");




var OrderModalComponent = /** @class */ (function () {
    function OrderModalComponent(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
        this.userName = window.localStorage.getItem('userName');
        this.userMrp = {};
    }
    OrderModalComponent.prototype.ngOnInit = function () {
        var stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
        this.userMrp = 'mrp1';
        if ((stateDetail.role == 1 || stateDetail.role == 2) && stateDetail.state.dbp) {
            this.userMrp = stateDetail.state.dbp;
        }
    };
    OrderModalComponent.prototype.transform = function (value) {
        var p = value.split('_');
        return p[1] ? p[1] : p[0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderModalComponent.prototype, "Order", void 0);
    OrderModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-modal',
            template: __webpack_require__(/*! ./order-modal.component.html */ "./src/app/modal/order-modal/order-modal.component.html"),
            styles: [__webpack_require__(/*! ./order-modal.component.css */ "./src/app/modal/order-modal/order-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], src_app_service_catagory_service__WEBPACK_IMPORTED_MODULE_3__["CatagoryService"]])
    ], OrderModalComponent);
    return OrderModalComponent;
}());



/***/ }),

/***/ "./src/app/model/add-cart-item-request.model.ts":
/*!******************************************************!*\
  !*** ./src/app/model/add-cart-item-request.model.ts ***!
  \******************************************************/
/*! exports provided: AddCartItemRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartItemRequest", function() { return AddCartItemRequest; });
var AddCartItemRequest = /** @class */ (function () {
    function AddCartItemRequest() {
    }
    return AddCartItemRequest;
}());



/***/ }),

/***/ "./src/app/model/item.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/item.model.ts ***!
  \*************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.roles = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n  <div class=\"table-responsive\">\r\n    <div class=\"row\" *ngIf=\"productsloading\">\r\n      <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-3 hover\">\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 \">\r\n        </div>\r\n        <img src=\"assets/images/dribbble.gif\" style=\"text-align:center;width:50%;\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" [ngClass]=\"loaded?'show':'hide'\">\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ORDER NO</th>\r\n            <th>DATE</th>\r\n            <th>AMOUNT</th>\r\n            <th>ACTION</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let  orderOne of orderList \">\r\n            <td>{{ orderOne.orderId }}</td>\r\n            <td>{{ orderOne.addedon }}</td>\r\n            <td>{{ orderOne.total }}</td>\r\n            <td>\r\n              <button class=\"modal-trigger view-btn\" (click)=\"openN(content,orderOne)\">VIEW</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/order-modal/order-modal.component */ "./src/app/modal/order-modal/order-modal.component.ts");







var OrderComponent = /** @class */ (function () {
    function OrderComponent(router, route, service, modalService) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this.dtOptions = {};
        this.loaded = false;
        this.productsloading = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
        var stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
        this.userMrp = 'mrp1';
        if ((stateDetail.role == 1 || stateDetail.role == 2) && stateDetail.state.dbp) {
            this.userMrp = stateDetail.state.dbp;
        }
        var userName = (window.localStorage.getItem('token')) ? window.localStorage.getItem('token') : '';
        if (userName) {
            this.loaded = true;
            this.productsloading = true;
            this.service.getOrders().subscribe(function (data) {
                _this.orderList = data.results;
                _this.productsloading = false;
                _this.dtTrigger.next();
            });
        }
    };
    OrderComponent.prototype.openN = function (content, Order) {
        var _this = this;
        this.productsloading = true;
        this.productsloading = false;
        var modal = this.modalService.open(_modal_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_6__["OrderModalComponent"]);
        modal.componentInstance.Order = Order;
        modal.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    OrderComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n\t<div class=\"table-responsive\">\r\n\t\t<div class=\"row\" *ngIf=\"productsloading\">\r\n\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-3 hover\">\r\n\t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6 \">\r\n\t\t\t\t</div>\r\n\t\t\t\t<img src=\"assets/images/dribbble.gif\" style=\"text-align:center;width:50%;\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"closealert\" class=\"alert alert-{{alertClass}} fade in alert-dismissible\" style=\"margin-top:18px;\" [hidden]=\"!successmsg\">\r\n\t\t\t<a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" title=\"close\">×</a>\r\n\t\t\t{{successmsg}}\r\n\t\t</div>\r\n\t\t<div class=\"row\" [ngClass]=\"loaded?'show':'hide'\">\r\n\t\t\t<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>PRODUCT CODE</th>\r\n\t\t\t\t\t\t<th>PRODUCT NAME</th>\r\n\t\t\t\t\t\t<th>TYPE</th>\r\n\t\t\t\t\t\t<th>LENGTH</th>\r\n\t\t\t\t\t\t<th>MRP</th>\r\n\t\t\t\t\t\t<th>DETAILED SPECIFICATIONS</th>\r\n\t\t\t\t\t\t<th>FAVOURITE</th>\r\n\t\t\t\t\t\t<th>QR CODE</th>\r\n\t\t\t\t\t\t<th>ADD TO CART</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let product of products\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span>{{product.item_code}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span>{{product.name}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span>{{product.leaf_desc}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span>{{product.length}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span> {{product[userMrp]}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"modal-trigger view-btn\" (click)=\"openN(content,product)\">VIEW</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span style=\"font-size: 20px !important;\">\r\n\t\t\t\t\t\t\t\t<i class=\"fas fa-heart item-heart item-heart\" style=\"color:red;\" (click)=\"addToFav(product,'product')\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"box\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/qr.png\" class=\"my__img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"my__modal\" class=\"my__modal\">\r\n\t\t\t\t\t\t\t\t<span class=\"close-qr\" id=\"close\">&times;</span>\r\n\t\t\t\t\t\t\t\t<div class=\"modal__block\" id=\"modal__block\">\r\n\t\t\t\t\t\t\t\t\t<img id=\"img01\" class=\"modal__content\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t<div id=\"caption\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<input name=\"Add To Cart\" type=\"button\" value=\"ADD TO CART\" class=\"section-btn\" (click)=\"addToCart(product,'product')\" />\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _modal_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/item-modal/item-modal.component */ "./src/app/modal/item-modal/item-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/add-cart-item-request.model */ "./src/app/model/add-cart-item-request.model.ts");








var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, route, service, modalService) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.modalService = modalService;
        this.dtOptions = {};
        this.loaded = false;
        this.productsloading = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginuser = false;
    }
    //, private ngFlashMessageService: NgFlashMessageService
    ProductComponent.prototype.transform = function (value) {
        var p = value.split('_');
        return p[1] ? p[1] : p[0];
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginuser = (window.localStorage.getItem('userName')) ? true : false;
        var stateDetail = (window.localStorage.getItem('stateDetail')) ? JSON.parse(window.localStorage.getItem('stateDetail')) : [];
        this.userMrp = 'mrp1';
        if ((stateDetail.role == 1 || stateDetail.role == 2) && stateDetail.state.dbp) {
            this.userMrp = stateDetail.state.dbp;
        }
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
        };
        this.route.queryParams.subscribe(function (params) {
            _this.productsloading = true;
            var queryString = Object.keys(params).map(function (key) { return key + '=' + params[key]; }).join('&');
            _this.service.getProudcts(queryString).subscribe(function (data) {
                _this.products = data.results;
                _this.loaded = true;
                _this.dtTrigger.next();
                _this.productsloading = false;
            });
        });
    };
    ProductComponent.prototype.openN = function (content, item) {
        var _this = this;
        var modal = this.modalService.open(_modal_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_5__["ItemModalComponent"]);
        modal.componentInstance.item = item;
        modal.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProductComponent.prototype.addToCart = function (item, type, pro, fvrtid) {
        var _this = this;
        var userName = window.localStorage.getItem('token');
        if (!userName) {
            this.alertClass = "info";
            this.successmsg = "User not logged in. Please login to continue.";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
            return false;
        }
        var quntity = prompt("Please enter quantity :", "1");
        var quntityp = parseInt(quntity);
        if (quntityp > 0) {
            var cartReq = new _model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_7__["AddCartItemRequest"]();
            cartReq.product_id = item.id;
            cartReq.quantity = quntityp;
            if (userName != null && userName != undefined) {
                this.service.postCart(cartReq).subscribe(function (data) {
                    _this.alertClass = "success";
                    _this.successmsg = "Successfully added to your cart list!";
                    setTimeout(function () {
                        _this.successmsg = '';
                    }, 6000);
                });
            }
            else {
                this.alertClass = "info";
                this.successmsg = "User not logged in. Please login to continue.";
                setTimeout(function () {
                    _this.successmsg = '';
                }, 6000);
            }
        }
        else {
            this.alertClass = "danger";
            this.successmsg = "Please enter quantity .";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
        }
    };
    ProductComponent.prototype.addToFav = function (item, type, pro, fvrtid) {
        var _this = this;
        var userName = window.localStorage.getItem('token');
        if (!userName) {
            this.alertClass = "info";
            this.successmsg = "User not logged in. Please login to continue.";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
            return false;
        }
        var cartReq = new _model_add_cart_item_request_model__WEBPACK_IMPORTED_MODULE_7__["AddCartItemRequest"]();
        cartReq.product_id = item.id;
        if (userName != null && userName != undefined) {
            this.service.postFavourite(cartReq).subscribe(function (data) {
                _this.alertClass = "success";
                _this.successmsg = "Successfully added to your favourite list!";
                setTimeout(function () {
                    _this.successmsg = '';
                }, 6000);
            });
        }
        else {
            this.alertClass = "info";
            this.successmsg = "User not logged in. Please login to continue.";
            setTimeout(function () {
                _this.successmsg = '';
            }, 6000);
        }
    };
    ProductComponent.prototype.selectedprolist = function (item) {
        this.selectedproductArray = item;
    };
    ProductComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    ProductComponent.prototype.createbreadcrumpro = function (product) {
        var breadcrum = window.localStorage.getItem('breadcrum');
        var breadcrumN = (breadcrum) ? JSON.parse(breadcrum) : [];
        var Dataext = false;
        breadcrumN.push({ 'id': product.id.toString(), 'name': product.code, 'typeP': 'pro', 'savesecondlevel': product.savesecondlevel });
        breadcrum = JSON.stringify(breadcrumN);
        window.localStorage.setItem('breadcrum', breadcrum);
        this.service.topcat = (window.localStorage.getItem('breadcrum')) ? JSON.parse(window.localStorage.getItem('breadcrum')) : [];
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_4__["CatagoryService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"detail-user-profile\">\r\n        <div class=\"left-user-data\">\r\n            <div class=\"left-user-img\">\r\n                <figure>\r\n                    <img src=\"assets/images/profile.jpg\" alt=\"\">\r\n                </figure>\r\n            </div>\r\n        </div>\r\n        <div class=\"right-user-data\">\r\n            <h4>PROFILE</h4>\r\n                <div class=\"right-inner-left-data\">\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>First Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"firstName\" [(ngModel)]=\"user.first_name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Last Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"lastName\" [(ngModel)]=\"user.last_name\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>User Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" readonly class=\"mat-input\" id=\"username\" [(ngModel)]=\"user.username\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>ADDRESS1</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"address1\" [(ngModel)]=\"user.profile.address1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>USER TYPE</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <select style=\"width: 100%;height: 25px;border: 1px solid grey; outline: none; font-size: 1rem;border-radius:10px\" class=\"mat-input\"\r\n                                name=slist  [(ngModel)]=\"user.profile.role\">\r\n                                <option *ngFor=\"let type of userType\" value={{type.id}}>\r\n                                    {{type.name}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>ADDRESS2</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"address2\" [(ngModel)]=\"user.profile.address2\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>CITY</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"city\" [(ngModel)]=\"user.profile.city\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>EMAIL</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"email\" readonly class=\"mat-input\" id=\"emailId\" [(ngModel)]=\"user.email\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>STATE</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <select style=\"width: 100%;height: 25px;border: 1px solid grey; outline: none; font-size: 1rem;border-radius:10px\" class=\"mat-input\"\r\n                                name=slist [(ngModel)]=\"user.profile.state\">\r\n                                <option *ngFor=\"let state of stateList\" value={{state.id}}>\r\n                                    {{state.name}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>COUNTRY</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"country\" [(ngModel)]=\"user.profile.country\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>CONTACT NUMBER</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"tel\" class=\"mat-input\" id=\"contactNumber\" [(ngModel)]=\"user.profile.contact_number\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main last-detail\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>PIN CODE</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" class=\"mat-input\" id=\"pincode\" [(ngModel)]=\"user.profile.pincode\">\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n            <button (click)=\"updateProfile()\" type=\"button\"  class=\"editProfileBtn\">Save</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service) {
        this.service = service;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.stateList = [];
        this.userType = [{ id: 1, name: 'Retailer' }, { id: 2, name: 'Distributor' }, { id: 3, name: 'General User' }];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUserDetail().subscribe(function (data) {
            _this.user = data;
        });
        this.service.stateList().subscribe(function (data) {
            _this.stateList = data;
        });
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.service.updateProfile(this.user, this.user.id).subscribe(function (data) {
            console.log(data);
            if (data == "updated") {
                alert("Profile has been updated successfully!");
            }
            else {
                alert("Error!");
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-box\">\r\n    <div class=\"search-head\">SEARCH BY</div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">Category</div>\r\n      <div class=\"category-box\">\r\n        <select name=\"Category\" class=\"select-form\">\r\n          <option value=\"All\" selected=\"\">ALL</option>\r\n          <option value=\"AIR SUSPENSION\">AIR SUSPENSION</option>\r\n          <option value=\"BOGGIE SUSPENSION\">BOGGIE SUSPENSION</option>\r\n          <option value=\"LIFT AXLE\">LIFT AXLE</option>\r\n          <option value=\"MULTI LEAF SPRING\">MULTI LEAF SPRING</option>\r\n          <option value=\"PARABOLIC_SUSPENSION\">PARABOLIC_SUSPENSION</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">SEGMENT</div>\r\n      <div class=\"category-box\">\r\n        <select name=\"Category\" class=\"select-form\">\r\n          <option value=\"All\">ALL</option>\r\n          <option value=\"SEG-1 LIGHT PARABOLIC\">SEG-1 LIGHT PARABOLIC</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">BRAND</div>\r\n      <div class=\"category-box\">\r\n        <select name=\"Category\" class=\"select-form\">\r\n          <option value=\"All\">ALL</option>\r\n          <option value=\"NISSAN ALT\">TATA</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">Model</div>\r\n      <div class=\"category-box\">\r\n        <select name=\"Category\" class=\"select-form\">\r\n          <option value=\"All\">ALL</option>\r\n          <option value=\"DOST\">SUMO</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">PART NO.</div>\r\n      <div class=\"category-box\">\r\n        <input name=\"part-desc\" type=\"text\">\r\n      </div>\r\n    </div>\r\n    <div class=\"category\">\r\n      <div class=\"category-name\">PART DESC</div>\r\n      <div class=\"category-box\">\r\n        <input name=\"part-desc\" type=\"text\">\r\n      </div>\r\n    </div>\r\n    <div class=\"category btn-box\">\r\n        <a href=\"product-brand-model-1.html\"><input type=\"button\" id=\" \" value=\"SEARCH\" class=\"search btn-primary\"></a>\r\n      <input type=\"button\" id=\" \" value=\"RESET\" class=\"search btn-primary\" onclick=\"resetSearch();\" style=\"background:#46505c;\">\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service/catagory.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/catagory.service.ts ***!
  \*********************************************/
/*! exports provided: CatagoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryService", function() { return CatagoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CatagoryService = /** @class */ (function () {
    function CatagoryService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.baseUrln = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrln;
        this.apiPath = '/category';
    }
    CatagoryService.prototype.deleteCartItem = function (arg0) {
        return this.http.post(this.baseUrl + "/cart/deleteItem", arg0);
    };
    CatagoryService.prototype.addtoCartFvrtItem = function (arg0) {
        return this.http.post(this.baseUrl + "/cart/addtoCartFvrtItem", arg0);
    };
    CatagoryService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + "/auth/registration/", user);
    };
    CatagoryService.prototype.getUserByUserName = function (userName) {
        return this.http.get(this.baseUrl + '/users/byName/' + userName);
    };
    CatagoryService.prototype.getUserDetail = function () {
        return this.http.get(this.baseUrl + '/me/');
    };
    CatagoryService.prototype.verifyAccount = function (code) {
        return this.http.get(this.baseUrl + '/auth/account-confirm-email/' + code);
    };
    CatagoryService.prototype.getAllRoles = function () {
        return this.http.get(this.baseUrl + '/role/getRoles');
    };
    CatagoryService.prototype.stateList = function () {
        return this.http.get(this.baseUrl + '/api/state');
    };
    CatagoryService.prototype.createOrder = function () {
        return this.http.post(this.baseUrl + '/api/orders', {});
    };
    CatagoryService.prototype.getOrders = function () {
        return this.http.get(this.baseUrl + '/api/orders');
    };
    CatagoryService.prototype.getAllCategories = function () {
        //console.log("Test");
        return this.http.get(this.baseUrl + this.apiPath + "/all");
    };
    CatagoryService.prototype.getRootCategories = function () {
        //console.log("Test");
        return this.http.get(this.baseUrln + this.apiPath + "/root");
    };
    CatagoryService.prototype.getOrderById = function (id) {
        return this.http.get(this.baseUrln + "/orderlist/&id=" + id);
    };
    CatagoryService.prototype.getOrderByIdDetails = function (id) {
        return this.http.get(this.baseUrl + "/api/order/" + id + "/");
    };
    CatagoryService.prototype.getRootTopCategories = function () {
        //console.log("Test");
        return this.http.get(this.baseUrl + "/api/categories");
    };
    CatagoryService.prototype.getSubcategory = function (code) {
        return this.http.get(this.baseUrl + "/api/subcategory?code=" + code);
    };
    CatagoryService.prototype.getSegment = function (code) {
        return this.http.get(this.baseUrl + "/api/segment?code=" + code);
    };
    CatagoryService.prototype.getSubSegment = function (code) {
        return this.http.get(this.baseUrl + "/api/subsegment?code=" + code);
    };
    CatagoryService.prototype.getLeaftype = function (code) {
        return this.http.get(this.baseUrl + "/api/leaftype?code=" + code);
    };
    CatagoryService.prototype.getVechicle = function (code) {
        return this.http.get(this.baseUrl + "/api/vechicle?code=" + code);
    };
    CatagoryService.prototype.getLeafposition = function (code) {
        return this.http.get(this.baseUrl + "/api/leafposition?code=" + code);
    };
    CatagoryService.prototype.getVechiclemodel = function (code) {
        return this.http.get(this.baseUrl + "/api/vechiclemodel?code=" + code);
    };
    CatagoryService.prototype.getRootTopLeafCategories = function () {
        //console.log("Test");
        return this.http.get(this.baseUrln + this.apiPath + "/roottopleaf");
    };
    CatagoryService.prototype.brandsVihcleCategories = function () {
        return this.http.get(this.baseUrl + "/api/brand");
    };
    CatagoryService.prototype.getProudcts = function (params) {
        return this.http.get(this.baseUrl + "/api/products?" + params);
    };
    CatagoryService.prototype.modelsCategories = function () {
        //console.log("Test");
        return this.http.get(this.baseUrln + this.apiPath + "/modelsCategories");
    };
    CatagoryService.prototype.getCategoryById = function (id) {
        return this.http.get(this.baseUrln + this.apiPath + "/&id=" + id + "&rootCat=" + window.localStorage.getItem('RootCat') + "&secondlevelCatleaf=" + window.localStorage.getItem('LEAFSPRING_secondlevelCat'));
    };
    CatagoryService.prototype.getProductById = function (id, productlink) {
        return this.http.get(this.baseUrln + "/" + productlink + "/&id=" + id + "&rootCat=" + window.localStorage.getItem('RootCat') + "&secondlevelCat=" + window.localStorage.getItem('secondlevelCat') + "&state=" + window.localStorage.getItem('user_state'));
    };
    CatagoryService.prototype.getProductByIds = function (ids, productlink) {
        return this.http.get(this.baseUrln + "/" + productlink + "/&ids=" + ids + "&rootCat=" + window.localStorage.getItem('RootCat') + "&secondlevelCat=" + window.localStorage.getItem('secondlevelCat') + "&state=" + window.localStorage.getItem('user_state'));
    };
    CatagoryService.prototype.getfavouriteById = function (username) {
        return this.http.get(this.baseUrln + "/getfavouriteById/&username=" + username);
    };
    CatagoryService.prototype.addfavouriteById = function (username, textdata) {
        return this.http.post(this.baseUrln + "/addfavouriteById/&username=" + username + "&textdata=" + textdata, { username: username });
    };
    CatagoryService.prototype.deletefavouriteById = function (username, id) {
        return this.http.post(this.baseUrln + "/deletefavouriteById/&username=" + username + "&id=" + id, { username: username });
    };
    CatagoryService.prototype.updateProfile = function (user, id) {
        return this.http.patch(this.baseUrl + "/accounts/" + id + "/", user);
    };
    CatagoryService.prototype.getCart = function () {
        return this.http.get(this.baseUrl + "/api/cart");
    };
    CatagoryService.prototype.deleteCart = function (id) {
        return this.http.delete(this.baseUrl + "/api/cart/" + id);
    };
    CatagoryService.prototype.postCart = function (data) {
        return this.http.post(this.baseUrl + "/api/cart", data);
    };
    CatagoryService.prototype.getFavourite = function () {
        return this.http.get(this.baseUrl + "/api/favourite");
    };
    CatagoryService.prototype.deleteFavourite = function (id) {
        return this.http.delete(this.baseUrl + "/api/favourite/" + id);
    };
    CatagoryService.prototype.postFavourite = function (data) {
        return this.http.post(this.baseUrl + "/api/favourite", data);
    };
    CatagoryService.prototype.getItemByCode = function (code) {
        return this.http.get(this.baseUrl + "/item/byCode/" + code);
    };
    CatagoryService.prototype.login = function (loginPayload) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/auth/login/', loginPayload);
    };
    CatagoryService.prototype.uploadFile = function (data) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.baseUrl + '/fileUpload/', data, {
            reportProgress: true,
        });
        return this.http.request(uploadReq);
    };
    CatagoryService.prototype.addToCart = function (cartRequest) {
        return this.http.post(this.baseUrln + '/cart/addItem', cartRequest);
    };
    CatagoryService.prototype.getCartItem = function (userId, type, fvrtid) {
        return this.http.get(this.baseUrl + "/cart/" + userId + "/" + type + "/" + fvrtid);
    };
    CatagoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatagoryService);
    return CatagoryService;
}());



/***/ }),

/***/ "./src/app/service/interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/service/interceptor.ts ***!
  \****************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = window.localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'token ' + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-data\">\r\n    <div class=\"detail-user-profile\">\r\n        <div class=\"left-user-data\">\r\n        </div>\r\n        <div class=\"right-user-data\">\r\n            <h4>CREATE PROFILE</h4>\r\n            <form #myform=\"ngForm\" (ngSubmit)=\"register(myform)\" id=\"\" class=\"form form-register\">\r\n                <div class=\"right-inner-left-data\">\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>First Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" ngModel name=\"firstName\" required id=\"firstName\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Last Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" name=\"lastName\" required class=\"mat-input\" id=\"lastName\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>User Name</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" name=\"username\" required class=\"mat-input\" id=\"username\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Password</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"password\" ngModel required name=\"password1\" class=\"mat-input\" id=\"password1\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Repeat Password</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"text\" ngModel required  name=\"password2\" class=\"mat-input\" id=\"password2\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"inner-main\">\r\n                        <div class=\"left-inner-detail\">\r\n                            <label>Email</label>\r\n                        </div>\r\n                        <div class=\"right-inner-detail\">\r\n                            <input type=\"email\" required name=\"emailId\" class=\"mat-input\" id=\"emailId\" ngModel>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"editProfileBtn\">Save</button>\r\n            </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user.model */ "./src/app/model/user.model.ts");





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.register = function (form) {
        var _this = this;
        var firstName = form.value.firstName;
        var lastName = form.value.lastName;
        var emailId = form.value.emailId;
        var password1 = form.value.password1;
        var password2 = form.value.password2;
        var username = form.value.username;
        if (!firstName && !lastName && !emailId && !password1 && !password2 && !username) {
            alert("Please fill all mandatory fields!");
            return false;
        }
        if (password1 !== password2) {
            alert("Password dont match");
            return;
        }
        var userLoad = new _model_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        userLoad.first_name = firstName;
        userLoad.last_name = lastName;
        userLoad.email = emailId;
        userLoad.password1 = password1;
        userLoad.password2 = password2;
        userLoad.username = username;
        this.service.createUser(userLoad).subscribe(function (result) {
            // Handle result
            alert(result.detail);
            _this.router.navigate(['/']);
        }, function (error) {
            alert("Please verify your email or password");
            _this.router.navigate(['/']);
        }, function () {
            _this.router.navigate(['/']);
        });
        // subscribe((data:any) => {
        //   console.log(data)
        //   if(data.detail){
        //     alert(data.detail);
        //     this.router.navigate(['/']);
        //   }
        //   else
        //   {
        //     alert("Please verify your email or password");
        //   }
        // });
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_catagory_service__WEBPACK_IMPORTED_MODULE_2__["CatagoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align: center;\nmargin-top: 80px;\ncolor: green;\nfont-size: 19px;\">\n  Your account verified successfully!\n</p>\n"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_catagory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/catagory.service */ "./src/app/service/catagory.service.ts");




var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.verifyAccount(params['code']).subscribe(function (data) {
                _this.router.navigate(['/login']);
            });
        });
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_catagory_service__WEBPACK_IMPORTED_MODULE_3__["CatagoryService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8000',
    baseUrln: 'http://34.68.23.11:4200/pradipAPI/api.php?path='
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/app/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map