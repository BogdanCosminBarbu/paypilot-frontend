import { Component, OnInit } from '@angular/core';
import { BillInternet } from './model/bill-internet.model';
import { BillInternetService } from './bill-internet.service';

@Component({
  selector: 'app-bill-internet',
  templateUrl: './bill-internet.component.html',
  styleUrls: ['./bill-internet.component.css']
})
export class BillInternetComponent implements OnInit {
  bills: BillInternet[] = [];

  constructor(private billInternetService: BillInternetService) {}

  ngOnInit(): void {
    this.billInternetService.getAll().subscribe(
      data => this.bills = data 
    );
  }
}