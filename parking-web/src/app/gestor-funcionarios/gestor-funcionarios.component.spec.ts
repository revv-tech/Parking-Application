import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorFuncionariosComponent } from './gestor-funcionarios.component';

describe('GestorFuncionariosComponent', () => {
  let component: GestorFuncionariosComponent;
  let fixture: ComponentFixture<GestorFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
