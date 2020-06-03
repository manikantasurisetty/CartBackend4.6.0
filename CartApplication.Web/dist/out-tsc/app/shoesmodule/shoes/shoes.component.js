import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AppService } from '../../appservice';
import { urls } from '../../urls';
import { BsService } from '../../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
var ShoesComponent = /** @class */ (function () {
    function ShoesComponent(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
    }
    ShoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = urls.shoes;
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
    ShoesComponent = __decorate([
        Component({
            selector: 'app-shoes',
            templateUrl: './shoes.component.html',
            styleUrls: ['./shoes.component.scss']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router])
    ], ShoesComponent);
    return ShoesComponent;
}());
export { ShoesComponent };
//# sourceMappingURL=shoes.component.js.map