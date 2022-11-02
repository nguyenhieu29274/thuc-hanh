import * as readlineSync from 'readline-sync';
import {ProductManagement} from "./ProductManager";
import {Product} from "./Product";

export class Menu {
    private products = new ProductManagement();

    menu() {
        console.log('---NHẬP LỰA CHỌN CỦA BẠN---');
        console.log('1. Hiển thị tất cả hàng hóa ');
        console.log('2. Tìm kiếm hàng hoá');
        console.log('3. Thêm 1 mặt hàng mới');
        console.log('4. Chỉnh sửa thông tin của mặt hàng');
        console.log('5. Xoá một mặt hàng khỏi ứng dụng');
        console.log('0. Thoát');
    }

    showAllProduct(): void {
        let listProduct = this.products.getAll();
        console.table(listProduct);


    }

    findProduct(): void {
        let name = readlineSync.question('Nhập sản phẩm bạn cần tìm ');
        let index = this.products.findByName(name);
        if (index = -1) {
            console.log('Sản phẩm cần tìm không tồn tại ');
        } else {
            console.log(this.products.getAll()[index]);
        }
    }

    addName() {
        let name = '';
        let isValidName = true;

        do {
            name = readlineSync.question('Nhập tên sản phẩm mới ');
            let current = this.products.findByName(name);
            if (current != -1) {
                isValidName = false;
                console.log('Tên tài khoản đã tồn tại');
            } else {
                isValidName = true;
            }

        } while (!isValidName);
        return name;
    }


    addProduct(): Product {
        let name = this.addName();
        let type = readlineSync.question('Nhập loại hàng ');
        let price = +readlineSync.question('Nhâp giá sản phẩm mới');
        let amount = +readlineSync.question('Nhập số lượng hàng nhập kho ');
        let date = readlineSync.question('Nhập ngày nhập ');

        return new Product(name, type, price, amount, date);
    }

    run() {
        let choice = '-1';
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

                case '3': {
                    let product = this.addProduct();
                    this.products.addNewProduct(product);
                    console.log('Thêm sản phẩm thành công');

                }
                    break;

                case '4': {
                    let name = readlineSync.question('Nhập tên sản phẩm bạn muốn chỉnh sửa ');
                    let product = this.addProduct();
                    this.products.updateProduct(name, product)
                }
                    break;

                case '5': {
                    let name = readlineSync.question('Nhập tên sản phẩm bạn muốn xóa ');
                    this.products.delProduct(name);
                }
                    break;

            }

        }
        while (choice != '0');
    }

}