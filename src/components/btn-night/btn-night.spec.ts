import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnNight } from './btn-night';

describe('BtnNight', () => {
  let component: BtnNight;
  let fixture: ComponentFixture<BtnNight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnNight],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnNight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
