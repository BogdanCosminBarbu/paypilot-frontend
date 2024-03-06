import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillDebt {
  billId: number;
  billName: string;
  billCategory: string;
  amount: number;
  slNo: number;
  month: number;
  monthlyEMI: number;
  totalLoan: number;
  billLoanType: string;
  from: string;
  to: string;
  dueDate: string;
  reminderSettings: ReminderSettings;
}