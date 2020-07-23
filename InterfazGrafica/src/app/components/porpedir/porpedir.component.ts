import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-porpedir',
  templateUrl: './porpedir.component.html',
  styleUrls: ['./porpedir.component.css']
})
export class PorpedirComponent implements OnInit {
  pendientes: any;

  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }

  actualizar() {
    this.bdService.getPendientesCompras().subscribe(data => {
      this.pendientes = data;
    });
  }

  pedido(fechaE:string,folio:string,estado:string){
    if (fechaE !== '') {
      this.bdService.pedidoCompras(fechaE,folio,estado).subscribe(data => {
        this.actualizar();
        console.log(data);
      });
    } else {
    alert(' Es necesario llenar el campo Fecha de Entregado');
    }

  }
}
