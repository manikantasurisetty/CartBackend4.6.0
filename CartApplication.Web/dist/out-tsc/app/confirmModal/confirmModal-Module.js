import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './confirmModal-Component';
import { ConfirmWindowService } from './confirmModal-Service';
var ConfirmModalModule = /** @class */ (function () {
    function ConfirmModalModule() {
    }
    ConfirmModalModule = __decorate([
        NgModule({
            imports: [CommonModule,
                FormsModule,
                ReactiveFormsModule,
                BsDropdownModule.forRoot(),
                ModalModule.forRoot(),
            ],
            exports: [ConfirmModalComponent],
            declarations: [ConfirmModalComponent],
            bootstrap: [ConfirmModalComponent],
            providers: [ConfirmWindowService]
        })
    ], ConfirmModalModule);
    return ConfirmModalModule;
}());
export { ConfirmModalModule };
//# sourceMappingURL=confirmModal-Module.js.map