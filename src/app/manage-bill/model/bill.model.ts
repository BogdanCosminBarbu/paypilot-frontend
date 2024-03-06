import { BillCategory } from "../../constants/bill-category";
import { ReminderSettings } from "../../notification/model/reminderSettings.model";

export class Bill {
  billId: number | undefined;
  billName: string | undefined;
  billCategory: BillCategory | undefined;
  dueDate: Date | undefined;
  amount: number | undefined;
  due_amount: number | null  | undefined;
  notes: string | null | undefined;
  isRecurrent: boolean | undefined;
  slNo: number | undefined;
  month: number | undefined;
  monthlyEMI: number | undefined;
  totalLoan: number | undefined;
  billStatus: string | undefined;
  billDateFrom: Date | undefined;
  billDateTo: Date | undefined;
  billLoanType: string | undefined;

  user: string | null | undefined; // add correct type;
  notificationList: string | undefined; // add correct type;
  reminderSettings: ReminderSettings | null | undefined;
}