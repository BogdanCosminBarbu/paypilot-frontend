import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDebtComponent } from './bill-debt.component';

describe('BillDebtComponent', () => {
  let component: BillDebtComponent;
  let fixture: ComponentFixture<BillDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillDebtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
