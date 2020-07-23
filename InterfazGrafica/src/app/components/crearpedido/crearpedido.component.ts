import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-crearpedido',
  templateUrl: './crearpedido.component.html',
  styleUrls: ['./crearpedido.component.css']
})
export class CrearpedidoComponent implements OnInit {
  pedidoform;
  myControl = new FormControl();
  clientei: string;
  fechallegada: string;
  oc = '';
  filteredOptions: Observable<string[]>;

 // clientes: string[] = ["UAA"];
  obj:any;
  clientes = new Array();
  fechadeseada: string;
  observaciones = '';

  constructor(private formBuilder: FormBuilder, private bdService: BdService) {
    this.pedidoform = this.formBuilder.group({
      clientei: ['', Validators.required],
      fechallegada: ['', Validators.required],
      fechadeseada: ['', Validators.required],
      oc: [''],
      observaciones: [''],
    });
   }

  ngOnInit(): void {
    this.bdService.getTodosClientes().subscribe(data => {
      this.obj = data
      for(let cl of this.obj){
        this.clientes.push(cl["Cliente"]);
      }


    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.clientes.filter(option => option.toLowerCase().includes(filterValue));
  }

  crear() {
    const user = this.bdService.getUsuario();
    this.bdService.crearPedido(this.clientei, this.fechallegada, this.oc, this.fechadeseada, this.observaciones, user).subscribe(data => {
      alert('Creado Con exito');
      this.limpiar();
    });
  }
  limpiar() {
    this.clientei = '';
    this.fechallegada = '';
    this.oc = '';
    this.fechadeseada = '';
    this.observaciones = '';
  }



}
