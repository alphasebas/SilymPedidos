import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorrecibirComponent } from './porrecibir.component';

describe('PorrecibirComponent', () => {
  let component: PorrecibirComponent;
  let fixture: ComponentFixture<PorrecibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorrecibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorrecibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
