import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorreservasComponent } from './gestorreservas.component';

describe('GestorreservasComponent', () => {
  let component: GestorreservasComponent;
  let fixture: ComponentFixture<GestorreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorreservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
