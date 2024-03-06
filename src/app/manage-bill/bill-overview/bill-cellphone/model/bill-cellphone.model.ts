import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillCellphone {
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