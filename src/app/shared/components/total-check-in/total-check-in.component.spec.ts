import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCheckInComponent } from './total-check-in.component';

describe('TotalCheckInComponent', () => {
  let component: TotalCheckInComponent;
  let fixture: ComponentFixture<TotalCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCheckInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
