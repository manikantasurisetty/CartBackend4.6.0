import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesComponent } from './shoes/shoes.component';
import { RouterModule } from '@angular/router';
import { AppService } from '../appservice';
import { SharedModule } from '../filtetemplate/shared.module';
var routes = [
    { path: '', component: ShoesComponent }
];
export var UserRoutes = RouterModule.forChild(routes);
var ShoesmoduleModule = /** @class */ (function () {
    function ShoesmoduleModule() {
    }
    ShoesmoduleModule = __decorate([
        NgModule({
            declarations: [ShoesComponent],
            imports: [
                CommonModule,
                SharedModule,
                UserRoutes
            ],
            providers: [AppService],
        })
    ], ShoesmoduleModule);
    return ShoesmoduleModule;
}());
export { ShoesmoduleModule };
//# sourceMappingURL=shoesmodule.module.js.map