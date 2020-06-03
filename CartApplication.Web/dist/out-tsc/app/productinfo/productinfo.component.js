import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { BsService } from 'src/shared-services/behaviourSubject';
var ProductinfoComponent = /** @class */ (function () {
    function ProductinfoComponent(bsService) {
        this.bsService = bsService;
        this.productList = [];
    }
    ProductinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bsService.selectedProduct.subscribe(function (res) {
            _this.product = res;
        });
        this.bsService.favouriteData.subscribe(function (productList) {
            if (productList) {
                _this.productList = productList;
            }
        });
    };
    ProductinfoComponent.prototype.addToCart = function () {
        this.mapSelectedProduct();
        this.bsService.updateFavouriteData(this.productList);
    };
    ProductinfoComponent.prototype.mapSelectedProduct = function () {
        var _this = this;
        this.productList.forEach(function (product) {
            if (product.id == _this.product.id) {
                product.iscartAdded = true;
            }
        });
    };
    ProductinfoComponent = __decorate([
        Component({
            selector: 'app-productinfo',
            templateUrl: './productinfo.component.html',
            styleUrls: ['./productinfo.component.scss']
        }),
        __metadata("design:paramtypes", [BsService])
    ], ProductinfoComponent);
    return ProductinfoComponent;
}());
export { ProductinfoComponent };
//# sourceMappingURL=productinfo.component.js.map