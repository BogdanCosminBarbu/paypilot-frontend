import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from './service/share-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-bill',
  templateUrl: './manage-bill.component.html',
  styleUrl: './manage-bill.component.css'
})
export class ManageBillComponent implements OnDestroy{
  successMessage: string | undefined;
  private subscription: Subscription;
  
  constructor(private router: Router, private shareService: ShareServiceService) {
    this.subscription = this.shareService.successMessage$.subscribe(message => {
      this.successMessage = message;
    });
   }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  goToMHome(): void {
    this.router.navigate(['/']);
  }
}
