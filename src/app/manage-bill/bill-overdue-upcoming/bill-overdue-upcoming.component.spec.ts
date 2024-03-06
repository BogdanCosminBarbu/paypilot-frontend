import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOverdueUpcomingComponent } from './bill-overdue-upcoming.component';

describe('BillOverdueUpcomingComponent', () => {
  let component: BillOverdueUpcomingComponent;
  let fixture: ComponentFixture<BillOverdueUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillOverdueUpcomingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillOverdueUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
