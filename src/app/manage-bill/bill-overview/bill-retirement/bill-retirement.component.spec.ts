import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillRetirementComponent } from './bill-retirement.component';

describe('BillRetirementComponent', () => {
  let component: BillRetirementComponent;
  let fixture: ComponentFixture<BillRetirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillRetirementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
