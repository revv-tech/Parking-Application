import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnFuncionarioComponent } from './un-funcionario.component';

describe('UnFuncionarioComponent', () => {
  let component: UnFuncionarioComponent;
  let fixture: ComponentFixture<UnFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
