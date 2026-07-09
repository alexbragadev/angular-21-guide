import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxControl } from './flux-control';

describe('FluxControl', () => {
  let component: FluxControl;
  let fixture: ComponentFixture<FluxControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxControl],
    }).compileComponents();

    fixture = TestBed.createComponent(FluxControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
