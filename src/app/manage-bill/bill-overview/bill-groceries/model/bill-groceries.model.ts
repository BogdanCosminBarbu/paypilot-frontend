import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillGroceries {
  billId: number;
  billName: string;
  billCategory: string;
  slNo: number;
  month: number;
  amount: number;
  reminderSettings: ReminderSettings;
}