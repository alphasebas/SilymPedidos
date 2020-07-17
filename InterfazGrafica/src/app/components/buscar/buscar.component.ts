import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  busquedaFI:boolean=false;
  busquedaC:boolean=false;
  busquedaF:boolean=false;
  resFI:any
  resC:any
  resF:any
  encontradoFI=false;
  encontradoC=false;
  encontradoF=false;
  constructor(private bdService: BdService ) { }

  ngOnInit(): void {
  }
  buscarFI(busqueda:string){
    this.bdService.getFolio(busqueda).subscribe(data =>{
      this.resFI = data;
      this.encontradoFI=true;
    })
  }
  buscarC(busqueda:string){
    this.bdService.getCliente(busqueda).subscribe(data =>{
      this.resC = data;

      this.encontradoC=true;
    })
  }
  buscarF(fechaDe:string,fechaHasta:string){
    this.bdService.getFechaEntregados(fechaDe,fechaHasta).subscribe(data =>{
      this.resF = data;

      this.encontradoF=true;
    })
  }

  toggle(valor:string){
    if(valor=='FI'){
      this.busquedaFI = !this.busquedaFI;
      this.encontradoFI=false;
    }

    if(valor=='C'){
      this.busquedaC = !this.busquedaC;
      this.encontradoC=false;
    }

    if(valor=='F'){
      this.busquedaF = !this.busquedaF;
      this.encontradoF=false;
    }
  }
}
