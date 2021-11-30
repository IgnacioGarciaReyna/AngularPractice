import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudorComponent } from './deudor.component';

describe('DeudorComponent', () => {
  let component: DeudorComponent;
  let fixture: ComponentFixture<DeudorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
