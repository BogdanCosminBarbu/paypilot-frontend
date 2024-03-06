import { Component } from '@angular/core';
import { BillCellphoneService } from './bill-cellphone.service';
import { BillCellphone } from './model/bill-cellphone.model';

@Component({
  selector: 'app-bill-cellphone',
  templateUrl: './bill-cellphone.component.html',
  styleUrl: './bill-cellphone.component.css'
})
export class BillCellphoneComponent {
  bills: BillCellphone[] = [];

  constructor(private billCellphoneService: BillCellphoneService) {}

  ngOnInit(): void {
    this.billCellphoneService.getAll().subscribe(
      data => this.bills = data 
    )
  }
}
