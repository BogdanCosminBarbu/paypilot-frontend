import { Component, OnInit } from '@angular/core';
import { TrackPaymentsComponent } from '../track-payments.component';
import { Router } from 'express';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track-payments-history',
  templateUrl: './track-payments-history.component.html',
  styleUrl: './track-payments-history.component.css'
})
export class TrackPaymentsHistoryComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back(); 
  }
}
