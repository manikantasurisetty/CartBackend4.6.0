import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ChangeDetectorRef, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { ConfirmWindowService } from './confirmModal-Service';
var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(_confirmModalService, cd) {
        this._confirmModalService = _confirmModalService;
        this.cd = cd;
        this.messageText = '';
        this.onConfirm = new EventEmitter();
        this.onDecline = new EventEmitter();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
        if (this.modalType == ModalType.Confirm.toString())
            this._confirmModalService.openModal(this.showConfirmModal);
        else if (this.modalType == ModalType.Error.toString())
            this._confirmModalService.openModal(this.showErrorModal);
        else if (this.modalType == ModalType.Success.toString())
            this._confirmModalService.openModal(this.showSuccessModal);
    };
    ConfirmModalComponent.prototype.confirm = function (id) {
        this.onConfirm.emit();
        this.closeModal();
    };
    ConfirmModalComponent.prototype.decline = function () {
        this.onDecline.emit();
        this.closeModal();
    };
    ConfirmModalComponent.prototype.closeModal = function () {
        this._confirmModalService.closeModal();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "messageText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "modalType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ConfirmModalComponent.prototype, "confirmButtonText", void 0);
    __decorate([
        ViewChild('confirmtemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmModalComponent.prototype, "showConfirmModal", void 0);
    __decorate([
        ViewChild('errorTemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmModalComponent.prototype, "showErrorModal", void 0);
    __decorate([
        ViewChild('successTemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmModalComponent.prototype, "showSuccessModal", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ConfirmModalComponent.prototype, "onConfirm", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ConfirmModalComponent.prototype, "onDecline", void 0);
    ConfirmModalComponent = __decorate([
        Component({
            selector: 'confirm-modal',
            templateUrl: './confirmModal.html',
            providers: [ConfirmWindowService]
            //styleUrls: ['../../../src/app/dashboard/dashboard.component.css'],
        }),
        __metadata("design:paramtypes", [ConfirmWindowService, ChangeDetectorRef])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());
export { ConfirmModalComponent };
export var ModalType;
(function (ModalType) {
    ModalType["Confirm"] = "Confirm";
    ModalType["Error"] = "Error";
    ModalType["Success"] = "Success";
})(ModalType || (ModalType = {}));
//# sourceMappingURL=confirmModal-Component.js.map