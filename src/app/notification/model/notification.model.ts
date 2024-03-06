import { Bill } from "../../manage-bill/model/bill.model";

export class Notification {
    id: number;
    //de modificat in Bill type ul 
    bill: Bill;
    message: string;

    constructor(id:number,bill:Bill,message:string){
        this.id = id;
        this.bill = bill;
        this.message = message;
    }


}