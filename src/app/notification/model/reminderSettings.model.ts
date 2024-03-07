export class ReminderSettings {
    id !: number;
    active !: boolean;
    reminderFrequency !: string;
    reminderStartDate !: Date;
    message !: string;
    notificationByEmail !: boolean;
    notificationInApp !: boolean;
}