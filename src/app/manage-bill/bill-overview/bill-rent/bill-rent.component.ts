// bill-rent.component.ts
import { Component, OnInit } from '@angular/core';
import { BillRent } from './model/bill-rent.model';
import { BillRentService } from './bill-rent.service';

@Component({
  selector: 'app-bill-rent',
  templateUrl: './bill-rent.component.html',
  styleUrls: ['./bill-rent.component.css']
})
export class BillRentComponent implements OnInit {
  bills: BillRent[] = [];

  constructor(private billRentService: BillRentService) {}

  ngOnInit(): void {
    this.billRentService.getAll().subscribe(
      data => this.bills = data 
    );
  }
}
