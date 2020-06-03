import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../appservice';
import { urls } from '../urls';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
var CheppalesComponent = /** @class */ (function () {
    function CheppalesComponent(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
    }
    CheppalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = urls.cheppales;
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
    CheppalesComponent.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.products);
    };
    CheppalesComponent.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    CheppalesComponent = __decorate([
        Component({
            selector: 'app-cheppales',
            templateUrl: './cheppales.component.html',
            styleUrls: ['./cheppales.component.scss']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router])
    ], CheppalesComponent);
    return CheppalesComponent;
}());
export { CheppalesComponent };
//# sourceMappingURL=cheppales.component.js.map