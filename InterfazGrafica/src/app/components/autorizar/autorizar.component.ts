import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {
  auth:boolean;
  estadoAuth:string;
  pendientes:any;
  botones=true;
  FolioInterno:string;
  constructor(private bdService:BdService) { }

  ngOnInit(): void {
    this.bdService.getporAutorizar().subscribe(data =>{
      this.pendientes = data;
      console.log(data);

    });

  }
  autorizado(folio:string){
    this.auth=true;
    this.estadoAuth='Autorizado';
    this.FolioInterno=folio;
    this.autorizacion();
  }
  noAutorizado(folio:string){
    this.auth=false;
    this.estadoAuth='NoAutorizado';
    this.FolioInterno=folio;
    this.autorizacion();
  }
  autorizacion(){

    this.botones=false
    this.bdService.autorizacion(this.estadoAuth,this.FolioInterno).subscribe(data =>{
      console.log(data);
      this.actualizar();
    })
  }
  actualizar(){
    this.bdService.getporAutorizar().subscribe(data =>{
      
      this.pendientes = data;

    });
  }

}
