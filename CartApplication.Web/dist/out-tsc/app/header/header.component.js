import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component } from '@angular/core';
import { headerTabs } from './headerTabs';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(bsService, route) {
        this.bsService = bsService;
        this.route = route;
        this.cartList = [];
        this.favouriteList = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerMenu = headerTabs;
        this.bsService.favouriteData.subscribe(function (products) {
            if (products) {
                _this.cartList = __spread(products).filter(function (product) { return product.iscartAdded; });
                _this.favouriteList = __spread(products).filter(function (product) { return product.isVisited; });
            }
        });
    };
    HeaderComponent.prototype.navigateToCart = function (route) {
        this.route.navigateByUrl("/list/" + route);
    };
    HeaderComponent.prototype.navigateTo = function (header) {
        this.headerMenu.map(function (item) {
            if (item.id == header.id) {
                item.isActive = true;
            }
            else {
                item.isActive = false;
            }
            return item;
        });
        this.route.navigateByUrl("/" + header.name.toLowerCase());
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        }),
        __metadata("design:paramtypes", [BsService, Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map