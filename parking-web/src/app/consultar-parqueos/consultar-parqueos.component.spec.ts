import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarParqueosComponent } from './consultar-parqueos.component';

describe('ConsultarParqueosComponent', () => {
  let component: ConsultarParqueosComponent;
  let fixture: ComponentFixture<ConsultarParqueosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarParqueosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarParqueosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
