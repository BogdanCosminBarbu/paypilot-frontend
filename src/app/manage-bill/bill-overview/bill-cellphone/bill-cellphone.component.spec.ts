import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCellphoneComponent } from './bill-cellphone.component';

describe('BillCellphoneComponent', () => {
  let component: BillCellphoneComponent;
  let fixture: ComponentFixture<BillCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillCellphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
