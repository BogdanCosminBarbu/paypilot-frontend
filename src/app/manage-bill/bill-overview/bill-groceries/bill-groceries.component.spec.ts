import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGroceriesComponent } from './bill-groceries.component';

describe('BillGroceriesComponent', () => {
  let component: BillGroceriesComponent;
  let fixture: ComponentFixture<BillGroceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillGroceriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
