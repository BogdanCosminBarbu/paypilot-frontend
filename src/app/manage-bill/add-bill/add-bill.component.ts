import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../model/bill.model';
import { AddBillService } from '../service/add-bill.service';
import { ShareServiceService } from '../service/share-service.service';


@Component({
  selector: 'add-bill',
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent implements OnInit{

  bill !:Bill;
  flag: boolean = false;

  constructor(private router: Router, private service: AddBillService, private shareService: ShareServiceService) {
   
   }
  ngOnInit(): void {
    this.bill = new Bill();
    this.bill.isRecurrent  = false;
  }

  goToMHome(): void {
    this.router.navigate(['/']);
  }

  addBill(){
    this.service.addBill(this.bill).subscribe(data =>{
      console.log("Bill added");
      //this.flag = !this.flag;
      this.shareService.setSuccessMessage('Bill saved successfully!');
    })
  }


}
