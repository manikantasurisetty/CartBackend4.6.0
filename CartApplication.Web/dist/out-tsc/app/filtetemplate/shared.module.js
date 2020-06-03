import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FiltetemplateComponent } from './filtetemplate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            declarations: [FiltetemplateComponent],
            imports: [FormsModule, ReactiveFormsModule, CommonModule],
            exports: [FiltetemplateComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map