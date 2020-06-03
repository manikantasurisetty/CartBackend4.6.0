import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
    }
    AppService.prototype.get = function (url) {
        return this._http.get(url);
    };
    AppService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=appservice.js.map