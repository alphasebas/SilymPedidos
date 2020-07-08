import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnprocesoComponent } from './enproceso.component';

describe('EnprocesoComponent', () => {
  let component: EnprocesoComponent;
  let fixture: ComponentFixture<EnprocesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnprocesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnprocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
