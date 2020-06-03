import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AppService } from '../appservice';
import { urls } from '../urls';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
var WomensproductComponent = /** @class */ (function () {
    function WomensproductComponent(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
    }
    WomensproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = urls.womensproduct;
        this.product.get(this.url.get).subscribe(function (res) {
            _this.products = res;
            _this.products.map(function (product) {
                var myProduct = product;
                product.isVisited = false;
                product.iscartAdded = false;
                _this.bsService.favouriteData.subscribe(function (products) {
                    products.map(function (prod) {
                        if (prod.id == product.id) {
                            product.isVisited = prod.isVisited;
                            product.iscartAdded = prod.iscartAdded;
                        }
                        else {
                            product.isVisited = false;
                            product.iscartAdded = false;
                        }
                    });
                });
                return product;
            });
            _this.uniqueArr = __spread(new Set(_this.products.map(function (data) { return data.type; })));
        }, function () { });
    };
    WomensproductComponent.prototype.filterdata = function ($event) {
        this.filters = $event;
        this.productsComponent.filterUserList(this.filters, this.products);
    };
    WomensproductComponent.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.products);
    };
    WomensproductComponent.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    __decorate([
        ViewChild(ProductsComponent),
        __metadata("design:type", ProductsComponent)
    ], WomensproductComponent.prototype, "productsComponent", void 0);
    WomensproductComponent = __decorate([
        Component({
            selector: 'app-womensproduct',
            templateUrl: './womensproduct.component.html',
            styleUrls: ['./womensproduct.component.scss']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router])
    ], WomensproductComponent);
    return WomensproductComponent;
}());
export { WomensproductComponent };
//# sourceMappingURL=womensproduct.component.js.map