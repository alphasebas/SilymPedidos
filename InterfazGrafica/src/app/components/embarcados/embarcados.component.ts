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
  constructor(private bdService: BdService) { }

  ngOnInit(): void {
    this.actualizar();
  }
  surtidof(surtio: string, estado: string , folio: string) {
    if (surtio === '') {
      alert('Esta vacio el surtidor');
    } else {
      if (estado === 'Facturado') {
        this.bdService.surtir(folio, 'Surtido' , surtio).subscribe(data => {
          this.actualizar();
        });
      } else if (estado === 'ParcialFacturado') {
        this.bdService.surtir(folio, 'ParcialFact-Surtido' , surtio).subscribe(data => {
          this.actualizar();
        });
      } else if (estado === 'ParcialFact-Ent' || estado === 'ParcialFact-Emb') {
        this.bdService.surtir(folio, 'ParcialFact-Surtido' , surtio).subscribe(data => {
          this.actualizar();
        });
      }
    }
  }
  parcialf(estado: string, surtio: string, obsAlmacen: string, fechaEmbarcada: string, chofer: string, folio: string) {
    if (chofer !== '' && fechaEmbarcada !== '' && surtio !== '') {
      const embarcador = this.bdService.getUsuario();
      if (estado === 'Facturado') {
        this.bdService.parcialEmbarcado(folio, 'ParcialEmb' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      } else if (estado === 'ParcialFacturado' || estado === 'ParcialFact-Surtido' || estado === 'ParcialFact-Ent') {
        this.bdService.parcialEmbarcado(folio, 'ParcialFac-ParcialEmb' , surtio, chofer, obsAlmacen,
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
      if (estado === 'Facturado' || estado === 'Surtido') {
        this.bdService.parcialEmbarcado(folio, 'Embarcado' , surtio, chofer, obsAlmacen,
        embarcador, fechaEmbarcada).subscribe(data => {
          this.actualizar();
        });
      } else if (estado === 'ParcialFacturado' || estado === 'ParcialFact-Surtido' || estado === 'ParcialFact-Ent') {
        this.bdService.parcialEmbarcado(folio, 'ParcialFac-Emb' , surtio, chofer, obsAlmacen,
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
}
