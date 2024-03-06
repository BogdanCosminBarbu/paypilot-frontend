import { Component } from '@angular/core';
import { BillOverview } from '../../BillOverview';
import { BillOverviewService } from '../../bill-overview.service';
import dayjs from 'dayjs';


@Component({
  selector: 'app-bill-overview',
  templateUrl: './bill-overview.component.html',
  styleUrl: './bill-overview.component.css'
})
export class BillOverviewComponent {

  public constructor(private service: BillOverviewService){}

  public billOverview: BillOverview = new BillOverview();
  billOverviewMap: Map<string, number> = new Map();
  billCategory: string | undefined;
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  billStatus: string | undefined;

  ngOnInit(): void {
    // Call the backend service to fetch bill overview
    
  }



  public onSubmit() {
    this.billOverview.billCategory = this.billCategory;
    this.billOverview.billStatus = this.billStatus;
    this.billOverview.dateFrom = this.dateFrom;
    this.billOverview.dateTo = this.dateTo;
    
    // const formattedDateFrom = this.dateFrom ? dayjs(this.dateFrom).format('YYYY-MM-DD') : undefined;
    // const formattedDateTo = this.dateTo ? dayjs(this.dateTo).format('YYYY-MM-DD') : undefined;
    // this.service.getOverviews(
    //   {
    //     billCategory : this.billCategory,
    //     dateFrom : formattedDateFrom,
    //     dateTo : formattedDateTo,
    //     //billDateTo : this.datePipe.transform(this.dateTo,'yyyy-MM-dd'),
    //     billStatus : this.billStatus
    //   }
    // ).subscribe(
    //   response => {
    //     console.log('Response:', response);
    //     // Handle response if needed
    //   },
    //   error => {
    //     console.error('Error:', error);
    //     // Handle error if needed
    //   }
    // );
    this.service.getOverviews(this.billOverview).subscribe(
      (data: Map<string, number>) => {
        this.billOverviewMap = data;
      },
      error => {
        console.error('Error fetching bill overview:', error);
      }
    );
  }
}