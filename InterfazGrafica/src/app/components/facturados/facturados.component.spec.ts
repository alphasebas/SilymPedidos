import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturadosComponent } from './facturados.component';

describe('FacturadosComponent', () => {
  let component: FacturadosComponent;
  let fixture: ComponentFixture<FacturadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
