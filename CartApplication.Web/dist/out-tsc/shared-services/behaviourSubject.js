import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var BsService = /** @class */ (function () {
    function BsService() {
        this.favouriteData = new BehaviorSubject(null);
        this.selectedProduct = new BehaviorSubject(null);
        this.currentCartData = this.selectedProduct.asObservable();
        this.currentFavouritData = this.favouriteData.asObservable();
    }
    BsService.prototype.updateFavouriteData = function (product) {
        this.favouriteData.next(product);
    };
    BsService.prototype.updateSelectedProduct = function (product) {
        this.selectedProduct.next(product);
    };
    BsService = __decorate([
        Injectable()
    ], BsService);
    return BsService;
}());
export { BsService };
//# sourceMappingURL=behaviourSubject.js.map