"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var readlineSync = require("readline-sync");
var ProductManager_1 = require("./ProductManager");
var Product_1 = require("./Product");
var Menu = /** @class */ (function () {
    function Menu() {
        this.products = new ProductManager_1.ProductManagement();
    }
    Menu.prototype.menu = function () {
        console.log('---NHẬP LỰA CHỌN CỦA BẠN---');
        console.log('1. Hiển thị tất cả hàng hóa ');
        console.log('2. Tìm kiếm hàng hoá');
        console.log('3. Thêm 1 mặt hàng mới');
        console.log('4. Chỉnh sửa thông tin của mặt hàng');
        console.log('5. Xoá một mặt hàng khỏi ứng dụng');
        console.log('0. Thoát');
    };
    Menu.prototype.showAllProduct = function () {
        var listProduct = this.products.getAll();
        console.table(listProduct);
    };
    Menu.prototype.findProduct = function () {
        var name = readlineSync.question('Nhập sản phẩm bạn cần tìm ');
        var index = this.products.findByName(name);
        if (index = -1) {
            console.log('Sản phẩm cần tìm không tồn tại ');
        }
        else {
            console.log(this.products.getAll()[index]);
        }
    };
    Menu.prototype.addName = function () {
        var name = '';
        var isValidName = true;
        do {
            name = readlineSync.question('Nhập tên sản phẩm mới ');
            var current = this.products.findByName(name);
            if (current != -1) {
                isValidName = false;
                console.log('Tên tài khoản đã tồn tại');
            }
            else {
                isValidName = true;
            }
        } while (!isValidName);
        return name;
    };
    Menu.prototype.addProduct = function () {
        var name = this.addName();
        var type = readlineSync.question('Nhập loại hàng ');
        var price = +readlineSync.question('Nhâp giá sản phẩm mới');
        var amount = +readlineSync.question('Nhập số lượng hàng nhập kho ');
        var date = readlineSync.question('Nhập ngày nhập ');
        return new Product_1.Product(name, type, price, amount, date);
    };
    Menu.prototype.run = function () {
        var choice = '-1';
        do {
            this.menu();
            choice = readlineSync.question(' Nhâp lựa chọn của bạn ');
            switch (choice) {
                case '1':
                    this.showAllProduct();
                    break;
                case '2':
                    this.findProduct();
                    break;
                case '3':
                    {
                        var product = this.addProduct();
                        this.products.addNewProduct(product);
                        console.log('Thêm sản phẩm thành công');
                    }
                    break;
                case '4':
                    {
                        var name_1 = readlineSync.question('Nhập tên sản phẩm bạn muốn chỉnh sửa ');
                        var product = this.addProduct();
                        this.products.updateProduct(name_1, product);
                    }
                    break;
                case '5':
                    {
                        var name_2 = readlineSync.question('Nhập tên sản phẩm bạn muốn xóa ');
                        this.products.delProduct(name_2);
                    }
                    break;
            }
        } while (choice != '0');
    };
    return Menu;
}());
exports.Menu = Menu;
