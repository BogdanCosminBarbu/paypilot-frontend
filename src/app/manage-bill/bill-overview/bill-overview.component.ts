import { Component } from '@angular/core';
import { BillOverview } from '../../BillOverview';
import { BillOverviewService } from '../../bill-overview.service';

@Component({
  selector: 'app-bill-overview',
  templateUrl: './bill-overview.component.html',
  styleUrl: './bill-overview.component.css'
})
export class BillOverviewComponent {

  public constructor(private service: BillOverviewService){}

  public billOverview: any = [];


  public onSubmit() {
    this.service.getOverviews().subscribe(data => this.billOverview = data)
  }

}
