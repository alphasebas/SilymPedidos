import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-enproceso',
  templateUrl: './enproceso.component.html',
  styleUrls: ['./enproceso.component.css']
})
export class EnprocesoComponent implements OnInit {
  enProceso: any;
  tipo: string;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
    this.tipo = this.bdService.getTipoUsuario();
  }
  PAf(folio: string) {
    this.bdService.updateenProceso(folio, 'PendienteAutorizar').subscribe(data => {
      this.actualizar();
    });
  }
  Autorizadof(folio: string) {
    this.bdService.updateenProceso(folio, 'Autorizado').subscribe(data => {
      this.actualizar();
    });
  }
  Facturadof(folio: string) {
    this.bdService.updateenProceso(folio, 'Facturado').subscribe(data => {
      this.actualizar();
    });
  }
  actualizar() {
    this.bdService.getEnProceso().subscribe(data => {
      this.enProceso = data;
    });
  }
}
