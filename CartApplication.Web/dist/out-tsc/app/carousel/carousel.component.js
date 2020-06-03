import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { carouselList } from './carousellist';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.carouselList = carouselList;
    };
    CarouselComponent = __decorate([
        Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss'],
            providers: [
                { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map