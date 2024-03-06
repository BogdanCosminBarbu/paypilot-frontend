export class ReminderSettings {
    id: number;
    active: boolean;
    reminderFrequency: string;
    reminderStartDate: Date;
    message: string;
    notificationByEmail: boolean;
    notificationInApp: boolean;
 
    constructor(id: number, active: boolean, reminderFrequency: string, reminderStartDate: Date, message: string,notificationByEmail: boolean, notificationInApp: boolean){
        this.id = id;
        this.active = active;
        this.reminderFrequency = reminderFrequency;
        this.reminderStartDate = reminderStartDate;
        this.message = message;
        this.notificationByEmail = notificationByEmail;
        this.notificationInApp = notificationInApp;
    }
 
}