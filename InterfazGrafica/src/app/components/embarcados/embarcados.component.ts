import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-embarcados',
  templateUrl: './embarcados.component.html',
  styleUrls: ['./embarcados.component.css']
})
export class EmbarcadosComponent implements OnInit {
  embarcados: any;
  chofer: boolean;
  fecha: boolean;
  color: string;
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }
  surtidof(surtio: string, estado: string , folio: string) {
    // tslint:disable-next-line: max-line-length
    if (estado === 'Facturado' || estado === 'Surtido' || estado === 'NoEntregado' || estado === 'ParcialEmb-Ent' || estado === 'ParcialEmb-NE') {
      if (surtio === '') {
        alert('Esta vacio el surtidor');
      } else {
        this.bdService.surtir(folio, 'Surtido' , surtio).subscribe(data => {
          this.actualizar();
        });
      }

    // tslint:disable-next-line: max-line-length
    } else if (estado === 'ParcialFact-NE' || estado === 'ParcialFact-ParcialEmb-NE' || estado === 'ParcialFact-Surtido' || estado === 'ParcialFact' || estado === 'ParcialFact-ParcialEmb-Ent') {
      if (surtio === '') {
        alert('Esta vacio el surtidor');
      } else {
        this.bdService.surtir(folio, 'ParcialFact-Surtido' , surtio).subscribe(data => {
          this.actualizar();
        });
      }
    }

  }
  parcialf(estado: string, surtio: string, obsAlmacen: string, fechaEmbarcada: string, chofer: string, folio: string) {
    if (chofer !== '' && fechaEmbarcada !== '' && surtio !== '') {
      const embarcador = this.bdService.getUsuario();
      // tslint:disable-next-line: max-line-length
      if (estado === 'Facturado' || estado === 'Surtido' || estado === 'NoEntregado' || estado === 'ParcialEmb-Ent' || estado === 'ParcialEmb-NE' ) {
        this.bdService.parcialEmbarcado(folio, 'ParcialEmb' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      // tslint:disable-next-line: max-line-length
      } else if (estado === 'ParcialFact' || estado === 'ParcialFact-NE' || estado === 'ParcialFact-ParcialEmb-NE' || estado === 'ParcialFact-Surtido' || estado === 'ParcialFact-ParcialEmb-Ent') {
        this.bdService.parcialEmbarcado(folio, 'ParcialFact-ParcialEmb' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      }
    } else {
      alert('Hay campos vacios por favor completalos');
    }
  }
  embarcadof(estado: string, surtio: string, obsAlmacen: string, fechaEmbarcada: string, chofer: string, folio: string) {
    if (chofer !== '' && fechaEmbarcada !== '' && surtio !== '') {
      const embarcador = this.bdService.getUsuario();
      // tslint:disable-next-line: max-line-length
      if (estado === 'Facturado' || estado === 'Surtido' || estado === 'NoEntregado' || estado === 'ParcialEmb-Ent' || estado === 'ParcialEmb-NE') {
        this.bdService.parcialEmbarcado(folio, 'Embarcado' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      // tslint:disable-next-line: max-line-length
      } else if (estado === 'ParcialFact' || estado === 'ParcialFact-Surtido' || estado === 'ParcialFact-NE' || estado === 'ParcialFact-ParcialEmb-NE' || estado === 'ParcialFact-ParcialEmb-Ent') {
        this.bdService.parcialEmbarcado(folio, 'ParcialFact-Emb' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      }
    } else {
      alert('Hay campos vacios por favor completalos');
    }
  }
  actualizar() {
    this.bdService.getporEmbarcar().subscribe(data => {
      this.embarcados = data;
    });
  }
  colores(estado: string) {
    if (estado === 'Facturado' || estado === 'Surtido' || estado === 'ParcialFact' || estado === 'ParcialFact-Surtido') {
      this.color = 'Amarillo';
    // tslint:disable-next-line: max-line-length
    } else if (estado === 'NoEntregado' || estado === 'ParcialFact-NE' || estado === 'ParcialEmb-NE' || estado === 'ParcialFact-ParcialEmb-NE') {
      this.color = 'Rojo';
    } else {
      this.color = 'Verde';
    }
  }
}
