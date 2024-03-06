// bill-retirement.component.ts
import { Component, OnInit } from '@angular/core';

import { BillRetirementService } from './bill-retirement.service';
import { BillRetirement } from './model/bill-retirement.model';
import { Router } from '@angular/router';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bill-retirement',
  templateUrl: './bill-retirement.component.html',
  styleUrls: ['./bill-retirement.component.css']
})
export class BillRetirementComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billRetirementService : BillRetirementService, private router: Router) {}

  ngOnInit(): void {
    this.billRetirementService.getAll().subscribe(
      data => this.bills = data 
    );
  }

  goBackToBillOverview(): void {
    this.router.navigateByUrl('/bill-overview');
  }
}
