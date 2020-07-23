import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {
  crearform: any;
  clientei:string;
  constructor(private formBuilder: FormBuilder, private bdService: BdService) {
    this.crearform = this.formBuilder.group({
      clientei: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  agregar() {

    this.bdService.addCliente(this.clientei).subscribe(data => {
      alert('Agregado Con exito');
      this.limpiar();
    });
  }

  limpiar() {
    this.clientei = '';
  }
}
