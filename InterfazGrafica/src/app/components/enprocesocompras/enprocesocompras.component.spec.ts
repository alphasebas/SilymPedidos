import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnprocesocomprasComponent } from './enprocesocompras.component';

describe('EnprocesocomprasComponent', () => {
  let component: EnprocesocomprasComponent;
  let fixture: ComponentFixture<EnprocesocomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnprocesocomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnprocesocomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
