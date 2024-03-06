// bill-debt.component.ts
import { Component, OnInit } from '@angular/core';
import { BillDebt } from './model/bill-debt.model';
import { BillDebtService } from './bill-debt.service';
import { Router } from '@angular/router';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bill-debt',
  templateUrl: './bill-debt.component.html',
  styleUrls: ['./bill-debt.component.css']
})
export class BillDebtComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billDebtService: BillDebtService, private router: Router) {}

  ngOnInit(): void {
    this.billDebtService.getAll().subscribe(
      data => this.bills = data 
    );
  }

  goBackToBillOverview(): void {
    this.router.navigateByUrl('/bill-overview');
  }
}