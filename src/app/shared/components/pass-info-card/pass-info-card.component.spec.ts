import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassInfoCardComponent } from './pass-info-card.component';

describe('PassInfoCardComponent', () => {
  let component: PassInfoCardComponent;
  let fixture: ComponentFixture<PassInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
