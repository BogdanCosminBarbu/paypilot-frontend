import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPaymentsHistoryComponent } from './track-payments-history.component';

describe('TrackPaymentsHistoryComponent', () => {
  let component: TrackPaymentsHistoryComponent;
  let fixture: ComponentFixture<TrackPaymentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackPaymentsHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPaymentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
