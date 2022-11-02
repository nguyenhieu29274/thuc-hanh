
export class Product{
     id:number=0;
     name:string;
     type:string;
     price:number;
     amount:number;
     date:string;

    constructor(name: string, type: string, price: number, amount: number, date: string) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.amount = amount;
        this.date = date;
    }

    getid(): number {
        return this.id;
    }

    setid(value: number) {
        this.id = value;
    }

    getname(): string {
        return this.name;
    }

    setname(value: string) {
        this.name = value;
    }

    gettype(): string {
        return this.type;
    }

    settype(value: string) {
        this.type = value;
    }

    getprice(): number {
        return this.price;
    }

    setprice(value: number) {
        this.price = value;
    }

    getamount(): number {
        return this.amount;
    }

    setamount(value: number) {
        this.amount = value;
    }

    getdate(): string {
        return this.date;
    }

    setdate(value: string) {
        this.date = value;
    }
    // toString(){
    //     console.table(` Mã hàng ${this.id}, Tên hàng ${this.name}, Loại hàng ${this.type}, Giá ${this.price}, Số lượng ${this.amount}, Ngày tạo ${this.date} `)
    // }
}
