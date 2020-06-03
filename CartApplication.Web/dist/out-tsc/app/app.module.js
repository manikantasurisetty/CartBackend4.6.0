import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FavioriteComponent } from './faviorite/faviorite.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Allproducts } from './allproducts/allproducts.component';
import { OrderComponent } from './order/order.component';
import { OrderlisComponent } from './orderlis/orderlis.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductsComponent } from './products/products.component';
import { AppService } from './appservice';
import { AppRoutingModule } from './app-routing.module';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BsService } from '../shared-services/behaviourSubject';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap';
//import { FiltetemplateComponent } from './filtetemplate/filtetemplate.component';
import { WomensproductComponent } from './womensproduct/womensproduct.component';
import { JewlearyComponent } from './jewleary/jewleary.component';
import { CheppalesComponent } from './cheppales/cheppales.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogipageComponent } from './logipage/logipage.component';
import { SharedModule } from '../app/filtetemplate/shared.module';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { ConfirmModalModule } from './confirmModal/confirmModal-Module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot(), HttpClientModule,
                TabsModule.forRoot(), ReactiveFormsModule, FormsModule, SharedModule, ConfirmModalModule],
            declarations: [AppComponent, CarouselComponent, FavioriteComponent, HeaderComponent, HomeComponent, Allproducts, OrderComponent,
                OrderlisComponent, ProductinfoComponent, ProductsComponent, AddtocartComponent, WomensproductComponent, JewlearyComponent, CheppalesComponent, LogipageComponent, ListcomponentComponent],
            bootstrap: [AppComponent],
            exports: [],
            providers: [AppService, BsService]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map