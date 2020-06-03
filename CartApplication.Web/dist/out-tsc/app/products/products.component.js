import { __decorate, __metadata } from "tslib";
import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../appservice';
import { BsService } from '../../shared-services/behaviourSubject';
import { Router } from '@angular/router';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(product, bsService, router, cd) {
        this.product = product;
        this.bsService = bsService;
        this.router = router;
        this.cd = cd;
        this.tempArray = [];
        this.successText = "order has been success";
        this.successmodel = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.filteredProducts = this.products;
        // this.tempArray=Object.assign(this.tempArray, this.filteredProducts);
        this.totalPrice = this.getTotalPrice();
        // this.url =urls.products;
        // this.product.get(this.url.get).subscribe( (res)=>{
        //   this.products=res;
        //   this.products.map((product)=>{
        //     let myProduct=product;
        //     product.isVisited=false;
        //     product.iscartAdded=false;
        //     return product
        //   })
        // },()=>{})
    };
    ProductsComponent.prototype.ngOnChanges = function () {
        // if (this.groupFilters) this.filterUserList(this.groupFilters, this.products);
    };
    ProductsComponent.prototype.addToCart = function (product, type) {
        if (type == 'favourite') {
            product.isVisited = !product.isVisited;
        }
        else {
            if (type == 'cart')
                product.iscartAdded = !product.iscartAdded;
        }
        this.bsService.updateFavouriteData(this.filteredProducts);
    };
    ProductsComponent.prototype.removeFromCart = function (product) {
        var index = this.filteredProducts.findIndex(function (prod) { return prod.id == product.id; });
        this.filteredProducts.splice(index, 1);
        var propertyName;
        if (this.router.url == '/list/cart') {
            propertyName = 'iscartAdded';
        }
        else if (this.router.url == '/list/favourite') {
            propertyName = 'isVisited';
        }
        this.updateCartData(product, propertyName);
        this.updatePrice(product);
    };
    ProductsComponent.prototype.updateCartData = function (product, propertyName) {
        var modifiedProducts;
        this.bsService.favouriteData.subscribe(function (products) {
            modifiedProducts = products;
            products.map(function (prod) {
                if (prod.id == product.id) {
                    product[propertyName] = false;
                }
            });
        });
        this.bsService.updateFavouriteData(modifiedProducts);
    };
    ProductsComponent.prototype.updatePrice = function (product) {
        this.totalPrice = this.totalPrice - (product.quantity * product.itemPrice);
    };
    ProductsComponent.prototype.openSelectedProduct = function (product) {
        this.bsService.updateSelectedProduct(product);
        this.router.navigateByUrl('/productinfo');
    };
    //filtercode 
    ProductsComponent.prototype.filterUserList = function (filters, users) {
        this.filteredProducts = this.products; //Reset User List
        var keys = Object.keys(filters);
        var filterUser = function (user) {
            var result = keys.map(function (key) {
                // if (!~key.indexOf('cost') && !~key.indexOf('skills')) {
                // if(user[key]) {
                // return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
                // } else {
                // return false;
                // }
                // }
                return true;
            });
            // To Clean Array from undefined if the age is passed so the map will fill the gap with (undefined)
            //  result = result.filter(it => it !== undefined);
            // Filter the Age out from the other filters
            if (filters['Min'] && filters['Max']) {
                if (user['cost']) {
                    if (+user['cost'] >= +filters['Min'] && +user['cost'] <= +filters['Max']) {
                        result.push(true);
                    }
                    else {
                        result.push(false);
                    }
                }
                else {
                    result.push(false);
                }
            }
            if (filters['skills'] && filters['skills'].length > 0) {
                var keepGoing_1 = true;
                var length_1 = filters['skills'].length;
                filters['skills'].forEach(function (element, index, array) {
                    if (keepGoing_1) {
                        if (element['name'] == user['type']) {
                            result.push(true);
                            keepGoing_1 = false;
                        }
                        else {
                            if (index == length_1 - 1) {
                                result.push(false);
                            }
                            keepGoing_1 = true;
                        }
                    }
                });
            }
            var value = result.reduce(function (acc, cur) { return acc & cur; }, 1);
            console.log(value);
            return value;
        };
        this.filteredProducts = this.products.filter(filterUser);
    };
    ProductsComponent.prototype.dataChanged = function (product) {
        product.cost = product.quantity * product.itemPrice;
        this.totalPrice = this.getTotalPrice();
    };
    ProductsComponent.prototype.getTotalPrice = function () {
        if (this.filteredProducts && this.filteredProducts.length > 1)
            return this.filteredProducts.reduce(function (prod, acc) { return parseFloat(prod.cost) + parseFloat(acc.cost); });
        else {
            if (this.filteredProducts) {
                return this.filteredProducts[0].cost;
            }
        }
    };
    ProductsComponent.prototype.orderProduct = function (prod) {
        this.successmodel = true;
        this.cd.detectChanges();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProductsComponent.prototype, "isList", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "products", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "groupFilters", void 0);
    ProductsComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        __metadata("design:paramtypes", [AppService, BsService, Router, ChangeDetectorRef])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map