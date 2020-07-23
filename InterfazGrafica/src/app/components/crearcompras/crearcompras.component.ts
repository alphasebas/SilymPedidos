import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crearcompras',
  templateUrl: './crearcompras.component.html',
  styleUrls: ['./crearcompras.component.css']
})
export class CrearcomprasComponent implements OnInit {
  comprasform;
  provi: string;
  fechadeseada: string;
  productos = '';
  tipo = 'Stock';
  radio: string;
  constructor(private formBuilder: FormBuilder, private bdService: BdService) {
   }

  ngOnInit(): void {
  }
  crear(clientei: string) {
    const user = this.bdService.getUsuario();
    this.bdService.crearCompra(this.provi, this.fechadeseada, clientei, this.tipo, this.productos, user).subscribe(data => {
      alert('Creado con exito');
    });
  }
  setTipo(tipo: string) {
    this.tipo = tipo;
  }

}
