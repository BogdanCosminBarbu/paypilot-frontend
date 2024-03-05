import { Component, OnInit } from '@angular/core';
import { ScheduledPaymentsService } from './scheduled-payments.service';

@Component({
  selector: 'app-scheduled-payments',
  templateUrl: './scheduled-payments.component.html',
  styleUrls: ['./scheduled-payments.component.css']
})
export class ScheduledPaymentsComponent implements OnInit {
  scheduledPayments: any;

  constructor(private scheduledPaymentsService: ScheduledPaymentsService) { }

  ngOnInit(): void {
  }
}
