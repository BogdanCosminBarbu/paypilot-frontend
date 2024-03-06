// bill-rent.component.ts
import { Component, OnInit } from '@angular/core';
import { BillRent } from './model/bill-rent.model';
import { BillRentService } from './bill-rent.service';
import { Router } from '@angular/router';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bill-rent',
  templateUrl: './bill-rent.component.html',
  styleUrls: ['./bill-rent.component.css']
})
export class BillRentComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billRentService: BillRentService, private router: Router) {}

  ngOnInit(): void {
    this.billRentService.getAll().subscribe(
      data => this.bills = data 
    );
  }

  goBackToBillOverview(): void {
    this.router.navigateByUrl('/bill-overview');
  }
}
