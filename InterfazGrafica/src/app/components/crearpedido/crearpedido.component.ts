import { BdService } from 'src/app/services/bd.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearpedido',
  templateUrl: './crearpedido.component.html',
  styleUrls: ['./crearpedido.component.css']
})
export class CrearpedidoComponent implements OnInit {
  pedidoform;
  clientei: string;
  fechallegada: string;
  oc = '';
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
  }
  crear() {
    this.bdService.crearPedido(this.clientei, this.fechallegada, this.oc, this.fechadeseada, this.observaciones).subscribe(data => {
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
