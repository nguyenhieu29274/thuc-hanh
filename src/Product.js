"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, type, price, amount, date) {
        this.id = 0;
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
        this.date = date;
    }
    Product.prototype.getid = function () {
        return this.id;
    };
    Product.prototype.setid = function (value) {
        this.id = value;
    };
    Product.prototype.getname = function () {
        return this.name;
    };
    Product.prototype.setname = function (value) {
        this.name = value;
    };
    Product.prototype.gettype = function () {
        return this.type;
    };
    Product.prototype.settype = function (value) {
        this.type = value;
    };
    Product.prototype.getprice = function () {
        return this.price;
    };
    Product.prototype.setprice = function (value) {
        this.price = value;
    };
    Product.prototype.getamount = function () {
        return this.amount;
    };
    Product.prototype.setamount = function (value) {
        this.amount = value;
    };
    Product.prototype.getdate = function () {
        return this.date;
    };
    Product.prototype.setdate = function (value) {
        this.date = value;
    };
    return Product;
}());
exports.Product = Product;
