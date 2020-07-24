import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcomprasComponent } from './buscarcompras.component';

describe('BuscarcomprasComponent', () => {
  let component: BuscarcomprasComponent;
  let fixture: ComponentFixture<BuscarcomprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarcomprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
