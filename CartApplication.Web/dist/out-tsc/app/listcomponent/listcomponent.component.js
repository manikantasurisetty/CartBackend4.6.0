import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { BsService } from 'src/shared-services/behaviourSubject';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
var ListcomponentComponent = /** @class */ (function () {
    function ListcomponentComponent(bsService, activatedRoute) {
        this.bsService = bsService;
        this.activatedRoute = activatedRoute;
    }
    ListcomponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (routeParams) {
            _this.listName = _this.activatedRoute.snapshot.params['listName'];
            _this.bsService.favouriteData.subscribe(function (products) {
                console.log(products);
                if (products) {
                    _this.cartList = __spread(products).filter(function (product) { return product.iscartAdded; });
                    _this.favouriteList = __spread(products).filter(function (product) { return product.isVisited; });
                    if (_this.listName.toLowerCase() == 'cart') {
                        _this.products = _this.cartList;
                    }
                    else {
                        _this.products = _this.favouriteList;
                    }
                    if (_this.products && _this.products.length > 0) {
                        _this.products.map(function (prod) {
                            prod.quantity = 1;
                            prod.itemPrice = prod.cost;
                            return prod;
                        });
                    }
                    if (_this.productsComponent) {
                        _this.productsComponent.filteredProducts = _this.products;
                    }
                }
            });
        });
        //console.log(this.listName)
    };
    ListcomponentComponent.prototype.ngOnChanges = function (value) {
        console.log(value);
    };
    __decorate([
        ViewChild(ProductsComponent),
        __metadata("design:type", ProductsComponent)
    ], ListcomponentComponent.prototype, "productsComponent", void 0);
    ListcomponentComponent = __decorate([
        Component({
            selector: 'app-listcomponent',
            templateUrl: './listcomponent.component.html',
            styleUrls: ['./listcomponent.component.scss']
        }),
        __metadata("design:paramtypes", [BsService, ActivatedRoute])
    ], ListcomponentComponent);
    return ListcomponentComponent;
}());
export { ListcomponentComponent };
//# sourceMappingURL=listcomponent.component.js.map