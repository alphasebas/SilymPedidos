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
  efectivo(folio:any,obsCob:string){
    this.FolioInterno=folio;
    this.tipoCobranza='Efectivo';
    this.observCob=obsCob;
    this.updateCobranza();
  }
  factura(folio:any,obsCob:string){
    this.FolioInterno=folio;
    this.tipoCobranza='Factura';
    this.observCob=obsCob;
    this.updateCobranza();
  }
  contraRecibo(folio:any,obsCob:string){
    this.FolioInterno=folio;
    this.tipoCobranza='ContraRecibo';
    this.observCob=obsCob;
    this.updateCobranza();
  }
  noEntregado(folio:any,obsCob:string){
    this.FolioInterno=folio;
    this.tipoCobranza='NoEntregado';
    this.observCob=obsCob;
    this.updateCobranza();
  }
  updateCobranza(){
alert("tipo: "+this.tipoCobranza+". Folio: "+this.FolioInterno+". Obs Cobranza: "+this.observCob)
    this.bdService.cobranza(this.tipoCobranza,this.FolioInterno,this.observCob).subscribe(data =>{
      this.actualizar();
    })
  }
  actualizar() {
    this.bdService.getEntregados().subscribe(data => {
      this.embarcados = data;
    });
  }

}
