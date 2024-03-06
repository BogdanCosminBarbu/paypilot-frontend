import { Component, OnInit } from '@angular/core';
import { BillGroceries } from './model/bill-groceries.model';
import { BillGroceriesService } from './bill-groceries.service';
import { Router } from '@angular/router';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bill-groceries',
  templateUrl: './bill-groceries.component.html',
  styleUrls: ['./bill-groceries.component.css']
})
export class BillGroceriesComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billGroceriesService: BillGroceriesService, private router: Router) {}

  ngOnInit(): void {
    this.billGroceriesService.getAll().subscribe(
      data => this.bills = data 
    );
  }

  goBackToBillOverview(): void {
    this.router.navigateByUrl('/bill-overview');
  }
}