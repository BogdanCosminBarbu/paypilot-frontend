import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRentComponent } from './bill-rent.component';

describe('BillRentComponent', () => {
  let component: BillRentComponent;
  let fixture: ComponentFixture<BillRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillRentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
