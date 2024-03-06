import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification.service';
import { Notification } from './notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {
    this.notificationService = notificationService;
    this.notifications = [];
   }

   ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }
}
