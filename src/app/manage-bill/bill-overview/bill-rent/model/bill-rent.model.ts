import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillRent {
  billId: number;
  billName: string;
  billCategory: string;
  slNo: number;
  month: number;
  from: string;
  to: string;
  amount: number;
  dueDate: string;
  reminderSettings: ReminderSettings;
}