import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.component.html',
  styleUrls: ['./entregados.component.css']
})
export class EntregadosComponent implements OnInit {
  embarcados: any;

  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.bdService.getporEntregar().subscribe(data => {
      this.embarcados = data;
    });

  }

  updateCobranza(folio: string, obsCob: string, tipoCobranza: string, fechaEnt: string, estado: string) {
    if (tipoCobranza !== 'NoEntregado') {
      if (fechaEnt !== '') {
        if (estado === 'Embarcado') {
          estado = 'Entregado';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialEmb') {
          estado = 'ParcialEmb-Ent';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialFact-Emb') {
          estado = 'ParcialFact-Ent';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialFact-ParcialEmb') {
          estado = 'ParcialFact-ParcialEmb-Ent';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        }
      } else {
      alert(' Es necesario llenar el campo Fecha de Entregado');
    }
    } else {
      if (obsCob !== '') {
        if (estado === 'Embarcado') {
          estado = 'NoEntregado';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialEmb') {
          estado = 'ParcialEmb-NE';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialFact-Emb') {
          estado = 'ParcialFact-NE';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        } else if (estado === 'ParcialFact-ParcialEmb') {
          estado = 'ParcialFact-ParcialEmb-NE';
          this.bdService.cobranza(folio, tipoCobranza, obsCob, fechaEnt, estado).subscribe(data => {
            this.actualizar();
          });
        }
        } else {
          alert('deja una observacion de por que no fue entregado');
        }
    }

  }
  actualizar() {
    this.bdService.getporEntregar().subscribe(data => {
      this.embarcados = data;
    });
  }

}
