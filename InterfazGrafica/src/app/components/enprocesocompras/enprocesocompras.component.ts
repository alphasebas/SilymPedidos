import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-enprocesocompras',
  templateUrl: './enprocesocompras.component.html',
  styleUrls: ['./enprocesocompras.component.css']
})
export class EnprocesocomprasComponent implements OnInit {
  enProceso:any;
  tipo: string;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
    this.tipo = this.bdService.getTipoUsuario();
  }
  Pendiente(folio: string) {
    this.bdService.updateenProcesoc(folio, 'Pendiente').subscribe(data => {
      this.actualizar();
    });
  }
  Pedido(folio: string) {
    this.bdService.updateenProcesoc(folio, 'Pedido').subscribe(data => {
      this.actualizar();
    });
  }
  actualizar() {
    this.bdService.getEnProcesoCompras().subscribe(data => {
      this.enProceso = data;
    });
  }
}
