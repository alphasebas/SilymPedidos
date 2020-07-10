import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crearpedido',
  templateUrl: './crearpedido.component.html',
  styleUrls: ['./crearpedido.component.css']
})
export class CrearpedidoComponent implements OnInit {
  pedidoform;
  clientei: string;
  fechallegada: string;
  oc: string;
  fechadeseada: string;
  observaciones: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const temp = new Date().toISOString().slice(0, 16);´
    console.log(temp);
  }

}
