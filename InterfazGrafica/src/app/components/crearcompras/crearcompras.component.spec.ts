import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcomprasComponent } from './crearcompras.component';

describe('CrearcomprasComponent', () => {
  let component: CrearcomprasComponent;
  let fixture: ComponentFixture<CrearcomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
