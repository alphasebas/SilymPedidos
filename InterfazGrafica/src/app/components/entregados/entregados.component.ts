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
  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getEntregados().subscribe(data =>{
      this.embarcados = data;
      console.log(this.embarcados);
    });

  }
  efectivo(folio:any){

  }
  factura(folio:any){

  }
  contraRecibo(folio:any){

  }

}
