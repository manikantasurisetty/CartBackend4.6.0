import { __decorate, __metadata } from "tslib";
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
var FiltetemplateComponent = /** @class */ (function () {
    function FiltetemplateComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.groupFilters = new EventEmitter(null);
    }
    FiltetemplateComponent.prototype.ngOnInit = function () {
        var newForm = this.formBuilder.group({
            Min: ['', Validators.required],
            Max: ['', Validators.required],
            skills: this.formBuilder.array([])
        });
        // this.checboxlist =checkboxList;
        var arrayControl = newForm.controls['skills'];
        if (this.checboxlist) {
            this.checboxlist.forEach(function (item) {
                arrayControl.push(new FormControl(false));
            });
        }
        this.registerForm = newForm;
    };
    FiltetemplateComponent.prototype.submit = function (filters) {
        var _this = this;
        var skills = filters.skills.map(function (selected, i) {
            return {
                // id: this.checboxlist.skills[i].id,
                selected: selected,
                name: _this.checboxlist[i]
            };
        });
        console.log('test', skills);
        Object.keys(filters).forEach(function (key) { return filters[key] === '' || filters[key] == null ? delete filters[key] : key; });
        //filters['firstName']='Mani';
        filters["skills"] = skills.filter(function (x) { return x.selected; });
        //filters["skills"]=[{id:1,name:'CSS'}]
        console.log('emitdata', filters);
        Object.keys(filters).forEach(function (key) { return filters[key] === '' || filters[key] == null ? delete filters[key] : key; });
        //filters['firstName']='Mani';
        filters["skills"] = skills.filter(function (x) { return x.selected; });
        this.groupFilters.emit(filters);
        //filters["skills"]=[{id:1,name:'CSS'}]
    };
    Object.defineProperty(FiltetemplateComponent.prototype, "skills", {
        get: function () {
            return this.registerForm.get('skills');
        },
        enumerable: true,
        configurable: true
    });
    ;
    FiltetemplateComponent.prototype.clear = function () {
        this.registerForm.reset();
        this.submit(this.registerForm.value);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FiltetemplateComponent.prototype, "checboxlist", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FiltetemplateComponent.prototype, "groupFilters", void 0);
    FiltetemplateComponent = __decorate([
        Component({
            selector: 'app-filtetemplate',
            templateUrl: './filtetemplate.component.html',
            styleUrls: ['./filtetemplate.component.scss']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], FiltetemplateComponent);
    return FiltetemplateComponent;
}());
export { FiltetemplateComponent };
//# sourceMappingURL=filtetemplate.component.js.map