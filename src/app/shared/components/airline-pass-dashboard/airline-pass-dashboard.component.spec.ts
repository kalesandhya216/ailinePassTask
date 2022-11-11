import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePassDashboardComponent } from './airline-pass-dashboard.component';

describe('AirlinePassDashboardComponent', () => {
  let component: AirlinePassDashboardComponent;
  let fixture: ComponentFixture<AirlinePassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinePassDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlinePassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
