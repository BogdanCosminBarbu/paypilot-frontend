import { Component, OnInit } from '@angular/core';
import { BillInternet } from './model/bill-internet.model';
import { BillInternetService } from './bill-internet.service';
import { Router } from '@angular/router';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-bill-internet',
  templateUrl: './bill-internet.component.html',
  styleUrls: ['./bill-internet.component.css']
})
export class BillInternetComponent implements OnInit {
  bills: Bill[] = [];

  constructor(private billInternetService: BillInternetService, private router: Router) {}

  ngOnInit(): void {
    this.billInternetService.getAll().subscribe(
      data => this.bills = data 
    );
  }

  goBackToBillOverview(): void {
    this.router.navigateByUrl('/bill-overview');
  }
}