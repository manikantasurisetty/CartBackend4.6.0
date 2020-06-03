import { __decorate, __metadata, __read, __spread } from "tslib";
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { AppService } from '../appservice';
import { urls } from '../urls';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
var Allproducts = /** @class */ (function () {
    function Allproducts(product, bsService, router) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
        this.data = new EventEmitter(null);
    }
    Allproducts.prototype.ngOnInit = function () {
        switch (this.router.url) {
            case '/men':
                this.url = urls.mensproduct;
                break;
            case '/women':
                this.url = urls.womensproduct;
                break;
            case '/chapals':
                this.url = urls.cheppales;
                break;
            case '/jewelery':
                this.url = urls.jewalaries;
                break;
        }
        //     if(this.router.url == '/men')
        //  this.url = urls.mensproduct;
        this.getproductlist();
    };
    Allproducts.prototype.getproductlist = function () {
        var _this = this;
        this.product.get(this.url.get).subscribe(function (res) {
            _this.products = res;
            _this.products.map(function (product) {
                var myProduct = product;
                product.isVisited = false;
                product.iscartAdded = false;
                // this.bsService.favouriteData.subscribe((products)=>{
                //     products.map((prod)=>{
                //       if(prod.id==product.id){
                //         product.isVisited=prod.isVisited;
                //         product.iscartAdded=prod.iscartAdded
                //       }
                //       else{
                //         product.isVisited=false;
                //         product.iscartAdded=false;
                //       }
                //     })
                // })
                return product;
            });
            _this.uniqueArr = __spread(new Set(_this.products.map(function (data) { return data.type; })));
            // console.log(uniqueArr)
        }, function () { });
    };
    Allproducts.prototype.filterdata = function ($event) {
        this.filters = $event;
        this.productsComponent.filterUserList(this.filters, this.products);
    };
    Allproducts.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.products);
    };
    Allproducts.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], Allproducts.prototype, "data", void 0);
    __decorate([
        ViewChild(ProductsComponent),
        __metadata("design:type", ProductsComponent)
    ], Allproducts.prototype, "productsComponent", void 0);
    Allproducts = __decorate([
        Component({
            selector: 'app-menproduct',
            templateUrl: './allproducts.component.html',
            styleUrls: ['./allproducts.component.scss']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router])
    ], Allproducts);
    return Allproducts;
}());
export { Allproducts };
//# sourceMappingURL=allproducts.component.js.map