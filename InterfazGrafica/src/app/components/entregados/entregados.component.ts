import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-entregados',
  templateUrl: './entregados.component.html',
  styleUrls: ['./entregados.component.css']
})
export class EntregadosComponent implements OnInit {
  embarcados:any;
  botones:boolean;
  tipoCobranza:string;
  FolioInterno:string;
  observCob:string;
  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getEntregados().subscribe(data =>{
      this.embarcados = data;
    });

  }

  updateCobranza(folio:string,obsCob:string,tipoCobranza:string){

    alert("tipo: "+tipoCobranza+". Folio: "+folio+". Obs Cobranza: "+obsCob)
    this.bdService.cobranza(tipoCobranza,folio,obsCob).subscribe(data =>{
      this.actualizar();
    })
  }
  actualizar() {
    this.bdService.getEntregados().subscribe(data => {
      this.embarcados = data;
    });
  }

}
