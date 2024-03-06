import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPaymentsOverviewComponent } from './track-payments-overview.component';

describe('TrackPaymentsOverviewComponent', () => {
  let component: TrackPaymentsOverviewComponent;
  let fixture: ComponentFixture<TrackPaymentsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackPaymentsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPaymentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
