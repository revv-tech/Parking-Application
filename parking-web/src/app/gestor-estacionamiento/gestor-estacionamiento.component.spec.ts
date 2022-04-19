import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorEstacionamientoComponent } from './gestor-estacionamiento.component';

describe('GestorEstacionamientoComponent', () => {
  let component: GestorEstacionamientoComponent;
  let fixture: ComponentFixture<GestorEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorEstacionamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
