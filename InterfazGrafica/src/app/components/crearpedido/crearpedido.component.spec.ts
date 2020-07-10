import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpedidoComponent } from './crearpedido.component';

describe('CrearpedidoComponent', () => {
  let component: CrearpedidoComponent;
  let fixture: ComponentFixture<CrearpedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
