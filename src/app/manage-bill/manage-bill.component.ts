import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-bill',
  templateUrl: './manage-bill.component.html',
  styleUrl: './manage-bill.component.css'
})
export class ManageBillComponent {
  
  constructor(private router: Router) { }

  goToMHome(): void {
    this.router.navigate(['/']);
  }
}
