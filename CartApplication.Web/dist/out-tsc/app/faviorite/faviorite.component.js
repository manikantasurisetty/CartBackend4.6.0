import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FavioriteComponent = /** @class */ (function () {
    function FavioriteComponent() {
        this.navigateToRoute = new EventEmitter();
    }
    FavioriteComponent.prototype.ngOnInit = function () {
    };
    FavioriteComponent.prototype.addToCart = function (route) {
        this.navigateToRoute.emit(route);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FavioriteComponent.prototype, "cartList", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FavioriteComponent.prototype, "favouriteList", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FavioriteComponent.prototype, "navigateToRoute", void 0);
    FavioriteComponent = __decorate([
        Component({
            selector: 'app-faviorite',
            templateUrl: './faviorite.component.html',
            styleUrls: ['./faviorite.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FavioriteComponent);
    return FavioriteComponent;
}());
export { FavioriteComponent };
//# sourceMappingURL=faviorite.component.js.map