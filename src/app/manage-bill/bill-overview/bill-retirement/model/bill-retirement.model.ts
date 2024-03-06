import { ReminderSettings } from "../../../../notification/model/reminderSettings.model";

export interface BillRetirement {
  billId: number;
  billName: string;
  billCategory: string;
  dueDate: string;
  notes: string;
  isRecurrent: boolean;
  slNo: number;
  month: number;
  amount: number;
  reminderSettings: ReminderSettings;
}