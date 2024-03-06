export class Notification {
    id: number;
    //de modificat in Bill type ul 
    bill: string;
    message: string;

    constructor(id:number,bill:string,message:string){
        this.id = id;
        this.bill = bill;
        this.message = message;
    }


}