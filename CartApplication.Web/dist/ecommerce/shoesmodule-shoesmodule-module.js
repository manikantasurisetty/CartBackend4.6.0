(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shoesmodule-shoesmodule-module"],{

/***/ "./src/app/shoesmodule/shoes/shoes.component.html":
/*!********************************************************!*\
  !*** ./src/app/shoesmodule/shoes/shoes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n     <app-filtetemplate></app-filtetemplate>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-sm-6\" *ngFor =\"let product of products\">\r\n          <div class=\"product-item\">\r\n            <div class=\"pi-pic\">\r\n              <img [src]=\"product?.imagepath\" (click)=\"openSelectedProduct(product)\"  alt=\"\">\r\n              <!-- [routerLink]=\"'/productinfo'\" -->\r\n              <div class=\"pi-links\">\r\n                <a  [class.highlight]=\"product?.iscartAdded\" class=\"add-card\"><i class=\"flaticon-bag\" (click)=\"addToCart(product,'cart')\"></i></a>\r\n              <a [class.highlight]=\"product?.isVisited\" class=\"wishlist-btn test\" (click)=\"addToCart(product,'favourite')\" ><i class=\"flaticon-heart\"></i></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"pi-text\">\r\n              <h6>{{product?.cost}}</h6>\r\n              <p>{{product?.productname}} </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/shoesmodule/shoes/shoes.component.scss":
/*!********************************************************!*\
  !*** ./src/app/shoesmodule/shoes/shoes.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob2VzbW9kdWxlL3Nob2VzL3Nob2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shoesmodule/shoes/shoes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shoesmodule/shoes/shoes.component.ts ***!
  \******************************************************/
/*! exports provided: ShoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoesComponent", function() { return ShoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appservice */ "./src/app/appservice.ts");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../urls */ "./src/app/urls.ts");
/* harmony import */ var _shared_services_behaviourSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-services/behaviourSubject */ "./src/shared-services/behaviourSubject.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ShoesComponent = /** @class */ (function () {
    function ShoesComponent(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
    }
    ShoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = _urls__WEBPACK_IMPORTED_MODULE_3__["urls"].shoes;
        this.product.get(this.url.get).subscribe(function (res) {
            _this.products = res;
            _this.products.map(function (product) {
                var myProduct = product;
                product.isVisited = false;
                product.iscartAdded = false;
                return product;
            });
        }, function () { });
    };
    ShoesComponent.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.products);
    };
    ShoesComponent.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    ShoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoes',
            template: __webpack_require__(/*! ./shoes.component.html */ "./src/app/shoesmodule/shoes/shoes.component.html"),
            styles: [__webpack_require__(/*! ./shoes.component.scss */ "./src/app/shoesmodule/shoes/shoes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_appservice__WEBPACK_IMPORTED_MODULE_2__["AppService"], _shared_services_behaviourSubject__WEBPACK_IMPORTED_MODULE_4__["BsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShoesComponent);
    return ShoesComponent;
}());



/***/ }),

/***/ "./src/app/shoesmodule/shoesmodule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shoesmodule/shoesmodule.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutes, ShoesmoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoesmoduleModule", function() { return ShoesmoduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoes/shoes.component */ "./src/app/shoesmodule/shoes/shoes.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appservice */ "./src/app/appservice.ts");
/* harmony import */ var _filtetemplate_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filtetemplate/shared.module */ "./src/app/filtetemplate/shared.module.ts");







var routes = [
    { path: '', component: _shoes_shoes_component__WEBPACK_IMPORTED_MODULE_3__["ShoesComponent"] }
];
var UserRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes);
var ShoesmoduleModule = /** @class */ (function () {
    function ShoesmoduleModule() {
    }
    ShoesmoduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_shoes_shoes_component__WEBPACK_IMPORTED_MODULE_3__["ShoesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _filtetemplate_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                UserRoutes
            ],
            providers: [_appservice__WEBPACK_IMPORTED_MODULE_5__["AppService"]],
        })
    ], ShoesmoduleModule);
    return ShoesmoduleModule;
}());



/***/ })

}]);
//# sourceMappingURL=shoesmodule-shoesmodule-module.js.map