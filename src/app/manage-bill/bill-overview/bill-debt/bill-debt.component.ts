// bill-debt.component.ts
import { Component, OnInit } from '@angular/core';
import { BillDebt } from './model/bill-debt.model';
import { BillDebtService } from './bill-debt.service';

@Component({
  selector: 'app-bill-debt',
  templateUrl: './bill-debt.component.html',
  styleUrls: ['./bill-debt.component.css']
})
export class BillDebtComponent implements OnInit {
  bills: BillDebt[] = [];

  constructor(private billDebtService: BillDebtService) {}

  ngOnInit(): void {
    this.billDebtService.getAll().subscribe(
      data => this.bills = data 
    );
  }
}