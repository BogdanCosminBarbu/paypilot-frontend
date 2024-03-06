import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillUpcomingComponent } from './bill-upcoming.component';

describe('BillUpcomingComponent', () => {
  let component: BillUpcomingComponent;
  let fixture: ComponentFixture<BillUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillUpcomingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
