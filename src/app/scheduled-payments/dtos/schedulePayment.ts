export interface SchedulePayment {
    id:number;
    amountToPay: number;
    nameOfTheBill: string;
    billDate : string;
    nextPaymentDate: string;
}