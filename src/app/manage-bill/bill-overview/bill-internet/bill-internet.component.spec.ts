import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInternetComponent } from './bill-internet.component';

describe('BillInternetComponent', () => {
  let component: BillInternetComponent;
  let fixture: ComponentFixture<BillInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillInternetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
