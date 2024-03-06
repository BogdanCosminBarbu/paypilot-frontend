import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPaymentsProgressComponent } from './track-payments-progress.component';

describe('TrackPaymentsProgressComponent', () => {
  let component: TrackPaymentsProgressComponent;
  let fixture: ComponentFixture<TrackPaymentsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackPaymentsProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPaymentsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
