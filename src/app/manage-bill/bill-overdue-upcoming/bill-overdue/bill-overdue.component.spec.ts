import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOverdueComponent } from './bill-overdue.component';

describe('BillOverdueComponent', () => {
  let component: BillOverdueComponent;
  let fixture: ComponentFixture<BillOverdueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillOverdueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
