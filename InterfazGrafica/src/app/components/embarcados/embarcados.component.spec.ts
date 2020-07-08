import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcadosComponent } from './embarcados.component';

describe('EmbarcadosComponent', () => {
  let component: EmbarcadosComponent;
  let fixture: ComponentFixture<EmbarcadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbarcadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarcadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
