import { async, TestBed } from '@angular/core/testing';
import { FiltetemplateComponent } from './filtetemplate.component';
describe('FiltetemplateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FiltetemplateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FiltetemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=filtetemplate.component.spec.js.map