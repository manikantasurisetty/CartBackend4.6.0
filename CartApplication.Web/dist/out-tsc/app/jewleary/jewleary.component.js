import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../appservice';
import { urls } from '../urls';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
var JewlearyComponent = /** @class */ (function () {
    function JewlearyComponent(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
    }
    JewlearyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = urls.jewalaries;
        this.product.get(this.url.get).subscribe(function (res) {
            _this.products = res;
            _this.products.map(function (product) {
                var myProduct = product;
                product.isVisited = false;
                product.iscartAdded = false;
                return product;
            });
            _this.uniqueArr = __spread(new Set(_this.products.map(function (data) { return data.type; })));
        }, function () { });
    };
    JewlearyComponent.prototype.filterdata = function ($event) {
        this.filters = $event;
        this.productsComponent.filterUserList(this.filters, this.products);
    };
    JewlearyComponent.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.products);
    };
    JewlearyComponent.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    JewlearyComponent = __decorate([
        Component({
            selector: 'app-jewleary',
            templateUrl: './jewleary.component.html',
            styleUrls: ['./jewleary.component.scss']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router])
    ], JewlearyComponent);
    return JewlearyComponent;
}());
export { JewlearyComponent };
//# sourceMappingURL=jewleary.component.js.map