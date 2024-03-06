import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-bill',
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent {
  constructor(private router: Router) { }

  goToMHome(): void {
    this.router.navigate(['/']);
  }
}
