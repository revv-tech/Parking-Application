import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorReservasComponent } from './gestor-reservas.component';

describe('GestorReservasComponent', () => {
  let component: GestorReservasComponent;
  let fixture: ComponentFixture<GestorReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
