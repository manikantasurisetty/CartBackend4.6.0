import { __decorate, __metadata } from "tslib";
import { Injectable, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
var ConfirmWindowService = /** @class */ (function () {
    function ConfirmWindowService(modalService) {
        this.modalService = modalService;
    }
    ConfirmWindowService.prototype.openModal = function (confirmModal) {
        this.modalRef = this.modalService.show(confirmModal, Object.assign({}, this.modalOptions, { class: 'delete-modal-top' }));
    };
    ConfirmWindowService.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    __decorate([
        ViewChild('confirmtemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmWindowService.prototype, "showConfirmModal", void 0);
    __decorate([
        ViewChild('errorTemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmWindowService.prototype, "showErrorModal", void 0);
    __decorate([
        ViewChild('successTemplate'),
        __metadata("design:type", ElementRef)
    ], ConfirmWindowService.prototype, "showSuccessModal", void 0);
    ConfirmWindowService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [BsModalService])
    ], ConfirmWindowService);
    return ConfirmWindowService;
}());
export { ConfirmWindowService };
//# sourceMappingURL=confirmModal-Service.js.map