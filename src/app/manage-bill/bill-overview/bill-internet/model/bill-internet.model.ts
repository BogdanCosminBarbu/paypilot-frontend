import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillInternet {
  billId: number;
  billName: string;
  billCategory: string;
  amount: number;
  slNo: number;
  month: number;
  from: string;
  to: string;
  dueDate: string;
  reminderSettings: ReminderSettings;
}