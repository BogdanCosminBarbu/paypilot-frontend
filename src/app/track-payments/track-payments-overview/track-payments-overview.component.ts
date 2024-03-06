import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-track-payments-overview',
  templateUrl: './track-payments-overview.component.html',
  styleUrl: './track-payments-overview.component.css'
})
export class TrackPaymentsOverviewComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back(); 
  }
}
