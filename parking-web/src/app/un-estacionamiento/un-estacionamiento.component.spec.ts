import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnEstacionamientoComponent } from './un-estacionamiento.component';

describe('UnEstacionamientoComponent', () => {
  let component: UnEstacionamientoComponent;
  let fixture: ComponentFixture<UnEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnEstacionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
