"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
    }
    ProductManagement.prototype.findByName = function (name) {
        var arrProduct = ProductManagement.listProduct;
        var index = -1;
        for (var i = 0; i < arrProduct.length; i++) {
            if (name == arrProduct[i].name) {
                return i;
            }
        }
        return -1;
    };
    ProductManagement.prototype.getAll = function () {
        return ProductManagement.listProduct;
    };
    ProductManagement.prototype.addNewProduct = function (t) {
        ProductManagement.id++;
        t.id = ProductManagement.id;
        var arrProduct = ProductManagement.listProduct;
        arrProduct.push(t);
    };
    ProductManagement.prototype.updateProduct = function (name, product) {
        var arrProduct = ProductManagement.listProduct;
        var index = this.findByName(name);
        if (index != -1) {
            arrProduct[index] = product;
        }
        else {
            console.log('Sản phẩm không tồn tại');
        }
    };
    ProductManagement.prototype.delProduct = function (name) {
        var arrProduct = ProductManagement.listProduct;
        var index = this.findByName(name);
        if (index != -1) {
            arrProduct.splice(index, 1);
        }
    };
    ProductManagement.listProduct = [];
    ProductManagement.id = 0;
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
