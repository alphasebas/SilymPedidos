import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorpedirComponent } from './porpedir.component';

describe('PorpedirComponent', () => {
  let component: PorpedirComponent;
  let fixture: ComponentFixture<PorpedirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorpedirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorpedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
